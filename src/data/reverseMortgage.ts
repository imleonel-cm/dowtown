import type { Locale } from './site';
import type { SpecialtyContent } from './specialty';

const en: SpecialtyContent = {
  meta: {
    title: 'Reverse Mortgage Escrow Services | Downtown Community Escrow',
    description: 'Learn how reverse mortgage escrow coordinates closing instructions, documents, and funds while lenders determine loan approval and financing requirements.'
  },
  skipLink: 'Skip to main content',
  wordmarkLabel: 'Downtown Community Escrow home',
  breadcrumbLabel: 'Breadcrumb',
  breadcrumbHome: 'Home',
  breadcrumbCurrent: 'Reverse Mortgage Escrow',
  hero: {
    eyebrow: 'REVERSE MORTGAGE ESCROW · SANTA ANA, CA',
    heading: 'Reverse Mortgage Escrow Services',
    message: 'A Different Type of Mortgage. A Closing That Needs Clear Coordination.',
    intro: 'Downtown Community Escrow coordinates funds, documents, and closing instructions for real estate transactions involving reverse mortgages. Loan approval and servicing decisions remain with the lender and other responsible parties.',
    primaryCta: 'Discuss a Reverse Mortgage Escrow',
    secondaryCta: 'How This Escrow Works',
    marker: 'RM',
    markerLabel: 'Specialty 04'
  },
  index: {
    label: 'On this page',
    items: [
      ['How This Escrow Works', 'service-overview'],
      ['Closing Requirements', 'transaction-variables'],
      ['Prepare for Your Escrow', 'prepare'],
      ['Questions', 'specialty-faq'],
      ['Helpful Resources', 'related-sources']
    ]
  },
  overview: {
    eyebrow: 'A clear closing role',
    heading: 'How Does Reverse Mortgage Escrow Work?',
    lead: 'Reverse mortgage escrow coordinates the closing instructions, documents, and funds associated with a reverse mortgage transaction. The escrow holder follows applicable instructions, while the lender determines loan approval and financing requirements.',
    body: 'Downtown coordinates the closing within the confirmed scope of the matter. The escrow holder, lender or loan originator, loan servicer, title provider, HUD-approved counselor, and legal or tax advisers each retain distinct responsibilities. Closing escrow is different from tax or insurance reserves and set-asides that may apply to some reverse mortgage products; those reserves are not the closing escrow service.',
    boundaryHeading: 'Who does what',
    boundaries: [
      ['Escrow holder', 'Coordinates authorized closing instructions, documents, funds, and transaction information within the confirmed role.'],
      ['Lender and loan originator', 'Determine the product, eligibility, underwriting, terms, conditions, approval, and funding requirements.'],
      ['Loan servicer', 'Administers the loan after closing and may handle property-charge reserves or set-asides.'],
      ['Title, counseling, legal, and tax professionals', 'Address title, HUD-approved counseling when applicable, legal rights, taxes, insurance, or financial decisions in their own roles.']
    ]
  },
  variables: {
    eyebrow: 'Closing requirements',
    heading: 'What Can Affect a Reverse Mortgage Closing?',
    intro: 'The loan and transaction type, lender instructions, property information, and participating parties can affect the closing process.',
    items: [
      ['Loan and transaction type', 'A reverse mortgage may involve HECM or other products. HECM is an FHA-insured type, and HECM for Purchase differs from a transaction involving a home the borrower already owns.'],
      ['Lender instructions', 'Loan conditions, required documents, signing requirements, and closing instructions may affect the steps needed.'],
      ['Property and title', 'Property records, ownership information, title matters, existing obligations, and other applicable conditions may affect closing.'],
      ['Participants and timing', 'Coordination among the lender, escrow holder, title provider, borrower, and other parties can affect readiness, recording, funding, or an applicable rescission period.']
    ]
  },
  prepare: {
    eyebrow: 'Prepare for your escrow',
    heading: 'Getting Ready to Discuss a Reverse Mortgage Escrow?',
    intro: 'A few details about the property, transaction, and current stage can help Downtown understand your inquiry.',
    items: [
      ['The Property', 'Property location and general information about the home.'],
      ['The Transaction', 'Whether the transaction involves an existing home or a proposed purchase, if known.'],
      ['Current Stage', 'Available lender instructions, documents, or information about the loan process.'],
      ['Your Questions', 'Any closing requirements or concerns you would like to discuss.']
    ]
  },
  information: { eyebrow: '', heading: '', intro: '', items: [] },
  faq: {
    eyebrow: 'Reverse mortgage escrow questions',
    heading: 'Questions before you call',
    intro: 'Brief answers about the closing role and preparing an initial escrow conversation.',
    items: [
      ['What does an escrow company do in a reverse mortgage closing?', 'An escrow company coordinates authorized closing instructions, documents, funds, and transaction information within its confirmed role. It does not originate or approve the reverse mortgage, determine borrower eligibility, provide HUD counseling, or give loan advice.'],
      ['How does reverse mortgage escrow work?', 'The lender establishes loan conditions and authorizes funding; escrow coordinates the applicable closing instructions and information with the participants. The path depends on the product and transaction.'],
      ['What information or documents may be needed for closing?', 'The lender and other responsible parties determine required documents. Useful starting information includes the property, transaction type, lender, current stage, participants, existing title or property issues, dates, and questions.'],
      ['Who coordinates closing requirements in a reverse mortgage transaction?', 'The lender determines eligibility, underwriting, terms, conditions, approval, and funding authorization. Escrow coordinates the closing role assigned through applicable instructions; counselors, title professionals, servicers, agents, and others retain their responsibilities.'],
      ['How is reverse mortgage closing escrow different from an escrow account for taxes and insurance?', 'Closing escrow coordinates a transaction. A lender or servicer may use a reserve or set-aside for property taxes or insurance in some products. These are different functions and should not be treated as universal requirements.']
    ]
  },
  sources: {
    eyebrow: 'Official sources',
    heading: 'Helpful Reverse Mortgage Escrow Resources',
    intro: 'These government sources provide general context. They are not partners, endorsements, loan advice, or descriptions of Downtown’s internal procedures.',
    linkLabel: 'Visit source',
    items: [
      { title: 'HUD — Home Equity Conversion Mortgage program', href: 'https://www.hud.gov/hud-partners/single-family-hecmhome', description: 'Program context for FHA-insured HECMs, approved lenders, counseling, and HECM for Purchase.' },
      { title: 'CFPB — Using a reverse mortgage to buy a home', href: 'https://www.consumerfinance.gov/ask-cfpb/can-i-use-a-reverse-mortgage-loan-to-buy-a-home-en-238/', description: 'Consumer information about HECM for Purchase and purchase-related funds and costs.' },
      { title: 'CFPB — Mortgage documents before closing', href: 'https://www.consumerfinance.gov/ask-cfpb/what-documents-should-i-receive-before-closing-on-a-mortgage-loan-en-181/', description: 'Consumer information about disclosures and settlement documents before closing.' },
      { title: 'CFPB — Right of rescission', href: 'https://www.consumerfinance.gov/ask-cfpb/can-i-change-my-mind-after-i-sign-the-loan-closing-documents-for-my-second-mortgage-or-refinance-what-is-the-right-of-rescission-en-186/', description: 'General context for rescission in certain non-purchase transactions; not a universal rule.' },
      { title: 'California DFPI — Consumer Information: Escrow', href: 'https://dfpi.ca.gov/regulated-industries/escrow-law/consumer-information-escrow/', description: 'California consumer background on independent and controlled escrow.' }
    ]
  },
  contact: {
    eyebrow: 'READY TO DISCUSS YOUR TRANSACTION?',
    heading: 'Have Questions About a Reverse Mortgage Escrow?',
    body: 'Contact Downtown Community Escrow to discuss the property, transaction type, and available closing information.',
    homeContact: 'Home contact information',
    callLabel: 'Discuss a Reverse Mortgage Escrow'
  }
};

