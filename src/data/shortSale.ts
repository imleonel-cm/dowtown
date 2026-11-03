import type { Locale } from './site';
import type { SpecialtyContent } from './specialty';

export const shortSaleContent = {
  en: {
    meta: {
      title: 'Short Sale Escrow Services | Downtown Community Escrow',
      description: 'Understand the role of escrow in a short sale, what approvals and transaction details may affect closing, and what to discuss in an initial call.'
    },
    skipLink: 'Skip to main content',
    wordmarkLabel: 'Downtown Community Escrow home',
    breadcrumbLabel: 'Breadcrumb',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Short Sale Escrow',
    hero: {
      eyebrow: 'Short sale escrow',
      heading: 'Short Sale Escrow',
      intro: 'A short sale is a property sale for less than the amount owed on the mortgage. Downtown coordinates escrow closing instructions and transaction information; the lender or mortgage servicer—not escrow—decides whether to approve the sale and its terms.',
      primaryCta: 'Call about short sale escrow',
      secondaryCta: 'Compare specialties',
      marker: 'SS',
      markerLabel: 'Specialty 02'
    },
    index: {
      label: 'On this page',
      items: [
        ['What escrow coordinates', 'service-overview'],
        ['What can affect the transaction', 'transaction-variables'],
        ['Prepare for a conversation', 'prepare'],
        ['Useful information', 'consultation-information'],
        ['Questions', 'specialty-faq'],
        ['Related sources', 'related-sources']
      ]
    },
    overview: {
      eyebrow: 'A coordinated closing',
      heading: 'Escrow carries out authorized instructions; it does not grant short sale approval.',
      lead: 'In a short sale, the escrow function is to coordinate closing information, documents, funds, and instructions among the authorized participants once the applicable terms are established.',
      body: 'Escrow keeps closing information aligned with the written instructions it receives from authorized participants. Approval, negotiation, title or lien decisions, and professional advice remain with the parties responsible for those decisions.',
      boundaryHeading: 'Escrow does not decide',
      boundaries: [
        ['Short sale approval', 'The lender, mortgage servicer, loan owner, or other authorized party determines whether the sale and its conditions are approved.'],
        ['Sale negotiation', 'The parties and their authorized real estate or legal representatives handle negotiation and representation within their roles.'],
        ['Title and lien decisions', 'Title professionals and lienholders determine their requirements, releases, coverage, and other title-related matters.'],
        ['Legal, tax, or credit advice', 'Qualified professionals should explain legal rights, tax treatment, and possible credit consequences.']
      ]
    },
    variables: {
      eyebrow: 'Transaction context',
      heading: 'What can influence a short sale closing',
      intro: 'The applicable loan program, written approvals, property records, and participants can change what is needed. These are common areas for discussion, not a universal checklist or a statement of Downtown’s internal process.',
      items: [
        ['Written approvals and conditions', 'Approval terms may identify the acceptable sale price, authorized costs, required contributions, closing conditions, or an expiration date. The responsible parties must confirm which terms apply.'],
        ['Title information and liens', 'Mortgages and other recorded interests can affect the information, approvals, payoff demands, or releases needed before title can transfer.'],
        ['Dates, changes, and coordination', 'Approval periods, contract changes, participant responses, and closing dates may need to stay aligned. A requested date is not a guaranteed closing date.'],
        ['Transaction-specific documentation', 'The parties may request contracts, approval communications, settlement figures, title information, or other records based on the loan, program, property, and jurisdiction.']
      ]
    },
    prepare: {
      eyebrow: 'Prepare for the conversation',
      heading: 'Start with the current status of the sale',
      intro: 'Use the current sale status, written communications, participants, and important dates to organize the first conversation.',
      items: [
        ['Locate the property', 'Share the city and state so the team can discuss the request in the correct jurisdictional context.'],
        ['Describe the transaction status', 'Explain whether the property is listed, under contract, awaiting review, approved with conditions, or at another stage, if known.'],
        ['Identify the participants', 'Note the seller, buyer, agents, servicer, known lienholders, title contact, attorneys, or other professionals already involved.'],
        ['Summarize communications and dates', 'Mention whether a contract or written approval communication exists, along with key dates and the questions you want to discuss.']
      ]
    },
    information: {
      eyebrow: 'First consultation',
      heading: 'Information that may be useful to have',
      intro: 'This is an orientation list, not a list of mandatory documents. Do not send account numbers, financial statements, or other sensitive records through this page.',
      items: [
        'Property city and state',
        'Your role in the transaction',
        'Current transaction stage, if known',
        'Participants and professionals involved',
        'Whether a purchase contract exists',
        'Whether written approval communications exist',
        'Important dates and primary questions'
      ]
    },
    faq: {
      eyebrow: 'Short sale questions',
      heading: 'Questions before you call',
      intro: 'Brief answers for understanding the roles and preparing a short sale escrow conversation.',
      items: [
        ['What is short sale escrow?', 'It is the escrow coordination for a sale in which the proceeds are less than the mortgage balance. Escrow follows authorized closing instructions and coordinates transaction information; it does not decide whether the short sale is approved.'],
        ['Does escrow approve a short sale?', 'No. Approval comes from the mortgage servicer, lender, loan owner, and any other party whose consent is required. Escrow works with the written terms and instructions supplied by the authorized participants.'],
        ['Can escrow guarantee a closing date?', 'No. Timing can depend on approvals, title or lien matters, contract changes, requested documents, and participant responses. A target date should be confirmed against the current written conditions.'],
        ['What if the property is in another state?', 'Share the city and state when you call. Requirements and service availability can vary, so Downtown must confirm whether and how it may be able to assist with the specific property.'],
        ['Does a short sale automatically eliminate the remaining debt?', 'Not necessarily. Responsibility for a deficiency can depend on the written approval terms, the loan or program, and applicable law. Review any waiver in writing and consult the servicer and qualified legal or tax professionals about the specific consequences.']
      ]
    },
    sources: {
      eyebrow: 'Related sources',
      heading: 'Context used for this page',
      intro: 'These government sources explain general consumer context and one program-specific example. They are not partners, endorsements, or descriptions of Downtown’s internal procedures.',
      linkLabel: 'Visit source',
      items: [
        {
          title: 'CFPB — What is a short sale?',
          href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-short-sale-en-290/',
          description: 'General consumer explanation of a sale below the mortgage balance, servicer agreement, possible deficiency, written waivers, and the need to consider state law and professional guidance.'
        },
        {
          title: 'CFPB — Request approval for a short sale',
          href: 'https://www.consumerfinance.gov/housing/housing-insecurity/help-for-homeowners/avoid-foreclosure/',
          description: 'General context on mortgage-servicer approval, other mortgages, loss-mitigation review, and understanding the terms of the specific approval.'
        },
        {
          title: 'HUD — FHA Loss Mitigation Program',
          href: 'https://www.hud.gov/helping-americans/fha-loss-mitigation',
          description: 'An FHA-specific example showing that a pre-foreclosure sale is a program option with its own eligibility and conditions. It is not presented as a universal short sale process.'
        }
      ]
    },
    contact: {
      eyebrow: 'Discuss your transaction',
      heading: 'Start with the property, the current status, and your questions.',
      body: 'Call Downtown Community Escrow to discuss the property, current sale status, written approval communications, and your questions.',
      homeContact: 'Home contact information',
      callLabel: 'Call Downtown Community Escrow at (714) 265-7116'
    }
  },
  es: {
    meta: {
      title: 'Servicios de Escrow para Short Sale | Downtown Community Escrow',
      description: 'Conoce la función del escrow en una short sale, qué aprobaciones y datos pueden influir en el cierre y qué conviene comentar en una primera llamada.'
    },
    skipLink: 'Ir al contenido principal',
    wordmarkLabel: 'Inicio de Downtown Community Escrow',
    breadcrumbLabel: 'Ruta de navegación',
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Escrow de Short Sale',
    hero: {
      eyebrow: 'Escrow de short sale',
      heading: 'Escrow de Short Sale',
      intro: 'Una short sale es la venta de una propiedad por un monto inferior a lo adeudado en la hipoteca. Downtown coordina las instrucciones y la información del cierre de escrow; el prestamista o administrador hipotecario —no el escrow— decide si aprueba la venta y bajo qué condiciones.',
      primaryCta: 'Llama sobre escrow de short sale',
      secondaryCta: 'Comparar especialidades',
      marker: 'SS',
      markerLabel: 'Especialidad 02'
    },
    index: {
      label: 'En esta página',
      items: [
        ['Qué coordina el escrow', 'service-overview'],
        ['Qué puede influir en la operación', 'transaction-variables'],
        ['Prepárate para conversar', 'prepare'],
        ['Información útil', 'consultation-information'],
        ['Preguntas', 'specialty-faq'],
        ['Fuentes relacionadas', 'related-sources']
      ]
    },
    overview: {
      eyebrow: 'Un cierre coordinado',
      heading: 'El escrow ejecuta instrucciones autorizadas; no concede la aprobación de la short sale.',
      lead: 'En una short sale, la función del escrow es coordinar la información, los documentos, los fondos y las instrucciones de cierre entre los participantes autorizados cuando se establecen las condiciones aplicables.',
      body: 'El escrow mantiene la información del cierre alineada con las instrucciones escritas que recibe de participantes autorizados. La aprobación, la negociación, las decisiones de título o gravámenes y la asesoría profesional corresponden a quienes toman esas decisiones.',
      boundaryHeading: 'El escrow no decide',
      boundaries: [
        ['Aprobación de la short sale', 'El prestamista, administrador hipotecario, propietario del préstamo u otra parte autorizada determina si aprueba la venta y sus condiciones.'],
        ['Negociación de la venta', 'Las partes y sus representantes inmobiliarios o legales autorizados manejan la negociación y representación dentro de sus funciones.'],
        ['Decisiones de título y gravámenes', 'Los profesionales de título y acreedores determinan sus requisitos, liberaciones, cobertura y demás asuntos relacionados con el título.'],
        ['Asesoría legal, fiscal o crediticia', 'Profesionales calificados deben explicar los derechos legales, el tratamiento fiscal y las posibles consecuencias crediticias.']
      ]
    },
    variables: {
      eyebrow: 'Contexto de la operación',
      heading: 'Qué puede influir en el cierre de una short sale',
      intro: 'El programa del préstamo, las aprobaciones escritas, los registros de la propiedad y los participantes pueden cambiar lo necesario. Estas son áreas comunes de conversación, no una lista universal ni una descripción del proceso interno de Downtown.',
      items: [
        ['Aprobaciones y condiciones escritas', 'Los términos de aprobación pueden indicar el precio aceptable, costos autorizados, aportes requeridos, condiciones de cierre o una fecha de vencimiento. Las partes responsables deben confirmar qué términos aplican.'],
        ['Información de título y gravámenes', 'Las hipotecas y otros intereses registrados pueden influir en la información, aprobaciones, instrucciones de pago o liberaciones necesarias antes de transferir el título.'],
        ['Fechas, cambios y coordinación', 'Los periodos de aprobación, cambios de contrato, respuestas de los participantes y fechas de cierre pueden necesitar coordinación. Una fecha solicitada no es una fecha de cierre garantizada.'],
        ['Documentación específica de la operación', 'Las partes pueden solicitar contratos, comunicaciones de aprobación, cifras de liquidación, información de título u otros registros según el préstamo, programa, propiedad y jurisdicción.']
      ]
    },
    prepare: {
      eyebrow: 'Prepárate para la conversación',
      heading: 'Comienza con el estado actual de la venta',
      intro: 'Usa el estado actual de la venta, las comunicaciones escritas, los participantes y las fechas importantes para organizar la primera conversación.',
      items: [
        ['Ubica la propiedad', 'Comparte la ciudad y el estado para conversar sobre la solicitud dentro del contexto jurisdiccional correcto.'],
        ['Describe el estado de la operación', 'Indica si la propiedad está anunciada, bajo contrato, en revisión, aprobada con condiciones o en otra etapa, si lo sabes.'],
        ['Identifica a los participantes', 'Menciona vendedor, comprador, agentes, administrador hipotecario, acreedores conocidos, contacto de título, abogados u otros profesionales involucrados.'],
        ['Resume comunicaciones y fechas', 'Comenta si existe un contrato o una comunicación escrita de aprobación, además de las fechas importantes y las preguntas que deseas tratar.']
      ]
    },
    information: {
      eyebrow: 'Primera consulta',
      heading: 'Información que puede ser útil tener',
      intro: 'Esta es una lista orientativa, no una lista de documentos obligatorios. No envíes números de cuenta, estados financieros ni otros registros sensibles mediante esta página.',
      items: [
        'Ciudad y estado de la propiedad',
        'Tu papel en la operación',
        'Etapa actual de la operación, si se conoce',
        'Participantes y profesionales involucrados',
        'Si existe un contrato de compraventa',
        'Si existen comunicaciones escritas de aprobación',
        'Fechas importantes y preguntas principales'
      ]
    },
    faq: {
      eyebrow: 'Preguntas sobre short sale',
      heading: 'Preguntas antes de llamar',
      intro: 'Respuestas breves para comprender las funciones y preparar una conversación sobre escrow de short sale.',
      items: [
        ['¿Qué es el escrow de short sale?', 'Es la coordinación de escrow para una venta cuyos ingresos son inferiores al saldo hipotecario. El escrow sigue instrucciones autorizadas de cierre y coordina la información; no decide si la short sale se aprueba.'],
        ['¿El escrow aprueba una short sale?', 'No. La aprobación proviene del administrador hipotecario, prestamista, propietario del préstamo y cualquier otra parte cuyo consentimiento sea necesario. El escrow trabaja con los términos e instrucciones escritos que proporcionan los participantes autorizados.'],
        ['¿Puede el escrow garantizar una fecha de cierre?', 'No. El tiempo puede depender de aprobaciones, asuntos de título o gravámenes, cambios al contrato, documentos solicitados y respuestas de los participantes. Una fecha objetivo debe confirmarse con las condiciones escritas vigentes.'],
        ['¿Qué ocurre si la propiedad está en otro estado?', 'Comparte la ciudad y el estado al llamar. Los requisitos y la disponibilidad del servicio pueden variar, por lo que Downtown debe confirmar si puede ayudar con esa propiedad y de qué manera.'],
        ['¿Una short sale elimina automáticamente la deuda restante?', 'No necesariamente. La responsabilidad por una deficiencia puede depender de los términos escritos de aprobación, el préstamo o programa y la ley aplicable. Revisa por escrito cualquier liberación y consulta al administrador hipotecario y a profesionales legales o fiscales calificados sobre las consecuencias específicas.']
      ]
    },
    sources: {
      eyebrow: 'Fuentes relacionadas',
      heading: 'Contexto utilizado para esta página',
      intro: 'Estas fuentes gubernamentales explican contexto general para consumidores y un ejemplo específico de programa. No son socios, avales ni descripciones de los procedimientos internos de Downtown.',
      linkLabel: 'Visitar fuente',
      items: [
        {
          title: 'CFPB — ¿Qué es una short sale?',
          href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-short-sale-en-290/',
          description: 'Explicación general sobre la venta por debajo del saldo hipotecario, el acuerdo del administrador, una posible deficiencia, las liberaciones escritas y la importancia de la ley estatal y la orientación profesional.'
        },
        {
          title: 'CFPB — Solicitar aprobación para una short sale',
          href: 'https://www.consumerfinance.gov/housing/housing-insecurity/help-for-homeowners/avoid-foreclosure/',
          description: 'Contexto general sobre aprobación del administrador hipotecario, otras hipotecas, evaluación de mitigación de pérdidas y comprensión de los términos de la aprobación específica.'
        },
        {
          title: 'HUD — Programa de mitigación de pérdidas de FHA',
          href: 'https://www.hud.gov/helping-americans/fha-loss-mitigation',
          description: 'Ejemplo específico de FHA que muestra una venta previa a la ejecución hipotecaria como opción con elegibilidad y condiciones propias. No se presenta como proceso universal de short sale.'
        }
      ]
    },
    contact: {
      eyebrow: 'Consulta sobre tu operación',
      heading: 'Comienza con la propiedad, el estado actual y tus preguntas.',
      body: 'Llama a Downtown Community Escrow para conversar sobre la propiedad, el estado actual de la venta, las comunicaciones escritas de aprobación y tus preguntas.',
      homeContact: 'Información de contacto en el Home',
      callLabel: 'Llamar a Downtown Community Escrow al (714) 265-7116'
    }
  }
} as const satisfies Record<Locale, SpecialtyContent>;

export type ShortSaleContent = (typeof shortSaleContent)[Locale];
