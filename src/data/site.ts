import { business, serviceCatalog, serviceDefinitions, type ServiceCatalogKey, type ServiceKey } from './business';

export type Locale = 'en' | 'es';
export type PageKey =
  | 'home'
  | 'services'
  | 'about'
  | 'agentsLenders'
  | 'resources'
  | 'contact'
  | 'manufacturedHomes'
  | 'probate'
  | 'shortSale'
  | 'reverseMortgage'
  | 'residential'
  | 'commercial'
  | 'wholesale'
  | 'privacyPolicy'
  | 'terms';

export const routeMap: Record<PageKey, Record<Locale, string>> = {
  home: { en: '/', es: '/es/' },
  services: { en: '/services/', es: '/es/servicios/' },
  about: { en: '/about/', es: '/es/nosotros/' },
  agentsLenders: { en: '/for-agents-and-lenders/', es: '/es/agentes-y-prestamistas/' },
  resources: { en: '/resources/', es: '/es/recursos/' },
  contact: { en: '/contact/', es: '/es/contacto/' },
  manufacturedHomes: {
    en: '/services/manufactured-home-escrow/',
    es: '/es/servicios/escrow-casas-manufacturadas/'
  },
  probate: { en: '/services/probate-escrow/', es: '/es/servicios/escrow-probate/' },
  shortSale: { en: '/services/short-sale-escrow/', es: '/es/servicios/escrow-short-sale/' },
  reverseMortgage: {
    en: '/services/reverse-mortgage-escrow/',
    es: '/es/servicios/escrow-hipoteca-inversa/'
  },
  residential: { en: '/services/residential-escrow/', es: '/es/servicios/escrow-residencial/' },
  commercial: { en: '/services/commercial-escrow/', es: '/es/servicios/escrow-comercial/' },
  wholesale: { en: '/services/wholesale-escrow/', es: '/es/servicios/escrow-wholesale/' },
  privacyPolicy: { en: '/privacy-policy/', es: '/es/politica-de-privacidad/' },
  terms: { en: '/terms-and-conditions/', es: '/es/terminos-y-condiciones/' }
};

export const implementedPageKeys = ['home', 'about', 'contact', 'manufacturedHomes', 'probate', 'shortSale', 'reverseMortgage', 'residential', 'commercial', 'wholesale', 'privacyPolicy', 'terms'] as const satisfies readonly PageKey[];

export const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español'
};

export const languageOptions: Record<Locale, { shortLabel: string; accessibleLabel: string }> = {
  en: { shortLabel: 'EN', accessibleLabel: 'View this page in English' },
  es: { shortLabel: 'ES', accessibleLabel: 'Ver esta página en español' }
};

export const serviceCatalogLabels: Record<Locale, Record<ServiceCatalogKey, string>> = {
  en: {
    residential: 'Residential',
    commercial: 'Commercial',
    probate: 'Probate',
    manufacturedHomes: 'Manufactured & Mobile Homes',
    shortSales: 'Short Sales',
    reverseMortgage: 'Reverse Mortgage',
    wholesale: 'Wholesale'
  },
  es: {
    residential: 'Residencial',
    commercial: 'Comercial',
    probate: 'Probate',
    manufacturedHomes: 'Manufactured & Mobile Homes',
    shortSales: 'Ventas cortas',
    reverseMortgage: 'Hipoteca inversa',
    wholesale: 'Wholesale'
  }
};

