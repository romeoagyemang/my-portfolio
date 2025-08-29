import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient code that scales with your business needs.'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating visually stunning interfaces that provide exceptional user experiences.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and performance across all devices and browsers.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with teams and stakeholders to deliver solutions that exceed expectations.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Passionate developer with a keen eye for design and a love for creating 
            innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-white leading-relaxed">
              I am a passionate software engineer with over 3 years of experience. I have crafted intricate, interactive web applications, robust management systems, and innovative software solutions over the past three years. Through my work, I have had the privilege of collaborating with businesses worldwide, aiding them in enhancing productivity by creating websites, web applications, and software solutions.
            </p>
            <p className="text-lg text-white leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers. I believe in continuous 
              learning and staying up-to-date with the latest industry trends.
            </p>

            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'PHP', 'Laravel', 'AWS', 'Docker', 'MongoDB', 'MySQL'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center text-white text-6xl font-bold">
                RA
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;