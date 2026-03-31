'use client';
import { useEffect } from 'react';

const pageStyles = `
        body {
            font-family: 'Inter', sans-serif;
        }
        .gradient-bg {
            background: linear-gradient(90deg, #3b82f6, #9333ea);
        }
        .glass-effect {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
        }
        .icon {
            width: 40px;
            height: 40px;
        }
        .hover-transition:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease;
        }
    `;
const pageScripts = ``;
const pageBody = `
    <header class="gradient-bg text-white py-6">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <h1 class="text-3xl font-bold">Workfast</h1>
            <nav>
                <a href="#" onclick="window.location.href='/';return false;" class="mx-4">Contact</a>
            </nav>
        </div>
    </header>
    <main>
        <section class="gradient-bg text-white py-20">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-4xl font-bold mb-4">Hire Your AI Workforce Today</h2>
                <p class="mb-8">Automate leads, tasks, and customer support effortlessly.</p>
                <button class="bg-white text-indigo-600 font-semibold py-2 px-4 rounded hover-transition mx-2">Get Started</button>
                <button class="bg-white text-indigo-600 font-semibold py-2 px-4 rounded hover-transition mx-2">View Demo</button>
            </div>
        </section>
        <section class="py-20">
            <div class="container mx-auto px-6">
                <h3 class="text-2xl font-bold text-center mb-12">Features</h3>
                <div class="flex flex-wrap justify-center">
                    <div class="glass-effect p-6 m-4 rounded-lg max-w-xs text-center hover-transition">
                        <img src="https://images.unsplash.com/photo-1604014237745-bf7db08a4f44?auto=format&fit=crop&w=1200&q=80" alt="AI Follow-Up Employee" class="icon mx-auto mb-4">
                        <h4 class="text-xl font-semibold mb-2">AI Follow-Up Employee</h4>
                    </div>
                    <div class="glass-effect p-6 m-4 rounded-lg max-w-xs text-center hover-transition">
                        <img src="https://images.unsplash.com/photo-1558647343-dbebf72592d0?auto=format&fit=crop&w=1200&q=80" alt="AI Task Manager" class="icon mx-auto mb-4">
                        <h4 class="text-xl font-semibold mb-2">AI Task Manager</h4>
                    </div>
                    <div class="glass-effect p-6 m-4 rounded-lg max-w-xs text-center hover-transition">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="AI WhatsApp Receptionist" class="icon mx-auto mb-4">
                        <h4 class="text-xl font-semibold mb-2">AI WhatsApp Receptionist</h4>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gray-200 py-20">
            <div class="container mx-auto px-6">
                <h3 class="text-2xl font-bold text-center mb-12">How It Works</h3>
                <div class="flex flex-wrap justify-center">
                    <div class="max-w-xs p-6 m-4 text-center">
                        <h4 class="text-xl font-semibold mb-2">Step 1: Connect WhatsApp</h4>
                    </div>
                    <div class="max-w-xs p-6 m-4 text-center">
                        <h4 class="text-xl font-semibold mb-2">Step 2: AI starts working</h4>
                    </div>
                    <div class="max-w-xs p-6 m-4 text-center">
                        <h4 class="text-xl font-semibold mb-2">Step 3: Track everything in dashboard</h4>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-20">
            <div class="container mx-auto px-6">
                <h3 class="text-2xl font-bold text-center mb-12">Benefits</h3>
                <div class="flex flex-wrap justify-center">
                    <div class="max-w-xs p-6 m-4 text-center">
                        <h4 class="text-xl font-semibold mb-2">Save time</h4>
                    </div>
                    <div class="max-w-xs p-6 m-4 text-center">
                        <h4 class="text-xl font-semibold mb-2">Never miss leads</h4>
                    </div>
                    <div class="max-w-xs p-6 m-4 text-center">
                        <h4 class="text-xl font-semibold mb-2">Increase sales</h4>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gray-200 py-20">
            <div class="container mx-auto px-6">
                <h3 class="text-2xl font-bold text-center mb-12">Testimonials</h3>
                <div class="flex flex-wrap justify-center">
                    <blockquote class="max-w-xs glass-effect p-6 m-4 text-center rounded-lg hover-transition">
                        <p>"Workfast transformed our customer service experience. Highly recommend!"</p>
                        <footer class="mt-4">- Alex P.</footer>
                    </blockquote>
                    <blockquote class="max-w-xs glass-effect p-6 m-4 text-center rounded-lg hover-transition">
                        <p>"The AI Task Manager is a game-changer for our productivity. Fantastic tool!"</p>
                        <footer class="mt-4">- Jamie L.</footer>
                    </blockquote>
                </div>
            </div>
        </section>
        <section class="gradient-bg text-white py-20">
            <div class="container mx-auto px-6 text-center">
                <h3 class="text-2xl font-bold mb-4">Start your AI workforce in minutes</h3>
                <button class="bg-white text-indigo-600 font-semibold py-2 px-4 rounded hover-transition mx-2">Get Started</button>
            </div>
        </section>
    </main>
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto px-6 text-center">
            <p>&copy; 2023 Workfast. All rights reserved.</p>
        </div>
    </footer>
`;

export default function HomePage() {
  useEffect(() => {
    if (!pageScripts.trim()) return;
    try {
      const s = document.createElement('script');
      s.textContent = pageScripts;
      document.body.appendChild(s);
      return () => { try { document.body.removeChild(s); } catch (_) {} };
    } catch (e) {
      console.warn('Script execution error:', e);
    }
  }, []);

  return (
    <>
      {pageStyles && <style dangerouslySetInnerHTML={{ __html: pageStyles }} />}
      <div dangerouslySetInnerHTML={{ __html: pageBody }} />
    </>
  );
}
