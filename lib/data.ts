import type { LucideIcon } from "lucide-react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export type ContactInfo = {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export type Education = {
  institution: string
  degree: string
  duration: string
  location: string
  details: string[]
}

export type CoreCompetency = string

export type ProfessionalExperience = {
  company: string
  role: string
  duration: string
  location: string
  description: string[]
}

export type Project = {
  title: string
  category: string
  duration: string
  description: string[]
  technologies: string[]
  // imageUrl: string // Added imageUrl for projects
}

export type Certification = string

export type ProgrammingLanguage = string

export type PortfolioData = {
  name: string
  tagline: string
  profilePicture: string // Added profilePicture
  aboutHeading?: string // Added for About section heading
  aboutContent?: string[] // Added for About section content
  contact: ContactInfo[]
  education: Education[]
  coreCompetencies: CoreCompetency[]
  professionalExperience: ProfessionalExperience[]
  projects: Project[]
  certifications: Certification[]
  programmingLanguages: ProgrammingLanguage[]
  cvUrl: string // Added cvUrl
}

export const portfolioData: PortfolioData = {
  name: "Vishnu S",
  tagline: "AI & Data Science Enthusiast | Building Intelligent Solutions",
  profilePicture: "/placeholder.svg?height=400&width=400", // Placeholder profile picture
  aboutHeading: "About Me", // Added heading
  aboutContent: [
    "Hello! I&apos;m <span class=\"font-semibold\">Vishnu S</span>, a passionate AI and Data Science enthusiast based in Chennai. My journey involves exploring the depths of Large Language Models (LLMs), vector databases, and advanced AI techniques to build intelligent and impactful solutions.",
    "I thrive on transforming complex data into actionable insights and developing cutting-edge applications that leverage the power of Artificial Intelligence."
  ],
  cvUrl: "/Vishnu_S_Resume.pdf", // Updated to point to actual resume file
  contact: [
    { icon: Linkedin, label: "LinkedIn", value: "Vishnu S", href: "https://www.linkedin.com/in/vishnu-s-85b258217/" }, // Replace with actual LinkedIn URL
    { icon: Phone, label: "Phone", value: "9360562951", href: "tel:+919360562951" },
    { icon: Mail, label: "Email", value: "vishnusankar058@gmail.com", href: "mailto:vishnusankar058@gmail.com" },
    { icon: Github, label: "GitHub", value: "vishnu-san", href: "https://github.com/Vishnusan58/" }, // Replace with actual GitHub URL
  ],
  education: [
    {
      institution: "Anna University",
      degree: "B. Tech Artificial Intelligence and Data Science (CGPA 8.2)",
      duration: "Oct 2021 - Present",
      location: "Chennai",
      details: ["Rajalakshmi Institute of Technology"],
    },
  ],
  coreCompetencies: [
    "Data Analysis",
    "Selenium",
    "Business Intelligence",
    "Data Visualization",
    "Artificial Intelligence",
    "Agile Methodologies",
    "Vector Databases",
    "Computer Vision",
    "Database Management",
    "Machine Learning",
    "Azure Cloud Services",
    "Manual Testing",
  ],
  professionalExperience: [
    {
      company: "Neoware.AI",
      role: "Intern - Data Science & AI Team",
      duration: "Jan 2025 - Present",
      location: "Chennai",
      description: [
        "Worked as an intern in the Data Science & AI Department at Neoware.AI, focusing on research in Large Language Models (LLMs), vector databases, embedding models, RAG techniques, and Agentic AI.",
        "Built an AI-powered chatbot that leverages Retrieval-Augmented Generation (RAG) and vector databases to answer user queries with high contextual relevance and accuracy.",
        "Applied Model Context Protocol (MCP) and autonomous agent frameworks to enhance information retrieval, reasoning, and system responsiveness.",
      ],
    },
  ],
  projects: [
    {
      title: "Doubt AI – AI-Powered Chatbot using RAG",
      category: "Backend Development",
      duration: "Mar 2025 - Apr 2025",
      description: [
        "Built a modular AI chatbot interface using Retrieval-Augmented Generation (RAG) integrated with Google Gemini for natural language generation and Pinecone for vector-based semantic retrieval.",
        "Designed a robust backend pipeline in Next.js to manage embedding, query routing, and document retrieval using Azure Cosmos DB (Mongo API) for structured data storage.",
        "Implemented context-aware query refinement and insurance-specific utility modules to improve accuracy and domain relevance of chatbot responses.",
      ],
      technologies: ["Google Gemini API", "Pinecone", "Azure Cosmos DB", "MongoDB"],
      // imageUrl: "/placeholder.svg?height=400&width=600", // Placeholder image for project
    },
    {
      title: "Advanced Crack Detection System",
      category: "Deep Learning & Computer Vision",
      duration: "Aug 2024 - Sep 2024",
      description: [
        "Developed an image classification system leveraging ResNet-50 transfer learning, achieving accuracy in object detection.",
        "Engineered real-time processing pipeline to optimize inference speed, resulting in reduced processing time.",
      ],
      technologies: ["OpenCV", "Python"],
      // imageUrl: "/placeholder.svg?height=400&width=600", // Placeholder image for project
    },
    {
      title: "Skin Cancer Detection with Multi-Input Deep Learning Model",
      category: "Machine Learning & Computer Vision",
      duration: "Jan 2025 – Feb 2025",
      description: [
        "Built a multi-input deep learning model combining KerasCV EfficientNetV2 for image features and dense layers for tabular data (age, sex, lesion location), enabling accurate skin cancer lesion detection.",
        "Engineered a robust tf.data pipeline with augmentation, class balancing techniques (upsampling, downsampling, class weighting), and trained the model with validation AUC-based checkpointing for optimal generalization.",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "KerasCV",
        "Pandas",
        "NumPy",
        "OpenCV",
        "scikit-learn",
        "Matplotlib",
        "HDF5",
      ],
      // imageUrl: "/placeholder.svg?height=400&width=600", // Placeholder image for project
    },
  ],
  certifications: [
    "Certified Google IT support professional",
    "Certified IBM Data Analyst Professional",
    "Certified Meta Backend Developer",
    "Certified Google Project Management",
    "Tableau Business Intelligence Analyst Professional",
    "Applied Data Science Capstone",
    "Programming in Python",
    "Introduction to Probability",
  ],
  programmingLanguages: ["Python", "SQL", "Tableau", "Alteryx", "Aqua", "LLM Integration", "Cloud Storage (Azure)"],
}
