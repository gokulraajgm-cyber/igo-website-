import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ShoppingCart, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  Headphones, 
  ArrowRight,
  ChevronRight,
  Minus,
  Plus,
  Info,
  Beaker,
  Zap,
  Package
} from 'lucide-react';
import { productDetailData, ProductDetail } from '@/data/productDetailData';
import { companyInfo } from '@/data/siteData';

const ProductRouter: React.FC = () => {
  const { category, productSlug } = useParams<{ category: string; productSlug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'howToUse' | 'specifications'>('description');
  const [quantity, setQuantity] = useState(1);
  const [selectedPackSize, setSelectedPackSize] = useState("");
  const [selectedPriceTier, setSelectedPriceTier] = useState<'retail' | 'wholesale' | 'bulk'>('retail');

  useEffect(() => {
    const foundProduct = productDetailData.find(p => p.id === productSlug && p.category === category);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedPackSize(foundProduct.packSizes[0]);
    }
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [category, productSlug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <Link to="/products" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAction = (subject?: string) => {
    if (subject) {
      navigate(`/contact?subject=${encodeURIComponent(subject)}`);
    } else {
      navigate('/contact');
    }
  };

  const [imgUrl, setImgUrl] = useState(`/assets/products/${productSlug}.jpg`);
  const [imgFallbackStage, setImgFallbackStage] = useState(0);

  useEffect(() => {
    setImgUrl(`/assets/products/${productSlug}.jpg`);
    setImgFallbackStage(0);
  }, [productSlug]);

  const onImageError = () => {
    if (imgFallbackStage === 0) {
      // Step 1: Try category-specific hero image
      const categoryFile = product.category.replace('-', '_');
      setImgUrl(`/assets/projects/${categoryFile}.jpg`);
      setImgFallbackStage(1);
    } else if (imgFallbackStage === 1) {
      // Step 2: Try high-quality dynamic Unsplash imagery (modern API)
      setImgUrl(`https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800&h=600`); // High quality generic agri fallback
      setImgFallbackStage(2);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 selection:bg-[#E8F5E9] selection:text-[#1A4231] product-page">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 opacity-30" />
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 opacity-30" />
          <Link to={`/products/${product.category}`} className="capitalize hover:text-primary transition-colors">
            {product.category.replace('-', ' ')}
          </Link>
          <ChevronRight className="w-4 h-4 opacity-30" />
          <span className="text-black font-semibold truncate">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT SIDE (40%) - Image + Watermark */}
          <div className="lg:w-[40%]">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl border border-black/5 group">
              <img 
                src={imgUrl} 
                alt={product.name}
                onError={onImageError}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* IGO Logo Watermark overlay */}
              <div className="absolute bottom-4 right-4 z-10 w-[60px] opacity-80 pointer-events-none drop-shadow-lg">
                <img src="/assets/igo-logo.png" alt="IGO Watermark" className="w-full h-auto brightness-0 invert" />
              </div>
              
              {/* Decorative badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#1A4231] shadow-sm border border-black/5">
                  Premium Grade
                </div>
                {product.pricing.retail < 100 && (
                  <div className="bg-[#C5A03F]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-sm">
                    Best Value
                  </div>
                )}
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: ShieldCheck, label: "100% Genuine" },
                { icon: Headphones, label: "Expert Support" },
                { icon: Truck, label: "Pan India Delivery" }
              ].map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-black/[0.03]">
                  <badge.icon className="w-6 h-6 text-[#C5A03F] mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/60">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (60%) - Details */}
          <div className="lg:w-[60%] flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <img src="/assets/igo-logo.png" alt="IGO" className="h-10 w-auto" />
              <div className="h-6 w-px bg-black/10"></div>
              <span className="text-sm font-bold text-[#C5A03F] tracking-widest uppercase">
                {product.categoryName}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-[#1A4231] mb-6 leading-[1.1]">
              {product.name}
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-[#E8F5E9] p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-[#1A4231]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Pack Size / Variant Selector */}
            <div className="mb-8">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3 block">
                Select Pack Size / Variant
              </label>
              <div className="flex flex-wrap gap-3">
                {product.packSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedPackSize(size)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                      selectedPackSize === size
                        ? "bg-[#1A4231] text-white border-[#1A4231] shadow-lg shadow-[#1A4231]/10"
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#1A4231] hover:text-[#1A4231]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Tiers */}
            <div className="mb-10">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 block">
                Commercial Pricing (INR)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'retail', label: 'Retail Price', value: product.pricing.retail },
                  { id: 'wholesale', label: 'Wholesale (Min 50pcs)', value: product.pricing.wholesale },
                  { id: 'bulk', label: 'Bulk Institutional', value: product.pricing.bulk }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => handleAction(`Quote Request for ${product.name} - ${tier.label}`)}
                    className={`p-4 rounded-2xl text-left transition-all border-2 group ${
                      selectedPriceTier === tier.id
                        ? "border-[#C5A03F] bg-[#C5A03F]/5"
                        : "border-gray-100 hover:border-[#C5A03F]/30 bg-gray-50/50"
                    }`}
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 block group-hover:text-[#C5A03F] transition-colors">
                      {tier.label}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold">₹</span>
                      <span className="text-2xl font-black text-[#1A4231]">
                        {tier.value}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-400 italic font-medium flex items-center gap-1">
                <Info className="w-3 h-3" /> Minimum Order Quantity (MOQ) varies per product location.
              </p>
            </div>

            {/* Quantity and CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-gray-100">
              <div className="flex items-center bg-gray-100 rounded-2xl p-1 shrink-0">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white transition-colors text-gray-500"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="w-12 text-center font-black text-[#1A4231]">{quantity}</div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white transition-colors text-gray-500"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={() => handleAction()}
                className="flex-1 w-full bg-[#1A4231] text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#2a5a45] transition-all shadow-xl shadow-[#1A4231]/20 active:scale-[0.98]"
              >
                <ShoppingCart className="w-5 h-5" /> Buy Now
              </button>
              
              <button 
                onClick={() => handleAction(`Quote Request for ${product.name}`)}
                className="flex-1 w-full bg-white text-[#1A4231] border-2 border-[#1A4231] px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5" /> Get Quote
              </button>
            </div>
          </div>
        </div>

        {/* BELOW THE FOLD - Tabs */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <div className="flex flex-wrap gap-8 border-b border-gray-100 mb-10">
            {[
              { id: 'description', label: 'Description', icon: Info },
              { id: 'howToUse', label: 'How to Use', icon: Zap },
              { id: 'specifications', label: 'Specifications', icon: Beaker }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 pb-4 text-sm font-black uppercase tracking-[0.2em] transition-all relative ${
                  activeTab === tab.id ? "text-[#C5A03F]" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A03F]" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="min-h-[300px]"
              >
                {activeTab === 'description' && (
                  <div className="prose prose-slate max-w-none">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {product.tabDescription}
                    </p>
                  </div>
                )}

                {activeTab === 'howToUse' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.howToUse.map((step, idx) => (
                      <div key={idx} className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-black/[0.03]">
                        <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center font-black text-[#C5A03F] shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-sm font-medium text-gray-700 leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white">
                    <table className="w-full text-left">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value], idx) => (
                          <tr key={key} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-8 py-5 text-sm font-black text-gray-400 uppercase tracking-widest w-1/3 border-r border-gray-100">
                              {key}
                            </td>
                            <td className="px-8 py-5 text-sm font-bold text-[#1A4231]">
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-black text-[#C5A03F] tracking-[0.3em] uppercase mb-3 block">Complementary</span>
              <h2 className="text-3xl font-black text-[#1A4231]">Related Products</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.relatedProducts.map((relatedId) => {
              const related = productDetailData.find(p => p.id === relatedId);
              if (!related) return null;
              
              return (
                <Link 
                  key={related.id} 
                  to={`/products/${related.category}/${related.id}`}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img 
                      src={`/assets/products/${related.id}.jpg`} 
                      alt={related.name}
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        const categoryFile = related.category.replace('-', '_');
                        if (img.dataset.stage === '1') {
                          img.src = `https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=400&h=400`;
                          img.dataset.stage = '2';
                        } else if (!img.dataset.stage) {
                          img.src = `/assets/projects/${categoryFile}.jpg`;
                          img.dataset.stage = '1';
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-[#1A4231] shadow-sm">
                      {related.category.replace('-', ' ')}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-sm font-black text-[#1A4231] mb-2 group-hover:text-[#C5A03F] transition-colors line-clamp-1">
                      {related.name}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pricing</span>
                      <div className="flex items-center text-[#C5A03F] text-xs font-black uppercase tracking-widest gap-1">
                        View <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRouter;
