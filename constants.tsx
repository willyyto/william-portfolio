
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "William To",
  title: "Senior Software Engineer",
  // Ensure you put portfolio-picture.png in public/assets/ folder
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
      period: "Jan 2024 – July 2025",
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
      tech: ".NET 9, ASP.NET Core, PostgreSQL, GraphQL, Next.js 15, React 19, Tailwind, Apollo Client, Zustand, PWA",
      description: [
        "Built a production-grade fitness platform with offline-first PWA capability, real-time workout tracking, and a searchable 400+ exercise library.",
        "Designed a scalable GraphQL API using UUID identifiers, schema-driven validation, CQRS-style resolvers, and field-level JWT authorisation for secure and predictable execution.",
        "Architected a Clean Architecture backend using EF Core, Autofac, and FluentValidation, improving testability, modularity, and separation of concerns.",
        "Engineered a modern React 19 frontend with shadcn/ui, Apollo cache normalisation, dynamic code-splitting, and Zustand for predictable offline state management.",
        "Implemented responsive UI/UX patterns, theme management, and accessibility improvements using Tailwind and component composition best practices.",
        "Utilised Cursor and Claude Code to accelerate refactoring, documentation, test generation, and architectural exploration."
      ],
      // Ensure you put fitnote.png in public/assets/ folder
      image: "/assets/fitnote.png",
      github: "github.com/willyyto/FitNote",
      link: "https://fitnote-webapp.vercel.app/"
    },
    {
      title: "Test Platform – Multi-Tenant Assessment System",
      tech: ".NET 8, React, Vite, Tailwind CSS, SQL Server, JWT, RBAC, CI/CD",
      description: [
        "Developed a multi-tenant assessment platform supporting per-tenant branding, timed assessments, question randomisation, and secure role-based access with JWT + RBAC.",
        "Designed a scalable .NET 8 backend with domain separation, optimised SQL Server schema design, and predictable multi-tenant query performance.",
        "Engineered a performant React UI with Vite, component composition, and responsive layouts for consistent UX across branded tenants.",
        "Built an automated CI/CD pipeline enabling reproducible builds, migration safety checks, automated tests, and seamless production deployments."
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      github: "github.com/willyyto/TestSystem"
    },
    {
      title: "Enigma Run – Unity Side Scroller",
      tech: "Unity, C#, .NET, 2D Animation",
      description: [
        "Developed a classic 2D side-scrolling platformer game using the Unity Game Engine.",
        "Implemented complex character movement controllers, physics-based interactions, and enemy AI logic using C# scripts.",
        "Designed and built immersive level environments with parallax scrolling backgrounds and dynamic asset management."
      ],
      video: "https://player.vimeo.com/video/788888508?h=394b839436"
    }
  ],
  research: [
    {
      title: "Comparative Analysis of Advanced Language Models: ChatGPT-3 vs Bard",
      institution: "University of Technology Sydney",
      date: "2023",
      description: "Conducted a comprehensive comparative analysis of ChatGPT-3 and Google's Bard in a structured debate format on controversial topics. Developed a custom Node.js-based AI debate orchestration tool to automate interactions. Evaluated models based on relevance, coherence, persuasiveness, and factual accuracy. Findings demonstrated ChatGPT's superior conversational fluidity and logical structuring compared to Bard's fact-centric but less cohesive responses.",
      link: "/assets/files/chatgpt-vs-bard.pdf",
      image: "/assets/chatgpt-bard.webp"
    },
    {
      title: "Face Mask Detection Using AI & Machine Learning",
      institution: "University of Technology Sydney",
      date: "2022",
      description: "Investigated deep learning methodologies for real-time face mask detection to support public health initiatives. Analyzed and compared the efficacy of Convolutional Neural Networks (CNNs), specifically YOLOv3 and ResNet-50 architectures. Concluded that YOLOv3 provided the optimal balance of computational efficiency and detection accuracy for real-time deployment in high-density public spaces.",
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
