
import {
  CalendarDays,
  Clock3,
  Send,
  CheckCircle,
} from "lucide-react";

import StatCard from "../components/statcard";
import { useState } from "react";

function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("Month");

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // MONTH VIEW DATA
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const previousMonthDays = new Date(year, month, 0).getDate();

  const previousMonthDates = Array.from(
    { length: firstDay },
    (_, index) => ({
      day: previousMonthDays - firstDay + index + 1,
      type: "previous",
    })
  );

  const nextMonthDates = Array.from(
    { length: 42 - (firstDay + daysInMonth) },
    (_, index) => ({
      day: index + 1,
      type: "next",
    })
  );

  const calendarDays = [
    ...previousMonthDates,
    ...Array.from({ length: daysInMonth }, (_, index) => ({
      day: index + 1,
      type: "current",
    })),
    ...nextMonthDates,
  ];

  // WEEK VIEW DATA
  const weekStart = new Date(
    year,
    month,
    currentDate.getDate() - currentDate.getDay()
  );

  const weekDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + index);
    return date;
  });

  // DAY VIEW DATA
  const timeSlots = Array.from({ length: 24 }, (_, hour) => {
    const period = hour < 12 ? "AM" : "PM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:00 ${period}`;
  });

  // YEAR VIEW DATA
  const yearMonths = Array.from({ length: 12 }, (_, monthIndex) => {
    const monthFirstDay = new Date(year, monthIndex, 1).getDay();
    const monthDays = new Date(year, monthIndex + 1, 0).getDate();

    return {
      name: new Date(year, monthIndex, 1).toLocaleString("default", {
        month: "long",
      }),
      index: monthIndex,
      dates: [
        ...Array(monthFirstDay).fill(null),
        ...Array.from({ length: monthDays }, (_, index) => index + 1),
      ],
    };
  });

  // NAVIGATION
  const changePeriod = (direction) => {
    if (view === "Year") {
      setCurrentDate(new Date(year + direction, month, 1));
    } else if (view === "Week") {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + direction * 7);
      setCurrentDate(date);
    } else if (view === "Day") {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + direction);
      setCurrentDate(date);
    } else {
      setCurrentDate(new Date(year, month + direction, 1));
    }
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // CALENDAR HEADING
  const calendarHeading = () => {
    if (view === "Year") {
      return year;
    }

    if (view === "Day") {
      return currentDate.toLocaleDateString("default", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }

    if (view === "Week") {
      const endDate = weekDays[6];

      const startLabel = weekDays[0].toLocaleDateString("default", {
        day: "numeric",
        month: "short",
      });

      const endLabel = endDate.toLocaleDateString("default", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      return `${startLabel} - ${endLabel}`;
    }

    return currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div>
      {/* Page Header */}
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

      {/* Main Schedule Layout */}
      <div className="mt-6 grid grid-cols-[2.5fr_1fr] gap-4">

        {/* LEFT: CALENDAR */}
        <div className="min-w-0">

          {/* Calendar Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-t-xl border border-white/10 bg-[#10182a] px-5 py-4">

            {/* Date Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => changePeriod(-1)}
                className="rounded-lg border border-white/10 px-3 py-2 hover:bg-white/10"
              >
                ←
              </button>

              <h2 className="text-lg font-semibold text-white">
                {calendarHeading()}
              </h2>

              <button
                onClick={() => changePeriod(1)}
                className="rounded-lg border border-white/10 px-3 py-2 hover:bg-white/10"
              >
                →
              </button>
            </div>

            {/* View Controls */}
            <div className="flex flex-wrap items-center gap-2">
              {["Month", "Week", "Day", "Year"].map((item) => (
                <button
                  key={item}
                  onClick={() => setView(item)}
                  className={`rounded-lg px-3 py-2 text-sm ${
                    view === item
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}

              <button
                onClick={goToToday}
                className="rounded-lg bg-blue-500/20 px-3 py-2 text-sm text-blue-400 hover:bg-blue-500/30"
              >
                Today
              </button>
            </div>
          </div>

          {/* MONTH VIEW */}
          {view === "Month" && (
            <div className="rounded-b-xl border-x border-b border-white/10 bg-[#080b14]">

              <div className="grid grid-cols-7 border-b border-white/10">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div
                    key={day}
                    className="border-r border-white/10 px-2 py-3 text-center text-sm text-white/50"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7">
                {calendarDays.map((date, index) => (
                  <div
                    key={index}
                    className="min-h-20 border-r border-b border-white/10 p-2"
                  >
                    <p className={`text-sm ${
                      date.type === "current"
                        ? "text-white/80"
                        : "text-white/25"
                    }`}>
                      {date.day}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WEEK VIEW */}
          {view === "Week" && (
            <div className="rounded-b-xl border-x border-b border-white/10 bg-[#080b14]">

              <div className="grid grid-cols-7 border-b border-white/10">
                {weekDays.map((date, index) => (
                  <div
                    key={index}
                    className="border-r border-white/10 px-2 py-3 text-center"
                  >
                    <p className="text-xs text-white/50">
                      {date.toLocaleDateString("default", {
                        weekday: "short",
                      })}
                    </p>

                    <p className="mt-1 text-sm text-white/80">
                      {date.getDate()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7">
                {weekDays.map((date, index) => (
                  <div
                    key={index}
                    className="min-h-48 border-r border-b border-white/10 p-2"
                  >
                    {/* Scheduled posts will go here */}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DAY VIEW */}
          {view === "Day" && (
            <div className="rounded-b-xl border-x border-b border-white/10 bg-[#080b14]">

              {timeSlots.map((time) => (
                <div
                  key={time}
                  className="flex min-h-16 border-b border-white/10"
                >
                  <div className="w-24 shrink-0 border-r border-white/10 p-3 text-sm text-white/50">
                    {time}
                  </div>

                  <div className="flex-1 p-3">
                    {/* Scheduled posts will go here */}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* YEAR VIEW */}
          {view === "Year" && (
            <div className="grid grid-cols-3 gap-3 rounded-b-xl border-x border-b border-white/10 bg-[#080b14] p-4">

              {yearMonths.map((monthData) => (
                <div
                  key={monthData.index}
                  className="rounded-lg border border-white/10 bg-[#10182a] p-3"
                >
                  <button
                    onClick={() => {
                      setCurrentDate(new Date(year, monthData.index, 1));
                      setView("Month");
                    }}
                    className="mb-3 text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    {monthData.name}
                  </button>

                  <div className="grid grid-cols-7 gap-y-2 text-center">
                    {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                      <span
                        key={index}
                        className="text-[10px] text-white/40"
                      >
                        {day}
                      </span>
                    ))}

                    {monthData.dates.map((day, index) => (
                      <button
                        key={index}
                        disabled={!day}
                        onClick={() => {
                          setCurrentDate(new Date(year, monthData.index, day));
                          setView("Day");
                        }}
                        className={`text-xs ${
                          day
                            ? "text-white/70 hover:rounded-full hover:bg-blue-500/20 hover:text-blue-400"
                            : "text-transparent"
                        }`}
                      >
                        {day || ""}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: SIDEBAR */}
        <div className="space-y-4">

          {/* Upcoming Posts */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#10182a]">

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h2 className="text-lg font-semibold">
                Upcoming Posts
              </h2>

              <button className="text-sm text-blue-400 hover:text-blue-300">
                View All
              </button>
            </div>

            <div className="p-4">
              {/* Posts will go here */}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#10182a]">

            <div className="border-b border-white/10 px-5 py-4">
              <h2 className="text-lg font-semibold">
                Quick Actions
              </h2>
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
