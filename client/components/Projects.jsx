import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { NeonButton } from './NeonButton';
import { PROJECTS } from '@/utils/data';
import {
  FADE_IN_UP,
  STAGGER_CONTAINER,
  STAGGER_ITEM,
} from '@/utils/animations';

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.div
      variants={STAGGER_ITEM}
      whileHover={{ y: -8 }}
      className="group cursor-pointer h-full"
      onClick={onOpen}
    >
      <div className="glass border border-white/10 rounded-xl overflow-hidden h-full hover:border-neon-cyan/50 transition-colors duration-300">
        {/* Image section */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="relative z-10 text-6xl opacity-40 group-hover:opacity-60 transition-opacity">
            {project.id === 1 ? '🐾' : project.id === 2 ? '🏏' : '🛡️'}
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 space-y-4">
          <div>
            <p className="text-xs text-neon-green font-semibold mb-2">{project.category}</p>
            <h3 className="text-xl font-bold text-foreground group-hover:text-neon-blue transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-white/5 border border-neon-cyan/30 text-neon-cyan rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Click to view details</span>
            <motion.div
              className="text-neon-blue"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <div className="sticky top-0 flex justify-end p-4 bg-gradient-to-b from-black/50 to-transparent z-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X size={24} className="text-neon-cyan" />
          </motion.button>
        </div>

        {/* Modal content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-neon-green font-semibold text-sm">{project.category}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neon-blue">{project.title}</h2>
          </div>

          {/* Image placeholder */}
          <div className="h-64 rounded-xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center text-6xl opacity-30 border border-white/10">
            {project.id === 1 ? '🐾' : project.id === 2 ? '🏏' : '🛡️'}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="font-bold text-neon-purple">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 border border-neon-cyan/40 text-neon-cyan rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-6 border-t border-white/10">
            <NeonButton variant="primary" size="md" className="flex-1 flex items-center justify-center gap-2">
              <Github size={18} />
              View Code
            </NeonButton>
            <NeonButton variant="secondary" size="md" className="flex-1 flex items-center justify-center gap-2">
              <ExternalLink size={18} />
              Live Demo
            </NeonButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-neon-blue blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="My Creations"
          subtitle="Projects Hub"
          description="Showcasing my best work and technical achievements"
        />

        {/* Projects grid */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Floating hexagonal shapes background */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-neon-cyan opacity-10"
            animate={{
              x: [0, 30, 0],
              y: [0, 30, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              fontSize: '3rem',
            }}
          >
            ⬡
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
