import { BrowserRouter, Routes, Route,useLocation, Link } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Schedule from "./pages/Schedule";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function AppLayout() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/login";

  return (
    <div className="flex min-h-screen bg-[#080b14] text-white">
      {!isAuthPage && <Sidebar />}

      <main className="min-w-0 flex-1 p-6">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;