import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary-container text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKPFb3mRd14JIA1AofaVGJxrtKfA18cA108eEtDtvKrQ-IDPQBlXcPRzaJ6WYiZbHGNdTEIyyicIj2raToS3cUPEM2GZthcb-y1eW9z3FihQAWAwVlr8auS5Ms9hJbEtblZr3MJe94a9UeqrQl2FhLqekx7axHo1C6jD2cGse8KzIPKYbLq2xaZTedcJKVss_5l2FUqlg3QkqYxtVqL-XQdT0Kj28FKbMhidd7LKuKcqnokr-AnzA2VA7qOf4SRK4YZL7-aNgx1RDZ" alt="background texture" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
                Academic & Leadership Excellence
              </span>
              <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tighter mb-8">
                Bryan Nathanael Iendra.
              </h1>
              <p className="font-body text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed opacity-90 mb-10">
                12th-grade student at SMAK Frateran Surabaya, shaping the future through disciplined leadership and analytical rigor.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-on-primary">
                  <span className="material-symbols-outlined">school</span>
                  <span className="font-semibold">SMAK Frateran Surabaya</span>
                </div>
                <div className="h-6 w-px bg-white/20 hidden md:block"></div>
                <div className="flex items-center gap-2 text-on-primary">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="font-semibold">Surabaya, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-10 lg:mt-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                <img 
                  src="/profile.jpg" 
                  alt="Bryan Nathanael Iendra" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block">
          <div className="h-full w-full bg-primary-container opacity-50 skew-x-12 translate-x-20"></div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-surface-container-low min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="font-headline font-extrabold text-5xl md:text-6xl text-primary tracking-tight mb-4">Deskripsi<br/>Diri.</h2>
                <div className="w-16 h-1 bg-secondary mb-8"></div>
                
                <div className="p-8 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-outline">Achievement</p>
                      <p className="font-headline font-bold text-lg">IPK 3,5 (Cumlaude)</p>
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Achieved during Grade 11, reflecting consistent academic dedication and strategic focus.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <p className="font-headline text-3xl md:text-4xl text-on-surface leading-snug">
                  "Saya Bryan Nathanael Iendra, siswa kelas 12 SMAK Frateran Surabaya. Pada kelas 11, saya meraih IPK 3,5 (cumlaude)..."
                </p>
                
                <div className="prose prose-lg text-on-surface-variant font-body leading-loose">
                  <p>
                    Dedication to excellence is the cornerstone of my academic journey. Beyond the classroom, I am driven by a passion for understanding the complexities of financial systems and the mechanics of effective leadership. My pursuit of a 3.5 GPA was not just about the numbers, but about mastering the discipline required to succeed in a competitive environment.
                  </p>
                  <p>
                    Currently in my final year of high school, I am focused on bridging the gap between theoretical knowledge and practical organizational impact. I believe that rigorous self-discipline and a collaborative mindset are essential for navigating the modern economic landscape.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-12">
                  <span className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-bold">Strategic Planning</span>
                  <span className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-bold">Fiscal Management</span>
                  <span className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-bold">Team Leadership</span>
                  <span className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-bold">Quantitative Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section: Bento Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-headline font-bold text-4xl text-primary tracking-tight mb-2">Professional Experience</h2>
            <p className="text-on-surface-variant">A dual-track approach to leadership and performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Finance Experience */}
            <div className="group relative overflow-hidden rounded-xl bg-primary-container p-10 text-white min-h-[400px] flex flex-col justify-end transition-transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
                <span className="material-symbols-outlined text-9xl">account_balance</span>
              </div>
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">corporate_fare</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-blue-200">Leadership & Finance</span>
                </div>
                <h3 className="font-headline font-extrabold text-3xl mb-4">Financial Organization Lead</h3>
                <p className="text-blue-100/80 leading-relaxed mb-6 max-w-md">
                  Orchestrated fiscal strategies and managed organizational resources, focusing on transparent accounting and budget optimization for student-led initiatives.
                </p>
                <ul className="space-y-2 text-sm font-medium text-blue-200">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Budget Allocation Oversight</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Quarterly Financial Auditing</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Strategic Resource Management</li>
                </ul>
              </div>
            </div>

            {/* Sports Experience */}
            <div className="group relative overflow-hidden rounded-xl bg-white border border-outline-variant/20 p-10 text-on-surface min-h-[400px] flex flex-col justify-end transition-transform hover:-translate-y-2">
              <div className="absolute inset-0 opacity-5">
                <img src="/volyball.jpg" />
              </div>
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">sports_volleyball</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-outline">Performance & Teamwork</span>
                </div>
                <h3 className="font-headline font-extrabold text-3xl mb-4 text-primary">Volleyball Athlete</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6 max-w-md">
                  Applying athletic discipline and team-oriented communication to drive collective success. Competitive experience in regional tournaments.
                </p>
                <div className="flex gap-4">
                  <span className="bg-surface-container-high px-3 py-1 rounded-md text-xs font-bold text-on-surface-variant">Team Coordination</span>
                  <span className="bg-surface-container-high px-3 py-1 rounded-md text-xs font-bold text-on-surface-variant">Strategic Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section (SQLite Integration) */}
      <section id="contact" className="py-20 bg-primary-container text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-headline font-extrabold text-4xl mb-4">Ready to collaborate?</h2>
            <p className="text-blue-100 text-lg opacity-90">Send me a message and I'll get back to you soon.</p>
          </div>
          
          <div className="bg-white text-on-surface p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-on-surface-variant">Thank you for reaching out. I will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-on-surface-variant mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-on-surface-variant mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-on-surface-variant mb-2">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>
                
                {status === "error" && (
                  <div className="p-3 bg-error-container text-on-error-container rounded-lg text-sm">
                    Failed to send message. Please try again.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50 flex justify-center items-center gap-2"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  {!status && <span className="material-symbols-outlined text-sm">send</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
