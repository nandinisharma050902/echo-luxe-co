import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Lightbulb,
  Linkedin,
  User,
  Globe,
  Youtube,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const firstPostArticle = `Setting up your first podcast studio doesn't require a massive budget or a professional recording facility—it requires smart choices, a bit of planning, and a focus on sound quality over aesthetics. Start with your recording space, because even the best microphone can't fix poor acoustics. Choose a quiet room with minimal echo; soft furnishings like rugs, curtains, and even bookshelves help absorb sound and reduce reverb. Once your space is ready, invest in a good-quality USB or XLR microphone, this is the most important piece of gear, as clear audio is what keeps listeners engaged. Pair it with closed back headphones so you can monitor your recordings in real time without sound bleeding into the mic. If you're using an XLR mic, you'll also need an audio interface to connect it to your computer and ensure clean signal processing.

Finally, think about workflow and comfort. Arrange your equipment so everything is within reach, keep cables organized and ensure your seating supports long recording sessions. Test your setup before publishing your first episode, paying attention to background noise, volume levels and clarity. With a thoughtful approach and a focus on fundamentals, you can create a podcast studio that sounds professional, feels comfortable and scales with your ambitions turning your ideas into a listening experience people will want to come back to.`;

const thirdPostArticle = `Finally, starting a podcast is more achievable than ever. With affordable equipment and user friendly software, brands can produce high-quality content without a large upfront investment. The key is not perfection, but consistency and clarity. By focusing on delivering value, maintaining a regular publishing schedule, and continuously improving your content, you can build a strong and sustainable presence. In a world where attention is limited and trust is everything, podcasting stands out as a long term strategy that not only amplifies your brand's voice but also builds lasting relationships with your audience.`;

// =====================================================================
// "How to Set Up Your First Podcast Studio" — long-form article data
// =====================================================================

type StudioSection = {
  id: string;
  short: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: { kind: "Beginner Tip" | "Common Mistake" | "Pro Tip" | "Budget Tip"; text: string };
  image?: { src: string; alt: string; caption: string };
};

const studioSections: StudioSection[] = [
  {
    id: "recording-space",
    short: "Start With the Right Recording Space",
    title: "Start With the Right Recording Space",
    paragraphs: [
      "The room you record in matters far more than most beginners think. A modestly priced microphone in a quiet, soft room will almost always sound better than an expensive microphone in a hard, echoey space. Before you upgrade any gear, take a careful look at where you actually press record.",
      "You're not chasing a perfect studio. You're chasing a controlled space where your voice sounds clear, close and consistent from one episode to the next.",
    ],
    bullets: [
      "Choose the quietest room available in your home or office.",
      "Avoid rooms near traffic, kitchens, fans, air conditioners or shared walls.",
      "Smaller rooms with soft furnishings often outperform large empty rooms.",
      "Record at the time of day when your environment is naturally quietest.",
      "Turn off noisy appliances, notifications and HVAC during recording.",
    ],
    callout: {
      kind: "Beginner Tip",
      text: "Before buying more gear, record a 30-second voice test in different rooms and compare which one sounds the cleanest.",
    },
  },
  {
    id: "room-acoustics",
    short: "Improve Room Acoustics",
    title: "Improve Room Acoustics",
    paragraphs: [
      "It helps to separate two ideas that beginners often confuse. Soundproofing blocks outside noise from getting in. Acoustic treatment controls how sound reflects inside the room you're already recording in. For most home podcasters, acoustic treatment is the bigger win.",
      "You don't need a studio full of foam panels to get a clean sound. A few soft surfaces in the right places will dramatically reduce the echo that makes voices feel distant or hollow.",
    ],
    bullets: [
      "Lay down rugs or carpet to absorb floor reflections.",
      "Hang curtains over windows and large hard surfaces.",
      "Record near bookshelves, sofas or other soft, irregular surfaces.",
      "Avoid bare walls, glass and large open spaces directly behind you.",
      "Place blankets or acoustic panels behind and beside the microphone.",
      "If possible, build a small corner booth with soft material on three sides.",
    ],
    callout: {
      kind: "Common Mistake",
      text: "Many beginners spend money on a better microphone when the real issue is room echo. Treat the room first.",
    },
    image: {
      src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&q=80",
      alt: "Beginner home podcast studio with simple acoustic treatment",
      caption: "A simple home studio with acoustic panels, soft surfaces and a desk microphone.",
    },
  },
  {
    id: "right-microphone",
    short: "Choose the Right Microphone",
    title: "Choose the Right Microphone",
    paragraphs: [
      "Your microphone is one of the most important pieces of podcasting gear because voice clarity directly affects how long listeners stay with each episode. But the most expensive mic isn't automatically the right one — the best mic for you depends on your room, your workflow and your budget.",
      "Two main mic types matter for beginners. Dynamic microphones reject more background noise and tend to sound great in untreated rooms. Condenser microphones capture more detail and warmth, but they also pick up much more of the room around you, including fans, traffic and echo.",
    ],
    bullets: [
      "Dynamic mics are usually the safer choice for untreated home rooms.",
      "Condenser mics shine in well-treated, quiet recording spaces.",
      "USB mics are simple, affordable and beginner-friendly.",
      "XLR mics offer more control, better sound and a longer upgrade path.",
      "Skip the most expensive option until your room and habits are dialled in.",
    ],
    callout: {
      kind: "Pro Tip",
      text: "Speak about a fist's distance from the mic and slightly off-axis. This single habit improves clarity more than most upgrades.",
    },
  },
  {
    id: "usb-vs-xlr",
    short: "USB vs XLR Microphones",
    title: "USB vs XLR Microphones",
    paragraphs: [
      "If you're stuck choosing between USB and XLR, the question isn't which one is technically better — both can sound great. The real question is how much complexity you want to manage and how far you plan to scale.",
      "USB microphones plug directly into your computer and are perfect for solo creators who want to start recording the same day. XLR microphones require an audio interface but unlock cleaner audio, multiple inputs for guests and the ability to upgrade individual pieces of your setup over time.",
    ],
  },
  {
    id: "headphones",
    short: "Use Closed-Back Headphones",
    title: "Use Closed-Back Headphones",
    paragraphs: [
      "Headphones aren't a luxury in podcasting — they're essential. They let you monitor your audio in real time so you can hear background noise, mouth clicks, clipping or volume issues as they happen, instead of discovering them in the edit when it's too late to fix.",
      "Closed-back headphones are the right choice for recording. Open-back models leak sound, which your microphone will happily pick up and bake into your recording. Regular speakers should never be used while recording for the same reason.",
    ],
    bullets: [
      "Use closed-back headphones to prevent audio bleed into the mic.",
      "Monitor levels and clarity in real time during every recording.",
      "Catch problems like fan noise, hum or distortion before they're permanent.",
      "Ask guests to wear headphones too, especially in remote interviews.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&q=80",
      alt: "Closed-back headphones used for podcast recording",
      caption: "Closed-back headphones beside a podcast microphone — essential for clean monitoring.",
    },
  },
  {
    id: "audio-interface",
    short: "Add an Audio Interface",
    title: "Add an Audio Interface If You Use XLR",
    paragraphs: [
      "An audio interface is the bridge between an XLR microphone and your computer. It powers the mic when needed, controls the input level (gain) and converts the analog signal into clean digital audio your software can record without noise or distortion.",
      "If you're using a USB microphone, you don't need an interface — the conversion is built in. The moment you move to XLR, however, an interface becomes one of the most important pieces of your setup.",
    ],
    bullets: [
      "Provides clean, controllable gain for your microphone.",
      "Offers dedicated headphone monitoring with low latency.",
      "Supports multiple mic inputs so you can record co-hosts and guests.",
      "Delivers phantom power for condenser microphones that need it.",
      "Gives you a noticeably cleaner signal than most onboard computer inputs.",
    ],
    callout: {
      kind: "Budget Tip",
      text: "A simple two-input interface is enough for most beginner podcasts. Don't pay for channels and features you won't use for the first year.",
    },
  },
  {
    id: "recording-software",
    short: "Pick Recording Software",
    title: "Pick Recording Software",
    paragraphs: [
      "Podcast recording software doesn't need to be complicated. The right tool is the one that matches your format, fits your skill level and lets you publish without friction. You can always upgrade once you know what you actually need.",
      "There are four broad categories worth knowing about: simple voice recorders for solo episodes, multitrack DAWs for full editing control, remote interview platforms that record each guest on a separate clean track, and video recording tools for podcasts that will also live on YouTube.",
    ],
    bullets: [
      "Multitrack recording so each speaker has their own clean audio track.",
      "Built-in noise reduction or easy plugin support.",
      "Visible level meters so you can watch your input volume.",
      "Standard export options like WAV and MP3.",
      "Backup or redundant recording in case of a crash.",
      "An editing timeline you can navigate without a tutorial every time.",
    ],
  },
  {
    id: "desk-workflow",
    short: "Set Up Your Desk and Workflow",
    title: "Set Up Your Desk and Workflow",
    paragraphs: [
      "Comfort and workflow matter more than they sound. Recording and editing a podcast involves long sessions, and a chaotic desk almost guarantees mistakes — wrong takes, missed cues, distracting noises and wasted energy that should be going into the conversation.",
      "Spend an hour setting up your desk properly once, and you'll save yourself countless hours over the life of your show.",
    ],
    bullets: [
      "Position the microphone at mouth level so you don't lean or strain.",
      "Use a sturdy boom arm or solid desk stand to stop bumps and rumble.",
      "Always use a pop filter or windscreen to soften plosive sounds.",
      "Keep your outline, notes or script visible without shuffling paper.",
      "Route and tie cables so they don't tangle, snag or rattle.",
      "Keep water within reach (but off the desk where it can be knocked).",
      "Use a comfortable chair that supports long recording sessions.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?w=1600&q=80",
      alt: "Organized beginner podcast desk setup",
      caption: "An organized podcast desk with microphone, laptop, headphones and notes within reach.",
    },
  },
  {
    id: "lighting-camera",
    short: "Lighting and Camera Setup",
    title: "Lighting and Camera Setup for Video Podcasts",
    paragraphs: [
      "More podcasts now record video alongside audio for YouTube, TikTok, Instagram Reels and LinkedIn. You don't need a film studio to look professional — clean lighting, a clean background and a well-placed camera will get you most of the way there.",
      "Always prioritize audio first. Listeners will forgive imperfect video, but no one tolerates poor sound.",
    ],
    bullets: [
      "Face a window for natural light or use a single soft key light.",
      "Avoid harsh overhead lighting that creates shadows under your eyes.",
      "Keep the background clean, intentional and not visually distracting.",
      "Place the camera at eye level — never below, looking up at you.",
      "Frame yourself with your head and shoulders comfortably visible.",
    ],
    callout: {
      kind: "Pro Tip",
      text: "Record your video clips in 4K when possible, even if you publish in 1080p. It gives you room to crop for vertical shorts later.",
    },
  },
  {
    id: "test-publish",
    short: "Test Before You Publish",
    title: "Test Before You Publish",
    paragraphs: [
      "Most beginner episodes are released with avoidable problems — a buzzing fan, a clipped intro, one speaker twice as loud as the other — that a 60-second test would have caught. A small testing habit before each session is one of the highest-leverage things you can do.",
      "Run the same quick check every time. It will save you re-records, listener complaints and the slow erosion of trust that bad audio causes.",
    ],
    bullets: [
      "Record 30 to 60 seconds in your normal speaking voice.",
      "Check for background noise, hum, fans or keyboard sounds.",
      "Confirm your voice sounds clear, close and balanced.",
      "Make sure levels stay out of the red and around -6 dB peaks.",
      "Listen back through headphones, not laptop speakers.",
      "Make small adjustments before recording the full episode.",
    ],
  },
];

