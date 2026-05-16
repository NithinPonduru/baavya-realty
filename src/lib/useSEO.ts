import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  noIndex?: boolean;
  /** Optional JSON-LD structured data objects to inject per-page */
  jsonLd?: object | object[];
}

const SITE_NAME = "Bhaavya Realty";
const BASE_URL = "https://bhaavyarealty.com";
const DEFAULT_IMAGE = `${BASE_URL}/hero-realestate.png`;

const JSON_LD_ID = "seo-dynamic-jsonld";

export function useSEO({
  title,
  description,
  canonicalPath = "/",
  ogImage = DEFAULT_IMAGE,
  noIndex = false,
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    // ── Title ────────────────────────────────────────────────────
    document.title = `${title} | ${SITE_NAME}`;

    // ── Helper: upsert a <meta> tag ──────────────────────────────
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const isProperty = selector.includes("property=");
        const value = selector.match(/["']([^"']+)["']/)?.[1] ?? "";
        el.setAttribute(isProperty ? "property" : "name", value);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const canonicalUrl = `${BASE_URL}${canonicalPath}`;

    // ── Standard meta ─────────────────────────────────────────────
    setMeta('meta[name="description"]', description);
    setMeta(
      'meta[name="robots"]',
      noIndex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large"
    );

    // ── Canonical link ────────────────────────────────────────────
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // ── Open Graph ────────────────────────────────────────────────
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', ogImage);

    // ── Twitter Card ──────────────────────────────────────────────
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);

    // ── Dynamic JSON-LD (breadcrumbs, FAQ, etc.) ──────────────────
    // Remove any previous dynamic script
    document.getElementById(JSON_LD_ID)?.remove();

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      const script = document.createElement("script");
      script.id = JSON_LD_ID;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(
        schemas.length === 1 ? schemas[0] : schemas
      );
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, ogImage, noIndex, jsonLd]);
}

// ── Breadcrumb builder helper ─────────────────────────────────────
export function buildBreadcrumbSchema(
  crumbs: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${BASE_URL}${c.path}`,
    })),
  };
}
