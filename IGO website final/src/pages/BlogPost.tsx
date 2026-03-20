import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, User, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/siteData';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="text-primary hover:underline">Back to Journal</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-50 origin-[0%] shadow-[0_2px_10px_rgba(26,66,49,0.2)]"
        style={{ scaleX }}
      />

      <article className="pb-32">
        {/* Editorial Header */}
        <header className="py-32 bg-[#FDFDFB] relative overflow-hidden border-b border-black/[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,66,49,0.05),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.8))]" />
          
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-black/40 hover:text-primary transition-all text-[10px] font-black uppercase tracking-[0.3em] mb-16 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Back to Journal
            </Link>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.4em] text-primary mb-12 border-l-4 border-primary pl-8"
            >
              <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
              <span className="w-2 h-2 rounded-full bg-primary/10" />
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                {post.author}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl mb-16 leading-[0.9] tracking-tighter"
            >
              {post.title.split(':').map((part, i) => (
                <span key={i} className={i === 1 ? "text-primary italic font-serif block mt-4" : "block"}>
                  {i > 0 ? part.trim() : part}
                </span>
              ))}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-black/50 font-light leading-relaxed max-w-3xl border-l-2 border-black/5 pl-10"
            >
              {post.excerpt}
            </motion.p>
          </div>
        </header>

        {/* Feature Image */}
        <section className="container mx-auto px-6 max-w-7xl -mt-20 mb-32 relative z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[21/9] rounded-[4rem] overflow-hidden shadow-[0_80px_120px_-30px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
          >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s] ease-out" />
          </motion.div>
        </section>

        {/* Content Body */}
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_280px] gap-24">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-2xl prose-primary !max-w-none editorial-container"
            >
              <div 
                className="editorial-body font-light text-black/80 leading-[1.6]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
            
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-20">
                <div className="space-y-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 border-b border-black/5 pb-4">Share Insights</h4>
                  <div className="flex flex-col gap-4">
                    <button className="social-share-btn-premium group" type="button">
                      <Facebook className="w-5 h-5 group-hover:text-[#1877F2]" />
                      <span className="text-xs font-bold">Facebook</span>
                    </button>
                    <button className="social-share-btn-premium group" type="button">
                      <Twitter className="w-5 h-5 group-hover:text-[#1DA1F2]" />
                      <span className="text-xs font-bold">Twitter</span>
                    </button>
                    <button className="social-share-btn-premium group" type="button">
                      <Linkedin className="w-5 h-5 group-hover:text-[#0A66C2]" />
                      <span className="text-xs font-bold">LinkedIn</span>
                    </button>
                    <button className="social-share-btn-premium group" type="button">
                      <Share2 className="w-5 h-5 group-hover:text-primary" />
                      <span className="text-xs font-bold">Copy Link</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-10 rounded-[3rem] bg-black text-white relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/40 transition-colors" />
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Authority Weekly</h4>
                  <p className="text-sm font-medium text-white/60 leading-relaxed mb-10">Join 2,000+ agricultural leaders receiving our strategic insights.</p>
                  <button className="w-full py-5 bg-primary text-white rounded-2xl text-[10px] uppercase font-black tracking-[0.2em] hover:bg-white hover:text-black hover:scale-[1.02] transition-all" type="button">Subscribe Now</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Suggested Reading */}
      <section className="py-40 bg-[#F9F9F7] border-t border-black/[0.03] rounded-t-[5rem]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="max-w-xl">
              <div className="text-primary text-[11px] font-black uppercase tracking-[0.4em] mb-6">Continue Exploring</div>
              <h2 className="text-6xl md:text-7xl tracking-tighter leading-[0.95]">
                More from the <span className="text-primary italic font-serif">Journal.</span>
              </h2>
            </div>
            <Link to="/blog" className="px-10 py-5 rounded-full border border-black/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white hover:border-black transition-all">
              View All Insights
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.filter(p => p.id !== id).slice(0, 3).map((related) => (
              <Link key={related.id} to={`/blog/${related.id}`} className="group h-full">
                <div className="flex flex-col h-full space-y-8">
                  <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                    <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                  </div>
                  <div className="space-y-4 px-2">
                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{related.date}</div>
                    <h3 className="text-3xl leading-[1.15] tracking-tight group-hover:text-primary transition-colors">{related.title}</h3>
                    <div className="pt-4 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] group-hover:gap-8 transition-all opacity-60">
                      Read Article <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .editorial-container .editorial-body h2 {
          font-size: 3rem;
          margin-top: 4rem;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
          line-height: 1.1;
          color: black;
          font-weight: 700;
        }
        .editorial-container .editorial-body p {
          margin-bottom: 2.5rem;
          font-size: 1.35rem;
        }
        .editorial-container .editorial-body blockquote {
          border: none;
          padding: 4rem 0;
          margin: 4rem 0;
          border-top: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-style: italic;
          font-family: serif;
          font-size: 2.5rem;
          line-height: 1.2;
          color: #1a4231;
          text-align: center;
        }
        .social-share-btn-premium {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          color: rgba(0,0,0,0.6);
        }
        .social-share-btn-premium:hover {
          background: rgba(0,0,0,0.02);
          border-color: rgba(0,0,0,0.1);
          color: black;
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
