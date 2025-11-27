import React, { useEffect, useState } from 'react'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experiences from './components/Experiences'

export default function App(){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    fetch('/dataMahasiswa.json')
      .then(res => {
        if(!res.ok) throw new Error('Failed to load dataMahasiswa.json')
        return res.json()
      })
      .then(j => setData(j))
      .catch(err => { console.error(err); setData(null) })
      .finally(()=> setLoading(false))
  }, [])

  if(loading) return <div className="p-6 max-w-5xl mx-auto">Loading...</div>
  if(!data) return <div className="p-6 max-w-5xl mx-auto">Data tidak tersedia</div>

  // adapt to either structure (profile or top-level)
  const profile = data.profile ?? {
    full_name: data.name || 'Nama',
    headline: data.title || '',
    nim: data.npm || data.nim || '',
    prodi: data.program || data.prodi || '',
    angkatan: data.angkatan || '',
    location: data.location || '',
    short_bio: data.bio || data.short_bio || '',
    photo_url: data.photo || '/profile.jpg',
    portfolio_url: data.portfolio_url || '#'
  }

  const skills = data.skills || []
  const experiences = data.experiences || []

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Profile profile={profile} statistics={data.statistics || {views_count: data.views || 0}} />
      <Skills skills={skills} />
      <Experiences experiences={experiences} />
    </div>
  )
}