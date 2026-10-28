import { FileText, CalendarDays, Check, Clock, Heart, MessageCircle, Eye, Pencil, Trash } from "lucide-react";
import StatCard from "../components/statcard";

function Posts() {

  const posts = [
    {
      text: "Discipline beats motivation.",
      status: "Published",
      date: "Oct 10, 2026",
      time: "2:00 pm" , 
      platform: "X",
      likes: 140,
      comments: 12,
      views: "3.2K",
    },


    {
      text: "Build more. Consume less.",
      status: "Scheduled",
      date: "Oct 11, 2026",
      time: "9:00 am",
      platform: "X",
      likes:100,
      comments: 12,
      views: "1.2K",    
    },

    {
      text: "Learning JavaScript every day.",
      status: "Draft",
      date: "Oct 9, 2026",
      time: "6:30 pm",
      platform:"X",
      likes: 194,
      comments: 40,
      views: "2.2K",
    },
  ];

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
          color="blue"
        />

        <StatCard
          title="Scheduled"
          value="5"
          change="↑ 10%"
          icon={CalendarDays}
          color="green"
        />

        <StatCard
          title="Published"
          value="6"
          change="↑ 50%"
          icon={Check}
          color="purple"
        />

        <StatCard
          title="Drafts"
          value="1"
          change="↑ 1%"
          icon={Clock}
          color="amber"
        />
      </div>

      <div className=" mt-6 grid grid-cols-[3fr_1fr_1fr_1.5fr_1.5fr_1fr] gap-4 border-b border-white/10 px-4 py-3 text-sm text-white/50 ">
        <p>Content</p>
        <p>Platform</p>
        <p>Status</p>
        <p>Scheduled For / Posted</p>
        <p>Engagement</p>
        <p>Actions</p>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-[#10182a] p-5">
        {posts.map((post) => {
          return (
            <div
              key={post.text}
              className="grid grid-cols-[3fr_1fr_1fr_1.5fr_1.5fr_1fr] items-center gap-4 border-b border-white/20 py-4 "
            >
              <p>{post.text}</p>
              <p>{post.platform}</p>
              <span
                className={
                  post.status === "Published"
                    ? "w-fit rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400"
                    : post.status === "Scheduled"
                      ? "w-fit rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
                      : "w-fit rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400"
                }
              >
                {post.status}
              </span>

              <div className="flex flex-col gap-1 ">
                <p className="text-sm text-white" >{post.date}</p>
                <p className="text-xs text-white/40">{post.time}</p>
              </div>

              <div className="flex items-center gap-3 text-sm text-white">

                <span className="flex items-center gap-1">
                  <Heart size={14} />
                  {post.likes}
                </span>

                <span className="flex items-center gap-1">
                  <MessageCircle size={14} />
                  {post.comments}
                </span>

                 <span className="flex items-center gap-1">
                    <Eye size={14} />
                    {post.views}
                  </span>

              </div>

              <div className="flex items-center gap-2 ">
                <button className="rounded-lg border border-white/10 bg-blue/20 p-2 text-white/70 hover:bg-blue/30 ">
                  <Pencil size={16} />
                </button>

                <button className="rounded-lg border border-white/10 bg-red-800/20 p-2 text-white/70 hover:bg-blue/30 ">
                  <Trash className="text-red-400" size={16} />
                </button>
              </div>

            </div>
          );
        })}
      </div>


    </div>
  );
}

export default Posts;