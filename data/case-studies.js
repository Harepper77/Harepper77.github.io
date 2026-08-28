// Case Studies Data — Reutilizable para todos los proyectos
const caseStudiesData = {
  sief: {
    id: 'sief',
    year: '2018',
    title: { en: 'SIEF — Electoral Tribunal of Mexico', es: 'SIEF — Tribunal Electoral de México' },
    subtitle: { en: 'Redesigning Mexico\'s federal electoral results system', es: 'Rediseño del sistema de resultados electorales federales de México' },
    kicker: { en: 'Government · Electoral System', es: 'Gobierno · Sistema Electoral' },
    role: { en: 'Lead UX Designer', es: 'Diseñador UX Líder' },
    client: { en: 'TEPJF (Electoral Tribunal)', es: 'TEPJF (Tribunal Electoral)' },
    location: { en: 'Mexico City, MX', es: 'Ciudad de México, MX' },
    team: { en: '1 UX Designer, 8 developers, 3 stakeholders', es: '1 Diseñador UX, 8 desarrolladores, 3 stakeholders' },
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
  },

  // Placeholder estructura para otros case studies (llenar después)
  capstone: {
    id: 'capstone',
    year: '2022–2024',
    title: { en: 'Capstone Logistics Platform', es: 'Plataforma Capstone Logistics' },
    subtitle: { en: 'Enterprise UX for legacy logistics', es: 'UX empresarial para logística legacy' },
    kicker: { en: 'Enterprise UX · Logistics', es: 'UX Empresarial · Logística' },
    role: { en: 'Lead UX Designer', es: 'Diseñador UX Líder' },
    client: { en: 'Via Improving', es: 'Vía Improving' },
    location: { en: 'Atlanta, USA', es: 'Atlanta, EE.UU.' },
    image: 'img/capstone-hero.jpg',
    sections: {
      en: [{ title: 'Coming soon', subtitle: '', content: 'Content being prepared...' }],
      es: [{ title: 'Próximamente', subtitle: '', content: 'Contenido en preparación...' }]
    },
    tags: ['User Research', 'Design System', 'Storybook'],
    technologies: ['Figma', 'Storybook', 'React']
  },

  electrolit: {
    id: 'electrolit',
    year: '2022',
    title: { en: 'Electrolit Mobile App', es: 'App Electrolit Mobile' },
    subtitle: { en: 'Brand mobile app from concept to launch', es: 'App móvil de marca de concepto a lanzamiento' },
    kicker: { en: 'Mobile · Brand App', es: 'Móvil · App de Marca' },
    role: { en: 'Lead UX Designer', es: 'Diseñador UX Líder' },
    client: { en: 'Via Improving', es: 'Vía Improving' },
    location: { en: 'Guadalajara, MX', es: 'Guadalajara, MX' },
    image: 'img/electrolit-hero.jpg',
    sections: {
      en: [{ title: 'Coming soon', subtitle: '', content: 'Content being prepared...' }],
      es: [{ title: 'Próximamente', subtitle: '', content: 'Contenido en preparación...' }]
    },
    tags: ['Mobile Design', 'User Research', 'Prototyping'],
    technologies: ['Figma', 'React Native', 'User Testing']
  },

  delphian: {
    id: 'delphian',
    year: '2020–2022',
    title: { en: 'Delphian Systems — StrongBox', es: 'Delphian Systems — StrongBox' },
    subtitle: { en: 'IoT residential lock app revitalization', es: 'Revitalización de app de cerradura IoT residencial' },
    kicker: { en: 'IoT · UX + Product', es: 'IoT · UX + Producto' },
    role: { en: 'UX/Product Manager', es: 'Gestor UX/Producto' },
    client: { en: 'Via Improving', es: 'Vía Improving' },
    location: { en: 'Chicago, USA', es: 'Chicago, EE.UU.' },
    image: 'img/delphian-hero.jpg',
    sections: {
      en: [{ title: 'Coming soon', subtitle: '', content: 'Content being prepared...' }],
      es: [{ title: 'Próximamente', subtitle: '', content: 'Contenido en preparación...' }]
    },
    tags: ['Product Strategy', 'Design System', 'IoT'],
    technologies: ['Figma', 'Product Strategy', 'Team Leadership']
  },

  impi: {
    id: 'impi',
    year: '2021–2023',
    title: { en: 'IMPI Consultancy', es: 'Consultoría IMPI' },
    subtitle: { en: 'UX consultancy for government IP systems', es: 'Consultoría UX para sistemas gubernamentales de PI' },
    kicker: { en: 'Government · IP Systems', es: 'Gobierno · Sistemas de PI' },
    role: { en: 'Independent UX Consultant', es: 'Consultor UX Independiente' },
    client: { en: 'IMPI', es: 'IMPI' },
    location: { en: 'Mexico City, MX', es: 'Ciudad de México, MX' },
    image: 'img/impi-hero.jpg',
    sections: {
      en: [{ title: 'Coming soon', subtitle: '', content: 'Content being prepared...' }],
      es: [{ title: 'Próximamente', subtitle: '', content: 'Contenido en preparación...' }]
    },
    tags: ['Accessibility', 'Government', 'Service Design'],
    technologies: ['Figma', 'Accessibility Audit', 'Service Design']
  }
};
