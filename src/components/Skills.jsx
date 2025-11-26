import React from 'react'

export default function Skills({ skills }){
  const levelToPercent = (s) => {
    if(!s) return 40
    const lv = (s.level || '').toLowerCase()
    if(lv.includes('adv') || lv.includes('expert')) return s.percent ?? 100
    if(lv.includes('inter')) return s.percent ?? 66
    return s.percent ?? 50
  }

  return (
    <section className="bg-white shadow-md p-6 rounded-xl mt-6">
      <h2 className="text-xl font-bold mb-4">Skills & Expertise</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((s, i) => {
          const percent = levelToPercent(s)
          return (
            <div key={i} className="border rounded-xl p-4 shadow-sm bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {s.icon_url && <img src={s.icon_url} alt={s.name} className="w-7 h-7 object-contain" />}
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                </div>

                {s.tag && <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-semibold">{s.tag}</span>}
              </div>

              <p className="text-sm text-gray-600 capitalize mt-1">{s.level}</p>
              {s.exp && <p className="text-xs text-gray-500">{s.exp} experience</p>}

              <div className="mt-3 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-500 rounded-full" style={{width: percent + '%'}} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}