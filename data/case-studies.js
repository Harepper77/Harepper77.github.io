// Case Studies Data — Reutilizable para todos los proyectos
const caseStudiesData = {
  capstone: {
    id: 'capstone',
    year: '2022–2024',
    title: { en: 'Capstone Logistics Platform', es: 'Plataforma Capstone Logistics' },
    subtitle: { en: 'Building UX culture in enterprise logistics', es: 'Construyendo cultura UX en logística empresarial' },
    kicker: { en: 'Enterprise UX · Logistics', es: 'UX Empresarial · Logística' },
    role: { en: 'Lead UX Designer', es: 'Diseñador UX Líder' },
    client: { en: 'Capstone Logistics (via Improving)', es: 'Capstone Logistics (vía Improving)' },
    location: { en: 'Atlanta, USA', es: 'Atlanta, EE.UU.' },
    image: 'images/case-studies/capstone.png',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'Learning a business from zero',
          content: 'Capstone is a logistics company in Atlanta whose software manages yard traffic, unloading times and last mile deliveries from one place, and the first challenge was understanding a business I knew nothing about. The system worked, but it had grown by reacting to each new need instead of following a plan, and you could see it in every screen. Capstone has many products, and I worked on one of them, Yard Management, as part of a design team led by Aaron Baille, our design manager and a truly talented designer.'
        },
        {
          title: 'Research',
          subtitle: 'What was not visible at first sight',
          content: 'With heuristic reviews, usability tests and user flow maps I found the main problems in how the information was organized, so I defined the user roles and reorganized the mockups around them. The previous designer had left only screenshots, nothing editable and no reusable components, and on top of that the team did not trust UX processes very much.'
        },
        {
          title: 'Design',
          subtitle: 'Building components and trust at the same time',
          content: 'I rebuilt the key screens as editable mockups and started a component library, working closely with the product owner, Aaron and the project manager, who knew the product deeply and had an engineering background, and those conversations confirmed my hypotheses. At the beginning I was quite isolated from the team, so I made a point of showing developers, little by little, what UX could do for them, to earn the managers\' trust and make UX part of how the team worked.'
        },
        {
          title: 'Testing',
          subtitle: 'From proposing in meetings to leading sessions',
          content: 'Over time we made the interface easier to understand, adding descriptions that explained the most complex functions, and the team started adopting the ideas I brought to the grooming meetings. Eventually I was leading UX discovery sessions that managers attended, while Aaron\'s site visits and contextual interviews showed us problems in the field that needed more research, and analytics showed fewer support tickets and fewer complaints from truck drivers about billing, while the product kept being implemented in more yards, mainly in Texas. The changes users liked the most were the revamp of the settings area and the dock reservation flow with its summary.'
        },
        {
          title: 'Conclusions',
          subtitle: 'From isolation to being part of the team',
          content: 'It was a large system made of many modules, several of them handled by teammates, and covering their absences helped me understand the full scope of the project. What I value most is that a team that was skeptical about UX ended up asking for it, which left a base for the product to keep being designed with users in mind.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Aprender un negocio desde cero',
          content: 'Capstone es una empresa de logística en Atlanta cuyo software controla el tráfico de patios, los tiempos de descarga y las entregas de última milla desde un solo lugar, y el primer reto fue entender un negocio del que no sabía nada. El sistema funcionaba, pero había crecido reaccionando a cada necesidad nueva en lugar de seguir un plan, y eso se notaba en cada pantalla. Capstone tiene muchos productos, y yo trabajé en uno de ellos, Yard Management, como parte de un equipo de diseño liderado por Aaron Baille, nuestro design manager y un diseñador realmente talentoso.'
        },
        {
          title: 'Investigación',
          subtitle: 'Lo que no se veía a simple vista',
          content: 'Con revisiones heurísticas, pruebas de usabilidad y mapas de flujos encontré los problemas principales en cómo estaba organizada la información, así que definí los roles de usuario y reorganicé los mockups alrededor de ellos. El diseñador anterior solo había dejado capturas de pantalla, nada editable y ningún componente reutilizable, y además el equipo no confiaba mucho en los procesos de UX.'
        },
        {
          title: 'Diseño',
          subtitle: 'Construir componentes y confianza al mismo tiempo',
          content: 'Rehice las pantallas clave como mockups editables y empecé una librería de componentes, trabajando de cerca con el product owner, Aaron y el project manager, que conocía el producto a fondo y venía de ingeniería, y esas pláticas confirmaron mis hipótesis. Al principio estaba bastante aislado del equipo, así que me propuse mostrarles a los desarrolladores, poco a poco, lo que UX podía hacer por ellos, para ganarme la confianza de los gerentes y que UX fuera parte de la forma de trabajar.'
        },
        {
          title: 'Testing',
          subtitle: 'De proponer en juntas a dirigir sesiones',
          content: 'Con el tiempo hicimos la interfaz más fácil de entender, agregando descripciones que explicaban las funciones más complejas, y el equipo empezó a adoptar las ideas que llevaba a las juntas de grooming. Con el tiempo terminé dirigiendo sesiones de descubrimiento de UX a las que asistían los gerentes, mientras las visitas a campo y entrevistas contextuales de Aaron nos mostraban problemas que necesitaban más investigación, y la analítica mostró menos tickets de soporte y menos quejas de los camioneros sobre la facturación, mientras el producto se seguía implementando en más patios, principalmente en Texas. Los cambios que más les gustaron a los usuarios fueron el rediseño del área de configuración y el flujo de reservación de andenes con su resumen.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'De estar aislado a ser parte del equipo',
          content: 'Era un sistema grande con muchos módulos, varios a cargo de compañeros, y cubrir sus ausencias me ayudó a entender el alcance completo del proyecto. Lo que más valoro es que un equipo escéptico del UX terminó pidiéndolo, y eso dejó una base para que el producto se siguiera diseñando pensando en los usuarios.'
        }
      ]
    },
    tags: ['User Research', 'Design System', 'Information Architecture', 'Team Leadership'],
    technologies: ['Figma', 'Heuristic Evaluation', 'Usability Testing', 'Analytics']
  },

  /* Electrolit case study — pending hero image
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
  */

  delphian: {
    id: 'delphian',
    year: '2020–2022',
    title: { en: 'Delphian Systems — StrongBox', es: 'Delphian Systems — StrongBox' },
    subtitle: { en: 'IoT residential lock platform from chaos to market', es: 'Plataforma cerradura IoT residencial del caos al mercado' },
    kicker: { en: 'IoT · UX + Product', es: 'IoT · UX + Producto' },
    role: { en: 'UX Designer with product responsibilities', es: 'Diseñador UX con responsabilidades de producto' },
    client: { en: 'Improving (Chicago, USA)', es: 'Improving (Chicago, EE.UU.)' },
    location: { en: 'Chicago, USA', es: 'Chicago, EE.UU.' },
    image: 'images/case-studies/delphian.png',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'One month to convince the investors',
          content: 'Delphian Systems makes smart locks for homes that are controlled from a mobile app, another industry that was new for me. We arrived to replace a development team that had worked for more than a year with no design, no styles, no mockups and poorly built code, and we had one month to present to the investors who would decide whether the project kept its funding.'
        },
        {
          title: 'Research',
          subtitle: 'Starting from zero, against the clock',
          content: 'Nothing could be reused, the "mockups" were JPGs that did not even match the size of a phone screen, so we started from zero, which was an opportunity but with very little time. We researched what users needed, what the competition was doing and what the native iOS and Android apps required.'
        },
        {
          title: 'Design',
          subtitle: 'An identity from zero',
          content: 'I built a design system from zero to give the apps their own identity and visual language, and with the little time we had, I compared competitors to find the differentiators the project director and the product manager wanted to highlight. I started with low fidelity layouts to approve flows and functions, then moved to high fidelity mockups following Google and Apple guidelines and the app store requirements, working in Adobe XD and UXPin.'
        },
        {
          title: 'Testing',
          subtitle: 'Taking on product work',
          content: 'At first I tested directly with the product manager, and when he left shortly after, the company hired a CTO and I took over part of the product work, writing user stories, prioritizing features with the lead developer and the project manager, and reviewing finished features before passing them to the CTO for the final decision. We delivered two native apps, won a client contract to adapt the platform to that client\'s own branded devices, and we took part in Porcelanite\'s smart bathroom project for the Indiana Pacers stadium, where I designed the UI and the graphic elements and icons for the screens outside the bathrooms, which worked with automated doors and sensors to notify users and maintenance staff, with work trips to Chicago and visits to customer installations.'
        },
        {
          title: 'Conclusions',
          subtitle: 'My first product experience',
          content: 'It was the first time I took on product responsibilities, and it taught me to think about the product and not only about the design. Even with the chaos of replacing a team under investor pressure, the investors kept funding the project for almost two more years, and both apps were published in the stores after I delivered the icons and assets each store required.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Un mes para convencer a los inversionistas',
          content: 'Delphian Systems hace cerraduras inteligentes para casas que se controlan desde una app, otra industria nueva para mí. Llegamos a reemplazar a un equipo de desarrollo que llevaba más de un año trabajando sin diseño, sin estilos, sin mockups y con código mal hecho, y teníamos un mes para presentar ante los inversionistas que decidirían si el proyecto seguía teniendo fondos.'
        },
        {
          title: 'Investigación',
          subtitle: 'Empezar de cero, contra reloj',
          content: 'No había nada reutilizable, los "mockups" eran JPGs que ni siquiera tenían el tamaño de la pantalla de un teléfono, así que empezamos de cero, lo cual era una oportunidad pero con muy poco tiempo. Investigamos qué necesitaban los usuarios, qué estaba haciendo la competencia y qué pedían las apps nativas de iOS y Android.'
        },
        {
          title: 'Diseño',
          subtitle: 'Una identidad desde cero',
          content: 'Construí un design system desde cero para darle a las apps su propia identidad y lenguaje visual, y con el poco tiempo que teníamos comparé a la competencia para encontrar los diferenciadores que el director del proyecto y el product manager querían destacar. Empecé con diseños de baja fidelidad para aprobar flujos y funciones, y después pasé a mockups de alta fidelidad siguiendo las guías de Google y Apple y los requisitos de las tiendas, trabajando en Adobe XD y UXPin.'
        },
        {
          title: 'Testing',
          subtitle: 'Asumiendo trabajo de producto',
          content: 'Al principio probaba directamente con el product manager, y cuando se fue poco después, la empresa contrató a un CTO y yo asumí parte del trabajo de producto, escribiendo historias de usuario, priorizando funcionalidades con el lead developer y el project manager, y revisando las funcionalidades terminadas antes de pasarlas al CTO para la decisión final. Entregamos dos apps nativas, ganamos un contrato para adaptar la plataforma a los dispositivos de marca de un cliente, y participamos en el proyecto de baños inteligentes de Porcelanite para el estadio de los Indiana Pacers, donde diseñé la interfaz y los elementos gráficos e íconos de las pantallas afuera de los baños, que funcionaban con puertas automáticas y sensores para avisar a los usuarios y al personal de mantenimiento, con viajes de trabajo a Chicago y visitas a instalaciones de clientes.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'Mi primera experiencia en producto',
          content: 'Fue la primera vez que asumí responsabilidades de producto, y me enseñó a pensar en el producto y no solo en el diseño. Aun con el caos de reemplazar a un equipo bajo presión de los inversionistas, ellos siguieron financiando el proyecto casi dos años más, y las dos apps se publicaron en las tiendas después de que entregué los íconos y materiales que pedía cada una.'
        }
      ]
    },
    tags: ['Product Management', 'Design System', 'Native Apps', 'Team Leadership'],
    technologies: ['Adobe XD', 'UXPin', 'Google/Apple Guidelines', 'iOS', 'Android']
  },

  impi: {
    id: 'impi',
    year: '2025–2026',
    title: { en: 'IMPI — Design System for Government', es: 'IMPI — Design System para Gobierno' },
    subtitle: { en: 'Unifying disparate systems with design standards', es: 'Unificando sistemas dispares con estándares de diseño' },
    kicker: { en: 'Government · Design System', es: 'Gobierno · Design System' },
    role: { en: 'Independent UX Consultant', es: 'Consultor UX Independiente' },
    client: { en: 'IMPI (Mexico City)', es: 'IMPI (Ciudad de México)' },
    location: { en: 'Mexico City, MX', es: 'Ciudad de México, MX' },
    image: 'images/case-studies/impi.png',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'A chaos that restarts every six years',
          content: 'IMPI is the Mexican government institution in charge of patents and intellectual property, and its development team is outsourced through Infotec, a government IT company. When I arrived, each digital service (for companies and for citizens) had been built in a different way, with old technology and no shared rules, and like every government institution, leadership changes every six years, so every new administration starts almost from zero.'
        },
        {
          title: 'Research',
          subtitle: 'Four areas, four worlds',
          content: 'Talking with each area I found four different managers, four development teams and four ways of building software, systems that needed to talk to each other were sharing information through Excel, Word or PowerPoint files, and there was no common design language, no components and no UX process, so every department was solving the same problems on its own.'
        },
        {
          title: 'Design',
          subtitle: 'A design system everyone could use',
          content: 'After several meetings with the managers, the most realistic first step was a design system, at least to give all the products the same visual identity. I designed it in Figma and then I was asked to turn it into code, so I built it in HTML, CSS and JavaScript, but the developers rejected it because each team wanted its own version for its own programming language. Beyond the visual identity, I built accessibility principles into every section, because as a government institution IMPI was required to meet them and the Gob.mx guidelines they were following did not. I also designed the main user flows and reviewed them with the areas responsible for each service, since the development managers were not the ones in charge of the content.'
        },
        {
          title: 'Testing',
          subtitle: 'Resistance and slow adoption',
          content: 'I designed the components in Figma and used an AI agent to turn them into HTML, CSS and JavaScript, then we documented everything in Storybook with instructions for each component, and when the teams asked for something that worked with any technology, I used an AI agent again to convert it all into Web Components with Lit. I uploaded the design system to IMPI\'s repository and every manager acknowledged it and said they would share it with their teams, after that only three people from two teams wrote to me with questions, and in one meeting a manager told me that sooner or later adoption would have to be mandatory, because the way they were designing under the Gob.mx guidelines was not working.'
        },
        {
          title: 'Conclusions',
          subtitle: 'What remains when leadership changes',
          content: 'The director of IMPI left to run for governor and all the development contracts stopped, so I could not follow how far the adoption went. Even so, it was the first coordinated UX effort between areas that had never worked together, and it taught me that in government the best you can leave is something simple enough to survive the next change of leadership.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Un caos que se reinicia cada seis años',
          content: 'El IMPI es la institución del gobierno mexicano que se encarga de patentes y propiedad intelectual, y su equipo de desarrollo está tercerizado a través de Infotec, una empresa de TI del gobierno. Cuando llegué, cada servicio digital (para empresas y para ciudadanos) estaba hecho de una forma distinta, con tecnología vieja y sin reglas compartidas, y como en toda institución de gobierno, la dirección cambia cada seis años, así que cada administración empieza casi desde cero.'
        },
        {
          title: 'Investigación',
          subtitle: 'Cuatro áreas, cuatro mundos',
          content: 'Platicando con cada área encontré cuatro gerentes distintos, cuatro equipos de desarrollo y cuatro formas de hacer software, sistemas que necesitaban comunicarse compartían información en archivos de Excel, Word o PowerPoint, y no había un lenguaje de diseño común, ni componentes, ni proceso de UX, así que cada departamento resolvía los mismos problemas por su cuenta.'
        },
        {
          title: 'Diseño',
          subtitle: 'Un design system que todos pudieran usar',
          content: 'Después de varias reuniones con los gerentes, el primer paso más realista era un design system, aunque fuera para darle a todos los productos la misma identidad visual. Lo diseñé en Figma y luego me pidieron convertirlo en código, así que lo hice en HTML, CSS y JavaScript, pero los desarrolladores lo rechazaron porque cada equipo quería su propia versión para su propio lenguaje. Más allá de la identidad visual, integré principios de accesibilidad en cada sección, porque como institución de gobierno el IMPI estaba obligado a cumplirlos y la guía de Gob.mx que seguían no lo hacía. También diseñé los flujos principales y los revisé con las áreas encargadas de cada servicio, ya que los gerentes de desarrollo no eran los responsables de los contenidos.'
        },
        {
          title: 'Testing',
          subtitle: 'Resistencia y una adopción lenta',
          content: 'Diseñé los componentes en Figma y usé un agente de IA para convertirlos en HTML, CSS y JavaScript, luego documentamos todo en Storybook con instrucciones para cada componente, y cuando los equipos pidieron algo que funcionara con cualquier tecnología, usé otra vez un agente de IA para convertirlo todo en Web Components con Lit. Subí el design system al repositorio del IMPI y cada gerente dio el enterado y dijo que lo pasaría a su equipo, después de eso solo tres personas de dos equipos me escribieron con dudas, y en una junta una gerente me dijo que tarde o temprano la adopción iba a tener que ser obligatoria, porque la forma en que estaban diseñando con la guía de Gob.mx no estaba funcionando.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'Lo que queda cuando cambia la dirección',
          content: 'El director del IMPI se fue para buscar una gubernatura y todos los contratos de desarrollo se detuvieron, así que no pude dar seguimiento a qué tanto se adoptó. Aun así, fue el primer esfuerzo de UX coordinado entre áreas que nunca habían trabajado juntas, y me enseñó que en gobierno lo mejor que puedes dejar es algo lo bastante simple para sobrevivir al siguiente cambio de dirección.'
        }
      ]
    },
    tags: ['Design System', 'Government', 'Web Components', 'Design Standards'],
    technologies: ['Figma', 'HTML/CSS', 'JavaScript', 'Web Components', 'Lit', 'Storybook', 'AI Agents']
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
    image: 'images/case-studies/rain4rent.png',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'A system that was costing sales',
          content: 'I joined this project at the end of 2019. The client rents and sells industrial water pumps, and their sales team used a web quoting system built for that industry, but it was made with discontinued technology and slow databases, and it was costing them sales, so they needed to modernize it fast.'
        },
        {
          title: 'Research',
          subtitle: 'Learning how they sell',
          content: 'They asked for a revamp but planned to reuse components, so I started by interviewing stakeholders and developers to understand their plan, and then the sales team and the product manager. The backlog was already well documented, so my main goal was a clear and usable interface. I did heuristic reviews, contextual interviews with salespeople, and went through a complete quote from start to finish to understand the flow, and I noticed the home screen had empty space we could use for a small dashboard where each salesperson could track their goals.'
        },
        {
          title: 'Design',
          subtitle: 'A long flow without overloading the screen',
          content: 'The quoting flow was unusually long, with many choices for the salesperson, so I used card sorting to get the last feedback from users before the wireframes, and tried different patterns to show every option without overloading the screen. I created a component library to keep the tool consistent and kept the client\'s brand colors. The dashboard idea came from my manager and me, building on work the team had left before I joined.'
        },
        {
          title: 'Testing',
          subtitle: 'Guerrilla testing with real users',
          content: 'In the first mockup iterations I noticed that even small visual changes, like a border line, made users hesitate, because they were following the mental maps of the old portal, so I reorganized the screens into a hierarchical flow of the quoting process that kept the familiar order of steps and made the new layout easier to follow. With the prototype ready in InVision, I ran remote guerrilla tests with three salespeople and one sales manager, each one with a set of cards with different goals to complete while they explored the interface and told me how they would solve each task. The users who were most used to the old system found the new one intuitive and easy to use, and the manager was the only one asking extra questions. I documented the findings so the team could turn them into hypotheses.'
        },
        {
          title: 'Conclusions',
          subtitle: 'Handing off with a clear path',
          content: 'I was in the project for four and a half months, and my participation ended before launch when the PM decided the team could continue without design support, but I left them with mockups, an InVision prototype, a component library and the test documentation. After I left, the development team ran A/B tests based on hypotheses from my guerrilla sessions, which for me is the best proof that the research was useful. I also learned to negotiate: managers wanted a strategic dashboard, salespeople needed something to work with every day, and together with my manager we agreed on an operational one that both sides could use.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Un sistema que estaba costando ventas',
          content: 'Me integré a este proyecto a finales de 2019. El cliente renta y vende bombas de agua industriales, y su equipo de ventas usaba un sistema web de cotizaciones hecho para esa industria, pero estaba construido con tecnología descontinuada y bases de datos lentas, y les estaba costando ventas, así que necesitaban modernizarlo rápido.'
        },
        {
          title: 'Investigación',
          subtitle: 'Aprendiendo cómo venden',
          content: 'Pedían un revamp pero planeaban reusar componentes, así que empecé entrevistando a stakeholders y desarrolladores para entender su plan, y después al equipo de ventas y al product manager. El backlog ya estaba bien documentado, así que mi objetivo principal era una interfaz clara y fácil de usar. Hice revisiones heurísticas, entrevistas contextuales con vendedores, y recorrí una cotización completa de principio a fin para entender el flujo, y noté que la pantalla de inicio tenía espacio libre que podíamos usar para un pequeño dashboard donde cada vendedor pudiera seguir sus metas.'
        },
        {
          title: 'Diseño',
          subtitle: 'Un flujo largo sin saturar la pantalla',
          content: 'El flujo de cotización era muy largo, con muchas decisiones para el vendedor, así que usé card sorting para obtener el último feedback de los usuarios antes de los wireframes, y probé distintos patrones para mostrar todas las opciones sin saturar la pantalla. Creé una librería de componentes para mantener la herramienta consistente y respeté los colores de la marca del cliente. La idea del dashboard fue de mi manager y mía, retomando trabajo que el equipo había dejado antes de que yo llegara.'
        },
        {
          title: 'Testing',
          subtitle: 'Pruebas de guerrilla con usuarios reales',
          content: 'En las primeras iteraciones de los mockups noté que hasta cambios visuales pequeños, como una línea de borde, hacían dudar a los usuarios, porque seguían los mapas mentales del portal anterior, así que reorganicé las pantallas en un flujo jerarquizado del proceso de cotización que respetaba el orden conocido de los pasos y hacía más fácil seguir el nuevo diseño. Con el prototipo listo en InVision, hice pruebas de guerrilla remotas con tres vendedores y un gerente de ventas, cada uno con un juego de tarjetas con objetivos diferentes que debían cumplir mientras exploraban la interfaz y me contaban cómo resolverían cada tarea. Los usuarios más acostumbrados al sistema viejo encontraron el nuevo intuitivo y fácil de usar, y el gerente fue el único que hizo preguntas extra. Documenté los hallazgos para que el equipo pudiera convertirlos en hipótesis.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'Entregar con un camino claro',
          content: 'Estuve cuatro meses y medio en el proyecto, y mi participación terminó antes del lanzamiento cuando la PM decidió que el equipo podía continuar sin apoyo de diseño, pero les dejé mockups, un prototipo en InVision, una librería de componentes y la documentación de las pruebas. Después de mi salida, el equipo de desarrollo hizo pruebas A/B con hipótesis que salieron de mis sesiones de guerrilla, y para mí esa es la mejor prueba de que la investigación sirvió. También aprendí a negociar: los gerentes querían un dashboard estratégico, los vendedores necesitaban algo para trabajar día a día, y junto con mi manager acordamos uno operativo que les sirviera a los dos.'
        }
      ]
    },
    tags: ['Sales Platform', 'Guerrilla Testing', 'User Research', 'SaaS'],
    technologies: ['Figma', 'InVision', 'Card Sorting', 'Heuristic Testing', 'Component Library']
  },

  buenafruta: {
    id: 'buenafruta',
    year: '2020',
    title: { en: 'Buena Fruta — Cherry Grading App', es: 'Buena Fruta — App de Clasificación de Cerezas' },
    subtitle: { en: 'Digital transformation for fruit processing', es: 'Transformación digital para procesamiento de frutas' },
    kicker: { en: 'Agriculture · Processing', es: 'Agricultura · Procesamiento' },
    role: { en: 'UX/UI Designer, grading app', es: 'Diseñador UX/UI, app de gradeo' },
    client: { en: 'Improving (California, USA)', es: 'Improving (California, EE. UU.)' },
    location: { en: 'California, USA', es: 'California, EE. UU.' },
    image: 'images/case-studies/buenafruta.png',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'Three generations of cherries',
          content: 'The owner of this company is the third generation of a family of cherry growers and processors in California, and he wanted to bring digital transformation to his processes. He was a client of Improving, and my part was to design, prototype and test the interface of the solution.'
        },
        {
          title: 'Research',
          subtitle: 'Finding the point with the most impact',
          content: 'Interviewing the owner and a couple of plant managers, we found that the best place to make an impact was the grading, in the middle of the process. Every ten minutes the grading team takes a small bucket of fruit from the production line, pours it on a table, separates it by size and color, and decides the grade, color and quality of the fruit at that moment, so the packing team at the end of the line knows how and where to place those cherries. The PM, a solutions architect and a developer visited the plant, and the owner came to Mexico to work with us.'
        },
        {
          title: 'Design',
          subtitle: 'One dedicated tablet, no internet needed',
          content: 'Together with the solutions architect we decided that an offline app installed on a dedicated tablet was the best option. The app used optical recognition to grade the fruit from a photo, and in the first phases the graders would approve each result, teaching the system through machine learning so that after a couple of seasons it could do it better on its own. To make that review less tedious I proposed adding gamification, and the owner told us it would also help him track each person\'s work, so we added biometric login for every grader. A teammate designed the live dashboard for the conveyor operator, which showed the quality being processed at that moment.'
        },
        {
          title: 'Testing',
          subtitle: 'Printed screens on a whiteboard',
          content: 'I tested the design with the owner: we printed the screens, put them on a whiteboard with descriptions, and went through several rounds of corrections together. I delivered the interface in Sketch, the prototype in InVision and my documentation, and that is where my participation ended, after that the QA team created test scenarios for the processing environment.'
        },
        {
          title: 'Conclusions',
          subtitle: 'A project that kept growing',
          content: 'With that idea the scope kept growing: in future iterations the plant could cross the grading data with the weather and the field each load came from, to learn the best conditions to harvest better cherries. The app was put on hold for a season, but later a teammate at Improving asked me for my mockups because he was developing it, and as far as I know it was built and delivered, although I do not know how long it was used.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Tres generaciones de cerezas',
          content: 'El dueño de esta empresa es la tercera generación de una familia de productores y procesadores de cereza en California, y quería llevar la transformación digital a sus procesos. Era cliente de Improving, y mi parte fue diseñar, prototipar y probar la interfaz de la solución.'
        },
        {
          title: 'Investigación',
          subtitle: 'Encontrar el punto con más impacto',
          content: 'Entrevistando al dueño y a un par de managers de la planta, encontramos que el mejor punto para tener impacto era el gradeo, a mitad del proceso. Cada diez minutos el equipo de gradeo toma fruta de la línea de producción con una cubetita, la tira sobre una mesa, la separa por tamaño y color, y decide el grado, el color y la calidad de la fruta en ese momento, para que la gente de empaque al final de la línea sepa cómo y a dónde mandar esas cerezas. El PM, un arquitecto de soluciones y un desarrollador visitaron la planta, y el dueño vino a México a trabajar con nosotros.'
        },
        {
          title: 'Diseño',
          subtitle: 'Una tableta dedicada, sin internet',
          content: 'Junto con el arquitecto de soluciones decidimos que una app sin conexión, instalada en una tableta dedicada, era la mejor opción. La app usaba reconocimiento óptico para gradear la fruta a partir de una foto, y en las primeras fases los gradeadores aprobarían cada resultado, enseñándole al sistema con machine learning para que después de un par de temporadas lo hiciera mejor por su cuenta. Para que esa revisión no fuera tediosa propuse agregar gamificación, y el dueño nos dijo que además le ayudaría a dar seguimiento al trabajo de cada persona, así que agregamos inicio de sesión biométrico para cada gradeador. Un compañero diseñó el dashboard en vivo para el operador de la banda, que mostraba la calidad que se estaba procesando en ese momento.'
        },
        {
          title: 'Testing',
          subtitle: 'Pantallas impresas en un pizarrón',
          content: 'Probé el diseño con el dueño: imprimimos las pantallas, las pusimos en un pizarrón con descripciones e hicimos varias rondas de correcciones juntos. Entregué la interfaz en Sketch, el prototipo en InVision y mi documentación, y ahí terminó mi participación, después el equipo de QA creó escenarios de prueba para el ambiente de la planta.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'Un proyecto que siguió creciendo',
          content: 'Con esa idea el alcance siguió creciendo: en futuras iteraciones la planta podría cruzar los datos del gradeo con el clima y el campo del que venía cada carga, para conocer las mejores condiciones para cosechar mejores cerezas. La app se quedó guardada una temporada, pero después un compañero de Improving me buscó para pedirme mis mockups porque él la estaba desarrollando, y hasta donde sé se desarrolló y se entregó, aunque no sé cuánto tiempo se usó.'
        }
      ]
    },
    tags: ['Gamification', 'Offline-First', 'Tablet Design', 'Agricultural Tech'],
    technologies: ['Sketch', 'InVision', 'Tablet UI', 'Paper Prototyping', 'Offline Architecture']
  },

  sief: {
    id: 'sief',
    year: '2017–2018',
    title: { en: 'SIEF — Electoral Tribunal of Mexico', es: 'SIEF — Tribunal Electoral de México' },
    subtitle: { en: 'Redesigning Mexico\'s federal electoral results system', es: 'Rediseño del sistema de resultados electorales federales de México' },
    kicker: { en: 'Government · Electoral System', es: 'Gobierno · Sistema Electoral' },
    role: { en: 'Lead UX Designer', es: 'Diseñador UX Líder' },
    client: { en: 'TEPJF (Electoral Tribunal)', es: 'TEPJF (Tribunal Electoral)' },
    location: { en: 'Mexico City, MX', es: 'Ciudad de México, MX' },
    image: 'images/case-studies/sief.png',
    sections: {
      en: [
        {
          title: 'Introduction',
          subtitle: 'A project that scared me',
          content: 'This project began at the end of 2017, about six months before the presidential elections of July 2018, when an old friend invited me to redesign an old system of the TEPJF, the electoral tribunal, the tool used to track the election results and validate the winner. The system was ten years old, built with very old technology by a team without any methodology, so it had no UX research and a poor UI, it used the native Visual Basic components, and in most cases the icons on the buttons had nothing to do with their function.'
        },
        {
          title: 'Research',
          subtitle: 'Adding the law to the mechanics',
          content: 'The first meetings were with a legal team, to understand how the electoral law had to be applied in the process, because after the election a team captures all the results in the SIEF. That team is seasonal and they were not hired yet, but I managed to interview a group of past users and run contextual interviews to understand the pains of the process, since at some point they process hundreds of thousands of records in a couple of weeks. With what I found I mapped the journey of the process and made wireframes to discuss with the users, and after a couple of iterations I got approval to design the high fidelity mockups.'
        },
        {
          title: 'Design',
          subtitle: 'Designing for the people who capture',
          content: 'Since the wireframes were already approved, the high fidelity mockups came quickly. As usual in a federal institution there was not much room to play with colors or typography, so I played with the style of the components instead, because data capture was the main task of the tool, I made the components bigger and worked with the developers so everything could be used from the keyboard. For example, in one screen users had to mark a checkbox for every issue a case file presented, in a list of more than twenty items, and the old system had tiny checkboxes that only worked if you clicked exactly on them, so we made them extra large, added filters to fill them faster, and made the whole row clickable to mark each one. I also helped the developers apply the styles, since they had no experience doing it. As part of the delivery I also wrote extensive documentation of every design decision, and we finished with enough time to test with users.'
        },
        {
          title: 'Testing',
          subtitle: 'Harvesting a well planned work',
          content: 'It was the first project where my work went through so many reviews, we had to test with different groups of users on devices with different capabilities, and since it was a web application we even supported the infamous Internet Explorer 5 to 7. I designed usability tests around three personas, one for each skill level of the users, each with five cards with different goals, and users entered a room with no moderator to do the tests while I recorded their screens, then I made small adjustments based on the results. The users who knew the old system told us they completed the process much faster, and we confirmed it in the recordings. To this day the tool is used in every election in Mexico.'
        },
        {
          title: 'Conclusions',
          subtitle: 'A project hard to forget',
          content: 'I am very happy I was part of this project. It has no public visibility, but among federal institutions it received many compliments, and we managed to turn very complex and abstract electoral laws into a process people could follow, where data visualization was key to show the path of the process for each persona. I learned a lot planning the tests from the theory and seeing how well they worked, and the best sign was that even the stakeholders sat down to do the tests just to try the tool.'
        }
      ],
      es: [
        {
          title: 'Introducción',
          subtitle: 'Un proyecto que daba miedo',
          content: 'Este proyecto empezó a finales de 2017, unos seis meses antes de las elecciones presidenciales de julio de 2018, cuando un viejo amigo me invitó a rediseñar un sistema antiguo del TEPJF, el tribunal electoral, la herramienta que se usa para dar seguimiento a los resultados de la elección y validar al ganador. El sistema tenía diez años, estaba hecho con tecnología muy vieja por un equipo sin ninguna metodología, así que no tenía investigación de UX y su interfaz era pobre, usaba los componentes nativos de Visual Basic, y en la mayoría de los casos los íconos de los botones no tenían nada que ver con su función.'
        },
        {
          title: 'Investigación',
          subtitle: 'Agregando la ley a la mecánica',
          content: 'Las primeras reuniones fueron con un equipo legal, para entender cómo se tenía que aplicar la ley electoral en el proceso, porque después de la elección un equipo captura todos los resultados en el SIEF. Ese equipo es temporal y todavía no lo contrataban, pero logré entrevistar a un grupo de usuarios de elecciones pasadas y hacer entrevistas contextuales para entender los dolores del proceso, ya que en algún momento procesan cientos de miles de registros en un par de semanas. Con lo que encontré mapeé el recorrido del proceso e hice wireframes para platicarlos con los usuarios, y después de un par de iteraciones me aprobaron diseñar los mockups de alta fidelidad.'
        },
        {
          title: 'Diseño',
          subtitle: 'Diseñando para quienes capturan',
          content: 'Como los wireframes ya estaban aprobados, los mockups de alta fidelidad salieron rápido. Como es normal en una dependencia federal no había mucho espacio para jugar con colores o tipografía, así que jugué con el estilo de los componentes, y como la captura de datos era la tarea principal de la herramienta, hice los componentes más grandes y trabajé con los desarrolladores para que todo se pudiera usar desde el teclado. Por ejemplo, en una pantalla los usuarios tenían que marcar un checkbox por cada caso que presentaba un expediente, en una lista de más de veinte elementos, y el sistema anterior tenía checkboxes minúsculos que solo funcionaban si le dabas clic exactamente al componente, así que los hicimos extra grandes, agregamos filtros de llenado y la línea completa se podía señalar para marcar cada uno. También ayudé a los desarrolladores a aplicar los estilos, porque no tenían experiencia haciéndolo. Como parte de la entrega también escribí una documentación extensa de cada decisión de diseño, y terminamos con tiempo suficiente para hacer pruebas con usuarios.'
        },
        {
          title: 'Testing',
          subtitle: 'Cosechando un trabajo bien planeado',
          content: 'Fue el primer proyecto en el que mi trabajo pasó por tantas revisiones, tuvimos que probar con distintos grupos de usuarios en equipos con diferentes capacidades, y como era una aplicación web hasta dimos soporte a los infames Internet Explorer 5 a 7. Diseñé pruebas de usabilidad alrededor de tres personas, una por cada nivel de habilidad de los usuarios, cada una con cinco tarjetas con objetivos distintos, y los usuarios entraban a una sala sin moderador a hacer las pruebas mientras yo grababa sus pantallas, y después hice pequeños ajustes con los resultados. Los usuarios que conocían el sistema anterior nos dijeron que hacían el proceso mucho más rápido, y lo confirmamos en las grabaciones. Hasta hoy la herramienta se usa en cada elección en México.'
        },
        {
          title: 'Conclusiones',
          subtitle: 'Un proyecto difícil de olvidar',
          content: 'Me da mucho gusto haber sido parte de este proyecto. No tiene visibilidad pública, pero entre dependencias federales recibió muchos halagos, y logramos convertir leyes electorales muy complejas y abstractas en un proceso que la gente podía seguir, donde la visualización de datos fue clave para mostrar el camino del proceso para cada persona. Aprendí mucho planeando las pruebas desde la teoría y viendo lo bien que funcionaron, y la mejor señal fue que hasta los stakeholders se sentaron a hacer las pruebas solo para probar la herramienta.'
        }
      ]
    },
    tags: ['User Research', 'Design System', 'Accessibility', 'Government', 'Data Visualization'],
    technologies: ['Figma', 'Wireframing', 'User Testing', 'Documentation', 'Accessibility (WCAG)']
  }
};
