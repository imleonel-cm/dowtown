import { business } from './business';

const mapsHref = 'https://www.google.com/maps/search/?api=1&query=640%20North%20Tustin%20Ave%2C%20Suite%20202%2C%20Santa%20Ana%2C%20CA%2092705';

export const contactContent = {
  en: {
    meta: {
      title: 'Contact Downtown Community Escrow | Santa Ana',
      description: 'Contact Downtown Community Escrow by phone or find the verified Santa Ana office address for questions about specialized escrow services.'
    },
    skipLink: 'Skip to main content',
    wordmarkLabel: 'Downtown Community Escrow home',
    breadcrumbLabel: 'Breadcrumb',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Contact',
    hero: {
      eyebrow: 'Contact Downtown',
      heading: 'Contact Downtown Community Escrow.',
      intro: 'Call our Santa Ana office to discuss your property, transaction, and the escrow specialty that may fit your question.',
      primaryCta: 'Call Downtown',
      secondaryCta: 'Send us a message',
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
      eyebrow: 'Send us a message',
      heading: 'Online message delivery is not connected yet.',
      intro: 'The form is shown in a disabled state so the site does not imply that a message will be received. Please call Downtown for an active contact method.',
      safety: 'Do not include bank information, wire instructions, Social Security numbers, account numbers, or other confidential information in a general contact message.',
      fields: {
        name: 'Full name',
        phone: 'Phone number',
        service: 'Escrow topic',
        servicePlaceholder: 'Choose a topic',
        message: 'How can we help?',
        submit: 'Send message — not available'
      },
      topics: ['Manufactured or mobile home', 'Short sale', 'Probate', 'Reverse mortgage', 'Residential', 'Commercial', 'General question'],
      status: 'Online submissions are not currently available. Call Downtown instead.',
      callAction: 'Call Downtown'
    },
    office: {
      eyebrow: 'Visit our office',
      heading: 'Downtown Community Escrow in Santa Ana.',
      intro: 'Use the confirmed address to review the location or open directions in Google Maps. Office hours and walk-in availability are not stated because they are not verified.',
      addressLabel: 'Office address',
      directions: 'Get directions',
      mapsHref
    },
    faq: {
      eyebrow: 'Contact questions',
      heading: 'Before you contact Downtown.',
      intro: 'Straightforward answers based on currently confirmed business information.',
      items: [
        ['Where is Downtown Community Escrow located?', `${business.legalName} has an office at ${business.addressLine}, ${business.cityLine}.`],
        ['How can I contact Downtown?', `Call ${business.phoneDisplay}. An online form and public business email are not currently available on this site.`],
        ['What information should I have ready?', 'Have the property address or general location, transaction type, your role, the escrow specialty involved, and the questions you want to discuss. Do not send banking, wire, Social Security, or other confidential information through a general inquiry.'],
        ['Can I ask about a specific escrow service?', 'Yes. Downtown has dedicated pages for manufactured and mobile homes, short sales, probate, reverse mortgages, residential transactions, and commercial real estate transactions. The company can confirm whether a particular matter is within its current scope.']
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
      title: 'Contacto | Downtown Community Escrow en Santa Ana',
      description: 'Contacta a Downtown Community Escrow por teléfono o consulta la dirección verificada de su oficina en Santa Ana para preguntas de escrow.'
    },
    skipLink: 'Ir al contenido principal',
    wordmarkLabel: 'Inicio de Downtown Community Escrow',
    breadcrumbLabel: 'Ruta de navegación',
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Contacto',
    hero: {
      eyebrow: 'Contactar a Downtown',
      heading: 'Contacta a Downtown Community Escrow.',
      intro: 'Llama a nuestra oficina en Santa Ana para conversar sobre tu propiedad, operación y la especialidad de escrow relacionada con tu consulta.',
      primaryCta: 'Llamar a Downtown',
      secondaryCta: 'Enviar un mensaje',
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
      eyebrow: 'Envíanos un mensaje',
      heading: 'El envío de mensajes en línea todavía no está conectado.',
      intro: 'El formulario aparece deshabilitado para no insinuar que se recibirá un mensaje. Llama a Downtown para utilizar un medio de contacto activo.',
      safety: 'No incluyas información bancaria, instrucciones de transferencia, números de Seguro Social, números de cuenta u otra información confidencial en un mensaje general.',
      fields: {
        name: 'Nombre completo',
        phone: 'Número de teléfono',
        service: 'Tema de escrow',
        servicePlaceholder: 'Elige un tema',
        message: '¿Cómo podemos ayudarte?',
        submit: 'Enviar mensaje — no disponible'
      },
      topics: ['Casa manufacturada o móvil', 'Short sale', 'Probate', 'Hipoteca inversa', 'Residencial', 'Comercial', 'Pregunta general'],
      status: 'Los envíos en línea no están disponibles actualmente. Llama a Downtown.',
      callAction: 'Llamar a Downtown'
    },
    office: {
      eyebrow: 'Visita nuestra oficina',
      heading: 'Downtown Community Escrow en Santa Ana.',
      intro: 'Utiliza la dirección confirmada para consultar la ubicación o abrir indicaciones en Google Maps. No indicamos horarios ni atención sin cita porque no están verificados.',
      addressLabel: 'Dirección de la oficina',
      directions: 'Obtener indicaciones',
      mapsHref
    },
    faq: {
      eyebrow: 'Preguntas de contacto',
      heading: 'Antes de contactar a Downtown.',
      intro: 'Respuestas directas basadas en la información empresarial actualmente confirmada.',
      items: [
        ['¿Dónde está Downtown Community Escrow?', `${business.legalName} tiene una oficina en ${business.addressLine}, ${business.cityLine}.`],
        ['¿Cómo puedo contactar a Downtown?', `Llama al ${business.phoneDisplay}. Este sitio todavía no ofrece un formulario en línea ni publica un correo empresarial.`],
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
