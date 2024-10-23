import React from 'react';
import { Download, Briefcase, GraduationCap, Github, Linkedin, Mail, Code, Languages, CircleDot, Boxes, Heart } from 'lucide-react';
import { SkillBar } from './components/SkillBar';
import { ProjectCard } from './components/ProjectCard';

function App() {
  const programmingSkills = [
    { name: "Java", level: 90 },
    { name: "ANGULAR", level: 85 },
    { name: "REACT", level: 88 },
    { name: "Python", level: 82 },
    { name: "PHP", level: 80 },
    { name: "Blender", level: 75 },
    { name: "ThreeJS", level: 78 },
    { name: "React Three Fiber", level: 76 }
  ];

  const languages = [
    { name: "Español", level: 100, description: "Nativo" },
    { name: "Inglés", level: 80, description: "B2" },
    { name: "Portugués", level: 40, description: "A2" }
  ];

  const softSkills = [
    { name: "Leadership", level: 90 },
    { name: "Problem Solving", level: 95 },
    { name: "Team Collaboration", level: 88 },
    { name: "Communication", level: 85 },
    { name: "Adaptability", level: 92 },
    { name: "Time Management", level: 87 }
  ];

  const projects = [
    {
      title: "3D Portfolio Viewer",
      description: "Interactive 3D portfolio showcasing projects in a virtual gallery using Three.js and React Three Fiber",
      technologies: ["React", "Three.js", "React Three Fiber", "TypeScript"],
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment processing",
      technologies: ["Angular", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Image Generator",
      description: "Web application that generates unique images using machine learning algorithms",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-blue-900/5 to-transparent animate-pulse"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
              alt="Miguel Angel Nuñez"
              className="w-48 h-48 rounded-full mx-auto border-4 border-blue-500 shadow-lg shadow-blue-500/50"
            />
          </div>
          
          <h1 className="text-5xl font-bold mb-4 tracking-tight hover:tracking-wide transition-all duration-300">
            Miguel Angel Nuñez
          </h1>
          
          <p className="text-xl text-blue-400 mb-8 opacity-0 animate-fadeIn">
            Full Stack Developer
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center space-x-2 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/50">
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </button>

          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Briefcase className="w-8 h-8 text-blue-500" />
            <span>Professional Experience</span>
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: "Senior Developer",
                company: "Tech Corp",
                period: "2020 - Present",
                description: "Led development team in creating innovative solutions"
              },
              {
                title: "Full Stack Developer",
                company: "Digital Solutions",
                period: "2018 - 2020",
                description: "Developed and maintained web applications"
              },
              {
                title: "Junior Developer",
                company: "StartUp Inc",
                period: "2016 - 2018",
                description: "Collaborated in various web development projects"
              }
            ].map((job, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-lg hover:from-blue-800/30 transition-all duration-300 transform hover:scale-102 hover:translate-x-2">
                <h3 className="text-xl font-bold text-blue-400">{job.title}</h3>
                <p className="text-gray-400">{job.company} | {job.period}</p>
                <p className="mt-2 text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-500" />
            <span>Education</span>
          </h2>
          
          <div className="space-y-8">
            {[
              {
                degree: "Master in Computer Science",
                school: "Tech University",
                period: "2018 - 2020"
              },
              {
                degree: "Bachelor in Software Engineering",
                school: "State University",
                period: "2014 - 2018"
              }
            ].map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-lg hover:from-blue-800/30 transition-all duration-300 transform hover:scale-102 hover:-translate-x-2">
                <h3 className="text-xl font-bold text-blue-400">{edu.degree}</h3>
                <p className="text-gray-400">{edu.school}</p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Skills Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Code className="w-8 h-8 text-blue-500" />
            <span>Programming Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {programmingSkills.map((skill, index) => (
              <div key={index}>
                <SkillBar name={skill.name} level={skill.level} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-black/70">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Languages className="w-8 h-8 text-blue-500" />
            <span>Languages</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-lg transform hover:scale-105 transition-all duration-300 opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-400">{lang.name}</h3>
                  <span className="text-blue-300">{lang.description}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <CircleDot
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(lang.level / 20)
                          ? 'text-blue-500'
                          : 'text-blue-900'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 bg-black/60">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Heart className="w-8 h-8 text-blue-500" />
            <span>Soft Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {softSkills.map((skill, index) => (
              <div key={index}>
                <SkillBar name={skill.name} level={skill.level} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
            <Boxes className="w-8 h-8 text-blue-500" />
            <span>Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;