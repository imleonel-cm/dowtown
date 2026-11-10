import { business } from './business';

export const aboutContent = {
  en: {
    meta: {
      title: 'About Downtown Community Escrow | Santa Ana',
      description: 'Learn about Downtown Community Escrow, an independent escrow company in Santa Ana coordinating seven specialized property-transaction services.'
    },
    skipLink: 'Skip to main content',
    wordmarkLabel: 'Downtown Community Escrow home',
    breadcrumbLabel: 'Breadcrumb',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'About',
    hero: {
      eyebrow: 'About Downtown',
      heading: 'Independent escrow. Clear coordination.',
      intro: `${business.shortName} is an escrow company with an office in Santa Ana, California, focused on specialized property transactions.`,
      primaryCta: 'Explore our specialties',
      secondaryCta: 'Contact Downtown',
      marker: 'DCE',
      markerLabel: 'Santa Ana · Orange County'
    },
    who: {
      eyebrow: 'Who we are',
      heading: 'An escrow company focused on specialized transactions.',
      lead: `${business.legalName} provides independent escrow coordination from its Santa Ana office.`,
      body: 'We coordinate the escrow portion of property transactions by working with the information, documents, funds, and written instructions applicable to the matter. Participants may include buyers, sellers, agents, lenders, personal representatives, and other professionals, each acting within a separate role.',
      facts: [
        ['Seven specialties', 'Manufactured homes, short sales, probate, reverse mortgages, residential, commercial, and wholesale escrow.'],
        ['Verified office', `${business.addressLine}, ${business.cityLine}.`],
        ['Direct contact', business.phoneDisplay]
      ]
    },
    independent: {
      eyebrow: 'Independent escrow',
      heading: 'What an independent escrow role means.',
      directAnswer: 'Escrow is a neutral arrangement in which an escrow holder receives funds, documents, and written instructions and delivers or disburses them when the applicable conditions are satisfied.',
      body: 'In California, independent escrow businesses are distinguished from controlled escrow services connected with certain banks, title companies, real estate brokers, or attorneys. Downtown describes its work as independent escrow; this page does not state a specific license classification without verified company documentation.',
      rolesHeading: 'Clear role boundaries',
      roles: [
        ['Neutral escrow holder', 'Escrow follows the written instructions and does not represent one side of the transaction.'],
        ['Transaction coordination', 'Escrow coordinates the closing information, documents, funds, and conditions within its confirmed role.'],
        ['Separate professionals', 'Lenders, agents, title companies, attorneys, tax advisers, and other professionals retain their own responsibilities.']
      ],
      sourceLabel: 'Read California DFPI escrow information',
      sourceHref: 'https://dfpi.ca.gov/regulated-industries/escrow-law/consumer-information-escrow/'
    },
    specialties: {
      eyebrow: 'Our escrow specialties',
      heading: 'Start with the transaction that fits your situation.',
      intro: 'Each specialty page explains the transaction context, the role of escrow, and useful information for an initial conversation.',
      actionLabel: 'View service'
    },
    faq: {
      eyebrow: 'About Downtown',
      heading: 'Questions about our company.',
      intro: 'Direct answers based on the business information currently confirmed.',
      items: [
        ['What does Downtown Community Escrow do?', 'Downtown coordinates the escrow portion of property transactions by working with the applicable written instructions, documents, funds, and closing conditions. It does not replace lenders, agents, title companies, attorneys, or other advisers.'],
        ['Where is Downtown Community Escrow located?', `${business.legalName} has an office at ${business.addressLine}, ${business.cityLine}.`],
        ['What types of escrow services does Downtown offer?', 'Downtown has dedicated service pages for manufactured and mobile homes, short sales, probate, reverse mortgages, residential transactions, commercial real estate transactions, and wholesale real estate escrow. The details and accepted scope of each matter should be confirmed directly with the company.'],
        ['What is an independent escrow company?', 'In general, an independent escrow company serves as a neutral escrow holder and is not controlled by another participant in the transaction. The escrow holder follows the written instructions applicable to the matter; lenders, agents, title companies, and advisers keep their separate roles.']
      ]
    },
    contact: {
      eyebrow: 'A direct next step',
      heading: 'Have a property or transaction to discuss?',
      body: 'Use the Home contact section to call Downtown and begin a conversation about the appropriate escrow specialty.',
      action: 'Contact Downtown'
    }
  },
  es: {
    meta: {
      title: 'Nosotros | Downtown Community Escrow en Santa Ana',
      description: 'Conoce a Downtown Community Escrow, una compañía independiente de escrow en Santa Ana con siete servicios para operaciones especializadas.'
    },
    skipLink: 'Ir al contenido principal',
    wordmarkLabel: 'Inicio de Downtown Community Escrow',
    breadcrumbLabel: 'Ruta de navegación',
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Nosotros',
    hero: {
      eyebrow: 'Sobre Downtown',
      heading: 'Escrow independiente. Coordinación clara.',
      intro: `${business.shortName} es una compañía de escrow con oficina en Santa Ana, California, enfocada en operaciones inmobiliarias especializadas.`,
      primaryCta: 'Explorar especialidades',
      secondaryCta: 'Contactar a Downtown',
      marker: 'DCE',
      markerLabel: 'Santa Ana · Condado de Orange'
    },
    who: {
      eyebrow: 'Quiénes somos',
      heading: 'Una compañía de escrow enfocada en operaciones especializadas.',
      lead: `${business.legalName} ofrece coordinación independiente de escrow desde su oficina en Santa Ana.`,
      body: 'Coordinamos la parte de escrow de operaciones inmobiliarias mediante la información, los documentos, los fondos y las instrucciones escritas aplicables al caso. Pueden participar compradores, vendedores, agentes, prestamistas, representantes personales y otros profesionales, cada uno dentro de un papel separado.',
      facts: [
        ['Siete especialidades', 'Casas manufacturadas, short sales, probate, hipotecas inversas, escrow residencial, comercial y wholesale.'],
        ['Oficina verificada', `${business.addressLine}, ${business.cityLine}.`],
        ['Contacto directo', business.phoneDisplay]
      ]
    },
    independent: {
      eyebrow: 'Escrow independiente',
      heading: 'Qué significa una función de escrow independiente.',
      directAnswer: 'Escrow es un acuerdo neutral en el que un escrow holder recibe fondos, documentos e instrucciones escritas y los entrega o desembolsa cuando se cumplen las condiciones aplicables.',
      body: 'En California, los negocios de escrow independiente se distinguen de servicios de escrow controlados vinculados con ciertos bancos, compañías de título, brokers inmobiliarios o abogados. Downtown describe su trabajo como escrow independiente; esta página no declara una clasificación específica de licencia sin documentación empresarial verificada.',
      rolesHeading: 'Límites claros de funciones',
      roles: [
        ['Escrow holder neutral', 'Escrow sigue las instrucciones escritas y no representa a una sola parte de la operación.'],
        ['Coordinación de la operación', 'Escrow coordina la información, documentos, fondos y condiciones de cierre dentro de su función confirmada.'],
        ['Profesionales separados', 'Prestamistas, agentes, compañías de título, abogados, asesores fiscales y otros profesionales conservan sus responsabilidades.']
      ],
      sourceLabel: 'Consultar información de escrow de California DFPI',
      sourceHref: 'https://dfpi.ca.gov/regulated-industries/escrow-law/consumer-information-escrow/'
    },
    specialties: {
      eyebrow: 'Nuestras especialidades de escrow',
      heading: 'Comienza con la operación que corresponda a tu situación.',
      intro: 'Cada página explica el contexto de la operación, la función de escrow y la información útil para una conversación inicial.',
      actionLabel: 'Ver servicio'
    },
    faq: {
      eyebrow: 'Sobre Downtown',
      heading: 'Preguntas sobre nuestra compañía.',
      intro: 'Respuestas directas basadas en la información empresarial actualmente confirmada.',
      items: [
        ['¿Qué hace Downtown Community Escrow?', 'Downtown coordina la parte de escrow de operaciones inmobiliarias mediante las instrucciones escritas, los documentos, los fondos y las condiciones de cierre aplicables. No sustituye a prestamistas, agentes, compañías de título, abogados u otros asesores.'],
        ['¿Dónde está Downtown Community Escrow?', `${business.legalName} tiene una oficina en ${business.addressLine}, ${business.cityLine}.`],
        ['¿Qué tipos de servicios de escrow ofrece Downtown?', 'Downtown tiene páginas de servicio para casas manufacturadas y móviles, short sales, probate, hipotecas inversas, operaciones residenciales y operaciones de bienes raíces comerciales. Los detalles y el alcance aceptado de cada caso deben confirmarse directamente con la compañía.'],
        ['¿Qué es una compañía de escrow independiente?', 'En general, una compañía de escrow independiente actúa como escrow holder neutral y no está controlada por otro participante de la operación. El escrow holder sigue las instrucciones escritas aplicables; prestamistas, agentes, compañías de título y asesores conservan sus funciones separadas.']
      ]
    },
    contact: {
      eyebrow: 'Un siguiente paso directo',
      heading: '¿Tienes una propiedad u operación para consultar?',
      body: 'Usa la sección de contacto del Inicio para llamar a Downtown y comenzar una conversación sobre la especialidad de escrow adecuada.',
      action: 'Contactar a Downtown'
    }
  }
} as const;

export type AboutContent = (typeof aboutContent)[keyof typeof aboutContent];
