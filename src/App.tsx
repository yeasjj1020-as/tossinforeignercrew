/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Bell, 
  User, 
  Home, 
  MapPin, 
  PlusSquare, 
  MessageCircle, 
  Menu,
  Home as HomeIcon,
  Briefcase,
  FileText,
  Users,
  ChevronRight,
  TrendingUp
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <img 
        src="/logo/Toss_Logo_Primary (1).png" 
        alt="tossIN Logo" 
        className="h-8 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
      <span className="text-xl font-extrabold tracking-tight">
        <span className="text-black">toss</span>
        <span className="text-primary">IN</span>
      </span>
    </div>
    <div className="flex items-center gap-5 text-gray-500">
      <Search className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
      <Bell className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
      <User className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
    </div>
  </header>
);

const Hero = () => (
  <section className="px-6 pt-16 pb-20 text-center bg-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <img 
        src="/images/0.jpg" 
        alt="Hero background" 
        className="w-full h-full object-cover blur-sm"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-5xl md:text-7xl font-extrabold tracking-tight mb-10 leading-[1.1] relative z-10"
    >
      All your expat life,<br />in one place.
    </motion.h1>
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl mx-auto relative group z-10"
    >
      <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all duration-700 opacity-0 group-hover:opacity-100" />
      <div className="relative flex items-center bg-white/40 backdrop-blur-2xl rounded-toss p-2 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-white/60">
        <Search className="ml-5 text-gray-400 w-6 h-6" />
        <input 
          type="text" 
          placeholder="Search for housing, jobs, or tips..." 
          className="flex-1 bg-transparent border-none px-4 py-4 outline-none text-lg font-medium placeholder:text-gray-400"
        />
        <button className="toss-button px-10 py-4 shadow-lg shadow-primary/20">Search</button>
      </div>
    </motion.div>
  </section>
);

const QuickActions = () => {
  const actions = [
    { icon: <HomeIcon className="w-6 h-6" />, label: "Housing", color: "bg-blue-50 text-blue-600" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Jobs", color: "bg-green-50 text-green-600" },
    { icon: <FileText className="w-6 h-6" />, label: "Visa", color: "bg-purple-50 text-purple-600" },
    { icon: <Users className="w-6 h-6" />, label: "Meetups", color: "bg-orange-50 text-orange-600" },
  ];

  return (
    <section className="px-6 py-10 grid grid-cols-4 gap-4 max-w-4xl mx-auto">
      {actions.map((action, i) => (
        <motion.div 
          key={i}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-3 cursor-pointer"
        >
          <div className={`w-16 h-16 ${action.color} rounded-toss flex items-center justify-center shadow-sm`}>
            {action.icon}
          </div>
          <span className="text-sm font-semibold text-gray-600">{action.label}</span>
        </motion.div>
      ))}
    </section>
  );
};

const HotTopics = () => {
  const topics = [
    { title: "Best places for cherry blossoms in Seoul 2024", category: "Travel", likes: 124, comments: 45 },
    { title: "New F-2-7 visa point system explained", category: "Visa", likes: 89, comments: 12 },
    { title: "How to find an English-speaking dentist", category: "Health", likes: 56, comments: 8 },
    { title: "Tips for first-time apartment hunting in Busan", category: "Housing", likes: 210, comments: 67 },
  ];

  return (
    <section className="px-6 py-8">
      <div className="toss-card max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-extrabold flex items-center gap-2">
            <TrendingUp className="text-primary w-5 h-5" />
            Community Hot Topics
          </h2>
          <ChevronRight className="text-gray-400 w-5 h-5 cursor-pointer" />
        </div>
        <div className="space-y-1">
          {topics.map((topic, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10, backgroundColor: "rgba(0, 100, 255, 0.02)" }}
              className="p-4 rounded-xl cursor-pointer flex items-center justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">
                  {topic.category}
                </span>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <div className="flex gap-4 mt-1 text-sm text-gray-400">
                  <span>Likes {topic.likes}</span>
                  <span>Comments {topic.comments}</span>
                </div>
              </div>
              <ChevronRight className="text-gray-200 group-hover:text-primary transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Marketplace = () => {
  const listings = [
    { id: 1, type: "Housing", title: "Modern Studio in Gangnam", price: "₩1,200k", img: "/images/0.jpg" },
    { id: 2, type: "Job", title: "English Content Creator", price: "₩3.5M+", img: "/images/1.jpeg" },
    { id: 3, type: "Housing", title: "Cozy Room near Hongdae", price: "₩600k", img: "/images/3.jpeg" },
    { id: 4, type: "Job", title: "Full-stack Developer", price: "Negotiable", img: "/images/4.jpeg" },
  ];

  return (
    <section className="py-16 overflow-hidden">
      <div className="px-6 mb-8 max-w-4xl mx-auto flex items-center justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight">Marketplace</h2>
        <div className="flex items-center gap-1 text-primary font-bold cursor-pointer group">
          <span>See all</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      <div className="flex gap-6 overflow-x-auto px-6 pb-12 no-scrollbar scroll-smooth">
        {listings.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -12, scale: 1.02 }}
            className="flex-shrink-0 w-72 toss-card !p-0 overflow-hidden group cursor-pointer border border-gray-100/50"
          >
            <div className="h-56 overflow-hidden relative">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-extrabold shadow-sm uppercase tracking-wider text-primary">
                {item.type}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3 line-clamp-1 group-hover:text-primary transition-colors">{item.title}</h3>
              <div className="flex items-end justify-between">
                <p className="text-primary font-extrabold text-2xl">{item.price}</p>
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const PromoBanner = () => (
  <section className="px-6 py-8">
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="max-w-4xl mx-auto h-32 bg-gradient-to-r from-primary to-cyan-400 rounded-toss p-8 flex items-center justify-between text-white shadow-lg shadow-primary/20 cursor-pointer overflow-hidden relative"
    >
      <div className="relative z-10">
        <h2 className="text-2xl font-extrabold mb-1">tossIN Perks</h2>
        <p className="opacity-90 font-medium">Exclusive discounts for our community members</p>
      </div>
      <div className="relative z-10 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold">
        Explore
      </div>
      <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
    </motion.div>
  </section>
);

const BottomNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 px-6 py-3 flex items-center justify-between md:hidden z-50">
    <div className="flex flex-col items-center gap-1 text-primary">
      <Home className="w-6 h-6" />
      <span className="text-[10px] font-bold">Home</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-gray-400">
      <MapPin className="w-6 h-6" />
      <span className="text-[10px] font-bold">Local</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-gray-400">
      <PlusSquare className="w-6 h-6" />
      <span className="text-[10px] font-bold">Post</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-gray-400">
      <MessageCircle className="w-6 h-6" />
      <span className="text-[10px] font-bold">Chat</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-gray-400">
      <Menu className="w-6 h-6" />
      <span className="text-[10px] font-bold">More</span>
    </div>
  </nav>
);

// --- Main App ---

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 bg-primary/10 rounded-toss flex items-center justify-center mb-4 animate-pulse">
          <div className="w-8 h-8 bg-primary rounded-full animate-bounce" />
        </div>
        <div className="space-y-3 w-full max-w-md">
          <div className="h-8 bg-gray-100 rounded-full animate-pulse w-3/4 mx-auto" />
          <div className="h-4 bg-gray-50 rounded-full animate-pulse w-1/2 mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Header />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <QuickActions />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <HotTopics />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Marketplace />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <PromoBanner />
        </motion.div>

        {/* Extra spacing for desktop */}
        <div className="h-20 hidden md:block" />
      </main>

      <BottomNav />

      {/* Custom Scrollbar Style */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
