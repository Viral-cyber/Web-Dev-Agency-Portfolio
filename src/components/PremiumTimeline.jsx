import { useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { Sparkles, Workflow, Code2, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    title: "Discovery",
    description: "We immerse ourselves in your brand ecosystem to define the blueprint for success.",
    tags: ["Market Analysis", "Scoping"]
  },
  {
    icon: Workflow,
    title: "Architecture",
    description: "Translating strategy into visual language with intuitive wireframes and high-fidelity designs.",
    tags: ["Wireframing", "Prototyping"]
  },
  {
    icon: Code2,
    title: "Development",
    description: "Building robust, scalable solutions using modern tech stacks for high performance.",
    tags: ["React/Next.js", "Node.js"]
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Rigorous testing across all vectors ensuring a flawless deployment pipeline.",
    tags: ["E2E Testing", "Deployment"]
  },
  {
    icon: BarChart,
    title: "Growth",
    description: "Utilizing analytics to iterate, optimize, and scale your digital product continuously.",
    tags: ["Analytics", "Iteration"]
  }
];

const TimelineItem = ({ step, index, isLast }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { margin: "-40% 0px -40% 0px", once: false });

  return (
    // Reduced vertical padding (py-12 instead of py-16)
    <div ref={itemRef} className={`relative pl-12 md:pl-20 py-12 ${isLast ? 'pb-12' : ''}`}>
      
      {/* === THE GLOWING NODE === */}
      <div 
        className={`absolute left-0 top-16 -translate-x-[9px] md:-translate-x-[11px] w-6 h-6 rounded-full border-2 transition-all duration-700 ease-in-out z-20
          ${isInView 
            ? 'border-white bg-white shadow-[0_0_20px_4px_rgba(255,255,255,0.6)] scale-110' 
            : 'border-zinc-800 bg-black shadow-none scale-100'
          }
        `}
      >
        {isInView && (
             <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-50"></span>
        )}
      </div>

      {/* === THE GLASS CARD === */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
            opacity: isInView ? 1 : 0.5, 
            x: isInView ? 0 : 0,
            scale: isInView ? 1 : 0.98
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-700 group
            /* Glassmorphism */
            backdrop-blur-md bg-white/5
            ${isInView 
                ? 'border-white/20 shadow-[0_8px_32px_-8px_rgba(255,255,255,0.1)] bg-white/10' 
                : 'border-white/5' 
            }
        `}
      >
        {/* Active Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl transition-opacity duration-700 -z-10 ${isInView ? 'opacity-100' : 'opacity-0'}`} />

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <div className={`p-2 w-fit rounded-xl transition-colors duration-500 ${isInView ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                <step.icon size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
        </div>
        
        <p className="text-zinc-400 text-base leading-relaxed mb-6 font-light">
          {step.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-medium uppercase tracking-wider border transition-colors duration-500
                ${isInView ? 'bg-white text-black border-white' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}
            `}>
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function PremiumTimeline() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  return (
    // Reduced Section Padding (py-24 instead of py-40)
    <section ref={sectionRef} className="bg-black py-24 px-6 relative overflow-hidden border-t border-zinc-900">
        
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10 opacity-50" />
        
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
            
            {/* === LEFT COLUMN: STICKY HEADER === */}
            <div className="lg:col-span-2 lg:sticky lg:top-32 h-fit">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
                >
                    (03) The Roadmap
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-none"
                >
                    Our <br /> Process.
                </motion.h2>
                <motion.p 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.1 }}
                    className="text-zinc-400 text-lg font-light leading-relaxed mb-8"
                >
                    A meticulous approach to digital transformation. We move from abstract concepts to concrete, scalable realities with precision and speed.
                </motion.p>

                {/* Decorative Stats or Small details could go here to fill space if needed */}
                <div className="hidden lg:block pt-8 border-t border-zinc-900">
                    <p className="text-zinc-600 text-sm">Average Timeline: <span className="text-white">4-8 Weeks</span></p>
                </div>
            </div>

            {/* === RIGHT COLUMN: TIMELINE === */}
            <div className="lg:col-span-3" ref={containerRef}>
                <div className="relative">
                  
                  {/* 1. BACKGROUND LINE */}
                  <div className="absolute left-[3px] top-4 bottom-0 w-[2px] bg-zinc-900 z-0 rounded-full" />
                  
                  {/* 2. GLOWING PROGRESS LINE */}
                  <motion.div 
                    style={{ scaleY, transformOrigin: "top" }}
                    className="absolute left-[3px] top-4 bottom-12 w-[2px] bg-gradient-to-b from-white via-zinc-400 to-transparent shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] z-10 rounded-full"
                  />

                  {/* STEPS */}
                  <div className="relative z-20">
                    {steps.map((step, index) => (
                      <TimelineItem 
                        key={index} 
                        step={step} 
                        index={index} 
                        isLast={index === steps.length - 1} 
                      />
                    ))}
                  </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}