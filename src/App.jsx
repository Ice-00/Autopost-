import Sidebar from './components/sidebar'
import StatCard from './components/Statcard'
import { FileText, CalendarDays, BarChart3 } from "lucide-react"

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
  return (
    <div className="flex min-h-screen bg-[#080b14] text-white">
      <Sidebar />

      <main className="flex-1 p-8">

        <div className="flex items-center justify-between"> 
          <div>
            <h1 className="text-3xl font-bold">Good Morning, Eze 👋</h1>
            <p className="mt-2 text-white/50">Your content engine is running. Here's what's happening.</p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            AI ACTIVE
          </div>

        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {stats.map((stat) => {
          return(
            <StatCard
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
           
            />
          ) 
          })}


        </div>
      </main>
    </div>
  )
}

export default App