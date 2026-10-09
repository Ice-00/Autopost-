import Sidebar from './components/sidebar'
import StatCard from './components/Statcard'
import ContentEngine from './components/ContentEngine'
import { FileText, CalendarDays, BarChart3, Clock } from "lucide-react"
import { useState } from 'react'

const stats = [
  {
    title: "Total Posts",
    value: "12",
    change: "↑ 20%",
    icon: FileText,
  },

  {
    title: "Scheduled Posts",
    value: "5",
    change: "↑ 10%",
    icon: CalendarDays,
  },

  {
    title: "Engagement Rate",
    value: "3.5%",
    change: "↓ 5%",
    icon: BarChart3,
  },

  
]



function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex min-h-screen bg-[#080b14] text-white">
      <Sidebar />

      <main className="flex-1 p-8">

        <div className="flex items-center justify-between"> 
          <div>
            <h1 className="text-3xl font-bold">Good Morning, Eze 👋</h1>
            <p className="mt-2 text-white/50">Your content engine is running. Here's what's happening.</p>
          </div>

          <button onClick={() => setIsActive(!isActive)}
           className= {`flex items-center gap-2 rounded-full  px-4 py-2 text-sm  ${isActive ? 'border border-green-500/30 bg-green-500/10 text-green-400' : 'border border-amber-500/30 bg-amber-500/10 text-amber-400'}`}>

            <span className={`h-2 w-2 rounded-full ${isActive ? 'bg-green-400' : 'bg-amber-400'}`}></span>

             {isActive ? "AI ACTIVE" : "AI PAUSED"}
          </button>

        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {stats.map((stat) => {
          return(
            <StatCard
              isActive = {isActive}
              setIsActive = {setIsActive}
              key={stat.title}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
           
            />
          ) 
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <ContentEngine />
          </div>

          <div className="lg:col-span-1 grid grid-rows-2 gap-6">
            <NextPost />
          </div>
        </div>

      </main>
    </div>
  )
}

export default App