import React, { useState } from 'react';
import { Ticket, Calendar, MapPin, Play, Star, ChevronRight, Menu, X, Quote } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-red-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-zinc-900/95 backdrop-blur-sm text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-xl tracking-wider text-red-500 uppercase">
              Brickwork Echoes
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="hover:text-red-400 transition-colors text-sm uppercase tracking-wide">The Story</a>
              <a href="#music" className="hover:text-red-400 transition-colors text-sm uppercase tracking-wide">The Music</a>
              <a href="#characters" className="hover:text-red-400 transition-colors text-sm uppercase tracking-wide">Characters</a>
              <div className="bg-zinc-800 text-red-400 px-4 py-2 rounded-md font-medium text-sm border border-zinc-700">
                In Production - Summer 2028
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-zinc-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-red-400">The Story</a>
              <a href="#music" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-red-400">The Music</a>
              <a href="#characters" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-red-400">Characters</a>
              <div className="w-full mt-4 bg-zinc-800 text-red-400 px-5 py-3 rounded-md font-medium flex items-center justify-center border border-zinc-700">
                Expected Summer 2028
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brick-wall-dark.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            
            {/* Title Image */}
            <div className="w-full max-w-4xl mb-12 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.01] transition-transform duration-500 ring-4 ring-zinc-800">
              <img 
                src="/image_c807bb.jpg" 
                alt="Brickwork Echoes Title Card in red bricks against a cloudy sky" 
                className="w-full h-auto object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zinc-100 max-w-4xl leading-tight">
              A new musical about falling down,<br className="hidden md:block"/> and the people who pull you back up.
            </h1>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl">
              Set against the gritty backdrop of North Manchester, discover a story of friendship, addiction, and the profound strength it takes to rebuild a life—one day at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-red-900/40 text-red-200 px-8 py-4 rounded-md font-bold text-lg border border-red-800 flex items-center justify-center gap-2">
                <Calendar size={20} />
                Expected Summer 2028
              </div>
              <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-all border border-zinc-700 flex items-center justify-center gap-2">
                <Play size={20} />
                Watch Trailer
              </button>
            </div>

            {/* Quote Teaser */}
            <div className="mt-16 pt-8 border-t border-zinc-800 max-w-2xl w-full mx-auto">
              <Quote className="text-red-700 w-10 h-10 mx-auto mb-4 opacity-50" />
              <p className="text-lg md:text-xl font-serif italic text-zinc-300">
                "We stay for the shakes. We stay for the tears... You are not alone, you never were."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Show Info Bar */}
      <div className="bg-red-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-red-800">
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0 p-4">
              <Calendar className="w-8 h-8 mb-2 text-red-300" />
              <h3 className="font-bold text-lg">Expected Premiere</h3>
              <p className="text-red-200">Summer 2028</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0 p-4">
              <Ticket className="w-8 h-8 mb-2 text-red-300" />
              <h3 className="font-bold text-lg">Running Time</h3>
              <p className="text-red-200">2h 15m (inc. interval)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Synopsis Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-red-700 tracking-widest uppercase mb-2">The Story</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900">There has to be more than this.</h3>
            <div className="space-y-4 text-lg text-zinc-600">
              <p>
                Jamie is twenty-four, still getting the same bus, still skint, and living just five doors down from where he grew up. While his friends seem to be moving forward, Jamie feels stuck. Trapped by routine and circumstance, he watches life happen to others while he remains motionless.
              </p>
              <p>
                A casual invitation to an Ancoats warehouse party offers a brief escape, but it quickly spirals into a dark, isolating dependency. As the lies mount and the debts pile up, Jamie pushes away everyone trying to help—his mum, his best mates, the one person who really sees him.
              </p>
              <p>
                <strong>Brickwork Echoes</strong> is an unflinching, emotionally raw musical that explores the terrifying reality of rock bottom, and the painstaking, beautiful process of choosing life.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-zinc-200 rounded-lg aspect-[4/5] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" alt="Atmospheric concert lighting" className="w-full h-full object-cover" />
              </div>
              <div className="bg-zinc-800 rounded-lg aspect-square overflow-hidden">
                <img src="https://images.unsplash.com/photo-1576409860613-2877a5b6ce18?q=80&w=2070&auto=format&fit=crop" alt="Dramatic stage setup" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-red-900 rounded-lg aspect-square overflow-hidden p-6 flex items-center justify-center text-center">
                <p className="text-red-100 font-serif italic text-xl">"Because it's ours."</p>
              </div>
              <div className="bg-zinc-200 rounded-lg aspect-[4/5] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1499364615650-ec38552f4cb8?q=80&w=1975&auto=format&fit=crop" alt="Intimate performance moment" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Musical Numbers / Themes */}
      <section id="music" className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Original Score</h2>
            <h3 className="text-3xl md:text-4xl font-bold">The Soundtrack of Survival</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Act 1 */}
            <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700 hover:border-red-500 transition-colors">
              <h4 className="text-2xl font-bold mb-4 text-zinc-100">Act I: The Descent</h4>
              <p className="text-zinc-400 mb-6">The rhythm of daily life gives way to the intoxicating chaos of escape, leading to an inevitable collapse.</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-center gap-2"><Play size={14} className="text-red-500" /> Just Another Day</li>
                <li className="flex items-center gap-2"><Play size={14} className="text-red-500" /> The Spark in the Dark</li>
                <li className="flex items-center gap-2"><Play size={14} className="text-red-500" /> Weightless</li>
                <li className="flex items-center gap-2"><Play size={14} className="text-red-500" /> Velvet Lie</li>
                <li className="flex items-center gap-2"><Play size={14} className="text-red-500" /> Falling Down</li>
              </ul>
            </div>

            {/* The Pivot */}
            <div className="bg-red-900 p-8 rounded-xl border border-red-700 shadow-2xl transform md:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20"><Star size={64} /></div>
              <h4 className="text-2xl font-bold mb-4 text-white">The Bottom</h4>
              <p className="text-red-100 mb-6 font-serif italic">"My veins are dark, my skin is gray... God, if you are listening... Help me."</p>
              <ul className="space-y-3 text-sm text-red-50">
                <li className="flex items-center gap-2"><Play size={14} className="text-white" /> What Happened To You</li>
                <li className="flex items-center gap-2"><Play size={14} className="text-white" /> Leave Me Alone</li>
                <li className="flex items-center gap-2 font-bold"><Play size={14} className="text-white fill-white" /> The Bottom (Act II Opener)</li>
              </ul>
            </div>

            {/* Act 2 */}
            <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700 hover:border-red-500 transition-colors">
              <h4 className="text-2xl font-bold mb-4 text-zinc-100">Act II: The Climb</h4>
              <p className="text-zinc-400 mb-6">The brutal reality of withdrawal, the rebuilding of trust, and the profound beauty of ordinary life.</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-center gap-2"><Play size={14} className="text-red-500" /> We Are Here</li>
                <li className="flex items-center gap-2"><Play size={14} className="text-red-500" /> The Cold Sweat</li>
                <li className="flex items-center gap-2"><Play size={14} className="text-red-500" /> The First Step</li>
                <li className="flex items-center gap-2"><Play size={14} className="text-red-500" /> The Echo</li>
                <li className="flex items-center gap-2"><Play size={14} className="text-red-500" /> The Clear Sky</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-red-700 tracking-widest uppercase mb-2">The Cast</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900">Ordinary Lives, Extraordinary Strength</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Jamie",
              role: "The Center",
              desc: "24 years old. Smart, funny, but quietly drowning in the fear that he's being left behind."
            },
            {
              name: "Rachel",
              role: "The Mother",
              desc: "Jamie's mum. Fiercely loving, exhausted by worry, refusing to let go when things get dark."
            },
            {
              name: "Sophie",
              role: "The Anchor",
              desc: "Driven, early-riser. She sees through the jokes and is the first to spot the cracks in Jamie's armor."
            },
            {
              name: "Liam",
              role: "The Realist",
              desc: "Grounded and protective. He isn't afraid to confront the uncomfortable truths others avoid."
            },
            {
              name: "Callum",
              role: "The Heart",
              desc: "Manchester's loudest man. Uses humor as a shield but proves his absolute loyalty when it matters."
            }
          ].map((char, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-zinc-900">{char.name}</h4>
              <p className="text-sm text-red-700 font-semibold mb-3">{char.role}</p>
              <p className="text-zinc-600 text-sm leading-relaxed">{char.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-zinc-900 text-center py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/brick-wall-dark.png')]"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Witness the Journey</h2>
          <div className="mb-10 space-y-4">
            <p className="text-2xl font-bold text-red-400 uppercase tracking-widest">
              Currently In Production
            </p>
            <p className="text-xl text-zinc-300">
              Expected for release in Summer 2028
            </p>
          </div>
          <p className="text-lg md:text-xl font-serif italic text-zinc-500">
            "Now we get through today. Then tomorrow. Then the day after that."
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-zinc-500 py-12 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="font-bold text-xl tracking-widest text-zinc-300 uppercase mb-4">
            Brickwork Echoes
          </div>
          <p className="mb-4">© 2028 Brickwork Echoes The Musical. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Press</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
