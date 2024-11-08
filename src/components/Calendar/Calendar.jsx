import React from "react";
import EduProChildrenCard from "../EduProChildrenCard/EduProChildrenCard";

const Calendar = () => {
  // Get current date information
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = currentDate.getDate();

  // Get the first day of the month and total days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get last days of previous month
  const lastDayOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Calendar constants
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
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

  // Generate calendar days
  const generateDays = () => {
    const days = [];

    // Add days from previous month
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        day: lastDayOfPrevMonth - i,
        isCurrentMonth: false,
      });
    }

    // Add days from current month
    for (let i = 1; i <= lastDayOfMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        isToday: i === today,
      });
    }

    // Add days from next month
    const remainingDays = 42 - days.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
      });
    }

    return days;
  };

  return (
    <EduProChildrenCard title={"Calendar"}>
      <div className="grid grid-cols-7 gap-1 p-1">
        {/* Day headers */}
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-sm font-bold mb-2">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {generateDays().map((dayObj, index) => (
          <div
            key={index}
            className={`
              text-center py-1 text-sm h-7 w-7
              ${
                dayObj.isToday ? "bg-[#256F94] !text-white rounded-[200px]" : ""
              }
              ${
                !dayObj.isCurrentMonth ? "text-[#00111A4D]" : "text-[#00111A91]"
              }
              ${dayObj.isToday ? "font-semibold" : ""}
            `}
          >
            {dayObj.day}
          </div>
        ))}
      </div>
    </EduProChildrenCard>
  );
};

export default Calendar;
