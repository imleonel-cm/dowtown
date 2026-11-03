import type { Locale } from './site';
import type { SpecialtyContent } from './specialty';

export const residentialContent = {
  en: {
    meta: {
      title: 'Residential Escrow Services | Downtown',
      description: 'Learn how residential escrow coordinates home purchases and sales, what may affect closing, and what to discuss with Downtown.'
    },
    skipLink: 'Skip to main content',
    wordmarkLabel: 'Downtown Community Escrow home',
    breadcrumbLabel: 'Breadcrumb',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Residential Escrow',
    hero: {
      eyebrow: 'Residential escrow',
      heading: 'Residential Escrow Services',
      intro: 'Downtown coordinates closing escrow for residential home purchases and sales. Start with the property location, buyer/seller roles, and any loan or title details you have.',
      primaryCta: 'Discuss residential escrow',
      secondaryCta: 'Compare specialties',
      marker: 'RE',
      markerLabel: 'Specialty 05'
    },
    index: {
      label: 'On this page',
      items: [
        ['What this service covers', 'service-overview'],
        ['What can vary', 'transaction-variables'],
        ['Prepare for a conversation', 'prepare'],
        ['Useful information', 'consultation-information'],
        ['Questions', 'specialty-faq'],
        ['Related sources', 'related-sources']
      ]
    },
    overview: {
      eyebrow: 'Clear starting point',
      heading: 'Residential escrow coordinates the transfer of funds and documents for home purchases and sales.',
      lead: 'This page is for buyers, sellers, agents, lenders, and other participants who want to discuss residential escrow with Downtown.',
      body: 'Downtown acts as a neutral third‑party holder of funds, documents, and instructions until every contractual condition is satisfied. We do not provide loan, title, or legal advice.',
      boundaryHeading: 'Escrow does not replace',
      boundaries: [
        ['Real estate representation', 'Agents negotiate price and terms; escrow does not represent any party.' ],
        ['Loan decisions', 'Lenders determine financing eligibility and approve loans.' ],
        ['Title insurance', 'Title insurers handle title work and issue policies.' ],
        ['Legal or tax advice', 'Qualified attorneys or tax professionals should be consulted for legal or tax matters.']
      ]
    },
    variables: {
      eyebrow: 'Transaction context',
      heading: 'What can change from one residential transaction to another',
      intro: 'Details vary by property type, financing, and local requirements.',
      items: [
        ['Property type', 'Single‑family, condo, townhome, or multi‑unit can affect documentation and requirements.' ],
        ['Financing', 'Whether the transaction is a purchase, refinance, or cash sale changes the paperwork and timing.' ],
        ['Location', 'County requirements and recording offices can differ. Share the property city and state so Downtown can confirm whether and how it may assist.' ],
        ['Participating parties', 'Buyers, sellers, agents, lenders, and title professionals each have roles that affect the escrow timeline.' ]
      ]
    },
    prepare: {
      eyebrow: 'Prepare for the conversation',
      heading: 'A useful path to an initial consultation',
      intro: 'Use these questions to organize the first conversation. They do not describe Downtown’s internal workflow.',
      items: [
        ['What is part of the transaction?', 'Identify whether it is a purchase, sale, or refinance and any land involvement.' ],
        ['Where is the property?', 'Provide city and state so jurisdiction‑specific questions can be addressed.' ],
        ['What information is available?', 'Share any known title, loan, or inspection documents.' ],
        ['Who is involved and what comes next?', 'List the participants (buyer, seller, agent, lender) and ask what information is needed for the next step.' ]
      ]
    },
    information: {
      eyebrow: 'First consultation',
      heading: 'Information that may be useful to have',
      intro: 'This is an orientation list, not a mandatory document checklist.',
      items: [
        'Property address and legal description',
        'Type of transaction (purchase, sale, refinance)',
        'Roles of participants',
        'Any existing loan payoff demands',
        'Title or registration information available',
        'Any wire-instruction information already received',
        'Questions and dates currently being considered'
      ]
    },
    faq: {
      eyebrow: 'Specialty questions',
      heading: 'Questions before you call',
      intro: 'Short answers for preparing a residential escrow conversation.',
      items: [
        ['What is residential escrow?', 'A neutral, short‑term trust where an escrow company holds funds and documents until all contract conditions are met.' ],
        ['Who chooses the escrow company?', 'Both buyer and seller must agree in writing; traditionally the seller selects, but the contract can specify otherwise.' ],
        ['What does an escrow officer do?', 'Coordinates the closing, holds earnest money, orders title reports, verifies good funds, and records documents at the county recorder.' ],
        ['How does escrow differ from an escrow account for taxes?', 'Closing escrow is a one‑time transaction; an escrow account (impound) is a post‑closing account for taxes and insurance managed by a loan servicer.' ],
        ['What can delay a residential escrow closing?', 'Late loan conditions, appraisal issues, title clouds, slow responses to contingencies, and wire‑transfer verification problems.' ]
      ]
    },
    sources: {
      eyebrow: 'Related sources',
      heading: 'Context used for this page',
      intro: 'These independent sources provide background information. They are not endorsements of Downtown.',
      linkLabel: 'Visit source',
      items: [
        {
          title: 'California DRE – The Escrow Process',
          href: 'https://www.dre.ca.gov/files/pdf/escrow_info_consumers.pdf',
          description: 'California DRE consumer background on escrow fundamentals, written instructions, participant roles, funding, recording, and fraud awareness.'
        },
        {
          title: 'California DFPI – Escrow Consumer Information',
          href: 'https://dfpi.ca.gov/regulated-industries/escrow-law/consumer-information-escrow/',
          description: 'California consumer background on independent and controlled escrow. It does not verify Downtown’s license, scope, or procedures.'
        },
        {
          title: 'CFPB – Owning a Home',
          href: 'https://www.consumerfinance.gov/owning-a-home/',
          description: 'Federal guidance on home buying, escrow, and related consumer protections.'
        }
      ]
    },
    contact: {
      eyebrow: 'Discuss your transaction',
      heading: 'Start with the property and the questions you have.',
      body: 'Call Downtown Community Escrow to discuss the property, the transaction, and the information currently available.',
      homeContact: 'Home contact information',
      callLabel: 'Call Downtown Community Escrow at (714) 265-7116'
    }
  },
  es: {
    meta: {
      title: 'Servicios de Escrow Residencial | Downtown',
      description: 'Conoce cómo el escrow residencial coordina compraventas de viviendas, qué puede afectar el cierre y qué consultar con Downtown.'
    },
    skipLink: 'Ir al contenido principal',
    wordmarkLabel: 'Inicio de Downtown Community Escrow',
    breadcrumbLabel: 'Ruta de navegación',
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Escrow residencial',
    hero: {
      eyebrow: 'Escrow residencial',
      heading: 'Servicios de Escrow Residencial',
      intro: 'Downtown coordina el escrow de cierre para la compra y venta de viviendas residenciales. Comience indicando la ubicación, los roles y cualquier detalle de préstamo o título que tenga.',
      primaryCta: 'Consulta el escrow residencial',
      secondaryCta: 'Comparar especialidades',
      marker: 'ER',
      markerLabel: 'Especialidad 05'
    },
    index: {
      label: 'En esta página',
      items: [
        ['Qué cubre este servicio', 'service-overview'],
        ['Qué puede variar', 'transaction-variables'],
        ['Prepárate para conversar', 'prepare'],
        ['Información útil', 'consultation-information'],
        ['Preguntas', 'specialty-faq'],
        ['Fuentes relacionadas', 'related-sources']
      ]
    },
    overview: {
      eyebrow: 'Punto de partida claro',
      heading: 'Escrow residencial coordina la transferencia de fondos y documentos para la compra y venta de viviendas.',
      lead: 'Esta página es para compradores, vendedores, agentes, prestamistas y demás participantes que deseen conversar sobre escrow residencial con Downtown.',
      body: 'Downtown actúa como tercero neutral que retiene fondos, documentos e instrucciones hasta que se cumplan todas las condiciones contractuales. No ofrecemos asesoría de préstamo, título o legal.',
      boundaryHeading: 'Escrow no sustituye',
      boundaries: [
        ['Representación inmobiliaria', 'Los agentes negocian precio y términos; escrow no representa a ninguna parte.' ],
        ['Decisiones de préstamo', 'Los prestamistas determinan la elegibilidad y aprueban los préstamos.' ],
        ['Seguro de título', 'Las aseguradoras de título manejan el trabajo de título y emiten pólizas.' ],
        ['Asesoría legal o fiscal', 'Los abogados o profesionales fiscales calificados deben atender esas áreas.' ]
      ]
    },
    variables: {
      eyebrow: 'Contexto de la operación',
      heading: 'Qué puede cambiar de una transacción residencial a otra',
      intro: 'Los detalles varían según el tipo de propiedad, financiamiento y requisitos locales.',
      items: [
        ['Tipo de propiedad', 'Una casa unifamiliar, condominio o townhome puede afectar la documentación requerida.' ],
        ['Financiamiento', 'Si es compra, refinanciamiento o venta en efectivo cambia la papelería y el calendario.' ],
        ['Ubicación', 'Los requisitos del condado y las oficinas de registro pueden diferir. Comparte la ciudad y el estado para que Downtown confirme si puede ayudar y de qué manera.' ],
        ['Partes participantes', 'Comprador, vendedor, agente, prestamista y profesionales de título influyen en el cronograma de escrow.' ]
      ]
    },
    prepare: {
      eyebrow: 'Prepárate para la conversación',
      heading: 'Un recorrido útil para la primera consulta',
      intro: 'Use estas preguntas para organizar la primera conversación. No describen el proceso interno de Downtown.',
      items: [
        ['¿Qué incluye la transacción?', 'Identifique si es una compra, venta o refinanciamiento y si hay terreno incluido.' ],
        ['¿Dónde está la propiedad?', 'Proporcione la ciudad y el estado para que se consideren preguntas específicas de la jurisdicción.' ],
        ['¿Qué información está disponible?', 'Comparta cualquier título, documento de préstamo o inspección que tenga.' ],
        ['¿Quién participa y qué sigue?', 'Enumere los participantes (comprador, vendedor, agente, prestamista) y pregunte qué información se necesita para el siguiente paso.' ]
      ]
    },
    information: {
      eyebrow: 'Primera consulta',
      heading: 'Información que puede ser útil tener',
      intro: 'Esta es una lista orientativa, no obligatoria.',
      items: [
        'Dirección y descripción legal de la propiedad',
        'Tipo de transacción (compra, venta, refinanciamiento)',
        'Roles de los participantes',
        'Demandas de pago de préstamos existentes',
        'Información de título o registro disponible',
        'Información sobre transferencias bancarias ya recibida',
        'Preguntas y fechas que se estén considerando'
      ]
    },
    faq: {
      eyebrow: 'Preguntas de la especialidad',
      heading: 'Preguntas antes de llamar',
      intro: 'Respuestas breves para preparar una conversación sobre escrow residencial.',
      items: [
        ['¿Qué es escrow residencial?', 'Un acuerdo fiduciario neutral y a corto plazo donde una compañía de escrow retiene fondos y documentos hasta que se cumplan todas las condiciones del contrato de compra o venta.' ],
        ['¿Quién elige la compañía de escrow?', 'Ambas partes deben acordarlo por escrito; tradicionalmente el vendedor selecciona, pero el contrato puede especificar lo contrario.' ],
        ['¿Qué hace un oficial de escrow?', 'Coordina el cierre, mantiene el depósito de garantía, ordena informes de título preliminares, verifica fondos buenos, y registra documentos en la oficina del registrador del condado.' ],
        ['¿Cómo se diferencia el escrow de cierre de una cuenta de escrow para impuestos?', 'El escrow de cierre es una transacción única; una cuenta de escrow (impound) es una cuenta posterior al cierre manejada por el servicer del préstamo para impuestos y seguros.' ],
        ['¿Qué puede retrasar un cierre de escrow residencial?', 'Condiciones de préstamo tardías, disputas de tasación, nubes en el título, respuestas lentas a contingencias y problemas de verificación de transferencias bancarias.' ]
      ]
    },
    sources: {
      eyebrow: 'Fuentes relacionadas',
      heading: 'Contexto usado para esta página',
      intro: 'Estas fuentes independientes brindan información de fondo. No son avales de Downtown.',
      linkLabel: 'Visitar fuente',
      items: [
        {
          title: 'California DRE – El proceso de escrow',
          href: 'https://www.dre.ca.gov/files/pdf/escrow_info_consumers.pdf',
          description: 'Contexto para consumidores de California DRE sobre fundamentos de escrow, instrucciones escritas, participantes, fondos, registro y prevención de fraude.'
        },
        {
          title: 'California DFPI – Información al consumidor sobre escrow',
          href: 'https://dfpi.ca.gov/regulated-industries/escrow-law/consumer-information-escrow/',
          description: 'Contexto para consumidores de California sobre escrow independiente y controlado. No verifica la licencia, alcance o procedimientos de Downtown.'
        },
        {
          title: 'CFPB – Ser propietario de una vivienda',
          href: 'https://www.consumerfinance.gov/owning-a-home/',
          description: 'Orientación federal sobre compra de vivienda, escrow y protecciones al consumidor.'
        }
      ]
    },
    contact: {
      eyebrow: 'Discuta su transacción',
      heading: 'Comience con la propiedad y las preguntas que tiene.',
      body: 'Llame a Downtown Community Escrow para conversar sobre la propiedad, la transacción y la información disponible.',
      homeContact: 'Información de contacto principal',
      callLabel: 'Llame a Downtown Community Escrow al (714) 265-7116'
    }
  }
} as const;

