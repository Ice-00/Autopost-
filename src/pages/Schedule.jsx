import {
  CalendarDays,
  Clock3,
  Send,
  CheckCircle,
} from "lucide-react";

import StatCard from "../components/statcard";


function Schedule(){
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
        </div>
    );
}

export default Schedule;