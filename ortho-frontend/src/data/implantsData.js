const implantsData = [
  {
    id: 1,
    category: "Veterinary",
    title: "Veterinary Implants & Instruments",
    surgery: "Veterinary Orthopedic Fixation",
    description:
      "Specialized implants and instruments designed for fracture fixation and orthopedic reconstruction in animals.",
    image: "/src/assets/implants/veterinary-implants-instruments.jpg",
    viewUrl: "/implants/veterinary-implants-instruments",
  },
  {
    id: 2,
    category: "Sports Medicine",
    title: "Arthroscopy ACL / PCL Instruments",
    surgery: "ACL / PCL Reconstruction",
    description:
      "Arthroscopic tools and implants commonly used for ligament reconstruction and sports injury management.",
    image: "/src/assets/implants/arthroscopy-acl-pcl.jpg",
    viewUrl: "/implants/arthroscopy-acl-pcl",
  },
  {
    id: 3,
    category: "Trauma Fixation",
    title: "Cable Plate System",
    surgery: "Periprosthetic Fracture Fixation",
    description:
      "Cable plate systems are used for stable fixation in complex fractures and periprosthetic reconstructions.",
    image: "/src/assets/implants/cable-plate-system.jpg",
    viewUrl: "/implants/cable-plate-system",
  },
  {
    id: 4,
    category: "CMF",
    title: "Craniomaxillofacial Implants",
    surgery: "Maxillofacial Reconstruction Surgery",
    description:
      "Implants designed for facial bone fixation, cranial reconstruction, and maxillofacial trauma procedures.",
    image: "/src/assets/implants/craniomaxillofacial-implants.jpg",
    viewUrl: "/implants/craniomaxillofacial-implants",
  },
  {
    id: 5,
    category: "Trauma Plates",
    title: "DHS / DCS & Pediatric Fixation System",
    surgery: "Hip Fracture Fixation / Pediatric ORIF",
    description:
      "Dynamic Hip Screw (DHS) and Dynamic Condylar Screw (DCS) systems used for stable fracture fixation in hip and pediatric cases.",
    image: "/src/assets/implants/dhs-dcs-pediatric.jpg",
    viewUrl: "/implants/dhs-dcs-pediatric",
  },
  {
    id: 6,
    category: "External Fixation",
    title: "External Fixators",
    surgery: "External Fixation Surgery",
    description:
      "External fixators provide fracture stabilization, lengthening support, and temporary fixation in severe trauma cases.",
    image: "/src/assets/implants/external-fixators.jpg",
    viewUrl: "/implants/external-fixators",
  },
  {
    id: 7,
    category: "General Instruments",
    title: "General Instruments",
    surgery: "Orthopedic Surgical Procedures",
    description:
      "A complete range of essential orthopedic instruments used across trauma, reconstruction, and joint procedures.",
    image: "/src/assets/implants/general-instruments.jpg",
    viewUrl: "/implants/general-instruments",
  },
  {
    id: 8,
    category: "Screws",
    title: "Headless Compression Cannulated Screws",
    surgery: "Small Bone Fixation",
    description:
      "Headless cannulated screws provide compression fixation commonly used in scaphoid, ankle, and small bone procedures.",
    image: "/src/assets/implants/headless-compression-cannulated-screws.jpg",
    viewUrl: "/implants/headless-compression-cannulated-screws",
  },
  {
    id: 9,
    category: "Prosthesis",
    title: "Hip Prosthesis",
    surgery: "Total Hip Arthroplasty (THA)",
    description:
      "Hip prosthesis systems used for joint replacement in severe arthritis, fractures, or degenerative hip conditions.",
    image: "/src/assets/implants/hip-prosthesis.jpg",
    viewUrl: "/implants/hip-prosthesis",
  },
  {
    id: 10,
    category: "Instrument Sets",
    title: "Implants Removal Set",
    surgery: "Implant Removal Surgery",
    description:
      "Instrument set used for safe and efficient removal of plates, screws, nails, and other orthopedic implants.",
    image: "/src/assets/implants/implants-removal-set.jpg",
    viewUrl: "/implants/implants-removal-set",
  },
  {
    id: 11,
    category: "Nails",
    title: "Interlocking Nails",
    surgery: "Interlocking Nailing (IM Nail)",
    description:
      "Interlocking nail systems provide stable fixation for long bone fractures such as femur, tibia, and humerus.",
    image: "/src/assets/implants/interlocking-nails.jpg",
    viewUrl: "/implants/interlocking-nails",
  },
  {
    id: 12,
    category: "Plates",
    title: "Knee Osteotomy Plates",
    surgery: "High Tibial Osteotomy (HTO)",
    description:
      "Knee osteotomy plates are used to correct alignment and support fixation during osteotomy procedures.",
    image: "/src/assets/implants/knee-osteotomy-plates.jpg",
    viewUrl: "/implants/knee-osteotomy-plates",
  },
  {
    id: 13,
    category: "Plates",
    title: "Large Fragment Safety Locking System",
    surgery: "Long Bone Fracture Fixation",
    description:
      "Locking plate systems for stable fixation in femur and tibia fractures with improved strength and alignment control.",
    image: "/src/assets/implants/large-fragment-safety-locking.jpg",
    viewUrl: "/implants/large-fragment-safety-locking",
  },
  {
    id: 14,
    category: "Plates",
    title: "Large Fragment Standard System",
    surgery: "Trauma Fixation (ORIF)",
    description:
      "Standard large fragment plating system commonly used for adult long bone fractures and trauma cases.",
    image: "/src/assets/implants/large-fragment-standard.jpg",
    viewUrl: "/implants/large-fragment-standard",
  },
  {
    id: 15,
    category: "Plates",
    title: "Mini Fragment Implants",
    surgery: "Small Bone Fixation",
    description:
      "Mini fragment systems are designed for precise fixation in hand, wrist, and foot fractures.",
    image: "/src/assets/implants/mini-fragment-implants.jpg",
    viewUrl: "/implants/mini-fragment-implants",
  },
  {
    id: 16,
    category: "Nails & Wires",
    title: "Nails, Wires & Pins",
    surgery: "Temporary / Definitive Fixation",
    description:
      "A range of fixation wires and pins used in pediatric trauma, small bone fractures, and temporary stabilization.",
    image: "/src/assets/implants/nails-wires-pins.jpg",
    viewUrl: "/implants/nails-wires-pins",
  },
  {
    id: 17,
    category: "Pediatric",
    title: "Pediatric Implants",
    surgery: "Pediatric Orthopedic Surgery",
    description:
      "Pediatric orthopedic implants designed specifically for growing bones, ensuring stability and safe healing.",
    image: "/src/assets/implants/pediatric-implants.jpg",
    viewUrl: "/implants/pediatric-implants",
  },
  {
    id: 18,
    category: "Pelvic",
    title: "Pelvic Implants & Instruments",
    surgery: "Pelvic and Acetabular Fixation",
    description:
      "Pelvic implants and specialized instruments for acetabular fractures and complex pelvic reconstruction procedures.",
    image: "/src/assets/implants/pelvic-implants-instruments.jpg",
    viewUrl: "/implants/pelvic-implants-instruments",
  },
  {
    id: 19,
    category: "Special Implants",
    title: "Rib & Foot Implants",
    surgery: "Rib Fixation / Foot Reconstruction",
    description:
      "Dedicated implants used for rib stabilization and specialized foot fracture reconstruction procedures.",
    image: "/src/assets/implants/rib-foot-implants.jpg",
    viewUrl: "/implants/rib-foot-implants",
  },
  {
    id: 20,
    category: "Locking Plates",
    title: "Small Fragment Locking System",
    surgery: "Upper Limb / Lower Limb Fixation",
    description:
      "Small fragment locking plates offer angular stability and are widely used in radius, ulna, and ankle fractures.",
    image: "/src/assets/implants/small-fragment-locking.jpg",
    viewUrl: "/implants/small-fragment-locking",
  },
  {
    id: 21,
    category: "Plates",
    title: "Small Fragment Standard System",
    surgery: "ORIF (Small Bone Fracture Fixation)",
    description:
      "Standard small fragment plating instruments used for stable fixation in common orthopedic trauma surgeries.",
    image: "/src/assets/implants/small-fragment-standard.jpg",
    viewUrl: "/implants/small-fragment-standard",
  },
  {
    id: 22,
    category: "Spine",
    title: "Spine Surgery Implants",
    surgery: "Spinal Fixation & Fusion Surgery",
    description:
      "Spinal implant systems including rods and screws used for fusion, deformity correction, and stabilization procedures.",
    image: "/src/assets/implants/spine-surgery-implants.jpg",
    viewUrl: "/implants/spine-surgery-implants",
  },
  {
    id: 23,
    category: "Support Devices",
    title: "Support Braces",
    surgery: "Post-operative Support & Rehab",
    description:
      "Orthopedic braces and supports help improve stability, reduce pain, and assist recovery during rehabilitation.",
    image: "/src/assets/implants/support-braces.jpg",
    viewUrl: "/implants/support-braces",
  },
  {
    id: 24,
    category: "Power Tools",
    title: "Surgical Power Tools",
    surgery: "Orthopedic Cutting & Drilling",
    description:
      "Powered orthopedic surgical tools used for drilling, cutting, and preparation during trauma and reconstruction surgeries.",
    image: "/src/assets/implants/surgical-power-tools.jpg",
    viewUrl: "/implants/surgical-power-tools",
  },
];

export default implantsData;
