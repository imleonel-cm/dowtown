import { business, serviceDefinitions, type ServiceKey } from './business';

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
  | 'commercial';

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
  commercial: { en: '/services/commercial-escrow/', es: '/es/servicios/escrow-comercial/' }
};

export const implementedPageKeys = ['home', 'about', 'contact', 'manufacturedHomes', 'probate', 'shortSale', 'reverseMortgage', 'residential', 'commercial'] as const satisfies readonly PageKey[];

export const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español'
};

export const languageOptions: Record<Locale, { shortLabel: string; accessibleLabel: string }> = {
  en: { shortLabel: 'EN', accessibleLabel: 'View this page in English' },
  es: { shortLabel: 'ES', accessibleLabel: 'Ver esta página en español' }
};

const localizedServices: Record<Locale, Record<ServiceKey, { title: string; description: string }>> = {
  en: {
    manufacturedHomes: {
      title: 'Manufactured homes',
      description: 'Escrow coordination for manufactured or mobile home transactions, shaped by the property, land, records, and location.'
    },
    shortSales: {
      title: 'Short sales',
      description: 'Escrow coordination around written approval terms, title or liens, and closing instructions in a short sale.'
    },
    probate: {
      title: 'Probate',
      description: 'Escrow coordination for a property transaction connected to probate or an estate, subject to the authority and requirements of the matter.'
    },
    reverseMortgage: {
      title: 'Reverse mortgage',
      description: 'Escrow coordination when a reverse mortgage is part of the transaction; loan decisions remain with the lender.'
    },
    residential: {
      title: 'Residential',
      description: 'A starting point for escrow questions about residential purchases and related property transactions.'
    },
    commercial: {
      title: 'Commercial',
      description: 'A starting point for escrow questions involving a commercial property or transaction.'
    }
  },
  es: {
    manufacturedHomes: {
      title: 'Casas manufacturadas',
      description: 'Coordinación de escrow para casas manufacturadas o móviles, según la propiedad, el terreno, los registros y la ubicación.'
    },
    shortSales: {
      title: 'Ventas cortas',
      description: 'Coordinación de escrow según las condiciones de aprobación escritas, el título o los gravámenes y las instrucciones de cierre.'
    },
    probate: {
      title: 'Probate',
      description: 'Coordinación de escrow para una propiedad vinculada con probate o una sucesión, según la autoridad y los requisitos del caso.'
    },
    reverseMortgage: {
      title: 'Hipoteca inversa',
      description: 'Coordinación de escrow cuando una hipoteca inversa forma parte de la operación; el prestamista toma las decisiones del préstamo.'
    },
    residential: {
      title: 'Residencial',
      description: 'Un punto de partida para consultas de escrow sobre compras residenciales y operaciones relacionadas.'
    },
    commercial: {
      title: 'Comercial',
      description: 'Un punto de partida para consultas de escrow sobre una propiedad u operación comercial.'
    }
  }
};

