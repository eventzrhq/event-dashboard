"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { Button } from "./ui/button";

interface Event {
  id: string;
  title: string;
  date: Date;
  type: "single" | "all-day" | "long";
  color: string;
  endDate?: Date;
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Current date
  const [viewMode, setViewMode] = useState<"month" | "week" | "day">("month");

  // Sample events data - using current month
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  
  const events: Event[] = [
    {
      id: "1",
      title: "4p Repeating Event",
      date: new Date(currentYear, currentMonth, 14),
      type: "single",
      color: "bg-blue-500", // Blue for single events
    },
    {
      id: "2",
      title: "Long Event",
      date: new Date(currentYear, currentMonth, 25),
      endDate: new Date(currentYear, currentMonth, 26),
      type: "long",
      color: "bg-[#6560F0]", // Purple for long events
    },
    {
      id: "3",
      title: "All Day Event",
      date: new Date(currentYear, currentMonth, 27),
      type: "all-day",
      color: "bg-[#6560F0]", // Purple for all-day events
    },
    {
      id: "4",
      title: "Long Event",
      date: new Date(currentYear, currentMonth, 30),
      endDate: new Date(currentYear, currentMonth + 1, 1),
      type: "long",
      color: "bg-[#6560F0]", // Purple for long events
    },
    // Additional events for better demonstration
    {
      id: "5",
      title: "9a Team Meeting",
      date: new Date(currentYear, currentMonth, 5),
      type: "single",
      color: "bg-blue-500", // Blue for single events
    },
    {
      id: "6",
      title: "2p Conference",
      date: new Date(currentYear, currentMonth, 8),
      type: "single",
      color: "bg-blue-500", // Blue for single events
    },
    {
      id: "7",
      title: "Workshop",
      date: new Date(currentYear, currentMonth, 15),
      type: "all-day",
      color: "bg-[#6560F0]", // Purple for all-day events
    },
    {
      id: "8",
      title: "5p Project Deadline",
      date: new Date(currentYear, currentMonth, 20),
      type: "single",
      color: "bg-blue-500", // Blue for single events
    },
    // Add some events for today and nearby days
    {
      id: "9",
      title: "Today's Event",
      date: new Date(),
      type: "single",
      color: "bg-blue-500",
    },
    {
      id: "10",
      title: "Tomorrow Meeting",
      date: new Date(currentYear, currentMonth, now.getDate() + 1),
      type: "single",
      color: "bg-blue-500",
    },
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add previous month's trailing days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: prevMonth.getDate() - i,
        isCurrentMonth: false,
        fullDate: new Date(year, month - 1, prevMonth.getDate() - i),
      });
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: day,
        isCurrentMonth: true,
        fullDate: new Date(year, month, day),
      });
    }

    // Add next month's leading days
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        date: day,
        isCurrentMonth: false,
        fullDate: new Date(year, month + 1, day),
      });
    }

    return days;
  };

  const getEventsForDate = (date: Date) => {
    return events.filter((event) => {
      if (event.type === "long" && event.endDate != null) {
        return date >= event.date && date <= event.endDate;
      }
      return event.date.toDateString() === date.toDateString();
    });
  };

  const getEventPosition = (event: Event, date: Date) => {
    if (event.type === "long" && event.endDate != null) {
      const startDate = event.date;
      const endDate = event.endDate;
      const currentDate = date;
      
      if (currentDate.toDateString() === startDate.toDateString()) {
        return "start"; // First day of multi-day event
      } else if (currentDate.toDateString() === endDate.toDateString()) {
        return "end"; // Last day of multi-day event
      } else if (currentDate > startDate && currentDate < endDate) {
        return "middle"; // Middle days of multi-day event
      }
    }
    return "single"; // Single day event
  };

  const getMultiDayEvents = () => {
    return events.filter(event => event.type === "long" && event.endDate != null);
  };

  const isPartOfMultiDayEvent = (date: Date, multiDayEvent: Event) => {
    return multiDayEvent.endDate != null && date >= multiDayEvent.date && date <= multiDayEvent.endDate;
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="w-full bg-gray-50 dark:bg-slate-900/50 p-4 h-full sm:p-6 overflow-y-auto scrollbar-hide flex-1">
      <div className="w-full max-w-none h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Calendar
            </h1>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Dashboard / Calendar
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateMonth("prev")}
                    className="p-2 border border-[#6560F026] rounded-[3.27px]"
                  >
                    <Icon name="chevron-left" className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateMonth("next")}
                    className="p-2 border border-[#6560F026] rounded-[3.27px]"
                  >
                    <Icon name="chevron-right" className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={goToToday}
                    className="ml-2 focus:outline-none bg-transparent text-black"
                  >
                    Today
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "month" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("month")}
                  className="focus:outline-none bg-transparent border border-[#6560F026] rounded-[3.27px] text-black"
                >
                  Month
                </Button>
                <Button
                  variant={viewMode === "week" ? "default" : "ghost"}
                  size="sm"
                  className="focus:outline-none bg-transparent border border-[#6560F026] rounded-[3.27px] text-black"
                  onClick={() => setViewMode("week")}
                >
                  Week
                </Button>
                <Button
                  variant={viewMode === "day" ? "default" : "ghost"}
                  size="sm"
                  className="focus:outline-none bg-transparent border border-[#6560F026] rounded-[3.27px] text-black"
                  onClick={() => setViewMode("day")}
                >
                  Day
                </Button>
              </div>
            </div>
          </div>

          {/* Current Month/Year */}
        </div>

        {/* Calendar Grid */}
        <div className="bg-white dark:bg-slate-800 border border-dashed border-[#D2CFE4] dark:border-slate-700 overflow-hidden flex-1 flex flex-col">
          {/* Day Headers */}
          <div className="grid grid-cols-7 border-b border-gray-200 dark:border-slate-700">
            {dayNames.map((day) => (
              <div
                key={day}
                className="p-2 sm:p-4 text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-700/50"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 flex-1">
            {days.map((day, index) => {
              const dayEvents = getEventsForDate(day.fullDate);
              const singleDayEvents = dayEvents.filter(event => event.type === "single" || event.type === "all-day");
              const multiDayEvents = getMultiDayEvents();
              const isToday =
                day.fullDate.toDateString() === new Date().toDateString();

              return (
                <div
                  key={index}
                  className={`h-full p-1 sm:p-2 border-b border-gray-200 dark:border-slate-700 ${
                    day.isCurrentMonth
                      ? "bg-white dark:bg-slate-800"
                      : "bg-gray-50 dark:bg-slate-700/30"
                  } ${
                    index % 7 !== 6 ? "border-r border-gray-200 dark:border-slate-700" : ""
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-sm font-medium ${
                          day.isCurrentMonth
                            ? isToday
                              ? "text-blue-600 dark:text-blue-400 font-bold"
                              : "text-gray-900 dark:text-white"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      >
                        {day.date}
                      </span>
                    </div>

                    {/* Single Day Events */}
                    <div className="flex-1 space-y-1">
                      {singleDayEvents.map((event) => (
                        <div
                          key={event.id}
                          className={`text-xs flex items-center ${
                            event.type === "single"
                              ? "space-x-1"
                              : "p-1 text-white"
                          }`}
                        >
                          {event.type === "single" ? (
                            <>
                              <div className={`w-2 h-2 rounded-full ${event.color} flex-shrink-0`}></div>
                              <span className="text-gray-700 dark:text-gray-300 truncate text-xs">
                                {event.title}
                              </span>
                            </>
                          ) : (
                            <div className={`w-full ${event.color} rounded-full h-6 flex items-center justify-center text-center text-xs`}>
                              {event.title}
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Multi-Day Events */}
                      {multiDayEvents.map((event) => {
                        if (isPartOfMultiDayEvent(day.fullDate, event)) {
                          const position = getEventPosition(event, day.fullDate);
                          const isStart = position === "start";
                          const isEnd = position === "end";
                          const isMiddle = position === "middle";
                          
                          return (
                              <div
                                key={event.id}
                                className={`text-xs ${event.color} text-white h-6 flex items-center pl-2 ${
                                  isStart ? "rounded-l-full" : isEnd ? "rounded-r-full" : "rounded-none"
                                } ${
                                  isStart || isMiddle ? "w-[calc(100%+8px)] -mr-2" : "w-full -ml-2"
                                }`}
                                style={{
                                  zIndex: isStart ? 10 : isEnd ? 10 : 5,
                                  marginTop: "1px",
                                  marginBottom: "1px",
                                  position: "relative"
                                }}
                              >
                                {isStart ? event.title : ""}
                              </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Event Legend */}
  
      </div>
    </div>
  );
};

export default Calendar;
