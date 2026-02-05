'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Zap, Brain, TrendingUp } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "NeuroVision",
      subtitle: "Real-time Emotion Detection",
      description: "AI-powered emotion recognition system with sub-30ms GPU inference and live dashboard capabilities. Currently in development with advanced CNN architecture.",
      icon: <Brain className="w-8 h-8" />,
      image: "/api/placeholder/600/400",
      technologies: ["TensorFlow", "OpenCV", "WebSockets", "React", "Python"],
      metrics: [
        { label: "Inference Time", value: "<30ms" },
        { label: "Accuracy", value: "94.2%" },
        { label: "FPS", value: "60+" }
      ],
      highlights: [
        "Real-time emotion detection with GPU acceleration",
        "Live dashboard with WebSocket streaming",
        "Custom CNN architecture optimized for speed"
      ],
      github: "https://github.com/yashika2211",
      demo: "https://github.com/yashika2211",
      featured: true
    },
    {
      title: "QuantumTrade AI",
      subtitle: "Transformer-based Trading",
      description: "Advanced trading system using transformer models for sub-second stock predictions with Redis Streams.",
      icon: <TrendingUp className="w-8 h-8" />,
      image: "/api/placeholder/600/400",
      technologies: ["PyTorch", "Redis", "Docker", "FastAPI", "React"],
      metrics: [
        { label: "Prediction Speed", value: "<1s" },
        { label: "Accuracy", value: "87.3%" },
        { label: "Throughput", value: "1k/s" }
      ],
      highlights: [
        "Transformer models for time-series prediction",
        "Redis Streams for real-time data processing",
        "Dockerized microservices architecture"
      ],
      github: "https://github.com/yashikabhatia/quantumtrade-ai",
      demo: "https://github.com/yashikabhatia/quantumtrade-ai",
      featured: true
    },
    {
      title: "Mirea Period Tracker",
      subtitle: "Vibrant Health Management",
      description: "A vibrant and user-friendly period tracker designed to empower users in managing their health with intuitive design and comprehensive tracking.",
      icon: <Zap className="w-8 h-8" />,
      image: "/api/placeholder/600/400",
      technologies: ["React", "JavaScript", "CSS", "HTML", "Health Analytics"],
      metrics: [
        { label: "User Experience", value: "A+" },
        { label: "Design", value: "Vibrant" },
        { label: "Tracking", value: "Complete" }
      ],
      highlights: [
        "Vibrant and user-friendly interface design",
        "Comprehensive health tracking features",
        "Empowering women's health management"
      ],
      github: "https://github.com/Yashika2211/mirea-period-tracker",
      demo: "https://github.com/Yashika2211/mirea-period-tracker",
      featured: false
    }
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive case studies showcasing production-grade applications with real-world impact
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 glass rounded-xl text-neon-blue">
                    {project.icon}
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
                  {project.title === "NeuroVision" && (
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                      Work in Progress
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neon-blue font-semibold mb-4">{project.subtitle}</p>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="glass p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-neon-blue mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-neon-purple rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-glass rounded-full text-sm border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.title === "NeuroVision" ? (
                    <>
                      <div className="flex items-center gap-2 glass-card px-6 py-3 rounded-xl opacity-60 cursor-not-allowed">
                        <Github className="w-4 h-4" />
                        <span>Soon</span>
                      </div>
                      <div className="flex items-center gap-2 glass px-6 py-3 rounded-xl opacity-60 cursor-not-allowed">
                        <ExternalLink className="w-4 h-4" />
                        <span>Soon</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 glass-card px-6 py-3 rounded-xl hover:neon-glow transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 glass px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Project Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <div className="glass-card p-8 rounded-2xl hover:neon-glow transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-dark-card to-dark-bg rounded-xl overflow-hidden relative">
                      {/* Project Screenshot/Demo */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10">
                        {project.title === "NeuroVision" && (
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                              <div className="text-6xl mb-4">🧠</div>
                              <div className="text-2xl font-bold text-neon-blue">Real-time</div>
                              <div className="text-lg text-gray-300">Emotion Detection</div>
                              <div className="mt-4 flex justify-center space-x-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                              </div>
                            </div>
                          </div>
                        )}
                        {project.title === "QuantumTrade AI" && (
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                              <div className="text-6xl mb-4">📈</div>
                              <div className="text-2xl font-bold text-neon-purple">AI Trading</div>
                              <div className="text-lg text-gray-300">Sub-second Predictions</div>
                              <div className="mt-4">
                                <div className="flex justify-center space-x-1">
                                  <div className="w-2 bg-gradient-to-t from-neon-purple to-neon-blue rounded-t h-8"></div>
                                  <div className="w-2 bg-gradient-to-t from-neon-purple to-neon-blue rounded-t h-12"></div>
                                  <div className="w-2 bg-gradient-to-t from-neon-purple to-neon-blue rounded-t h-6"></div>
                                  <div className="w-2 bg-gradient-to-t from-neon-purple to-neon-blue rounded-t h-16"></div>
                                  <div className="w-2 bg-gradient-to-t from-neon-purple to-neon-blue rounded-t h-10"></div>
                                  <div className="w-2 bg-gradient-to-t from-neon-purple to-neon-blue rounded-t h-14"></div>
                                  <div className="w-2 bg-gradient-to-t from-neon-purple to-neon-blue rounded-t h-12"></div>
                                  <div className="w-2 bg-gradient-to-t from-neon-purple to-neon-blue rounded-t h-18"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {project.title === "Mirea Period Tracker" && (
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                              <div className="text-6xl mb-4">🌸</div>
                              <div className="text-2xl font-bold text-pink-400">Period Tracker</div>
                              <div className="text-lg text-gray-300">Vibrant Health Management</div>
                              <div className="mt-4">
                                <div className="flex justify-center space-x-2">
                                  <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
                                  <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                                  <div className="w-4 h-4 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                                </div>
                                <div className="mt-2 text-sm text-gray-400">Empowering Women's Health</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Overlay with tech stack */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs text-white">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-blue rounded-full animate-float" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}