import React from 'react';
import Image from 'next/image';
import { ocrAFont } from '../font';

export default function Component() {
  return (
    <div className={`min-h-screen bg-[#282828] text-white ${ocrAFont.className}`}>
      {/* Navbar */}
      <nav className="bg-[#282828] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#ffc100]">Enco</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-[#ffc100]">About</a></li>
            <li><a href="#projects" className="hover:text-[#ffc100]">Projects</a></li>
            <li><a href="#events" className="hover:text-[#ffc100]">Events</a></li>
            <li><a href="#blog" className="hover:text-[#ffc100]">Blog</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-[#282828] text-white py-20">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold mb-4">Welcome to Enco</h1>
            <p className="text-xl mb-8">Community, Code, Community</p>
            <button className="bg-[#ffc100] text-[#282828] px-6 py-3 rounded-full font-bold hover:bg-opacity-80 transition duration-300">
              Join Us
            </button>
          </div>
          <div className="w-1/2">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Software%20engineer-bro-bYFsU0DlR2TbC57DsVZcOjYymDw4XG.svg" 
              alt="Tech Illustration" 
              width={500} 
              height={500} 
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="flex items-center">
            <div className="w-1/2 pr-8">
              <p className="text-lg mb-4">
              Enco is a club with a broad vision and control over the details. Our philosophy emphasizes both ambitious goals and individual attention to you and your work. We believe that flawless work lacks character, and every imperfection left by a contributor is a reflection of their dreams and aspirations.
              </p>
              <p className="text-lg">
                Join us in our mission to shift thee &quot;tech&quot;tonic plates!
              </p>
            </div>
            <div className="w-1/2">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Deconstructed-bro-jujKmFlfIGYlsT36Hwsgi27NKWswFp.svg" 
                alt="About Us Illustration" 
                width={500} 
                height={500} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[#1e1e1e] py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Jaggu"].map((project) => (
              <div key={project} className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{project}</h3>
                <p className="mb-4">Jaggu is an intelligent, AI-powered campus assistant designed to streamline the day-to-day college experience for students. Built with advanced natural language processing (NLP), Jaggu offers seamless interaction, providing instant answers to student queries, personalized reminders, and guidance on campus navigation. Whether it's managing class schedules, accessing academic resources, or staying updated on campus events, Jaggu integrates effortlessly with existing systems to deliver a user-friendly experience.</p>
                <a href="#" className="text-[#ffc100] hover:underline">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Hacktoberfest 2024"].map((event) => (
              <div key={event} className="bg-[#1e1e1e] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{event}</h3>
                <p className="mb-4">Date: October 6, 2024</p>
                <p className="mb-4">Stay tuned for updates...</p>
                <button className="bg-[#ffc100] text-[#282828] px-4 py-2 rounded font-bold hover:bg-opacity-80 transition duration-300">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-[#1e1e1e] py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1].map((post) => (
              <div key={post} className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Blog Post {post}</h3>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="text-[#ffc100] hover:underline">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#282828] text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Enco. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}