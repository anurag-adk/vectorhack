import React from "react";
import schedule from "../../data/schedule.json";

const HeaderRow = () => (
  <div className="grid grid-cols-[110px_150px_1fr] items-center bg-[#2647d6] px-4 py-2 text-sm font-semibold text-white md:grid-cols-[140px_200px_1fr]">
    <span>Date</span>
    <span>Time</span>
    <span>Activity</span>
  </div>
);

const DayCard = ({ day }) => (
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
    <HeaderRow />
    <div className="divide-y divide-white/5">
      {day.items.map((item, idx) => (
        <div
          key={`${day.date}-${idx}`}
          className="grid grid-cols-[110px_150px_1fr] items-start px-4 py-3 text-sm md:grid-cols-[140px_200px_1fr]"
        >
          <div className={`font-semibold text-[#5091d1] md:text-base ${idx === 0 ? "text-[#5091d1]" : "text-transparent"}`}>
            {day.label}
          </div>
          <div className="text-[#5091d1] md:text-base">{item.time}</div>
          <div className="text-[#5091d1] md:text-base">{item.activity}</div>
        </div>
      ))}
    </div>
  </div>
);

function Schedule() {
  return (
    <section id="schedule" className="px-4 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="space-y-2 text-left">
        <h2 className="mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">
          Event Schedule
        </h2>
        </div>

        <div className="space-y-6">
          {schedule.map((day) => (
            <DayCard key={day.date} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
