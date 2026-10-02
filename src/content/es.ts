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
      options: ["Auditoría de seguridad", "Pruebas de intrusión", "Consultoría y cumplimiento", "Otra cosa"],
      message: "Cuéntanos el contexto",
      messageHint: "Alcance aproximado, plazos, normativa que aplica. Nada confidencial todavía.",
      optional: "(opcional)",
      consent: ["Acepto la ", { label: "política de privacidad", href: "/privacidad/" }, " y que offby1 me contacte sobre esta solicitud."],
      submit: "Solicitar propuesta",
      sending: "Enviando",
      note: "Respondemos en menos de 24 horas laborables.",
      sent: "Recibido. Te escribimos en menos de 24 horas laborables.",
      failed: "No hemos podido enviarlo. Inténtalo de nuevo o escríbenos a hola@offby1.cc.",
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
    email: "hola@offby1.cc",
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
    pending: "Estamos terminando este texto. Mientras tanto, escríbenos a hola@offby1.cc con cualquier duda.",
    list: {
      legal: { path: "/aviso-legal/", title: "Aviso legal" },
      privacy: { path: "/privacidad/", title: "Política de privacidad" },
      cookies: { path: "/cookies/", title: "Cookies" },
      disclosure: {
        path: "/divulgacion-responsable/",
        title: "Divulgación responsable",
        body: [
          "Si has encontrado un fallo de seguridad en offby1.cc o en cualquier sistema nuestro, queremos saberlo.",
          "Escríbenos a security@offby1.cc con lo que has visto y cómo reproducirlo. Te respondemos en menos de 3 días laborables y te contamos cómo vamos.",
          "No pidas datos de otras personas, no degrades el servicio y danos un plazo razonable para corregirlo antes de publicarlo. Si lo haces así, no emprenderemos ninguna acción contra ti.",
        ],
      },
    },
  },
};
