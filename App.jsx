import React, { useState, useEffect } from 'react';
import profileImg1 from './PNG/IMG_5192.png';
import profileImg2 from './PNG/IMG_5222-fotor-2026011714510.png';
import { 
  Code, 
  Bot, 
  Monitor, 
  ShoppingCart, 
  User, 
  Mail, 
  Github, 
  Facebook, 
  ExternalLink,
  ChevronRight,
  Star,
  Cpu,
  ArrowLeft,
  Download
} from 'lucide-react';

// CSS Animation Styles (ใส่ไว้ใน Component เพื่อความสะดวกในไฟล์เดียว)
const styles = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-gradient-bg {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background: linear-gradient(-45deg, #c4b5fd, #8b5cf6, #4c1d95, #c084fc);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const PortfolioAndShop = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // จัดการ Mouse Move Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      // คำนวณค่า Parallax เล็กน้อย
      const x = (window.innerWidth - e.clientX) / 50;
      const y = (window.innerHeight - e.clientY) / 50;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ข้อมูลจำลองสำหรับผลงาน (Portfolio)
  const projectDetails = [
    {
      id: 1,
      title: "ยังไม่มี",
      category: "0",
      description: "ไม่มี",
      icon: <Monitor className="w-8 h-8 text-purple-600" />,
      tags: ["ไม่มี", "ไม่มี"],
      sourceCodeUrl: "",
      downloadUrl: ""
    },
  ];

  const projects = projectDetails.map((project) => ({
    id: project.id,
    title: project.title,
    category: project.category,
    description: project.description,
    icon: project.icon,
    tags: project.tags || [],
  }));

  // ข้อมูลจำลองสำหรับสินค้า (Shop)
  const products = [
    {
      id: 1,
      title: "ไม่มี",
      price: "0 THB",
      description: "ไม่มี",
      features: ["ไม่มี", "ไม่มี"]
    },
  ];

  // ฟังก์ชันกรองผลงาน
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openProjectDetail = (project) => {
    setSelectedProjectId(project.id);
    setCurrentPage('projectDetail');
    window.scrollTo(0, 0);
  };

  // Render Functions for each page
  const renderHome = () => (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 relative overflow-hidden fade-in">
      {/* Interactive Background Elements (Bubbles) */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
      />

      <div className="relative z-10 max-w-4xl glass-card p-12 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-xl animate-float">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/80 text-purple-700 text-sm font-bold tracking-wide shadow-sm">
          เชิญมาอ่านความทรงจำสีเงิน
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-slate-900 drop-shadow-sm">
          มอบความฝัน <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-50 via-gray-300 to-gray-800 drop-shadow-md" style={{ WebkitTextStroke: '0.35px rgba(0,0,0,0.35)' }}>สีเงิน</span><br />
          ด้วยหัวใจ
        </h1>
        <p className="text-xl text-slate-700 mb-10 max-w-2xl mx-auto font-light">
          มาร่วมสนับสนุนและอ่านความทรงจำสีเงิน ของ Mashiro Shirakawa ได้แล้วที่ MASHIRO.STD
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={() => navigateTo('portfolio')}
            className="group relative px-8 py-4 bg-purple-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center gap-2">ดูผลงาน <ChevronRight className="group-hover:translate-x-1 transition-transform"/></span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"/>
          </button>
          
          <button 
            onClick={() => navigateTo('shop')}
            className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-purple-200 flex items-center justify-center"
          >
            เข้าชมร้านค้า
          </button>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="container mx-auto max-w-5xl py-12 px-6 fade-in">
      <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-md">เกี่ยวกับ นักพัฒนา</h2>
      <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative w-64 h-64 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={profileImg1}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">しらかわ ましろ</h3>
            <p className="text-slate-700 leading-relaxed mb-6 text-lg">
              Shirakawa Mashiro (ชิราคาวะ มาชิโระ) <br/>
              AKA.ความทรงจำสีเงิน Developer ของค่าย MASHIRO.STD
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {['Web Development', 'Bot Development', 'UI/UX Design', 'programmer'].map((skill) => (
                <div key={skill} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl hover:bg-white hover:shadow-md transition-all cursor-default">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="font-medium text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="container mx-auto max-w-6xl py-12 px-6 fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">ผลงานทั้งหมด</h2>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            { id: 'all', label: 'ทั้งหมด' },
            { id: 'web', label: 'เว็บไซต์' },
            { id: 'bot', label: 'บอท & AI' },
            { id: 'program', label: 'โปรแกรม' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/40 backdrop-blur-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="glass-card rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <div className="transform group-hover:rotate-12 transition-transform duration-300">
                {project.icon}
              </div>
            </div>
            <div className="p-6 bg-white/90">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-purple-600 bg-purple-100 rounded-full">
                {project.category.toUpperCase()}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">#{tag}</span>
                ))}
              </div>
              <button
                onClick={() => openProjectDetail(project)}
                className="w-full py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
              >
                ดูรายละเอียด <ExternalLink size={16}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProjectDetail = () => {
    if (selectedProjectId == null) return null;

    const detail = projectDetails.find((project) => project.id === selectedProjectId);
    if (!detail) return null;

    return (
      <div className="container mx-auto max-w-5xl py-12 px-6 fade-in">
        <button
          onClick={() => {
            setSelectedProjectId(null);
            setCurrentPage('portfolio');
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-purple-600 mb-8 font-medium shadow-md"
        >
          <ArrowLeft size={18} />
          <span>กลับไปหน้าผลงาน</span>
        </button>

        <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center shadow-md">
                <div className="transform scale-125">
                  {detail.icon}
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-purple-600 bg-purple-100 rounded-full">
                {detail.category.toUpperCase()}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                {detail.title}
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                {detail.description}
              </p>

              {detail.tags && detail.tags.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-bold text-slate-800 mb-3">ภาษา / เทคโนโลยีที่ใช้</h3>
                  <div className="flex flex-wrap gap-2">
                    {detail.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {detail.sourceCodeUrl && (
                <div className="mt-6">
                  <h3 className="text-sm font-bold text-slate-800 mb-2">Source Code</h3>
                  <a
                    href={detail.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
                  >
                    ดูซอร์สโค้ด
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}

              {detail.downloadUrl && (
                <div className="mt-4">
                  <a
                    href={detail.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-purple-600 font-bold shadow-md mt-2"
                  >
                    ดาวน์โหลดไฟล์
                    <Download size={18} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderShop = () => (
    <div className="container mx-auto max-w-6xl py-12 px-6 fade-in">
      <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-md">ร้านค้า & บริการ</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-purple-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                <ShoppingCart size={28}/>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.title}</h3>
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
                {product.price}
              </div>
              <p className="text-slate-500 mb-6 pb-6 border-b border-slate-100">
                {product.description}
              </p>
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Star size={16} className="text-yellow-400 fill-yellow-400"/> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-slate-900 text-white rounded-xl hover:bg-purple-600 transition-colors font-bold shadow-lg hover:shadow-purple-500/30">
                สั่งซื้อทันที
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="container mx-auto max-w-4xl py-12 px-6 fade-in h-[80vh] flex items-center justify-center">
      <div className="glass-card w-full rounded-3xl p-12 shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">ติดต่อฉัน</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <a
              href="https://www.facebook.com/profile.php?id=61586909660672"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Facebook size={32}/>
              </div>
              <span className="font-bold text-slate-700">Facebook</span>
            </a>
            <a
              href="https://discord.gg/CKV9M67B"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Bot size={32}/>
              </div>
              <span className="font-bold text-slate-700">Discord</span>
            </a>
            <a
              href="mailto:poooeednrrrko@gmail.com"
              className="flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Mail size={32}/>
              </div>
              <span className="font-bold text-slate-700">Email</span>
            </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-sans text-slate-800 animate-gradient-bg selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden overflow-y-hidden">
      <style>{styles}</style>
      
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 z-50 px-6 py-4">
        <div className="container mx-auto glass-card rounded-full px-6 py-3 flex justify-between items-center shadow-lg">
          <div 
            className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-2"
            onClick={() => navigateTo('home')}
          >
            <img 
              src={profileImg2}
              alt="Logo" 
              className="w-10 h-10 rounded-full border-2 border-purple-500 shadow-sm"
            />
            <span className="bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent hidden sm:inline">MASHIRO.STD</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {[
              { id: 'home', label: 'หน้าหลัก' },
              { id: 'about', label: 'เกี่ยวกับ' },
              { id: 'portfolio', label: 'ผลงาน' },
              { id: 'shop', label: 'ร้านค้า' },
              { id: 'contact', label: 'ติดต่อ' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`px-5 py-2 rounded-full font-bold transition-all duration-300 ${
                  currentPage === item.id 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 left-6 right-6 glass-card rounded-2xl p-4 flex flex-col space-y-2 shadow-xl animate-float md:hidden">
             {['home', 'about', 'portfolio', 'shop', 'contact'].map(page => (
               <button 
                key={page}
                onClick={() => navigateTo(page)}
                className={`py-3 px-4 rounded-xl text-left font-bold capitalize ${
                  currentPage === page ? 'bg-purple-100 text-purple-700' : 'text-slate-600 hover:bg-slate-50'
                }`}
               >
                 {page === 'home' ? 'หน้าหลัก' : page}
               </button>
             ))}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="pt-[90px] pb-12 min-h-screen flex flex-col">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'portfolio' && renderPortfolio()}
        {currentPage === 'projectDetail' && renderProjectDetail()}
        {currentPage === 'shop' && renderShop()}
        {currentPage === 'contact' && renderContact()}
      </main>

      {/* Footer (Simple Version) */}
      <footer className="fixed bottom-5 left-0 w-full text-center text-white/60 text-xs pointer-events-none">
        &copy; {new Date().getFullYear()} MASHIRO.STD. All rights reserved.
      </footer>
    </div>
  );
};

export default PortfolioAndShop;
