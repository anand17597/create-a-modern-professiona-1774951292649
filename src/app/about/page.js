'use client';
import { useEffect } from 'react';

const pageStyles = `
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
        }
        h1, h2 {
            background: linear-gradient(90deg, #00c6ff, #0072ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .section {
            padding: 60px 20px;
            text-align: center;
        }
        .team img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            transition: transform 0.3s ease;
        }
        .team img:hover {
            transform: scale(1.1);
        }
        .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
    `;
const pageScripts = ``;
const pageBody = `
    <header class="py-6 bg-white bg-opacity-50 shadow-md">
        <nav class="container mx-auto flex justify-between items-center">
            <div class="text-lg font-semibold"><a href="#" onclick="window.location.href='/';return false;">Workfast</a></div>
            <div>
                <a href="#" onclick="window.location.href='/';return false;" class="mx-4">Home</a>
                <a href="#" onclick="window.location.href='/';return false;">Contact</a>
            </div>
        </nav>
    </header>
    <main class="container mx-auto">
        <section class="section glass">
            <h1 class="text-4xl font-bold">About Workfast</h1>
            <p class="mt-4">Workfast provides AI employees for businesses, streamlining operations and enhancing productivity.</p>
        </section>
        <section class="section">
            <h2 class="text-3xl font-semibold">Our Mission</h2>
            <p class="mt-4">Helping small businesses automate operations, allowing them to focus on growth and innovation.</p>
        </section>
        <section class="section glass">
            <h2 class="text-3xl font-semibold">Our Vision</h2>
            <p class="mt-4">A future where an AI workforce supports every business, enabling unparalleled efficiency and creativity.</p>
        </section>
        <section class="section">
            <h2 class="text-3xl font-semibold">Our Story</h2>
            <p class="mt-4">Workfast was created to empower businesses by simplifying tasks and increasing reliability through AI solutions.</p>
        </section>
        <section class="section glass">
            <h2 class="text-3xl font-semibold">Our Values</h2>
            <p class="mt-4">Simplicity, Automation, Reliability</p>
        </section>
        <section class="section">
            <h2 class="text-3xl font-semibold">Meet Our Team</h2>
            <div class="flex justify-center mt-8">
                <img src="https://images.unsplash.com/photo-1603415526960-f2f5f3a47226?auto=format&fit=crop&w=1200&q=80" alt="Team Member 1">
                <img src="https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=crop&w=1200&q=80" alt="Team Member 2" class="mx-4">
                <img src="https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=crop&w=1200&q=80" alt="Team Member 3">
            </div>
        </section>
    </main>
`;

export default function AboutPage() {
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