const homeServiceCardContent: Record<Locale, Record<ServiceCatalogKey, { title: string; description: string }>> = {
  en: {
    residential: {
      title: 'Residential Escrow',
      description: 'Escrow coordination for home purchases and sales, from opening through closing.'
    },
    commercial: {
      title: 'Commercial Escrow',
      description: 'Escrow coordination for commercial real estate transactions and closing requirements.'
    },
    probate: {
      title: 'Probate Escrow',
      description: 'Escrow coordination for property sales involving probate or estate administration.'
    },
    manufacturedHomes: {
      title: 'Manufactured & Mobile Homes',
      description: 'Escrow coordination for manufactured home transactions shaped by title, land, and property records.'
    },
    shortSales: {
      title: 'Short Sales',
      description: 'Escrow coordination for short sale transactions involving lender approval and closing instructions.'
    },
    reverseMortgage: {
      title: 'Reverse Mortgage',
      description: 'Escrow coordination when a reverse mortgage is part of the transaction or closing process.'
    },
    wholesale: {
      title: 'Wholesale Real Estate Escrow',
      description: 'Escrow coordination for wholesale real estate transactions, according to applicable agreements and closing requirements.'
    }
  },
  es: {
    residential: {
      title: 'Escrow residencial',
      description: 'Coordinación de escrow para la compra y venta de viviendas, desde la apertura hasta el cierre.'
    },
    commercial: {
      title: 'Escrow comercial',
      description: 'Coordinación de escrow para transacciones de bienes raíces comerciales y sus requisitos de cierre.'
    },
    probate: {
      title: 'Escrow de probate',
      description: 'Coordinación de escrow para ventas de propiedades relacionadas con probate o administración sucesoria.'
    },
    manufacturedHomes: {
      title: 'Manufactured & Mobile Homes',
      description: 'Coordinación de escrow para operaciones con manufactured homes, según título, terreno y registros de propiedad.'
    },
    shortSales: {
      title: 'Short Sales',
      description: 'Coordinación de escrow para operaciones short sale sujetas a aprobación del prestamista e instrucciones de cierre.'
    },
    reverseMortgage: {
      title: 'Reverse Mortgage',
      description: 'Coordinación de escrow cuando una reverse mortgage forma parte de la operación o del cierre.'
    },
    wholesale: {
      title: 'Escrow inmobiliario wholesale',
      description: 'Coordinación de escrow para transacciones inmobiliarias wholesale, conforme a los acuerdos y requisitos de cierre aplicables.'
    }
  }
};

const servicesFor = (locale: Locale) => serviceCatalog.map((service) => ({
  ...service,
  ...homeServiceCardContent[locale][service.key]
}));

