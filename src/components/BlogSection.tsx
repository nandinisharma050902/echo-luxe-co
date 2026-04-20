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
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-0 gap-0 border-border/40">
          <DialogHeader className="px-6 md:px-8 pt-6 md:pt-8 pb-4 border-b border-border/40">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground pr-8 leading-tight text-left">
              How to Set Up Your First Podcast Studio
            </DialogTitle>
            <div className="flex items-center gap-4 text-xs text-muted-foreground/80 pt-3">
              <span className="flex items-center gap-1.5">
                <User size={12} />
                Banter Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                Apr 2, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                5 min read
              </span>
            </div>
          </DialogHeader>
          <div className="px-6 md:px-8 py-6 md:py-8 space-y-5">
            {firstPostArticle.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-muted-foreground leading-relaxed"
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
