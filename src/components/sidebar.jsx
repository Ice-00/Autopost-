import {
    LayoutDashboard,
    FileText,
    CalendarDays,
    BarChart3,
    Settings
} from "lucide-react"



function Sidebar() {
    return(
        <aside className="flex w-64 flex-col min-h-screen border-r  justify-between border-white/10 ">

            <div>
                <div className="px-6 pt-6">
                    <h2 className="p-6 text-xl font-bold">Autopost</h2>
                    <p className= "mt-1 text-xs text-white/40">
                        AI content. Real growth.
                    </p>
                </div>


                <nav className="px-4 mt-8 px-4">
                    <ul>
                        <li className="flex items-center gap-3 rounded-lg bg-blue-500/10 p-3 text-blue-400">
                            <LayoutDashboard size={20} />
                            <span>Dashboard</span>
                        </li>
                        <li className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/10">
                            <FileText size={20} />
                            <span>Posts</span>
                        </li>
                        
                        <li className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/10">
                            <CalendarDays size={20} />
                            <span>Schedule</span>
                        </li>
                        <li className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/10">
                            <BarChart3 size={20} />
                            <span>Analytics</span>
                        </li>
                        
                        <li className="flex items-center gap-3 rounded-lg p-3 hover:bg-white/10">
                            <Settings size={20} />
                            <span>Settings</span>
                        </li>
                    </ul>
                </nav>

            </div>


            <div>
         
            </div>

        </aside>
    )
}


export default Sidebar