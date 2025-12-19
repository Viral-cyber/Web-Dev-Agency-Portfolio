import { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Settings } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  cycle, 
  features, 
  isActive, 
  onClick,
  description,
  buttonStyle 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative rounded-[32px] p-8 flex flex-col h-full transition-all duration-500 cursor-pointer
        ${isActive 
          ? 'bg-white text-black scale-105 shadow-2xl z-10' 
          : 'bg-zinc-900 text-white border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80'
        }
      `}
    >
      {title === "Moderate" && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-lg transition-colors ${isActive ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-400 border border-zinc-700'}`}>
          MOST POPULAR
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <h3 className={`text-xl font-bold mb-4 ${isActive ? 'text-gray-800' : 'text-zinc-400'}`}>
          {title}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-bold tracking-tight">
            {price}
          </span>
          <span className={`text-sm font-medium ${isActive ? 'text-gray-500' : 'text-zinc-500'}`}>
            /{cycle === 'monthly' ? 'mo' : 'qtr'}
          </span>
        </div>
        <p className={`mt-4 text-sm leading-relaxed ${isActive ? 'text-gray-600' : 'text-zinc-500'}`}>
          {description}
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-zinc-600'}`} />
            <span className={`text-sm font-medium ${isActive ? 'text-gray-700' : 'text-zinc-300'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className={`
        w-full py-4 rounded-xl font-bold transition-all duration-300
        ${isActive 
            ? 'bg-black text-white hover:bg-gray-800 shadow-xl' 
            : 'bg-zinc-800 text-white hover:bg-zinc-700'}
      `}>
        Choose {title}
      </button>
    </div>
  );
};

export default function PricingSection() {
  const [cycle, setCycle] = useState('monthly');
  const [activeIndex, setActiveIndex] = useState(1); 

  const plans = [
    {
      title: "Basic",
      monthly: "$2,500",
      quarterly: "$7,000",
      description: "Essential branding and design for early-stage startups.",
      features: [
        "Brand Identity System",
        "Logo & Brand Guidelines",
        "Social Media Assets",
        "Basic UI Kit",
        "48h Turnaround"
      ]
    },
    {
      title: "Moderate",
      monthly: "$4,500",
      quarterly: "$12,000",
      description: "Complete design and development solution for growing businesses.",
      features: [
        "Everything in Basic",
        "Full Website Design (UX/UI)",
        "Webflow/React Development",
        "CMS Integration",
        "Interactive Prototypes",
        "Priority Support"
      ]
    },
    {
      title: "Premium",
      monthly: "$8,000",
      quarterly: "$22,000",
      description: "Dedicated product team for enterprise-scale applications.",
      features: [
        "Everything in Moderate",
        "Custom Web App Development",
        "Advanced SEO & Analytics",
        "Design Systems & Documentation",
        "User Testing & Research",
        "Dedicated Slack Channel",
        "Unlimited Requests"
      ]
    }
  ];

  return (
    <section className="bg-black py-24 px-6 border-t border-zinc-900" id="pricing">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-zinc-500 uppercase tracking-widest text-xs font-mono mb-4">
            (04) Pricing
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Choose your pace.
          </h2>
          
          <div className="bg-zinc-900 p-1.5 rounded-full inline-flex relative">
            <button 
                onClick={() => setCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${cycle === 'monthly' ? 'bg-white text-black shadow-md' : 'text-zinc-400 hover:text-white'}`}
            >
                Monthly
            </button>
            <button 
                onClick={() => setCycle('quarterly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${cycle === 'quarterly' ? 'bg-white text-black shadow-md' : 'text-zinc-400 hover:text-white'}`}
            >
                Quarterly <span className="text-xs text-green-500 ml-1 font-bold">-10%</span>
            </button>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              {...plan}
              cycle={cycle}
              price={cycle === 'monthly' ? plan.monthly : plan.quarterly}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* ---------------- NEW FRICTION REMOVERS ---------------- */}
        
        <div className="flex flex-col items-center text-center border-t border-zinc-900 pt-16 max-w-2xl mx-auto">
            
            <h3 className="text-2xl font-medium text-white mb-6">
                Not sure which plan fits?
            </h3>
            
            <a href="/contact" className="group flex items-center gap-2 text-white border-b border-white pb-1 mb-12 hover:text-zinc-400 hover:border-zinc-400 transition-all">
                <span className="text-lg">Talk to us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="flex items-center gap-3 text-zinc-400">
                    <Settings className="w-5 h-5 text-zinc-500" />
                    <span className="text-sm font-medium">Custom plans available</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                    <ShieldCheck className="w-5 h-5 text-zinc-500" />
                    <span className="text-sm font-medium">No long-term contracts</span>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}