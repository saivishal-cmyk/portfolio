import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-blue-200 mb-8">Feel free to reach out for collaborations or opportunities</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="mailto:Gsaivishal4@gmail.com" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
            <Mail size={20} />
            <span>Gsaivishal4@gmail.com</span>
          </a>
          <a href="tel:+919676476517" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
            <Phone size={20} />
            <span>+91 96764-76517</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="text-center text-blue-200 text-sm">
          <p>© 2025 G Sai Vishal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