const es: SpecialtyContent = {
  meta: {
    title: 'Escrow para hipotecas inversas | Downtown Community Escrow',
    description: 'Conoce cómo el escrow para hipotecas inversas coordina instrucciones de cierre, documentos y fondos mientras el prestamista determina la aprobación y los requisitos de financiamiento.'
  },
  skipLink: 'Ir al contenido principal',
  wordmarkLabel: 'Inicio de Downtown Community Escrow',
  breadcrumbLabel: 'Ruta de navegación',
  breadcrumbHome: 'Inicio',
  breadcrumbCurrent: 'Escrow para hipotecas inversas',
  hero: {
    eyebrow: 'ESCROW PARA HIPOTECAS INVERSAS · SANTA ANA, CA',
    heading: 'Servicios de escrow para hipotecas inversas',
    message: 'Un préstamo diferente, con requisitos de cierre que necesitan coordinación.',
    intro: 'Downtown Community Escrow coordina fondos, documentos e instrucciones de cierre en operaciones relacionadas con hipotecas inversas. Las decisiones sobre aprobación y administración del préstamo corresponden al prestamista y a las demás partes responsables.',
    primaryCta: 'Consultar sobre un escrow de hipoteca inversa',
    secondaryCta: 'Cómo funciona este escrow',
    marker: 'HI',
    markerLabel: 'Especialidad 04'
  },
  index: {
    label: 'En esta página',
    items: [
      ['Cómo funciona este escrow', 'service-overview'],
      ['Requisitos del cierre', 'transaction-variables'],
      ['Prepara tu consulta', 'prepare'],
      ['Preguntas frecuentes', 'specialty-faq'],
      ['Recursos útiles', 'related-sources']
    ]
  },
  overview: {
    eyebrow: 'Una función clara de cierre',
    heading: '¿Cómo funciona el escrow de una hipoteca inversa?',
    lead: 'El escrow de una hipoteca inversa coordina las instrucciones de cierre, los documentos y los fondos relacionados con la operación. La compañía de escrow actúa conforme a las instrucciones aplicables, mientras que el prestamista determina la aprobación y los requisitos de financiamiento.',
    body: 'Downtown coordina el cierre dentro del alcance confirmado del caso. La compañía de escrow, el prestamista u originador, el servicer, el proveedor de title, el counselor aprobado por HUD y los asesores legales o fiscales mantienen funciones distintas. El escrow de cierre es diferente de las reservas para impuestos o seguros que pueden existir en algunos productos; esas reservas no son el servicio de escrow de cierre.',
    boundaryHeading: 'Quién hace qué',
    boundaries: [
      ['Compañía de escrow', 'Coordina instrucciones autorizadas de cierre, documentos, fondos e información dentro de su función confirmada.'],
      ['Prestamista y originador', 'Determinan el producto, elegibilidad, underwriting, términos, condiciones, aprobación y requisitos de fondos.'],
      ['Loan servicer', 'Administra el préstamo después del cierre y puede manejar reservas o set-asides para gastos de la propiedad.'],
      ['Title, counseling y asesores', 'Atienden title, counseling aprobado por HUD cuando corresponda, derechos legales, impuestos, seguros o decisiones financieras dentro de sus funciones.']
    ]
  },
  variables: {
    eyebrow: 'Requisitos del cierre',
    heading: '¿Qué puede influir en el cierre de una hipoteca inversa?',
    intro: 'El tipo de préstamo y operación, las instrucciones del prestamista, la información de la propiedad y las partes involucradas pueden influir en el proceso de cierre.',
    items: [
      ['Tipo de préstamo y operación', 'Una hipoteca inversa puede incluir HECM u otros productos. HECM es un tipo asegurado por FHA y HECM for Purchase se diferencia de una operación sobre una vivienda ya poseída.'],
      ['Instrucciones del prestamista', 'Las condiciones, documentos, requisitos de firma e instrucciones de cierre pueden determinar los pasos necesarios.'],
      ['Propiedad y title', 'Los registros, la titularidad, asuntos de title, obligaciones existentes y otras condiciones pueden influir en el cierre.'],
      ['Participantes y tiempos', 'La coordinación entre prestamista, escrow, proveedor de title, prestatario y otras partes puede afectar preparación, registro, fondos o un período de rescisión aplicable.']
    ]
  },
  prepare: {
    eyebrow: 'Prepara tu consulta',
    heading: '¿Te estás preparando para consultar sobre un escrow de hipoteca inversa?',
    intro: 'Algunos datos sobre la propiedad, la operación y su etapa actual pueden ayudarnos a entender mejor tu consulta.',
    items: [
      ['La propiedad', 'Ubicación e información general de la vivienda.'],
      ['La operación', 'Si se trata de una vivienda existente o una compra propuesta, cuando se conozca.'],
      ['Etapa actual', 'Instrucciones del prestamista, documentos o información disponible sobre el proceso.'],
      ['Tus preguntas', 'Requisitos del cierre o inquietudes que quieras comentar.']
    ]
  },
  information: { eyebrow: '', heading: '', intro: '', items: [] },
  faq: {
    eyebrow: 'Preguntas sobre escrow para hipotecas inversas',
    heading: 'Preguntas antes de llamar',
    intro: 'Respuestas breves sobre la función de cierre y cómo preparar una conversación inicial.',
    items: [
      ['¿Qué hace una compañía de escrow en el cierre de una hipoteca inversa?', 'Coordina instrucciones autorizadas de cierre, documentos, fondos e información dentro de su función confirmada. No origina ni aprueba la hipoteca, no determina elegibilidad, no proporciona counseling de HUD ni asesora sobre el préstamo.'],
      ['¿Cómo funciona el escrow de una hipoteca inversa?', 'El prestamista establece condiciones y autoriza fondos; el escrow coordina las instrucciones e información de cierre aplicables con los participantes. El recorrido depende del producto y la operación.'],
      ['¿Qué información o documentos pueden necesitarse para el cierre?', 'El prestamista y las partes responsables determinan los documentos. Como punto de partida pueden servir la propiedad, operación, lender, etapa, participantes, asuntos de title o propiedad, fechas y preguntas.'],
      ['¿Quién coordina los requisitos de cierre en una operación de hipoteca inversa?', 'El prestamista determina elegibilidad, underwriting, términos, condiciones, aprobación y autorización de fondos. Escrow coordina la función asignada por las instrucciones aplicables; cada profesional conserva su responsabilidad.'],
      ['¿En qué se diferencia el escrow de cierre de una cuenta o reserva para impuestos y seguros?', 'El escrow de cierre coordina una operación. Un lender o servicer puede usar una reserva o set-aside para impuestos o seguros en algunos productos. Son funciones distintas y no requisitos universales.']
    ]
  },
  sources: {
    eyebrow: 'Fuentes oficiales',
    heading: 'Recursos útiles sobre escrow para hipotecas inversas',
    intro: 'Estas fuentes gubernamentales ofrecen contexto general. No son socios, endorsements, asesoría de préstamos ni descripciones de los procedimientos internos de Downtown.',
    linkLabel: 'Visitar fuente',
    items: [
      { title: 'HUD — Programa Home Equity Conversion Mortgage', href: 'https://www.hud.gov/hud-partners/single-family-hecmhome', description: 'Contexto sobre HECM aseguradas por FHA, prestamistas aprobados, counseling y HECM for Purchase.' },
      { title: 'CFPB — Usar una hipoteca inversa para comprar una vivienda', href: 'https://www.consumerfinance.gov/ask-cfpb/can-i-use-a-reverse-mortgage-loan-to-buy-a-home-en-238/', description: 'Información sobre HECM for Purchase y fondos y costos relacionados con la compra.' },
      { title: 'CFPB — Documentos hipotecarios antes del cierre', href: 'https://www.consumerfinance.gov/ask-cfpb/what-documents-should-i-receive-before-closing-on-a-mortgage-loan-en-181/', description: 'Información sobre disclosures y documentos de liquidación antes del cierre.' },
      { title: 'CFPB — Derecho de rescisión', href: 'https://www.consumerfinance.gov/ask-cfpb/can-i-change-my-mind-after-i-sign-the-loan-closing-documents-for-my-second-mortgage-or-refinance-what-is-the-right-of-rescission-en-186/', description: 'Contexto general para ciertas operaciones que no son de compra; no es una regla universal.' },
      { title: 'California DFPI — Consumer Information: Escrow', href: 'https://dfpi.ca.gov/regulated-industries/escrow-law/consumer-information-escrow/', description: 'Información general para consumidores sobre escrow independiente y controlado en California.' }
    ]
  },
  contact: {
    eyebrow: '¿TIENES UNA OPERACIÓN DE HIPOTECA INVERSA?',
    heading: '¿Tienes preguntas sobre un escrow de hipoteca inversa?',
    body: 'Comunícate con Downtown Community Escrow para consultar sobre la propiedad, el tipo de operación y la información disponible para el cierre.',
    homeContact: 'Información de contacto',
    callLabel: 'Consultar sobre un escrow de hipoteca inversa'
  }
};

export const reverseMortgageContent: Record<Locale, SpecialtyContent> = { en, es };

