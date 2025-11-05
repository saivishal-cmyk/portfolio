import { Mail, Phone, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-xl">
            GSV
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            G Sai Vishal
          </h1>
          <p className="text-xl text-gray-600 mb-2">Computer Science Engineer</p>
          <p className="text-lg text-gray-500 max-w-3xl mb-8">
            Aspiring Computer Science Engineer with a strong foundation in Python, JavaScript, HTML/CSS,
            and a passion for data-driven problem-solving and software development. Eager to contribute
            to innovative projects in a dynamic environment.
          </p>
          <div className="flex gap-6 mb-8">
            <a href="mailto:Gsaivishal4@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Mail size={20} />
              <span>Gsaivishal4@gmail.com</span>
            </a>
            <a href="tel:+919676476517" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone size={20} />
              <span>+91 96764-76517</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-blue-600">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
