import { business } from './business';

const mapsHref = 'https://www.google.com/maps/search/?api=1&query=640%20North%20Tustin%20Ave%2C%20Suite%20202%2C%20Santa%20Ana%2C%20CA%2092705';

export const contactContent = {
  en: {
    meta: {
      title: 'Contact Downtown Community Escrow | Direct Office Contact',
      description: 'Contact Downtown Community Escrow by phone about residential, commercial, or specialized escrow questions.'
    },
    skipLink: 'Skip to main content',
    wordmarkLabel: 'Downtown Community Escrow home',
    breadcrumbLabel: 'Breadcrumb',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Contact',
    hero: {
      eyebrow: 'CONTACT DOWNTOWN',
      heading: "Let's Talk About Your Escrow Needs.",
      intro: 'Have a question about a residential, commercial, or specialized real estate transaction? Contact Downtown Community Escrow to discuss your inquiry.',
      primaryCta: 'Call Downtown',
      secondaryCta: 'Contact information',
      marker: 'DCE',
      markerLabel: 'Direct contact'
    },
    information: {
      eyebrow: 'Contact information',
      heading: 'Verified business information.',
      intro: 'Use the confirmed phone number and office address below. Hours and a public business email are not published because they have not been verified for this project.',
      items: [
        ['Company', business.legalName, ''],
        ['Phone', business.phoneDisplay, business.phoneHref],
        ['Office', `${business.addressLine}, ${business.cityLine}`, '']
      ]
    },
    message: {
      eyebrow: 'DIRECT CONTACT',
      heading: 'Call Our Office',
      intro: 'Speak with Downtown about your escrow inquiry.',
      safety: 'Please do not share bank information, wire instructions, Social Security numbers, account numbers, or confidential information through an unapproved channel.',
      callLabel: 'Verified office number',
      note: 'Call Downtown to discuss your question and the appropriate next conversation.',
      callAction: 'Call Downtown'
    },
    office: {
      eyebrow: 'Visit our office',
      heading: 'Visit Our Office',
      intro: 'Use the confirmed address to review the location or open directions in Google Maps. Office hours and walk-in availability are not stated because they are not verified.',
      addressLabel: 'Office address',
      directions: 'Get Directions',
      mapsHref
    },
    faq: {
      eyebrow: 'Contact questions',
      heading: 'Before you contact Downtown.',
      intro: 'Straightforward answers based on currently confirmed business information.',
      items: [
        ['Where is Downtown Community Escrow located?', `${business.legalName} has an office at ${business.addressLine}, ${business.cityLine}.`],
        ['How can I contact Downtown?', `Call ${business.phoneDisplay} to speak with Downtown about your escrow inquiry.`],
        ['What information should I have ready?', 'Have the property address or general location, transaction type, your role, the escrow specialty involved, and the questions you want to discuss. Do not send banking, wire, Social Security, or other confidential information through a general inquiry.'],
        ['Can I ask about a specific escrow service?', 'Yes. Downtown has dedicated pages for manufactured and mobile homes, short sales, probate, reverse mortgages, residential transactions, commercial real estate transactions, and wholesale real estate escrow. The company can confirm whether a particular matter is within its current scope.']
      ]
    },
    finalAction: {
      eyebrow: 'A direct contact option',
      heading: 'Ready to discuss your escrow question?',
      body: 'Call Downtown Community Escrow using the verified office number.',
      action: 'Contact Downtown'
    }
  },
  es: {
    meta: {
      title: 'Contacto | Downtown Community Escrow',
      description: 'Comunícate por teléfono con Downtown Community Escrow para preguntas sobre operaciones residenciales, comerciales o especializadas de escrow.'
    },
    skipLink: 'Ir al contenido principal',
    wordmarkLabel: 'Inicio de Downtown Community Escrow',
    breadcrumbLabel: 'Ruta de navegación',
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Contacto',
    hero: {
      eyebrow: 'CONTACTA A DOWNTOWN',
      heading: 'Hablemos sobre tu operación de escrow.',
      intro: '¿Tienes preguntas sobre una operación inmobiliaria residencial, comercial o especializada? Comunícate con Downtown Community Escrow para conversar sobre tu consulta.',
      primaryCta: 'Llamar a Downtown',
      secondaryCta: 'Información de contacto',
      marker: 'DCE',
      markerLabel: 'Contacto directo'
    },
    information: {
      eyebrow: 'Información de contacto',
      heading: 'Información empresarial verificada.',
      intro: 'Utiliza el teléfono y la dirección confirmados. No publicamos horarios ni correo empresarial porque todavía no están verificados para este proyecto.',
      items: [
        ['Compañía', business.legalName, ''],
        ['Teléfono', business.phoneDisplay, business.phoneHref],
        ['Oficina', `${business.addressLine}, ${business.cityLine}`, '']
      ]
    },
    message: {
      eyebrow: 'CONTACTO DIRECTO',
      heading: 'Llama a nuestra oficina',
      intro: 'Comunícate con Downtown para consultar sobre tu operación de escrow.',
      safety: 'No compartas información bancaria, instrucciones de transferencia, números de Seguro Social, números de cuenta u otra información confidencial mediante un canal no aprobado.',
      callLabel: 'Número de oficina verificado',
      note: 'Llama a Downtown para conversar sobre tu pregunta y el siguiente paso apropiado.',
      callAction: 'Llamar a Downtown'
    },
    office: {
      eyebrow: 'Visita nuestra oficina',
      heading: 'Visita nuestra oficina',
      intro: 'Utiliza la dirección confirmada para consultar la ubicación o abrir indicaciones en Google Maps. No indicamos horarios ni atención sin cita porque no están verificados.',
      addressLabel: 'Dirección de la oficina',
      directions: 'Cómo llegar',
      mapsHref
    },
    faq: {
      eyebrow: 'Preguntas de contacto',
      heading: 'Antes de contactar a Downtown.',
      intro: 'Respuestas directas basadas en la información empresarial actualmente confirmada.',
      items: [
        ['¿Dónde está Downtown Community Escrow?', `${business.legalName} tiene una oficina en ${business.addressLine}, ${business.cityLine}.`],
        ['¿Cómo puedo contactar a Downtown?', `Llama al ${business.phoneDisplay} para conversar con Downtown sobre tu consulta de escrow.`],
        ['¿Qué información debo tener preparada?', 'Ten a la mano la dirección o ubicación general de la propiedad, el tipo de operación, tu función, la especialidad de escrow y las preguntas que deseas consultar. No envíes datos bancarios, instrucciones de transferencia, números de Seguro Social u otra información confidencial en una consulta general.'],
        ['¿Puedo preguntar por un servicio de escrow específico?', 'Sí. Downtown tiene páginas para casas manufacturadas y móviles, short sales, probate, hipotecas inversas, operaciones residenciales y bienes raíces comerciales. La compañía puede confirmar si un caso particular está dentro de su alcance actual.']
      ]
    },
    finalAction: {
      eyebrow: 'Una opción de contacto directo',
      heading: '¿Lista o listo para consultar tu pregunta de escrow?',
      body: 'Llama a Downtown Community Escrow mediante el número verificado de la oficina.',
      action: 'Contactar a Downtown'
    }
  }
} as const;