export const homeContent = {
  en: {
    locale: 'en',
    meta: {
      title: 'Downtown Community Escrow | Independent Escrow Services',
      description: 'Independent escrow coordination for manufactured homes, short sales, probate, reverse mortgages, residential, and commercial property transactions.'
    },
    skipLink: 'Skip to main content',
    wordmarkLabel: 'Downtown Community Escrow home',
    header: {
      navigationLabel: 'Primary navigation',
      openMenuLabel: 'Open navigation',
      closeMenuLabel: 'Close navigation',
      servicesSubmenuLabel: 'Escrow specialties',
      openServicesSubmenuLabel: 'Open Services specialties',
      closeServicesSubmenuLabel: 'Close Services specialties',
      cta: 'Let’s talk',
      navigation: [
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'about', label: 'About' },
        { id: 'agentsLenders', label: 'Agents & Lenders' },
        { id: 'resources', label: 'Resources' },
        { id: 'contact', label: 'Contact' }
      ]
    },
    hero: {
      kicker: 'Independent escrow · Santa Ana, CA',
      title: 'Every Property Has a Story.',
      titleAccent: 'Every Closing Needs Escrow.',
      intro: 'Independent escrow services for residential, commercial, and specialized real estate transactions. Based in Santa Ana, California.',
      primaryCta: 'Our Escrow Services',
      secondaryCta: 'Contact Downtown',
      imageAlt: 'Illustrative contemporary Southern California residence',
      imageCaption: 'Residential escrow, thoughtfully guided',
      documentLabel: 'DCE',
      featuredLabel: 'Featured escrow services',
      featuredServices: [
        {
          key: 'residential',
          title: 'Residential Escrow',
          description: 'Escrow coordination for home purchases and sales, from opening through closing.'
        },
        {
          key: 'commercial',
          title: 'Commercial Escrow',
          description: 'Coordinating escrow requirements for commercial real estate transactions.'
        },
        {
          key: 'probate',
          title: 'Probate Escrow',
          description: 'Escrow coordination for property sales involving probate or estate administration.'
        }
      ]
    },
    services: {
      eyebrow: 'Our services',
      heading: 'Escrow Services for Every Type of Transaction',
      intro: 'Explore residential, commercial, and specialized escrow services designed to match the type of property and transaction involved.',
      action: 'Explore services',
      comingSoonLabel: 'Coming soon',
      items: servicesFor('en')
    },
    why: {
      eyebrow: 'WHY DOWNTOWN',
      heading: 'Your Transaction Is More Than Paperwork.',
      body: 'Every real estate transaction involves different people, documents, and closing requirements. Downtown Community Escrow provides independent escrow coordination, with a local office in Santa Ana and services for residential, commercial, and specialized transactions.',
      imageAlt: 'Illustrative Orange County residence, not the Downtown Community Escrow office',
      imageCaption: 'Illustrative residential image',
      markerTop: 'SANTA ANA',
      markerBottom: 'LOCAL DESK',
      addressLabel: 'Office address',
      action: 'Learn About Downtown',
      actionHref: routeMap.about.en,
      trustLabel: 'Verified business information',
      trustSignals: [
        { label: 'Santa Ana Office', value: 'Located in Santa Ana, California.' },
        { label: 'Independent Escrow', value: 'Neutral coordination of funds, documents, and closing instructions.' },
        { label: 'Specialized Escrow Services', value: 'Residential, commercial, and specialized real estate transactions.' }
      ]
    },
    questions: {
      eyebrow: 'GENERAL QUESTIONS',
      heading: 'Questions About Downtown Escrow?',
      intro: 'Find clear answers about our services, location, and how to contact us.',
      items: [
        {
          question: 'Where is Downtown Community Escrow located?',
          answer: `${business.legalName} is located at ${business.addressLine}, ${business.cityLine}.`
        },
        {
          question: 'What does an independent escrow company do?',
          answer: 'An independent escrow company acts as a neutral party, coordinating funds, documents, and closing instructions according to the applicable transaction requirements.'
        },
        {
          question: 'What escrow services does Downtown offer?',
          answer: 'Downtown offers residential, commercial, probate, manufactured and mobile home, short sale, reverse mortgage, and wholesale real estate escrow services.'
        },
        {
          question: 'How can I contact Downtown about a transaction?',
          answer: 'You can contact Downtown through the Contact page or call the office to discuss the type of property and transaction involved.'
        }
      ],
      preparationHeading: 'Tell Us About Your Transaction.',
      preparationIntro: 'Have the property address and a general idea of the transaction ready. You can share your questions when you contact Downtown.',
      preparationEyebrow: 'NOT SURE WHERE TO START?',
      preparationItems: [
        ['Your property', 'Have the property address handy.'],
        ['Your transaction', 'Tell us what you’re working on.'],
        ['Your questions', 'Bring the details you want to discuss.']
      ]
    },
    resource: {
      heading: 'Before closing day.',
      action: 'View resources',
      eyebrow: 'Escrow resource',
      title: 'What can delay an escrow closing?',
      summary: 'Questions to ask as closing day approaches.',
      status: 'Guide in development',
      imageAlt: 'Sunlit detail of an illustrative Southern California residence',
      noteLabel: 'ESCROW NOTES'
    },
    contact: {
      eyebrow: "LET'S TALK ABOUT YOUR ESCROW",
      headingLines: ['Have an Escrow Transaction', 'in Mind?'],
      body: "Whether you're working on a residential, commercial, or specialized real estate transaction, contact Downtown to discuss your escrow needs.",
      contactLabel: 'Contact Downtown',
      callLabel: `Call Downtown Community Escrow at ${business.phoneDisplay}`
    },
    footer: {
      introLines: ['Independent escrow services based in Santa Ana, California.'],
      exploreHeading: 'Explore',
      servicesHeading: 'Services',
      contactHeading: 'Contact',
      copyrightContext: 'Office in Santa Ana, California.'
    },
    languageSwitcherLabel: 'Choose language'
  },
  es: {
    locale: 'es',
    meta: {
      title: 'Downtown Community Escrow | Servicios de Escrow Independiente',
      description: 'Coordinación independiente de escrow para casas manufacturadas, short sales, probate, hipotecas inversas y operaciones residenciales y comerciales.'
    },
    skipLink: 'Ir al contenido principal',
    wordmarkLabel: 'Inicio de Downtown Community Escrow',
    header: {
      navigationLabel: 'Navegación principal',
      openMenuLabel: 'Abrir navegación',
      closeMenuLabel: 'Cerrar navegación',
      servicesSubmenuLabel: 'Especialidades de escrow',
      openServicesSubmenuLabel: 'Abrir especialidades de Servicios',
      closeServicesSubmenuLabel: 'Cerrar especialidades de Servicios',
      cta: 'Hablemos',
      navigation: [
        { id: 'home', label: 'Inicio' },
        { id: 'services', label: 'Servicios' },
        { id: 'about', label: 'Nosotros' },
        { id: 'agentsLenders', label: 'Agentes y prestamistas' },
        { id: 'resources', label: 'Recursos' },
        { id: 'contact', label: 'Contacto' }
      ]
    },
    hero: {
      kicker: 'Escrow independiente · Santa Ana, CA',
      title: 'Cada propiedad tiene una historia.',
      titleAccent: 'Cada cierre necesita escrow.',
      intro: 'Servicios independientes de escrow para operaciones inmobiliarias residenciales, comerciales y especializadas. Estamos ubicados en Santa Ana, California.',
      primaryCta: 'Nuestros servicios',
      secondaryCta: 'Contactar a Downtown',
      imageAlt: 'Ilustración de una residencia contemporánea del sur de California',
      imageCaption: 'Escrow residencial con orientación atenta',
      documentLabel: 'DCE',
      featuredLabel: 'Servicios de escrow destacados',
      featuredServices: [
        {
          key: 'residential',
          title: 'Escrow residencial',
          description: 'Coordinación de escrow para la compra y venta de viviendas, desde la apertura hasta el cierre.'
        },
        {
          key: 'commercial',
          title: 'Escrow comercial',
          description: 'Coordinación de requisitos de escrow en transacciones de bienes raíces comerciales.'
        },
        {
          key: 'probate',
          title: 'Escrow de probate',
          description: 'Coordinación de escrow para ventas de propiedades relacionadas con procesos sucesorios.'
        }
      ]
    },
    services: {
      eyebrow: 'Nuestros servicios',
      heading: 'Servicios de escrow para cada tipo de operación',
      intro: 'Explora servicios de escrow residenciales, comerciales y especializados, según el tipo de propiedad y la operación que necesites coordinar.',
      action: 'Explorar servicios',
      comingSoonLabel: 'Próximamente',
      items: servicesFor('es')
    },
    why: {
      eyebrow: 'POR QUÉ DOWNTOWN',
      heading: 'Tu operación es más que documentos.',
      body: 'Cada operación inmobiliaria involucra diferentes personas, documentos y requisitos de cierre. Downtown Community Escrow ofrece coordinación independiente de escrow, con oficina en Santa Ana y servicios para operaciones residenciales, comerciales y especializadas.',
      imageAlt: 'Ilustración de una residencia del condado de Orange; no es la oficina de Downtown Community Escrow',
      imageCaption: 'Imagen residencial ilustrativa',
      markerTop: 'SANTA ANA',
      markerBottom: 'OFICINA LOCAL',
      addressLabel: 'Dirección de la oficina',
      action: 'Conoce Downtown',
      actionHref: routeMap.about.es,
      trustLabel: 'Información empresarial verificada',
      trustSignals: [
        { label: 'Oficina en Santa Ana', value: 'Ubicados en Santa Ana, California.' },
        { label: 'Escrow independiente', value: 'Coordinación neutral de fondos, documentos e instrucciones de cierre.' },
        { label: 'Servicios especializados de escrow', value: 'Operaciones inmobiliarias residenciales, comerciales y especializadas.' }
      ]
    },
    questions: {
      eyebrow: 'PREGUNTAS GENERALES',
      heading: '¿Tienes preguntas sobre Downtown Escrow?',
      intro: 'Encuentra respuestas claras sobre nuestros servicios, ubicación y cómo comunicarte con Downtown.',
      items: [
        {
          question: '¿Dónde se encuentra Downtown Community Escrow?',
          answer: `${business.legalName} está ubicada en ${business.addressLine}, ${business.cityLine}.`
        },
        {
          question: '¿Qué hace una compañía independiente de escrow?',
          answer: 'Una compañía independiente de escrow actúa como tercero neutral y coordina fondos, documentos e instrucciones de cierre conforme a los requisitos aplicables a cada operación.'
        },
        {
          question: '¿Qué servicios de escrow ofrece Downtown?',
          answer: 'Downtown ofrece servicios de escrow residencial, comercial, probate, manufactured y mobile homes, short sales, hipotecas inversas y operaciones inmobiliarias wholesale.'
        },
        {
          question: '¿Cómo puedo contactar a Downtown para consultar sobre una operación?',
          answer: 'Puedes comunicarte con Downtown a través de la página Contacto o llamar a la oficina para consultar sobre el tipo de propiedad y la operación que estás realizando.'
        }
      ],
      preparationHeading: 'Cuéntanos sobre tu operación.',
      preparationIntro: 'Ten a mano la dirección de la propiedad y una idea general de la operación. Puedes compartir tus preguntas al comunicarte con Downtown.',
      preparationEyebrow: '¿NO SABES POR DÓNDE COMENZAR?',
      preparationItems: [
        ['Tu propiedad', 'Ten a la mano la dirección de la propiedad.'],
        ['Tu transacción', 'Cuéntanos en qué estás trabajando.'],
        ['Tus preguntas', 'Comparte los detalles que quieras consultar.']
      ]
    },
    resource: {
      heading: 'Antes del día del cierre.',
      action: 'Ver recursos',
      eyebrow: 'Recurso de escrow',
      title: '¿Qué puede retrasar el cierre de un escrow?',
      summary: 'Preguntas que conviene hacer al acercarse el día del cierre.',
      status: 'Guía en desarrollo',
      imageAlt: 'Detalle soleado de una residencia ilustrativa del sur de California',
      noteLabel: 'NOTAS DE ESCROW'
    },
    contact: {
      eyebrow: 'HABLEMOS SOBRE TU ESCROW',
      headingLines: ['¿Tienes una operación de escrow', 'en mente?'],
      body: 'Ya sea una operación inmobiliaria residencial, comercial o especializada, comunícate con Downtown para consultar sobre tus necesidades de escrow.',
      contactLabel: 'Contactar a Downtown',
      callLabel: `Llamar a Downtown Community Escrow al ${business.phoneDisplay}`
    },
    footer: {
      introLines: ['Servicios independientes de escrow con oficina en Santa Ana, California.'],
      exploreHeading: 'Explorar',
      servicesHeading: 'Servicios',
      contactHeading: 'Contacto',
      copyrightContext: 'Oficina en Santa Ana, California.'
    },
    languageSwitcherLabel: 'Elegir idioma'
  }
} as const;