const studioGear = [
  { item: "Quiet room", why: "Clean recordings start with a quiet space, not better gear.", tip: "Pick the smallest, softest room you have access to.", priority: "Essential" as const },
  { item: "Microphone (USB or XLR)", why: "The single biggest factor in how your voice is captured.", tip: "Beginners do well with a good dynamic USB mic.", priority: "Essential" as const },
  { item: "Closed-back headphones", why: "Lets you monitor audio in real time and prevents bleed.", tip: "Avoid open-back or speakers while recording.", priority: "Essential" as const },
  { item: "Recording software", why: "You need a way to capture, edit and export episodes.", tip: "Start with a free tool and upgrade only when limited.", priority: "Essential" as const },
  { item: "Audio interface", why: "Required for XLR microphones; gives clean, controllable gain.", tip: "A 2-channel interface is plenty for most podcasts.", priority: "Recommended" as const },
  { item: "Boom arm or mic stand", why: "Keeps the mic stable and at the right height.", tip: "A boom arm saves desk space and reduces bumps.", priority: "Recommended" as const },
  { item: "Pop filter or windscreen", why: "Softens harsh plosive sounds like Ps and Bs.", tip: "Even a basic foam windscreen makes a noticeable difference.", priority: "Recommended" as const },
  { item: "Acoustic treatment", why: "Reduces echo so your voice sounds close and clean.", tip: "Start with rugs, blankets and curtains before buying foam.", priority: "Recommended" as const },
  { item: "Camera or webcam", why: "Needed if you also publish video on YouTube or social.", tip: "A modern webcam is enough to start a video podcast.", priority: "Optional" as const },
  { item: "Lighting", why: "Clean, soft lighting makes video podcasts look professional.", tip: "A single key light or window is often all you need.", priority: "Optional" as const },
  { item: "Cable organizer", why: "Keeps your desk tidy and your workflow distraction-free.", tip: "Velcro ties or under-desk trays work great.", priority: "Optional" as const },
];

const studioChecklist = [
  "Choose the quietest room available",
  "Add rugs, curtains, blankets or panels to reduce echo",
  "Select a USB or XLR microphone that fits your room",
  "Use closed-back headphones for monitoring",
  "Add an audio interface if using an XLR microphone",
  "Install your recording and editing software",
  "Set the microphone at mouth level on a stand or boom arm",
  "Organize cables and arrange your desk for comfort",
  "Prepare episode notes or an outline before recording",
  "Record a 60-second test clip and listen back on headphones",
  "Check for noise, echo, clipping and balanced volume",
  "Save a backup of every recording",
  "Document a repeatable recording workflow you can follow each week",
];

const studioFaqs = [
  {
    q: "How much does it cost to set up a beginner podcast studio?",
    a: "You can build a solid beginner setup on a modest budget if you focus on essentials first: a quiet room, a reliable microphone, closed-back headphones and recording software. Many great podcasts launch with under a few hundred dollars in gear and upgrade only when their workflow demands it.",
  },
  {
    q: "Do I need a professional studio to start a podcast?",
    a: "No. A treated home setup can sound genuinely professional with the right room choice, basic acoustic treatment and consistent recording habits. Most successful independent podcasts are recorded in spare bedrooms, home offices or small corner setups.",
  },
  {
    q: "Is a USB microphone good enough for podcasting?",
    a: "Yes, especially for beginners and solo creators. A good dynamic USB microphone is more than capable of producing professional-sounding episodes. XLR becomes useful when you need multiple mics, more control or a longer-term upgrade path.",
  },
  {
    q: "What's more important — the microphone or the room?",
    a: "Both matter, but for most beginners the room makes the bigger difference. A great mic in a bad room still sounds amateur, while a modest mic in a treated room can sound surprisingly clean. Treat the space first, then upgrade gear.",
  },
  {
    q: "Should I record audio and video at the same time?",
    a: "It depends on your strategy. Video is excellent for YouTube, social clips and discoverability, but audio quality should always remain the priority. If video adds friction that hurts your audio, start with audio only and add video later.",
  },
  {
    q: "How do I reduce echo in my podcast room?",
    a: "Add soft surfaces — rugs, curtains, blankets, bookshelves, sofas, acoustic panels — and record closer to the microphone. Avoid bare walls, hard floors and large empty rooms. Even a few changes will dramatically reduce reverb.",
  },
  {
    q: "What software should beginners use to record a podcast?",
    a: "Choose software that's easy to learn, supports multitrack recording and exports to common audio formats. Beginner-friendly tools like Audacity, GarageBand and similar free options are more than enough to launch a great-sounding show.",
  },
];

const PRIORITY_COLOR: Record<string, string> = {
  Essential: "bg-primary/10 text-primary border-primary/30",
  High: "bg-amber-500/10 text-amber-600 border-amber-500/30",
  Medium: "bg-muted text-foreground/70 border-border",
  Recommended: "bg-amber-500/10 text-amber-600 border-amber-500/30",
  Optional: "bg-muted text-foreground/60 border-border",
};

const CALLOUT_STYLES: Record<NonNullable<StudioSection["callout"]>["kind"], string> = {
  "Beginner Tip": "bg-[hsl(210_100%_98%)] border-[hsl(210_90%_88%)]/70",
  "Common Mistake": "bg-[hsl(0_100%_98%)] border-[hsl(0_90%_88%)]/70",
  "Pro Tip": "bg-[hsl(150_60%_97%)] border-[hsl(150_50%_85%)]/70",
  "Budget Tip": "bg-[hsl(45_100%_97%)] border-[hsl(45_90%_85%)]/70",
};

