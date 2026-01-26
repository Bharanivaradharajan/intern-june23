const insightsData = {
  // ✅ 1) Knowledge Galaxy (topics)
  topics: [
    { id: "t1", label: "Trauma", count: 34 },
    { id: "t2", label: "Spine", count: 18 },
    { id: "t3", label: "Arthroplasty", count: 22 },
    { id: "t4", label: "Sports Medicine", count: 14 },
    { id: "t5", label: "Pediatrics", count: 9 },
    { id: "t6", label: "CMF", count: 6 },
  ],

  // ✅ 2) Books (used in Live Results + Galaxy mapping)
  books: [
    {
      id: "b1",
      topic: "Trauma",
      title: "Essential Orthopaedics",
      year: 2022,
      viewUrl: "https://example.com/book/essential-orthopaedics",
    },
    {
      id: "b2",
      topic: "Spine",
      title: "Textbook of Spine Surgery",
      year: 2021,
      viewUrl: "https://example.com/book/spine-surgery",
    },
    {
      id: "b3",
      topic: "Arthroplasty",
      title: "Arthroplasty Principles & Techniques",
      year: 2020,
      viewUrl: "https://example.com/book/arthroplasty",
    },
    {
      id: "b4",
      topic: "Sports Medicine",
      title: "Sports Orthopedics & Arthroscopy",
      year: 2023,
      viewUrl: "https://example.com/book/sports-ortho",
    },
    {
      id: "b5",
      topic: "Pediatrics",
      title: "Pediatric Orthopedics Handbook",
      year: 2019,
      viewUrl: "https://example.com/book/pediatric-ortho",
    },
  ],

  // ✅ 3) Papers (used in Live Results + Galaxy mapping)
  papers: [
    {
      id: "p1",
      topic: "Arthroplasty",
      title: "PMMA Bone Cement: Trends & Safety",
      author: "K. Sharma et al.",
      year: 2024,
      viewUrl: "https://example.com/paper/pmma-bone-cement",
    },
    {
      id: "p2",
      topic: "Trauma",
      title: "Advances in Titanium Implants for Fracture Fixation",
      author: "S. Raj et al.",
      year: 2023,
      viewUrl: "https://example.com/paper/titanium-fixation",
    },
    {
      id: "p3",
      topic: "Spine",
      title: "Posterior Spinal Fixation: Clinical Outcomes",
      author: "A. Kumar et al.",
      year: 2022,
      viewUrl: "https://example.com/paper/spine-fixation",
    },
    {
      id: "p4",
      topic: "Sports Medicine",
      title: "ACL Reconstruction: Graft Selection & Rehab",
      author: "R. Mehta et al.",
      year: 2021,
      viewUrl: "https://example.com/paper/acl-reconstruction",
    },
    {
      id: "p5",
      topic: "Pediatrics",
      title: "Pediatric Fracture Healing Patterns",
      author: "N. Priya et al.",
      year: 2020,
      viewUrl: "https://example.com/paper/pediatric-fractures",
    },
  ],

  // ✅ 4) Implants (used in Live Results + Galaxy mapping)
  implants: [
    {
      id: "i1",
      topic: "Trauma",
      title: "Interlocking Nails",
      surgery: "IM Nailing",
      viewUrl: "/implants/interlocking-nails",
    },
    {
      id: "i2",
      topic: "Trauma",
      title: "External Fixators",
      surgery: "External Fixation Surgery",
      viewUrl: "/implants/external-fixators",
    },
    {
      id: "i3",
      topic: "Spine",
      title: "Spine Surgery Implants",
      surgery: "Spinal Fixation & Fusion",
      viewUrl: "/implants/spine-surgery-implants",
    },
    {
      id: "i4",
      topic: "Arthroplasty",
      title: "Hip Prosthesis",
      surgery: "Total Hip Arthroplasty (THA)",
      viewUrl: "/implants/hip-prosthesis",
    },
    {
      id: "i5",
      topic: "Sports Medicine",
      title: "Headless Compression Screws",
      surgery: "Small Bone Fixation",
      viewUrl: "/implants/headless-compression-cannulated-screws",
    },
  ],

  // ✅ 5) Devices (used in Live Results + Galaxy mapping)
  devices: [
    {
      id: "d1",
      topic: "Trauma",
      title: "Osteotomes",
      category: "Bone Cutting Instruments",
      viewUrl: "/devices/osteotomes",
    },
    {
      id: "d2",
      topic: "Trauma",
      title: "Bone Cutting Forceps",
      category: "Bone Instruments",
      viewUrl: "/devices/bone-cutting-forceps",
    },
    {
      id: "d3",
      topic: "Trauma",
      title: "Gigli Saws",
      category: "Bone Cutting Saws",
      viewUrl: "/devices/gigli-saws",
    },
    {
      id: "d4",
      topic: "Trauma",
      title: "Plate Benders",
      category: "Fixation Instruments",
      viewUrl: "/devices/plate-benders",
    },
    {
      id: "d5",
      topic: "Sports Medicine",
      title: "Surgical Power Tools",
      category: "Power Tools",
      viewUrl: "/devices/surgical-power-tools",
    },
  ],

  // ✅ 6) Topic → Content mapping for Knowledge Galaxy Right Panel
  topicContentMap: {
    t1: {
      books: [
        {
          title: "Essential Orthopaedics",
          viewUrl: "https://example.com/book/essential-orthopaedics",
        },
      ],
      papers: [
        {
          title: "Advances in Titanium Implants for Fracture Fixation",
          viewUrl: "https://example.com/paper/titanium-fixation",
        },
      ],
      implants: [
        { title: "Interlocking Nails", viewUrl: "/implants/interlocking-nails" },
        { title: "External Fixators", viewUrl: "/implants/external-fixators" },
      ],
      devices: [
        { title: "Osteotomes", viewUrl: "/devices/osteotomes" },
        { title: "Plate Benders", viewUrl: "/devices/plate-benders" },
      ],
    },

    t2: {
      books: [
        { title: "Textbook of Spine Surgery", viewUrl: "https://example.com/book/spine-surgery" },
      ],
      papers: [
        { title: "Posterior Spinal Fixation: Clinical Outcomes", viewUrl: "https://example.com/paper/spine-fixation" },
      ],
      implants: [
        { title: "Spine Surgery Implants", viewUrl: "/implants/spine-surgery-implants" },
      ],
      devices: [
        { title: "Surgical Power Tools", viewUrl: "/devices/surgical-power-tools" },
      ],
    },

    t3: {
      books: [
        { title: "Arthroplasty Principles & Techniques", viewUrl: "https://example.com/book/arthroplasty" },
      ],
      papers: [
        { title: "PMMA Bone Cement: Trends & Safety", viewUrl: "https://example.com/paper/pmma-bone-cement" },
      ],
      implants: [
        { title: "Hip Prosthesis", viewUrl: "/implants/hip-prosthesis" },
      ],
      devices: [
        { title: "Bone Cutting Forceps", viewUrl: "/devices/bone-cutting-forceps" },
      ],
    },

    t4: {
      books: [
        { title: "Sports Orthopedics & Arthroscopy", viewUrl: "https://example.com/book/sports-ortho" },
      ],
      papers: [
        { title: "ACL Reconstruction: Graft Selection & Rehab", viewUrl: "https://example.com/paper/acl-reconstruction" },
      ],
      implants: [
        { title: "Headless Compression Screws", viewUrl: "/implants/headless-compression-cannulated-screws" },
      ],
      devices: [
        { title: "Surgical Power Tools", viewUrl: "/devices/surgical-power-tools" },
      ],
    },

    t5: {
      books: [
        { title: "Pediatric Orthopedics Handbook", viewUrl: "https://example.com/book/pediatric-ortho" },
      ],
      papers: [
        { title: "Pediatric Fracture Healing Patterns", viewUrl: "https://example.com/paper/pediatric-fractures" },
      ],
      implants: [
        { title: "Pediatric Implants", viewUrl: "/implants/pediatric-implants" },
      ],
      devices: [
        { title: "Gigli Saws", viewUrl: "/devices/gigli-saws" },
      ],
    },

    t6: {
      books: [
        { title: "CMF Fixation Basics", viewUrl: "https://example.com/book/cmf-fixation" },
      ],
      papers: [
        { title: "Craniomaxillofacial Implant Systems", viewUrl: "https://example.com/paper/cmf-implants" },
      ],
      implants: [
        { title: "Craniomaxillofacial Implants", viewUrl: "/implants/craniomaxillofacial-implants" },
      ],
      devices: [
        { title: "General Instruments", viewUrl: "/devices/general-instruments" },
      ],
    },
  },

  // ✅ 7) Surgery Journey Explorer (workflow data)
  surgeries: [
    {
      id: "s1",
      title: "ORIF (Fracture Fixation)",
      tag: "Trauma",
      steps: [
        {
          key: "diag",
          label: "Diagnosis",
          description:
            "Confirm fracture type, displacement and neurovascular status. Identify associated injuries.",
          suggestedImplants: ["DCP Plate", "External Fixator"],
          requiredTools: ["General Instruments", "Imaging Setup"],
        },
        {
          key: "img",
          label: "Imaging",
          description:
            "X-ray/CT evaluation for surgical planning, alignment, reduction strategy, and implant choice.",
          suggestedImplants: ["Interlocking Nail", "DCP Plate"],
          requiredTools: ["C-Arm", "Measuring Tools"],
        },
        {
          key: "impl",
          label: "Implant Selection",
          description:
            "Select plates, screws, nails based on bone quality, fracture pattern and stability needs.",
          suggestedImplants: ["Interlocking Nail", "External Fixator"],
          requiredTools: ["Implant Tray", "Drill System"],
        },
        {
          key: "inst",
          label: "Instruments",
          description:
            "Prepare surgical instruments set including reduction tools, drill bits, and fixation instruments.",
          suggestedImplants: ["DCP Plate"],
          requiredTools: ["Plate Benders", "Surgical Power Tools"],
        },
        {
          key: "proc",
          label: "Procedure",
          description:
            "Perform reduction + fixation. Verify alignment, compression, and stability using imaging.",
          suggestedImplants: ["Interlocking Nail"],
          requiredTools: ["Surgical Power Tools", "Bone Cutting Forceps"],
        },
        {
          key: "rehab",
          label: "Rehab",
          description:
            "Post-op care includes physiotherapy, weight-bearing protocol, and monitoring union progress.",
          suggestedImplants: ["Support Braces"],
          requiredTools: ["Rehab Supports"],
        },
      ],
    },

    {
      id: "s2",
      title: "Total Knee Arthroplasty (TKA)",
      tag: "Arthroplasty",
      steps: [
        {
          key: "diag",
          label: "Diagnosis",
          description:
            "Assess arthritis severity, deformity, ROM limitations, and conservative management response.",
          suggestedImplants: ["Knee Prosthesis"],
          requiredTools: ["Pre-op Assessment Set"],
        },
        {
          key: "img",
          label: "Imaging",
          description:
            "Standing radiographs + templating for component sizing and alignment planning.",
          suggestedImplants: ["Knee Prosthesis"],
          requiredTools: ["Alignment Tools"],
        },
        {
          key: "impl",
          label: "Implant Selection",
          description:
            "Select implant type (CR/PS) based on ligament status and deformity correction requirements.",
          suggestedImplants: ["Knee Prosthesis"],
          requiredTools: ["Trial Components"],
        },
        {
          key: "inst",
          label: "Instruments",
          description:
            "Ensure saw guides, cutting jigs, and cement mixing tools are ready.",
          suggestedImplants: ["Bone Cement (PMMA)"],
          requiredTools: ["Bone Saw", "Cement Gun"],
        },
        {
          key: "proc",
          label: "Procedure",
          description:
            "Bone cuts, trialing, cementing final components, verify stability and patellar tracking.",
          suggestedImplants: ["Knee Prosthesis"],
          requiredTools: ["Power Tools", "Cement Accessories"],
        },
        {
          key: "rehab",
          label: "Rehab",
          description:
            "Early mobilization, pain control, strengthening, DVT prophylaxis, and follow-up imaging.",
          suggestedImplants: ["Support Braces"],
          requiredTools: ["Physio Plan"],
        },
      ],
    },
  ],

  // ✅ 8) Implant-Surgery Network (nodes + connections)
  implantNodes: [
    { id: "n1", title: "Interlocking Nails", topicLabel: "Trauma" },
    { id: "n2", title: "External Fixators", topicLabel: "Trauma" },
    { id: "n3", title: "Spine Surgery Implants", topicLabel: "Spine" },
    { id: "n4", title: "Hip Prosthesis", topicLabel: "Arthroplasty" },
    { id: "n5", title: "Headless Compression Screws", topicLabel: "Sports Medicine" },
  ],

  surgeryNodes: [
    { id: "m1", title: "ORIF", topicLabel: "Trauma" },
    { id: "m2", title: "IM Nailing", topicLabel: "Trauma" },
    { id: "m3", title: "THA", topicLabel: "Arthroplasty" },
    { id: "m4", title: "Spine Fusion", topicLabel: "Spine" },
    { id: "m5", title: "ACL Reconstruction", topicLabel: "Sports Medicine" },
  ],

  implantSurgeryConnections: [
    { implantId: "n1", surgeryId: "m2", usageScore: 85 },
    { implantId: "n2", surgeryId: "m1", usageScore: 70 },
    { implantId: "n3", surgeryId: "m4", usageScore: 80 },
    { implantId: "n4", surgeryId: "m3", usageScore: 78 },
    { implantId: "n5", surgeryId: "m5", usageScore: 60 },
  ],

  // ✅ 9) Timeline Story (year-wise highlights)
  timelineByYear: [
    {
      year: 2026,
      items: [
        {
          id: "tl1",
          type: "Market",
          title: "Orthopedic Biomaterials: Innovation Era",
          description: "Titanium, PEEK, ceramics, and coatings drive the future.",
          viewUrl: "/blog/orthopedic-materials-market",
        },
        {
          id: "tl2",
          type: "Implant",
          title: "Spine Fixation Systems",
          description: "Advanced spinal rods & screws for fusion outcomes.",
          viewUrl: "/implants/spine-surgery-implants",
        },
      ],
    },
    {
      year: 2025,
      items: [
        {
          id: "tl3",
          type: "Paper",
          title: "Bone Cement Safety & Trends",
          description: "PMMA cement usage patterns and antibiotic variants.",
          viewUrl: "https://example.com/paper/pmma-bone-cement",
        },
        {
          id: "tl4",
          type: "Device",
          title: "Surgical Power Tools Upgrade",
          description: "Improved precision drilling & cutting systems.",
          viewUrl: "/devices/surgical-power-tools",
        },
      ],
    },
    {
      year: 2024,
      items: [
        {
          id: "tl5",
          type: "Book",
          title: "Essential Orthopedics (Updated Edition)",
          description: "Must-have book for fracture fixation and basics.",
          viewUrl: "https://example.com/book/essential-orthopaedics",
        },
      ],
    },
  ],

  // ✅ 10) Coverage Heatmap (Topic x Content Type)
  heatmap: {
    topics: ["Trauma", "Spine", "Arthroplasty", "Sports Medicine", "Pediatrics"],
    types: ["Books", "Papers", "Implants", "Devices"],
    matrix: [
      [10, 22, 15, 9], // Trauma
      [6, 12, 11, 5],  // Spine
      [8, 16, 14, 6],  // Arthroplasty
      [5, 10, 8, 4],   // Sports Med
      [4, 8, 6, 3],    // Pediatrics
    ],
  },

  // ✅ 11) Swipe Cards (Tinder-style)
  swipeCards: [
    {
      id: "sw1",
      type: "Book",
      title: "Essential Orthopaedics",
      description: "A core foundation book for trauma and general orthopedics.",
      viewUrl: "https://example.com/book/essential-orthopaedics",
    },
    {
      id: "sw2",
      type: "Paper",
      title: "PMMA Bone Cement: Trends & Safety",
      description: "Research insights about cement usage in arthroplasty.",
      viewUrl: "https://example.com/paper/pmma-bone-cement",
    },
    {
      id: "sw3",
      type: "Implant",
      title: "Interlocking Nails",
      description: "Intramedullary fixation for long bone fractures.",
      viewUrl: "/implants/interlocking-nails",
    },
    {
      id: "sw4",
      type: "Device",
      title: "Plate Benders",
      description: "Essential tool for plate contouring during ORIF surgery.",
      viewUrl: "/devices/plate-benders",
    },
    {
      id: "sw5",
      type: "Blog",
      title: "Orthopedic Materials Market",
      description: "Market insights on biomaterials, applications, and regions.",
      viewUrl: "/blog/orthopedic-materials-market",
    },
  ],

  // ✅ 12) Anatomy Explorer (hotspot regions)
  bodyRegions: [
    {
      id: "r1",
      label: "Shoulder",
      position: { top: "90px", left: "52%" },
    },
    {
      id: "r2",
      label: "Spine",
      position: { top: "140px", left: "50%" },
    },
    {
      id: "r3",
      label: "Hip",
      position: { top: "185px", left: "52%" },
    },
    {
      id: "r4",
      label: "Knee",
      position: { top: "235px", left: "50%" },
    },
    {
      id: "r5",
      label: "Ankle",
      position: { top: "275px", left: "52%" },
    },
  ],

  // ✅ 13) AI Insights Cards
  aiInsights: [
    {
      id: "ai1",
      key: "books",
      icon: "📚",
      title: "Books Available",
      value: 0,
      trend: "up",
      trendLabel: "Growing",
      description: "Books count updates live based on your filters.",
    },
    {
      id: "ai2",
      key: "papers",
      icon: "📄",
      title: "Research Papers",
      value: 0,
      trend: "up",
      trendLabel: "Trending",
      description: "Papers count updates based on topic and year range.",
    },
    {
      id: "ai3",
      key: "implants",
      icon: "🦴",
      title: "Implants Coverage",
      value: 0,
      trend: "steady",
      trendLabel: "Stable",
      description: "Implants related to topics like Trauma, Spine and Arthroplasty.",
    },
    {
      id: "ai4",
      key: "devices",
      icon: "🛠",
      title: "Devices & Tools",
      value: 0,
      trend: "up",
      trendLabel: "Improving",
      description: "Device availability helps surgical readiness and learning.",
    },
    {
      id: "ai5",
      key: "trend",
      icon: "🔥",
      title: "Trending Topic",
      value: "Trauma Fixation",
      trend: "up",
      trendLabel: "Hot",
      description: "Trauma-related resources show consistently high interest.",
    },
  ],
};

export default insightsData;
