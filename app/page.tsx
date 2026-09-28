import React from 'react';
import { ArrowRight, Mail, MapPin, Phone, ExternalLink, Download } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas'; 

// Custom LinkedIn Icon
const LinkedinIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-400 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 pb-20">
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center text-sm">
          <a href="#top" className="text-zinc-100 font-medium hover:text-emerald-400 transition-colors tracking-wide">YUVRAJ SINGH</a>
          <nav className="hidden md:flex gap-8">
            <a href="#projects" className="hover:text-zinc-100 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-zinc-100 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">Skills</a>
            <a href="#contact" className="text-zinc-100 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-20 space-y-40">
        
        {/* HERO SECTION */}
        <section id="top" className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="space-y-8 relative z-10">
            
           {/* Animated Profile Photo */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-12 group transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer z-20">
              {/* Clean, subtle background glow that expands on hover */}
              <div className="absolute -inset-4 rounded-full bg-emerald-500/0 blur-xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
              
              {/* The Image Container with a sleek border */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-emerald-500/50 transition-colors duration-500 bg-zinc-900 z-10 shadow-2xl group-hover:shadow-emerald-500/30">
                <img 
                  src="/profile.jpeg" 
                  alt="Yuvraj Singh" 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open to new roles
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold text-zinc-100 tracking-tight leading-[1.1]">
                Turning data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">actionable insights.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg">
                A hands-on Data Analyst who transforms raw datasets into clear narratives using SQL, Python, and Power BI.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 font-medium rounded-lg hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98]">
                View Projects
                <ArrowRight size={16} />
              </a>
              <a href="/Yuvraj_Singh_Resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-zinc-300 font-medium rounded-lg border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all hover:border-zinc-700">
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* The 3D Canvas */}
          <div className="w-full relative h-[400px] lg:h-[500px]">
             <ThreeCanvas />
          </div>
        </section>

       {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-12 scroll-mt-32">
          <div className="space-y-2">
            <p className="text-sm text-emerald-400 uppercase tracking-widest font-semibold">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-100">Featured Projects.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1: Global Retail Sales Dashboard (Tableau) */}
            <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-800/50 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
              <div className="absolute top-8 right-8 flex gap-3 text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <a href="https://public.tableau.com/app/profile/yuvraj.singh6953/viz/GlobalRetailSalesPerformanceDashboard_17893891883290/GlobalRetailSalesPerformanceDashboard?publish=yes" target="_blank" rel="noreferrer" title="View Live Tableau Dashboard">
                  <ExternalLink size={20} />
                </a>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-zinc-800/80 flex items-center justify-center text-xl font-bold text-emerald-400 border border-zinc-700/50">📊</div>
                <h3 className="text-xl font-medium text-zinc-100 group-hover:text-emerald-300 transition-colors">Global Retail Sales Dashboard</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  End-to-end business intelligence dashboard analyzing global sales data to evaluate regional profitability and top-performing product categories. Features interactive multi-layered filtering, time-series trend analysis, comparative bar charts, and KPI tracking built with Tableau calculated fields and dashboard actions.
                </p>
                <div className="flex gap-2 flex-wrap pt-2">
                  <span className="px-3 py-1 bg-zinc-800/80 rounded-md text-xs text-zinc-300 border border-zinc-700/40">Tableau</span>
                  <span className="px-3 py-1 bg-zinc-800/80 rounded-md text-xs text-zinc-300 border border-zinc-700/40">KPI Reporting</span>
                </div>
              </div>
              <div className="pt-8 flex items-center gap-4 text-xs font-mono text-zinc-500">
                <span>Timeline: 2023 — 2025</span>
              </div>
            </div>

            {/* Project 2: Retail Sales EDA (Python) */}
            <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-800/50 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
               <div className="absolute top-8 right-8 flex gap-3 text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <a href="#" target="_blank" rel="noreferrer" title="View Python Code / GitHub">
                  <ExternalLink size={20} />
                </a>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-zinc-800/80 flex items-center justify-center text-xl font-bold text-emerald-400 border border-zinc-700/50">🐍</div>
                <h3 className="text-xl font-medium text-zinc-100 group-hover:text-emerald-300 transition-colors">Retail Sales Exploratory Data Analysis</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Conducted univariate and bivariate analysis, correlation metrics, and outlier investigation on retail transactions. Treated missing values and formatted data distributions using Pandas, NumPy, and Seaborn.
                </p>
                <div className="flex gap-2 flex-wrap pt-2">
                  <span className="px-3 py-1 bg-zinc-800/80 rounded-md text-xs text-zinc-300 border border-zinc-700/40">Python</span>
                  <span className="px-3 py-1 bg-zinc-800/80 rounded-md text-xs text-zinc-300 border border-zinc-700/40">Pandas & NumPy</span>
                  <span className="px-3 py-1 bg-zinc-800/80 rounded-md text-xs text-zinc-300 border border-zinc-700/40">Seaborn</span>
                </div>
              </div>
              <div className="pt-8 flex items-center gap-4 text-xs font-mono text-zinc-500">
                <span>Data Preprocessing & Cleaning</span>
              </div>
            </div>

            {/* Project 3: Power BI Dashboard */}
            <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-800/50 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
               <div className="absolute top-8 right-8 flex gap-3 text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <a href="https://app.powerbi.com/groups/me/reports/b1ea2a73-cedb-4385-b1a8-b2c0e09f0ce3/e32144d84e0b02606990?experience=power-bi" target="_blank" rel="noreferrer" title="View Power BI Dashboard">
                  <ExternalLink size={20} />
                </a>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-zinc-800/80 flex items-center justify-center text-xl font-bold text-emerald-400 border border-zinc-700/50">📈</div>
                <h3 className="text-xl font-medium text-zinc-100 group-hover:text-emerald-300 transition-colors">Power BI Business Intelligence Dashboard</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Interactive reporting solution designed to aggregate, model, and visualize complex corporate performance metrics. Features include advanced Star Schema data modeling, custom DAX measures for YTD growth and profit margins, executive KPI scorecards, and multi-dimensional drill-downs using Power BI Desktop, DAX, and Power Query.
                </p>
                <div className="flex gap-2 flex-wrap pt-2">
                  <span className="px-3 py-1 bg-zinc-800/80 rounded-md text-xs text-zinc-300 border border-zinc-700/40">Power BI</span>
                  <span className="px-3 py-1 bg-zinc-800/80 rounded-md text-xs text-zinc-300 border border-zinc-700/40">DAX</span>
                  <span className="px-3 py-1 bg-zinc-800/80 rounded-md text-xs text-zinc-300 border border-zinc-700/40">Data Modeling</span>
                </div>
              </div>
              <div className="pt-8 flex items-center gap-4 text-xs font-mono text-zinc-500">
                <span>Interactive BI Reporting</span>
              </div>
            </div>

          </div>
        </section>

       {/* EXPERIENCE */}
        <section id="experience" className="space-y-12 scroll-mt-32">
          <div className="space-y-2">
            <p className="text-sm text-emerald-400 uppercase tracking-widest font-semibold">Career</p>
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-100">Experience.</h2>
          </div>

          <div className="space-y-8">
            {/* Experience 1: Unified Mentor */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-medium text-zinc-100">Data Analyst Intern</h3>
                  <p className="text-emerald-400 font-mono text-sm">Unified Mentor Pvt Ltd | Delhi, India</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/80 px-3 py-1 rounded-md border border-zinc-700/40 w-fit">
                  09/2026 — Present
                </span>
              </div>
              <ul className="text-sm leading-relaxed text-zinc-400 space-y-2 list-disc list-inside">
                <li>Developing end-to-end analytical solutions and enterprise-grade reporting frameworks using Power BI and advanced data modeling techniques.</li>
                <li>Collaborating on cross-functional datasets to clean, transform, and analyze business performance metrics for strategic decision making.</li>
              </ul>
            </div>

            {/* Experience 2: AAM Infotech */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-medium text-zinc-100">Data Analyst Intern</h3>
                  <p className="text-emerald-400 font-mono text-sm">AAM Infotech | Delhi, India</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/80 px-3 py-1 rounded-md border border-zinc-700/40 w-fit">
                  03/2026 — 08/2026
                </span>
              </div>
              <ul className="text-sm leading-relaxed text-zinc-400 space-y-2 list-disc list-inside">
                <li>Extracted, cleaned, and transformed large datasets using advanced SQL queries and Python (Pandas, NumPy) to resolve anomalies and improve data completeness.</li>
                <li>Performed comprehensive Exploratory Data Analysis (EDA) and statistical evaluations to uncover operational patterns and sales trends.</li>
                <li>Designed and deployed interactive Power BI dashboards and automated reports to monitor core business KPIs and streamline stakeholder reviews.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-12 border-t border-zinc-800/60 pt-24 scroll-mt-32">
          <div className="space-y-2">
            <p className="text-sm text-emerald-400 uppercase tracking-widest font-semibold">Craft</p>
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-100">Technical Arsenal.</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h3 className="text-zinc-200 border-b border-zinc-800 pb-2 font-medium">Languages</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-zinc-200 border-b border-zinc-800 pb-2 font-medium">Visualization</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Power BI</li>
                <li>Matplotlib</li>
                <li>Seaborn</li>
                <li>Advanced Excel</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-zinc-200 border-b border-zinc-800 pb-2 font-medium">Data Processing</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Pandas</li>
                <li>NumPy</li>
                <li>Data Cleaning</li>
                <li>Validation</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-zinc-200 border-b border-zinc-800 pb-2 font-medium">Domain</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>Exploratory Data Analysis</li>
                <li>KPI Tracking</li>
                <li>Dashboarding</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="border-t border-zinc-800/60 pt-24 pb-32 scroll-mt-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
               <div className="space-y-2">
                <p className="text-sm text-emerald-400 uppercase tracking-widest font-semibold">Contact</p>
                <h2 className="text-3xl md:text-4xl font-medium text-zinc-100">Let's build something.</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Currently open to Data Analyst, Business Intelligence, and Data Analytics opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-800">
              <div className="space-y-6">
                <a href="mailto:data.yuvraj225@gmail.com" className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-emerald-400/10 group-hover:text-emerald-400 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">Email</p>
                    <p className="text-sm text-zinc-500">data.yuvraj225@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-emerald-400/10 group-hover:text-emerald-400 transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">Phone</p>
                    <p className="text-sm text-zinc-500">+91 8826844359</p>
                  </div>
                </div>

                <a href="https://www.linkedin.com/in/singh-yuvraj-data" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-[#0A66C2]/10 group-hover:text-[#0A66C2] transition-colors">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-200 group-hover:text-[#0A66C2] transition-colors">LinkedIn</p>
                    <p className="text-sm text-zinc-500">linkedin.com/in/singh-yuvraj-data</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-200">Location</p>
                    <p className="text-sm text-zinc-500">Delhi, India</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-mono">
          <p>© 2026 Yuvraj Singh.</p>
          <p>Designed for Data.</p>
        </div>
      </footer>

    </div>
  );
}