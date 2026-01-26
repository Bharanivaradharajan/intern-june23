const booksData = [
  {
    id: 1,
    type: "Books",
    title: "Essential Orthopaedics (Including Clinical Methods)",
    author: "J Maheshwari & Vikram A Mhaskar",
    year: 2022,
    imageUrl: "https://m.media-amazon.com/images/I/71FdzDdV7yL._AC_UY218_.jpg",
    buyUrl: "https://www.amazon.in/ESSENTIAL-ORTHOPAEDICS-Maheshwari/dp/9354653766/ref=sr_1_1?dib=eyJ2IjoiMSJ9.AY_RfqD7-Oufv_BF7omiMr64HNCGHSkebwNdWO1Jul2jGf9rjJflinnRmYbKh0u8jOF4ambgKSkarLrX6QOHULJ96ItACaQmNJKbkNIvqHC7bz0eFMHsI9WBMFjCi5sQ3ZJs6s_a0kyWz2Am5ZEoyG3fn2k3c3GLY1jB-jUU_56oh5bNEKSYKZ4ASYg6rrQ64ILDx_1ewCkiUdcFOmErhMN1Vq--Lg0LbDrfzps7aqg.QZ9f22ZEVUFtLedQWDm22A53z6PHDezAr7OdGGYXIPo&dib_tag=se&qid=1769411985&s=books&sr=1-1&xpid=BWk18IPoW9Z1F"
  },
  {
    id: 2,
    type: "Books",
    title: "Textbook of Orthopaedics",
    author: "John Ebnezar",
    year: 2017,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 3,
    type: "Books",
    title: "Manipal Manual of Orthopaedics",
    author: "Vivek Pandey",
    year: 2019,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 4,
    type: "Books",
    title: "Apley & Solomon's System of Orthopaedics and Trauma",
    author: "Ashley Blom, David Warwick, & Michael Whitehouse",
    year: 2017,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 5,
    type: "Books",
    title: "Campbell's Operative Orthopaedics: 4-Volume Set",
    author: "Frederick M Azar & James H Beaty",
    year: 2020,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 6,
    type: "Books",
    title: "Practical Orthopedic Examination Made Easy",
    author: "Manish Kumar Varshney",
    year: 2020,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 7,
    type: "Books",
    title: "Orthopaedics for Undergraduates",
    author: "Sanjeev Anand & Maryann Marya",
    year: 2021,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 8,
    type: "Books",
    title: "Clinical Examination Methods in Orthopaedics",
    author: "John Ebnezar & Rakesh John",
    year: 2020,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 9,
    type: "Books",
    title: "Miller's Review of Orthopaedics",
    author: "Mark D. Miller & Stephen R. Thompson",
    year: 2019,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 10,
    type: "Books",
    title: "Rockwood and Green's Fractures in Adults",
    author: "Paul Tornetta III & William Ricci",
    year: 2019,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 11,
    type: "Books",
    title: "Netter's Concise Orthopaedic Anatomy",
    author: "Jon C. Thompson",
    year: 2020,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 12,
    type: "Books",
    title: "Orthopaedic Physical Examination",
    author: "Ronald McRae",
    year: 2020,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 13,
    type: "Books",
    title: "Review of Orthopaedics (Miller's Review)",
    author: "Mark D. Miller",
    year: 2019,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 14,
    type: "Books",
    title: "Orthopedic Secrets",
    author: "Surena Namdari, Stephan Pill, & Samir Mehta",
    year: 2015,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 15,
    type: "Books",
    title: "Watson-Jones Fractures and Joint Injuries",
    author: "LW Plewes & CR Berkin",
    year: 2021,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 16,
    type: "Books",
    title: "Fundamentals of Orthopaedics",
    author: "Mukesh K Jain",
    year: 2020,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 17,
    type: "Books",
    title: "Orthopaedics: A Photographic Review",
    author: "John Ebnezar",
    year: 2022,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 18,
    type: "Books",
    title: "Turek's Orthopaedics: Principles and Their Applications",
    author: "Anil K. Jain",
    year: 2018,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 19,
    type: "Books",
    title: "Basic Methods of Structural Geology",
    author: "Stephen Marshak",
    year: 2021,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 20,
    type: "Books",
    title: "Surgery of the Foot and Ankle",
    author: "Michael J. Coughlin",
    year: 2014,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 21,
    type: "Books",
    title: "Orthopaedics and Trauma",
    author: "David Warwick & Ashley Blom",
    year: 2021,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 22,
    type: "Books",
    title: "Manual of Clinical Orthopaedics",
    author: "John Ebnezar",
    year: 2022,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 23,
    type: "Books",
    title: "Orthopaedic Diagnosis and Management",
    author: "K. Mohan Iyer",
    year: 2020,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 24,
    type: "Books",
    title: "Principles of Orthopaedics",
    author: "S.P. Mandal",
    year: 2019,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 25,
    type: "Books",
    title: "Operative Techniques in Orthopaedic Surgery",
    author: "Sam W. Wiesel",
    year: 2018,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 26,
    type: "Books",
    title: "Oxford Handbook of Orthopaedics and Trauma",
    author: "Gavin Bowden",
    year: 2016,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 27,
    type: "Books",
    title: "Manual of Orthopaedics",
    author: "Marc F. Swiontkowski",
    year: 2021,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 28,
    type: "Books",
    title: "Fractures and Dislocations",
    author: "John Ebnezar",
    year: 2020,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 29,
    type: "Books",
    title: "Orthopedic Surgical Oncology For Bone Tumors",
    author: "Vivek Verma",
    year: 2023,
    imageUrl: "",
    buyUrl: ""
  },
  {
    id: 30,
    type: "Books",
    title: "Basic Orthopaedics",
    author: "J.P. Jain & Anil Jain",
    year: 2022,
    imageUrl: "",
    buyUrl: ""
  }
];

export default booksData;