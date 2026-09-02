export type Language = 'es' | 'en'

export const contact = {
  email: 'davidmarbar123@gmail.com',
  phone: '+34 622 451 228',
  linkedin: 'https://www.linkedin.com/in/david-martinez-barragan-649b7330a/',
  github: '',
  cv: '/CV_David_Martinez .pdf',
}

export type Certificate = {
  title: string
  issuer: string
  date: string
  image: string
}

export const certificates: Record<Language, Certificate[]> = {
  es: [
    {
      title: 'Microsoft 365 Copilot and Agent Administration Fundamentals',
      issuer: 'Microsoft',
      date: '25 de junio de 2026',
      image: '/certificates/microsoft-365-copilot-fundamentals.jpg',
    },
    {
      title: 'UiPath Automation Ops',
      issuer: 'UiPath Academy',
      date: '19 de noviembre de 2025',
      image: '/certificates/uipath-automation-ops.jpg',
    },
    {
      title: 'Work smarter with AI',
      issuer: 'Microsoft Partner Gold Learning',
      date: '12 de marzo de 2026',
      image: '/certificates/work-smarter-with-ai.jpg',
    },
    {
      title: 'Transform Ideas into Action with Copilot Chat',
      issuer: 'Microsoft Partner Gold Learning',
      date: '16 de marzo de 2026',
      image: '/certificates/copilot-chat-action.jpg',
    },
    {
      title: 'DRUID Conversational AI Academy · Senior AI Agent Developer',
      issuer: 'DRUID Agentic AI Academy',
      date: '2 de diciembre de 2025',
      image: '/certificates/druid-conversational-ai-academy.jpg',
    },
  ],

  en: [
    {
      title: 'Microsoft 365 Copilot and Agent Administration Fundamentals',
      issuer: 'Microsoft',
      date: '25 June 2026',
      image: '/certificates/microsoft-365-copilot-fundamentals.jpg',
    },
    {
      title: 'UiPath Automation Ops',
      issuer: 'UiPath Academy',
      date: '19 November 2025',
      image: '/certificates/uipath-automation-ops.jpg',
    },
    {
      title: 'Work smarter with AI',
      issuer: 'Microsoft Partner Gold Learning',
      date: '12 March 2026',
      image: '/certificates/work-smarter-with-ai.jpg',
    },
    {
      title: 'Transform Ideas into Action with Copilot Chat',
      issuer: 'Microsoft Partner Gold Learning',
      date: '16 March 2026',
      image: '/certificates/copilot-chat-action.jpg',
    },
    {
      title: 'DRUID Conversational AI Academy · Senior AI Agent Developer',
      issuer: 'DRUID Agentic AI Academy',
      date: '2 December 2025',
      image: '/certificates/druid-conversational-ai-academy.jpg',
    },
  ],
}

