"use client";

interface TicketStatsCardsProps {
  totalTickets: number;
  pendingTickets: number;
  openTickets: number;
  closedTickets: number;
}

const TicketStatsCards = ({ 
  totalTickets, 
  pendingTickets, 
  openTickets, 
  closedTickets 
}: TicketStatsCardsProps) => {
  const stats = [
    {
      title: "Total Tickets",
      value: totalTickets,
      color: "text-white",
      bgColor: "bg-blue-500",
      cardBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      borderColor: "border-blue-400",
    },
    {
      title: "Pending Tickets", 
      value: pendingTickets,
      color: "text-white",
      bgColor: "bg-yellow-500",
      cardBg: "bg-gradient-to-br from-yellow-500 to-orange-500",
      borderColor: "border-yellow-400",
    },
    {
      title: "Open Tickets",
      value: openTickets,
      color: "text-white", 
      bgColor: "bg-green-500",
      cardBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      borderColor: "border-green-400",
    },
    {
      title: "Closed Tickets",
      value: closedTickets,
      color: "text-white",
      bgColor: "bg-gray-500",
      cardBg: "bg-gradient-to-br from-gray-500 to-gray-600",
      borderColor: "border-gray-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.cardBg} rounded-lg border-l-4 ${stat.borderColor} p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-white/80 mb-1 truncate">
                {stat.title}
              </p>
              <p className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
            <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex-shrink-0 ml-2`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketStatsCards;
