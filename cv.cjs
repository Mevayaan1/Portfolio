const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
  LevelFormat,
  TabStopType,
  WidthType,
  Table,
  TableRow,
  TableCell,
  ShadingType,
  VerticalAlign,
} = require("docx");
const fs = require("fs");

// A4 page
const PAGE_W = 11906;
const L_MARGIN = 864; // ~0.6in
const R_MARGIN = 864;
const T_MARGIN = 720;
const B_MARGIN = 720;
const CONTENT_W = PAGE_W - L_MARGIN - R_MARGIN; // 10178 DXA

// Design tokens
const FONT = "Calibri";
const ACCENT = "1B4F8A"; // deep navy blue — professional, ATS-safe
const DARK = "1A1A1A";
const MID = "444444";
const LIGHT = "6B7280";

const XS = 16; // 8pt
const SM = 18; // 9pt
const MD = 20; // 10pt
const LG = 24; // 12pt
const XL = 36; // 18pt

// ─── helpers ───────────────────────────────────────────────────────────────

function hr(color = ACCENT, size = 8) {
  return new Paragraph({
    spacing: { before: 0, after: 0 },
    border: { bottom: { style: BorderStyle.SINGLE, size, color, space: 1 } },
    children: [new TextRun({ text: "", size: 4, font: FONT })],
  });
}

function spacer(pts = 80) {
  return new Paragraph({
    spacing: { before: 0, after: 0 },
    children: [new TextRun({ text: "", size: pts / 5, font: FONT })],
  });
}

function sectionTitle(text) {
  return [
    spacer(100),
    new Paragraph({
      spacing: { before: 0, after: 60 },
      children: [
        new TextRun({
          text: text.toUpperCase(),
          bold: true,
          size: MD,
          font: FONT,
          color: ACCENT,
          characterSpacing: 40,
        }),
      ],
    }),
    hr(ACCENT, 6),
    spacer(60),
  ];
}

function jobBlock(company, location, role, dates) {
  const TAB = CONTENT_W;
  return [
    new Paragraph({
      spacing: { before: 100, after: 0 },
      tabStops: [{ type: TabStopType.RIGHT, position: TAB }],
      children: [
        new TextRun({
          text: company,
          bold: true,
          size: MD,
          font: FONT,
          color: DARK,
        }),
        new TextRun({ text: "\t", size: MD, font: FONT }),
        new TextRun({ text: location, size: SM, font: FONT, color: LIGHT }),
      ],
    }),
    new Paragraph({
      spacing: { before: 20, after: 60 },
      tabStops: [{ type: TabStopType.RIGHT, position: TAB }],
      children: [
        new TextRun({
          text: role,
          italics: true,
          size: SM,
          font: FONT,
          color: MID,
        }),
        new TextRun({ text: "\t", size: SM, font: FONT }),
        new TextRun({ text: dates, size: SM, font: FONT, color: LIGHT }),
      ],
    }),
  ];
}

function projBlock(title, stack, dates) {
  const TAB = CONTENT_W;
  return new Paragraph({
    spacing: { before: 100, after: 60 },
    tabStops: [{ type: TabStopType.RIGHT, position: TAB }],
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: MD,
        font: FONT,
        color: DARK,
      }),
      new TextRun({ text: "  |  ", size: SM, font: FONT, color: LIGHT }),
      new TextRun({
        text: stack,
        italics: true,
        size: SM,
        font: FONT,
        color: MID,
      }),
      new TextRun({ text: "\t", size: SM, font: FONT }),
      new TextRun({ text: dates, size: SM, font: FONT, color: LIGHT }),
    ],
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 0, after: 30 },
    children: [new TextRun({ text, size: SM, font: FONT, color: DARK })],
  });
}

function skillRow(label, value) {
  return new Paragraph({
    spacing: { before: 0, after: 40 },
    tabStops: [{ type: TabStopType.LEFT, position: 1800 }],
    children: [
      new TextRun({
        text: label,
        bold: true,
        size: SM,
        font: FONT,
        color: ACCENT,
      }),
      new TextRun({ text: "\t", size: SM, font: FONT }),
      new TextRun({ text: value, size: SM, font: FONT, color: DARK }),
    ],
  });
}

// ─── document ──────────────────────────────────────────────────────────────