export type HomeContent = (typeof homeContent)[Locale];

const serviceDetails: Record<Locale, Record<ServiceKey, { heading: string; summary: string; guidance: string }>> = {
  en: {
    manufacturedHomes: {
      heading: 'Manufactured & mobile homes',
      summary: 'Escrow support for property transactions involving manufactured and mobile homes.',
      guidance: 'This service may fit when the property is identified as a manufactured or mobile home and you need to discuss escrow coordination for the transaction.'
    },
    shortSales: {
      heading: 'Short sales',
      summary: 'Escrow service for a property transaction being handled as a short sale.',
      guidance: 'Choose this topic when a proposed sale involves a lender’s review. Downtown coordinates the escrow portion of the transaction; lender approval and closing timing are not guaranteed.'
    },
    probate: {
      heading: 'Probate',
      summary: 'Escrow coordination for property transactions connected to probate or an estate.',
      guidance: 'Use this topic when a real estate transaction is connected to a probate matter. The escrow team can discuss transaction coordination, but does not provide legal advice or assume that every matter follows the same court requirements.'
    },
    reverseMortgage: {
      heading: 'Reverse mortgage',
      summary: 'Escrow support for a property transaction involving a reverse mortgage.',
      guidance: 'Choose this topic when a reverse mortgage is part of the transaction. Escrow service is separate from loan origination, borrower eligibility, and loan advice.'
    },
    residential: {
      heading: 'Residential',
      summary: 'Escrow service for residential property transactions within the confirmed scope of the matter.',
      guidance: 'Use this topic for a residential purchase or related transaction. Share the property location and transaction type so the team can confirm how it may assist.'
    },
    commercial: {
      heading: 'Commercial',
      summary: 'A starting point for discussing escrow needs in a commercial real estate transaction.',
      guidance: 'Choose this topic when the property or transaction is commercial. Describe the property and proposed transaction so Downtown can confirm whether the requested escrow service is within scope.'
    }
  },
  es: {
    manufacturedHomes: {
      heading: 'Casas manufacturadas y móviles',
      summary: 'Apoyo de escrow para operaciones con casas manufacturadas y casas móviles.',
      guidance: 'Este servicio puede corresponder cuando la propiedad se identifica como casa manufacturada o móvil y necesitas consultar la coordinación de escrow para la operación.'
    },
    shortSales: {
      heading: 'Short sales',
      summary: 'Servicio de escrow para una operación inmobiliaria gestionada como short sale.',
      guidance: 'Elige este tema cuando la venta propuesta requiere revisión del acreedor. Downtown coordina la parte de escrow de la operación; no garantiza la aprobación del acreedor ni una fecha de cierre.'
    },
    probate: {
      heading: 'Probate',
      summary: 'Coordinación de escrow para operaciones inmobiliarias relacionadas con probate o una sucesión.',
      guidance: 'Usa este tema cuando una operación inmobiliaria está vinculada con probate. El equipo puede conversar sobre la coordinación de escrow, pero no brinda asesoría legal ni asume que todos los casos siguen los mismos requisitos judiciales.'
    },
    reverseMortgage: {
      heading: 'Hipoteca inversa',
      summary: 'Apoyo de escrow para una operación inmobiliaria que involucra una hipoteca inversa.',
      guidance: 'Elige este tema cuando una hipoteca inversa forma parte de la operación. El servicio de escrow es distinto de la originación, la elegibilidad del prestatario y la asesoría sobre el préstamo.'
    },
    residential: {
      heading: 'Residencial',
      summary: 'Servicio de escrow para operaciones residenciales dentro del alcance confirmado del caso.',
      guidance: 'Usa este tema para una compra residencial u otra operación relacionada. Comparte la ubicación de la propiedad y el tipo de operación para que el equipo confirme cómo puede ayudarte.'
    },
    commercial: {
      heading: 'Comercial',
      summary: 'Un punto de partida para conversar sobre necesidades de escrow en una operación inmobiliaria comercial.',
      guidance: 'Elige este tema cuando la propiedad o la operación sea comercial. Describe la propiedad y la operación propuesta para que Downtown confirme si el servicio solicitado está dentro de su alcance.'
    }
  }
};

