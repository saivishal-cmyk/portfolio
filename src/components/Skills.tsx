import { Code, Database, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Languages',
      skills: ['Python', 'HTML', 'CSS', 'JavaScript', 'SQL']
    },
    {
      icon: <Terminal size={24} />,
      title: 'Developer Tools',
      skills: ['VS Code', 'Google Colab']
    },
    {
      icon: <Database size={24} />,
      title: 'AI Tools',
      skills: ['Emeli', 'NotebookLM', 'Google Studio AI']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
