import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";

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

export const blogPosts = [
  {
    slug: "how-to-set-up-your-first-podcast-studio",
    title: "How to Set Up Your First Podcast Studio",
    excerpt: "A comprehensive guide to choosing the right equipment, acoustics, and layout for your podcast recording space.",
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
    excerpt: "Avoid these common pitfalls that new podcasters face — from poor audio quality to inconsistent publishing schedules.",
    author: "Banter Team",
    date: "Mar 25, 2026",
    readTime: "4 min read",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=1600&q=80",
    type: "list" as const,
    items: secondPostMistakes,
    closing: secondPostClosing,
  },
  {
    slug: "why-every-brand-needs-a-podcast-in-2026",
    title: "Why Every Brand Needs a Podcast in 2026",
    excerpt: "Discover how podcasting can elevate your brand's reach, build authentic connections, and drive engagement.",
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

  if (!post) return <Navigate to="/" replace />;

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

          {post.type === "list" && (
            <div className="space-y-6">
              <ol className="space-y-3">
                {post.items!.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[hsl(350_100%_98%)] border border-[hsl(350_90%_92%)]/70 hover:border-[hsl(350_90%_85%)] transition-colors duration-300"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[hsl(340_90%_55%)] text-primary-foreground text-sm font-bold flex items-center justify-center shadow-[0_4px_12px_-2px_hsl(352_98%_63%/0.4)]">
                      {i + 1}
                    </span>
                    <span className="text-base text-foreground/85 leading-relaxed pt-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="pt-4 border-t border-[hsl(350_90%_92%)]/70">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed pt-5">
                  {post.closing}
                </p>
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;