const servicePageItemsFor = (locale: Locale) => serviceDefinitions.map((service) => ({
  ...service,
  ...serviceDetails[locale][service.key]
}));

export const servicesPageContent = {
  en: {
    meta: {
      title: 'Escrow Services | Downtown Community Escrow',
      description: 'Explore Downtown Community Escrow services for manufactured homes, short sales, probate, reverse mortgages, residential and commercial transactions.'
    },
    skipLink: 'Skip to main content',
    wordmarkLabel: 'Downtown Community Escrow home',
    breadcrumbLabel: 'Breadcrumb',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Services',
    eyebrow: 'Choose a service',
    heading: 'Escrow services for your transaction',
    intro: 'Explore seven areas of escrow service and identify the topic that best matches your property and transaction. Downtown can then confirm the appropriate next conversation.',
    primaryCta: 'Call Downtown',
    secondaryCta: 'What to share',
    indexHeading: 'Find the right starting point',
    indexIntro: 'Use the links below to review each specialty. These summaries help route an initial conversation; they are not universal opening requirements.',
    indexLabel: 'Escrow specialties',
    detailsEyebrow: 'Service overview',
    guidanceLabel: 'When to choose this service',
    detailAction: 'Discuss this service',
    items: servicePageItemsFor('en'),
    choose: {
      eyebrow: 'Prepare for the conversation',
      heading: 'How to choose where to start',
      intro: 'You do not need to diagnose every escrow detail before calling. A few basic facts can help the team understand the request.',
      note: 'Use these as conversation points, not as a universal list of documents or opening requirements.',
      items: [
        ['Property type', 'Describe the kind of property involved.'],
        ['Transaction type', 'Explain the sale, purchase, financing, or other transaction you want to discuss.'],
        ['Property location', 'Share the city and state where the property is located.'],
        ['Your role', 'Explain whether you are an owner, buyer, seller, agent, lender, or another interested party.'],
        ['Questions or dates', 'Mention your main questions and any dates currently being considered.']
      ]
    },
    faq: {
      eyebrow: 'Services FAQ',
      heading: 'Questions before you call',
      intro: 'Short answers to help you prepare for an initial conversation.',
      items: [
        ['How do I know which service I need?', 'Start with the property type and the kind of transaction. If more than one specialty seems relevant, explain both when you call so the team can help identify the appropriate starting point.'],
        ['What information is useful for the first consultation?', 'It is helpful to share the property type and location, the transaction type, your role, your questions, and any dates currently being considered.'],
        ['Does the first consultation formally open an escrow file?', 'No. An initial conversation helps clarify the request and possible next steps; it does not by itself formally open an escrow file.'],
        ['What should I share if I am in another state?', 'Share the property location and the type of transaction you want to discuss. The team can then confirm how it may be able to help with that specific matter.']
      ]
    },
    contact: {
      eyebrow: 'Discuss your transaction',
      heading: 'Start with a clear conversation.',
      body: 'Call Downtown Community Escrow or return to the Home contact section.',
      callLabel: `Call Downtown Community Escrow at ${business.phoneDisplay}`,
      homeContact: 'Home contact information'
    }
  },
  es: {
    meta: {
      title: 'Servicios de Escrow | Downtown Community Escrow',
      description: 'Conoce los servicios de Downtown Community Escrow para casas manufacturadas, short sales, probate, hipotecas inversas y operaciones residenciales y comerciales.'
    },
    skipLink: 'Ir al contenido principal',
    wordmarkLabel: 'Inicio de Downtown Community Escrow',
    breadcrumbLabel: 'Ruta de navegación',
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Servicios',
    eyebrow: 'Elige un servicio',
    heading: 'Servicios de escrow para tu operación',
    intro: 'Conoce siete áreas de servicio de escrow e identifica el tema que mejor corresponde a tu propiedad y operación. Downtown podrá confirmar después cuál es la conversación adecuada.',
    primaryCta: 'Llamar a Downtown',
    secondaryCta: 'Qué conviene compartir',
    indexHeading: 'Encuentra el punto de partida adecuado',
    indexIntro: 'Usa los enlaces para revisar cada especialidad. Estos resúmenes ayudan a orientar una primera conversación; no son requisitos universales de apertura.',
    indexLabel: 'Especialidades de escrow',
    detailsEyebrow: 'Resumen del servicio',
    guidanceLabel: 'Cuándo elegir este servicio',
    detailAction: 'Consultar este servicio',
    items: servicePageItemsFor('es'),
    choose: {
      eyebrow: 'Prepárate para la conversación',
      heading: 'Cómo elegir por dónde comenzar',
      intro: 'No necesitas determinar cada detalle de escrow antes de llamar. Algunos datos básicos pueden ayudar al equipo a comprender la consulta.',
      note: 'Úsalos como puntos de conversación, no como una lista universal de documentos o requisitos de apertura.',
      items: [
        ['Tipo de propiedad', 'Describe qué clase de propiedad participa en la operación.'],
        ['Tipo de operación', 'Explica la venta, compra, financiamiento u otra operación que deseas consultar.'],
        ['Ubicación de la propiedad', 'Comparte la ciudad y el estado donde se encuentra la propiedad.'],
        ['Tu papel', 'Indica si eres propietario, comprador, vendedor, agente, prestamista u otra parte interesada.'],
        ['Preguntas o fechas', 'Menciona tus preguntas principales y las fechas que se estén considerando.']
      ]
    },
    faq: {
      eyebrow: 'Preguntas sobre servicios',
      heading: 'Preguntas antes de llamar',
      intro: 'Respuestas breves para ayudarte a preparar una conversación inicial.',
      items: [
        ['¿Cómo sé qué servicio necesito?', 'Comienza por el tipo de propiedad y la clase de operación. Si más de una especialidad parece relevante, menciona ambas al llamar para que el equipo te ayude a identificar el punto de partida adecuado.'],
        ['¿Qué información conviene tener para la primera consulta?', 'Conviene compartir el tipo y la ubicación de la propiedad, la clase de operación, tu papel, tus preguntas y las fechas que se estén considerando.'],
        ['¿La primera consulta abre formalmente un expediente?', 'No. La conversación inicial ayuda a aclarar la consulta y los posibles siguientes pasos; por sí sola no abre formalmente un expediente de escrow.'],
        ['¿Qué debo indicar si estoy en otro estado?', 'Comparte la ubicación de la propiedad y el tipo de operación que deseas consultar. El equipo podrá confirmar cómo puede ayudarte con ese caso específico.']
      ]
    },
    contact: {
      eyebrow: 'Consulta tu operación',
      heading: 'Comienza con una conversación clara.',
      body: 'Llama a Downtown Community Escrow o vuelve a la sección de contacto del Home.',
      callLabel: `Llamar a Downtown Community Escrow al ${business.phoneDisplay}`,
      homeContact: 'Información de contacto en el Home'
    }
  }
} as const;

export type ServicesPageContent = (typeof servicesPageContent)[Locale];
