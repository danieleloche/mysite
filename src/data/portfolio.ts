export interface ArchitectureStep {
  label: string;
  sublabel?: string;
}

export interface ProjectItem {
  id: "qut" | "domo" | "leonardo";
  index: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  folderColor: "obsidian" | "cobalt" | "ochre";
  tabPosition: "left" | "center" | "right";
  problem: string;
  solution: string;
  architectureFlow: ArchitectureStep[];
  techStack: string[];
  keyMetrics: string[];
  media: {
    cover: string;
    demoVideo?: string;
    screenshots?: string[];
    placeholderLabel: string;
  };
  links: {
    live?: string;
    github?: string;
    videoDemo?: string;
  };
}

export interface TechCategory {
  title: string;
  tag: string;
  skills: { name: string; context?: string }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: {
      regular1: string;
      pixelAccent: string;
      regular2: string;
    };
    statusBadge: string;
    location: string;
    university: string;
    degree: string;
    gpa: string;
    internship: string;
    subtitle: string;
    bioParagraphs: string[];
    handwrittenNote: string;
    email: string;
    github: string;
    linkedin: string;
    cvUrl: string;
    avatar: string;
  };
  techCategories: TechCategory[];
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Daniele Loche",
    role: "Computer Engineering Student & Software Builder",
    headline: {
      regular1: "PROGETTO ARCHITETTURE",
      pixelAccent: "AI & SOFTWARE",
      regular2: "FULL-STACK AD ALTO IMPATTO",
    },
    statusBadge: "DISPONIBILE PER TIROCINI & AUTOMAZIONI AI",
    location: "Cagliari, Italia",
    university: "Università degli Studi di Cagliari (UniCa)",
    degree: "Laurea Triennale in Ingegneria Elettronica ed Informatica",
    gpa: "Media 28.76 / 30",
    internship: "Leonardo CAE Advanced Jet Training (Decimomannu) — PMO & Fleet Analytics Intern",
    subtitle:
      "Studente di Ingegneria Informatica. Progetto e sviluppo agenti AI, automazioni di workflow operativi e applicazioni web full-stack con un approccio pragmatico orientato al prodotto reale.",
    bioParagraphs: [
      "Studio Ingegneria Elettronica ed Informatica presso l'Università degli Studi di Cagliari con una media ponderata di 28.76/30. Ho una forte passione per la convergenza tra architetture software moderne, modelli linguistici avanzati e ottimizzazione dei processi industriali.",
      "Durante il tirocinio curriculare per Leonardo CAE Advanced Jet Training (Base Aerea di Decimomannu), ho ideato e implementato pipeline ETL automatizzate con Power Query e modelli dati complessi in Power Pivot, normalizzando oltre 10.000 log di manutenzione per la flotta di velivoli addestratori avanzati M-346.",
      "Parallelamente alla formazione accademica, sviluppo soluzioni software proprietarie: da agenti vocali WhatsApp per la prenotazione autonoma di servizi (Qut) a gestionali bento per l'hospitality (Domo).",
    ],
    handwrittenNote: "Ciao, sono Daniele",
    email: "lochedaniele03@gmail.com",
    github: "https://github.com/danieleloche",
    linkedin: "https://linkedin.com/in/danieleloche",
    cvUrl: "/media/profile/cv-daniele-loche.pdf",
    avatar: "/media/profile/portrait.png",
  },
  techCategories: [
    {
      title: "AI & Automazioni",
      tag: "LLM / AGENTS",
      skills: [
        { name: "Gemini API & 2.0 Flash", context: "Multimodal & Audio" },
        { name: "WhatsApp Cloud API", context: "Webhooks & Messaggistica" },
        { name: "Workflow Orchestration", context: "Pipelines asincrone" },
        { name: "Prompt Architecture", context: "Structured outputs (JSON)" },
        { name: "Function Calling", context: "Integrazione API esterne" },
      ],
    },
    {
      title: "Full-Stack Web",
      tag: "FRONTEND / BACKEND",
      skills: [
        { name: "Next.js 15 (App Router)", context: "SSR, Server Actions" },
        { name: "TypeScript", context: "Strict typing end-to-end" },
        { name: "Tailwind CSS", context: "Sistemi di design & CSS variables" },
        { name: "Framer Motion", context: "Micro-interazioni & fisica" },
        { name: "Prisma ORM", context: "Relational modeling" },
        { name: "Supabase & PostgreSQL", context: "Auth, RLS, Storage" },
      ],
    },
    {
      title: "Dati & Analytics",
      tag: "ETL / PIPELINES",
      skills: [
        { name: "Power Query (M Language)", context: "Pulizia dati & normalizzazione" },
        { name: "Power Pivot & DAX", context: "Modelli relazionali complessi" },
        { name: "SQL Avanzato", context: "Query analitiche & indicizzazione" },
        { name: "Process Mining", context: "Analisi tempi di manutenzione" },
      ],
    },
    {
      title: "Sistemi & Ingegneria",
      tag: "CORE / HARDWARE",
      skills: [
        { name: "Architettura Calcolatori", context: "CPU, gerarchie memoria, cache" },
        { name: "Reti di Calcolatori", context: "TCP/IP, routing, sicurezza" },
        { name: "Git & GitHub Actions", context: "CI/CD & release management" },
        { name: "Linux / POSIX Shell", context: "Ambiente di sviluppo & scripting" },
      ],
    },
  ],
  projects: [
    {
      id: "qut",
      index: "01",
      title: "Qut",
      tagline: "Assistente Vocale AI su WhatsApp per Saloni e Barbershop",
      category: "AI AGENT & FULL-STACK SAAS",
      year: "2024",
      folderColor: "obsidian",
      tabPosition: "left",
      problem:
        "I titolari di saloni e barbieri perdono fino al 25% del loro tempo operativo rispondendo manualmente a messaggi WhatsApp e note vocali per verificare disponibilità e fissare appuntamenti durante il lavoro.",
      solution:
        "Un agente AI end-to-end integrato con le WhatsApp Cloud API in grado di ascoltare e comprendere note vocali, interrogare in tempo reale il calendario Google, proporre fasce orarie libere e registrare conferme sincronizzate su database Supabase in meno di 2 secondi.",
      architectureFlow: [
        { label: "WhatsApp Audio/Text", sublabel: "Webhook Inbound" },
        { label: "Next.js Edge Route", sublabel: "Payload Validation" },
        { label: "Gemini 2.0 Flash", sublabel: "Intent & Audio Extraction" },
        { label: "Google Calendar API", sublabel: "Slot Availability Check" },
        { label: "Supabase DB", sublabel: "Booking & Customer Sync" },
      ],
      techStack: [
        "Next.js 15",
        "TypeScript",
        "WhatsApp Cloud API",
        "Gemini 2.0 Flash",
        "Google Calendar API",
        "Supabase",
        "Tailwind CSS",
      ],
      keyMetrics: [
        "Tempi di risposta < 2.1s per note vocali fino a 30 secondi",
        "Zero sovrapposizioni di orario grazie a lock ottimistico su Calendar",
        "Dashboard amministrativa con anteprima conversazioni e cancellazioni con un clic",
      ],
      media: {
        cover: "/media/qut/cover.png",
        demoVideo: "/media/qut/demo.mp4",
        screenshots: ["/media/qut/screen-1.png"],
        placeholderLabel: "Drop /public/media/qut/cover.png (o demo.mp4)",
      },
      links: {
        live: "https://qut.app",
        github: "https://github.com/danieleloche/qut-ai-booking",
        videoDemo: "/media/qut/demo.mp4",
      },
    },
    {
      id: "domo",
      index: "02",
      title: "Domo",
      tagline: "Concierge Digitale & Guestbook Bento per Affitti Brevi",
      category: "HOSPITALITY WEB APP & AI",
      year: "2024",
      folderColor: "cobalt",
      tabPosition: "center",
      problem:
        "Gli ospiti delle case vacanza contattano ripetutamente gli host per le stesse domande (codice Wi-Fi, gestione riscaldamento, ristoranti locali, orari checkout), mentre manuali cartacei e PDF lunghi vengono ignorati.",
      solution:
        "Una web app responsive in formato bento accessibile via QR code in stanza, dotata di un concierge AI addestrato sulle regole specifiche dell'alloggio per rispondere istantaneamente 24/7 in qualsiasi lingua a ogni esigenza dell'ospite.",
      architectureFlow: [
        { label: "QR Code Scan", sublabel: "Zero Download Guest UI" },
        { label: "Next.js Dynamic Route", sublabel: "Tenant & Room Context" },
        { label: "Prisma + Supabase", sublabel: "House Guidebook Rules" },
        { label: "Gemini Concierge", sublabel: "Multilingual RAG Response" },
        { label: "Host Alert Hub", sublabel: "Critical Requests Forwarding" },
      ],
      techStack: [
        "Next.js 15",
        "React",
        "TypeScript",
        "Prisma ORM",
        "Supabase",
        "Gemini AI",
        "Tailwind CSS",
        "Framer Motion",
      ],
      keyMetrics: [
        "Riduzione del 70% dei messaggi ripetitivi all'host durante il soggiorno",
        "Supporto istantaneo multilingua (Italiano, Inglese, Tedesco, Francese, Spagnolo)",
        "Interfaccia modulare a schede bento con rendering istantaneo sotto i 300ms",
      ],
      media: {
        cover: "/media/domo/cover.png",
        demoVideo: "/media/domo/demo.mp4",
        placeholderLabel: "Drop /public/media/domo/cover.png (o demo.mp4)",
      },
      links: {
        live: "https://domo-guest.app",
        github: "https://github.com/danieleloche/domo-concierge",
        videoDemo: "/media/domo/demo.mp4",
      },
    },
    {
      id: "leonardo",
      index: "03",
      title: "Leonardo CAE Fleet ETL",
      tagline: "Automazione ETL & Analytics Manutenzione Flotta M-346",
      category: "DATA ENGINEERING & ADVANCED JET TRAINING INTERNSHIP",
      year: "2024",
      folderColor: "ochre",
      tabPosition: "right",
      problem:
        "Presso il centro operativo Leonardo CAE Advanced Jet Training, i log di manutenzione e disponibilità dei velivoli M-346 erano distribuiti su fogli di calcolo eterogenei, richiedendo oltre 8 ore settimanali di lavoro manuale per elaborare i report PMO per i vertici operativi.",
      solution:
        "Ho progettato un'architettura ETL interamente automatizzata in Power Query con linguaggio M e modelli relazionali a stella in Power Pivot, capace di normalizzare e validare istantaneamente oltre 10.000 record storici e calcolare KPI critici di flotta in tempo reale per la flotta addestratori M-346.",
      architectureFlow: [
        { label: "Multi-Source Logs", sublabel: "Raw Maintenance Records" },
        { label: "Power Query M", sublabel: "Automated Data Cleansing" },
        { label: "Star Schema", sublabel: "Fact & Dimension Tables" },
        { label: "DAX Measures", sublabel: "MTBF, Turnaround & Readiness" },
        { label: "Executive Dashboard", sublabel: "Weekly PMO Reporting" },
      ],
      techStack: [
        "Power Query (M)",
        "Power Pivot",
        "DAX",
        "Excel Advanced",
        "ETL Modeling",
        "Star Schema",
      ],
      keyMetrics: [
        "Oltre 10.000 log di manutenzione puliti, validati e aggregati",
        "Tempo di generazione report ridotto da 8 ore a meno di 5 minuti",
        "KPI standardizzati: Tasso di Prontezza Operativa e MTBF per componente",
      ],
      media: {
        cover: "/media/leonardo/cover.png",
        placeholderLabel: "Drop /public/media/leonardo/cover.png (schema architetturale)",
      },
      links: {
        github: "https://github.com/danieleloche/leonardo-fleet-etl",
      },
    },
  ],
};
