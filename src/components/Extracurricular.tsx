import { Trophy, Users } from 'lucide-react';

const Extracurricular = () => {
  const activities = [
    {
      icon: <Trophy size={24} />,
      title: 'Gold Medal in Cricket',
      description: 'Won a Gold Medal in Cricket at SPORTASTICA 2025, a university-level sports fest organized by Jain University\'s Faculty of Engineering and Technology.'
    },
    {
      icon: <Users size={24} />,
      title: 'Sports Participation',
      description: 'Actively participated in inter-departmental sports events and contributed to team strategy, coordination, and sportsmanship.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Extracurricular Activities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
