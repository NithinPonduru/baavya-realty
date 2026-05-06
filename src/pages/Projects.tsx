import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { Download, MapPin, CheckCircle2, CalendarDays, X } from "lucide-react";

type ProjectType = "All" | "Apartments" | "Villas" | "Commercial";

interface Project {
  id: number;
  title: string;
  type: ProjectType;
  location: string;
  image: string;
  objectPosition?: string;
  brochureFile?: string;
  features: string[];
  status?: string;
}

const pdfModules = import.meta.glob("/pdfs/*.pdf", {
  eager: true,
  import: "default"
}) as Record<string, string>;

function findBrochureByFileName(fileName: string): { url: string; fileName: string } | null {
  const key = `/pdfs/${fileName}`;
  const url = pdfModules[key];
  if (!url) return null;
  return { url, fileName };
}

const projects: Project[] = [
  // APARTMENTS
  {
    id: 1,
    title: "ARKA",
    type: "Apartments",
    location: "Lanco Hills, Khajaguda",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    brochureFile: "https://drive.google.com/file/d/1XNHXS9FTjP2ImeR0qaODYXjTbItOMJzw/view?usp=share_link",
    features: [
      "9.25 acres, 75% open space",
      "6 towers, 4 cellars, 43 floors",
      "All corner flats (2220 – 4410 sq ft)",
      "VRV included",
      "75K+ sq ft amenities"
    ],
    status: "Possession: Dec 2027"
  },
  {
    id: 2,
    title: "NYLA",
    type: "Apartments",
    location: "Miyapur",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    brochureFile: "NYLA_Brochure_Big.pdf",
    features: [
      "6.02 acres, 3 towers, 35 floors",
      "2, 2.5, 3 BHK (1200 – 1800 sq ft)",
      "45K sq ft clubhouse",
      "70% open space"
    ]
  },
  {
    id: 3,
    title: "ARIA",
    type: "Apartments",
    location: "Miyapur",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=800&auto=format&fit=crop",
    brochureFile: "https://drive.google.com/file/d/1k_D5g4EkZ7X6LI3yVnvBbngzyHX545qS/view?usp=share_link",
    features: [
      "12+ acres, 7 towers (G+48)",
      "3.5 acres amenities",
      "10 lifts per block (8 units/floor)",
      "Flat floor beam structure",
      "Sizes: 1655 – 2465 sq ft"
    ],
    status: "Possession: Dec 2030"
  },
  {
    id: 4,
    title: "Sky49",
    type: "Apartments",
    location: "Ananda Prosper, Tellapur",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    brochureFile: "The_Sky 49_By_Ananda Prosper Projects.pdf",
    features: [
      "Premium High-Rise Apartments",
      "Modern amenities",
      "Strategic location"
    ]
  },
  {
    id: 5,
    title: "The Drizzle",
    type: "Apartments",
    location: "Ananda Prosper, Manikonda (Road No. 30)",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=800&auto=format&fit=crop",
    brochureFile: "Drizzle Mini Brochure-compressed.pdf",
    features: [
      "2, 2.5, 3 BHK",
      "G+16 floors, 2 clubhouses",
      "45K+ sq ft clubhouse",
      "80% open space"
    ],
    status: "Possession: End of 2026"
  },
  {
    id: 6,
    title: "Lansum El Dorado",
    type: "Apartments",
    location: "Narsingi",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    brochureFile: "EL-DORADO-22-07-2022-FINAL-1-1-compressed-1-1-1-1-1-3.pdf",
    features: [
      "4.25 acres, 3 cellars, 40 floors",
      "2 towers",
      "1540 – 2240 sq ft"
    ],
    status: "Ready to move"
  },
  {
    id: 7,
    title: "Hallmark Altus",
    type: "Apartments",
    location: "Kondapur",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    brochureFile: "https://drive.google.com/file/d/1XNHXS9FTjP2ImeR0qaODYXjTbItOMJzw/view?usp=share_link",
    features: [
      "3 & 4 BHK ultra premium",
      "3.5 acres, 490 units",
      "Tower A: G+50, Tower B: G+44",
      "1.3 lakh sq ft amenities"
    ],
    status: "Ready to move"
  },
  {
    id: 8,
    title: "Trilight",
    type: "Apartments",
    location: "Golden Mile Road, Kokapet",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=800&auto=format&fit=crop",
    brochureFile: "https://drive.google.com/file/d/1XNHXS9FTjP2ImeR0qaODYXjTbItOMJzw/view?usp=share_link",
    features: [
      "4.4 acres, 3 towers (56F, 46F, 49F)",
      "462 premium residences",
      "3, 4, 5 BHK sky mansions (~4133 sq ft)"
    ],
    status: "Possession: Dec 2026"
  },
  {
    id: 9,
    title: "Rise @ Neopolis",
    type: "Apartments",
    location: "Neopolis",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    brochureFile: "rise.pdf",
    features: [
      "3.6 acres, 390 units",
      "2 iconic towers (56 floors)",
      "3 & 4 BHK (3303 – 5777 sq ft)",
      "11 ft ceiling, 22 ft duplex",
      "Sky lounge (52–56 floors)",
      "3-level luxury podium"
    ]
  },
  {
    id: 10,
    title: "NEO",
    type: "Apartments",
    location: "Neopolis",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=800&auto=format&fit=crop",
    brochureFile: "neo.pdf",
    features: [
      "57-floor iconic towers",
      "3 & 4 BHK (2835 – 4565 sq ft)",
      "1 lakh sq ft clubhouse",
      "670 residences"
    ]
  },
  {
    id: 11,
    title: "Lansum Encanto",
    type: "Apartments",
    location: "Puppalaguda",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    brochureFile: "https://drive.google.com/file/d/1lrL1n2lU8lnMqHcOhOlgLKCEAtSK9jY9/view?usp=share_link",
    features: [
      "5.7 acres, 2 towers, 60 floors",
      "4055 – 5045 sq ft",
      "3.5m ceiling height, 9 ft doors",
      "Private foyer + maid room"
    ],
    status: "Possession: Dec 2030"
  },
  {
    id: 12,
    title: "Vasavi Atlantis",
    type: "Apartments",
    location: "Narsingi",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    brochureFile: "Vasavi_Atlantis_pdf.pdf",
    features: [
      "12.24 acres, 8 towers, 45 floors",
      "2199 units",
      "2, 3, 4 BHK (1250 – 3330 sq ft)"
    ],
    status: "Possession: Dec 2025"
  },

  // VILLAS
  {
    id: 13,
    title: "The Habitat",
    type: "Villas",
    location: "Prosper (Tellapur / Tukkuguda)",
    image: "/habitat-villa.jpg",
    objectPosition: "center 40%",
    brochureFile: "The Habitat Brochure.pdf",
    features: [
      "520-acre township, 7 gated communities",
      "30-acre enclave, 250 villas (200–500 sq yards)",
      "40K sq ft clubhouse",
      "10-acre badminton academy & Cricket stadium",
      "International school & Golf course"
    ]
  },
  {
    id: 14,
    title: "Achyuta Villas",
    type: "Villas",
    location: "Tukkuguda",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    features: [
      "Sree Venkateshwara Infra project",
      "Luxury 4BHK triplex villas (87 exclusive units)",
      "7.5 acres gated community",
      "Plot sizes: 267 – 333 sq yards",
      "EV-ready & smart home provisions"
    ],
    status: "Possession: March 2028"
  },
  {
    id: 15,
    title: "Nature's Edge Signatures",
    type: "Villas",
    location: "Signature Avenues",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    brochureFile: "Nature's EDGE_Brochure.pdf",
    features: [
      "13.6 acres, 121 villas",
      "300 – 350 sq yards",
      "20K sq ft clubhouse"
    ]
  },

  {
    id: 17,
    title: "The Woods – Ankura Homes",
    type: "Villas",
    location: "Keesara ORR Exit 8 (15 mins)",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop",
    features: [
      "20+ acres, 50+ units",
      "1210 sq. yds private plot + 1210 sft villa",
      "1 acre lifestyle amenity",
      "Grow your own food concept",
      "Farm-to-table living experience"
    ]
  },
  {
    id: 18,
    title: "Konak – Ankura Homes",
    type: "Villas",
    location: "Shankarpally",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
    features: [
      "Phase 1: 22 acres, 64 mansions",
      "Phase 2: 16 acres, 56 mansions",
      "900 sq. yds statement mansions",
      "Built-up: 5100 / 5600 sft",
      "80% open spaces, mango orchard",
      "Outdoor party area & barbecue"
    ]
  },
  {
    id: 19,
    title: "Breeze in the Courtyard – Ankura",
    type: "Apartments",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?q=80&w=800&auto=format&fit=crop",
    features: [
      "G+10 towers, 3 blocks (A, B, C)",
      "290 units, 2 basements",
      "7-level clubhouse",
      "Unit sizes: 1695 – 2930 sft",
      "Open spaces & community experience"
    ]
  },
  {
    id: 20,
    title: "Mithila Nagari – Sree Infra",
    type: "Apartments",
    location: "Edulanagulapally",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
    features: [
      "4+ acres, 597 homes, 3 towers",
      "2 & 3 BHK (1479 – 2583 sft)",
      "25 floors + 4 levels parking",
      "5-level clubhouse (32.6K sft)",
      "80+ amenities, open restaurant & café",
      "No industrial zone within 2 km"
    ]
  },
  {
    id: 21,
    title: "Urban Trilla – Apartments",
    type: "Apartments",
    location: "Mokila",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
    features: [
      "2.9 acres, 3 blocks, 8 floors each",
      "136 luxury apartments (4 BHK)",
      "Sizes: 2627 – 3897 sft",
      "5-floor clubhouse (21,000 sft)",
      "1 central courtyard"
    ]
  },
  {
    id: 22,
    title: "Urban Trilla – Farm Villas",
    type: "Villas",
    location: "Shankarpally",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
    features: [
      "60+ acres, 200+ weekend homes",
      "Plot: 605 / 1200 sq. yds",
      "Built-up: 5000+ / 10000+ sft",
      "90% open spaces, urban farming",
      "3.8+ acres clubhouse, central park",
      "No industrial zone within 2 km"
    ]
  },
  {
    id: 23,
    title: "19 On West Villas – Duleva Homes",
    type: "Villas",
    location: "Shankarpally",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    features: [
      "10 acres, 94 villas",
      "Plot: 250 – 300 sq. yds",
      "Built-up: 3260 – 3960 sft",
      "5 BHK triplex villas",
      "40% open spaces, EV charging points"
    ]
  },

  // COMMERCIAL
  {
    id: 16,
    title: "R One Diamond Towers",
    type: "Commercial",
    location: "Kokapet",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    brochureFile: "Diamond tower_Floor plans_Brochure.pdf",
    features: [
      "Premium workspace (Skywalk concept)",
      "G+27 floors, 3.81 acres",
      "2.2 million sq ft built-up area",
      "90K sq ft floor plate",
      "Investment: 250 sq ft @ ~43 lakhs",
      "Monthly returns: up to ₹25K"
    ],
    status: "Possession: Dec 2026"
  }
];

