// Case Studies Data — Reutilizable para todos los proyectos
const caseStudiesData = {
  capstone: {
    id: 'capstone',
    year: '2022–2024',
    title: { en: 'Capstone Logistics Platform', es: 'Plataforma Capstone Logistics' },
    subtitle: { en: 'Building UX culture in enterprise logistics', es: 'Construyendo cultura UX en logística empresarial' },
    kicker: { en: 'Enterprise UX · Logistics', es: 'UX Empresarial · Logística' },
    role: { en: 'Lead UX Designer', es: 'Diseñador UX Líder' },
    client: { en: 'Improving (Atlanta, USA)', es: 'Improving (Atlanta, EE.UU.)' },
    location: { en: 'Atlanta, USA', es: 'Atlanta, EE.UU.' },
    image: 'img/capstone-hero.jpg',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'Understanding a new vertical',
          content: 'The main challenge was understanding the business model of a vertical I had no previous knowledge in — a logistics company in Atlanta whose SaaS B2B model manages yard traffic, unit unload times, and "last mile" services all from centralized software. The system was managing complex logistical operations, but the design reflected reactive development rather than strategic planning.'
        },
        {
          title: 'Research',
          subtitle: 'Discovering architectural issues',
          content: 'I discovered essential problems in the system\'s information architecture through heuristic examinations, usability tests, and user flow mapping. It was clear the system had been built reacting to needs rather than following a planned architecture. I determined roles and organized mockups based on these discoveries. The previous designer had left non-editable screenshot-based mockups, with no component library or reusable patterns. I also faced a significant challenge: the team had limited trust in integrated UX processes.'
        },
        {
          title: 'Design',
          subtitle: 'Building design systems and trust',
          content: 'After mapping navigation flows and the system architecture, I created editable mockups of key screens to build reusable templates and establish a component library. I worked extensively with the product owner, design lead, and project manager (who had deep product knowledge and engineering background). These interviews confirmed my hypotheses. I started somewhat isolated from the team, intentionally beginning to indoctrinate the development team on UX practices and their advantages. The goal was to gain managerial trust and establish UX as a core practice.'
        },
        {
          title: 'Testing',
          subtitle: 'Gaining adoption through discovery',
          content: 'Over time, we refined the interface to make it more intuitive, adding descriptions and information to explain complex system functions. The team gradually adopted the ideas I presented in grooming meetings. Eventually, I led dedicated UX discovery sessions that managers attended. Contextual interviews and site visits by the design lead revealed field difficulties needing ideation and research. Analytics provided impact measurement for our changes.'
        },
        {
          title: 'Conclusions',
          subtitle: 'From isolation to integration',
          content: 'The project gave me valuable learning about large modular systems. Many modules existed that I didn\'t directly use, managed by teammates. I covered absences and dimensioned the project\'s full scope. I had the opportunity to work with analytics measuring the impact of our changes. Most importantly, I transformed a skeptical team into believers in the UX process, establishing a foundation for future design-driven development.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Comprendiendo una vertical nueva',
          content: 'El reto principal fue entender el modelo de negocio de una vertical sin conocimiento previo — una empresa de logística en Atlanta cuyo modelo SaaS B2B gestiona tráfico de patios, tiempos de descarga de unidades y servicios de "última milla" desde software centralizado. El sistema manejaba operaciones complejas, pero el diseño reflejaba desarrollo reactivo en lugar de planificación estratégica.'
        },
        {
          title: 'Investigación',
          subtitle: 'Descubriendo problemas arquitectónicos',
          content: 'Descubrí problemas esenciales en la arquitectura de información del sistema a través de exámenes heurísticos, pruebas de usabilidad y mapeo de flujos de usuario. Era evidente que el sistema fue construido reaccionando a necesidades en lugar de seguir una arquitectura planeada. Determiné roles y organicé mockups basándome en estos descubrimientos. El diseñador anterior había dejado mockups no editables basados en screenshots, sin librería de componentes ni patrones reutilizables. También enfrenté un desafío significativo: el equipo tenía confianza limitada en procesos UX integrados.'
        },
        {
          title: 'Diseño',
          subtitle: 'Construyendo design systems y confianza',
          content: 'Después de mapear flujos de navegación y la arquitectura del sistema, creé mockups editables de pantallas clave para construir plantillas reutilizables y establecer una librería de componentes. Trabajé extensamente con el product owner, jefe de diseño y project manager (quien tenía conocimiento profundo del producto y background de ingeniería). Estas entrevistas confirmaron mis hipótesis. Comencé algo aislado del equipo, intentando deliberadamente introducir al equipo de desarrollo en prácticas UX y sus ventajas. El objetivo era ganar confianza gerencial y establecer UX como práctica central.'
        },
        {
          title: 'Testing',
          subtitle: 'Ganando adopción a través del descubrimiento',
          content: 'Con el tiempo, refinamos la interfaz para hacerla más intuitiva, agregando descripciones e información para explicar funciones complejas del sistema. El equipo gradualmente adoptó las ideas que presenté en grooming meetings. Eventualmente, lideré sesiones de descubrimiento UX dedicadas a las que asistían managers. Entrevistas contextuales y visitas de sitio del jefe de diseño revelaron dificultades de campo necesitando ideación e investigación. Analytics proporcionó medición de impacto para nuestros cambios.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'De aislamiento a integración',
          content: 'El proyecto me dio aprendizaje valioso sobre sistemas modulares grandes. Muchos módulos existían que no usaba directamente, administrados por compañeros. Cubrí ausencias y dimensioné el alcance completo del proyecto. Tuve la oportunidad de trabajar con analytics midiendo el impacto de nuestros cambios. Lo más importante, transformé un equipo escéptico en creyentes del proceso UX, estableciendo una base para desarrollo futuro dirigido por diseño.'
        }
      ]
    },
    tags: ['User Research', 'Design System', 'Information Architecture', 'Team Leadership'],
    technologies: ['Figma', 'Heuristic Evaluation', 'Usability Testing', 'Analytics']
  },

  electrolit: {
    id: 'electrolit',
    year: '2022',
    title: { en: 'Electrolit Mobile App', es: 'App Electrolit Mobile' },
    subtitle: { en: 'Sprint Design for field representatives', es: 'Sprint Design para representantes de campo' },
    kicker: { en: 'Mobile · Brand App', es: 'Móvil · App de Marca' },
    role: { en: 'Lead UX Designer', es: 'Diseñador UX Líder' },
    client: { en: 'Improving (Guadalajara, MX)', es: 'Improving (Guadalajara, MX)' },
    location: { en: 'Guadalajara, MX', es: 'Guadalajara, MX' },
    image: 'img/electrolit-hero.jpg',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'Sprint Design challenge in 5 days',
          content: 'Electrolit organized a Sprint Design week at their offices with all regional managers and commercial director. Only 2 designers participated. The challenge was understanding a completely new retail vertical and technical difficulties in just 5 days. The client wanted an app running on very low-end phones with minimal data usage on 2G networks, requiring automatic memory clearing while operating as field representatives\' daily tool.'
        },
        {
          title: 'Research',
          subtitle: 'Discovering technical constraints reshape scope',
          content: 'Initial interviews revealed particularities that changed the project\'s scale, scope, and architecture. The app needed to run on low-end phones with minimal 2G network data usage. It would be used by entry-level employees verifying inventory, product display, restocking promotions across convenience stores, commercial centers, pharmacies, and miscellaneous retailers in large geographic areas. The app updated daily with personalized itineraries, tasks, and suggested routes. These constraints fundamentally altered our design approach.'
        },
        {
          title: 'Design',
          subtitle: 'Sprint Design methodology in action',
          content: 'We followed the Sprint Design methodology: Understand, Sketch, Decide, Prototype, and Test within one week. Tools included card sorting, Crazy 8\'s, empathy maps, stakeholder interviews, and user journey mapping. Working directly with managers who understood the complete business model and process was invaluable. Every discovery was immediately validated and incorporated. We created low-fidelity prototypes for initial flow and function approvals before moving to high-fidelity mockups.'
        },
        {
          title: 'Testing',
          subtitle: 'Direct validation with end users',
          content: 'Initial testing happened directly with managers who then invited actual end users for contextual interviews to validate our hypotheses and test prototypes. This direct access to both stakeholders and users accelerated feedback cycles and eliminated assumption-based design. The managers\' deep understanding of field realities ensured our designs addressed real pain points rather than imagined ones.'
        },
        {
          title: 'Conclusions',
          subtitle: 'Sprint Design delivers in record time',
          content: 'Working directly with people who understood the complete process and business model was remarkably productive. Everything resolved without complications and in record time. The sprint design methodology proved its worth, delivering a validated solution in just 5 days that satisfied all stakeholders. This project demonstrated that speed and quality aren\'t mutually exclusive when you have aligned teams and clear user understanding.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Desafío Sprint Design en 5 días',
          content: 'Electrolit organizó una semana de Sprint Design en sus oficinas con todos los gerentes regionales y director comercial. Solo 2 diseñadores participamos. El desafío fue comprender una vertical de retail completamente nueva y dificultades técnicas en solo 5 días. El cliente quería una app corriendo en telefonos muy de gama baja con uso mínimo de datos en redes 2G, requiriendo limpieza automática de memoria mientras funcionaba como herramienta diaria de representantes de campo.'
        },
        {
          title: 'Investigación',
          subtitle: 'Descubriendo limitaciones técnicas reconfiguran alcance',
          content: 'Entrevistas iniciales revelaron particularidades que cambiaron la escala, alcance y arquitectura del proyecto. La app necesitaba correr en teléfonos de gama baja con uso mínimo de datos en redes 2G. Sería usada por empleados de nivel bajo verificando inventario, display de producto, reposición de promociones en tiendas de conveniencia, centros comerciales, farmacias y misceláneas en áreas geográficas extensas. La app se actualizaba diariamente con itinerarios personalizados, tareas y rutas sugeridas. Estas limitaciones alteraron fundamentalmente nuestro enfoque de diseño.'
        },
        {
          title: 'Diseño',
          subtitle: 'Metodología Sprint Design en acción',
          content: 'Seguimos la metodología Sprint Design: Comprender, Bocetear, Decidir, Prototipar y Probar en una semana. Las herramientas incluían card sorting, Crazy 8\'s, mapas de empatía, entrevistas con stakeholders y mapeo de viajes de usuario. Trabajar directamente con gerentes que entendían el modelo de negocio y proceso completo fue invaluable. Cada descubrimiento fue inmediatamente validado e incorporado. Creamos prototipos de baja fidelidad para aprobaciones iniciales de flujo y función antes de pasar a mockups de alta fidelidad.'
        },
        {
          title: 'Testing',
          subtitle: 'Validación directa con usuarios finales',
          content: 'Las pruebas iniciales sucedieron directamente con gerentes que luego invitaron usuarios finales reales para entrevistas contextuales validando nuestras hipótesis y probando prototipos. Este acceso directo a stakeholders y usuarios aceleró ciclos de feedback y eliminó diseño basado en suposiciones. La comprensión profunda de realidades de campo de los gerentes aseguró que nuestros diseños abordaran problemas reales en lugar de imaginados.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'Sprint Design entrega en tiempo récord',
          content: 'Trabajar directamente con personas que entendían el proceso y modelo de negocio completo fue notablemente productivo. Todo se resolvió sin complicaciones y en tiempo récord. La metodología sprint design probó su valor, entregando una solución validada en solo 5 días que satisfizo a todos los stakeholders. Este proyecto demostró que velocidad y calidad no son mutuamente excluyentes cuando tienes equipos alineados y comprensión clara de usuarios.'
        }
      ]
    },
    tags: ['Sprint Design', 'Mobile Design', 'User Research', 'Prototyping'],
    technologies: ['Figma', 'Photoshop', 'Illustrator', 'HTML/CSS/JS', 'Card Sorting', 'Crazy 8s']
  },

  delphian: {
    id: 'delphian',
    year: '2020–2022',
    title: { en: 'Delphian Systems — StrongBox', es: 'Delphian Systems — StrongBox' },
    subtitle: { en: 'IoT residential lock platform from chaos to market', es: 'Plataforma cerradura IoT residencial del caos al mercado' },
    kicker: { en: 'IoT · UX + Product', es: 'IoT · UX + Producto' },
    role: { en: 'UX Designer → Product Designer', es: 'Diseñador UX → Diseñador de Producto' },
    client: { en: 'Improving (Chicago, USA)', es: 'Improving (Chicago, EE.UU.)' },
    location: { en: 'Chicago, USA', es: 'Chicago, EE.UU.' },
    image: 'img/delphian-hero.jpg',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'Replacing a failed team under pressure',
          content: 'Delphian Systems was another new vertical — IoT devices controlled via a native app. We arrived to replace an Indian development team that had worked inefficiently for over a year with no design, styles, or mockups, and poorly executed code. The real challenge: we had one month to present to investors who would decide whether to continue funding the project. Investors would determine the project\'s survival.'
        },
        {
          title: 'Research',
          subtitle: 'Starting from zero with tight timeline',
          content: 'Discovery revealed nothing was reusable. The "mockups" were JPGs that didn\'t even match device dimensions. However, this gave us the opportunity to work from scratch — though pressured by time. The one-month deadline before investor review was the hard constraint. We conducted extensive research on user needs, competitive landscape, and technical requirements for native iOS and Android applications serving residential customers.'
        },
        {
          title: 'Design',
          subtitle: 'Building identity and differentiation',
          content: 'I built a design system from zero to create corporate identity and visual language for the applications. With limited time, I conducted competitive benchmarking to find commercial differentiators suggested by the project director and product manager. I designed low-resolution templates for initial flow and function approvals, then high-resolution mockups. Following Google and Apple guidelines for native applications and app store requirements was essential. I used Adobe XD and UX Pin for design work.'
        },
        {
          title: 'Testing',
          subtitle: 'Evolving from designer to product manager',
          content: 'Initial testing was direct with the product manager. When he left shortly after, they hired a technical chief officer. I took on junior product-designer responsibilities, managing feature prioritization and development alignment. We created two native applications and secured a client contract for Delphian\'s platform adapted to their brand devices. We also participated in Porcelanite\'s smart bathroom project for the Indiana Pacers stadium in Indianapolis, with work trips to Chicago and customer installation visits.'
        },
        {
          title: 'Conclusions',
          subtitle: 'First product leadership experience',
          content: 'It was interesting to cover product owner responsibilities for the first time and manage development teams to align application quality with project expectations. The experience taught me product-thinking alongside design. Despite the chaos of replacing a failed team with investor pressure, we delivered a market-ready platform. The technical chief officer\'s arrival shifted my role, giving me hybrid responsibilities that bridged design and product management.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Reemplazando un equipo fallido bajo presión',
          content: 'Delphian Systems fue otra vertical nueva — dispositivos IoT controlados vía app nativa. Llegamos a reemplazar un equipo de desarrollo indio que había trabajado ineficientemente por más de un año sin diseño, estilos o mockups, con código mal ejecutado. El verdadero desafío: teníamos un mes para presentar a inversionistas que decidirían si continuar financiando. Los inversionistas determinarían la supervivencia del proyecto.'
        },
        {
          title: 'Investigación',
          subtitle: 'Comenzando de cero con timeline ajustado',
          content: 'El descubrimiento reveló que nada era reutilizable. Los "mockups" eran JPGs que ni siquiera coincidían con dimensiones de dispositivos. Sin embargo, esto nos dio la oportunidad de trabajar desde cero — aunque presionados por tiempo. La fecha límite de un mes antes de revisión de inversionistas fue la limitación dura. Realizamos investigación extensa sobre necesidades de usuarios, panorama competitivo y requisitos técnicos para aplicaciones nativas iOS y Android serviendo a clientes residenciales.'
        },
        {
          title: 'Diseño',
          subtitle: 'Construyendo identidad y diferenciación',
          content: 'Construí un design system desde cero para crear identidad corporativa y lenguaje visual para las aplicaciones. Con tiempo limitado, realicé benchmarking competitivo para encontrar diferenciadores comerciales sugeridos por el director de proyecto y product manager. Diseñé plantillas de baja resolución para aprobaciones iniciales de flujo y función, luego mockups de alta resolución. Seguir directrices de Google y Apple para aplicaciones nativas y requisitos de app store fue esencial. Usé Adobe XD y UX Pin para trabajo de diseño.'
        },
        {
          title: 'Testing',
          subtitle: 'Evolucionando de diseñador a gestor de producto',
          content: 'Las pruebas iniciales fueron directas con el product manager. Cuando se fue poco después, contrataron un technical chief officer. Asumí responsabilidades de junior product-designer, gestionando priorización de features y alineación de desarrollo. Creamos dos aplicaciones nativas y aseguramos un contrato de cliente para plataforma de Delphian adaptada a sus dispositivos de marca. También participamos en proyecto de baño inteligente de Porcelanite para estadio Pacers de Indiana en Indianapolis, con viajes de trabajo a Chicago y visitas a instalaciones de clientes.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'Primera experiencia de liderazgo de producto',
          content: 'Fue interesante cubrir responsabilidades de product owner por primera vez y gestionar equipos de desarrollo para alinear calidad de aplicación con expectativas de proyecto. La experiencia me enseñó product-thinking junto con diseño. A pesar del caos de reemplazar un equipo fallido con presión de inversionistas, entregamos una plataforma lista para mercado. La llegada del technical chief officer cambió mi rol, dándome responsabilidades híbridas que conectaban diseño y gestión de producto.'
        }
      ]
    },
    tags: ['Product Management', 'Design System', 'Native Apps', 'Team Leadership'],
    technologies: ['Adobe XD', 'UX Pin', 'Google/Apple Guidelines', 'Figma', 'iOS', 'Android']
  },

  impi: {
    id: 'impi',
    year: '2021–2023',
    title: { en: 'IMPI — Design System for Government', es: 'IMPI — Design System para Gobierno' },
    subtitle: { en: 'Unifying disparate systems with design standards', es: 'Unificando sistemas dispares con estándares de diseño' },
    kicker: { en: 'Government · Design System', es: 'Gobierno · Design System' },
    role: { en: 'Independent UX Consultant', es: 'Consultor UX Independiente' },
    client: { en: 'IMPI (Mexico City)', es: 'IMPI (Ciudad de México)' },
    location: { en: 'Mexico City, MX', es: 'Ciudad de México, MX' },
    image: 'img/impi-hero.jpg',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'Government digital transformation chaos',
          content: 'IMPI is a Mexican government entity managing patents and intellectual property rights. Its development team is outsourced through Infotec, a government IT company. The problem: extremely deficient management of digital assets across both B2B and B2C services. Like all government entities, leadership changes every six years, destroying continuity. Technology obsolescence, outdated systems using deprecated programming languages, multiple development stacks with no clear governance or interconnection, and complete lack of UX understanding in processes.'
        },
        {
          title: 'Research',
          subtitle: 'Discovering fragmented organizational structure',
          content: 'Discovery revealed IMPI\'s four areas each had different managers and development teams using different programming languages and information models. Systems needing interconnection had no communication. They relied on APIs or even Excel/PowerPoint/Word documents to share data. There was no unified design language, no component standards, and no UX methodology. Each department operated in isolation, creating redundant systems and duplicated effort across the organization.'
        },
        {
          title: 'Design',
          subtitle: 'Creating unified design standards',
          content: 'I held meetings with managers attempting to align ideation and design efforts to update existing systems. The best solution: create a design system to at least standardize graphic identity across different products. I developed the first design system in Figma but was asked to convert it into reusable code. I created HTML, vanilla JavaScript, and CSS versions, but developers rejected adoption — they wanted customizations for each programming language. Facing impossibility of replicating the same work multiple times, we adapted the design system using Web Components + Lit for better adaptability across development teams.'
        },
        {
          title: 'Testing',
          subtitle: 'Resistance and gradual adoption',
          content: 'I delivered Storybook catalogs with component documentation and usage instructions. Development teams received the design system reluctantly — accustomed to working without supervision or design standards. I used Figma for component design, JavaScript/HTML/CSS for implementation, and Web Components + Lit for framework-agnostic delivery. AI tools assisted in design system creation and documentation. Gradually, teams began adopting the new design system despite initial resistance.'
        },
        {
          title: 'Conclusions',
          subtitle: 'Government continuity challenges',
          content: 'The IMPI director left the institution to pursue a governorship, halting all development contracts. I couldn\'t follow up on design system adoption. However, the work established a foundation for future UX integration in government digital services. The design system represented the first coordinated UX effort across IMPI\'s siloed departments, introducing modern design standards to legacy government systems. It demonstrated that even in highly constrained government environments, UX methodology can drive positive change.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Caos de transformación digital gubernamental',
          content: 'IMPI es una entidad gubernamental mexicana gestionando patentes y derechos de propiedad intelectual. Su equipo de desarrollo es tercerizado a través de Infotec, una empresa IT gubernamental. El problema: gestión extremadamente deficiente de assets digitales en servicios B2B y B2C. Como todas entidades gubernamentales, cambios de liderazgo cada seis años destruyen continuidad. Obsolescencia tecnológica, sistemas anticuados usando lenguajes de programación depreciados, múltiples stacks de desarrollo sin gobernanza clara o interconexión, y falta completa de comprensión de UX en procesos.'
        },
        {
          title: 'Investigación',
          subtitle: 'Descubriendo estructura organizacional fragmentada',
          content: 'El descubrimiento reveló que los cuatro áreas de IMPI cada una tenía diferentes gerentes y equipos de desarrollo usando diferentes lenguajes de programación y modelos de información. Sistemas necesitando interconexión no tenían comunicación. Dependían de APIs o incluso documentos Excel/PowerPoint/Word para compartir datos. No había lenguaje de diseño unificado, no había estándares de componentes, no había metodología UX. Cada departamento operaba en aislamiento, creando sistemas redundantes y esfuerzo duplicado en toda la organización.'
        },
        {
          title: 'Diseño',
          subtitle: 'Creando estándares de diseño unificados',
          content: 'Tuve reuniones con gerentes intentando alinear esfuerzos de ideación y diseño para actualizar sistemas existentes. La mejor solución: crear un design system para al menos estandarizar identidad gráfica en diferentes productos. Desarrollé el primer design system en Figma pero me pidieron convertirlo en código reutilizable. Creé versiones HTML, JavaScript vanilla y CSS, pero desarrolladores rechazaron adopción — querían customizaciones para cada lenguaje de programación. Enfrentando imposibilidad de replicar el mismo trabajo múltiples veces, adaptamos el design system usando Web Components + Lit para mejor adaptabilidad en equipos de desarrollo.'
        },
        {
          title: 'Testing',
          subtitle: 'Resistencia y adopción gradual',
          content: 'Entregué catálogos Storybook con documentación de componentes e instrucciones de uso. Equipos de desarrollo recibieron el design system a regañadientes — acostumbrados a trabajar sin supervisión o estándares de diseño. Usé Figma para diseño de componentes, JavaScript/HTML/CSS para implementación, y Web Components + Lit para entrega agnóstica de framework. Herramientas IA asistieron en creación y documentación de design system. Gradualmente, equipos comenzaron adoptando el nuevo design system a pesar de resistencia inicial.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'Desafíos de continuidad gubernamental',
          content: 'El director de IMPI dejó la institución para perseguir una gobernatura, paralizando todos contratos de desarrollo. No pude dar seguimiento a adopción de design system. Sin embargo, el trabajo estableció una base para integración UX futura en servicios digitales gubernamentales. El design system representó el primer esfuerzo UX coordinado a través de departamentos silo de IMPI, introduciendo estándares de diseño modernos en sistemas gubernamentales legacy. Demostró que incluso en ambientes gubernamentales altamente limitados, la metodología UX puede impulsar cambio positivo.'
        }
      ]
    },
    tags: ['Design System', 'Government', 'Web Components', 'Design Standards'],
    technologies: ['Figma', 'HTML/CSS', 'JavaScript', 'Web Components', 'Lit', 'Storybook', 'AI Tools']
  },

  rain4rent: {
    id: 'rain4rent',
    year: '2019',
    title: { en: 'Rain 4 Rent — Quoting System', es: 'Rain 4 Rent — Sistema de Cotización' },
    subtitle: { en: 'Digital transformation for industrial water pump sales', es: 'Transformación digital para ventas de bombas de agua industrial' },
    kicker: { en: 'SaaS · Sales Platform', es: 'SaaS · Plataforma de Ventas' },
    role: { en: 'Lead UX Designer', es: 'Diseñador UX Líder' },
    client: { en: 'Improving (Mexico)', es: 'Improving (México)' },
    location: { en: 'Mexico', es: 'México' },
    image: 'img/rain4rent-hero.jpg',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'Work under pressure',
          content: 'I jumped into this project in late 2019. The client had urgent need to update a web-based system used by their sales team. The tool is a quoting system highly customized for the client\'s industry — rental and sale of industrial water pumps and related equipment. The prime urgency was time: dropped sales caused by an outdated portal developed in discontinued technology with inefficient databases. The business was losing revenue, and the system needed immediate modernization.'
        },
        {
          title: 'Research',
          subtitle: 'Learning about sales',
          content: 'My approach started with series of interviews with the sales team and product manager. They already had well-documented product backlog, so my main goal was providing usable and tidy user interface. I conducted heuristic tests on the interface and contextual interviews with salesmen to understand how the old system worked and user flow patterns. I realized a complete A to Z quoting process for a new sale. I took advantage of gaps in information on the home screen to design a small dashboard at the process beginning — customizable by user to help the sales team track their goals.'
        },
        {
          title: 'Design',
          subtitle: 'User centered experience',
          content: 'Since most ideation was ready and user stories already existed in backlog, I focused on usability and navigation of the tool. The user flow was unusually long with many steps for the sales representative to choose. Card sorting and information architecture helped me get the last pieces of feedback from users before jumping into wireframes. I tested different design patterns to provide all options without saturating the screen, creating a component library to keep design homologated throughout the tool. Colors were selected to maintain client branding as a requirement.'
        },
        {
          title: 'Testing',
          subtitle: 'User centered experience',
          content: 'For tool testing, the QA team created a test environment implementing AB testing scenarios. Surprisingly, adjustments in this phase were minimal — users worked with mental maps created by the old tool and sometimes small changes like a border line caused them to struggle completing the flow. This taught me many things, which is why I like to add it to my work portfolio. We adjusted elements to imperceptible levels based on testing results, discovering users were following mental maps from the old system.'
        },
        {
          title: 'Conclusions',
          subtitle: 'Not the end',
          content: 'The project was challenging because we worked in an unknown industry trying to digitally transform a manual labor process that may never have been addressed this way. The result was very satisfying — we were able to implement a gamification process to track performance of each person giving game-like achievements for each sample graded. We proved an app could provide value to business helping make grading accurate and time-saving. The work done will be the base for an intelligent app that will grade automatically with help of all data gathered season after season.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Trabajo bajo presión',
          content: 'Salté a este proyecto en el último trimestre de 2019. El cliente tenía urgencia de actualizar un sistema web-based usado por su equipo de ventas. La herramienta es un sistema de cotización altamente customizado para la industria del cliente — renta y venta de bombas de agua industrial y equipos relacionados. La urgencia principal era tiempo: ventas caídas por portal obsoleto desarrollado en tecnología discontinuada con bases de datos ineficientes. El negocio estaba perdiendo ingresos y el sistema necesitaba modernización inmediata.'
        },
        {
          title: 'Investigación',
          subtitle: 'Aprendiendo sobre ventas',
          content: 'Mi enfoque comenzó con series de entrevistas con el equipo de ventas y product manager. Ellos ya tenían backlog de producto bien documentado, así que mi objetivo principal era proporcionar interfaz de usuario usable y ordenada. Realicé pruebas heurísticas en la interfaz y entrevistas contextuales con vendedores para comprender cómo funcionaba el sistema antiguo y patrones de flujo de usuarios. Realicé el proceso completo de A a Z de cotización para una nueva venta. Aproveché brechas de información en la pantalla de inicio para diseñar pequeño dashboard al inicio del proceso — customizable por usuario para ayudar al equipo de ventas a rastrear sus metas.'
        },
        {
          title: 'Diseño',
          subtitle: 'Experiencia centrada en usuario',
          content: 'Como la mayoría de ideación estaba lista y user stories ya existían en backlog, me enfoqué en usabilidad y navegación de la herramienta. El flujo de usuario era unusualmente largo con muchos pasos para que el representante de ventas eligiera. Card sorting y arquitectura de información me ayudaron obtener las últimas piezas de feedback de usuarios antes de saltar a wireframes. Probé diferentes patrones de diseño para proporcionar todas las opciones sin saturar la pantalla, creando librería de componentes para mantener diseño homologado a través de la herramienta. Los colores fueron seleccionados para mantener branding del cliente como requisito.'
        },
        {
          title: 'Testing',
          subtitle: 'Experiencia centrada en usuario',
          content: 'Para testing de la herramienta, el equipo QA creó ambiente de prueba implementando escenarios de AB testing. Sorprendentemente, ajustes en esta fase fueron mínimos — usuarios trabajaban con mapas mentales creados por la herramienta antigua y a veces cambios pequeños como línea de borde causaban que lucharan completando el flujo. Esto me enseñó muchas cosas, por eso me gusta agregarlo a mi portafolio. Ajustamos elementos a niveles imperceptibles basados en resultados de testing, descubriendo usuarios seguían mapas mentales del sistema antiguo.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'No es el fin',
          content: 'El proyecto fue desafiante porque trabajamos en una industria desconocida intentando transformar digitalmente un proceso de trabajo manual que quizás nunca fue abordado de esta forma. El resultado fue muy satisfactorio — pudimos implementar proceso de gamificación para rastrear desempeño de cada persona dando logros tipo juego para cada muestra calificada. Probamos una app podría proporcionar valor al negocio ayudando a hacer calificación precisa y ahorradora de tiempo. El trabajo realizado será la base para una app inteligente que calificará automáticamente con ayuda de todos los datos recopilados temporada tras temporada.'
        }
      ]
    },
    tags: ['Sales Platform', 'Gamification', 'User Research', 'SaaS'],
    technologies: ['Figma', 'Card Sorting', 'Heuristic Testing', 'Component Library']
  },

  buenafruta: {
    id: 'buenafruta',
    year: '2020',
    title: { en: 'Buena Fruta — Cherry Grading App', es: 'Buena Fruta — App de Clasificación de Cerezas' },
    subtitle: { en: 'Digital transformation for fruit processing', es: 'Transformación digital para procesamiento de frutas' },
    kicker: { en: 'Agriculture · Processing', es: 'Agricultura · Procesamiento' },
    role: { en: 'Lead UX Designer', es: 'Diseñador UX Líder' },
    client: { en: 'Independent Project', es: 'Proyecto Independiente' },
    location: { en: 'Mexico', es: 'México' },
    image: 'img/buenafruta-hero.jpg',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'The challenges',
          content: 'I participated in this project in 2020. The client wanted to improve his business through digital transformation. The goal was creating a tool helping seasonal manual workers pick and grade cherries in a processing plant minutes after harvest, without interrupting ongoing processes. Challenges to consider: the picking and grading crew could be asked to take samples from any part of the processing line. Data recovered by the crew would create data banks for future IA implementations. Most critically, most plant areas lacked WiFi or internet, so creating an offline-capable tool was essential.'
        },
        {
          title: 'Research',
          subtitle: 'Understanding the business',
          content: 'First step was interviewing all people related to the project understanding the process, expectations, business model, etc. Answers proved different concerns — managers and owners rounded business concerns while grading crew worried about usability and work tracking since they must grade huge amounts of fruit nonstop during peak season. A quick review revealed existing grading software available in market was very expensive and used sophisticated equipment. Understanding how to provide value in very affordable solutions gave ideas for next phase. Research showed we needed both an offline-first system and a data collection interface.'
        },
        {
          title: 'Design',
          subtitle: 'Defining the scope and the devices',
          content: 'Synthesizing data provided patterns suggesting goals letting us move forward. The most feasible and affordable solution was tablet-based — the most practical for the client. I transformed those points into sketches testing work flow with users. Wireframes were scattered and I asked the client order them in a way making sense. Pointing out gaps between sketches helped me get final user feedback before jumping into wireframes. The project consisted of two fronts: the grading tool and a management dashboard. I worked with apps designed for tablets since they\'re easier to use and perform nearly as well as PCs. We decided to leverage the set of cameras previewing and pre-selecting fruit in samples. In the long run, the app will learn making this automatically with all user input.'
        },
        {
          title: 'Testing',
          subtitle: 'Harvesting the results',
          content: 'We conducted extensive testing with the grading teams and management. The QA team created specific test scenarios for the processing environment. Testing focused on offline functionality, tablet usability under real processing conditions, and data accuracy. We adjusted elements based on findings — users brought existing mental models from traditional processes. The offline-first approach proved critical; connectivity gaps would have made the system unusable in real production environments. Performance testing showed the tablet solution met all operational requirements.'
        },
        {
          title: 'Conclusions',
          subtitle: 'Not the end',
          content: 'The project was challenging because we worked in an unknown industry, trying to digitally transform manual processes that may never have been addressed this way. The result was very satisfying — we implemented a gamification process tracking performance of each person, giving game-like achievements for each sample graded. We proved an app could provide business value helping make grading accurate and time-saving. The work will be the base for an intelligent app that will grade automatically using all data gathered season after season, eventually achieving fully automated quality control.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Los desafíos',
          content: 'Participé en este proyecto en 2020. El cliente quería mejorar su negocio a través de transformación digital. El objetivo era crear herramienta ayudando trabajadores estacionales manuales a recoger y clasificar cerezas en planta de procesamiento minutos después de cosecha, sin interrumpir procesos en curso. Desafíos a considerar: la tripulación de recolección y clasificación podía ser pidida tomar muestras de cualquier parte de la línea de procesamiento. Datos recuperados por la tripulación crearían bancos de datos para implementaciones futuras de IA. Lo más crítico, la mayoría de áreas de planta carecían de WiFi o internet, así que crear herramienta capaz de funcionar sin conexión era esencial.'
        },
        {
          title: 'Investigación',
          subtitle: 'Comprendiendo el negocio',
          content: 'El primer paso fue entrevistar todas las personas relacionadas con el proyecto comprendiendo el proceso, expectativas, modelo de negocio, etc. Las respuestas probaron preocupaciones diferentes — gerentes y dueños redondearon preocupaciones de negocio mientras tripulación de clasificación se preocupaba por usabilidad y rastreo de trabajo ya que deben clasificar cantidades enormes de fruta sin parar durante temporada alta. Una revisión rápida reveló que software de clasificación existente disponible en mercado era muy caro y usaba equipamiento sofisticado. Comprender cómo proporcionar valor en soluciones muy asequibles dio ideas para próxima fase. La investigación mostró necesitábamos tanto sistema offline-first como interfaz de recolección de datos.'
        },
        {
          title: 'Diseño',
          subtitle: 'Definiendo alcance y dispositivos',
          content: 'Sintetizar datos proporcionó patrones sugiriendo metas permitiéndonos avanzar. La solución más factible y asequible fue basada en tablet — la más práctica para el cliente. Transformé esos puntos en bocetos probando flujo de trabajo con usuarios. Los wireframes estaban dispersos y le pedí al cliente ordenarlos de forma que tengan sentido. Señalar brechas entre bocetos me ayudó obtener feedback final de usuarios antes de saltar a wireframes. El proyecto consistió de dos frentes: herramienta de clasificación y dashboard de gestión. Trabajé con apps diseñadas para tablets ya que son más fáciles de usar y rendimiento casi tan bueno como PCs. Decidimos aprovechar el conjunto de cámaras previsualizando y pre-seleccionando fruta en muestras. A largo plazo, la app aprenderá haciendo esto automáticamente con toda entrada de usuario.'
        },
        {
          title: 'Testing',
          subtitle: 'Cosechando los resultados',
          content: 'Realizamos testing extensivo con equipos de clasificación y gestión. El equipo QA creó escenarios de prueba específicos para el ambiente de procesamiento. El testing se enfocó en funcionalidad offline, usabilidad de tablet bajo condiciones reales de procesamiento, y precisión de datos. Ajustamos elementos basados en hallazgos — usuarios traían modelos mentales existentes de procesos tradicionales. El enfoque offline-first resultó crítico; brechas de conectividad hubieran hecho el sistema inutilizable en ambientes de producción real. Las pruebas de rendimiento mostraron la solución tablet cumplió todos los requisitos operacionales.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'No es el fin',
          content: 'El proyecto fue desafiante porque trabajamos en industria desconocida, intentando transformar digitalmente procesos manuales que quizás nunca fueron abordados de esta forma. El resultado fue muy satisfactorio — implementamos proceso de gamificación rastreando desempeño de cada persona, dando logros tipo juego para cada muestra clasificada. Probamos una app podría proporcionar valor de negocio ayudando a hacer clasificación precisa y ahorradora de tiempo. El trabajo será la base para una app inteligente que clasificará automáticamente usando todos los datos recopilados temporada tras temporada, eventualmente logrando control de calidad completamente automatizado.'
        }
      ]
    },
    tags: ['Gamification', 'Offline-First', 'Tablet Design', 'Agricultural Tech'],
    technologies: ['Figma', 'Tablet UI', 'Offline Architecture', 'Data Collection', 'User Testing']
  },

  sief: {
    id: 'sief',
    year: '2018',
    title: { en: 'SIEF — Electoral Tribunal of Mexico', es: 'SIEF — Tribunal Electoral de México' },
    subtitle: { en: 'Redesigning Mexico\'s federal electoral results system', es: 'Rediseño del sistema de resultados electorales federales de México' },
    kicker: { en: 'Government · Electoral System', es: 'Gobierno · Sistema Electoral' },
    role: { en: 'Lead UX Designer', es: 'Diseñador UX Líder' },
    client: { en: 'TEPJF (Electoral Tribunal)', es: 'TEPJF (Tribunal Electoral)' },
    location: { en: 'Mexico City, MX', es: 'Ciudad de México, MX' },
    image: 'img/sief-hero.jpg',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'A scary new project',
          content: 'This project begun in 2018, 6 months before the presidential elections in Mexico, I was invited by an old friend to update and redesign an old system of the TEPJF (electoral tribunal authority), we faced the rework of a very important tool for the TEPJF, the one used to track the results of the elections to validate the winner.\n\nThe old system had 10 years old and was developed in a very old technology by a development team without any methodology or agile process, so it lacked a proper UX research or good UI, they used the native components of visual basic and in most of the cases, the icons on the buttons doesn\'t relate it\'s function.'
        },
        {
          title: 'Research',
          subtitle: 'Adding a legislation to the mechanics',
          content: 'The first meetings were with a legal team tounderstband how the electoral legislation should be implemented in the process, after gathering the results of the election a team digitalize them using the SIEF. The team in charge of the capture is seasonal and at that moment hey weren\'t hired yet. Fortunately I manage to interview a group of past users and performed a series of contextual interviews to understand the pains of the process, at a certain moment they would be able to process hundreds of thousands inquiries in a couple of weeks.\n\nWith the discoveries I mapped the journey of the process and worked a wireframe to dicuss with the users, after a couple of iterations I recieve approval to design high quality mockups.'
        },
        {
          title: 'Design',
          subtitle: 'Adjusting the interface for the final users',
          content: 'After the research and discovery process was finished I already had some wireframes approved, so the high resolution mockups came swiftly, as usual, in a federal dependency there weren\'t so much space to play regarding the color scheme or the typography, instead I played with the styles of teh components since the capture of the data would be the main task of the tool, I provided over sized components and worked with the development team to make everything navigable from the keyboard, also we were asked to integrate usability elements, as part of the delivery I was asked to prove an extensive documentation about the desisions taken.\n\nWe finished with enough time to make user testings to the various users, so we prepared a series of tests.'
        },
        {
          title: 'Testing',
          subtitle: 'Harvesting the results of a well planned work',
          content: 'This was the first project I work with a higher level of reviews, we were asked to run tests with different groups of users using devices with different capabilities, since this was a web based application we also gave support to the infamous Internet Explorer versions 5 to 7.\n\nI designed usability testings focused on 3 user personas, each one belonging to the different set of skills of the final users, each persona with 5 different cards filled with different objectives, the users entered a room without any moderator to made the tests and I recorded the screens of the tests and created small adjustments out of the results, to this date the tool is used in every election process in Mexico.'
        },
        {
          title: 'Conclusions',
          subtitle: 'A very difficult project to remember',
          content: 'I feel very happy to had participated in this project, despite that doesn\'t have external visibility, between federal dependencies it recieved many compliments, also we were able to implement very complex and abstract mechanics to this process, the dependencies on electoral laws were very difficult to implement in the process. Data visualization was key to understand the path of the process for each of the personas. Also I feel I learned much in the testing sessions were we planned and designed the best method from the theory, the results talked about a well planned and well executed project, where even the stakeholders made the tests just to prove the tool, I really enjoyed the results.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Un proyecto muy asustador',
          content: 'Este proyecto comenzó en 2018, 6 meses antes de las elecciones presidenciales en México, fui invitado por un amigo a actualizar y rediseñar un viejo sistema del TEPJF (autoridad del tribunal electoral), enfrentamos la reingeniería de una herramienta muy importante para el TEPJF, la que se utiliza para rastrear los resultados de las elecciones y validar al ganador.\n\nEl sistema antiguo tenía 10 años y fue desarrollado en una tecnología muy antigua por un equipo de desarrollo sin metodología o proceso ágil alguno, por lo que carecía de investigación UX adecuada o UI buena, utilizaban los componentes nativos de Visual Basic y en la mayoría de los casos, los iconos en los botones no se relacionan con su función.'
        },
        {
          title: 'Investigación',
          subtitle: 'Agregando legislación a la mecánica',
          content: 'Las primeras reuniones fueron con un equipo legal para entender cómo la legislación electoral debería implementarse en el proceso, después de recopilar los resultados de la elección un equipo los digitaliza usando el SIEF. El equipo responsable de la captura es estacional y en ese momento aún no estaban contratados. Afortunadamente logré entrevistar a un grupo de usuarios pasados y realicé una serie de entrevistas contextuales para entender los dolores del proceso, en cierto momento podrían procesar cientos de miles de consultas en un par de semanas.\n\nCon los descubrimientos mapeé el viaje del proceso y trabajé un wireframe para discutir con los usuarios, después de un par de iteraciones recibí aprobación para diseñar mockups de alta calidad.'
        },
        {
          title: 'Diseño',
          subtitle: 'Ajustando la interfaz para los usuarios finales',
          content: 'Después de que terminó el proceso de investigación y descubrimiento ya tenía algunos wireframes aprobados, así que los mockups de alta resolución vinieron rápidamente, como es usual, en una dependencia federal no hay mucho espacio para jugar con respecto al esquema de color o la tipografía, en su lugar jugué con los estilos de los componentes ya que la captura de datos sería la tarea principal de la herramienta, proporcioné componentes grandes y trabajé con el equipo de desarrollo para hacer todo navegable desde el teclado, también se nos pidió integrar elementos de usabilidad, como parte de la entrega se me pidió que probara una extensa documentación sobre las decisiones tomadas.\n\nTerminamos con suficiente tiempo para hacer pruebas de usuario a varios usuarios, así que preparamos una serie de pruebas.'
        },
        {
          title: 'Testing',
          subtitle: 'Cosechando los resultados de un trabajo bien planificado',
          content: 'Este fue el primer proyecto en el que trabajo con un nivel más alto de revisiones, se nos pidió que realizáramos pruebas con diferentes grupos de usuarios utilizando dispositivos con diferentes capacidades, como esta era una aplicación basada en web también dimos soporte a las infames versiones de Internet Explorer 5 a 7.\n\nDiseñé pruebas de usabilidad enfocadas en 3 personas de usuario, cada una perteneciente a los diferentes conjuntos de habilidades de los usuarios finales, cada persona con 5 tarjetas diferentes llenas de objetivos diferentes, los usuarios entraban en una sala sin ningún moderador para hacer las pruebas y grabé las pantallas de las pruebas y creé pequeños ajustes de los resultados, hasta la fecha la herramienta se utiliza en cada proceso electoral en México.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'Un proyecto muy difícil de recordar',
          content: 'Me siento muy feliz de haber participado en este proyecto, a pesar de que no tiene visibilidad externa, entre dependencias federales recibió muchos halagos, también pudimos implementar mecánicas muy complejas y abstractas a este proceso, las dependencias de las leyes electorales fueron muy difíciles de implementar en el proceso. La visualización de datos fue clave para entender el camino del proceso para cada una de las personas. También siento que aprendí mucho en las sesiones de prueba donde planificamos y diseñamos el mejor método desde la teoría, los resultados hablaban de un proyecto bien planificado y bien ejecutado, donde incluso los stakeholders hicieron las pruebas solo para probar la herramienta, realmente disfruté los resultados.'
        }
      ]
    },
    tags: ['User Research', 'Design System', 'Accessibility', 'Government', 'Data Visualization'],
    technologies: ['Figma', 'Wireframing', 'User Testing', 'Documentation', 'Accessibility (WCAG)']
  }
};
