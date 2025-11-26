import React from 'react'

const OrganizationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
)

const WorkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
    <path d="M16 2L8 2c-1.1 0-2 .9-2 2v3h12V4c0-1.1-.9-2-2-2z"></path>
  </svg>
)

export default function Experiences({ experiences }){
  const formatDate = (d) => {
    if(!d) return 'Present'
    try{
      const dt = new Date(d)
      return dt.toLocaleString('id-ID', { month: 'short', year: 'numeric' })
    }catch(e){
      return d
    }
  }

  const getTypeClasses = (type) => {
    switch (type) {
      case 'project':
        return {
          bg: 'bg-green-100',
          text: 'text-green-700',
          label: 'project',
        }
      case 'internship':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-700',
          label: 'internship',
        }
      case 'organization':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-700',
          label: 'organization',
        }
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-700',
          label: type || 'experience',
        }
    }
  }

  const getIcon = (type) => {
    if (type === 'organization') {
      return <OrganizationIcon />
    }
    return <WorkIcon />
  }

  return (
    <section className="bg-white shadow-md p-6 rounded-xl mt-6">
      <h2 className="text-xl font-bold mb-4">Experience</h2>

      <div className="relative">
        {experiences.map((exp, i) => {
          const type = exp.type || exp.experience_type || 'experience'
          const classes = getTypeClasses(type)
          const isCurrent = exp.end === null || exp.end_date === null

          return (
            <div key={i} className="relative pb-8 last:pb-0">
              {i < experiences.length - 1 && (
                <div className="absolute top-0 left-2.5 w-1 h-full bg-gray-200" style={{ transform: 'translateX(-50%)' }}></div>
              )}

              <div className="flex items-start gap-4">
                
                <div className="flex-shrink-0 relative mt-1">
                  <div className={`w-5 h-5 rounded-full ${isCurrent ? 'bg-blue-600 text-white' : 'bg-white text-gray-500 border border-gray-400'} grid place-items-center`}>
                    {getIcon(type)}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-base md:text-lg leading-tight">{exp.role || exp.title}</h3>
                    
                    <span className={`flex-shrink-0 px-2 py-0.5 text-xs rounded-full capitalize font-medium
                      ${classes.bg} ${classes.text} ml-4`}>
                      {classes.label}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-sm mt-0.5 text-gray-600">
                    <span className="font-medium">{exp.company || exp.organization}</span>
                    <span className="text-gray-500 mt-1 md:mt-0">
                        {formatDate(exp.start || exp.start_date)} — {formatDate(exp.end || exp.end_date)}
                        {isCurrent && <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-red-500 text-white font-semibold">Current</span>}
                    </span>
                  </div>
                  
                  <p className="mt-2 text-gray-700 text-sm leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {(exp.tags || exp.technologies || []).map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}