export function Projects() {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<ProjectType>("All");
  const [showPopup, setShowPopup] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const downloaded = localStorage.getItem('bhaavya_brochure_downloaded');
    if (downloaded) {
      setHasDownloaded(true);
    }
  }, []);

  useEffect(() => {
    const typeParam = searchParams.get("type") as ProjectType | null;
    if (typeParam && ["All", "Apartments", "Villas", "Commercial"].includes(typeParam)) {
      setActiveFilter(typeParam);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [searchParams]);

  const filters: ProjectType[] = ["All", "Apartments", "Villas", "Commercial"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  const downloadBrochureForProject = (project: Project) => {
    if (!project.brochureFile) {
      alert(`No brochure available for ${project.title} yet.`);
      return;
    }

    // Handle external links (Google Drive, etc.)
    if (project.brochureFile.startsWith("http")) {
      window.open(project.brochureFile, "_blank");
      return;
    }

    const brochure = findBrochureByFileName(project.brochureFile);
    if (!brochure) {
      alert(`Brochure file not found for ${project.title}.`);
      return;
    }
    const link = document.createElement("a");
    link.href = brochure.url;
    link.download = brochure.fileName;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleDownloadClick = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    if (hasDownloaded) {
      downloadBrochureForProject(project);
    } else {
      setSelectedProject(project);
      setShowPopup(true);
    }
  };

  const handlePopupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const budget = formData.get('budget') || 'Not specified';
    const size = formData.get('size') || 'Not specified';
    const message = formData.get('message') || 'No message provided.';

    const subject = `New Property Enquiry – ${selectedProject?.title} | ${name}`;
    const body =
      `Dear Satharla Bhanu Prakash,%0D%0A%0D%0A` +
      `Greetings!%0D%0A%0D%0A` +
      `Hi Bhanu, I've gone through your projects and I'm interested. Can we discuss further?%0D%0A%0D%0A` +
      `I came across Bhaavya Realty and would like to know more details about the project mentioned below. I look forward to your guidance.%0D%0A%0D%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0D%0A` +
      `  PROJECT OF INTEREST%0D%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0D%0A` +
      `  Project Name   : ${selectedProject?.title}%0D%0A%0D%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0D%0A` +
      `  APPLICANT DETAILS%0D%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0D%0A` +
      `  Full Name      : ${name}%0D%0A` +
      `  Email Address  : ${email}%0D%0A` +
      `  Contact Number : ${phone}%0D%0A%0D%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0D%0A` +
      `  INVESTMENT REQUIREMENTS%0D%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0D%0A` +
      `  Budget Range   : ${budget}%0D%0A` +
      `  Preferred Size : ${size}%0D%0A%0D%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0D%0A` +
      `  REMARKS%0D%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0D%0A` +
      `  ${message}%0D%0A%0D%0A` +
      `I look forward to a positive response. Kindly feel free to contact me at your convenience.%0D%0A%0D%0A` +
      `Thanking You,%0D%0A` +
      `${name}%0D%0A` +
      `📞 ${phone}%0D%0A` +
      `✉  ${email}%0D%0A%0D%0A` +
      `─────────────────────────────%0D%0A` +
      `This enquiry was submitted via bhaavyarealty.com`;

    window.open(`mailto:bhaavyarealty@gmail.com?subject=${subject}&body=${body}`, '_blank');

    localStorage.setItem('bhaavya_brochure_downloaded', 'true');
    setHasDownloaded(true);
    setShowPopup(false);

    setTimeout(() => {
      if (selectedProject) {
        downloadBrochureForProject(selectedProject);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-32 pb-32 bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-serif text-gray-900 mb-6">
            Our Portfolio
          </h1>
          <p className="text-gray-600 text-lg font-light">
            Explore our curated collection of premium real estate developments, designed with precision and built for the future.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 border rounded-full ${
                activeFilter === filter 
                  ? "border-primary bg-primary text-white font-semibold shadow-md" 
                  : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary bg-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: project.objectPosition ?? "center" }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-primary font-semibold rounded-full shadow-sm">
                  {project.type}
                </div>
                {project.status && (
                  <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 text-xs text-white rounded-lg flex items-center shadow-md">
                    <CalendarDays size={14} className="mr-1.5 text-teal-400" />
                    {project.status}
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <MapPin size={14} className="mr-1 text-primary flex-shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <CheckCircle2 size={16} className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={(e) => handleDownloadClick(e, project)}
                  className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 text-sm uppercase tracking-widest text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 mt-auto"
                >
                  <Download size={16} />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Download Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setShowPopup(false)} 
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-serif text-gray-900 mb-2">Download Brochure</h3>
            <p className="text-gray-600 text-sm mb-6">
              Please provide your details to download the brochure for <span className="font-semibold text-gray-900">{selectedProject?.title}</span>.
            </p>
            
            <form onSubmit={handlePopupSubmit} className="space-y-4">
              <div>
                <input type="text" name="name" placeholder="Full Name *" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
              </div>
              <div>
                <input type="email" name="email" placeholder="Email *" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
              </div>
              <div>
                <input type="tel" name="phone" placeholder="Phone *" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
              </div>
              <div>
                <select name="budget" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none">
                  <option value="" disabled selected>Budget Range *</option>
                  <option value="1-2 Cr">₹1 Cr – ₹2 Cr</option>
                  <option value="2-3 Cr">₹2 Cr – ₹3 Cr</option>
                  <option value="3-4 Cr">₹3 Cr – ₹4 Cr</option>
                  <option value="4-5 Cr">₹4 Cr – ₹5 Cr</option>
                  <option value="Above 5 Cr">Above ₹5 Cr</option>
                </select>
              </div>
              <div>
                <select name="size" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none">
                  <option value="" disabled selected>Preferred Size (sqft) *</option>
                  <option value="1200-1500 sqft">1200 – 1500 sqft</option>
                  <option value="1500-1800 sqft">1500 – 1800 sqft</option>
                  <option value="1800-2100 sqft">1800 – 2100 sqft</option>
                  <option value="2100-2500 sqft">2100 – 2500 sqft</option>
                  <option value="2500-3000 sqft">2500 – 3000 sqft</option>
                  <option value="Above 3000 sqft">Above 3000 sqft</option>
                </select>
              </div>
              <div>
                <textarea name="message" placeholder="Message (Optional)" rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-semibold uppercase tracking-widest py-4 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 mt-2">
                Send Details & Download
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
