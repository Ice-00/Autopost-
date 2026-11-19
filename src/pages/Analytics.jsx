
import { useState } from "react";
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
          {/* Engagement Overview */}
        <div className="mt-6 rounded-xl border border-white/10 bg-[#10182a] p-5">
        <div className="mb-6">
            <h2 className="text-lg font-semibold text-white">
            Engagement Overview
            </h2>
            <p className="text-sm text-white/50">
            Your engagement over the last 7 days
            </p>
        </div>

        <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={engagementData}>
                    <CartesianGrid stroke="#ffffff15" strokeDasharray="5 5" />

                        <XAxis
                        dataKey="day"
                        stroke="#ffffff60"
                        tickLine={false}
                        />

                        <YAxis
                        domain={[0, 7]}
                        tickFormatter={(value) => `${value}%`}
                        stroke="#ffffff60"
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
    </div>
  );
}

export default Analytics;
