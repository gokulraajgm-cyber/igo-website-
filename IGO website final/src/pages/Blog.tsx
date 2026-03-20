import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Search, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/siteData";
import agriPattern from "@/assets/agri-pattern.png";

const Blog = () => (
  <div className="pt-20">
    {/* Refined Journal Hero */}
    <section className="py-32 bg-[#FDFDFB] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,66,49,0.03),transparent_50%)]" />
      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-primary/20">
          The Journal
        </div>
        <h1 className="text-6xl md:text-8xl mb-8 leading-[1.05] tracking-tight">
          Agri <span className="text-primary italic font-serif">Insights</span> & News
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-[1.6] max-w-3xl mx-auto mb-16">
          Strategic perspectives on modern farming technology, sustainable livestock ecosystems, and institutional agricultural breakthroughs.
        </p>
        <div className="max-w-2xl mx-auto relative group">
          <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search our research..." 
            className="w-full pl-16 pr-8 py-6 rounded-[32px] bg-white border border-border/60 focus:ring-4 focus:ring-primary/5 focus:border-primary/40 outline-none transition-all font-medium text-lg shadow-sm group-hover:shadow-xl duration-500"
          />
        </div>
      </div>
    </section>

    <section className="py-40 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="premium-card overflow-hidden group">
              <Link to={`/blog/${post.id}`}>
                <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-8 left-8 glass px-5 py-2.5 rounded-2xl text-[10px] font-black text-primary uppercase tracking-[0.3em] border border-white/40">
                    {post.date}
                  </div>
                </div>
              </Link>
              <div className="p-12">
                <div className="flex items-center gap-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-8">
                  <User className="w-4 h-4 text-primary" /> {post.author}
                </div>
                <h2 className="text-3xl mb-8 group-hover:text-primary transition-colors leading-[1.25]">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground text-lg mb-10 line-clamp-3 leading-[1.6] font-medium">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-foreground group-hover:text-primary group-hover:gap-6 transition-all border-b-2 border-primary/10 pb-2 group-hover:border-primary"
                >
                  Read Full Article <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Refined Institutional Newsletter */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#0C1A14] rounded-[80px] p-20 md:p-32 text-center relative overflow-hidden text-white shadow-[0_60px_120px_-20px_rgba(26,66,49,0.3)]">
          <BookOpen className="w-20 h-20 text-primary mx-auto mb-12 opacity-50" />
          <h2 className="text-5xl md:text-8xl mb-12 leading-[1.05]">
            Subscribe to <span className="text-secondary italic">Agri-Weekly</span>
          </h2>
          <p className="text-white/60 text-xl md:text-2xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            Strategic farming insights and global market trends delivered to your corporate inbox every Monday.
          </p>
          <form className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto relative z-10">
            <input 
              type="email" 
              placeholder="Corporate email address..." 
              className="flex-1 px-10 py-7 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-lg backdrop-blur-3xl"
              required
            />
            <button className="premium-btn bg-primary text-white border-transparent px-16 group">
              Join Authority <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-3 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
