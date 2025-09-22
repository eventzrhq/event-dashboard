"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Icon } from "../icons";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1)); // March 2024
  const [view, setView] = useState("Month");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Sample events data with start and end dates
  const events = [
    { id: 1, title: "Figma Event Conference 2025", startDate: 3, endDate: 5, color: "bg-pink-200", textColor: "text-pink-800", borderColor: "border-l-pink-400", row: 0 },
    { id: 2, title: "Seminar #4", startDate: 8, endDate: 11, color: "bg-green-200", textColor: "text-green-800", borderColor: "border-l-green-400", row: 0 },
    { id: 3, title: "10:30a Meeting 3", startDate: 18, endDate: 18, color: "bg-green-200", textColor: "text-green-800", borderColor: "border-l-green-400", row: 0 },
    { id: 4, title: "12p Meeting#", startDate: 18, endDate: 18, color: "bg-purple-200", textColor: "text-purple-800", borderColor: "border-l-purple-400", row: 1 },
    { id: 5, title: "4p Submission #1", startDate: 21, endDate: 21, color: "bg-yellow-200", textColor: "text-yellow-800", borderColor: "border-l-yellow-400", row: 0 },
    { id: 6, title: "10:30am Meeting 3", startDate: 30, endDate: 30, color: "bg-green-200", textColor: "text-green-800", borderColor: "border-l-green-400", row: 0 },
    { id: 7, title: "12pm Meeting", startDate: 30, endDate: 30, color: "bg-pink-200", textColor: "text-pink-800", borderColor: "border-l-pink-400", row: 1 },
  ];

  const appointments = [
    { id: 1, time: "10:00 - 11:00", period: "AM", title: "Adlash Project Estimation Meeting", lead: "Lead by", person: "John Harry", personColor: "text-blue-600" },
    { id: 2, time: "11:00 - 11:30", period: "AM", title: "Dashboard HTML Design Review", lead: "Lead by", person: "Jonathan Andy", personColor: "text-green-600" },
    { id: 3, time: "12:00 - 1:30", period: "PM", title: "Dashboard UI/UX Design Review", lead: "Lead by", person: "Jonathan Andy", personColor: "text-purple-600" },
    { id: 4, time: "10:00 - 11:00", period: "AM", title: "Adlash Project Estimation Meeting", lead: "Lead by", person: "John Harry", personColor: "text-orange-600" },
    { id: 5, time: "12:00 - 1:30", period: "PM", title: "Dashboard UI/UX Design Review", lead: "Lead by", person: "Jonathan Andy", personColor: "text-pink-600" },
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
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 0 dark:border-slate-700">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => navigateMonth('prev')}
                    className=" hover:bg-gray-100 size-10 bg-[#F7F7F7] p-[10px] dark:hover:bg-slate-700 rounded-ss-lg rounded-es-lg transition-colors"
                  >
                    <Icon name="chevron-left" className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                 
                  <button
                    onClick={() => navigateMonth('next')}
                    className="rounded-ee-lg rounded-se-lg bg-[#F7F7F7] p-[10px] hover:bg-gray-100 dark:hover:bg-slate-700  transition-colors"
                  >
                    <Icon name="chevron-right" className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                </div>

                <div className="flex items-center">
                  {["Month", "Week", "Day"].map((viewType, index) => (
                    <button
                      key={viewType}
                      onClick={() => setView(viewType)}
                      className={`px-[14px] py-3 text-sm font-medium transition-colors ${
                        index === 0 ? "rounded-l-lg" : index === 2 ? "rounded-r-lg" : ""
                      } ${
                        view === viewType
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600"
                      }`}
                    >
                      {viewType}
                    </button>
                  ))}
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white ml-4"
                    onClick={() => setIsDrawerOpen(true)}
                  >
                    Create Appointment
                  </Button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                {/* Day Headers */}
                <div className="grid grid-cols-7">
                  {daysOfWeek.map((day, index) => (
                    <div key={day} className={`p-3 text-center border-b bg-[#F7F7F7] border-gray-200 dark:border-slate-700 ${index < daysOfWeek.length - 1 ? 'border-r' : ''}`}>
                      <span className="text-sm text-black font-bold dark:text-gray-400">
                        {day}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Calendar Weeks */}
                {Array.from({ length: Math.ceil(days.length / 7) }, (_, weekIndex) => {
                  const weekDays = days.slice(weekIndex * 7, (weekIndex + 1) * 7);
                  const weekStartDay = weekDays.find(day => day !== null) || 1;
                  
                  return (
                    <div key={weekIndex} className="relative">
                      {/* Week Days Grid */}
                      <div className="grid grid-cols-7">
                        {weekDays.map((day, dayIndex) => {
                          const globalIndex = weekIndex * 7 + dayIndex;
                          const isToday = day === new Date().getDate() && 
                            currentDate.getMonth() === new Date().getMonth() && 
                            currentDate.getFullYear() === new Date().getFullYear();

                          return (
                            <div
                              key={globalIndex}
                              className={`min-h-[100px] p-2 border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer relative ${
                                day ? "bg-white dark:bg-slate-800" : "bg-gray-50 dark:bg-slate-900"
                              } ${dayIndex < 6 ? 'border-r' : ''} ${weekIndex < Math.ceil(days.length / 7) - 1 ? 'border-b' : ''}`}
                            >
                              {day && (
                                <div className="flex items-center justify-start mb-2">
                                  <span className={`text-sm font-medium ${
                                    isToday 
                                      ? "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center" 
                                      : "text-gray-900 dark:text-white"
                                  }`}>
                                    {day}
                                  </span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Events Layer */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="grid grid-cols-7 h-full">
                          {weekDays.map((day, dayIndex) => (
                            <div key={dayIndex} className="relative">
                              {day && events.map((event) => {
                                if (day >= event.startDate && day <= event.endDate) {
                                  const isEventStart = day === event.startDate;
                                  if (!isEventStart && day !== Math.max(weekStartDay, event.startDate)) return null;
                                  
                                  const eventEndInWeek = Math.min(6, weekDays.findIndex((d, i) => i >= dayIndex && d === event.endDate));
                                  const actualEndInWeek = eventEndInWeek === -1 ? 6 : eventEndInWeek;
                                  const spanCols = actualEndInWeek - dayIndex + 1;
                                  
                                  return (
                                    <div
                                      key={`${event.id}-${weekIndex}`}
                                      className={`absolute pointer-events-auto ${event.color} ${event.textColor} ${event.borderColor} rounded-r-md border-l-2 px-2 py-1 text-xs font-medium z-10`}
                                      style={{
                                        top: `${35 + event.row * 20}px`,
                                        left: '0',
                                        right: spanCols > 1 ? `-${(spanCols - 1) * 100 + (spanCols - 1) * 1}%` : '4px',
                                        width: spanCols > 1 ? `${spanCols * 100 + (spanCols - 1)}%` : 'calc(100% - 8px)'
                                      }}
                                    >
                                      <div className="truncate">{event.title}</div>
                                    </div>
                                  );
                                }
                                return null;
                              })}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Today&apos;s Appointments Sidebar */}
          <div className="xl:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6  dark:border-slate-700 h-full flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                Today&apos;s Appointments
              </h3>

              <div className="space-y-4 flex-1 overflow-y-auto">
                {appointments.map((appointment, index) => (
                  <div key={appointment.id} className={`pl-4 py-5 ${index < appointments.length - 1 ? 'border-b' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {appointment.time}
                          </span>
                          <span className="text-xs" style={{ color: '#8E8DA1' }}>
                            {appointment.period}
                          </span>
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                          {appointment.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {appointment.lead} <span className={appointment.personColor}>{appointment.person}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
           
            </div>
          </div>
        </div>
      </div>

      {/* Create Appointment Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl transform transition-transform">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Create Appointment</h2>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Icon name="x" className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Form */}
              <div className="flex-1 overflow-y-auto p-6">
                <form className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title*
                    </label>
                    <input
                      type="text"
                      placeholder="Meeting with client"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category*
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                      <option value="">Select category</option>
                      <option value="meeting">Meeting</option>
                      <option value="conference">Conference</option>
                      <option value="seminar">Seminar</option>
                      <option value="workshop">Workshop</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date*
                    </label>
                    
                    {/* Mini Calendar Widget */}
                    <div className="border-2 border-blue-400 rounded-lg p-4 bg-gray-50">
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-4">
                        <button className="p-1 hover:bg-gray-200 rounded">
                          <Icon name="chevron-left" className="w-4 h-4 text-gray-600" />
                        </button>
                        <h3 className="text-sm font-semibold text-gray-900">September 2025</h3>
                        <button className="p-1 hover:bg-gray-200 rounded">
                          <Icon name="chevron-right" className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      
                      {/* Calendar Days Header */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                          <div key={index} className="text-center text-xs font-medium text-gray-500 py-1">
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      {/* Calendar Days */}
                      <div className="grid grid-cols-7 gap-1">
                        {[24, 25, 26, 27, 28, 29, 30].map((date, index) => (
                          <button
                            key={index}
                            className={`text-center text-sm py-2 rounded-full hover:bg-gray-200 transition-colors ${
                              date === 25 ? 'bg-black text-white' : 'text-gray-700'
                            }`}
                          >
                            {date}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time*
                    </label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location*
                    </label>
                    <input
                      type="text"
                      placeholder="Conference Room, Zoom Etc."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description*
                    </label>
                    <textarea
                      rows={4}
                      placeholder="More about appointment"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                    />
                  </div>
                </form>
              </div>

              {/* Footer */}
              <div className="p-6 border-t">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Save Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;