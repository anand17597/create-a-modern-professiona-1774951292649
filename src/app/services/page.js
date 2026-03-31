'use client';
import { useEffect } from 'react';

const pageStyles = `
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
        }
        .card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
        }
        .icon {
            width: 50px;
            height: 50px;
        }
    `;
const pageScripts = ``;
const pageBody = `
    <header class="flex justify-between items-center py-4">
        <h1 class="text-3xl font-bold">Workfast</h1>
        <nav>
            <a href="#" onclick="window.location.href='/';return false;" class="text-lg mx-2">Home</a>
            <a href="#" onclick="window.location.href='/about';return false;" class="text-lg mx-2">About</a>
            <a href="#" onclick="window.location.href='/';return false;" class="text-lg mx-2">Contact</a>
        </nav>
    </header>
    
    <main class="mt-6">
        <h2 class="text-4xl font-bold text-center mb-8">Our AI Services</h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="card p-6 rounded-lg shadow-lg">
                <img src="https://images.unsplash.com/photo-1581091012184-3d9c980f1d0b?auto=format&fit=crop&w=1200&q=80" class="icon mb-4" alt="AI Follow-Up Employee Icon" />
                <h3 class="text-2xl font-semibold mb-2">AI Follow-Up Employee</h3>
                <p class="mb-4">Automate your follow-up tasks with precision and efficiency.</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                    <li>Increased productivity</li>
                    <li>Reduces human error</li>
                </ul>
                <p>Use Case: Customer follow-ups post-purchase to ensure satisfaction.</p>
            </div>
            <div class="card p-6 rounded-lg shadow-lg">
                <img src="https://images.unsplash.com/photo-1565372918671-5c6e4c9e654c?auto=format&fit=crop&w=1200&q=80" class="icon mb-4" alt="AI Task Manager Icon" />
                <h3 class="text-2xl font-semibold mb-2">AI Task Manager</h3>
                <p class="mb-4">Streamline task management with advanced AI capabilities.</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                    <li>Improved task allocation</li>
                    <li>Real-time progress tracking</li>
                </ul>
                <p>Use Case: Efficiently managing team projects with deadlines.</p>
            </div>
            <div class="card p-6 rounded-lg shadow-lg">
                <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80" class="icon mb-4" alt="AI WhatsApp Receptionist Icon" />
                <h3 class="text-2xl font-semibold mb-2">AI WhatsApp Receptionist</h3>
                <p class="mb-4">Enhance customer service with 24/7 WhatsApp support.</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                    <li>Instant customer responses</li>
                    <li>Handles multiple queries simultaneously</li>
                </ul>
                <p>Use Case: Providing customer support outside office hours.</p>
            </div>
        </div>
    </main>

    <div class="text-center mt-10">
        <button class="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300">
            Start using AI employees today
        </button>
    </div>
`;

export default function ServicesPage() {
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
