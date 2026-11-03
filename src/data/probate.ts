import type { Locale } from './site';
import type { SpecialtyContent } from './specialty';

export const probateContent = {
  en: {
    meta: {
      title: 'Probate Escrow Services | Downtown Community Escrow',
      description: 'Learn what probate escrow coordinates, who may be involved, and what information can help Downtown review a probate-related real estate transaction.'
    },
    skipLink: 'Skip to main content',
    wordmarkLabel: 'Downtown Community Escrow home',
    breadcrumbLabel: 'Breadcrumb',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Probate Escrow',
    hero: {
      eyebrow: 'Probate escrow',
      heading: 'Probate Escrow Services',
      intro: 'Probate escrow coordinates the closing side of a real estate transaction connected to an estate. Downtown works from authorized instructions and transaction requirements; it does not decide who may act for the estate or whether court approval is required.',
      primaryCta: 'Call about probate escrow',
      secondaryCta: 'Compare specialties',
      marker: 'PB',
      markerLabel: 'Specialty 03'
    },
    index: {
      label: 'On this page',
      items: [
        ['What probate escrow coordinates', 'service-overview'],
        ['Process, parties, and closing context', 'transaction-variables'],
        ['Prepare for a conversation', 'prepare'],
        ['Useful information', 'consultation-information'],
        ['Questions', 'specialty-faq'],
        ['Related services', 'related-services'],
        ['Official sources', 'related-sources']
      ]
    },
    overview: {
      eyebrow: 'A neutral closing role',
      heading: 'Probate escrow follows the authority and requirements established for the transaction.',
      lead: 'A probate-related real estate sale may involve a court-appointed personal representative, estate instructions, title requirements, buyer and seller obligations, and—when applicable—court procedures.',
      body: 'Within the confirmed scope of the matter, escrow coordinates authorized closing instructions, documents, funds, and information among the participants. Whether property must pass through probate and whether a sale needs court confirmation depend on the estate, the authority granted, the transaction, and applicable law. Those determinations do not belong to escrow.',
      boundaryHeading: 'Escrow does not replace',
      boundaries: [
        ['The personal representative', 'The court-appointed executor or administrator acts for the estate within the authority granted. Escrow does not appoint that person or expand that authority.'],
        ['The probate court', 'The court issues orders and provides judicial approval when the applicable procedure requires it. Escrow does not determine the court’s requirements.'],
        ['Legal representation', 'Attorneys advise on probate procedure, authority, notices, objections, and legal rights within their professional role.'],
        ['Title, lending, and real estate roles', 'Title professionals, lenders, and real estate representatives make decisions and provide services within their respective responsibilities.']
      ]
    },
    variables: {
      eyebrow: 'Process and closing context',
      heading: 'What can shape a probate real estate closing',
      intro: 'Probate transactions do not all follow one path. These areas explain why coordination can vary; they are not a universal checklist or a description of Downtown’s internal procedures.',
      items: [
        ['Estate status and authority', 'The relevant documents may identify the personal representative and whether the representative has full, limited, or other authority. The responsible legal professionals and court records establish what authority applies.'],
        ['Independent administration or court supervision', 'California court materials distinguish full and limited authority under the Independent Administration of Estates Act. A sale may involve notice, court supervision, or confirmation depending on the authority and circumstances; court confirmation is not universal.'],
        ['Participants and instructions', 'The personal representative, buyer, agents, attorneys, title professionals, lender, court, and other participants may each have a distinct role. Escrow coordinates only the instructions and information authorized for the closing.'],
        ['Closing conditions and timing', 'Title matters, financing, required notices or approvals, document changes, participant responses, and court-related steps can affect readiness. A requested date is not a guaranteed closing date.']
      ]
    },
    prepare: {
      eyebrow: 'Prepare for the conversation',
      heading: 'Start with the property, the estate, and the authority currently known',
      intro: 'A few facts can help frame an initial conversation without asking you to determine the legal procedure yourself.',
      items: [
        ['Identify the property', 'Share the property city and state and describe the proposed sale or other real estate transaction.'],
        ['Describe the probate context', 'Explain whether a probate case is open and whether a personal representative has been appointed, if known.'],
        ['Note the available authority information', 'Mention any Letters, order, full or limited authority, Notice of Proposed Action, or court-confirmation information already identified by the responsible professionals.'],
        ['List participants, status, and questions', 'Identify your role and the known attorneys, agents, title contact, lender, buyer, or other participants, along with current dates and questions.']
      ]
    },
    information: {
      eyebrow: 'First consultation',
      heading: 'Information that may be useful to have',
      intro: 'This is an orientation list, not a list of mandatory documents or a request to send sensitive records through this page.',
      items: [
        'Property city and state',
        'Your role and relationship to the transaction',
        'Probate case status, if known',
        'Name and role of the personal representative, if appointed',
        'Authority or court information already available',
        'Purchase contract or transaction stage, if applicable',
        'Attorneys and other professionals involved',
        'Important dates and primary questions'
      ]
    },
    faq: {
      eyebrow: 'Probate escrow questions',
      heading: 'Questions before you call',
      intro: 'Brief answers for understanding probate escrow roles and preparing an initial conversation.',
      items: [
        ['What is probate escrow?', 'Probate escrow is the neutral coordination of closing instructions, documents, funds, and transaction information for a real estate matter connected to an estate. Escrow does not represent the estate, appoint the personal representative, or provide legal advice.'],
        ['Does every inherited property have to go through probate?', 'No. California Courts explains that the process can depend on the type, value, and ownership of the property and that some transfers may use procedures other than formal probate. Qualified legal professionals should determine the appropriate process for a specific estate.'],
        ['Does every probate sale require court confirmation?', 'No. The required procedure can depend on the authority granted to the personal representative and the circumstances. Orange County Superior Court explains that a real property sale under limited authority requires court approval, while full authority may allow a sale after the applicable Notice of Proposed Action process if there is no objection.'],
        ['Who has authority to act for the estate?', 'When formal probate is required, the court appoints a personal representative—an executor or administrator—and the court documents identify the authority granted. Escrow relies on applicable instructions and records; it does not decide who has legal authority.'],
        ['What information is useful before contacting probate escrow?', 'Start with the property location, your role, the probate status, the appointed personal representative if known, available authority or court information, transaction status, participants, important dates, and your questions. Downtown must separately confirm whether and how it can assist.']
      ]
    },
    relatedServices: {
      eyebrow: 'Related escrow services',
      heading: 'Start with the transaction’s most specific need',
      intro: 'A property may raise more than one escrow question. These pages provide a different starting point when the property classification or sale structure is the primary issue.',
      actionLabel: 'Review service',
      items: [
        {
          title: 'Manufactured & Mobile Home Escrow',
          description: 'Review this specialty when the estate property is a manufactured or mobile home and its land, title, or registration context is central to the transaction.',
          href: '/services/manufactured-home-escrow/'
        },
        {
          title: 'Short Sale Escrow',
          description: 'Review this specialty when the proposed sale also depends on a mortgage servicer or lender approving short sale terms.',
          href: '/services/short-sale-escrow/'
        }
      ]
    },
    sources: {
      eyebrow: 'Official sources',
      heading: 'Context used for this page',
      intro: 'These government sources explain general California and Orange County probate or escrow context. They are not partners, endorsements, legal advice, or descriptions of Downtown’s internal procedures.',
      linkLabel: 'Visit source',
      items: [
        {
          title: 'California Courts — Guide to property after someone dies',
          href: 'https://selfhelp.courts.ca.gov/probate',
          description: 'General information on probate, when court involvement may or may not be needed, and appointment of a personal representative.'
        },
        {
          title: 'Orange County Superior Court — Administering the Probate Estate',
          href: 'https://www.occourts.org/self-help/self-help-probate/wills-trusts/administering-probate-estate',
          description: 'County court guidance on full and limited independent-administration authority, Notice of Proposed Action, objections, and transactions requiring court approval.'
        },
        {
          title: 'California Courts — Petition for Court Confirmation of Sale (DE-260)',
          href: 'https://selfhelp.courts.ca.gov/jcc-form/DE-260',
          description: 'The California court form used to request confirmation of a real-property sale when the applicable probate procedure requires it.'
        },
        {
          title: 'California DFPI — Consumer Information: Escrow',
          href: 'https://dfpi.ca.gov/regulated-industries/escrow-law/consumer-information-escrow/',
          description: 'Consumer background on independent and controlled escrow in California. It does not verify Downtown’s license, scope, or procedures.'
        }
      ]
    },
    contact: {
      eyebrow: 'Discuss the transaction',
      heading: 'Start with the property, the known authority, and your questions.',
      body: 'Call Downtown Community Escrow to discuss the property, the probate context currently known, the participants, and the information available. Downtown must confirm whether and how it can assist with the specific matter.',
      homeContact: 'Home contact information',
      callLabel: 'Call Downtown Community Escrow at (714) 265-7116'
    }
  },
  es: {
    meta: {
      title: 'Escrow para propiedades en sucesión | Downtown',
      description: 'Conoce qué coordina un escrow de probate, quiénes pueden intervenir y qué información ayuda a Downtown a revisar una operación inmobiliaria de sucesión.'
    },
    skipLink: 'Ir al contenido principal',
    wordmarkLabel: 'Inicio de Downtown Community Escrow',
    breadcrumbLabel: 'Ruta de navegación',
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Escrow de Probate',
    hero: {
      eyebrow: 'Escrow de probate',
      heading: 'Escrow para propiedades en sucesión',
      intro: 'El escrow de probate coordina el cierre de una operación inmobiliaria vinculada con una sucesión. Downtown trabaja con instrucciones autorizadas y requisitos de la operación; no decide quién puede actuar por la sucesión ni si se necesita aprobación judicial.',
      primaryCta: 'Llama sobre escrow de probate',
      secondaryCta: 'Comparar especialidades',
      marker: 'PB',
      markerLabel: 'Especialidad 03'
    },
    index: {
      label: 'En esta página',
      items: [
        ['Qué coordina el escrow de probate', 'service-overview'],
        ['Proceso, partes y contexto de cierre', 'transaction-variables'],
        ['Prepárate para conversar', 'prepare'],
        ['Información útil', 'consultation-information'],
        ['Preguntas', 'specialty-faq'],
        ['Servicios relacionados', 'related-services'],
        ['Fuentes oficiales', 'related-sources']
      ]
    },
    overview: {
      eyebrow: 'Una función neutral de cierre',
      heading: 'El escrow de probate sigue la autoridad y los requisitos establecidos para la operación.',
      lead: 'Una venta inmobiliaria relacionada con probate puede involucrar a un representante personal nombrado por el tribunal, instrucciones de la sucesión, requisitos de título, obligaciones de comprador y vendedor y, cuando corresponda, procedimientos judiciales.',
      body: 'Dentro del alcance confirmado del caso, el escrow coordina instrucciones autorizadas de cierre, documentos, fondos e información entre los participantes. Si la propiedad debe pasar por probate y si una venta necesita confirmación judicial depende de la sucesión, la autoridad otorgada, la operación y la ley aplicable. Esas decisiones no corresponden al escrow.',
      boundaryHeading: 'El escrow no sustituye',
      boundaries: [
        ['Al representante personal', 'El executor o administrator nombrado por el tribunal actúa por la sucesión dentro de la autoridad otorgada. El escrow no nombra a esa persona ni amplía su autoridad.'],
        ['Al tribunal de probate', 'El tribunal emite órdenes y proporciona aprobación judicial cuando el procedimiento aplicable lo requiere. El escrow no determina los requisitos del tribunal.'],
        ['La representación legal', 'Los abogados asesoran sobre el procedimiento de probate, autoridad, avisos, objeciones y derechos legales dentro de su función profesional.'],
        ['Las funciones de título, préstamo e inmobiliarias', 'Los profesionales de título, prestamistas y representantes inmobiliarios toman decisiones y prestan servicios dentro de sus respectivas responsabilidades.']
      ]
    },
    variables: {
      eyebrow: 'Proceso y contexto de cierre',
      heading: 'Qué puede definir el cierre de una operación de probate',
      intro: 'Las operaciones de probate no siguen todas el mismo recorrido. Estas áreas explican por qué la coordinación puede variar; no son una lista universal ni una descripción de los procedimientos internos de Downtown.',
      items: [
        ['Estado de la sucesión y autoridad', 'Los documentos pertinentes pueden identificar al representante personal y si tiene autoridad plena, limitada u otra. Los profesionales legales responsables y los registros judiciales establecen qué autoridad corresponde.'],
        ['Administración independiente o supervisión judicial', 'Los materiales judiciales de California distinguen autoridad plena y limitada bajo la Independent Administration of Estates Act. Una venta puede requerir aviso, supervisión o confirmación judicial según la autoridad y las circunstancias; la confirmación judicial no es universal.'],
        ['Participantes e instrucciones', 'El representante personal, comprador, agentes, abogados, profesionales de título, prestamista, tribunal y otros participantes pueden tener funciones distintas. El escrow coordina únicamente las instrucciones y la información autorizadas para el cierre.'],
        ['Condiciones y tiempos del cierre', 'Asuntos de título, financiamiento, avisos o aprobaciones requeridos, cambios de documentos, respuestas de participantes y pasos judiciales pueden afectar la preparación. Una fecha solicitada no es una fecha de cierre garantizada.']
      ]
    },
    prepare: {
      eyebrow: 'Prepárate para la conversación',
      heading: 'Comienza con la propiedad, la sucesión y la autoridad conocida',
      intro: 'Algunos datos pueden ayudar a orientar una conversación inicial sin pedirte que determines por tu cuenta el procedimiento legal.',
      items: [
        ['Identifica la propiedad', 'Comparte la ciudad y el estado de la propiedad y describe la venta propuesta u otra operación inmobiliaria.'],
        ['Describe el contexto de probate', 'Explica si existe un caso de probate abierto y si se ha nombrado un representante personal, si lo sabes.'],
        ['Menciona la información disponible sobre autoridad', 'Indica si ya se identificaron Letters, una orden, autoridad plena o limitada, Notice of Proposed Action o información sobre confirmación judicial.'],
        ['Enumera participantes, estado y preguntas', 'Indica tu papel y los abogados, agentes, contacto de título, prestamista, comprador u otros participantes conocidos, junto con fechas y preguntas actuales.']
      ]
    },
    information: {
      eyebrow: 'Primera consulta',
      heading: 'Información que puede ser útil tener',
      intro: 'Esta es una lista orientativa, no una lista de documentos obligatorios ni una solicitud para enviar registros sensibles mediante esta página.',
      items: [
        'Ciudad y estado de la propiedad',
        'Tu papel y relación con la operación',
        'Estado del caso de probate, si se conoce',
        'Nombre y función del representante personal, si fue nombrado',
        'Información disponible sobre autoridad o tribunal',
        'Contrato de compraventa o etapa de la operación, si corresponde',
        'Abogados y otros profesionales participantes',
        'Fechas importantes y preguntas principales'
      ]
    },
    faq: {
      eyebrow: 'Preguntas sobre escrow de probate',
      heading: 'Preguntas antes de llamar',
      intro: 'Respuestas breves para comprender las funciones y preparar una conversación inicial sobre escrow de probate.',
      items: [
        ['¿Qué es el escrow de probate?', 'Es la coordinación neutral de instrucciones de cierre, documentos, fondos e información para una operación inmobiliaria vinculada con una sucesión. El escrow no representa a la sucesión, no nombra al representante personal ni brinda asesoría legal.'],
        ['¿Toda propiedad heredada debe pasar por probate?', 'No. California Courts explica que el proceso puede depender del tipo, valor y forma de titularidad de la propiedad, y que algunas transferencias pueden usar procedimientos distintos al probate formal. Profesionales legales calificados deben determinar el proceso apropiado para una sucesión específica.'],
        ['¿Toda venta de probate requiere confirmación judicial?', 'No. El procedimiento puede depender de la autoridad otorgada al representante personal y de las circunstancias. Orange County Superior Court explica que una venta inmobiliaria con autoridad limitada requiere aprobación judicial, mientras que la autoridad plena puede permitir la venta después del proceso aplicable de Notice of Proposed Action si no existe objeción.'],
        ['¿Quién tiene autoridad para actuar por la sucesión?', 'Cuando se requiere probate formal, el tribunal nombra a un representante personal —executor o administrator— y los documentos judiciales identifican la autoridad otorgada. El escrow se basa en las instrucciones y registros aplicables; no decide quién tiene autoridad legal.'],
        ['¿Qué información es útil antes de contactar a escrow de probate?', 'Comienza con la ubicación de la propiedad, tu papel, el estado del probate, el representante personal si se conoce, información disponible sobre autoridad o tribunal, estado de la operación, participantes, fechas importantes y tus preguntas. Downtown debe confirmar por separado si puede ayudar y de qué manera.']
      ]
    },
    relatedServices: {
      eyebrow: 'Servicios de escrow relacionados',
      heading: 'Comienza con la necesidad más específica de la operación',
      intro: 'Una propiedad puede plantear más de una consulta de escrow. Estas páginas ofrecen otro punto de partida cuando la clasificación de la propiedad o la estructura de la venta es el asunto principal.',
      actionLabel: 'Revisar servicio',
      items: [
        {
          title: 'Escrow para casas manufacturadas y móviles',
          description: 'Revisa esta especialidad cuando la propiedad de la sucesión es una casa manufacturada o móvil y el terreno, título o registro es central para la operación.',
          href: '/es/servicios/escrow-casas-manufacturadas/'
        },
        {
          title: 'Escrow de Short Sale',
          description: 'Revisa esta especialidad cuando la venta propuesta también depende de que un administrador hipotecario o prestamista apruebe las condiciones de una short sale.',
          href: '/es/servicios/escrow-short-sale/'
        }
      ]
    },
    sources: {
      eyebrow: 'Fuentes oficiales',
      heading: 'Contexto utilizado para esta página',
      intro: 'Estas fuentes gubernamentales explican contexto general de probate o escrow en California y Orange County. No son socios, avales, asesoría legal ni descripciones de los procedimientos internos de Downtown.',
      linkLabel: 'Visitar fuente',
      items: [
        {
          title: 'California Courts — Guía sobre la propiedad después de un fallecimiento',
          href: 'https://selfhelp.courts.ca.gov/probate',
          description: 'Información general sobre probate, cuándo puede ser necesaria la intervención judicial y el nombramiento de un representante personal.'
        },
        {
          title: 'Orange County Superior Court — Administración de una sucesión en probate',
          href: 'https://www.occourts.org/self-help/self-help-probate/wills-trusts/administering-probate-estate',
          description: 'Orientación del tribunal del condado sobre autoridad plena y limitada, Notice of Proposed Action, objeciones y operaciones que requieren aprobación judicial.'
        },
        {
          title: 'California Courts — Petición de confirmación judicial de venta (DE-260)',
          href: 'https://selfhelp.courts.ca.gov/jcc-form/DE-260',
          description: 'Formulario judicial de California para solicitar la confirmación de una venta inmobiliaria cuando el procedimiento de probate aplicable lo requiere.'
        },
        {
          title: 'California DFPI — Información para consumidores sobre escrow',
          href: 'https://dfpi.ca.gov/regulated-industries/escrow-law/consumer-information-escrow/',
          description: 'Contexto para consumidores sobre escrow independiente y controlado en California. No verifica la licencia, el alcance ni los procedimientos de Downtown.'
        }
      ]
    },
    contact: {
      eyebrow: 'Consulta la operación',
      heading: 'Comienza con la propiedad, la autoridad conocida y tus preguntas.',
      body: 'Llama a Downtown Community Escrow para conversar sobre la propiedad, el contexto conocido de probate, los participantes y la información disponible. Downtown debe confirmar si puede ayudar con el caso específico y de qué manera.',
      homeContact: 'Información de contacto en el Home',
      callLabel: 'Llamar a Downtown Community Escrow al (714) 265-7116'
    }
  }
} as const satisfies Record<Locale, SpecialtyContent>;

export type ProbateContent = (typeof probateContent)[Locale];
