import { Mail, Phone, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          G Sai Vishal
        </h1>
        <div className="flex items-center gap-6">
          <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Education</a>
          <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
