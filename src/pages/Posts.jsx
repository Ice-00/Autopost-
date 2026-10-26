import { FileText, CalendarDays, Check, Clock } from "lucide-react";
import StatCard from "../components/statcard";

function Posts() {
  return (
    <div>
      <div className="flex items-start justify-between mt-0">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Posts
          </h1>

          <p className="mt-1 text-sm text-white/50">
            Manage, edit and track all your posts in one place.
          </p>
        </div>

        <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
          + Create Post
        </button>
      </div>

      <div className="mt-6 flex gap-3">
        <input
          type="text"
          placeholder="Search posts..."
          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
        />

        <select className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
          <option value="all">All Statuses</option>
          <option value="published">Published</option>
          <option value="scheduled">Scheduled</option>
          <option value="draft">Draft</option>
        </select>

        <select className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">
        <StatCard
          title="Total Posts"
          value="12"
          change="↑ 20%"
          icon={FileText}
        />

        <StatCard
          title="Scheduled"
          value="5"
          change="↑ 10%"
          icon={CalendarDays}
        />

        <StatCard
          title="Published"
          value="6"
          change="↑ 50%"
          icon={Check}
        />

        <StatCard
          title="Drafts"
          value="1"
          change="↑ 1%"
          icon={Clock}
        />
      </div>
    </div>
  );
}

export default Posts;