const StudioSetupArticle = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/#booking";
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary to-[hsl(340_90%_55%)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article className="pt-28 pb-20 md:pt-32 md:pb-28 scroll-smooth">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300 mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {/* Hero */}
          <header className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-5">
              Podcasting
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
              How to Set Up Your First Podcast Studio
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-7 max-w-3xl">
              A beginner-friendly guide to building a clean, comfortable and professional-sounding podcast
              setup — without overspending on gear you don't actually need.
            </p>
            <div className="flex flex-wrap items-center gap-5 text-xs md:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-primary" />
                Banter Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary" />
                Updated May 7, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-primary" />
                9 min read
              </span>
            </div>
          </header>

          <div className="rounded-2xl overflow-hidden mb-12 border border-border/40">
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=80"
              alt="Podcast microphone and headphones on a desk in a home recording studio"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-10 lg:gap-14">
            {/* Sticky ToC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-4">
                  On this page
                </p>
                <ul className="space-y-2.5">
                  {studioSections.map((s) => (
                    <ToCItem key={s.id} id={s.id} label={s.short} />
                  ))}
                  <ToCItem id="gear-table" label="Beginner Gear Table" />
                  <ToCItem id="checklist" label="Setup Checklist" />
                  <ToCItem id="videos" label="Recommended Videos" />
                  <ToCItem id="faqs" label="FAQs" />
                  <ToCItem id="author" label="Author" />
                </ul>
              </div>
            </aside>

            <div className="min-w-0">
              {/* Mobile ToC */}
              <div className="lg:hidden mb-10 p-5 rounded-xl border border-border/60 bg-muted/30">
                <p className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-3">
                  Table of contents
                </p>
                <ul className="space-y-2">
                  {studioSections.map((s) => (
                    <ToCItem key={s.id} id={s.id} label={s.short} />
                  ))}
                  <ToCItem id="gear-table" label="Beginner Gear Table" />
                  <ToCItem id="checklist" label="Setup Checklist" />
                  <ToCItem id="videos" label="Recommended Videos" />
                  <ToCItem id="faqs" label="FAQs" />
                </ul>
              </div>

              {/* Intro */}
              <section className="mb-14">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                  Setting up your first podcast studio doesn't require a huge budget or a professional recording
                  facility. What it really requires is a quiet, controlled, comfortable space where your voice
                  sounds clear and consistent — episode after episode. Most beginners get this backwards. They
                  obsess over expensive microphones and ignore the room, the workflow and the recording habits
                  that actually make a podcast sound professional.
                </p>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed mt-5">
                  This guide walks through every piece of a smart beginner podcast studio setup — from picking
                  the right room and treating it for sound, to choosing a microphone, headphones, audio
                  interface and recording software, to building a desk and workflow you'll actually enjoy
                  using. The goal isn't perfection. It's a setup that sounds great today and can scale with
                  you tomorrow.
                </p>
              </section>

              {/* Sections */}
              {studioSections.map((s, i) => (
                <section key={s.id} id={s.id} className="mb-14 scroll-mt-28">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-primary to-[hsl(340_90%_55%)] text-primary-foreground text-base font-bold flex items-center justify-center shadow-[0_8px_20px_-6px_hsl(352_98%_63%/0.5)]">
                      {i + 1}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight pt-1.5">
                      {s.title}
                    </h2>
                  </div>

                  <div className="space-y-5 pl-0 md:pl-[60px]">
                    {s.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-base md:text-lg text-foreground/80 leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {s.bullets && (
                      <ul className="space-y-2.5">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                            <span className="text-base text-foreground/80 leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Inline USB vs XLR comparison table */}
                    {s.id === "usb-vs-xlr" && (
                      <div className="rounded-xl border border-border/60 overflow-hidden mt-2">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-muted/50">
                              <TableHead className="font-semibold w-[28%]">Feature</TableHead>
                              <TableHead className="font-semibold w-[36%]">USB Microphone</TableHead>
                              <TableHead className="font-semibold w-[36%]">XLR Microphone</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium align-top">Ease of setup</TableCell>
                              <TableCell className="align-top text-foreground/75">Plug-and-play into your computer.</TableCell>
                              <TableCell className="align-top text-foreground/75">Requires an audio interface and cabling.</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium align-top">Audio quality</TableCell>
                              <TableCell className="align-top text-foreground/75">Very good for solo creators in a treated room.</TableCell>
                              <TableCell className="align-top text-foreground/75">Excellent and more consistent across setups.</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium align-top">Extra equipment needed</TableCell>
                              <TableCell className="align-top text-foreground/75">None beyond cable and stand.</TableCell>
                              <TableCell className="align-top text-foreground/75">Audio interface, XLR cable, sometimes phantom power.</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium align-top">Upgrade flexibility</TableCell>
                              <TableCell className="align-top text-foreground/75">Limited — usually a full replacement to upgrade.</TableCell>
                              <TableCell className="align-top text-foreground/75">High — swap mic, interface or cables independently.</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium align-top">Best for</TableCell>
                              <TableCell className="align-top text-foreground/75">Solo podcasters and quick, simple setups.</TableCell>
                              <TableCell className="align-top text-foreground/75">Multi-host shows, interviews and long-term setups.</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium align-top">Budget range</TableCell>
                              <TableCell className="align-top text-foreground/75">Entry to mid-range.</TableCell>
                              <TableCell className="align-top text-foreground/75">Mid-range to professional.</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    )}

                    {s.callout && (
                      <div className={`flex gap-3 p-4 rounded-xl border ${CALLOUT_STYLES[s.callout.kind]}`}>
                        <Lightbulb className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                        <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                          <span className="font-semibold text-foreground">{s.callout.kind}: </span>
                          {s.callout.text}
                        </p>
                      </div>
                    )}

                    {s.image && (
                      <figure className="mt-6 rounded-2xl overflow-hidden border border-border/40 max-w-2xl mx-auto">
                        <img src={s.image.src} alt={s.image.alt} className="w-full h-auto object-cover" />
                        <figcaption className="px-4 py-3 text-xs md:text-sm text-foreground/60 bg-muted/40">
                          {s.image.caption}
                        </figcaption>
                      </figure>
                    )}
                  </div>
                </section>
              ))}

              {/* Gear table */}
              <section id="gear-table" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Beginner Podcast Studio Gear Guide
                </h2>
                <p className="text-foreground/70 mb-6">
                  A quick reference table of every piece of gear in a smart beginner podcast studio setup.
                </p>
                <div className="rounded-xl border border-border/60 overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold w-[22%]">Item</TableHead>
                        <TableHead className="font-semibold w-[32%]">Why You Need It</TableHead>
                        <TableHead className="font-semibold w-[32%]">Beginner Tip</TableHead>
                        <TableHead className="font-semibold w-[14%]">Priority</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {studioGear.map((g) => (
                        <TableRow key={g.item}>
                          <TableCell className="font-medium align-top">{g.item}</TableCell>
                          <TableCell className="align-top text-foreground/75">{g.why}</TableCell>
                          <TableCell className="align-top text-foreground/75">{g.tip}</TableCell>
                          <TableCell className="align-top">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${PRIORITY_COLOR[g.priority]}`}
                            >
                              {g.priority}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </section>

              {/* Checklist */}
              <section id="checklist" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  First Podcast Studio Setup Checklist
                </h2>
                <p className="text-foreground/70 mb-6">
                  Run through this list before recording your first episode. Tick each item as you go.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {studioChecklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors"
                    >
                      <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                      <span className="text-sm md:text-base text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Videos */}
              <section id="videos" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Recommended Videos for Setting Up Your Podcast Studio
                </h2>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  How to Build a Home Podcast Studio for Beginners
                </h3>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/60 bg-muted/40 flex items-center justify-center mb-3">
                  <div className="text-center px-6">
                    <Youtube className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-sm md:text-base text-foreground/70">Add your YouTube tutorial URL here.</p>
                  </div>
                </div>
                <p className="text-xs text-foreground/50 mb-10">
                  Replace this placeholder with an embedded iframe pointing to your chosen tutorial.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Podcast Microphone and Audio Setup Tutorial
                </h3>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/60 bg-muted/40 flex items-center justify-center">
                  <div className="text-center px-6">
                    <Youtube className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-sm md:text-base text-foreground/70">Add your YouTube audio setup URL here.</p>
                  </div>
                </div>
              </section>

              {/* Final image */}
              <section className="mb-14">
                <figure className="rounded-2xl overflow-hidden border border-border/40">
                  <img
                    src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1600&q=80"
                    alt="Creator editing podcast audio on a laptop with headphones"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="px-4 py-3 text-xs md:text-sm text-foreground/60 bg-muted/40">
                    Editing is where a beginner studio setup quietly becomes a professional-sounding podcast.
                  </figcaption>
                </figure>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="rounded-xl border border-border/60 px-5">
                  {studioFaqs.map((f, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="last:border-b-0">
                      <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-foreground/75 leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Author */}
              <section id="author" className="mb-14 scroll-mt-28">
                <div className="flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl border border-border/60 bg-muted/30">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-[hsl(340_90%_55%)] flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    BT
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">Banter Team</h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      Podcast Strategist · Audio Content Creator
                    </p>
                    <p className="text-sm md:text-base text-foreground/75 leading-relaxed mb-4">
                      Helping creators build better podcast setups, improve their audio quality and launch
                      shows with confidence.
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="w-9 h-9 rounded-full bg-background border border-border/60 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href="#"
                        aria-label="YouTube"
                        className="w-9 h-9 rounded-full bg-background border border-border/60 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
                      >
                        <Youtube size={16} />
                      </a>
                      <a
                        href="#"
                        aria-label="Website"
                        className="w-9 h-9 rounded-full bg-background border border-border/60 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
                      >
                        <Globe size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary to-[hsl(340_90%_55%)] text-primary-foreground">
                <div className="relative z-10 max-w-2xl">
                  <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                    Ready to Build a Podcast Studio That Sounds Professional?
                  </h2>
                  <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed mb-7">
                    Start with the right setup, record with confidence and create a podcast your audience will
                    want to keep listening to.
                  </p>
                  <a
                    href="/#booking"
                    onClick={handleCTA}
                    className="cta-swap group inline-flex items-center gap-3 pl-6 pr-2 py-2 h-auto rounded-full bg-background text-foreground font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_hsl(0_0%_0%/0.35)] active:translate-y-0 active:scale-[0.98]"
                  >
                    <span>Book Your Free Call</span>
                    <span className="cta-swap__circle relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 overflow-hidden">
                      <ArrowRight className="cta-swap__arrow--main absolute w-4 h-4 text-primary" />
                      <ArrowRight className="cta-swap__arrow--ghost absolute w-4 h-4 text-primary opacity-0 -translate-x-6" />
                    </span>
                  </a>
                </div>
                <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

type MistakeSection = {
  id: string;
  short: string;
  title: string;
  problem: string;
  why: string;
  fix: string;
  tip: string;
  image?: { src: string; alt: string; caption: string };
};

const mistakes: MistakeSection[] = [
  {
    id: "poor-audio-quality",
    short: "Poor Audio Quality",
    title: "Poor Audio Quality That Drives Listeners Away",
    problem:
      "Listeners can forgive simple cover art or a beginner-level brand, but bad audio is almost impossible to sit through. Background hiss, uneven volume between speakers, room echo, harsh clipping and muffled vocals will push people to hit pause within the first thirty seconds — and most of them never come back.",
    why: "In a directory of millions of shows, audio quality is the fastest signal of whether a podcast is worth a listener's time. Poor sound suggests low effort, which makes everything that follows — your insights, your guests, your story — feel less credible.",
    fix: "Use a decent dynamic USB or XLR microphone, speak about a fist's distance from it, and always wear closed-back headphones while recording so you can hear problems in real time. Record a 30-second test clip every session, watch your input levels (aim for peaks around -6 dB) and re-record if anything sounds off.",
    tip: "Record a short test clip at the start of every session and listen back on phone speakers — if it sounds rough there, it sounds rough everywhere.",
  },
  {
    id: "recording-environment",
    short: "Ignoring Recording Environment",
    title: "Ignoring Recording Environment and Acoustics",
    problem:
      "Even a thousand-dollar microphone sounds amateur in a bare, echoey room. Hard walls, tile floors, glass surfaces and high ceilings bounce sound back into your mic, creating reverb that makes your voice feel distant, hollow and tiring to listen to.",
    why: "Acoustics are baked into your recording. No amount of plugins or post-production can fully remove a bad room, so every episode you ship from a poor space starts at a disadvantage.",
    fix: "Record in the smallest, softest room you have. Add rugs, curtains, blankets, bookshelves and upholstered furniture to break up reflections. If you can, build a simple corner booth with acoustic foam or thick moving blankets behind and around your mic.",
    tip: "Clap loudly in your recording space. If you hear a noticeable ring or echo after the clap, your room needs more soft surfaces before you press record.",
    image: {
      src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&q=80",
      alt: "Home podcast recording setup with acoustic foam treatment behind a microphone",
      caption: "A simple home setup with soft surfaces and basic acoustic treatment beats a bare room every time.",
    },
  },
  {
    id: "overinvesting-equipment",
    short: "Overinvesting in Equipment",
    title: "Overinvesting in Equipment Instead of Content",
    problem:
      "Many beginners spend weeks comparing microphones, mixers and software while their actual show idea stays vague. Expensive gear feels productive, but it can't rescue a podcast that has no clear angle, no strong guests and nothing memorable to say.",
    why: "Audiences subscribe for ideas, stories and insight, not specs. A premium setup attached to a generic concept will always lose to a focused show recorded on a single USB mic.",
    fix: "Start with the simplest reliable setup that gets you to publish, then upgrade only when you've identified a specific limitation. Spend the time you saved on defining your niche, planning episodes and lining up your first ten guests or topics.",
    tip: "Set a hard equipment budget for episodes 1–20. Reinvest in better gear only after you've proven you can publish consistently.",
  },
  {
    id: "inconsistent-schedule",
    short: "Inconsistent Publishing Schedule",
    title: "Inconsistent Publishing Schedule",
    problem:
      "Disappearing for a month, then dropping three episodes at once, breaks the listener habit you're trying to create. Podcast audiences are built on rhythm — they expect your show in their feed at the same time each week.",
    why: "Algorithms on Apple Podcasts, Spotify and YouTube reward consistency. So do humans. A reliable schedule signals professionalism and respect for your listeners' time.",
    fix: "Pick a realistic cadence — weekly, biweekly or monthly — and protect it like a deadline. Batch-record two or three episodes ahead, build a simple content calendar and schedule episodes in advance through your hosting platform.",
    tip: "Choose the slowest cadence you can absolutely commit to for six months. It's better to publish monthly forever than weekly for three weeks.",
  },
  {
    id: "target-audience",
    short: "No Clear Target Audience",
    title: "Not Defining a Clear Target Audience",
    problem:
      "Trying to make a show for everyone usually means making a show for no one. Without a specific listener in mind, your topics drift, your tone wavers and your episode titles fail to grab anyone in particular.",
    why: "Listeners subscribe when a show feels like it was made for them. A clear audience makes every decision — topics, guests, language, length, marketing — dramatically easier and sharper.",
    fix: "Define one specific listener persona: their role, their problems, their level of knowledge and what they want to walk away with. Tape a one-line description of them above your desk and run every episode idea past it.",
    tip: "Write your show description as if you're talking directly to one person, not a crowd. 'For early-stage founders who…' beats 'For anyone interested in business.'",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
      alt: "Content strategy planning board with sticky notes for podcast audience research",
      caption: "Mapping your ideal listener on paper makes every later decision faster and clearer.",
    },
  },
  {
    id: "episode-structure",
    short: "Lack of Episode Structure",
    title: "Lack of Episode Structure or Planning",
    problem:
      "Hitting record without a plan rarely produces the spontaneous magic beginners hope for. More often it produces rambling, repetition, lost threads and episodes that feel twice as long as they should.",
    why: "Listeners give you about 30 seconds to prove an episode is worth their time. Without a strong hook and a clear shape, even good content gets abandoned.",
    fix: "Use a simple repeatable structure: hook, intro, main points, story or example, takeaway, call to action. A one-page outline is enough — it keeps the conversation natural while making sure every episode lands.",
    tip: "Open every episode with the single most interesting sentence from the conversation. Earn the next 30 seconds, then the next.",
  },
  {
    id: "editing-cleanup",
    short: "Skipping Editing and Cleanup",
    title: "Skipping Proper Editing and Cleanup",
    problem:
      "Long pauses, filler words, repeated points, background noise and abrupt transitions add up to a tiring listening experience. You don't need cinematic production, but raw recordings rarely respect your audience's time.",
    why: "Editing is where amateur recordings become professional shows. It tightens pacing, removes distractions and makes hosts and guests sound their best — which directly improves retention and reviews.",
    fix: "Do a basic edit pass on every episode: trim dead air, remove the worst filler, balance levels between speakers, and add a clean intro and outro. Tools like Descript, Audacity, GarageBand or Adobe Audition are more than enough to get started.",
    tip: "If a section bores you while editing, it will bore your listener twice as much. Cut it.",
  },
  {
    id: "weak-branding",
    short: "Weak Podcast Branding",
    title: "Weak or Missing Podcast Branding",
    problem:
      "Your cover art, title, category and description are the storefront of your show. Generic artwork, vague titles and one-line descriptions make it nearly impossible to stand out in a directory of millions of podcasts.",
    why: "Most listeners discover shows by scrolling through tiny thumbnails. If your cover art is unreadable at 60 pixels and your title doesn't promise a clear benefit, you lose the click before you've had a chance to earn the listen.",
    fix: "Treat your launch like a product launch. Invest in clean, readable cover art, write a benefit-led title, choose the right primary category and craft a keyword-rich description that clearly states who the show is for and what they'll learn.",
    tip: "Test your cover art by viewing it on your phone at the size it appears in podcast apps. If you can't read the title, redesign it.",
    image: {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80",
      alt: "Phone screen showing podcast app with various branded podcast cover art",
      caption: "Your cover art lives at thumbnail size — design it to stand out at a glance.",
    },
  },
  {
    id: "promoting-episodes",
    short: "Not Promoting Episodes",
    title: "Not Promoting Episodes Effectively",
    problem:
      "Publishing an episode is roughly half the work. If you're not actively sharing it across social platforms, newsletters, communities and guest networks, even excellent content stays invisible.",
    why: "Discovery on podcast platforms is limited. Most growth comes from external channels — clips on social media, mentions in newsletters, shares from guests and recommendations from listeners.",
    fix: "Build a simple promotion checklist and run it for every episode: short video clip, audiogram, quote graphic, LinkedIn post, Instagram reel, YouTube short, newsletter mention and a community post. Ask every guest to share with their audience.",
    tip: "Spend at least one hour promoting each episode for every hour you spend recording it.",
  },
  {
    id: "giving-up",
    short: "Giving Up Too Early",
    title: "Giving Up Too Early Before Seeing Growth",
    problem:
      "Most podcasts are abandoned before episode ten — right around the point where shows usually start finding their voice and audience. Slow early numbers feel like failure, but they're almost always normal.",
    why: "Podcast growth is compounding. Search rankings, guest networks, listener referrals and your own skill all build slowly over many episodes. Quitting early throws away the foundation you've already paid for.",
    fix: "Commit to at least 20–30 episodes before judging whether the show is working. Track listens, completion rates and feedback, improve one specific thing each episode and treat early listeners as a tight community, not a vanity number.",
    tip: "Set a minimum-episode commitment in writing before you launch. Episode count, not download count, is the real early metric.",
  },
];

const checklist = [
  "Define your target listener",
  "Choose a clear, benefit-led podcast name",
  "Create strong, readable cover art",
  "Record in a quiet, soft-surfaced room",
  "Test your microphone levels before every session",
  "Plan and outline your first 10 episodes",
  "Edit and clean up audio (pauses, filler, levels)",
  "Write SEO-friendly episode titles and show notes",
  "Publish on a consistent schedule you can sustain",
  "Promote each episode on multiple platforms",
  "Track listener feedback and improve every episode",
];

const faqs = [
  {
    q: "What is the biggest mistake new podcasters make?",
    a: "By far, the most damaging mistake is publishing inconsistently. Audio quality and branding matter, but a podcast that disappears for weeks loses listener trust faster than one with rough edges and a steady schedule. Pick a realistic cadence and protect it.",
  },
  {
    q: "How important is audio quality for a beginner podcast?",
    a: "Audio quality is the single biggest factor in whether someone listens past the first minute. You don't need broadcast-grade gear, but you do need a decent microphone, a quiet room and clean levels. Get those three things right and your show already sounds better than most beginner podcasts.",
  },
  {
    q: "Do I need expensive equipment to start a podcast?",
    a: "No. A reliable USB microphone, closed-back headphones and free editing software like Audacity or GarageBand are enough to launch a professional-sounding show. Upgrade only when you've identified a specific limitation in your current setup.",
  },
  {
    q: "How often should I publish podcast episodes?",
    a: "Choose the cadence you can realistically sustain for at least six months. Weekly is ideal for growth, biweekly is a strong middle ground, and monthly is fine if it lets you maintain quality. Consistency matters more than frequency.",
  },
  {
    q: "How long does it take for a podcast to grow?",
    a: "Most podcasts take 6–12 months of consistent publishing before meaningful growth appears. Real traction usually comes after episode 20–30, once your format is dialled in, your back catalogue is searchable and your guests start sharing your show.",
  },
  {
    q: "Should I put my podcast on YouTube too?",
    a: "Yes. YouTube has become one of the largest podcast discovery platforms in the world. Even a simple static-image upload or a basic video recording opens you up to a huge audience that prefers watching over listening — and it doubles as content for shorts and clips.",
  },
];

const ToCItem = ({ id, label }: { id: string; label: string }) => (
  <li>
    <a
      href={`#${id}`}
      className="group flex items-start gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
    >
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
      <span className="leading-snug">{label}</span>
    </a>
  </li>
);

const MistakesArticle = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/#booking";
  };

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary to-[hsl(340_90%_55%)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article className="pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300 mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {/* Hero */}
          <header className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-5">
              Podcasting
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
              Top 10 Podcasting Mistakes Beginners Make
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-7 max-w-3xl">
              New podcasters often struggle with audio quality, consistency, branding, planning and promotion.
              Here are the ten most common mistakes — and exactly how to fix each one before they slow your show down.
            </p>
            <div className="flex flex-wrap items-center gap-5 text-xs md:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-primary" />
                Banter Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary" />
                Updated May 7, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-primary" />
                9 min read
              </span>
            </div>
          </header>

          <div className="rounded-2xl overflow-hidden mb-12 border border-border/40">
            <img
              src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=1600&q=80"
              alt="Podcast host recording an episode into a professional microphone in a home studio"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Two-column: ToC + content */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-10 lg:gap-14">
            {/* Sticky ToC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-4">
                  On this page
                </p>
                <ul className="space-y-2.5">
                  {mistakes.map((m, i) => (
                    <ToCItem key={m.id} id={m.id} label={`${i + 1}. ${m.short}`} />
                  ))}
                  <ToCItem id="comparison" label="Comparison Table" />
                  <ToCItem id="checklist" label="Launch Checklist" />
                  <ToCItem id="videos" label="Recommended Videos" />
                  <ToCItem id="final-thoughts" label="Final Thoughts" />
                  <ToCItem id="faqs" label="FAQs" />
                </ul>
              </div>
            </aside>

            <div className="min-w-0">
              {/* Mobile ToC */}
              <div className="lg:hidden mb-10 p-5 rounded-xl border border-border/60 bg-muted/30">
                <p className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-3">
                  Table of contents
                </p>
                <ul className="space-y-2">
                  {mistakes.map((m, i) => (
                    <ToCItem key={m.id} id={m.id} label={`${i + 1}. ${m.short}`} />
                  ))}
                  <ToCItem id="final-thoughts" label="Final Thoughts" />
                  <ToCItem id="faqs" label="FAQs" />
                </ul>
              </div>

              {/* Intro */}
              <section className="mb-14">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                  Starting a podcast is one of the most exciting creative pursuits you can take on — and one of
                  the easiest to quietly sabotage in the first few months. Most beginner mistakes aren't dramatic.
                  They're small, easy to overlook and almost always rooted in enthusiasm outpacing preparation.
                </p>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed mt-5">
                  The good news is that every one of them is fixable. Once you understand the fundamentals of audio,
                  audience, structure, branding and promotion, you can avoid the traps that cause most new shows to
                  fade out before episode ten. This guide walks through the ten mistakes we see most often, why they
                  hurt your growth and exactly what to do instead.
                </p>
              </section>

              {/* Mistakes */}
              {mistakes.map((m, i) => (
                <section key={m.id} id={m.id} className="mb-14 scroll-mt-28">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-primary to-[hsl(340_90%_55%)] text-primary-foreground text-base font-bold flex items-center justify-center shadow-[0_8px_20px_-6px_hsl(352_98%_63%/0.5)]">
                      {i + 1}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight pt-1.5">
                      {m.title}
                    </h2>
                  </div>

                  <div className="space-y-5 pl-0 md:pl-[60px]">
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed">{m.problem}</p>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-2">
                        Why it hurts your growth
                      </h3>
                      <p className="text-base text-foreground/80 leading-relaxed">{m.why}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-2">
                        How to fix it
                      </h3>
                      <p className="text-base text-foreground/80 leading-relaxed">{m.fix}</p>
                    </div>

                    <div className="flex gap-3 p-4 rounded-xl bg-[hsl(350_100%_98%)] border border-[hsl(350_90%_92%)]/70">
                      <Lightbulb className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                      <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                        <span className="font-semibold text-foreground">Quick tip: </span>
                        {m.tip}
                      </p>
                    </div>

                    {m.image && (
                      <figure
                        className={`mt-6 rounded-2xl overflow-hidden border border-border/40 ${
                          m.id === "recording-environment" ? "max-w-md mx-auto" : ""
                        }`}
                      >
                        <img src={m.image.src} alt={m.image.alt} className="w-full h-auto object-cover" />
                        <figcaption className="px-4 py-3 text-xs md:text-sm text-foreground/60 bg-muted/40">
                          {m.image.caption}
                        </figcaption>
                      </figure>
                    )}
                  </div>
                </section>
              ))}

              {/* Comparison table */}
              <section id="comparison" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Beginner Podcast Mistakes and Quick Fixes
                </h2>
                <p className="text-foreground/70 mb-6">
                  A quick reference of every mistake covered in this guide.
                </p>
                <div className="rounded-xl border border-border/60 overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="w-[28%] font-semibold">Mistake</TableHead>
                        <TableHead className="w-[36%] font-semibold">Why it hurts</TableHead>
                        <TableHead className="w-[36%] font-semibold">Quick fix</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mistakes.map((m) => (
                        <TableRow key={m.id}>
                          <TableCell className="font-medium align-top">{m.short}</TableCell>
                          <TableCell className="align-top text-foreground/75">{m.why}</TableCell>
                          <TableCell className="align-top text-foreground/75">{m.fix}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </section>

              {/* Checklist */}
              <section id="checklist" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Beginner Podcast Launch Checklist
                </h2>
                <p className="text-foreground/70 mb-6">
                  Print this, pin it above your desk, and tick each item before you publish your first episode.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors"
                    >
                      <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                      <span className="text-sm md:text-base text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Videos */}
              <section id="videos" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Recommended Video: How to Start a Podcast the Right Way
                </h2>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/60 bg-muted/40 mb-10">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/JeJ-JDU5bqw"
                    title="How to Start a Podcast the Right Way"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  Podcast Audio Setup Tutorial for Beginners
                </h3>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/60 bg-muted/40">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/mwFYiFZO6sI"
                    title="Podcast Audio Setup Tutorial for Beginners"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </section>

              {/* Final thoughts */}
              <section id="final-thoughts" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Final Thoughts</h2>
                <figure className="mb-6 rounded-2xl overflow-hidden border border-border/40">
                  <img
                    src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1600&q=80"
                    alt="Podcaster editing audio on a laptop with headphones on"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="px-4 py-3 text-xs md:text-sm text-foreground/60 bg-muted/40">
                    Editing is where most beginner podcasts quietly become professional shows.
                  </figcaption>
                </figure>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
                  None of these ten mistakes are fatal on their own. What separates podcasts that grow from
                  podcasts that fade is the willingness to address them honestly — to listen back to your own
                  episodes with fresh ears, to upgrade one weak link at a time and to keep showing up after the
                  early excitement wears off.
                </p>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  Focus on clear audio, a sharp audience, a structure you can repeat, branding that earns the
                  click and a promotion habit you actually run. Do those five things consistently for thirty
                  episodes and you'll already be in the top tier of new podcasters.
                </p>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="rounded-xl border border-border/60 px-5">
                  {faqs.map((f, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="last:border-b-0">
                      <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-foreground/75 leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Author box */}
              <section className="mb-14">
                <div className="flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl border border-border/60 bg-muted/30">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-[hsl(340_90%_55%)] flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    BT
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">Banter Team</h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      Podcast Strategist · Content Creator
                    </p>
                    <p className="text-sm md:text-base text-foreground/75 leading-relaxed mb-4">
                      Helping creators launch, grow and improve podcasts with practical content strategy,
                      audio tips and audience-building advice.
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="w-9 h-9 rounded-full bg-background border border-border/60 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href="#"
                        aria-label="YouTube"
                        className="w-9 h-9 rounded-full bg-background border border-border/60 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
                      >
                        <Youtube size={16} />
                      </a>
                      <a
                        href="#"
                        aria-label="Website"
                        className="w-9 h-9 rounded-full bg-background border border-border/60 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
                      >
                        <Globe size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary to-[hsl(340_90%_55%)] text-primary-foreground">
                <div className="relative z-10 max-w-2xl">
                  <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                    Ready to Launch a Podcast That Sounds Professional?
                  </h2>
                  <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed mb-7">
                    Start with a clear strategy, better audio and a publishing rhythm you can keep. Book a free
                    call and we'll help you map out your first ten episodes.
                  </p>
                  <a
                    href="/#booking"
                    onClick={handleCTA}
                    className="cta-swap group inline-flex items-center gap-3 pl-6 pr-2 py-2 h-auto rounded-full bg-background text-foreground font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_hsl(0_0%_0%/0.35)] active:translate-y-0 active:scale-[0.98]"
                  >
                    <span>Book Your Free Call</span>
                    <span className="cta-swap__circle relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 overflow-hidden">
                      <ArrowRight className="cta-swap__arrow--main absolute w-4 h-4 text-primary" />
                      <ArrowRight className="cta-swap__arrow--ghost absolute w-4 h-4 text-primary opacity-0 -translate-x-6" />
                    </span>
                  </a>
                </div>
                <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

// =====================================================================
// "Why Every Brand Needs a Podcast in 2026" — long-form article data
// =====================================================================

type BrandSection = {
  id: string;
  short: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: { kind: "Brand Strategy Tip" | "Common Mistake" | "Pro Tip" | "Budget Tip"; text: string };
  image?: { src: string; alt: string; caption: string };
  video?: { title: string; placeholder: string; url?: string };
};

const BRAND_CALLOUT_STYLES: Record<NonNullable<BrandSection["callout"]>["kind"], string> = {
  "Brand Strategy Tip": "bg-[hsl(210_100%_98%)] border-[hsl(210_90%_88%)]/70",
  "Common Mistake": "bg-[hsl(0_100%_98%)] border-[hsl(0_90%_88%)]/70",
  "Pro Tip": "bg-[hsl(150_60%_97%)] border-[hsl(150_50%_85%)]/70",
  "Budget Tip": "bg-[hsl(45_100%_97%)] border-[hsl(45_90%_85%)]/70",
};

const brandSections: BrandSection[] = [
  {
    id: "deeper-trust",
    short: "Podcasting Builds Deeper Trust",
    title: "Podcasting Builds Deeper Trust Than Short-Form Content",
    paragraphs: [
      "Short-form video is excellent at capturing attention, but it rarely captures belief. A scroll past a fifteen-second clip is a moment. A listener spending twenty, thirty or forty-five minutes inside your brand's conversation is a relationship. That difference is everything in 2026, when audiences are skeptical of polished marketing and increasingly drawn to formats that feel honest.",
      "Voice does something visuals can't. The cadence, pauses and warmth of a real conversation create intimacy that's almost impossible to fake. Over time, your audience starts to recognize voices, anticipate the show and treat your brand less like an advertiser and more like a trusted regular in their week.",
    ],
    bullets: [
      "Voice creates a sense of intimacy and familiarity that visuals alone can't.",
      "Long-form conversations leave room for nuance, context and real expertise.",
      "Repeated listening compounds trust the way no single ad can.",
      "Podcasts make a brand feel human first, transactional second.",
    ],
    callout: {
      kind: "Brand Strategy Tip",
      text: "Think of your podcast as a relationship-building channel, not just another content format.",
    },
  },
  {
    id: "owned-media",
    short: "Brands Need Owned Media Channels",
    title: "Brands Need Owned Media Channels",
    paragraphs: [
      "Building an entire brand on rented platforms is one of the riskiest strategies in modern marketing. Algorithms shift overnight, ad costs climb every quarter, and organic reach has been quietly declining for years. The brands that will compound an audience in 2026 are the ones that own a direct, durable line to their listeners.",
      "A podcast is one of the strongest owned media assets a brand can build. Episodes live on the brand's website, every major podcast app, YouTube and inside email — all distribution channels you actually control. That makes the show a long-term content asset, not a campaign.",
    ],
    bullets: [
      "A podcast becomes a durable content asset that doesn't disappear with the next algorithm change.",
      "Episodes can live on your website, podcast platforms, YouTube and your newsletter.",
      "It gives your brand a repeatable, expected reason to show up for the audience.",
      "It supports a long-term content ecosystem instead of one-off bursts.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
      alt: "Brand team planning a podcast content strategy",
      caption: "Marketing team planning a branded podcast content calendar.",
    },
  },
  {
    id: "humanize-brand",
    short: "Podcasts Humanize Your Brand",
    title: "Podcasts Humanize Your Brand",
    paragraphs: [
      "People connect with people, not logos. A podcast is one of the few formats that lets your audience hear the actual humans behind the brand — their thinking, their humor, their convictions and their uncertainty. That kind of access is hard to manufacture in a campaign and almost impossible to fake on social.",
      "The strongest brand podcasts borrow their warmth from the people in front of the mic. Founders, executives, customers and team members each unlock a different layer of trust your marketing copy simply can't reach.",
    ],
    bullets: [
      "Founder-led episodes build personal trust and clarify brand point of view.",
      "Customer stories add lived-in authenticity that case studies often lack.",
      "Behind-the-scenes conversations make the brand feel approachable and real.",
      "Expert interviews position your brand as generous and useful, not just commercial.",
    ],
  },
  {
    id: "long-form-authority",
    short: "Long-Form Content Creates Authority",
    title: "Long-Form Content Creates Authority",
    paragraphs: [
      "Authority is not a tagline. It's earned slowly, by repeatedly helping your audience understand something better than they did before. Short posts can introduce ideas, but only long-form formats give you enough room to actually develop them — to walk through frameworks, reasoning and trade-offs in a way that sticks.",
      "A podcast is one of the most efficient long-form formats a brand can run, because conversation is naturally generative. Each guest, question and tangent adds a new angle of expertise the brand can stand on.",
    ],
    bullets: [
      "Educational episodes help customers make better, more informed decisions.",
      "Industry analysis shows the brand has a real point of view, not just opinions.",
      "Interviews with respected experts strengthen your credibility by association.",
      "Consistency across dozens of episodes compounds authority no campaign can match.",
    ],
    callout: {
      kind: "Pro Tip",
      text: "Authority is not built by saying you are an expert. It is built by repeatedly helping your audience understand something better.",
    },
  },
  {
    id: "multi-platform-content",
    short: "Episodes Become Multi-Platform Content",
    title: "Podcast Episodes Become Multi-Platform Content",
    paragraphs: [
      "A single, well-planned podcast episode is rarely just an episode. With a smart workflow, one recording can become the backbone of a full week of marketing across nearly every channel your brand uses. That's why mature content teams treat the podcast as a content engine, not an audio show.",
      "Done well, this turns the podcast into the most efficient piece of content your brand creates each week — one production cycle, many touchpoints.",
    ],
    bullets: [
      "Full podcast episode published on Apple, Spotify and other apps",
      "YouTube video version of the same conversation",
      "Short-form video clips for Reels, Shorts and TikTok",
      "Quote graphics for social feeds",
      "A blog article based on the episode",
      "A featured section in your newsletter",
      "LinkedIn posts breaking down the best ideas",
      "Instagram carousels summarizing key takeaways",
      "X/Twitter threads pulling out frameworks and quotes",
      "Sales enablement content for your team",
      "Resource pages on your brand website",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&q=80",
      alt: "Podcast episode repurposed into multiple content formats",
      caption: "One episode becomes social clips, blog posts, newsletter sections and YouTube content.",
    },
  },
  {
    id: "audio-habits",
    short: "Audio Builds Stronger Audience Habits",
    title: "Audio Builds Stronger Audience Habits",
    paragraphs: [
      "Audio fits into pockets of attention that other content formats simply can't reach. People listen while commuting, walking, exercising, cooking and working — moments where reading a blog post or watching a video isn't possible, but a familiar voice in their ears is.",
      "Those small, recurring moments are exactly where audience habits are built. The more often your show shows up in someone's week, the more naturally your brand becomes part of how they think about your category.",
    ],
    bullets: [
      "Listeners can engage during commutes, workouts, chores and downtime.",
      "Regular publishing creates predictable, repeat touchpoints with your audience.",
      "Consistency trains listeners to come back without you constantly reminding them.",
      "Familiar voices and recurring formats build genuine loyalty over time.",
    ],
  },
  {
    id: "thought-leadership",
    short: "Podcasts Support Thought Leadership",
    title: "Podcasts Support Thought Leadership",
    paragraphs: [
      "Real thought leadership isn't about volume of opinions — it's about owning a clear point of view and creating useful conversations around it. A podcast is one of the few formats that gives a brand both the space and the credibility to do that consistently.",
      "When a brand becomes the host of the conversation in its category, the dynamic shifts. You're no longer one of many voices competing for attention — you're the one bringing the room together.",
    ],
    bullets: [
      "Lead industry conversations instead of just participating in them.",
      "Spotlight partners, clients and respected experts on your platform.",
      "Explore trends, challenges and predictions with depth and nuance.",
      "Use the show as a platform for your brand's category perspective.",
    ],
    video: {
      title: "Recommended Video: How Brands Can Use Podcasts for Thought Leadership",
      placeholder: "Add your YouTube video URL here.",
      url: "https://www.youtube.com/embed/Rzty6V6EVQI",
    },
  },
  {
    id: "community",
    short: "Improves Community and Customer Relationships",
    title: "Podcasting Improves Community and Customer Relationships",
    paragraphs: [
      "A brand podcast is one of the most underused tools for deepening relationships with the people you already work with — customers, prospects, partners and even internal teams. Inviting someone onto your show changes the relationship; they're no longer just a transaction, they're part of the story.",
      "Some of the best episodes a brand will ever publish are built on insights they already have access to but rarely treat as content.",
    ],
    bullets: [
      "Invite real customers as guests and let them share their experience.",
      "Feature partner stories that strengthen mutual relationships.",
      "Answer the questions your audience is actually asking on every channel.",
      "Turn customer insights and use cases into recurring episode topics.",
      "Use episodes to support onboarding, education and retention.",
    ],
    callout: {
      kind: "Pro Tip",
      text: "Your best podcast topics are often hidden inside sales calls, customer support conversations and frequently asked questions.",
    },
  },
  {
    id: "affordable",
    short: "Brand Podcasts Are More Affordable Than Ever",
    title: "Starting a Brand Podcast Is More Affordable Than Ever",
    paragraphs: [
      "Starting a brand podcast in 2026 doesn't require a flagship studio, a full production crew or a six-figure budget. Affordable microphones, beginner-friendly recording tools, polished remote interview platforms, modern editing software and AI-assisted workflows have made podcast production more accessible than at any point in the medium's history.",
      "What separates the brand podcasts that work from the ones that quietly disappear isn't budget — it's clarity, consistency and usefulness. A focused show recorded with a modest setup will outperform an over-engineered production with no point of view, every single time.",
    ],
    bullets: [
      "The goal is not perfection — it is clarity, consistency and usefulness.",
      "Start with a focused format and improve it over time.",
      "A basic but thoughtful setup can sound genuinely professional.",
      "Avoid overcomplicating the launch — most brand podcasts fail from over-planning, not under-investing.",
    ],
    callout: {
      kind: "Budget Tip",
      text: "Podcasting success does not come from having the most expensive setup. It comes from showing up consistently with a clear message and valuable conversations your audience wants to hear.",
    },
  },
  {
    id: "launch-framework",
    short: "How to Launch a Brand Podcast in 2026",
    title: "How to Launch a Brand Podcast in 2026",
    paragraphs: [
      "Most failed brand podcasts share the same root cause: they launched without a real strategy. The framework below is the same one we use with founders and marketing teams to give a new show the best possible chance of becoming a long-term asset rather than a short-lived experiment.",
    ],
    bullets: [
      "Define your audience and the business goal the podcast supports.",
      "Choose a clear, specific positioning statement for the show.",
      "Pick a format: solo, interview, panel, customer stories, education series, or founder-led conversations.",
      "Plan the first ten episode topics before recording episode one.",
      "Create show branding: name, cover art, description, intro, outro and visual style.",
      "Set up a basic but reliable recording environment.",
      "Commit to a publishing schedule you can actually sustain.",
      "Build a promotion and repurposing workflow from day one.",
      "Track performance, listener feedback and qualitative signals.",
      "Improve one specific thing every single episode.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?w=1600&q=80",
      alt: "Founder recording a branded business podcast",
      caption: "A founder recording a brand podcast in a clean, simple home studio.",
    },
  },
];

const brandStrategyTable = [
  { goal: "Build trust", help: "Long-form conversations let audiences spend real time with your brand.", example: "Series on real customer journeys and outcomes.", priority: "Essential" as const },
  { goal: "Generate authority", help: "Recurring expert episodes establish your brand's point of view.", example: "Monthly category deep-dives with industry experts.", priority: "Essential" as const },
  { goal: "Educate customers", help: "Episodes can unpack complex products and use cases in plain language.", example: "How-to episodes for your top customer questions.", priority: "Essential" as const },
  { goal: "Support sales", help: "Episodes become high-trust assets your sales team can share.", example: "Use case episodes mapped to specific buyer personas.", priority: "High" as const },
  { goal: "Strengthen community", help: "Featuring customers and partners deepens existing relationships.", example: "Quarterly community spotlight episodes.", priority: "High" as const },
  { goal: "Repurpose content", help: "One episode powers blogs, social, video clips and newsletters.", example: "Weekly clip + blog + newsletter from each episode.", priority: "Essential" as const },
  { goal: "Improve retention", help: "Recurring episodes give existing customers a reason to stay engaged.", example: "Insider episodes for current customers and users.", priority: "Medium" as const },
  { goal: "Build partnerships", help: "Inviting partners on the show creates genuine, lasting relationships.", example: "Partner-led conversations on shared customer wins.", priority: "High" as const },
  { goal: "Humanize leadership", help: "Founder and executive voices add personality and conviction.", example: "Founder series on the brand's vision and bets.", priority: "High" as const },
  { goal: "Create owned media", help: "An episode catalogue is a long-term asset you fully control.", example: "An on-site podcast hub indexed for search and SEO.", priority: "Essential" as const },
];

const contentTypeTable = [
  { type: "Blog posts", strength: "Strong for SEO and evergreen long-tail discovery.", limit: "Lower emotional connection; easy to skim.", best: "Driving organic search traffic and ranking on intent." },
  { type: "Social media posts", strength: "Excellent for reach, awareness and quick distribution.", limit: "Short attention windows; algorithm-dependent.", best: "Top-of-funnel awareness and audience nurturing." },
  { type: "Paid ads", strength: "Predictable, scalable distribution to targeted audiences.", limit: "Stops working the moment you stop paying.", best: "Demand capture and direct-response campaigns." },
  { type: "Email newsletters", strength: "Owned audience with high attention and trust.", limit: "Requires consistent writing and a growing list.", best: "Recurring direct relationships with engaged readers." },
  { type: "Webinars", strength: "Deep, interactive engagement and strong lead capture.", limit: "Time-intensive; lower frequency of publishing.", best: "Mid-funnel education and qualified pipeline." },
  { type: "Podcasts", strength: "Long-form trust, intimacy, authority and content fuel.", limit: "Slower initial growth; needs consistent publishing.", best: "Trust, thought leadership and long-term audience building." },
  { type: "YouTube videos", strength: "Massive discoverability and long shelf life.", limit: "High production effort per asset.", best: "Visual storytelling, tutorials and discovery." },
];

const brandChecklist = [
  "Define the audience your show is built for",
  "Define the business goal the podcast supports",
  "Choose the podcast format that fits your team",
  "Create a clear show promise in one sentence",
  "Pick a memorable, search-friendly podcast name",
  "Design clean, recognizable cover art",
  "Write a keyword-friendly show description",
  "Plan the first ten episodes before launch",
  "Set up reliable recording equipment",
  "Choose recording and editing software you'll actually use",
  "Create a consistent intro and outro",
  "Build a realistic publishing schedule",
  "Document a promotion checklist for every episode",
  "Repurpose every episode into smaller assets",
  "Track performance metrics monthly",
  "Collect listener feedback and act on it",
];

const brandFaqs = [
  {
    q: "Why should a brand start a podcast in 2026?",
    a: "Because podcasts give brands something most content formats can't: long-form attention from a self-selected audience. They build trust, establish authority, create deep audience relationships and produce a content engine that fuels social, email, blog and video — all from one weekly recording.",
  },
  {
    q: "Is podcasting still worth it for businesses?",
    a: "Yes — especially for businesses that have a clear point of view, a target audience and a willingness to publish consistently. The brands that win in podcasting aren't necessarily the biggest; they're the ones with sharp positioning, a reliable cadence and a real promotion strategy.",
  },
  {
    q: "What type of brand should start a podcast?",
    a: "Brands with deep expertise, customer education needs, founder stories worth telling, community-building goals, industry-shaping perspectives, or complex products that benefit from explanation. If your audience asks the same questions repeatedly, you almost certainly have a podcast in your business.",
  },
  {
    q: "How often should a brand publish podcast episodes?",
    a: "Pick a cadence you can realistically sustain for at least six months. Weekly is ideal for growth, biweekly is a strong middle ground, and monthly is fine if it lets you protect quality. Consistency matters far more than frequency.",
  },
  {
    q: "Does a brand podcast need video?",
    a: "Video isn't required, but it's increasingly valuable. A video version unlocks YouTube discovery, short-form clips for social, and added trust through visible faces. Many brands start audio-only and add video once the workflow is dialled in.",
  },
  {
    q: "How long should brand podcast episodes be?",
    a: "Episode length should match the value of the conversation, not a fixed target. Most brand podcasts work well between 20 and 45 minutes, but tight 10–15 minute educational episodes can be just as effective when the content is sharp.",
  },
  {
    q: "How do you measure brand podcast success?",
    a: "Look beyond downloads. Track watch time, listener retention, website traffic from episodes, newsletter signups, lead quality, customer feedback, guest relationships built and how well your repurposed content performs across channels.",
  },
  {
    q: "What is the biggest mistake brands make with podcasting?",
    a: "Starting without a clear strategy. Most underperforming brand podcasts launch with no defined audience, no specific format, no promotion plan and no commitment to consistency. Strategy first, recording second.",
  },
];

const BrandPodcastArticle = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/#booking";
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary to-[hsl(340_90%_55%)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article className="pt-28 pb-20 md:pt-32 md:pb-28 scroll-smooth">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300 mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <header className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-5">
              Podcast Marketing
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
              Why Every Brand Needs a Podcast in 2026
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-7 max-w-3xl">
              Podcasting is no longer just a creator trend. It is becoming one of the most powerful ways for
              brands to build trust, authority and long-term audience relationships.
            </p>
            <div className="flex flex-wrap items-center gap-5 text-xs md:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-primary" />
                Banter Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary" />
                Updated May 7, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-primary" />
                9 min read
              </span>
            </div>
          </header>

          <div className="rounded-2xl overflow-hidden mb-12 border border-border/40">
            <img
              src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600&q=80"
              alt="Founder recording a branded podcast in a modern studio"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-10 lg:gap-14">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-4">
                  On this page
                </p>
                <ul className="space-y-2.5">
                  {brandSections.map((s) => (
                    <ToCItem key={s.id} id={s.id} label={s.short} />
                  ))}
                  <ToCItem id="strategy-table" label="Brand Podcast Strategy Table" />
                  <ToCItem id="vs-traditional" label="Podcast vs Traditional Content" />
                  <ToCItem id="checklist" label="Launch Checklist" />
                  <ToCItem id="videos" label="Recommended Videos" />
                  <ToCItem id="faqs" label="FAQs" />
                  <ToCItem id="author" label="Author" />
                </ul>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="lg:hidden mb-10 p-5 rounded-xl border border-border/60 bg-muted/30">
                <p className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-3">
                  Table of contents
                </p>
                <ul className="space-y-2">
                  {brandSections.map((s) => (
                    <ToCItem key={s.id} id={s.id} label={s.short} />
                  ))}
                  <ToCItem id="strategy-table" label="Brand Podcast Strategy Table" />
                  <ToCItem id="vs-traditional" label="Podcast vs Traditional Content" />
                  <ToCItem id="checklist" label="Launch Checklist" />
                  <ToCItem id="videos" label="Recommended Videos" />
                  <ToCItem id="faqs" label="FAQs" />
                </ul>
              </div>

              {/* Intro */}
              <section className="mb-14">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                  Attention is harder to earn than it has ever been, and audiences are more skeptical of polished
                  marketing than at any point in the last decade. Banner blindness has become content blindness —
                  feeds full of ads, sponsored posts and algorithm-optimized content that all blend together. In
                  that environment, brands that want to actually be remembered need a content channel that is
                  human, direct and high-retention. That channel, increasingly, is podcasting.
                </p>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed mt-5">
                  This guide is for founders, marketers, agencies, consultants and creators who are wondering
                  whether a brand podcast is worth the investment in 2026. Short answer: yes — but only if it's
                  built like a long-term media asset, not a campaign. The pages below break down exactly why
                  podcasting works for brands, how it compounds, and how to launch a show that earns trust,
                  authority and audience for years.
                </p>
              </section>

              {/* Sections */}
              {brandSections.map((s, i) => (
                <section key={s.id} id={s.id} className="mb-14 scroll-mt-28">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-primary to-[hsl(340_90%_55%)] text-primary-foreground text-base font-bold flex items-center justify-center shadow-[0_8px_20px_-6px_hsl(352_98%_63%/0.5)]">
                      {i + 1}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight pt-1.5">
                      {s.title}
                    </h2>
                  </div>

                  <div className="space-y-5 pl-0 md:pl-[60px]">
                    {s.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-base md:text-lg text-foreground/80 leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {s.bullets && (
                      <ul className="space-y-2.5">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                            <span className="text-base text-foreground/80 leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {s.callout && (
                      <div className={`flex gap-3 p-4 rounded-xl border ${BRAND_CALLOUT_STYLES[s.callout.kind]}`}>
                        <Lightbulb className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                        <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                          <span className="font-semibold text-foreground">{s.callout.kind}: </span>
                          {s.callout.text}
                        </p>
                      </div>
                    )}

                    {s.image && (
                      <figure className="mt-6 rounded-2xl overflow-hidden border border-border/40 max-w-2xl mx-auto">
                        <img src={s.image.src} alt={s.image.alt} className="w-full h-auto object-cover" />
                        <figcaption className="px-4 py-3 text-xs md:text-sm text-foreground/60 bg-muted/40">
                          {s.image.caption}
                        </figcaption>
                      </figure>
                    )}

                    {s.video && (
                      <div className="mt-6">
                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{s.video.title}</h3>
                        {s.video.url ? (
                          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/60 bg-muted/40">
                            <iframe
                              className="w-full h-full"
                              src={s.video.url}
                              title={s.video.title}
                              frameBorder={0}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-dashed border-border/70 bg-muted/40 flex items-center justify-center">
                            <p className="text-sm text-foreground/60 px-6 text-center">{s.video.placeholder}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </section>
              ))}

              {/* Strategy table */}
              <section id="strategy-table" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Why Brands Should Invest in Podcasting in 2026
                </h2>
                <p className="text-foreground/70 mb-6">
                  A quick reference for matching brand goals to podcast formats and episode ideas.
                </p>
                <div className="rounded-xl border border-border/60 overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold w-[20%]">Brand Goal</TableHead>
                        <TableHead className="font-semibold w-[34%]">How a Podcast Helps</TableHead>
                        <TableHead className="font-semibold w-[32%]">Example Episode Idea</TableHead>
                        <TableHead className="font-semibold w-[14%]">Priority</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {brandStrategyTable.map((g) => (
                        <TableRow key={g.goal}>
                          <TableCell className="font-medium align-top">{g.goal}</TableCell>
                          <TableCell className="align-top text-foreground/75">{g.help}</TableCell>
                          <TableCell className="align-top text-foreground/75">{g.example}</TableCell>
                          <TableCell className="align-top">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${PRIORITY_COLOR[g.priority]}`}
                            >
                              {g.priority}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </section>

              {/* Podcast vs Traditional table */}
              <section id="vs-traditional" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Podcasting vs Traditional Brand Content
                </h2>
                <p className="text-foreground/70 mb-6">
                  Podcasting doesn't replace your existing content — it works best as part of a larger content
                  ecosystem. Here's how the major formats compare.
                </p>
                <div className="rounded-xl border border-border/60 overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold w-[18%]">Content Type</TableHead>
                        <TableHead className="font-semibold w-[28%]">Strength</TableHead>
                        <TableHead className="font-semibold w-[27%]">Limitation</TableHead>
                        <TableHead className="font-semibold w-[27%]">Best Use Case</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contentTypeTable.map((c) => (
                        <TableRow key={c.type}>
                          <TableCell className="font-medium align-top">{c.type}</TableCell>
                          <TableCell className="align-top text-foreground/75">{c.strength}</TableCell>
                          <TableCell className="align-top text-foreground/75">{c.limit}</TableCell>
                          <TableCell className="align-top text-foreground/75">{c.best}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </section>

              {/* Checklist */}
              <section id="checklist" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Brand Podcast Launch Checklist
                </h2>
                <p className="text-foreground/70 mb-6">
                  Use this as your single source of truth before publishing your first episode.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {brandChecklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors"
                    >
                      <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                      <span className="text-sm md:text-base text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Videos */}
              <section id="videos" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Recommended Videos for Brand Podcasting
                </h2>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  How to Start a Branded Podcast for Your Business
                </h3>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-dashed border-border/70 bg-muted/40 mb-10 flex items-center justify-center">
                  <p className="text-sm text-foreground/60 px-6 text-center">
                    Add your YouTube tutorial URL here.
                  </p>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Podcast Marketing Strategy for Brands in 2026
                </h3>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-dashed border-border/70 bg-muted/40 flex items-center justify-center">
                  <p className="text-sm text-foreground/60 px-6 text-center">
                    Add your podcast marketing video URL here.
                  </p>
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="rounded-xl border border-border/60 px-5">
                  {brandFaqs.map((f, i) => (
                    <AccordionItem key={i} value={`brand-faq-${i}`} className="last:border-b-0">
                      <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-foreground/75 leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Author */}
              <section id="author" className="mb-14">
                <div className="flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl border border-border/60 bg-muted/30">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-[hsl(340_90%_55%)] flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    BT
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">Banter Team</h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      Brand Podcast Strategist · Content Marketing Specialist
                    </p>
                    <p className="text-sm md:text-base text-foreground/75 leading-relaxed mb-4">
                      Helping brands turn expertise, conversations and customer insights into podcasts that build
                      trust, authority and long-term audience relationships.
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="w-9 h-9 rounded-full bg-background border border-border/60 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href="#"
                        aria-label="YouTube"
                        className="w-9 h-9 rounded-full bg-background border border-border/60 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
                      >
                        <Youtube size={16} />
                      </a>
                      <a
                        href="#"
                        aria-label="Website"
                        className="w-9 h-9 rounded-full bg-background border border-border/60 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
                      >
                        <Globe size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary to-[hsl(340_90%_55%)] text-primary-foreground">
                <div className="relative z-10 max-w-2xl">
                  <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                    Ready to Turn Your Brand Voice Into a Podcast?
                  </h2>
                  <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed mb-7">
                    Build trust, educate your audience and create a content engine that works across every
                    platform.
                  </p>
                  <a
                    href="/#booking"
                    onClick={handleCTA}
                    className="cta-swap group inline-flex items-center gap-3 pl-6 pr-2 py-2 h-auto rounded-full bg-background text-foreground font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_hsl(0_0%_0%/0.35)] active:translate-y-0 active:scale-[0.98]"
                  >
                    <span>Book Your Free Call</span>
                    <span className="cta-swap__circle relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 overflow-hidden">
                      <ArrowRight className="cta-swap__arrow--main absolute w-4 h-4 text-primary" />
                      <ArrowRight className="cta-swap__arrow--ghost absolute w-4 h-4 text-primary opacity-0 -translate-x-6" />
                    </span>
                  </a>
                </div>
                <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export const blogPosts = [
  {
    slug: "how-to-set-up-your-first-podcast-studio",
    title: "How to Set Up Your First Podcast Studio",
    excerpt:
      "A beginner-friendly guide to building a clean, comfortable and professional-sounding podcast studio without overspending.",
    author: "Banter Team",
    date: "Apr 2, 2026",
    readTime: "9 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=80",
    type: "custom" as const,
  },
  {
    slug: "top-10-podcasting-mistakes-beginners-make",
    title: "Top 10 Podcasting Mistakes Beginners Make",
    excerpt:
      "Avoid these common pitfalls that new podcasters face — from poor audio quality to inconsistent publishing schedules.",
    author: "Banter Team",
    date: "Mar 25, 2026",
    readTime: "9 min read",
    category: "Podcasting",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=1600&q=80",
    type: "custom" as const,
  },
  {
    slug: "why-every-brand-needs-a-podcast-in-2026",
    title: "Why Every Brand Needs a Podcast in 2026",
    excerpt:
      "Discover why every brand needs a podcast in 2026 and how podcasting builds trust, authority, audience relationships and long-term brand growth.",
    author: "Banter Team",
    date: "Mar 18, 2026",
    readTime: "9 min read",
    category: "Podcast Marketing",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600&q=80",
    type: "custom" as const,
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // SEO meta
  useEffect(() => {
    if (!post) return;
    const prevTitle = document.title;
    if (post.slug === "top-10-podcasting-mistakes-beginners-make") {
      document.title = "Top 10 Podcasting Mistakes Beginners Make";
      const setMeta = (name: string, content: string) => {
        let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
        if (!el) {
          el = document.createElement("meta");
          el.name = name;
          document.head.appendChild(el);
        }
        el.content = content;
      };
      setMeta(
        "description",
        "Learn the most common podcasting mistakes beginners make, from poor audio quality to weak branding, inconsistent publishing, and lack of promotion."
      );
    } else if (post.slug === "how-to-set-up-your-first-podcast-studio") {
      document.title = "How to Set Up Your First Podcast Studio";
      const setMeta = (name: string, content: string) => {
        let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
        if (!el) {
          el = document.createElement("meta");
          el.name = name;
          document.head.appendChild(el);
        }
        el.content = content;
      };
      setMeta(
        "description",
        "Learn how to set up your first podcast studio with the right room, microphone, headphones, audio interface, recording software, acoustic treatment, and workflow."
      );
    } else if (post.slug === "why-every-brand-needs-a-podcast-in-2026") {
      document.title = "Why Every Brand Needs a Podcast in 2026";
      const setMeta = (name: string, content: string) => {
        let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
        if (!el) {
          el = document.createElement("meta");
          el.name = name;
          document.head.appendChild(el);
        }
        el.content = content;
      };
      setMeta(
        "description",
        "Discover why every brand needs a podcast in 2026 and how podcasting helps build trust, authority, audience relationships, thought leadership, and long-term brand growth."
      );
    } else {
      document.title = post.title;
    }
    return () => {
      document.title = prevTitle;
    };
  }, [post]);

  if (!post) return <Navigate to="/" replace />;

  if (post.type === "custom") {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        {post.slug === "how-to-set-up-your-first-podcast-studio" ? (
          <StudioSetupArticle />
        ) : post.slug === "why-every-brand-needs-a-podcast-in-2026" ? (
          <BrandPodcastArticle />
        ) : (
          <MistakesArticle />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300 mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-xs md:text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-primary" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary" />
              {post.readTime}
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden mb-10 border border-border/40">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
          </div>

        </div>
      </article>
    </div>
  );
};

export default BlogPost;
