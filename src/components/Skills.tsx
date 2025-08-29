import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'React/Next.js', level: 90 },
        { name: 'Vue.js', level: 30 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Bootstrap/Tailwind CSS', level: 88 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'PHP/Laravel', level: 95 },
        { name: 'MySQl', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      title: 'Tools & Cloud',
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Vercel/Netlify', level: 85 },
        { name: 'CI/CD', level: 72 }
      ]
    },
    {
      title: 'Design & Others',
      skills: [
        { name: 'UI/UX Design', level: 80 },
        { name: 'Figma', level: 75 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Performance Optimization', level: 85 },
        { name: 'Testing', level: 78 }
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Dart/Flutter', level: 80 },
        { name: 'React Native', level: 50 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across 
            various technologies and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-100">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Commitment to Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;