const servicesFor = (locale: Locale) => serviceDefinitions.map((service) => ({
  ...service,
  ...localizedServices[locale][service.key]
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
      kicker: 'Independent. Local. Personal.',
      title: 'Your next chapter',
      titleAccent: 'starts here.',
      intro: 'Downtown Community Escrow provides independent escrow coordination across six property-transaction specialties. Start with the service that best matches your property and transaction.',
      primaryCta: 'View services',
      secondaryCta: 'Contact us',
      imageAlt: 'Illustrative contemporary Southern California residence',
      imageCaption: 'Residential escrow, thoughtfully guided',
      documentLabel: 'DCE',
      featuredLabel: 'Featured escrow services'
    },
    services: {
      heading: 'Escrow services',
      action: 'Explore services',
      comingSoonLabel: 'Coming soon',
      items: servicesFor('en')
    },
    why: {
      eyebrow: 'Why Downtown',
      heading: 'Local office. Personal conversation.',
      body: `${business.legalName} is an independent escrow company with an office in Santa Ana, California.`,
      imageAlt: 'Illustrative Orange County residence, not the Downtown Community Escrow office',
      imageCaption: 'Illustrative residential image',
      markerTop: 'SANTA ANA',
      markerBottom: 'LOCAL DESK',
      addressLabel: 'Office address',
      action: 'Learn about Downtown',
      actionHref: routeMap.about.en,
      trustLabel: 'Verified business information',
      trustSignals: [
        { label: 'Identity', value: business.legalName },
        { label: 'Location', value: 'Santa Ana, Orange County' },
        { label: 'Direct contact', value: business.phoneDisplay, href: business.phoneHref }
      ]
    },
    questions: {
      eyebrow: 'General questions',
      heading: 'Start with the essentials.',
      intro: 'Find quick answers about our office, services, and how to begin a conversation with Downtown.',
      items: [
        {
          question: 'Where is the office?',
          answer: `${business.legalName} is located at ${business.addressLine}, ${business.cityLine}.`
        },
        {
          question: 'How can I contact Downtown?',
          answer: `Call ${business.phoneDisplay} to speak with Downtown Community Escrow.`
        },
        {
          question: 'What escrow services does Downtown offer?',
          answer: 'Downtown offers escrow services for manufactured and mobile homes, probate, short sales, reverse mortgages, residential properties, and commercial properties.'
        },
        {
          question: 'How do I start a consultation?',
          answer: `Call ${business.phoneDisplay} with the property, transaction, and questions you want to discuss. The team can help identify the most relevant specialty and conversation.`
        }
      ],
      preparationHeading: 'Bring your questions.',
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
      eyebrow: 'A clear next step',
      headingLines: ['Your next move starts', 'with a conversation.'],
      body: 'Call Downtown Community Escrow.',
      callLabel: `Call Downtown Community Escrow at ${business.phoneDisplay}`
    },
    footer: {
      introLines: ['Independent escrow services.', 'Office in Santa Ana, California.'],
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
      kicker: 'Independiente. Local. Personal.',
      title: 'Tu próximo capítulo',
      titleAccent: 'comienza aquí.',
      intro: 'Downtown Community Escrow ofrece coordinación independiente de escrow en seis especialidades inmobiliarias. Comienza con el servicio que mejor corresponda a tu propiedad y operación.',
      primaryCta: 'Ver servicios',
      secondaryCta: 'Contáctanos',
      imageAlt: 'Ilustración de una residencia contemporánea del sur de California',
      imageCaption: 'Escrow residencial con orientación atenta',
      documentLabel: 'DCE',
      featuredLabel: 'Servicios de escrow destacados'
    },
    services: {
      heading: 'Servicios de escrow',
      action: 'Explorar servicios',
      comingSoonLabel: 'Próximamente',
      items: servicesFor('es')
    },
    why: {
      eyebrow: 'Por qué Downtown',
      heading: 'Oficina local. Conversación personal.',
      body: `${business.legalName} es una compañía independiente de escrow con oficina en Santa Ana, California.`,
      imageAlt: 'Ilustración de una residencia del condado de Orange; no es la oficina de Downtown Community Escrow',
      imageCaption: 'Imagen residencial ilustrativa',
      markerTop: 'SANTA ANA',
      markerBottom: 'OFICINA LOCAL',
      addressLabel: 'Dirección de la oficina',
      action: 'Conoce a Downtown',
      actionHref: routeMap.about.es,
      trustLabel: 'Información empresarial verificada',
      trustSignals: [
        { label: 'Identidad', value: business.legalName },
        { label: 'Ubicación', value: 'Santa Ana, condado de Orange' },
        { label: 'Contacto directo', value: business.phoneDisplay, href: business.phoneHref }
      ]
    },
    questions: {
      eyebrow: 'Preguntas generales',
      heading: 'Comienza con lo esencial.',
      intro: 'Encuentra respuestas rápidas sobre nuestra oficina, los servicios y cómo iniciar una conversación con Downtown.',
      items: [
        {
          question: '¿Dónde está la oficina?',
          answer: `${business.legalName} está ubicada en ${business.addressLine}, ${business.cityLine}.`
        },
        {
          question: '¿Cómo puedo contactar a Downtown?',
          answer: `Llama al ${business.phoneDisplay} para comunicarte con Downtown Community Escrow.`
        },
        {
          question: '¿Qué servicios de escrow ofrece Downtown?',
          answer: 'Downtown ofrece servicios de escrow para casas manufacturadas y casas móviles, probate, ventas cortas, hipotecas inversas, propiedades residenciales y propiedades comerciales.'
        },
        {
          question: '¿Cómo comienzo una consulta?',
          answer: `Llama al ${business.phoneDisplay} con la propiedad, la operación y las preguntas que deseas consultar. El equipo puede ayudarte a identificar la especialidad y la conversación más pertinentes.`
        }
      ],
      preparationHeading: 'Trae tus preguntas.',
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
      eyebrow: 'Un siguiente paso claro',
      headingLines: ['Tu próximo paso comienza', 'con una conversación.'],
      body: 'Llama a Downtown Community Escrow.',
      callLabel: `Llamar a Downtown Community Escrow al ${business.phoneDisplay}`
    },
    footer: {
      introLines: ['Servicios independientes de escrow.', 'Oficina en Santa Ana, California.'],
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
    intro: 'Explore six areas of escrow service and identify the topic that best matches your property and transaction. Downtown can then confirm the appropriate next conversation.',
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
    intro: 'Conoce seis áreas de servicio de escrow e identifica el tema que mejor corresponde a tu propiedad y operación. Downtown podrá confirmar después cuál es la conversación adecuada.',
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
