export const data = {
  baseUrl: 'https://www.williamto.com',
  name: 'William To',
  personalStatement: "I'm a mission-driven engineer who thrives at the intersection of clean code, cloud architecture, and real-world impact. I believe engineering is a craft—and I bring equal rigor to system design, testing strategy, and team culture.",
  pictureUrl: '/assets/portfolio-picture.png',
  about: [
    "I'm a Senior Software Engineer with over 5 years of experience architecting and delivering secure, cloud-native applications for healthcare, fintech, and enterprise domains. I’m passionate about designing resilient systems, optimizing developer experience, and shipping high-impact software.",
    "I specialize in .NET 8, C#, React, Python, and cloud platforms like Azure and AWS. I’ve led full-stack and DevOps initiatives involving infrastructure as code (Terraform, Bicep), secret rotation governance, RBAC design, and real-time analytics. I thrive in fast-paced environments where security, performance, and scalability are top priorities."
  ],
  education: [
    {
      name: 'Bachelor of Engineering (Honours) Diploma in Professional Engineering Practice (ICT) (Software)',
      location: 'University Of Technology Sydney',
      startDate: '2015',
      endDate: '2023',
      descriptions: [
        '•	Undertook a undergraduate capstone research project on Face Mask Detection using Artificial Intelligence and Machine Learning.',
        '•	GPA: 6.25',
        '•	WAM: 82',
      ],
    },
    {
      name: 'High School Certificate',
      location: 'Westfield Sports High School',
      startDate: '2009',
      endDate: '2015',
      descriptions: [
        '• Designed and developed "Enigma Run", a side-scroller web player game, as a major final project for the Industrial Technology Multimedia course.',
      ],
    },
    {
      name: 'National Computer Science School (NCSS) Summer Program',
      location: 'University Of Sydney',
      startDate: '2013',
      endDate: '2015',
      descriptions: [
        '• Developed "Cinemeow," a web application, in 10 days with a cross-functional team, enabling users to create, comment on, watch, and share videos live with friends.',
      ],
    },
  ],
  educationexperience: [
    {
      name: '',
      title:
        'Bachelor of Engineering (Honours) Diploma in Professional Engineering Practice (ICT) (Software)',
      jobtitles: ['University Of Technology Sydney'],
      date: '2015 - 2023',
      descriptions: [
        '•	Graduated with First Class Honours',
        '•	Undertook a capstone research project on comparative analysis of ChatGPT3 and Google Bard.',
      ],
    },
    {
      name: '',
      title: 'High School Certificate',
      jobtitles: ['Westfield Sports High School'],
      date: '2009 - 2015',
      descriptions: [
        '• Designed and developed "Enigma Run," a side-scroller web player game, as a major final project for the Industrial Technology Multimedia course.',
      ],
    },
    {
      name: '',
      title: 'National Computer Science School (NCSS) Summer Program',
      jobtitles: ['University Of Sydney'],
      date: '2013 - 2015',
      descriptions: [
        '• Developed "Cinemeow," a web application, in 10 days with a cross-functional team, enabling users to create, comment on, watch, and share videos live with friends.',
      ],
    },
  ],
  experience: [
    {
      name: 'PicNet',
      title: 'Senior Software Engineer',
      jobtitles: ['Senior Software Engineer'],
      date: 'Jan 2024 - Present',
      descriptions: [
        'Leading end-to-end software solutions and infrastructure initiatives at PicNet, partnering with top-tier Australian businesses and government sectors including NSW Health. Responsible for architecting scalable cloud solutions, optimizing enterprise-scale systems, and managing complex client deliveries while mentoring junior developers.'
      ],
      achievements: [
        'Led comprehensive Azure migration project, designing Infrastructure as Code (Terraform) solutions that reduced deployment effort by 70% and enabled automated provisioning of App Service, Key Vault, SQL Database, and Storage Accounts',
        'Optimized NSW Health database indexes on massive TB-scale systems, shrinking query response times from hours to minutes and unlocking timely insights for clinical analysts',
        'Architected and deployed Lymbase clinical platform on AWS using containerized Python-Flask microservices and React frontend, implementing secure token-based authentication',
        'Built advanced analytics with automated circumference-change detection, cutting clinical assessment time by 30% and providing instant visual insights',
        'Established unified secret-management program across Azure Key Vault and AWS Secrets Manager, eliminating plaintext credentials and automating organization-wide secret rotation',
        'Developed robust integration pipelines for Lightspeed, Xero, and Hello Club APIs, enabling real-time synchronization of sales, billing, and activity data across platforms',
        'Collaborated with NSW Health to integrate four new patient-file formats into mLoad, reducing file-processing errors by 90% and cutting turnaround time by 50%'
      ],
      tags: [
        'Azure', 'AWS', 'Terraform', 'Python', 'Flask', 'React', 'Docker',
        'SQL Server', 'Azure DevOps', 'GitHub Actions', 'Kubernetes', 'C#'
      ]
    },
    {
      name: 'PicNet',
      title: 'Junior Software Engineer',
      jobtitles: ['Junior Software Engineer'],
      date: 'Feb 2022 - Jan 2024',
      descriptions: [
        'Developed and modernized critical healthcare and business applications while contributing to cloud infrastructure initiatives. Focused on improving system performance, user experience, and automating manual processes for major clients including NSW Health and Guide Dogs NSW.'
      ],
      achievements: [
        'Modernized NSW Health patient-data uploader with row-level validation engine and migrated FTP to Azure Blob SFTP, boosting throughput 4x and achieving near-zero transfer failures across statewide hospitals',
        'Built custom Power BI commenting visual (TypeScript + Node.js) with auto-tagging functionality, boosting dashboard engagement by 60% and eliminating email-based feedback loops',
        'Re-platformed PicNet\'s website to Astro + AWS Amplify architecture with GitHub Actions CI/CD, improving Lighthouse performance from 60 to 97 and enabling zero-downtime releases',
        'Automated SharePoint-to-Azure SQL data workflows for Guide Dogs NSW using metadata-driven Azure Functions pipeline, accelerating program reporting by 80%',
        'Upgraded NSW Health application security from legacy AD groups to lightweight RBAC, cutting login-to-dashboard latency by 70% and simplifying onboarding for 600+ clinical users'
      ],
      tags: [
        'Azure Functions', 'TypeScript', 'Node.js', 'Power BI', 'Astro',
        'AWS Amplify', 'SharePoint', 'Azure SQL', 'Active Directory', 'C#'
      ]
    },
    {
      name: 'OpenHomeLoan',
      title: 'Intern Software Developer',
      jobtitles: ['Intern Software Developer'],
      date: 'Aug 2020 - April 2021',
      descriptions: [
        'Developed automated loan processing systems and customer-facing web applications as part of a dynamic fintech startup environment. Collaborated directly with mortgage brokers and business stakeholders to create tools that streamlined loan approval processes.'
      ],
      achievements: [
        'Built comprehensive ASP.NET + SalesTrekker API loan-automation engine that tripled approval speed and delivered personalized home-loan recommendations at scale',
        'Developed responsive marketing landing pages that increased conversion rates by 25% through improved user experience and optimized customer journey flows',
        'Collaborated with cross-functional teams of mortgage brokers to gather requirements and iterate on CRM functionality based on real-world usage feedback'
      ],
      tags: [
        'ASP.NET', 'C#', 'SalesTrekker API', 'HTML/CSS', 'JavaScript', 'SQL Server'
      ]
    }
  ],
  header: {
    links: [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'Experience',
        href: '/experiences',
      },
      {
        name: 'Projects',
        href: '/projects',
      },
      {
        name: 'Research',
        href: '/research',
      },
      {
        name: 'Contact',
        href: '/contact',
      },
    ],
  },
  footer: {
    links: [
      {
        header: 'Social',
        links: [
          {
            name: 'Github',
            href: 'https://github.com/',
            isExternal: true,
          },
          {
            name: 'Linkedin',
            href: 'https://www.linkedin.com/in/willy2/',
            isExternal: true,
          },
          {
            name: 'Email',
            href: 'mailto:williamto222@gmail.com',
            isExternal: true,
          },
        ],
      },
      {
        header: ' ',
        links: [
          {
            name: 'Home',
            href: '/',
            isExternal: false,
          },
          {
            name: 'Experience',
            href: '/experiences',
            isExternal: false,
          },
          {
            name: 'Projects',
            href: '/projects',
            isExternal: false,
          },
        ],
      },
      {
        header: ' ',
        links: [
          {
            name: 'Research',
            href: '/research',
            isExternal: false,
          },
          {
            name: 'Contact',
            href: '/contact',
            isExternal: false,
          },
        ],
      },
    ],
  },
  transferable: [
    {
      id: '01',
      name: 'Communication & Stakeholder Engagement',
      description:
        'Skilled in translating technical complexity into clear business value. Frequently present solutions to cross-functional teams and non-technical stakeholders. Led requirements workshops, authored technical documentation, and facilitated feedback loops across distributed teams and enterprise clients.'
    },
    {
      id: '02',
      name: 'Leadership & Ownership',
      description:
        'Proven ability to lead end-to-end delivery of critical projects. Served as technical lead on cloud migration and system modernization initiatives. Mentored junior developers, defined architecture patterns, enforced quality standards, and helped shape engineering culture within Agile teams.'
    },
    {
      id: '03',
      name: 'Time Management & Prioritization',
      description:
        'Able to manage competing priorities in high-pressure environments. Delivered concurrent client deliverables and internal initiatives while balancing full-time work and study. Known for consistent on-time delivery, milestone focus, and strategic delegation when leading sprints or multi-phase projects.'
    },
    {
      id: '04',
      name: 'Agile & Cross-Functional Collaboration',
      description:
        'Experienced in Agile delivery models including Scrum and Kanban. Comfortable collaborating across product, QA, design, DevOps, and business teams. Regularly run sprint ceremonies, backlog grooming, and Jira/Confluence-based tracking to ensure alignment and delivery velocity.'
    },
    {
      id: '05',
      name: 'Problem Solving & Adaptability',
      description:
        'Known for rapidly analyzing unfamiliar codebases, debugging production issues under pressure, and implementing robust, long-term fixes. Thrives in ambiguous situations by taking initiative, asking the right questions, and driving clarity in both team and system contexts.'
    }
  ],
  technical: [
    {
      id: '01',
      name: 'Languages & Scripting',
      tags: [
        'C#', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS', 'PowerShell', 'Bash'
      ]
    },
    {
      id: '02',
      name: 'Frameworks & Libraries',
      tags: [
        '.NET 8', 'ASP.NET Core', 'Flask', 'React', 'Angular', 'Svelte', 'Astro',
        'Node.js', 'Express', 'xUnit', 'Moq', 'Dapper', 'Entity Framework'
      ]
    },
    {
      id: '08',
      name: 'Agile & Team Collaboration',
      tags: [
        'Scrum', 'Kanban', 'Jira', 'Confluence', 'Sprint Planning', 'Backlog Grooming',
        'Stakeholder Communication', 'Cross-Functional Teams'
      ]
    },
    {
      id: '04',
      name: 'DevOps & CI/CD Tooling',
      tags: [
        'GitHub Actions', 'Azure DevOps', 'Docker', 'Docker Compose', 'IIS',
        'CI/CD Pipelines', 'DevSecOps', 'Secrets Rotation', 'Static Code Analysis'
      ]
    },
    {
      id: '05',
      name: 'Infrastructure as Code (IaC)',
      tags: [
        'Terraform', 'Bicep', 'ARM Templates'
      ]
    },
    {
      id: '06',
      name: 'Data, Integration & Reporting',
      tags: [
        'SQL Server', 'PostgreSQL', 'Power BI', 'REST APIs', 'GraphQL',
        'OAuth2', 'Excel Automation', 'SharePoint Integration'
      ]
    },
    {
      id: '07',
      name: 'Architecture & Design Patterns',
      tags: [
        'Clean Architecture', 'Microservices', 'Event-Driven Design',
        'Domain-Driven Design (DDD)', 'RBAC Security', 'Zero-Trust Security',
        'Test-Driven Development (TDD)', 'Scalable API Design','Serverless Architecture', 'Hybrid Cloud Deployments', 'Multi-Cloud Readiness',
        'Scalable API Gateways', 'Zero-Trust Security Architecture'
      ]
    },
    {
      id: '08',
      name: 'Cloud – Azure Services',
      tags: [
        'Azure', 'Azure Functions', 'Azure App Service', 'Azure API Management',
        'Azure Key Vault', 'Azure Blob Storage', 'Azure SQL Database',
        'Azure Storage Queues', 'Azure Monitor', 'Azure Application Insights',
        'Azure Service Bus', 'Azure DevOps', 'Azure Active Directory',
        'Azure Static Web Apps'
      ]
    },
    {
      id: '09',
      name: 'Cloud – AWS Services',
      tags: [
        'AWS', 'AWS ECS Fargate', 'AWS Lambda', 'AWS RDS', 'AWS S3',
        'AWS Secrets Manager', 'AWS CloudWatch', 'AWS IAM', 'AWS Route 53',
        'AWS CloudFormation', 'AWS Amplify', 'AWS Certificate Manager'
      ]
    }
  ],
  expertise: [
    {
      id: 'expertise-1',
      name: 'Full-Stack Web Development',
      description:
        'Proficient in building end-to-end applications using modern frontend frameworks (React, Angular, Svelte, Astro) and backend stacks (.NET 8, Flask, Node.js). Experienced in architecting modular, reusable, and testable components across the UI and API layers. Skilled in delivering pixel-perfect UIs and highly-performant backends with clean architecture principles.',
      tags: ['.NET 8', 'React', 'Angular', 'Svelte', 'Flask', 'Node.js', 'TypeScript', 'SQL']
    },
    {
      id: 'expertise-2',
      name: 'Cloud Architecture & DevOps',
      description:
        'Hands-on experience designing, deploying, and managing cloud-native applications on Azure and AWS. Proficient with Infrastructure-as-Code (Terraform, Bicep), containerization (Docker, ECS Fargate), and secure CI/CD automation (GitHub Actions, Azure DevOps). Delivered highly available, scalable systems with zero-downtime releases and 70% deployment effort reduction.',
      tags: ['Azure', 'AWS', 'Terraform', 'Bicep', 'Docker', 'GitHub Actions', 'Azure DevOps']
    },
    {
      id: 'expertise-3',
      name: 'Secure Application Design',
      description:
        'Built enterprise-ready platforms with zero-trust principles, RBAC, and secure token-based authentication. Designed and implemented organization-wide secrets management using Azure Key Vault and AWS Secrets Manager, eliminating plaintext credentials across cloud environments.',
      tags: ['RBAC', 'OAuth2', 'Secrets Manager', 'Key Vault', 'Zero-Trust Security']
    },
    {
      id: 'expertise-4',
      name: 'Data Engineering & API Integration',
      description:
        'Developed and optimized complex ETL pipelines, RESTful APIs, and third-party integrations (Xero, Lightspeed, Hello Club, Power BI). Automated data ingestion from Excel, SharePoint, and custom formats, reducing processing time by up to 80% and cutting manual effort significantly.',
      tags: ['ETL', 'REST APIs', 'Power BI', 'PostgreSQL', 'Excel Automation', 'SharePoint']
    },
    {
      id: 'expertise-5',
      name: 'Testing & DevSecOps Automation',
      description:
        'Engineered test-driven development pipelines using xUnit, Moq, and containerized CI workflows. Integrated security scanning, code quality checks, and deterministic test runs into GitHub Actions and Azure DevOps. Contributed to internal tooling and test frameworks to reduce post-release bugs by 50%.',
      tags: ['xUnit', 'Moq', 'CI/CD', 'DevSecOps', 'Test Automation']
    },
    {
      id: 'expertise-6',
      name: 'Agile Delivery & Technical Leadership',
      description:
        'Led sprint ceremonies, estimation sessions, and stakeholder workshops. Coordinated delivery across developers, QA, analysts, and clients using Agile/Scrum methodologies. Produced onboarding docs, architectural diagrams, and delivery plans to align cross-functional teams and maintain delivery velocity.',
      tags: ['Agile', 'Scrum', 'Kanban', 'Jira', 'Confluence', 'Stakeholder Management']
    }
  ],
  projects: [
    {
      title: 'Online Test Platform',
      isFeatured: true,
      thumbnail: '/assets/bfg-webapp.png',
      githubUrl: 'https://github.com/willyyto/TestSystem',
      liveUrl: '',
    },
    {
      title: 'OpenHomeLoan CRM Web Application',
      isFeatured: true,
      thumbnail: '/assets/bfg-webapp.png',
      githubUrl: '',
      liveUrl: 'https://openloans.com.au/refinance/',
    },
    {
      title: 'Old Personal Portfolio',
      isFeatured: true,
      thumbnail: '/assets/astro-portfolio.png',
      githubUrl: 'https://github.com/willyyto/william-portfolio-old',
      liveUrl: 'https://willyyto.github.io/william-portfolio-old',
    },
    {
      title: 'Cinemeow',
      isFeatured: true,
      thumbnail: '/assets/cinemeow.png',
      githubUrl: 'https://github.com/ncss/projects-2015-3',
    },
    {
      title: 'Enigma Run Game',
      isFeatured: true,
      thumbnail: '/assets/enigma-run.png',
      githubUrl: 'https://github.com/willyyto/EnigmaRun',
    },
  ],
  research: [
    {
      title: 'Comparative Analysis on AI Language Models: ChatGPT-3 and Bard in Debate',
      imageUrl: '/assets/chatgpt-bard.webp',
      buttonUrl: 'https://www.williamto.com/assets/files/chatgpt-vs-bard.pdf',
      description: [
        "This research paper explores the capabilities and limitations of advanced language models, specifically OpenAI's ChatGPT-3 and Google's Bard, in the context of debating controversial topics. Through structured debates spanning four categories—factual, optional, planning, and problem-solving—this study evaluates each model's performance in terms of relevance, coherence, and factual accuracy. The findings reveal that while both models exhibit proficient linguistic abilities, ChatGPT-3 generally outperforms Bard, especially in maintaining conversational fluidity and mimicking human-like responses. This comparative analysis highlights the evolving efficacy of language models in handling complex communicative tasks and underscores the ongoing need for advancements to address current limitations.",
      ],
      stats: [
        {
          name: 'Total Debate Categories',
          value: '4',
        },
        {
          name: 'Total Debates Conducted',
          value: '20',
        },
        {
          name: 'Language Models Analyzed',
          value: '2',
        },
        {
          name: 'Key Performance Metrics',
          value: 'Relevance\n Coherence\n Factual Accuracy',
        },
      ],
    },
    {
      title:
        'Face Mask Detecting Using Artificial Intelligence, Machine Learning and Computer Vision',
      imageUrl: '/assets/face-mask-detection.jpg',
      buttonUrl: 'https://www.williamto.com/assets/files/face_mask_detection_research_question.pdf',
      description: [
        'In response to the COVID-19 pandemic, which has affected over 603 million people and caused nearly 7 million deaths, my capstone project investigates the implementation of face mask detection technology using artificial intelligence (AI) and machine learning (ML). This research addresses the critical role of AI in enhancing public health measures, particularly through the enforcement of mask-wearing policies in densely populated areas. By utilizing advanced object detection algorithms, such as Convolutional Neural Networks (CNN) and You Only Look Once (YOLO), the study aims to develop efficient systems capable of real-time, accurate face mask detection. The project explores both the technical challenges and societal barriers, such as privacy concerns and legal restrictions, that impact the deployment of these technologies. Ultimately, the research highlights the potential of AI and ML to support public health strategies against highly transmissible diseases.',
      ],
      stats: [
        {
          name: 'Global Impact',
          value: '603 million cases',
        },
        {
          name: 'Fatalities',
          value: '7 million deaths',
        },
        {
          name: 'Detection Accuracy',
          value: 'up to 98%',
        },
        {
          name: 'Processing Speed',
          value: 'milliseconds',
        },
      ],
    },
  ],
  researchachievements: [
    [
      {
        id: '01',
        name: 'Expertise in AI and Machine Learning',
        description:
          'Demonstrated deep knowledge in AI and ML through the development of a real-time face mask detection system using cutting-edge technologies like CNN and YOLO algorithms. This project showcases my ability to apply complex AI models to solve pressing public health issues, making me a valuable asset in technology-driven roles.',
      },
      {
        id: '02',
        name: 'Problem-solving and Innovation',
        description:
          'Addressed key challenges in the implementation of AI technologies in public spaces, navigating through technical, societal, and ethical barriers. My innovative approach to utilizing AI for enhancing public safety illustrates my capability to tackle complex problems creatively and effectively.',
      },
    ],
    [
      {
        id: '03',
        name: 'Technical Proficiency and Adaptability',
        description:
          'Skilled in adapting and integrating sophisticated object detection algorithms to enhance system performance under varying operational conditions. This adaptability indicates my competence in leveraging technology to optimize outcomes, suitable for dynamic and challenging environments.',
      },
      {
        id: '04',
        name: 'Ethical AI Development',
        description:
          'Committed to the ethical implications of AI deployments, focusing on privacy and legal considerations while implementing AI solutions. My awareness and proactive management of these aspects demonstrate my dedication to responsible AI development and compliance.',
      },
    ],
  ],
};
