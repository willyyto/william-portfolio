export const data = {
  baseUrl: 'https://www.williamto.com',
  name: 'William To',
  pictureUrl: '/assets/portfolio-picture.png',
  about: [
    'I am a graduate software engineer deeply passionate about crafting products that deliver delightful experiences and indispensable utility to end-users. My career goal is to continually enhance my technological acumen to tackle complex challenges in the future.',
    'I specialise in full-stack development, primarily using C# with .NET Core and .NET Framework for backend solutions, and Svelte, Angular and React with TypeScript/JavaScript for frontend development. My professional experience has also enabled me to delve into other areas, including DevOps, data analytics, and cloud technologies such as Amazon Web Services and Microsoft Azure.',
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
        '• Designed and developed "Enigma Run," a side-scroller web player game, as a major final project for the Industrial Technology Multimedia course.',
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
  experience: [
    {
      name: 'Picnet',
      location: 'Crows Nest, NSW',
      description:
        "I am currently employed as an junior engineer at Picnet, an IT service and consulting firm whose clients include some of Australia's largest businesses and household names in the corporate and public sectors.",
      startDate: 'Feb 2022',
      endDate: 'Present',
      projects: [
        {
          name: 'NSW Health Database Optimisation',
          location: 'NSW E-Health',
          descriptions: [
            '•	Responsible for analysing data and creating optimised views for reporting complex data within NSW Health.',
            '•	Improved the querying performance of previous reporting views and tables through indexing and caching data.',
            '•	The key finding from analysing patient data were communicated in a business case report towards NSW Health senior management.',
            '•	Attained knowledge of SQL Server Management Studio, Server Integration Services, Server Reporting Services, Server Analysis Services, and Server Data Tools.',
          ],
        },
        {
          name: 'NSW Health Web Application Security Enhancement',
          location: 'NSW E-Health',
          descriptions: [
            '•	Designed and developed a more secure security architecture for the NSW Health Web Application using Active Directory, AngularJS and .Net framework.',
            '•	Improved authentication performance for the NSW Health Web Application by about 55%.',
            '•	Facilitated the migration of NSW Health Web Application from on-premises to cloud using Amazon Web Service.',
            '•	Collaborated with NSW E-Health for the testing and deployment of the Web Application onto the new cloud platform.',
            '•	Created documentation for the web application including database schemas diagrams for the purpose of documenting the database structure.',
            '•	Reviewed code and developed unit test to ensure all security features are operational.',
          ],
        },
        {
          name: 'Centazio Data Integration Dashboard ',
          location: 'PicNet',
          descriptions: [
            '•	Designed and develop the Centazio dashboard for monitoring the system using Sveltekit, IBM carbon design, Azure Web Service and .Net Framework.',
            '•	Developed tools for monitoring and managing Azure Integration services using Azure API.',
            '•	Developed code in accordance with appropriate design and architectural rules.',
            '•	Working in a cross-functional team utilising agile development.',
            '•	Deploying dashboard onto Azure Web Application.',
          ],
        },
      ],
    },
    {
      name: 'Benevolence Financial Group',
      location: 'Macquarie Park, NSW',
      description:
        'Benevolence Financial Group (BFG) is a social enterprise mortgage and finance brokerage firm which utilises technology to automate the process of applying for a loan.',
      startDate: 'Aug 2020',
      endDate: 'Apr 2022',
      projects: [
        {
          name: 'BFG Home Loan CRM Web Application',
          location: 'Benevolence Financial Group',
          descriptions: [
            '•	Built a proprietary home loan CRM tool using the ASP .NET Framework and sales trekker API for comparing and suggesting home loans to customers.',
            '•	Supported end-to-end software development for CRM tools from concept to deployment. ',
            '•	Developed landing pages for targeted marketing using HTML, CSS and boostrap.',
            '•	Responsible for coordinating the team to ensure technical quality and on-time business delivery.',
            '•	Acquired knowledge of Git command line and tortoise git, encompassing creating branches, commits, merging, pull requests, and pushing onto the repository.',
          ],
        },
      ],
    },
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
      name: 'Communication',
      description:
        'Experienced in facilitating clear, concise communication across multidisciplinary teams. Demonstrated ability to deliver effective feedback and resolve conflicts, enhancing team collaboration and project success. Proficient in presenting complex ideas succinctly to diverse stakeholders, developed through professional consultancy at Picnet.',
    },
    {
      id: '02',
      name: 'Leadership',
      description:
        'At Benevolence Financial Group, I led a team of software engineers in developing an automated home loan CRM digital platform. My role involved collaborating with cross-functional teams of mortgage brokers to create web application tools, managing team operations, and directing project tasks. I effectively implemented agile methodologies to meet project targets and deliverables.',
    },
    {
      id: '03',
      name: 'Time Management and Organization',
      description:
        'Skilled in prioritizing and managing tasks effectively under tight schedules, honed through balancing full-time employment with full-time study. Proficient in organizing daily activities and project milestones, demonstrated in a professional setting where I coordinate project management and stakeholder meetings to ensure timely deliverables.',
    },
  ],
  technical: [
    {
      id: '01',
      name: 'Programming Languages',
      tags: ['JavaScript', 'Typescript', 'HTML', 'CSS', 'Sass', 'C#', 'Python', 'SQL'],
    },
    {
      id: '02',
      name: 'Libraries & Frameworks',
      tags: [
        'React',
        'Next.js',
        'Angular',
        'Svelte',
        'Node.js',
        'Tailwind CSS',
        '.Net Framework',
        'AngularJS',
        'Bootstrap',
        'Astro',
      ],
    },
    {
      id: '03',
      name: 'Tools & Platforms',
      tags: ['Git', 'GitHub', 'WordPress', 'Azure', 'AWS', 'Terraform'],
    },
    {
      id: '04',
      name: 'Methodologies',
      tags: ['Agile Methodologies', 'Restful Services/API'],
    },
    {
      id: '05',
      name: 'Databases',
      tags: ['MySQL', 'PostgreSQL'],
    },
  ],
  expertise: [
    {
      id: 'expertise-1',
      name: 'Full-Stack Development',
      description:
        'Proficient in leveraging modern web technologies including React, Next.js, Angular, and Svelte to create scalable and responsive web applications. Demonstrated capability in handling both frontend aesthetics and backend functionality, ensuring comprehensive software solutions.',
    },
    {
      id: 'expertise-2',
      name: 'Cloud Computing & Migration',
      description:
        'Experienced in cloud infrastructure management using Azure and AWS, focusing on enhancing scalability and operational efficiency. Successfully led a critical cloud migration project, demonstrating expertise in cloud architecture and deployment strategies.',
    },
    {
      id: 'expertise-3',
      name: 'Advanced SQL and Data Management',
      description:
        'Expert in SQL database management, focusing on complex data analysis and optimization of healthcare data. Developed and optimized SQL views to enhance system performance and reporting capabilities, significantly improving data access and analytics processes.',
    },
    {
      id: 'expertise-4',
      name: 'Data Security & System Architecture',
      description:
        'Engineered robust security architectures and developed secure web applications using .NET Framework and Active Directory. Improved system security and performance, ensuring high standards of data protection and access control.',
    },
    {
      id: 'expertise-5',
      name: 'Agile Development Practices',
      description:
        'Adept at facilitating agile development processes within cross-functional teams. Enhanced project agility and team productivity by adhering to stringent design and architectural standards, contributing to the timely delivery of high-quality software solutions.',
    },
    {
      id: 'expertise-6',
      name: 'Technical Documentation & Testing',
      description:
        'Produced and maintained comprehensive technical documentation to ensure clarity and consistency across development phases. Played a key role in the end-to-end testing and deployment of applications, ensuring seamless transitions and operational excellence.',
    },
  ],
  projects: [
    {
      title: 'BFG Home Loan CRM Web Application',
      isFeatured: true,
      thumbnail: '/assets/bfg-webapp.png',
      githubUrl: '',
      liveUrl: 'https://bfgloans.com.au/',
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
