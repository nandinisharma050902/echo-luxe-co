import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const firstPostArticle = `Setting up your first podcast studio doesn't require a massive budget or a professional recording facility—it requires smart choices, a bit of planning, and a focus on sound quality over aesthetics. Start with your recording space, because even the best microphone can't fix poor acoustics. Choose a quiet room with minimal echo; soft furnishings like rugs, curtains, and even bookshelves help absorb sound and reduce reverb. Once your space is ready, invest in a good-quality USB or XLR microphone—this is the most important piece of gear, as clear audio is what keeps listeners engaged. Pair it with closed-back headphones so you can monitor your recordings in real time without sound bleeding into the mic. If you're using an XLR mic, you'll also need an audio interface to connect it to your computer and ensure clean signal processing.

Next, consider your recording and editing software. Beginners can start with free tools like Audacity or GarageBand, while more advanced users might prefer Adobe Audition or Logic Pro for greater control. Make sure your setup includes a stable mic stand or boom arm and a pop filter to minimize unwanted noise from plosive sounds. As you grow, you can enhance your studio with acoustic panels, a mixer, or multiple microphones for interviews. However, don't let gear overwhelm you—content and consistency matter more than having a perfect setup from day one.

Finally, think about workflow and comfort. Arrange your equipment so everything is within reach, keep cables organized, and ensure your seating supports long recording sessions. Test your setup before publishing your first episode, paying attention to background noise, volume levels, and clarity. With a thoughtful approach and a focus on fundamentals, you can create a podcast studio that sounds professional, feels comfortable, and scales with your ambitions—turning your ideas into a listening experience people will want to come back to.`;

const secondPostMistakes = [
  "Poor audio quality that drives listeners away",
  "Ignoring recording environment and acoustics",
  "Overinvesting in equipment instead of content",
  "Inconsistent publishing schedule",
  "Not defining a clear target audience",
  "Lack of episode structure or planning",
  "Skipping proper editing and cleanup",
  "Weak or missing podcast branding",
  "Not promoting episodes effectively",
  "Giving up too early before seeing growth",
];

const secondPostClosing = `Starting a podcast is exciting, but many beginners unknowingly make mistakes that can hurt their growth early on. The good news is that most of these pitfalls are easy to avoid once you're aware of them. By focusing on audio quality, staying consistent, understanding your audience, and promoting your content effectively, you can build a strong foundation. Podcasting success doesn't happen overnight—but with patience and the right approach, you can create content that resonates and grows over time.`;

const thirdPostArticle = `Podcasting has evolved into one of the most powerful branding tools in 2026, and for businesses looking to build meaningful connections, it's no longer just an option—it's a strategic necessity. Unlike traditional marketing channels that rely on short attention spans and constant interruptions, podcasts offer something rare: uninterrupted time with your audience. When someone listens to your podcast, they're choosing to engage with your brand in a focused and intentional way. This creates a deeper level of trust and familiarity that is difficult to achieve through ads or social media posts alone. Over time, this consistent presence helps position your brand not just as a service provider, but as a trusted voice in your industry.

One of the biggest advantages of podcasting is its ability to humanize your brand. In a digital landscape filled with polished visuals and scripted messaging, podcasts bring authenticity to the forefront. Your audience hears your tone, your thoughts, and your perspective in a way that feels real and relatable. This emotional connection plays a critical role in modern branding, where consumers are more likely to support businesses they feel aligned with. By sharing stories, experiences, and insights, brands can create a sense of community rather than just broadcasting messages. This shift from transactional marketing to relationship-driven communication is what sets podcasting apart.

Another key reason brands are investing in podcasts is the opportunity to establish authority and thought leadership. By consistently discussing industry trends, offering expert advice, or hosting conversations with influential guests, your brand becomes a go-to resource for valuable information. This not only builds credibility but also keeps your audience coming back for more. Unlike short-form content, podcasts allow you to explore topics in depth, providing real value rather than surface-level insights. This depth is especially important in 2026, where audiences are increasingly seeking meaningful, educational content rather than quick entertainment alone.

Podcasting also plays a significant role in content strategy and scalability. A single podcast episode can be repurposed into multiple forms of content—blog posts, social media snippets, newsletters, and even video clips. This multiplies your reach without requiring entirely new ideas for every platform. It also ensures consistency across your brand messaging, reinforcing your voice and positioning wherever your audience engages with you. In addition, podcasts are highly accessible, allowing listeners to consume content while multitasking, which increases the likelihood of regular engagement.

From a growth perspective, podcasts help attract a highly targeted audience. People typically choose podcasts based on their interests, which means your listeners are already aligned with your niche. This makes it easier to convert them into loyal followers or customers over time. Moreover, inviting guests onto your podcast opens the door to collaborations and cross-promotion, expanding your reach organically. Each guest brings their own audience, creating a network effect that can significantly accelerate your brand's visibility.

Finally, starting a podcast is more achievable than ever. With affordable equipment and user-friendly software, brands can produce high-quality content without a large upfront investment. The key is not perfection, but consistency and clarity. By focusing on delivering value, maintaining a regular publishing schedule, and continuously improving your content, you can build a strong and sustainable presence. In a world where attention is limited and trust is everything, podcasting stands out as a long-term strategy that not only amplifies your brand's voice but also builds lasting relationships with your audience.`;

