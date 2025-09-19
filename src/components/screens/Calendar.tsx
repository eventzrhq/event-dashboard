"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Icon } from "../icons";
import { Badge } from "../ui/badge";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1)); // March 2024
  const [view, setView] = useState("Month");

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Sample events data
  const events = [
    { id: 1, title: "Figma Event Conference 2025", date: 3, color: "bg-pink-500", textColor: "text-white" },
    { id: 2, title: "Seminar #4", date: 8, color: "bg-green-500", textColor: "text-white" },
    { id: 3, title: "10:30a Meeting 3", date: 18, color: "bg-green-400", textColor: "text-black" },
    { id: 4, title: "2p Meeting#", date: 18, color: "bg-purple-400", textColor: "text-white" },
    { id: 5, title: "4p Submission #1", date: 21, color: "bg-yellow-400", textColor: "text-black" },
    { id: 6, title: "10:30am Meeting 3", date: 30, color: "bg-green-400", textColor: "text-black" },
    { id: 7, title: "12pm Meeting", date: 30, color: "bg-pink-500", textColor: "text-white" },
  ];

  const appointments = [
    { id: 1, time: "10:00 - 11:00", period: "AM", title: "Adlash Project Estimation Meeting", lead: "Lead by John Harry" },
    { id: 2, time: "11:00 - 11:30", period: "AM", title: "Dashboard HTML Design Review", lead: "Lead by Jonathan Andy" },
    { id: 3, time: "12:00 - 1:30", period: "PM", title: "Dashboard UI/UX Design Review", lead: "Lead by Jonathan Andy" },
    { id: 4, time: "10:00 - 11:00", period: "AM", title: "Adlash Project Estimation Meeting", lead: "Lead by John Harry" },
    { id: 5, time: "12:00 - 1:30", period: "PM", title: "Dashboard UI/UX Design Review", lead: "Lead by Jonathan Andy" },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getEventsForDay = (day: number) => {
    return events.filter(event => event.date === day);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-slate-900 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Calendar Main Section */}
          <div className="xl:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigateMonth('prev')}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <Icon name="chevron-left" className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <button
                    onClick={() => navigateMonth('next')}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <Icon name="chevron-right" className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  {["Month", "Week", "Day"].map((viewType) => (
                    <button
                      key={viewType}
                      onClick={() => setView(viewType)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        view === viewType
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600"
                      }`}
                    >
                      {viewType}
                    </button>
                  ))}
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white ml-4">
                    Create Appointment
                  </Button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                {/* Day Headers */}
                {daysOfWeek.map((day, index) => (
                  <div key={day} className={`p-3 text-center border-b border-gray-200 dark:border-slate-700 ${index < daysOfWeek.length - 1 ? 'border-r' : ''}`}>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {day}
                    </span>
                  </div>
                ))}

                {/* Calendar Days */}
                {days.map((day, index) => {
                  const dayEvents = day ? getEventsForDay(day) : [];
                  const isToday = day === new Date().getDate() && 
                    currentDate.getMonth() === new Date().getMonth() && 
                    currentDate.getFullYear() === new Date().getFullYear();

                  return (
                    <div
                      key={index}
                      className={`min-h-[120px] p-2 border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer ${
                        day ? "bg-white dark:bg-slate-800" : "bg-gray-50 dark:bg-slate-900"
                      } ${index % 7 !== 6 ? 'border-r' : ''} ${Math.floor(index / 7) < Math.floor((days.length - 1) / 7) ? 'border-b' : ''}`}
                    >
                      {day && (
                        <>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-sm font-medium ${
                              isToday 
                                ? "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center" 
                                : "text-gray-900 dark:text-white"
                            }`}>
                              {day}
                            </span>
                          </div>
                          
                          <div className="space-y-1">
                            {dayEvents.map((event) => (
                              <div
                                key={event.id}
                                className={`${event.color} ${event.textColor} p-1 rounded text-xs font-medium truncate`}
                              >
                                {event.title}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Today&apos;s Appointments Sidebar */}
          <div className="xl:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Today&apos;s Appointments
              </h3>

              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="border-l-4 border-blue-500 pl-4 py-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {appointment.time}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {appointment.period}
                          </Badge>
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                          {appointment.title}
                        </h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400">
                          {appointment.lead}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Actions
                </h4>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Icon name="plus" className="w-4 h-4 mr-2" />
                    Add Event
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Icon name="calendar" className="w-4 h-4 mr-2" />
                    View Schedule
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Icon name="settings" className="w-4 h-4 mr-2" />
                    Calendar Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;