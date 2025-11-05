import { Briefcase, TrendingUp, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Retail Genius',
      year: '2025',
      description: 'Built machine learning models (XGBoost, LightGBM, Bayesian) to forecast retail demand using 73K+ rows.',
      achievements: [
        'Performed EDA, feature engineering, and model evaluation using MAE, MSE, and R²',
        'Achieved R² score of 0.9932 with Bayesian Regression'
      ],
      status: 'completed'
    },
    {
      icon: <Activity size={32} />,
      title: 'Lung Cancer Detection Using Machine Learning',
      year: 'Working',
      description: 'Developing a Machine Learning model integrating CNN for analyzing Lung CT Scans.',
      achievements: [
        'Combines clinical and genomic data using ensemble learning (KNN, Random Forest)',
        'Improved prediction accuracy through ensemble methods'
      ],
      status: 'in-progress'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4">
                {project.icon}
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {project.year}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <ul className="space-y-2">
                {project.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
