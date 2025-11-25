
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "William To",
  title: "Senior Software Engineer",
  avatar: "/assets/portfolio-picture.png",
  // Ensure you put resume.pdf in public/assets/files/ folder
  resumeUrl: "/assets/files/resume.pdf",
  contact: {
    email: "williamto222@gmail.com",
    phone: "(+61) 478 812 152",
    github: "github.com/willyyto",
    linkedin: "linkedin.com/in/willy2"
  },
  summary: "Senior Software Engineer specialising in distributed systems, cloud-native backend development, and high-performance data pipelines. 4+ years delivering scalable APIs, modernising legacy platforms, and architecting secure microservices across Azure and AWS. Strong focus on Clean Architecture, automation, and measurable engineering impact.",
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["C#", ".NET Core", "ASP.NET Core", "Python", "TypeScript", "SQL", "React", "Node.js", "GraphQL", "EF Core", "Autofac", "FluentValidation", "shadcn/ui", "Zustand"]
    },
    {
      category: "Cloud & DevOps",
      items: ["Azure", "AWS", "Azure Functions", "Docker", "GitHub Actions", "Azure DevOps", "Terraform", "Bicep", "Linux CI/CD", "Containerised Microservices", "IIS"]
    },
    {
      category: "Data Engineering & Integrations",
      items: ["SQL Server", "PostgreSQL", "REST APIs", "Event-Driven Systems", "Data Pipelines", "Power BI", "Excel Automation", "OAuth2", "Query Optimisation"]
    },
    {
      category: "Architecture & Practices",
      items: ["Clean Architecture", "Microservices", "DDD", "CQRS", "TDD", "Serverless", "Event-Driven Design", "Scalable API Design", "DevSecOps", "RBAC"]
    }
  ],
  experience: [
    {
      company: "PicNet, Sydney",
      role: "Senior Software Engineer",
      period: "Jan 2024 – Present",
      highlights: [
        "Cloud & Platform Modernisation — Migrated legacy workloads to Azure using Terraform and serverless Functions, reducing deployment and onboarding effort by 70%. Established organisation-wide secret-governance with Azure Key Vault and AWS Secrets Manager.",
        "Data Engineering & Performance — Optimised NSW Health's multi-terabyte SQL workloads by redesigning indexes and execution plans, reducing report processing times from hours → minutes. Automated Excel-based operational workflows into reliable SQL pipelines.",
        "Integration Engineering — Delivered real-time synchronisation pipelines for Lightspeed, Xero, and Hello Club, ensuring consistent billing, sales, and activity data across systems.",
        "Distributed Systems & Product Engineering — Architected and deployed Lymbase on AWS using containerised Python–Flask microservices and a React frontend with secure encrypted authentication. Implemented analytics workflows enabling automated clinical-measurement detection, reducing clinician assessment time by 30%.",
        "Quality & DevOps — Built extensive unit/integration test suites and Linux-based CI/CD pipelines generating verified Docker images per merge. Integrated four NSW Health patient-file formats into mLoad, reducing file errors by 90% and halving turnaround."
      ]
    },
    {
      company: "PicNet, Sydney",
      role: "Junior Software Engineer",
      period: "Feb 2022 – Jan 2024",
      highlights: [
        "System Rebuilds & Performance — Rebuilt NSW Health's patient-data uploader with row-level validation and Azure Blob SFTP, improving throughput 4× and reducing ingestion failures to near-zero. Replaced legacy AD-group auth with lightweight RBAC, cutting login latency by 70% for 600+ users.",
        "Cloud Automation — Built metadata-driven Azure Functions automating SharePoint → SQL ingestion for Guide Dogs Australia, reducing reporting cycles by 80%. Migrated PicNet's website to an Astro + AWS Amplify stack, improving Lighthouse scores from 60 → 97.",
        "Product/UI Engineering — Delivered a Power BI in-context commenting visual with identity auto-tagging, boosting analytical engagement by 60%."
      ]
    },
    {
      company: "OpenHomeLoan",
      role: "Intern Software Developer",
      period: "Aug 2020 – Apr 2021",
      highlights: [
        "Built an ASP.NET + SalesTrekker API automation engine that tripled loan-approval speed and enabled scalable personalised lending recommendations.",
        "Developed responsive marketing pages, increasing conversion rates by 25%."
      ]
    }
  ],
  projects: [
    {
      title: "FitNote – Full-Stack Fitness Tracking Platform",
      tech: ".NET 9, PostgreSQL, GraphQL, Next.js 15, React 19, Tailwind, Docker",
      description: [
        "Built a production-grade fitness platform with offline-first PWA capability, real-time workout tracking, and a searchable 400+ exercise library.",
        "Designed a scalable GraphQL API using UUID identifiers, schema-driven validation, CQRS-style resolvers, and field-level JWT authorisation.",
        "Architected a Clean Architecture backend using EF Core, Autofac, and FluentValidation.",
        "Engineered a modern React 19 frontend with shadcn/ui, Apollo cache normalisation, and Zustand for offline state management."
      ],
      link: "https://fitnote-webapp.vercel.app/",
      github: "github.com/willyyto/FitNote",
      image: "/assets/fitnote.png"
    },
    {
      title: "Test Platform – Multi-Tenant Assessment System",
      tech: ".NET 8, React, Vite, SQL Server, JWT, RBAC, CI/CD",
      description: [
        "Developed a multi-tenant assessment platform supporting per-tenant branding, timed assessments, question randomisation, and secure role-based access.",
        "Designed a scalable .NET 8 backend with domain separation and optimised SQL schema.",
        "Engineered a performant React UI with Vite, component composition, and responsive layouts.",
        "Built an automated CI/CD pipeline enabling reproducible builds and migration safety checks."
      ],
      github: "github.com/willyyto/TestSystem",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
      title: "Enigma Run – Side Scroller Game",
      tech: "Unity, C#, Game Development, Physics Engine",
      description: [
        "Developed a 2D side-scrolling platformer using Unity and C# with custom physics interactions.",
        "Implemented core game mechanics including player movement, obstacle generation, and score tracking systems.",
        "Optimized game performance and asset management for smooth frame rates."
      ],
      video: "https://player.vimeo.com/video/788888508?h=394b839436"
    }
  ],
  research: [
    {
      title: "Comparative Analysis of Advanced Language Models",
      institution: "University of Technology Sydney",
      date: "May 2023",
      description: "A case study of OpenAI's ChatGPT-3 and Bard debating on controversial topics, analyzing relevance, coherence, and factual accuracy using a custom-built debate tool.",
      link: "/assets/files/chatgpt-vs-bard.pdf",
      image: "/assets/chatgpt-bard.webp"
    },
    {
      title: "Face Mask Detection Using AI and Machine Learning",
      institution: "University of Technology Sydney",
      date: "Aug 2022",
      description: "Investigated feasibility of face mask detection using deep learning techniques (YOLOv3 and CNN) to enforce public health policies during the pandemic.",
      link: "/assets/files/face_mask_detection_research_question.pdf",
      image: "/assets/face-mask-detection.jpg"
    }
  ],
  education: {
    institution: "University of Technology Sydney (UTS)",
    degree: "Bachelor of Engineering (Honours) Diploma in Professional Engineering Practice (ICT/Software)",
    gpa: "6.2/7"
  }
};
