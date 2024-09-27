import React from 'react'
import { PROJECTS } from '../constants'
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Project</h2>
      <div>
        {PROJECTS.map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:1/4">
              <p className="mb-2 text-sm text-neutral-400">
                {projects.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects