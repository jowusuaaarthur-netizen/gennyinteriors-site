import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'Residential',
      description: 'Sophisticated living space with classic elegance.',
      // image: '/images/project-1.jpg'
    },
    {
      id: 2,
      title: 'Luxury Kitchen Renovation',
      category: 'Kitchen Design',
      description: 'High-end kitchen with premium finishes and custom details.',
      // image: '/images/project-2.jpg'
    },
    {
      id: 3,
      title: 'Master Suite Retreat',
      category: 'Residential',
      description: 'Serene bedroom sanctuary with timeless design elements.',
      // image: '/images/project-3.jpg'
    },
    {
      id: 4,
      title: 'Executive Office Space',
      category: 'Commercial',
      description: 'Professional office environment with refined aesthetics.',
      // image: '/images/project-4.jpg'
    },
    {
      id: 5,
      title: 'Upscale Dining Room',
      category: 'Commercial',
      description: 'Elegant dining space with sophisticated ambiance.',
      // image: '/images/project-5.jpg'
    },
    {
      id: 6,
      title: 'Premium Retail Space',
      category: 'Commercial',
      description: 'Curated retail environment showcasing products with elegance.',
      // image: '/images/project-6.jpg'
    }
  ];

  return (
    <div className="portfolio">
      <div className="container">
        <h2>Our Portfolio</h2>
        <p className="portfolio-intro">Explore our collection of refined interior design projects</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-placeholder">
                <p>Add Your Image Here</p>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
