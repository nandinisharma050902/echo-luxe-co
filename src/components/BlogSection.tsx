import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const firstPostArticle = `Creating a podcast studio can feel overwhelming at first, but it becomes much simpler when you focus on the essentials rather than perfection. The most important starting point is your recording environment. A quiet, controlled space will do far more for your audio quality than expensive equipment alone. Try to choose a room with minimal outside noise and reduce echo by adding soft materials like carpets, curtains, or even cushions. These small adjustments help absorb sound and prevent that hollow, "roomy" effect that can make recordings sound unprofessional. Once your space is set, your next priority should be a reliable microphone. A good USB microphone is perfect for beginners because it's easy to set up, while XLR microphones offer more flexibility and higher quality if paired with an audio interface. No matter which you choose, positioning the microphone correctly—close to your mouth but not too close—is key to capturing clear, balanced audio.

Alongside your microphone, a pair of closed-back headphones is essential. These allow you to monitor your audio in real time without sound leaking into the recording. You'll also want to use a pop filter to reduce harsh sounds from letters like "P" and "B," which can otherwise create distracting spikes in your audio. For recording and editing, there are plenty of accessible software options. Beginners often start with free tools like Audacity or GarageBand, which are more than capable of producing high-quality podcasts. As your skills grow, you might explore more advanced software that offers greater control over editing, mixing, and sound design. However, don't get caught up in having the "best" tools right away—what matters most is learning how to use what you have effectively.

As your podcast evolves, you can gradually upgrade your setup. Adding acoustic panels can further improve sound quality, while a boom arm can make microphone placement more convenient and consistent. If you plan to host interviews, you might consider multiple microphones or a small mixer to manage different audio sources. Still, it's important to remember that great content will always outweigh expensive gear. Listeners are drawn to engaging conversations, valuable insights, and authentic storytelling—not just pristine audio.

Finally, think about your overall workflow and comfort. A well-organized setup saves time and reduces frustration, especially during longer recording sessions. Keep your equipment within easy reach, manage cables neatly, and ensure your seating is comfortable enough to support extended use. Before publishing, always do a test recording to check levels, background noise, and clarity. These small habits can make a big difference in the final result. With a thoughtful setup and a focus on consistency, you can create a podcast studio that not only sounds professional but also supports your creative process as you grow.`;

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
              onClick={() => index === 0 && setOpenFirst(true)}
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
    </section>
  );
};

export default BlogSection;
