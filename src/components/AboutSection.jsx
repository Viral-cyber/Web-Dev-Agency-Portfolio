import { motion } from "framer-motion"
import { useEffect } from "react"
import { CheckCircle2 } from "lucide-react"

const WhyUs = () => {
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll(".reveal-text span").forEach((el) => {
        const rect = el.getBoundingClientRect()
        const trigger = window.innerHeight * 0.85
        if (rect.top < trigger) el.classList.add("filled")
      })
    }

    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const headline = "Why ambitious brands choose to build with us."
  
  const reasons = [
    { title: "Senior Execution", desc: "Direct access to senior talent. No juniors, no handoffs." },
    { title: "Unified Workflow", desc: "Design and engineering under one roof for pixel-perfect code." },
    { title: "Rapid Iteration", desc: "We ship fast. No bloated processes or unnecessary meetings." },
    { title: "Built for Scale", desc: "Architectures designed to handle growth from day one." }
  ]

  return (
    <section className="bg-black text-white border-b border-zinc-800 overflow-hidden">

      {/* 1. BOLD MARQUEE */}
      <div className="border-b border-zinc-800 py-10 overflow-hidden relative z-10 bg-black">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 text-6xl md:text-8xl font-bold uppercase text-white"
        >
          {/* First Set */}
          <span className="opacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">Strategic Design</span>
          <span className="opacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">•</span>
          
          {/* Highlighted Item */}
          <span className="opacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">
            Technical Excellence
          </span>
          
          <span className="opacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">•</span>
          <span className="opacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">Product Growth</span>
          <span className="opacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">•</span>

          {/* Duplicate Set for Loop */}
          <span className="opacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">Strategic Design</span>
          <span className="opacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">•</span>
          
          {/* Highlighted Item Duplicate */}
          <span className="opacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">
            Technical Excellence
          </span>
          
          <span className="oopacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">•</span>
          <span className="opacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">Product Growth</span>
          <span className="opacity-100 text-white font-extrabold tracking-tighter shadow-white drop-shadow-lg">•</span>
        </motion.div>
      </div>

      {/* 2. SPLIT CONTENT GRID */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">

        {/* LEFT — SCROLL REVEAL HEADLINE */}
        <div className="p-8 md:p-20 flex flex-col justify-center">
          <span className="text-zinc-500 uppercase tracking-widest text-xs font-mono mb-12 block">
            (02) Why Us
          </span>

          <h2 className="reveal-text text-4xl md:text-6xl font-medium leading-[1.1]">
            {headline.split(" ").map((word, i) => (
              <span
                key={i}
                className="inline-block mr-3 transition-colors duration-500 text-zinc-800"
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* RIGHT — AUTHORITY BULLETS */}
        <div className="p-8 md:p-20 bg-zinc-950/50 flex items-center">
          <ul className="space-y-10 w-full">
            {reasons.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                {/* Custom Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-200 mb-1 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-base leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

      </div>

      {/* SCROLL REVEAL CSS */}
      <style>{`
        .reveal-text span.filled {
          color: #ffffff;
        }
      `}</style>
    </section>
  )
}

export default WhyUs