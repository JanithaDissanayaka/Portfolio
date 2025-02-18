import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl font-bold'>Projects</h1>
      <div className='flex flex-col items-center'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex w-full max-w-4xl flex-wrap lg:justify-center'>
            {/* Image Section */}
            <div className='w-full lg:w-1/4 flex justify-center'>
              <img 
                src={project.image} 
                alt={project.title} 
                width={150} 
                height={150} 
                className='mb-6 rounded object-cover'
              />
            </div>
            
            <div className='w-full lg:w-3/4 px-4'>
              <h4 className='mb-2 text-xl font-semibold'>{project.title}</h4>
              <h6 className='mb-4 text-neutral-400'>{project.description}</h6>
              <p className='text-purple-800'>{project.technology}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
