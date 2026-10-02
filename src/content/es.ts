import { OWNER } from "./owner";
import type { Content } from "./types";

// Sample copy from the design system: provisional until the real offering
// (services, standards, response times) replaces it. README.md, Content.
export const es: Content = {
  lang: "es",
  meta: {
    title: "offby1 — Auditoría y consultoría de ciberseguridad",
    description:
      "Auditorías de seguridad, pruebas de intrusión y consultoría para equipos que no pueden permitirse un error de uno.",
  },
  nav: {
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Método", href: "#metodo" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: { label: "Solicitar auditoría", href: "#contacto" },
    theme: { label: "Tema", system: "Como el sistema", light: "Claro", dark: "Oscuro" },
  },
  hero: {
    eyebrow: "Auditoría y consultoría de ciberseguridad",
    title: ["Encontramos el fallo ", "antes que ellos."],
    lede: "Auditorías de seguridad, pruebas de intrusión y consultoría para equipos que no pueden permitirse un error de uno.",
    primary: { label: "Solicitar auditoría", href: "#contacto" },
    secondary: { label: "Ver servicios", href: "#servicios" },
    note: "Alcance cerrado y NDA antes de empezar.",
    terminal: {
      title: "audit.log",
      status: "En curso",
      label: "Ejemplo de registro de una auditoría",
      lines: [
        { kind: "cmd", text: "offby1 audit --scope app.cliente.es" },
        { kind: "out", text: "214 endpoints · 3 roles · 2 entornos" },
        { kind: "finding", level: "critical", text: "Inyección SQL en /buscar?q=" },
        { kind: "finding", level: "high", text: "IDOR en /api/v2/facturas/{id}" },
        { kind: "finding", level: "medium", text: "CSP ausente en /panel" },
        { kind: "finding", level: "low", text: "Versión de servidor expuesta" },
        { kind: "ok", text: "informe priorizado · 4 hallazgos" },
      ],
    },
  },
  services: {
    id: "servicios",
    eyebrow: "Servicios",
    title: "Qué hacemos",
    lede: "Tres formas de trabajar, con el mismo resultado: sabes qué está mal, cuánto importa y cómo se arregla.",
    cards: [
      {
        icon: "shield-check",
        title: "Auditoría de seguridad",
        description: "Revisamos infraestructura, código y configuración, y entregamos un informe priorizado por riesgo.",
        items: ["Revisión de arquitectura", "Hardening de servidores y nube", "Análisis de código fuente"],
      },
      {
        icon: "scan-search",
        title: "Pruebas de intrusión",
        description: "Atacamos tu aplicación como lo haría alguien de fuera, dentro de un alcance cerrado y por escrito.",
        items: ["Aplicaciones web y APIs", "Infraestructura expuesta", "Retest de lo remediado"],
      },
      {
        icon: "clipboard-check",
        title: "Consultoría y cumplimiento",
        description: "Te acompañamos para llegar a la norma que aplica y mantenerla sin frenar a tu equipo.",
        items: ["ENS e ISO 27001", "NIS2 y DORA", "Políticas y respuesta a incidentes"],
      },
    ],
  },
  method: {
    id: "metodo",
    eyebrow: "Método",
    title: "Cómo trabajamos",
    lede: "Cuatro pasos, siempre los mismos. Sabes en cada momento qué estamos probando y qué viene después.",
    steps: [
      { title: "Alcance", body: "Acordamos qué se prueba, cuándo y con qué límites. Firmamos el NDA antes de tocar nada." },
      { title: "Prueba", body: "Auditamos con herramientas y a mano. Si algo es crítico, te avisamos ese mismo día." },
      { title: "Informe", body: "Cada hallazgo con su severidad, su impacto en el negocio y cómo arreglarlo, de mayor a menor." },
      { title: "Retest", body: "Cuando lo hayas corregido, volvemos a probarlo y lo marcamos como remediado." },
    ],
    report: {
      label: "Ejemplo de informe",
      title: "Resumen de hallazgos",
      columns: ["Severidad", "Hallazgo", "Estado"],
      findings: [
        { level: "critical", title: "Inyección SQL en el buscador", status: "Remediado", remediated: true },
        { level: "high", title: "IDOR en la API de facturas", status: "Remediado", remediated: true },
        { level: "medium", title: "CSP ausente en el panel", status: "En curso" },
        { level: "low", title: "Versión de servidor expuesta", status: "Aceptado" },
      ],
    },
  },
  contact: {
    id: "contacto",
    eyebrow: "Contacto",
    title: "Cuéntanos qué necesitas",
    lede: "Te respondemos con una propuesta de alcance y un plazo. Sin compromiso y sin llamadas de venta.",
    form: {
      name: "Nombre",
      email: "Email corporativo",
      emailPlaceholder: "nombre@empresa.com",
      company: "Empresa",
      need: "¿Qué necesitas?",
      pick: "Elige una opción",
      options: ["Auditoría de seguridad", "Pruebas de intrusión", "Consultoría y cumplimiento", "Informar de un fallo de seguridad", "Otra cosa"],
      message: "Cuéntanos el contexto",
      messageHint: "Alcance aproximado, plazos, normativa que aplica. Nada confidencial todavía.",
      optional: "(opcional)",
      consent: ["Acepto la ", { label: "política de privacidad", href: "/privacidad/" }, " y que offby1 me contacte sobre esta solicitud."],
      submit: "Solicitar propuesta",
      sending: "Enviando",
      note: "Respondemos en menos de 24 horas laborables.",
      sent: "Recibido. Te escribimos en menos de 24 horas laborables.",
      failed: "No hemos podido enviarlo. Inténtalo de nuevo en unos minutos.",
      errors: {
        required: "Este campo es obligatorio.",
        email: "Revisa el formato: nombre@empresa.com",
        consent: "Necesitamos tu consentimiento para responderte.",
        tooLong: "Es demasiado largo. Resúmelo un poco.",
      },
    },
  },
  footer: {
    tagline: "Auditoría y consultoría de ciberseguridad para equipos que no pueden permitirse un error de uno.",
    columns: [
      {
        title: "Servicios",
        links: [
          { label: "Auditoría de seguridad", href: "#servicios" },
          { label: "Pruebas de intrusión", href: "#servicios" },
          { label: "Consultoría y cumplimiento", href: "#servicios" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Método", href: "#metodo" },
          { label: "Contacto", href: "#contacto" },
        ],
      },
      {
        title: "Seguridad",
        links: [
          { label: "security.txt", href: "/.well-known/security.txt" },
          { label: "Divulgación responsable", href: "/divulgacion-responsable/" },
        ],
      },
    ],
    legal: [
      { label: "Aviso legal", href: "/aviso-legal/" },
      { label: "Privacidad", href: "/privacidad/" },
      { label: "Cookies", href: "/cookies/" },
    ],
  },
  pages: {
    back: { label: "Volver al inicio", href: "/" },
    updated: "Última actualización",
    list: {
      legal: {
        path: "/aviso-legal/",
        title: "Aviso legal",
        noindex: true,
        sections: [
          {
            heading: "Titular",
            paragraphs: [
              "En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), estos son los datos del titular de offby1.cc:",
            ],
            items: [
              `Titular: ${OWNER.name}`,
              `NIF: ${OWNER.taxId}`,
              `Domicilio: ${OWNER.address}`,
              `Correo electrónico: ${OWNER.email}`,
            ],
          },
          {
            heading: "Qué es esta web",
            paragraphs: [
              "offby1.cc presenta los servicios de auditoría de seguridad, pruebas de intrusión y consultoría de offby1, y permite pedir una propuesta a través del formulario de contacto. Usarla no supone ningún contrato: cada encargo se acuerda por escrito, con su alcance.",
            ],
          },
          {
            heading: "Contenido",
            paragraphs: [
              "Cuidamos que la información sea correcta y esté al día, pero es orientativa y puede cambiar sin aviso. Los ejemplos de auditoría que aparecen en la web (registros, hallazgos, informes) son ilustrativos y no corresponden a ningún cliente.",
              "Si enlazamos a webs de terceros, no respondemos de lo que publiquen.",
            ],
          },
          {
            heading: "Propiedad intelectual",
            paragraphs: [
              "Los textos, el diseño y el logotipo de offby1 son de su titular. Puedes citarlos indicando la fuente; para cualquier otro uso, pide permiso antes. Las tipografías Instrument Sans y JetBrains Mono se usan bajo la licencia SIL Open Font License.",
            ],
          },
          {
            heading: "Legislación aplicable",
            paragraphs: ["Este aviso legal se rige por la legislación española."],
          },
        ],
      },
      privacy: {
        path: "/privacidad/",
        title: "Política de privacidad",
        noindex: true,
        sections: [
          {
            heading: "Responsable",
            items: [
              `Responsable: ${OWNER.name}`,
              `NIF: ${OWNER.taxId}`,
              `Domicilio: ${OWNER.address}`,
              `Correo electrónico: ${OWNER.email}`,
            ],
          },
          {
            heading: "Qué datos tratamos",
            items: [
              "Si usas el formulario de contacto: tu nombre y tu email y, si los indicas, tu empresa, el servicio que te interesa y el contexto que nos cuentes.",
              "De cada visita: la dirección IP, la fecha y hora, la página pedida y el navegador, en los registros del servidor.",
            ],
          },
          {
            heading: "Para qué y con qué base",
            items: [
              "Responder a tu solicitud y, si nos lo pides, preparar una propuesta. La base es tu consentimiento (art. 6.1.a RGPD), que das al enviar el formulario y puedes retirar cuando quieras.",
              "Mantener la web segura y en marcha: detectar abusos y ataques. La base es nuestro interés legítimo (art. 6.1.f RGPD).",
            ],
            paragraphs: [
              "No usamos tus datos para publicidad, no hacemos perfiles y no tomamos decisiones automatizadas sobre ti.",
            ],
          },
          {
            heading: "Cuánto tiempo",
            items: [
              "Los del formulario: lo necesario para atender tu solicitud y, como máximo, 12 meses desde el último contacto. Si acordamos un encargo, lo que exija la ley.",
              "Los registros del servidor: 30 días. Las copias de seguridad del sistema pueden conservarlos hasta 6 meses.",
            ],
          },
          {
            heading: "Quién más los trata",
            items: [
              "Cloudflare, Inc. sirve la web y la protege frente a ataques: las visitas pasan por su red. Puede tratar datos fuera de la Unión Europea, con las garantías del Marco de Privacidad de Datos UE-EE. UU. y cláusulas contractuales tipo.",
              "Hetzner Online GmbH aloja nuestros servidores, en centros de datos de la Unión Europea.",
            ],
            paragraphs: ["No cedemos tus datos a nadie más, salvo obligación legal."],
          },
          {
            heading: "Tus derechos",
            paragraphs: [
              `Puedes pedir el acceso, la rectificación, la supresión, la limitación o la portabilidad de tus datos, oponerte a su tratamiento y retirar tu consentimiento escribiendo a ${OWNER.email}, desde la dirección con la que nos contactaste.`,
              "Si crees que no hemos tratado bien tus datos, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).",
            ],
          },
          {
            heading: "Cookies",
            paragraphs: ["Esta web no usa cookies. Los detalles, en la página de cookies."],
          },
        ],
      },
      cookies: {
        path: "/cookies/",
        title: "Cookies",
        sections: [
          {
            paragraphs: [
              "Esta web no instala cookies: ni propias ni de terceros, ni de análisis ni de publicidad. Por eso no te mostramos ningún aviso ni te pedimos consentimiento.",
            ],
          },
          {
            heading: "Lo único que guarda tu navegador",
            paragraphs: [
              "Si eliges el tema claro u oscuro, tu navegador guarda esa preferencia en su almacenamiento local (la clave offby1-theme) para recordarla en tu próxima visita. Solo se guarda si la eliges, nunca se envía a nuestro servidor y desaparece si vuelves a «Como el sistema» o borras los datos del sitio.",
            ],
          },
          {
            heading: "Si esto cambia",
            paragraphs: [
              "Si algún día usamos cookies, actualizaremos esta página y te pediremos permiso antes de instalar cualquiera que no sea estrictamente necesaria.",
            ],
          },
        ],
      },
      disclosure: {
        path: "/divulgacion-responsable/",
        title: "Divulgación responsable",
        sections: [
          {
            paragraphs: [
              "Si has encontrado un fallo de seguridad en offby1.cc o en cualquier sistema nuestro, queremos saberlo.",
              "Usa el formulario de contacto y elige «Informar de un fallo de seguridad». Cuéntanos qué has visto y cómo reproducirlo. Te respondemos en menos de 3 días laborables y te contamos cómo vamos.",
              "No accedas a datos de otras personas, no degrades el servicio y danos un plazo razonable para corregirlo antes de publicarlo. Si lo haces así, no emprenderemos ninguna acción contra ti.",
            ],
          },
        ],
      },
    },
  },
};
