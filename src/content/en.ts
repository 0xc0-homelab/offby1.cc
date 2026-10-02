import type { Content } from "./types";

// Sample copy from the design system: provisional until the real offering
// (services, standards, response times) replaces it. README.md, Content.
export const en: Content = {
  lang: "en",
  meta: {
    title: "offby1 — Cybersecurity audits and consulting",
    description:
      "Security audits, penetration testing and consulting for teams that can't afford to be off by one.",
  },
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Method", href: "#method" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Request an audit", href: "#contact" },
    theme: { label: "Theme", system: "Match the system", light: "Light", dark: "Dark" },
  },
  hero: {
    eyebrow: "Cybersecurity audits and consulting",
    title: ["We find the flaw ", "before they do."],
    lede: "Security audits, penetration testing and consulting for teams that can't afford to be off by one.",
    primary: { label: "Request an audit", href: "#contact" },
    secondary: { label: "See services", href: "#services" },
    note: "Fixed scope and NDA before we start.",
    terminal: {
      title: "audit.log",
      status: "Running",
      label: "Sample log of an audit",
      lines: [
        { kind: "cmd", text: "offby1 audit --scope app.client.com" },
        { kind: "out", text: "214 endpoints · 3 roles · 2 environments" },
        { kind: "finding", level: "critical", text: "SQL injection in /search?q=" },
        { kind: "finding", level: "high", text: "IDOR in /api/v2/invoices/{id}" },
        { kind: "finding", level: "medium", text: "Missing CSP on /dashboard" },
        { kind: "finding", level: "low", text: "Server version disclosed" },
        { kind: "ok", text: "prioritised report · 4 findings" },
      ],
    },
  },
  services: {
    id: "services",
    eyebrow: "Services",
    title: "What we do",
    lede: "Three ways to work with us, one outcome: you know what's wrong, how much it matters and how to fix it.",
    cards: [
      {
        icon: "shield-check",
        title: "Security audit",
        description: "We review infrastructure, code and configuration, and hand you a report prioritised by risk.",
        items: ["Architecture review", "Server and cloud hardening", "Source code analysis"],
      },
      {
        icon: "scan-search",
        title: "Penetration testing",
        description: "We attack your application the way an outsider would, inside a fixed scope agreed in writing.",
        items: ["Web applications and APIs", "Exposed infrastructure", "Retest of what you fixed"],
      },
      {
        icon: "clipboard-check",
        title: "Consulting & compliance",
        description: "We get you to the standard that applies, and keep you there without slowing your team down.",
        items: ["ENS and ISO 27001", "NIS2 and DORA", "Policies and incident response"],
      },
    ],
  },
  method: {
    id: "method",
    eyebrow: "Method",
    title: "How we work",
    lede: "Four steps, every time. You always know what we're testing and what comes next.",
    steps: [
      { title: "Scope", body: "We agree what gets tested, when, and within which limits. The NDA is signed before we touch anything." },
      { title: "Test", body: "We audit with tools and by hand. If something is critical, you hear from us the same day." },
      { title: "Report", body: "Every finding with its severity, its business impact and how to fix it, ordered from highest to lowest." },
      { title: "Retest", body: "Once you've fixed it, we test it again and mark it as remediated." },
    ],
    report: {
      label: "Sample report",
      title: "Findings summary",
      columns: ["Severity", "Finding", "Status"],
      findings: [
        { level: "critical", title: "SQL injection in search", status: "Fixed", remediated: true },
        { level: "high", title: "IDOR in the invoices API", status: "Fixed", remediated: true },
        { level: "medium", title: "Missing CSP on the dashboard", status: "In progress" },
        { level: "low", title: "Server version disclosed", status: "Accepted" },
      ],
    },
  },
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "Tell us what you need",
    lede: "We'll reply with a proposed scope and a timeline. No commitment, no sales calls.",
    form: {
      name: "Name",
      email: "Work email",
      emailPlaceholder: "name@company.com",
      company: "Company",
      need: "What do you need?",
      pick: "Choose one",
      options: ["Security audit", "Penetration testing", "Consulting & compliance", "Something else"],
      message: "Tell us the context",
      messageHint: "Rough scope, timelines, regulations that apply. Nothing confidential yet.",
      optional: "(optional)",
      consent: ["I accept the ", { label: "privacy policy", href: "/en/privacy/" }, " and agree that offby1 may contact me about this request."],
      submit: "Request a proposal",
      sending: "Sending",
      note: "We reply within one business day.",
      sent: "Received. We'll write back within one business day.",
      failed: "We couldn't send it. Try again, or write to hola@offby1.cc.",
      errors: {
        required: "This field is required.",
        email: "Check the format: name@company.com",
        consent: "We need your consent to reply.",
        tooLong: "That's too long. Try a shorter version.",
      },
    },
  },
  footer: {
    tagline: "Cybersecurity audits and consulting for teams that can't afford to be off by one.",
    email: "hola@offby1.cc",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Security audit", href: "#services" },
          { label: "Penetration testing", href: "#services" },
          { label: "Consulting & compliance", href: "#services" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Method", href: "#method" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Security",
        links: [
          { label: "security.txt", href: "/.well-known/security.txt" },
          { label: "Responsible disclosure", href: "/en/disclosure/" },
        ],
      },
    ],
    legal: [
      { label: "Legal notice", href: "/en/legal/" },
      { label: "Privacy", href: "/en/privacy/" },
      { label: "Cookies", href: "/en/cookies/" },
    ],
  },
  pages: {
    back: { label: "Back to home", href: "/en/" },
    pending: "We're finishing this page. In the meantime, write to hola@offby1.cc with any question.",
    list: {
      legal: { path: "/en/legal/", title: "Legal notice" },
      privacy: { path: "/en/privacy/", title: "Privacy policy" },
      cookies: { path: "/en/cookies/", title: "Cookies" },
      disclosure: {
        path: "/en/disclosure/",
        title: "Responsible disclosure",
        body: [
          "If you've found a security flaw in offby1.cc or any system of ours, we want to know.",
          "Write to security@offby1.cc with what you saw and how to reproduce it. We'll reply within 3 business days and keep you posted.",
          "Don't access other people's data, don't degrade the service, and give us reasonable time to fix it before you publish. If you do that, we won't take any action against you.",
        ],
      },
    },
  },
};
