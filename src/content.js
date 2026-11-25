export const whatsappHref =
  "https://wa.me/923041628668?text=" +
  encodeURIComponent("Hi Shahmeer, I saw your portfolio and would like to talk.");

export const resumeHref = `${import.meta.env.BASE_URL}Shahmeer_Ahmad_Resume.pdf`;

export const pages = [
  { id: "field", label: "Home" },
  { id: "work", label: "Work" },
  { id: "signal", label: "Payments" },
  { id: "record", label: "Record" },
  { id: "contact", label: "Contact" },
];

export const summary =
  "I am a software engineer who ships Flutter products and the APIs and admin portals behind them. Since 2021 the client work has covered travel booking, two separate nutrition products, attendance, community apps, school transport, workplace tools, and operations. Everyday Toolkit is my own website of free browser tools. I integrate Stripe, PayPal, and Azericard, and I own the payment state: a charge stays pending until the gateway confirms it, a repeat webhook does not credit twice, and a refund does not run twice. Card numbers stay with the gateway. Entspos is my current company. I can start immediately.";

export const skills = [
  {
    name: "Mobile",
    line: "iOS, Android, and desktop apps.",
    items: [
      { name: "Flutter", slug: "flutter" },
      { name: "Dart", slug: "dart" },
      { name: "GetX", slug: "getx" },
      { name: "Provider", slug: "" },
      { name: "Bloc", slug: "" },
      { name: "Firebase", slug: "firebase" },
      { name: "FCM", slug: "" },
      { name: "Google Maps", slug: "googlemaps" },
      { name: "WebRTC", slug: "webrtc" },
      { name: "Jitsi", slug: "jitsi" },
      { name: "In-app purchases", slug: "" },
    ],
  },
  {
    name: "Web",
    line: "Portals, admins, and customer sites.",
    items: [
      { name: "Next.js", slug: "nextdotjs" },
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Redux Toolkit", slug: "redux" },
      { name: "TanStack Query", slug: "reactquery" },
    ],
  },
  {
    name: "Backend",
    line: "APIs the apps and sites call.",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "NestJS", slug: "nestjs" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "REST", slug: "" },
      { name: "Socket.IO", slug: "socketdotio" },
      { name: "JWT", slug: "jsonwebtokens" },
      { name: "Laravel", slug: "laravel" },
    ],
  },
  {
    name: "Payments",
    line: "The gateway holds the card. The app holds the state.",
    items: [
      { name: "Stripe", slug: "stripe" },
      { name: "PayPal", slug: "paypal" },
      { name: "Azericard", slug: "" },
      { name: "Webhooks", slug: "" },
      { name: "Idempotency", slug: "" },
      { name: "Wallets", slug: "" },
      { name: "Refunds", slug: "" },
    ],
  },
  {
    name: "Data",
    line: "Where the product stores its records.",
    items: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "Redis", slug: "redis" },
      { name: "Sequelize", slug: "" },
      { name: "Mongoose", slug: "" },
      { name: "SQLite", slug: "sqlite" },
      { name: "Hive", slug: "" },
      { name: "ObjectBox", slug: "" },
    ],
  },
  {
    name: "Delivery",
    line: "How a build gets to a phone or a server.",
    items: [
      { name: "AWS", slug: "" },
      { name: "Firebase", slug: "firebase" },
      { name: "PM2", slug: "pm2" },
      { name: "Electron", slug: "electron" },
      { name: "Docker", slug: "docker" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
    ],
  },
];