const blogPosts = [
  {
    title: "How to Set Up Your First Podcast Studio",
    excerpt: "A comprehensive guide to choosing the right equipment, acoustics, and layout for your podcast recording space.",
    author: "Banter Team",
    date: "Apr 2, 2026",
    readTime: "5 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80",
  },
  {
    title: "Top 10 Podcasting Mistakes Beginners Make",
    excerpt: "Avoid these common pitfalls that new podcasters face — from poor audio quality to inconsistent publishing schedules.",
    author: "Banter Team",
    date: "Mar 25, 2026",
    readTime: "4 min read",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&q=80",
  },
  {
    title: "Why Every Brand Needs a Podcast in 2026",
    excerpt: "Discover how podcasting can elevate your brand's reach, build authentic connections, and drive engagement.",
    author: "Banter Team",
    date: "Mar 18, 2026",
    readTime: "6 min read",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80",
  },
];

const BlogSection = () => {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);

  return (
    <section id="blog" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-3 block">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest from the Studio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Tips, insights, and stories from the world of podcasting.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                if (index === 0) setOpenFirst(true);
                if (index === 1) setOpenSecond(true);
                if (index === 2) setOpenThird(true);
              }}
              className="group rounded-2xl overflow-hidden border border-border/40 bg-card hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground/70 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                {/* Read More */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* First blog post modal */}
      <Dialog open={openFirst} onOpenChange={setOpenFirst}>
        <DialogContent
          className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-0 gap-0 border border-[hsl(350_90%_88%)]/70 shadow-[0_20px_60px_-15px_hsl(352_98%_63%/0.35)]"
          style={{
            background:
              "linear-gradient(180deg, hsl(350 100% 98%) 0%, hsl(0 0% 100%) 35%)",
          }}
        >
          <DialogHeader
            className="px-6 md:px-8 pt-7 md:pt-9 pb-5 border-b border-[hsl(350_90%_90%)]/80"
            style={{
              background:
                "linear-gradient(135deg, hsl(350 100% 96%) 0%, hsl(345 90% 94%) 60%, hsl(340 85% 92%) 100%)",
            }}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 inline-block w-fit px-2.5 py-1 rounded-full bg-[hsl(350_100%_94%)] border border-[hsl(350_90%_85%)]/60">
              Guide
            </span>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground pr-8 leading-tight text-left">
              How to Set Up Your First Podcast Studio
            </DialogTitle>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-3">
              <span className="flex items-center gap-1.5">
                <User size={12} className="text-primary" />
                Banter Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-primary" />
                Apr 2, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-primary" />
                5 min read
              </span>
            </div>
          </DialogHeader>
          <div className="px-6 md:px-8 py-6 md:py-8 space-y-5">
            {firstPostArticle.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-foreground/80 leading-relaxed first:first-letter:text-4xl first:first-letter:font-bold first:first-letter:text-primary first:first-letter:mr-1 first:first-letter:float-left first:first-letter:leading-none first:first-letter:mt-1"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Second blog post modal */}
      <Dialog open={openSecond} onOpenChange={setOpenSecond}>
        <DialogContent
          className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-0 gap-0 border border-[hsl(350_90%_88%)]/70 shadow-[0_20px_60px_-15px_hsl(352_98%_63%/0.35)]"
          style={{
            background:
              "linear-gradient(180deg, hsl(350 100% 98%) 0%, hsl(0 0% 100%) 35%)",
          }}
        >
          <DialogHeader
            className="px-6 md:px-8 pt-7 md:pt-9 pb-5 border-b border-[hsl(350_90%_90%)]/80"
            style={{
              background:
                "linear-gradient(135deg, hsl(350 100% 96%) 0%, hsl(345 90% 94%) 60%, hsl(340 85% 92%) 100%)",
            }}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2 inline-block w-fit px-2.5 py-1 rounded-full bg-[hsl(350_100%_94%)] border border-[hsl(350_90%_85%)]/60">
              Tips
            </span>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground pr-8 leading-tight text-left">
              Top 10 Podcasting Mistakes Beginners Make
            </DialogTitle>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-3">
              <span className="flex items-center gap-1.5">
                <User size={12} className="text-primary" />
                Banter Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-primary" />
                Mar 25, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} className="text-primary" />
                4 min read
              </span>
            </div>
          </DialogHeader>
          <div className="px-6 md:px-8 py-6 md:py-8 space-y-6">
            <ol className="space-y-3">
              {secondPostMistakes.map((mistake, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-3 md:p-4 rounded-xl bg-[hsl(350_100%_98%)] border border-[hsl(350_90%_92%)]/70 hover:border-[hsl(350_90%_85%)] transition-colors duration-300"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[hsl(340_90%_55%)] text-primary-foreground text-sm font-bold flex items-center justify-center shadow-[0_4px_12px_-2px_hsl(352_98%_63%/0.4)]">
                    {i + 1}
                  </span>
                  <span className="text-sm md:text-base text-foreground/85 leading-relaxed pt-1">
                    {mistake}
                  </span>
                </li>
              ))}
            </ol>
            <div className="pt-2 border-t border-[hsl(350_90%_92%)]/70">
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed pt-5">
                {secondPostClosing}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BlogSection;
