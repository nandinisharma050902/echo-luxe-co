import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

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
    </section>
  );
};

export default BlogSection;
