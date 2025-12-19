import CardSwap, { Card } from './CardSwap';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: "Nexus Tech", 
    category: "Fintech", 
    img: "https://images.unsplash.com/photo-1481487484168-9b995ecc168d?w=800&q=80",
  },
  { 
    id: 2, 
    title: "Aura Stream", 
    category: "Entertainment", 
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  { 
    id: 3, 
    title: "Eclypse", 
    category: "Architecture", 
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="bg-black py-24 px-6 md:px-12 border-t border-zinc-900 overflow-hidden relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-20">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
            <span className="text-zinc-500 uppercase tracking-widest text-sm mb-6">(03) Selected Works</span>
            <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight">
                Digital <br /> Excellence.
            </h2>
            <p className="text-zinc-400 text-xl max-w-md leading-relaxed mb-12">
                We craft immersive digital experiences that define brands. Explore our latest case studies and experiments.
            </p>
            <div>
                <button className="flex items-center gap-3 text-white border-b border-white pb-2 hover:text-zinc-400 hover:border-zinc-400 transition-colors">
                    View All Projects <ArrowUpRight />
                </button>
            </div>
        </div>

        {/* RIGHT CONTENT - 3D CARD SWAP */}
        <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end">
             {/* The container size here determines the card size */}
             <div style={{ width: '400px', height: '550px', position: 'relative' }}>
                <CardSwap
                    cardDistance={60}
                    verticalDistance={40}
                    delay={3500}
                    pauseOnHover={true}
                    width={400} 
                    height={550}
                >
                    {projects.map((project, i) => (
                        <Card 
                          key={project.id} 
                          className="cursor-pointer group"
                          data-cursor="View Case" // <--- Added this prop
                        >
                            <div className="w-full h-full relative">
                                {/* Image */}
                                <img 
                                    src={project.img} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                
                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                                
                                <div className="absolute bottom-0 left-0 w-full p-8">
                                    <span className="text-xs font-mono uppercase text-blue-400 mb-2 block tracking-widest">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <div className="h-1 w-12 bg-white mt-4 group-hover:w-full transition-all duration-500 ease-out" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </CardSwap>
            </div>
        </div>

      </div>
    </section>
  );
}