import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className="pb-20">
      <div className="h-[60vh] relative overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-200">{project.shortDescription}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <Link
              to="/portfolio/work"
              className="flex items-center gap-2 text-gray-600 hover:text-black"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
              >
                <ExternalLink className="w-5 h-5" />
                Live Site
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-black"
              >
                <Github className="w-5 h-5" />
                Source Code
              </a>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 mb-8">{project.description}</p>

            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside mb-8">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-600 mb-2">{feature}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <Zoom key={index}>
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="rounded-lg shadow-md"
                  />
                </Zoom>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};