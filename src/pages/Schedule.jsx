import {
  CalendarDays,
  Clock3,
  Send,
  CheckCircle,
} from "lucide-react";

import StatCard from "../components/statcard";
import { useState } from "react";

function Schedule(){

    const [currentDate, setCurrentDate] = useState(new Date());
    const month= currentDate.getMonth();
    const year= currentDate.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return(
        <div>
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-white">
                        Schedule
                    </h1>

                    <p className="mt-1 text-sm text-white/50">
                          Plan and manage your upcoming posts.
                    </p>
                </div>
                <button className="flex items-center gap-2 rounded-lg bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600">
                    <span className="text-xl">+</span>
                    Schedule Post
                </button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-4 gap-4">
                <StatCard
                title="Scheduled Posts"
                value="5"
                change="↑ 25%"
                icon={CalendarDays}
                color="blue"
                />

                <StatCard
                title="This Week"
                value="3"
                change="↑ 50%"
                icon={Clock3}
                color="purple"
                />

                <StatCard
                title="This Month"
                value="12"
                change="↑ 20%"
                icon={Send}
                color="amber"
                />

                <StatCard
                title="Published"
                value="28"
                change="↑ 40%"
                icon={CheckCircle}
                color="green"
                />

            </div>

            <div className="mt-6 grid grid-cols-[2.5fr_1fr] gap-4">

                <div className="mt-4 grid grid-cols-7">
                    {Array.from({ length: daysInMonth }, (_, index) => (
                        <div
                            key={index}
                            className="min-h-28 border-r border-b border-white/10 p-3"
                        >
                            <p className="text-sm text-white/50">
                                {index + 1}
                            </p>
                        </div>
                    ))}
                </div>

              

                <div className="space-y-4">

                    {/* Upcoming Posts */}
                    <div className="rounded-xl border border-white/10 bg-[#10182a] overflow-hidden">

                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                        <h2 className="text-lg font-semibold">Upcoming Posts</h2>

                        <button className="text-sm text-blue-400 hover:text-blue-300">
                            View All
                        </button>
                        </div>

                        <div className="p-4">
                        {/* Posts will go here */}
                        </div>

                    </div>


                    {/* Quick Actions */}
                    <div className="rounded-xl border border-white/10 bg-[#10182a] overflow-hidden">

                        <div className="border-b border-white/10 px-5 py-4">
                        <h2 className="text-lg font-semibold">Quick Actions</h2>
                        </div>

                        <div className="space-y-2 p-4">

                        <button className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10">
                            <span>Schedule New Post</span>
                            <span className="text-lg text-white/50">→</span>
                        </button>

                        <button className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10">
                            <span>View All Scheduled</span>
                            <span className="text-lg text-white/50">→</span>
                        </button>

                        </div>

                    </div>

              

                </div>

            </div>
                    


           
        </div>
    );
}

export default Schedule;