export default function Projects() {
  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section for Projects */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold uppercase tracking-widest mb-6">
            My Skills
          </span>
          <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-primary tracking-tight mb-6">
            Disciplined<br />Competencies.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            A structured approach to skill development, focusing on financial acumen, team dynamics, and leadership execution.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* Financial Management */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3">Financial Management</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Mastering the fundamentals of financial planning, budget allocation, and resource optimization to ensure sustainable organizational growth.
            </p>
          </div>

          {/* Leadership */}
          <div className="bg-primary text-on-primary p-8 rounded-2xl shadow-md relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">flag</span>
            </div>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                <span className="material-symbols-outlined text-white">psychology</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-3">Leadership</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Guiding teams with clarity and purpose. Emphasizing strategic decision-making, accountability, and fostering a collaborative environment.
              </p>
            </div>
          </div>

          {/* Teamwork */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <h3 className="font-headline font-bold text-xl mb-3">Teamwork</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Cultivating synergy within diverse groups. Proven ability to communicate effectively, resolve conflicts, and drive collective achievements.
            </p>
          </div>
        </div>

        {/* Featured Initiative */}
        <div className="mb-16">
          <h2 className="font-headline font-bold text-3xl text-primary tracking-tight mb-8">Featured Initiative</h2>
          
          <div className="bg-white rounded-3xl overflow-hidden border border-outline-variant/20 shadow-sm flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-surface-container-high relative min-h-[300px]">
              <img 
                src="/voly.jpg" 
                alt="Volleyball Competition" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Sports & Leadership</span>
              </div>
            </div>
            <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-outline mb-4">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                <span className="text-sm font-bold uppercase tracking-widest">2025</span>
              </div>
              <h3 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface mb-6">Volley Competition 2025</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Participated in the inter-school volleyball tournament, demonstrating high-level teamwork, strategic on-court communication, and athletic sportsmanship under competitive pressure.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-outline-variant/20">
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">Role</p>
                  <p className="font-medium text-on-surface">Team Player / Athlete</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">Key Skill</p>
                  <p className="font-medium text-on-surface">Strategic Execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