const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "\u2013", // en-dash bullet — clean, modern
            alignment: AlignmentType.LEFT,
            style: {
              run: { size: SM, font: FONT, color: ACCENT },
              paragraph: { indent: { left: 400, hanging: 280 } },
            },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: PAGE_W, height: 16838 },
          margin: {
            top: T_MARGIN,
            right: R_MARGIN,
            bottom: B_MARGIN,
            left: L_MARGIN,
          },
        },
      },
      children: [
        // ══════════════════════════════════════════════
        // HEADER
        // ══════════════════════════════════════════════
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 60 },
          children: [
            new TextRun({
              text: "AYAAN MEV",
              bold: true,
              size: XL,
              font: FONT,
              color: DARK,
              characterSpacing: 60,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 40 },
          children: [
            new TextRun({
              text: "Full-Stack Developer",
              size: LG,
              font: FONT,
              color: ACCENT,
              italics: true,
            }),
          ],
        }),
        hr(ACCENT, 12),
        spacer(60),
        // Contact line
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 0 },
          children: [
            new TextRun({
              text: "+91 9352410543",
              size: SM,
              font: FONT,
              color: MID,
            }),
            new TextRun({
              text: "  \u2022  ",
              size: SM,
              font: FONT,
              color: ACCENT,
            }),
            new TextRun({
              text: "ayaanmev01@gmail.com",
              size: SM,
              font: FONT,
              color: MID,
            }),
            new TextRun({
              text: "  \u2022  ",
              size: SM,
              font: FONT,
              color: ACCENT,
            }),
            new TextRun({
              text: "ayaanmev.vercel.app",
              size: SM,
              font: FONT,
              color: MID,
            }),
            new TextRun({
              text: "  \u2022  ",
              size: SM,
              font: FONT,
              color: ACCENT,
            }),
            new TextRun({
              text: "github.com/Mevayaan1",
              size: SM,
              font: FONT,
              color: MID,
            }),
            new TextRun({
              text: "  \u2022  ",
              size: SM,
              font: FONT,
              color: ACCENT,
            }),
            new TextRun({
              text: "linkedin.com/in/ayaanmev01",
              size: SM,
              font: FONT,
              color: MID,
            }),
            new TextRun({
              text: "  \u2022  ",
              size: SM,
              font: FONT,
              color: ACCENT,
            }),
            new TextRun({
              text: "Jodhpur, Rajasthan, India",
              size: SM,
              font: FONT,
              color: MID,
            }),
          ],
        }),

        // ══════════════════════════════════════════════
        // PROFESSIONAL SUMMARY
        // ══════════════════════════════════════════════
        ...sectionTitle("Professional Summary"),
        new Paragraph({
          spacing: { before: 0, after: 0 },
          children: [
            new TextRun({
              text: "Results-driven Full-Stack Developer with 1+ year of freelance experience delivering production-grade web applications across e-commerce, construction, and industrial sectors. Proven ability to own end-to-end product development — from database schema design to responsive UI — with a focus on clean architecture, real-world performance, and client outcomes. Proficient in the modern JavaScript ecosystem including React, Next.js, Node.js, TypeScript, and Supabase.",
              size: SM,
              font: FONT,
              color: DARK,
            }),
          ],
        }),

        // ══════════════════════════════════════════════
        // TECHNICAL SKILLS
        // ══════════════════════════════════════════════
        ...sectionTitle("Technical Skills"),
        skillRow(
          "Languages",
          "JavaScript (ES6+), TypeScript, Python, SQL, HTML5, CSS3",
        ),
        skillRow(
          "Frontend",
          "React.js, Next.js, Tailwind CSS, Bootstrap, Framer Motion",
        ),
        skillRow("Backend", "Node.js, Express.js, REST API Design"),
        skillRow("Databases", "MongoDB, PostgreSQL, MySQL, Supabase"),
        skillRow(
          "Tooling",
          "Git, GitHub, Vercel, Netlify, Hostinger, Razorpay, WebTorrent",
        ),

        // ══════════════════════════════════════════════
        // WORK EXPERIENCE
        // ══════════════════════════════════════════════
        ...sectionTitle("Work Experience"),

        // Heer
        ...jobBlock(
          "Heer Fragrance",
          "Jodhpur, Rajasthan, India",
          "Freelance Full-Stack Developer",
          "Sep 2025 – Present",
        ),
        bullet(
          "Built a production e-commerce platform (100+ SKUs) with React and Supabase, covering product catalog, auth, cart, and order management.",
        ),
        bullet(
          "Integrated Razorpay payment gateway for end-to-end checkout, order confirmation, and transaction processing.",
        ),
        bullet(
          "Designed relational database schema and REST API workflows for products, users, and orders — improving query performance and scalability.",
        ),
        bullet(
          "Delivered a fully mobile-first storefront with cross-device compatibility and responsive checkout UX.",
        ),

        spacer(40),

        // UniForm Billing
        ...jobBlock(
          "UniForm Billing  —  Freelance SaaS Product",
          "Jodhpur, Rajasthan, India",
          "Full-Stack Developer",
          "Jan 2026 – Present",
        ),
        bullet(
          "Architected a multi-client POS billing application for uniform dealers; live with Universal Uniforms, second client onboarded for customisations.",
        ),
        bullet(
          "Built full invoicing engine covering GST (CGST/SGST) calculation, discounts, returns, and advance payment slips using React, TypeScript, and Express.",
        ),
        bullet(
          "Developed SKU-based inventory system with barcode generation (TSC thermal printer), low-stock alerts, and real-time tracking.",
        ),
        bullet(
          "Designed transaction-safe MySQL schema for products, billing records, and order history; barcode scan triggers instant invoice generation.",
        ),

        spacer(40),

        // Viraat Builders
        ...jobBlock(
          "Viraat Builders",
          "Jodhpur, Rajasthan, India",
          "Freelance Full-Stack Developer",
          "Mar 2026 – Present",
        ),
        bullet(
          "Building a Next.js + TypeScript + Tailwind CSS construction management admin panel with Sites, Users, Tasks, Orders, and Attendance modules.",
        ),
        bullet(
          "Implemented QR-code-based attendance system enabling real-time on-site worker check-in and check-out tracking.",
        ),
        bullet(
          "Designed a cohesive orange-accented design system with role-based dashboards, modal workflows, toast notifications, skeleton loaders, and form validation.",
        ),

        spacer(40),

        // Mevenviro
        ...jobBlock(
          "Mevenviro",
          "Jodhpur, Rajasthan, India",
          "Freelance Full-Stack Developer",
          "Aug 2025 – Present",
        ),
        bullet(
          "Developed production-ready company website for an industrial water treatment business.",
        ),
        bullet(
          "Designing backend architecture for telemetry data ingestion, processing, and analytics visualisation.",
        ),

        spacer(40),

        // Madina Dyeing
        ...jobBlock(
          "Madina Dyeing",
          "Jodhpur, Rajasthan, India",
          "Freelance Frontend Developer",
          "Dec 2025 – Feb 2026",
        ),
        bullet(
          "Built a responsive company website for a textile dyeing business, improving digital presence and client outreach workflows.",
        ),

        spacer(40),

        // Tops Tech
        ...jobBlock(
          "Tops Tech Pvt. Ltd",
          "Ahmedabad, Gujarat, India",
          "MERN Stack Developer Trainee",
          "Sep 2023 – May 2025",
        ),
        bullet(
          "Completed intensive full-stack training in React, Node.js, Express, and MongoDB — built multiple end-to-end web applications.",
        ),
        bullet(
          "Gained hands-on experience in REST API design, relational database modelling, and component-driven front-end architecture.",
        ),

        // ══════════════════════════════════════════════
        // PROJECTS
        // ══════════════════════════════════════════════
        ...sectionTitle("Selected Projects"),

        projBlock(
          "Engraved — MERN E-Commerce Platform",
          "React · Node.js · Express · MongoDB",
          "2024",
        ),
        bullet(
          "Delivered full e-commerce platform with product catalog, category filtering, cart, and REST APIs supporting the complete purchase flow.",
        ),
        bullet(
          "Built an admin dashboard for inventory and pricing control, significantly reducing manual product update overhead.",
        ),
        bullet(
          "Designed MongoDB schema for product metadata, user accounts, and order management to support scalable data operations.",
        ),

        spacer(40),

        projBlock(
          "Movie Streaming Backend",
          "Node.js · WebTorrent · Distributed Systems",
          "2024",
        ),
        bullet(
          "Built Node.js media infrastructure for a mobile streaming app, handling peer-to-peer torrent streaming and concurrent playback requests.",
        ),
        bullet(
          "Implemented chunk-based data pipeline for efficient media delivery, stream buffering, and distributed transfer across nodes.",
        ),

        // ══════════════════════════════════════════════
        // EDUCATION
        // ══════════════════════════════════════════════
        ...sectionTitle("Education"),
        ...jobBlock(
          "Lachoo Memorial College of Science & Technology",
          "Jodhpur, Rajasthan, India",
          "Bachelor of Computer Applications (BCA)",
          "2021 – 2023",
        ),
      ],
    },
  ],
});

Packer.toBuffer(doc)
  .then((buf) => {
    fs.writeFileSync(
      "D:/Code/portfolio1/ayaanportfolio/ayaan_mev_resume_revamped.docx",
      buf,
    );
    console.log("Done");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
