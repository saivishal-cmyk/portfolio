import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'Jain University',
      degree: 'B.Tech in Computer Science and Engineering',
      period: 'Oct 2022 – Jun 2026',
      grade: 'CGPA: 7.6/10'
    },
    {
      institution: 'Sri Chaitanya Junior College',
      degree: 'Pre-University Course: MPC',
      period: 'Completed: 03/2022',
      grade: 'Percentage: 74%'
    },
    {
      institution: 'Narayana School',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      period: 'Completed: 03/2020',
      grade: 'Percentage: 97%'
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                    <span className="text-sm text-gray-500">{edu.period}</span>
                  </div>
                  <p className="text-gray-700 mb-1">{edu.degree}</p>
                  <p className="text-blue-600 font-semibold">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
