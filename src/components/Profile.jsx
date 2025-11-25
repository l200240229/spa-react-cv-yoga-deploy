import React from 'react'

export default function Profile({ profile, statistics }){
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl text-white shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <img src={profile.photo_url} alt={profile.full_name} className="w-28 h-28 rounded-xl object-cover shadow-md" />

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{profile.full_name}</h1>
          <p className="opacity-90">{profile.headline}</p>

          <div className="flex flex-wrap gap-2 mt-3 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">{profile.nim}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">{profile.prodi}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Angkatan {profile.angkatan}</span>
          </div>

          <div className="flex gap-4 items-center mt-3 opacity-90 text-sm">
            <span> {profile.location}</span>
            <span> {statistics?.views_count ?? 0} views</span>
          </div>

          <p className="mt-3 max-w-2xl">{profile.short_bio}</p>

          <a href={profile.portfolio_url || '#'} target="_blank" rel="noreferrer" className="inline-block mt-4 px-4 py-2 bg-white text-purple-600 rounded-lg shadow font-semibold">
            Visit Portfolio
          </a>
        </div>
      </div>
    </header>
  )
}