export const work = [
  {
    id: "everyday-toolkit",
    name: "Everyday Toolkit",
    kind: "Latest · my own product",
    stack: ["Next.js", "React", "TypeScript"],
    summary:
      "A free website of everyday tools, published by me. Each tool has its own page. A person opens one, types their own numbers or picture, and keeps the result. The calculation runs in the browser.",
    built: [
      "Groups cover money, time, units, numbers, school, health, writing, generators, images, design, and data.",
      "Money pages say the result is an estimate. The visitor types the rate, tax, or currency. The site does not invent a country tax table.",
      "Image tools resize, crop, compress, convert, rotate, and flip on the device. The picture is not uploaded.",
      "An account is optional. The browser can install the site like an app.",
    ],
    links: [
      { label: "Website", href: "https://everydaytoolkit.store" },
      { label: "All tools", href: "https://everydaytoolkit.store/tools" },
    ],
  },
  {
    id: "book-and-travel",
    name: "Book & Travel",
    kind: "Travel · hotels and flights",
    stack: ["Flutter", "Next.js", "Node", "MySQL", "Redis", "Azericard"],
    summary:
      "A live full-stack travel product. I built the Node backend, the Next.js customer website, the admin, and the Flutter apps for iOS and Android. A booking can start on the phone or on bookand.travel, and the admin sees it after the API confirms it.",
    built: [
      "The customer site is live at bookand.travel. The Node API behind it is live too.",
      "The admin covers hotel and flight bookings, customers, staff users, refunds, site content, and Azericard payment settings.",
      "Flights book through MyAgent and WikiAir. Hotels book through Gimmonix. Vouchers and invoices follow a paid booking.",
      "Azericard holds the card. The cardholder approves on the return step, a signed callback marks the booking paid, and the same payment is not refunded twice.",
      "The iOS and Android apps are the same product as the website, not a separate demo.",
    ],
    links: [
      { label: "Website", href: "https://bookand.travel" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=app.bookand.travel" },
    ],
    note: "The website, API, admin, and Android app are live. The iOS app shipped with the client.",
  },
  {
    id: "wingsdiet",
    name: "WingsDiet",
    kind: "Nutrition · website, superadmin, and apps",
    stack: ["Flutter", "React", "Node", "GetX", "Firebase"],
    summary:
      "Its own live product, separate from DietCoach. WingsDiet is the public website, the superadmin that runs companies, and the iOS and Android apps customers install.",
    built: [
      "wingsdiet.com is live, including signup and referral links.",
      "The superadmin covers companies, company users, app installs, recipes, support tickets, payment gateways, and reports.",
      "A company admin runs that clinic’s customers. Partners and customers have their own sign-in on the same web app.",
      "The Flutter apps are live on the App Store and Play Store, with Firebase push.",
    ],
    links: [
      { label: "Website", href: "https://wingsdiet.com" },
      { label: "App Store", href: "https://apps.apple.com/app/id6748774685" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.wingsdiet.nutrition" },
    ],
  },
  {
    id: "dietcoach",
    name: "DietCoach",
    kind: "Nutrition · clinics and customers",
    stack: ["Flutter", "React", "Node", "MongoDB", "Stripe", "PayPal", "WebRTC"],
    summary:
      "A separate nutrition platform from WingsDiet. Clinics, partners, and customers use the web portals. The mobile app is Diet Coach, with meal plans, appointments, a wallet, tickets, and chat.",
    built: [
      "Super-admin, clinic, partner, and customer portals. The public site is dietcoach.net.",
      "Stripe and PayPal run checkout, wallet top-ups, and paid courses. A verified webhook credits the wallet once.",
      "The wallet stores the balance and a history row with the balance before and after. Spending is refused when the balance is too low.",
      "Appointment calls use WebRTC. The mobile app also has an AI nutrition chat. Prices can show in local currency while the charge is USD.",
    ],
    links: [
      { label: "Website", href: "https://dietcoach.net" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.dietcoach.b2b" },
    ],
  },
  {
    id: "dietcoach-crm",
    name: "DietCoach CRM",
    kind: "Sales · DietCoach",
    stack: ["Next.js", "NestJS", "MongoDB", "Redux Toolkit"],
    summary:
      "The sales and marketing CRM for DietCoach, not the customer diet app. A company works inside its own tenant. A superadmin can see across companies.",
    built: [
      "Next.js web app and a NestJS API on MongoDB.",
      "Company admin and superadmin access, with JWT on the API.",
    ],
    links: [],
  },
  {
    id: "trackly",
    name: "Trackly",
    kind: "Attendance · companies and staff",
    stack: ["FastAPI", "React", "MongoDB", "Electron", "Stripe"],
    summary:
      "A live attendance product at trackly.net. I built the superadmin, the company admin, the staff experience, the mobile apps, and the Windows desktop. Check-in can start in the browser, on the phone, or on the desktop downloaded from the site.",
    built: [
      "The superadmin sees every company, who is present, absent, late, or on a break, and can open a company from there.",
      "The company admin manages that company’s staff, watches attendance as it happens, and exports reports.",
      "Staff check in from the mobile apps or from the Windows desktop. The desktop covers breaks, idle time, and optional screenshots, and it is downloaded from trackly.net.",
      "Stripe bills the company. The API is FastAPI, with MongoDB behind the dashboards.",
    ],
    links: [{ label: "Website", href: "https://trackly.net" }],
    note: "Superadmin, company admin, apps, and the desktop are live. The desktop download is on trackly.net.",
  },
  {
    id: "my-quran",
    name: "My Quran",
    kind: "Community · Quran and classes",
    stack: ["Flutter", "React", "Node", "WebRTC"],
    summary:
      "A live Quran product with four web portals and the mobile apps. Superadmin, admin, teacher, and student each have their own dashboard. A class is a WebRTC room, not only a page of text.",
    built: [
      "Superadmin runs the platform. Admin runs a school’s teachers and students. Teacher and student each open their own portal for classes, Quran, and Qaida.",
      "The live room uses WebRTC through a mediasoup server. A class can share video, a screen, a whiteboard, and chat, and the admin can monitor the session.",
      "The mobile app, release 2.0.8, covers Quran, prayer times, Qibla, Qaida, audio, and the same live classes.",
      "The iOS and Android apps are on the App Store and Play Store.",
    ],
    links: [
      { label: "Web portals", href: "https://panel.myquranapp.com" },
      { label: "App Store", href: "https://apps.apple.com/app/id6480511893" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.contactVA.myquranpak1" },
    ],
  },
  {
    id: "tagit",
    name: "Tagit",
    kind: "Operations · field work",
    stack: ["Flutter", "Next.js", "Express", "MongoDB", "S3", "ObjectBox"],
    summary:
      "A mobile client for people in the field and a Next.js admin for the people who run them. The admin covers users, analytics, and moderation.",
    built: [
      "Barcode scanning, ObjectBox on the device, and push notifications.",
      "Files go to AWS S3. The Node API is the source of truth for the app and the admin.",
    ],
    links: [{ label: "Website", href: "https://tagit.com" }],
  },
  {
    id: "tiki",
    name: "Tiki",
    kind: "Workplace · 2023 to 2026",
    stack: ["Next.js", "Express", "MongoDB", "AWS", "S3", "Stripe", "Socket.IO"],
    summary:
      "The product I stayed with from 2023 to 2026. Tiki is live at tikiworkplace.com. I built the frontend, the admin, and the Express API, and I ran it on AWS: EC2 for the server, S3 for files, and MongoDB for the data.",
    built: [
      "The web app covers tasks, chat, feeds, a safety hub, a sign register, asset tracking, and billing. An organization and its users do not see each other’s files.",
      "The admin is its own app. The API is Express. The site is Next.js, with role checks on the routes.",
      "Files go to S3. The API checks that a download belongs to that organization before it signs the link.",
      "Stripe handles billing. Chat and the feed update over Socket.IO.",
    ],
    links: [{ label: "Website", href: "https://www.tikiworkplace.com/" }],
  },
  {
    id: "komodify",
    name: "Komodify",
    kind: "Markets · holdings",
    stack: ["Flutter", "Node", "MongoDB", "Socket.IO", "Firebase"],
    summary:
      "A commodity app for what a person holds, what they withdrew, and the proof they paid. Prices move while the app is open. The shipped build is 1.0.6.",
    built: [
      "Holdings, statements, withdrawals, and payment proofs.",
      "Live prices over sockets, so the screen is not a stale snapshot.",
      "The API is api.komodify.com. The public site is komodify.com.",
    ],
    links: [{ label: "Website", href: "https://komodify.com" }],
  },
  {
    id: "scholar-wheels",
    name: "Scholar Wheels",
    kind: "Transport · school routes",
    stack: ["Flutter", "Firebase", "Socket.IO"],
    summary:
      "Three apps for one school run: parent, driver, and child. A parent books a route and manages children and contracts. A driver shares the van’s location while the route is active.",
    built: [
      "Live GPS from the driver app over sockets, so a parent sees the van move.",
      "Contracts and route booking stay in the parent app.",
    ],
    links: [],
    note: "Parent, driver, and child apps delivered to the school client.",
  },
  {
    id: "contactva-crm",
    name: "ContactVA CRM",
    kind: "CRM · multi-tenant",
    stack: ["Next.js", "NestJS", "MongoDB", "JWT"],
    summary:
      "A multi-tenant CRM for ContactVA. Each company works in its own space. A superadmin can manage companies. Mail passwords are stored encrypted.",
    built: [
      "Next.js 15 web app and a NestJS API on MongoDB.",
      "JWT auth for company and superadmin access.",
      "Company SMTP settings are encrypted at rest.",
    ],
    links: [],
  },
  {
    id: "vicibox",
    name: "Vicibox Center",
    kind: "Admin · greenfield rebuild",
    stack: ["NestJS", "Next.js"],
    summary:
      "A greenfield rebuild of a legacy Laravel Vicibox system. The old admin is replaced by a NestJS API and a Next.js admin, instead of extending the Laravel app in place.",
    built: [
      "NestJS API for the new admin.",
      "Next.js screens in front of that API.",
    ],
    links: [],
  },
  {
    id: "chavivim",
    name: "Chavivim",
    kind: "Mobile · client app",
    stack: ["Flutter", "GetX", "Firebase"],
    summary:
      "A cross-platform client app. Build 25.0.6 is the release I shipped: the product UI, the API connection, and push notifications.",
    built: [
      "Flutter UI with GetX.",
      "API integration and Firebase push.",
    ],
    links: [],
  },
  {
    id: "farenow",
    name: "Farenow",
    kind: "Marketplace · user and provider",
    stack: ["Flutter", "GetX", "Firebase", "Stripe"],
    summary:
      "Two mobile apps for one marketplace: the person who books, and the provider who fulfills. I took it from project setup through the store-ready mobile build.",
    built: [
      "User app and provider app.",
      "API integration, Firebase push, and Stripe.",
    ],
    links: [],
  },
  {
    id: "webflora",
    name: "WebFlora",
    kind: "Ordering · dealers",
    stack: ["Flutter", "GetX"],
    summary:
      "An ordering app for finding a dealer and placing an order. The buyer can pay, see bank details, and chat, in more than one language.",
    built: [
      "Dealer search and ordering.",
      "Payments, bank details, chat, and localization.",
    ],
    links: [],
  },
  {
    id: "resume-builder",
    name: "Resume Builder",
    kind: "Documents · templates",
    stack: ["Flutter", "GetX", "MVVM"],
    summary:
      "A cross-platform resume app. A person picks a template, edits the text, and exports a PDF.",
    built: [
      "Template layouts and text editing.",
      "PDF export from the device.",
    ],
    links: [],
  },
  {
    id: "sigma-pak",
    name: "Sigma Pak Japan Auction",
    kind: "Auction · iOS and Android",
    stack: ["Flutter"],
    summary:
      "An auction app for iOS and Android, built for Sigma Pak’s Japan auction flow.",
    built: ["Flutter client for both stores."],
    links: [],
  },
  {
    id: "bizkeeper",
    name: "BizKeeper",
    kind: "Payroll · one administrator",
    stack: ["Expo", "React Native"],
    summary:
      "Payroll and expenses for a single administrator. Employee records, payroll runs, and expenses stay on the device, with PKR and USD accounts.",
    built: [
      "Employees, a payroll run, and a review before it is saved.",
      "Business and personal expenses, with an optional receipt.",
      "Reports, and an optional Google Sheets backup the administrator connects.",
    ],
    links: [],
  },
  {
    id: "threads-downloader",
    name: "Threads Downloader",
    kind: "Media · save and share",
    stack: ["Flutter", "Firebase"],
    summary:
      "A mobile app for saving and sharing video. Notifications tell the person when something is ready, and the app carries ads.",
    built: ["Save and share flow, Firebase notifications, and ads."],
    links: [],
  },
  {
    id: "shareit",
    name: "ShareIt",
    kind: "Files · nearby phones",
    stack: ["Flutter"],
    summary:
      "A ShareIt-style file app for Android and iOS. There is no account. Two phones on the same Wi-Fi find each other and send files with live progress.",
    built: [
      "Discovery with mDNS, then the file moves over TCP.",
      "Send and receive, a history of transfers, a receive code, and an Android hotspot mode.",
    ],
    links: [],
  },
  {
    id: "aquatico",
    name: "Aquatico",
    kind: "Health · water tracker",
    stack: ["Flutter", "GetX"],
    summary:
      "A water-intake tracker. The person logs drinks, looks back at the history, and sets reminders that stay quiet during the hours they choose.",
    built: [
      "Home log, history, and a profile.",
      "Smart reminders, with a quiet window.",
    ],
    links: [],
  },
  {
    id: "nyao",
    name: "Nyao Scalper",
    kind: "Personal · MetaTrader 5",
    stack: ["MQL5"],
    summary:
      "A personal MetaTrader 5 expert advisor, not a client app. It scores trend strength and manages an open trade. It is an experiment, and trading with it is at the user’s own risk.",
    built: [
      "Signal score, stops, and trailing on the chart.",
      "A second experimental EA, Nyao Straddle, sits in the same repository.",
    ],
    links: [],
  },
];

export const jobs = [
  {
    org: "Entspos Developers",
    role: "Software Engineer, Flutter and full-stack",
    when: "2021 — now",
    place: "Current company",
    points: [
      "I ship Flutter apps for iOS, Android, and desktop, and the Next.js and React portals beside them.",
      "The APIs are Node, Express, NestJS, or FastAPI, with MongoDB or MySQL.",
      "At Entspos the payment work is Stripe: billing and checkout, with a pending, paid, failed, or refunded state.",
      "I review client delivery and keep a release consistent from the app to the API.",
    ],
  },
  {
    org: "ContactVA",
    role: "Flutter and full-stack developer",
    when: "2024 — 2026",
    place: "Remote",
    points: [
      "Client apps, Next.js portals, and the APIs behind them, including ContactVA CRM.",
      "PayPal, Apple and Google in-app purchases, and Azericard.",
      "Real-time chat, live classes, and appointment calls.",
    ],
  },
  {
    org: "BlockHangs",
    role: "Flutter developer",
    when: "2022 — 2023",
    place: "Lahore",
    points: [
      "Android and iOS community app: chat, posts, communities, and search across posts, profiles, and communities.",
    ],
  },
  {
    org: "VirtueNetz",
    role: "Flutter and Laravel developer",
    when: "2021",
    place: "Rahimyar Khan",
    points: ["A Flutter app from scratch and the Laravel API beside it, in one engagement."],
  },
];

export const rails = [
  { name: "Stripe", where: "Entspos billing. Also DietCoach, Trackly, Tiki, and Farenow." },
  { name: "PayPal", where: "ContactVA, and DietCoach checkout and wallet top-ups." },
  { name: "In-app purchases", where: "Apple and Google, on ContactVA products." },
  { name: "Azericard", where: "Book & Travel card payments and refunds." },
];

export const flow = [
  {
    title: "Checkout opens",
    text: "The customer starts Stripe, PayPal, or Azericard. The payment is saved as pending before any money moves.",
  },
  {
    title: "The gateway holds the card",
    text: "The card number stays with the gateway. The app stores the payment state, not the card.",
  },
  {
    title: "The webhook confirms once",
    text: "A repeat callback sees the payment is already complete and does not add the money again.",
  },
  {
    title: "The wallet records it",
    text: "DietCoach stores the balance and a history row with the balance before and after. Spending is refused when the balance is too low.",
  },
  {
    title: "A refund returns once",
    text: "Book & Travel sends the reversal through Azericard and will not refund the same payment twice.",
  },
];
