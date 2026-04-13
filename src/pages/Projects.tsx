import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Download, MapPin, CheckCircle2, CalendarDays, X } from "lucide-react";

type ProjectType = "All" | "Apartments" | "Villas" | "Commercial";

interface Project {
  id: number;
  title: string;
  type: ProjectType;
  location: string;
  image: string;
  features: string[];
  status?: string;
}

type BrochureEntry = {
  fileName: string;
  normalizedFileName: string;
  url: string;
};

const brochureFiles: BrochureEntry[] = Object.entries(
  import.meta.glob("/pdfs/*.pdf", {
    eager: true,
    import: "default"
  })
).map(([filePath, fileUrl]) => {
  const fileName = filePath.split("/").pop() ?? "";
  return {
    fileName,
    normalizedFileName: normalizeText(fileName.replace(/\.pdf$/i, "")),
    url: fileUrl as string
  };
});

function normalizeText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function findBrochureByProjectName(projectTitle: string) {
  const normalizedProjectName = normalizeText(projectTitle);
  return brochureFiles.find((brochure) =>
    brochure.normalizedFileName.includes(normalizedProjectName) ||
    normalizedProjectName.includes(brochure.normalizedFileName)
  ) ?? null;
}

const projects: Project[] = [
  // APARTMENTS
  {
    id: 1,
    title: "ARKA",
    type: "Apartments",
    location: "Lanco Hills, Khajaguda",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1613490900233-141c5560d75d?q=80&w=800&auto=format&fit=crop",
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
    title: "One Ventures – Tripura Villas",
    type: "Villas",
    location: "Tukkuguda",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    features: [
      "Luxury 4BHK triplex villas (87 units)",
      "7.5 acres gated community",
      "267 – 333 sq yards",
      "EV-ready + smart home provisions"
    ],
    status: "Possession: March 2028"
  },
  {
    id: 15,
    title: "Nature’s Edge Signatures",
    type: "Villas",
    location: "Signature Avenues",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    features: [
      "13.6 acres, 121 villas",
      "300 – 350 sq yards",
      "20K sq ft clubhouse"
    ]
  },

  // COMMERCIAL
  {
    id: 16,
    title: "R One Diamond Towers",
    type: "Commercial",
    location: "Kokapet",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
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

  const filters: ProjectType[] = ["All", "Apartments", "Villas", "Commercial"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  const downloadBrochureForProject = (project: Project) => {
    const brochure = findBrochureByProjectName(project.title);

    if (!brochure) {
      alert(`No brochure file found for ${project.title}.`);
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
    const message = formData.get('message') || 'No message provided.';

    const subject = `Bhaavya Reality - ${name}`;
    const body = `Brochure Request: ${selectedProject?.title}%0D%0A%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;

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
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-gray-900 mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg font-light"
          >
            Explore our curated collection of premium real estate developments, designed with precision and built for the future.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
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
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
            </motion.div>
          ))}
        </div>

      </div>

      {/* Download Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl border border-gray-200"
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
