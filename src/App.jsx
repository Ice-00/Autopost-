import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/sidebar";

import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[#080b14] text-white">
        <Sidebar />

        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;