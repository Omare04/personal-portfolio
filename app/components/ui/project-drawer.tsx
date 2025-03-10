import React, { useEffect } from 'react';
import { IconX, IconBriefcase, IconCalendar, IconUsers, IconRocket, IconExternalLink, IconBrandGithub } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  project: any; // Using any for simplicity, but ideally would match your ProjectInterface
}

const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ isOpen, onClose, project }) => {
  // Handle clicking outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div 
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      />
      
      {/* Drawer */}
      <motion.div 
        className="fixed top-0 right-0 bottom-0 w-full sm:w-96 md:w-[32rem] bg-black/90 border-l border-gray-700 shadow-lg overflow-y-auto z-[9999]"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <div className="p-4 md:p-6 relative">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/70 hover:bg-gray-700/70 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close drawer"
          >
            <IconX size={24} className="text-gray-400" />
          </button>
          
          <div className="mt-6 md:mt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-blue-400 pr-8 font-['IBM_Plex_Sans']">
              {project.title}
            </h2>
            
            <div className="mt-3 mb-6 text-base text-gray-300 leading-relaxed font-['IBM_Plex_Sans']">
              {project.description}
            </div>
            
            {/* Actions */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.repo && (
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors font-['IBM_Plex_Sans']"
                >
                  <IconBrandGithub size={18} />
                  View on GitHub
                </a>
              )}
              
              {project.liveDemoUrl && (
                <a 
                  href={project.liveDemoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors font-['IBM_Plex_Sans']"
                >
                  <IconExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
            
            {/* Project details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {project.role && (
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-400 font-medium mb-1 font-['IBM_Plex_Sans']">
                    <IconBriefcase size={18} />
                    <span>Role</span>
                  </div>
                  <div className="text-gray-300 text-sm font-['IBM_Plex_Sans']">{project.role}</div>
                </div>
              )}
              
              {project.timeline && (
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-400 font-medium mb-1 font-['IBM_Plex_Sans']">
                    <IconCalendar size={18} />
                    <span>Timeline</span>
                  </div>
                  <div className="text-gray-300 text-sm font-['IBM_Plex_Sans']">{project.timeline}</div>
                </div>
              )}
              
              {project.teamSize && (
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-400 font-medium mb-1 font-['IBM_Plex_Sans']">
                    <IconUsers size={18} />
                    <span>Team Size</span>
                  </div>
                  <div className="text-gray-300 text-sm font-['IBM_Plex_Sans']">{project.teamSize}</div>
                </div>
              )}
              
              {project.status && (
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-400 font-medium mb-1 font-['IBM_Plex_Sans']">
                    <IconRocket size={18} />
                    <span>Status</span>
                  </div>
                  <div className="text-gray-300 text-sm font-['IBM_Plex_Sans']">{project.status}</div>
                </div>
              )}
            </div>
            
            {/* Key features */}
            {project.key_features && project.key_features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3 font-['IBM_Plex_Sans']">Key Features</h3>
                <ul className="space-y-2 pl-5 list-disc text-gray-300 text-sm font-['IBM_Plex_Sans']">
                  {project.key_features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Tech stack */}
            {project.stack && project.stack.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3 font-['IBM_Plex_Sans']">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((icon: JSX.Element, idx: number) => (
                    <div key={idx} className="p-2 bg-gray-800/70 rounded-md">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDrawer;