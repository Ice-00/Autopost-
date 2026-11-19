
import { useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  TrendingUp,
} from "lucide-react";
import {
  Eye,
  Heart,
  MessageCircle,
  Users,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import StatCard from "../components/statcard";
import {
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Analytics() {
  const [dateRange, setDateRange] = useState("7 Days");
  const engagementData = [
  { day: "Mon", rate: 3 },
  { day: "Tue", rate: 4 },
  { day: "Wed", rate: 3.6 },
  { day: "Thu", rate: 5 },
  { day: "Fri", rate: 4.5 },
  { day: "Sat", rate: 6 },
  { day: "Sun", rate: 5.5 },
];
const breakdownData = [
  { name: "Likes", value: 60.4, color: "#3b82f6" },
  { name: "Replies", value: 18.8, color: "#a855f7" },
  { name: "Reposts", value: 12.6, color: "#eab308" },
  { name: "Quotes", value: 8.2, color: "#4ade80" },
];

const topPosts = [
  {
    text: "Discipline beats motivation.",
    date: "Nov 9, 2026",
    time: "10:00 AM",
    impressions: "1,420",
    engagements: "186",
  },
  {
    text: "Small consistent actions compound into big results.",
    date: "Nov 7, 2026",
    time: "6:00 PM",
    impressions: "1,184",
    engagements: "142",
  },
  {
    text: "Focus on progress, not perfection.",
    date: "Nov 5, 2026",
    time: "9:00 AM",
    impressions: "982",
    engagements: "118",
  },
];

const insights = [
  {
    title: "Engagement is up 18.5%",
    description: "Your content is performing better than the previous period.",
    icon: ArrowUpRight,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Best posting time: 6 PM – 9 PM",
    description: "Your posts get 34% more engagement during this window.",
    icon: Clock3,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Top content type: Motivational",
    description: "Motivational posts have the highest engagement rate (6.1%).",
    icon: TrendingUp,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Analytics
          </h1>

          <p className="mt-1 text-sm text-white/50">
            Track your content performance and audience engagement.
          </p>
        </div>

        {/* Date Filters */}
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#10182a] p-1">
          {["7 Days", "30 Days", "90 Days"].map((range) => (
            <button
              key={range}
              onClick={() => setDateRange(range)}
              className={`rounded-lg px-4 py-2 text-sm transition ${
                dateRange === range
                  ? "bg-blue-500 text-white"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

        {/* Analytics Stats */}
        <div className="mt-8 grid grid-cols-4 gap-4">
            <StatCard
                title="Total Impressions"
                value="24.8K"
                change="↑ 18.5%"
                icon={Eye}
                color="blue"
            />

            <StatCard
                title="Total Likes"
                value="1,240"
                change="↑ 12.3%"
                icon={Heart}
                color="purple"
            />

            <StatCard
                title="Replies"
                value="386"
                change="↑ 8.2%"
                icon={MessageCircle}
                color="amber"
            />

            <StatCard
                title="New Followers"
                value="642"
                change="↑ 15.4%"
                icon={Users}
                color="green"
            />
        </div>
         
{/* Engagement Section */}
<div className="mt-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">

  {/* Engagement Overview */}
  <div className="rounded-xl border border-white/10 bg-[#10182a] p-5">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Engagement Overview
        </h2>

        <button className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70">
          Engagement Rate⌄
        </button>
      </div>

      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={engagementData}>
            <CartesianGrid
              stroke="#ffffff15"
              strokeDasharray="5 5"
            />

            <XAxis
              dataKey="day"
              stroke="#ffffff80"
              tickLine={false}
            />

            <YAxis
              domain={[0, 7]}
              tickFormatter={(value) => `${value}%`}
              stroke="#ffffff80"
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#10182a",
                border: "1px solid #ffffff20",
                borderRadius: "8px",
                color: "#fff",
              }}
              formatter={(value) => [`${value}%`, "Engagement"]}
            />

            <Line
              type="monotone"
              dataKey="rate"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: "#3b82f6", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Engagement Breakdown */}
    <div className="rounded-xl border border-white/10 bg-[#10182a]">

      <div className="border-b border-white/10 px-5 py-4">
        <h2 className="text-lg font-semibold text-white">
          Engagement Breakdown
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-5 sm:flex-row">

        <div className="h-[200px] w-full max-w-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={breakdownData}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={2}
                stroke="none"
              >
                {breakdownData.map((item) => (
                  <Cell
                    key={item.name}
                    fill={item.color}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => `${value}%`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full space-y-4">
          {breakdownData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-white/80">
                  {item.name}
                </span>
              </div>

              <span className="text-sm text-white">
                {item.value}%
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>

  </div>
  
{/* Bottom Analytics Section */}
<div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">

  {/* Top Performing Posts */}
  <div className="overflow-hidden rounded-xl border border-white/10 bg-[#10182a]">

    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
      <h2 className="text-lg font-semibold text-white">
        Top Performing Posts
      </h2>

      <button className="text-sm text-blue-400 hover:text-blue-300">
        View All →
      </button>
    </div>

    <div>
      {topPosts.map((post, index) => (
        <div
          key={post.text}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 last:border-b-0"
        >
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
              ["bg-blue-500/20", "bg-cyan-500/20", "bg-purple-500/20"][index]
            }`}>
              <TrendingUp className="text-white/70" size={20} />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium text-white">
                "{post.text}"
              </p>

              <p className="mt-1 text-xs text-white/50">
                {post.date} · {post.time}
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <p className="text-sm font-semibold text-white">
                {post.impressions}
              </p>
              <p className="text-xs text-white/50">
                Impressions
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                {post.engagements}
              </p>
              <p className="text-xs text-white/50">
                Engagements
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Key Insights */}
  <div className="overflow-hidden rounded-xl border border-white/10 bg-[#10182a]">

    <div className="border-b border-white/10 px-5 py-4">
      <h2 className="text-lg font-semibold text-white">
        ✨ Key Insights
      </h2>
    </div>

    <div className="space-y-5 p-5">
      {insights.map((insight) => {
        const Icon = insight.icon;

        return (
          <div key={insight.title} className="flex items-start gap-4">
            <div className={`rounded-lg p-3 ${insight.bg}`}>
              <Icon className={insight.color} size={22} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                {insight.title}
              </p>

              <p className="mt-1 text-sm text-white/60">
                {insight.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>

</div>

    </div>
  );
}

export default Analytics;
