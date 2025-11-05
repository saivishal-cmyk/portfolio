import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    'Data Analysis with Spreadsheets and SQL (Coursera)',
    'Introduction to Data Analytics (IBM - Coursera)',
    'Introduction to NoSQL Databases (IBM - Coursera)',
    'Introduction to Java (IBM - Coursera)'
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Award size={20} />
              </div>
              <p className="text-gray-700 font-medium">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
