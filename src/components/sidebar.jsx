import { Link } from "react-router-dom";


import {
  LayoutDashboard,
  FileText,
  CalendarDays,
  BarChart3,
  Settings,
} from "lucide-react";


function Sidebar() {
  console.log("SIDEBAR RENDERING ");
  return (
    <aside className="flex min-h-screen w-64 flex-col justify-between border-r border-white/10">
      <div>
        <div className="px-6 pt-6">
          <h2 className="p-6 text-xl font-bold">Autopost</h2>
          <p className="mt-1 text-xs text-white/40">
            AI content. Real growth.
          </p>
        </div>

        <nav className="mt-8 px-4">
          <ul>
            <li className="rounded-lg p-3 hover:bg-white/10">
              <Link to="/" className="flex items-center gap-3">
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </Link>
            </li>

            <li className="rounded-lg p-3 hover:bg-white/10">
              <Link to="/posts" className="flex items-center gap-3">
                <FileText size={20} />
                <span>Posts</span>
              </Link>
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

      <div></div>
    </aside>
  );
}

export default Sidebar;