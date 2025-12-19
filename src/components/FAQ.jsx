import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "Why shouldn’t I hire a freelancer?",
    answer: "Freelancers can be great for small tasks, but they often lack the breadth of skills required for a full-scale digital product. With Vornix, you get an entire team—designers, developers, and strategists—working in unison. We offer reliability, redundancy (if one person is sick, the project doesn't stop), and a structured quality assurance process that a single individual simply cannot match."
  },
  {
    question: "How fast can we start?",
    answer: "We typically have a 1-2 week lead time to assemble the right team for your specific project. Once the deposit is processed and we've had our kickoff discovery call, we hit the ground running immediately. We value momentum and don't believe in unnecessary delays."
  },
  {
    question: "What happens after launch?",
    answer: "Our relationship doesn't end on launch day. We provide a 30-day warranty period to fix any bugs that might pop up. Beyond that, we offer flexible maintenance packages to handle hosting updates, security patches, and feature additions, ensuring your platform scales with your business."
  },
  {
    question: "What is your typical project timeline?",
    answer: "For a standard custom website (5-10 pages), the timeline is typically 4-8 weeks from kickoff to launch. More complex platforms or web applications usually take 3-6 months depending on the scope of features and integrations required."
  },
  {
    question: "How are payments structured?",
    answer: "We operate on a 50/50 basis for most standard projects: a 50% deposit is required to secure your slot in our schedule, with the remaining 50% due upon completion, just before the site goes live. For larger builds ($10k+), we can structure payments across 3-4 milestones."
  },
  {
    question: "Do I own the website after launch?",
    answer: "Yes, 100%. Once the final payment is settled, you have full ownership of the website, the domain, and all design assets. We don't believe in holding your digital property hostage. You are free to move hosting or hire another team in the future."
  },
  {
    question: "Do you write the content for the site?",
    answer: "Our design packages focus on the visual and technical build. We ask clients to provide text and images before we begin development. However, if you need professional copywriting, we can include this as an add-on service or refer you to our trusted content partners."
  },
  {
    question: "Will I be able to update the site myself?",
    answer: "Absolutely. We build all our websites with a user-friendly Content Management System (CMS) allowing you to easily edit text, images, and blog posts without needing to touch a single line of code. We also provide a training session upon handover."
  },
  {
    question: "Can you design my logo and branding?",
    answer: "Yes. While we specialize in web development, we have a talented design team capable of creating complete brand identity systems, including logos, color palettes, and typography guidelines. This is often the best way to ensure your new website looks cohesive."
  },
  {
    question: "Is SEO included in the build?",
    answer: "We adhere to best practices for Technical SEO. This means your site will be built with clean code, fast loading speeds, mobile responsiveness, and proper semantic structure—giving you the best possible foundation to rank on Google. For advanced keyword strategy and content writing, we can refer you to our specialist partners."
  }
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-zinc-800">
      <button 
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-colors hover:bg-zinc-900/20 px-4 -mx-4 rounded-xl"
      >
        <span className={`text-xl md:text-2xl font-medium transition-colors ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
          {item.question}
        </span>
        <span className={`relative ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
           <Plus className={`w-6 h-6 ${isOpen ? 'text-white' : 'text-zinc-600'}`} />
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-zinc-400 text-lg leading-relaxed pb-8 max-w-3xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); 

  return (
    <section className="bg-black py-32 px-6 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
            <span className="text-zinc-500 uppercase tracking-widest text-xs font-mono mb-6 block">
                (05) FAQ
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Common <span className="text-zinc-600">Questions.</span>
            </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col">
          {faqs.map((item, index) => (
            <FAQItem 
              key={index} 
              item={item} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}