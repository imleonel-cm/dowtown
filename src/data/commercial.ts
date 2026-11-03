import type { Locale } from './site';
import type { SpecialtyContent } from './specialty';

export const commercialContent = {
  en: {
    meta: {
      title: 'Commercial Escrow Services | Downtown',
      description: 'Learn what commercial real estate escrow may coordinate, what can vary by transaction, and what to discuss with Downtown in Santa Ana.'
    },
    skipLink: 'Skip to main content',
    wordmarkLabel: 'Downtown Community Escrow home',
    breadcrumbLabel: 'Breadcrumb',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Commercial Escrow',
    hero: {
      eyebrow: 'Commercial real estate escrow',
      heading: 'Commercial Escrow Services',
      intro: 'Commercial real estate escrow can coordinate funds, documents, and written closing instructions for a property transaction. Share the property, proposed transaction, location, and participants so Downtown can confirm whether and how it may assist.',
      primaryCta: 'Discuss a commercial escrow',
      secondaryCta: 'Compare specialties',
      marker: 'CE',
      markerLabel: 'Specialty 06'
    },
    index: {
      label: 'On this page',
      items: [
        ['What commercial escrow means', 'service-overview'],
        ['What can shape the transaction', 'transaction-variables'],
        ['How to prepare', 'prepare'],
        ['Useful information', 'consultation-information'],
        ['Questions', 'specialty-faq'],
        ['Related services', 'related-services'],
        ['Official sources', 'related-sources']
      ]
    },
    overview: {
      eyebrow: 'Direct answer',
      heading: 'Commercial real estate escrow is a neutral closing arrangement for a commercial property transaction.',
      lead: 'The escrow holder receives funds, documents, and written instructions and delivers or disburses them when the applicable conditions are satisfied.',
      body: 'Downtown can discuss the requested escrow role and confirm whether the matter is within scope. Commercial property escrow is not the same as a business sale, a general payment escrow, title insurance, loan approval, legal advice, tax advice, or the qualified intermediary role in a Section 1031 exchange.',
      boundaryHeading: 'Escrow does not replace',
      boundaries: [
        ['Buyer and seller decisions', 'The parties agree to the business terms and remain responsible for their contractual obligations and due diligence.'],
        ['Broker or agent representation', 'Commercial real estate professionals represent their clients within their own roles; escrow remains neutral.'],
        ['Lender and title work', 'The lender controls financing decisions, while title professionals examine title and issue any title coverage.'],
        ['Legal and tax advice', 'Attorneys, CPAs, tax advisers, and other qualified professionals address legal, entity, tax, and investment questions.']
      ]
    },
    variables: {
      eyebrow: 'Transaction context',
      heading: 'Details that shape a commercial escrow conversation',
      intro: 'No single process applies to every commercial matter. These details help Downtown determine whether the requested escrow service fits its confirmed scope.',
      items: [
        ['Property and location', 'Identify the commercial property and provide its city and state so jurisdiction and property-specific questions can be considered.'],
        ['Proposed transaction', 'Explain whether the matter involves a proposed purchase, sale, financing, or another structure without assuming Downtown accepts every category.'],
        ['Agreement and instructions', 'Share whether an agreement exists and which written conditions, dates, or instructions are already being considered.'],
        ['Participants and outside professionals', 'Identify the buyer, seller, broker or agent, lender, title contact, counsel, tax adviser, and other known participants as applicable.']
      ]
    },
    prepare: {
      eyebrow: 'Prepare for the conversation',
      heading: 'A practical path to an initial commercial escrow discussion',
      intro: 'This is an orientation sequence, not Downtown’s internal workflow or a universal commercial closing process.',
      items: [
        ['Describe the property', 'Share the property type, address or general location, and how it is used if known.'],
        ['Explain the proposed transaction', 'Summarize what the parties are considering and the current status of any agreement.'],
        ['Identify the participants', 'List the people and professionals already involved, including financing and title contacts when applicable.'],
        ['Ask Downtown to confirm fit', 'Discuss the known conditions, questions, and dates so Downtown can confirm whether and how it may assist.']
      ]
    },
    information: {
      eyebrow: 'Initial conversation',
      heading: 'Information that may help define the request',
      intro: 'These are conversation points, not mandatory opening requirements or a due diligence checklist.',
      items: [
        'Commercial property address and general property type',
        'Proposed transaction and current agreement status',
        'Buyer, seller, and entity names or roles',
        'Broker, lender, title, attorney, or tax-adviser contacts already involved',
        'Known financing, title, lien, lease, or instruction questions',
        'Dates or contractual conditions currently being considered',
        'Questions about Downtown’s confirmed role and service scope'
      ]
    },
    faq: {
      eyebrow: 'Commercial escrow questions',
      heading: 'Questions before you call',
      intro: 'Direct answers for preparing a commercial real estate escrow conversation.',
      items: [
        ['What is commercial real estate escrow?', 'It is a neutral closing arrangement in which an escrow holder receives funds, documents, and written instructions for a commercial property transaction and delivers or disburses them when the applicable conditions are met. The exact role depends on the agreement, instructions, and transaction.'],
        ['How is commercial escrow different from residential escrow?', 'Both use neutral escrow principles, but the property use, parties, entities, agreement, financing, title matters, leases, and closing conditions may differ. Those differences do not create one universal commercial process.'],
        ['What information may be useful before discussing a commercial escrow?', 'Useful starting information can include the property and location, proposed transaction, agreement status, participant roles, financing or title contacts, known conditions, dates, and questions. Downtown must confirm the exact information needed for a matter it accepts.'],
        ['Who handles funds and closing documents in a commercial transaction?', 'The escrow holder handles funds and documents within the written instructions and confirmed escrow role. Buyer, seller, broker, lender, title company, attorneys, tax advisers, and other professionals keep their separate responsibilities.'],
        ['What can affect the timing of a commercial escrow closing?', 'Timing can depend on the agreement, written conditions, financing, title matters, required documents, instructions, and participant responses. Downtown does not publish a universal closing timeline or guarantee a closing date.']
      ]
    },
    relatedServices: {
      eyebrow: 'Related escrow services',
      heading: 'Confirm whether the property is commercial or residential',
      intro: 'Property use and transaction context help identify the most relevant starting point.',
      actionLabel: 'Review service',
      items: [
        {
          title: 'Residential Escrow Services',
          description: 'Review Residential Escrow when the matter involves a residential home purchase, sale, or related property transaction.',
          href: '/services/residential-escrow/'
        }
      ]
    },
    sources: {
      eyebrow: 'Official sources',
      heading: 'Context used for this page',
      intro: 'These government sources explain general escrow and title roles. They are not endorsements, legal advice, or descriptions of Downtown’s license, coverage, or internal procedures.',
      linkLabel: 'Visit source',
      items: [
        {
          title: 'California DRE — Escrow reference',
          href: 'https://www.dre.ca.gov/files/pdf/refbook/ref08.pdf',
          description: 'California background on written escrow instructions, the escrow holder’s role, funds, documents, and delivery at closing.'
        },
        {
          title: 'California DFPI — About the Escrow Law',
          href: 'https://dfpi.ca.gov/regulated-industries/escrow-law/about-the-escrow-law/',
          description: 'Official context for California escrow definitions and the regulatory framework for independent escrow agents.'
        },
        {
          title: 'California Department of Insurance — Title Insurance',
          href: 'https://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/Title-Insurance.cfm',
          description: 'Official background distinguishing title examination and title insurance from the escrow closing role.'
        }
      ]
    },
    contact: {
      eyebrow: 'Discuss the proposed transaction',
      heading: 'Start with the property and the commercial escrow questions you have.',
      body: 'Call Downtown Community Escrow to describe the property, location, proposed transaction, participants, and information currently available.',
      homeContact: 'Home contact information',
      callLabel: 'Call Downtown Community Escrow at (714) 265-7116'
    }
  },
  es: {
    meta: {
      title: 'Servicios de Escrow Comercial | Downtown',
      description: 'Conoce qué puede coordinar un escrow de bienes raíces comerciales, qué varía según la operación y qué consultar con Downtown en Santa Ana.'
    },
    skipLink: 'Ir al contenido principal',
    wordmarkLabel: 'Inicio de Downtown Community Escrow',
    breadcrumbLabel: 'Ruta de navegación',
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Escrow comercial',
    hero: {
      eyebrow: 'Escrow de bienes raíces comerciales',
      heading: 'Servicios de Escrow Comercial',
      intro: 'El escrow de bienes raíces comerciales puede coordinar fondos, documentos e instrucciones escritas de cierre para una operación inmobiliaria. Comparte la propiedad, la operación propuesta, la ubicación y las partes para que Downtown confirme si puede ayudar y de qué manera.',
      primaryCta: 'Consulta sobre un escrow comercial',
      secondaryCta: 'Comparar especialidades',
      marker: 'EC',
      markerLabel: 'Especialidad 06'
    },
    index: {
      label: 'En esta página',
      items: [
        ['Qué significa escrow comercial', 'service-overview'],
        ['Qué puede definir la operación', 'transaction-variables'],
        ['Cómo prepararte', 'prepare'],
        ['Información útil', 'consultation-information'],
        ['Preguntas', 'specialty-faq'],
        ['Servicios relacionados', 'related-services'],
        ['Fuentes oficiales', 'related-sources']
      ]
    },
    overview: {
      eyebrow: 'Respuesta directa',
      heading: 'El escrow de bienes raíces comerciales es un acuerdo neutral de cierre para una operación con una propiedad comercial.',
      lead: 'El escrow holder recibe fondos, documentos e instrucciones escritas y los entrega o desembolsa cuando se cumplen las condiciones aplicables.',
      body: 'Downtown puede conversar sobre el papel solicitado y confirmar si el caso está dentro de su alcance. El escrow de una propiedad comercial no equivale a la compraventa de un negocio, un escrow general de pagos, seguro de título, aprobación de préstamo, asesoría legal o fiscal ni al papel del qualified intermediary en un intercambio bajo la Sección 1031.',
      boundaryHeading: 'Escrow no sustituye',
      boundaries: [
        ['Decisiones de comprador y vendedor', 'Las partes acuerdan los términos comerciales y conservan la responsabilidad sobre sus obligaciones contractuales y due diligence.'],
        ['Representación del broker o agente', 'Los profesionales inmobiliarios comerciales representan a sus clientes dentro de sus propios roles; escrow permanece neutral.'],
        ['Préstamo y trabajo de título', 'El lender decide el financiamiento, mientras los profesionales de título examinan el título y emiten cualquier cobertura.'],
        ['Asesoría legal y fiscal', 'Abogados, CPAs, asesores fiscales y otros profesionales calificados atienden preguntas legales, societarias, fiscales y de inversión.']
      ]
    },
    variables: {
      eyebrow: 'Contexto de la operación',
      heading: 'Datos que ayudan a orientar una consulta de escrow comercial',
      intro: 'No existe un proceso único para todos los casos comerciales. Estos datos ayudan a Downtown a determinar si el servicio solicitado corresponde a su alcance confirmado.',
      items: [
        ['Propiedad y ubicación', 'Identifica la propiedad comercial e indica ciudad y estado para considerar preguntas de jurisdicción y del inmueble.'],
        ['Operación propuesta', 'Explica si se considera una compra, venta, financiamiento u otra estructura, sin asumir que Downtown acepta todas las categorías.'],
        ['Acuerdo e instrucciones', 'Indica si existe un acuerdo y qué condiciones escritas, fechas o instrucciones se están considerando.'],
        ['Partes y profesionales externos', 'Identifica comprador, vendedor, broker o agente, lender, contacto de título, abogado, asesor fiscal y demás participantes conocidos cuando corresponda.']
      ]
    },
    prepare: {
      eyebrow: 'Prepárate para la conversación',
      heading: 'Un recorrido práctico para una primera consulta comercial',
      intro: 'Esta es una orientación, no el flujo interno de Downtown ni un proceso universal de cierre comercial.',
      items: [
        ['Describe la propiedad', 'Comparte el tipo de propiedad, dirección o ubicación general y su uso si lo conoces.'],
        ['Explica la operación propuesta', 'Resume qué consideran las partes y el estado actual de cualquier acuerdo.'],
        ['Identifica a los participantes', 'Enumera las personas y profesionales involucrados, incluidos contactos de financiamiento y título cuando corresponda.'],
        ['Pide que Downtown confirme el alcance', 'Comenta las condiciones, preguntas y fechas conocidas para que Downtown confirme si puede ayudar y de qué manera.']
      ]
    },
    information: {
      eyebrow: 'Conversación inicial',
      heading: 'Información que puede ayudar a definir la consulta',
      intro: 'Estos son puntos de conversación, no requisitos obligatorios de apertura ni una lista de due diligence.',
      items: [
        'Dirección y tipo general de la propiedad comercial',
        'Operación propuesta y estado actual del acuerdo',
        'Nombres o roles del comprador, vendedor y sus entidades',
        'Contactos de broker, lender, título, abogado o asesor fiscal ya involucrados',
        'Preguntas conocidas sobre financiamiento, título, liens, leases o instrucciones',
        'Fechas o condiciones contractuales que se estén considerando',
        'Preguntas sobre el papel confirmado y alcance del servicio de Downtown'
      ]
    },
    faq: {
      eyebrow: 'Preguntas sobre escrow comercial',
      heading: 'Preguntas antes de llamar',
      intro: 'Respuestas directas para preparar una conversación sobre escrow de bienes raíces comerciales.',
      items: [
        ['¿Qué es el escrow de bienes raíces comerciales?', 'Es un acuerdo neutral de cierre donde un escrow holder recibe fondos, documentos e instrucciones escritas para una operación con una propiedad comercial y los entrega o desembolsa cuando se cumplen las condiciones aplicables. El papel exacto depende del acuerdo, las instrucciones y la operación.'],
        ['¿En qué se diferencia el escrow comercial del residencial?', 'Ambos utilizan principios neutrales de escrow, pero el uso de la propiedad, las partes, entidades, acuerdo, financiamiento, asuntos de título, leases y condiciones de cierre pueden variar. Esas diferencias no crean un solo proceso comercial universal.'],
        ['¿Qué información puede ser útil antes de consultar un escrow comercial?', 'Puede ser útil compartir la propiedad y ubicación, operación propuesta, estado del acuerdo, roles, contactos de financiamiento o título, condiciones conocidas, fechas y preguntas. Downtown debe confirmar la información exacta para un caso que acepte.'],
        ['¿Quién maneja los fondos y documentos de cierre en una operación comercial?', 'El escrow holder maneja fondos y documentos dentro de las instrucciones escritas y el papel de escrow confirmado. Comprador, vendedor, broker, lender, compañía de título, abogados, asesores fiscales y otros profesionales conservan sus responsabilidades.'],
        ['¿Qué puede afectar el calendario de un cierre de escrow comercial?', 'El calendario puede depender del acuerdo, condiciones escritas, financiamiento, asuntos de título, documentos requeridos, instrucciones y respuestas de los participantes. Downtown no publica un plazo universal ni garantiza una fecha de cierre.']
      ]
    },
    relatedServices: {
      eyebrow: 'Servicios de escrow relacionados',
      heading: 'Confirma si la propiedad es comercial o residencial',
      intro: 'El uso de la propiedad y el contexto de la operación ayudan a identificar el punto de partida más adecuado.',
      actionLabel: 'Revisar servicio',
      items: [
        {
          title: 'Servicios de Escrow Residencial',
          description: 'Revisa Escrow Residencial cuando el caso involucra la compra, venta u otra operación relacionada con una vivienda residencial.',
          href: '/es/servicios/escrow-residencial/'
        }
      ]
    },
    sources: {
      eyebrow: 'Fuentes oficiales',
      heading: 'Contexto usado para esta página',
      intro: 'Estas fuentes gubernamentales explican funciones generales de escrow y título. No son avales, asesoría legal ni descripciones de la licencia, cobertura o procedimientos internos de Downtown.',
      linkLabel: 'Visitar fuente',
      items: [
        {
          title: 'California DRE — Referencia sobre escrow',
          href: 'https://www.dre.ca.gov/files/pdf/refbook/ref08.pdf',
          description: 'Contexto de California sobre instrucciones escritas de escrow, papel del escrow holder, fondos, documentos y entrega al cierre.'
        },
        {
          title: 'California DFPI — Acerca de la Ley de Escrow',
          href: 'https://dfpi.ca.gov/regulated-industries/escrow-law/about-the-escrow-law/',
          description: 'Contexto oficial sobre definiciones de escrow en California y el marco regulatorio de agentes de escrow independientes.'
        },
        {
          title: 'California Department of Insurance — Seguro de título',
          href: 'https://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/Title-Insurance.cfm',
          description: 'Contexto oficial que diferencia el examen y seguro de título del papel de cierre del escrow.'
        }
      ]
    },
    contact: {
      eyebrow: 'Consulta la operación propuesta',
      heading: 'Comienza con la propiedad y las preguntas de escrow comercial que tienes.',
      body: 'Llama a Downtown Community Escrow para describir la propiedad, ubicación, operación propuesta, participantes e información disponible.',
      homeContact: 'Información de contacto principal',
      callLabel: 'Llamar a Downtown Community Escrow al (714) 265-7116'
    }
  }
} as const satisfies Record<Locale, SpecialtyContent>;