export const content = {
  es: {
    languageLabel: 'EN',
    menu: 'Menú',
    navigation: [
      ['about', 'Sobre mí'],
      ['projects', 'Proyectos'],
      ['experience', 'Experiencia'],
      ['skills', 'Habilidades'],
      ['education', 'Formación'],
      ['contact', 'Contacto'],
    ],
    hero: {
      label: 'Ingeniería Biomédica · IA · Salud Digital',
      title: 'David Martínez Barragán',
      subtitle: 'Ingeniero Biomédico especializado en Inteligencia Artificial y Ciencia de Datos',
      text: 'Experiencia en desarrollo de IA, automatización, integraciones, análisis de datos, imagen médica y optimización de flujos hospitalarios. Formación práctica en entornos hospitalarios.',
      projects: 'Ver proyectos',
      contact: 'Contactar',
      cv: 'Ver CV',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Ingeniero Biomédico por la Universidad Rey Juan Carlos y Máster en Big Data, Data Science e Inteligencia Artificial por la Universidad Complutense de Madrid.',
        'Mi perfil combina una sólida comprensión del entorno sanitario con experiencia técnica en desarrollo de soluciones de inteligencia artificial, automatización de procesos, análisis de datos e integración de sistemas. Además, mi formación práctica en hospitales me ha permitido conocer de cerca la tecnología clínica y las necesidades de los profesionales sanitarios.',
        'Busco aportar esta visión híbrida en proyectos de MedTech, producto sanitario, innovación clínica y salud digital, actuando como vínculo entre los equipos técnicos, clínicos y de producto.',
      ],
      details: [
        ['Ubicación', 'Madrid, España'],
        ['Perfil', 'Ingeniería biomédica e IA'],
        ['Intereses', 'MedTech, producto y salud digital'],
      ],
    },
    projects: {
      title: 'Proyectos',
      intro: 'Proyectos académicos y profesionales relacionados con salud, inteligencia artificial y datos.',
      items: [
        {
          type: 'Trabajo de Fin de Grado · Imagen médica',
          title: 'Segmentación de lesiones isquémicas en TC craneal',
          description: 'Desarrollo y evaluación de modelos de deep learning para segmentar lesiones isquémicas en tomografía computarizada craneal sin contraste.',
          technologies: ['Python', 'U-Net', 'ResUNet', 'DeepLabV3+', 'nnU-Net'],
        },
        {
          type: 'Trabajo de Fin de Máster · Datos clínicos',
          title: 'Predicción de riesgo de enfermedad hepática',
          description: 'Preparación de datos longitudinales, selección de variables, comparación de modelos y explicabilidad mediante SHAP.',
          technologies: ['Python', 'scikit-learn', 'XGBoost', 'CatBoost', 'SHAP'],
        },
        {
          type: 'Proyecto profesional · Inteligencia artificial',
          title: 'Agentes conversacionales e integraciones corporativas',
          description: 'Desarrollo de agentes conversacionales conectados con APIs, herramientas IT, sistemas de ticketing y servicios corporativos.',
          technologies: ['DRUID AI', 'REST APIs', 'JSON / XML', 'Azure', 'SQL / NoSQL'],
        },
        {
          type: 'Proyecto académico · Business Intelligence',
          title: 'Dashboard interactivo para análisis financiero',
          description: 'Preparación y modelado de datos, definición de indicadores y creación de un dashboard para analizar riesgo y rendimiento.',
          technologies: ['Tableau', 'Data modeling', 'KPIs', 'Dashboards'],
        },
        {
  type: 'Proyecto académico · NoSQL',
  title: 'Análisis avanzado de datos con MongoDB',
  description:
    'Diseño y explotación de una base de datos NoSQL con más de 28.000 películas. Incluye limpieza de datos, consultas avanzadas con Aggregation Pipeline y creación de colecciones derivadas para analizar actores, géneros y métricas temporales.',
  technologies: [
    'MongoDB',
    'NoSQL',
    'JSON',
    'Aggregation Pipeline',
    'Data Cleaning',
  ],
},
{
  type: 'Proyecto académico · Bases de datos',
  title: 'Diseño e implementación de una base de datos relacional',
  description:
    'Diseño completo de una base de datos para la gestión de eventos culturales: modelo entidad-relación, normalización, implementación en MySQL, restricciones de integridad, triggers, vistas analíticas y consultas avanzadas.',
  technologies: [
    'MySQL',
    'SQL',
    'Modelo E-R',
    'Triggers',
    'Vistas',
    'Normalización',
  ],
},
{
  type: 'Proyecto académico · Machine Learning',
  title: 'Predicción de abandono de clientes',
  description:
    'Desarrollo de un pipeline completo de Machine Learning con limpieza, selección de variables y ajuste mediante validación cruzada. Se compararon modelos SVM, Random Forest y Stacking, alcanzando un AUC máximo de 0,9994 en test.',
  technologies: [
    'Python',
    'SVM',
    'Random Forest',
    'Stacking',
    'GridSearchCV',
    'Feature Selection',
  ],
},
      ],
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          role: 'Desarrollo de Inteligencia Artificial',
          organization: 'Sermicro Digital–Dimática',
          description: 'Python, automatización con UiPath, APIs REST, bases de datos, Microsoft Azure y agentes conversacionales DRUID AI integrados con plataformas corporativas.',
        },
        {
          role: 'Prácticas hospitalarias',
          organization: 'Hospital Universitario Ramón y Cajal',
          description: 'Experiencia con tecnología biomédica y flujos hospitalarios en un entorno asistencial de alta complejidad.',
        },
        {
          role: 'Prácticas hospitalarias',
          organization: 'Hospital Universitario del Sureste',
          description: 'Formación en el uso, gestión y soporte de equipamiento y tecnología sanitaria.',
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      technicalTitle: 'Habilidades técnicas',
      technical: [
        {
          title: 'IA y datos',
          items: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'CatBoost', 'SHAP', 'Deep Learning'],
        },
        {
          title: 'Desarrollo',
          items: ['APIs REST', 'JSON / XML', 'SQL', 'NoSQL', 'Git', 'Backend', 'Microsoft Azure'],
        },
        {
          title: 'Imagen médica',
          items: ['Procesamiento NCCT', 'Segmentación', 'U-Net', 'ResUNet', 'DeepLabV3+', 'nnU-Net'],
        },
        {
          title: 'Automatización y visualización',
          items: ['UiPath', 'DRUID AI', 'Integraciones IT', 'Agentes conversacionales', 'Tableau'],
        },
      ],
      softTitle: 'Habilidades blandas',
      soft: [
        'Pensamiento analítico',
        'Resolución de problemas',
        'Comunicación clara',
        'Trabajo en equipos multidisciplinares',
        'Adaptación y aprendizaje',
        'Comprensión del entorno clínico',
        'Contacto real con cliente',
      ],
    },
    education: {
      title: 'Formación',
      items: [
        {
          degree: 'Máster en Big Data, Data Science e Inteligencia Artificial',
          institution: 'Universidad Complutense de Madrid',
        },
        {
          degree: 'Grado en Ingeniería Biomédica',
          institution: 'Universidad Rey Juan Carlos',
        },
      ],
    },
      certificates: {
      title: 'Certificaciones',
      view: 'Ver credencial',
    },
    contact: {
      title: 'Contacto',
      text: 'Disponible para oportunidades profesionales en ingeniería biomédica, MedTech, salud digital e inteligencia artificial.',
      email: 'Email',
      phone: 'Teléfono',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Currículum',
    },
    footer: 'Ingeniería Biomédica · Inteligencia Artificial · Salud Digital',
  },
  en: {
    languageLabel: 'ES',
    menu: 'Menu',
    navigation: [
      ['about', 'About'],
      ['projects', 'Projects'],
      ['experience', 'Experience'],
      ['skills', 'Skills'],
      ['education', 'Education'],
      ['contact', 'Contact'],
    ],
    hero: {
      label: 'Biomedical Engineering · AI · Digital Health',
      title: 'David Martínez Barragán',
      subtitle: 'Biomedical Engineer specialising in Artificial Intelligence and Data Science',
      text: 'Experience in AI development, automation, systems integration, data analysis, medical imaging and hospital environments optimization. Practical training in hospital environments.',
      projects: 'View projects',
      contact: 'Contact me',
      cv: 'View résumé',
    },
    about: {
      title: 'About me',
      paragraphs: [
        'Biomedical Engineer from Rey Juan Carlos University with an MSc in Big Data, Data Science and Artificial Intelligence from Complutense University of Madrid.',
        'My profile combines a solid understanding of healthcare environments with technical experience in developing artificial intelligence solutions, process automation, data analysis and systems integration. In addition, my practical training in hospitals has given me first-hand insight into clinical technology and the needs of healthcare professionals.',
        'I aim to bring this hybrid perspective to projects in MedTech, healthcare products, clinical innovation and digital health, acting as a bridge between technical, clinical and product teams.',
      ],
      details: [
        ['Location', 'Madrid, Spain'],
        ['Profile', 'Biomedical engineering and AI'],
        ['Interests', 'MedTech, product and digital health'],
      ],
    },
    projects: {
      title: 'Projects',
      intro: 'Academic and professional projects related to healthcare, artificial intelligence and data.',
      items: [
        {
          type: 'BSc thesis · Medical imaging',
          title: 'Ischaemic lesion segmentation in brain CT',
          description: 'Development and evaluation of deep learning models to segment ischaemic lesions in non-contrast brain CT.',
          technologies: ['Python', 'U-Net', 'ResUNet', 'DeepLabV3+', 'nnU-Net'],
        },
        {
          type: 'MSc thesis · Clinical data',
          title: 'Liver disease risk prediction',
          description: 'Longitudinal data preparation, feature selection, model comparison and explainability using SHAP.',
          technologies: ['Python', 'scikit-learn', 'XGBoost', 'CatBoost', 'SHAP'],
        },
        {
          type: 'Professional project · Artificial intelligence',
          title: 'Conversational agents and enterprise integrations',
          description: 'Development of conversational agents connected to APIs, IT tools, ticketing systems and enterprise services.',
          technologies: ['DRUID AI', 'REST APIs', 'JSON / XML', 'Azure', 'SQL / NoSQL'],
        },
        {
          type: 'Academic project · Business Intelligence',
          title: 'Interactive dashboard for financial analysis',
          description: 'Data preparation and modelling, KPI definition and development of a dashboard for risk and performance analysis.',
          technologies: ['Tableau', 'Data modeling', 'KPIs', 'Dashboards'],
        },
        {
          type: 'Academic project · NoSQL',
          title: 'Advanced data analysis with MongoDB',
          description:
            'Design and analysis of a NoSQL database containing more than 28,000 films. The project included data cleaning, advanced Aggregation Pipeline queries and derived collections for analysing actors, genres and temporal metrics.',
          technologies: [
            'MongoDB',
            'NoSQL',
            'JSON',
            'Aggregation Pipeline',
            'Data Cleaning',
          ],
        },
        {
          type: 'Academic project · Databases',
          title: 'Relational database design and implementation',
          description:
            'Complete database design for a cultural events company, including entity-relationship modelling, normalisation, MySQL implementation, integrity constraints, triggers, analytical views and advanced queries.',
          technologies: [
            'MySQL',
            'SQL',
            'ER Modeling',
            'Triggers',
            'Views',
            'Normalization',
          ],
        },
        {
          type: 'Academic project · Machine Learning',
          title: 'Customer churn prediction',
          description:
            'Development of a complete Machine Learning pipeline covering data cleaning, feature selection and cross-validated model tuning. SVM, Random Forest and Stacking models were compared, achieving a maximum test AUC of 0.9994.',
          technologies: [
            'Python',
            'SVM',
            'Random Forest',
            'Stacking',
            'GridSearchCV',
            'Feature Selection',
          ],
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          role: 'Artificial Intelligence Development',
          organization: 'Sermicro Digital–Dimática',
          description: 'Python, UiPath automation, REST APIs, databases, Microsoft Azure and DRUID AI conversational agents integrated with enterprise platforms.',
        },
        {
          role: 'Hospital internship',
          organization: 'Ramón y Cajal University Hospital',
          description: 'Experience with biomedical technology and hospital workflows in a high-complexity healthcare environment.',
        },
        {
          role: 'Hospital internship',
          organization: 'Hospital Universitario del Sureste',
          description: 'Training in the use, management and support of healthcare equipment and technology.',
        },
      ],
    },
    skills: {
      title: 'Skills',
      technicalTitle: 'Technical skills',
      technical: [
        {
          title: 'AI and data',
          items: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'CatBoost', 'SHAP', 'Deep Learning'],
        },
        {
          title: 'Development',
          items: ['REST APIs', 'JSON / XML', 'SQL', 'NoSQL', 'Git', 'Backend', 'Microsoft Azure'],
        },
        {
          title: 'Medical imaging',
          items: ['NCCT processing', 'Segmentation', 'U-Net', 'ResUNet', 'DeepLabV3+', 'nnU-Net'],
        },
        {
          title: 'Automation and visualisation',
          items: ['UiPath', 'DRUID AI', 'IT integrations', 'Conversational agents', 'Tableau'],
        },
      ],
      softTitle: 'Soft skills',
      soft: [
        'Analytical thinking',
        'Problem solving',
        'Clear communication',
        'Multidisciplinary teamwork',
        'Learning and adaptability',
        'Understanding of clinical environments',
        'Real client contact'
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          degree: 'MSc in Big Data, Data Science and Artificial Intelligence',
          institution: 'Complutense University of Madrid',
        },
        {
          degree: 'BSc in Biomedical Engineering',
          institution: 'Rey Juan Carlos University',
        },
      ],
    },
    certificates: {
    title: 'Certifications',
    view: 'View credential',
    },
    contact: {
      title: 'Contact',
      text: 'Open to professional opportunities in biomedical engineering, MedTech, digital health and artificial intelligence.',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Résumé',
    },
    footer: 'Biomedical Engineering · Artificial Intelligence · Digital Health',
  },
} as const
