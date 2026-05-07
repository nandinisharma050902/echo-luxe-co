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
                      <figure className="mt-6 rounded-2xl overflow-hidden border border-border/40">
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
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/60 bg-muted/40 flex items-center justify-center mb-3">
                  <div className="text-center px-6">
                    <Youtube className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-sm md:text-base text-foreground/70">
                      Add your YouTube tutorial URL here.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-foreground/50 mb-10">
                  Replace this placeholder with an embedded iframe pointing to your chosen tutorial.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  Podcast Audio Setup Tutorial for Beginners
                </h3>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border/60 bg-muted/40 flex items-center justify-center">
                  <div className="text-center px-6">
                    <Youtube className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-sm md:text-base text-foreground/70">
                      Add your YouTube tutorial URL here.
                    </p>
                  </div>
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

export const blogPosts = [
  {
    slug: "how-to-set-up-your-first-podcast-studio",
    title: "How to Set Up Your First Podcast Studio",
    excerpt:
      "Discover how podcasting can elevate your brand's reach, build authentic connections and drive engagement.",
    author: "Banter Team",
    date: "Apr 2, 2026",
    readTime: "5 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=80",
    type: "article" as const,
    content: firstPostArticle,
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
      "Discover how podcasting can elevate your brand's reach, build authentic connections, and drive engagement.",
    author: "Banter Team",
    date: "Mar 18, 2026",
    readTime: "6 min read",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1600&q=80",
    type: "article" as const,
    content: thirdPostArticle,
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
        <MistakesArticle />
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

          {post.type === "article" && (
            <div className="space-y-5">
              {post.content!.split("\n\n").map((p, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-foreground/80 leading-relaxed first:first-letter:text-5xl first:first-letter:font-bold first:first-letter:text-primary first:first-letter:mr-1 first:first-letter:float-left first:first-letter:leading-none first:first-letter:mt-1"
                >
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
