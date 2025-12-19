import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    id: 1,
    number: "01",
    title: "Branding",
    description: "We create impactful brand identities that connect with your audience on a deeper level.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    number: "02",
    title: "Development",
    description: "We develop powerful, scalable platforms that grow with your business needs.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    number: "03",
    title: "Websites",
    description: "Immersive web experiences that blend creativity with functional performance.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    number: "04",
    title: "Social Media",
    description: "Strategic campaigns and content that amplify your voice across all digital channels.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 5,
    number: "05",
    title: "Content Writing",
    description: "Compelling narratives and SEO-driven copy that engage readers and convert leads.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2000&auto=format&fit=crop"
  }
]

const PinnedServices = () => {
  const [activeService, setActiveService] = useState(null)

  return (
    <section className="bg-black w-full py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* ===== SECTION INTRO ===== */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
            Our Services
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold text-white leading-tight mb-6">
            What We Do
          </h2>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            We craft digital experiences from idea to launch — blending
            strategy, design, and engineering to build products that perform.
          </p>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: IMAGE REVEAL */}
          <div className="hidden lg:flex relative h-[600px] w-full items-center justify-center bg-gray-900/20 rounded-2xl overflow-hidden border border-gray-800/50">
            <AnimatePresence mode="wait">
              {activeService ? (
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute bottom-10 left-8 right-8">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {activeService.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="text-gray-700 text-3xl font-semibold uppercase tracking-widest opacity-30 text-center px-4">
                  Select a Service
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: SERVICE LIST */}
          <div className="flex flex-col w-full">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                onMouseLeave={() => setActiveService(null)}
                className="group relative flex items-center justify-between py-6 border-b border-gray-800 cursor-pointer transition-all duration-300 hover:border-gray-600"
              >
                <h3
                  className={`text-3xl md:text-4xl font-semibold transition-colors duration-300 ${
                    activeService?.id === service.id
                      ? "text-white"
                      : "text-gray-600 group-hover:text-gray-400"
                  }`}
                >
                  {service.title}
                </h3>

                <span
                  className={`text-sm font-mono transition-colors duration-300 ${
                    activeService?.id === service.id
                      ? "text-blue-500"
                      : "text-gray-700 group-hover:text-gray-500"
                  }`}
                >
                  {`{${service.number}}`}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default PinnedServices