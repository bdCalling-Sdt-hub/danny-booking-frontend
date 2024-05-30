const data = [
  { day: "Saturday", openTime: "18:10", closeTime: "18:20" },
  { day: "Sunday", openTime: "09:00", closeTime: "17:00" },
  { day: "Monday", openTime: "08:30", closeTime: "18:00" },
  { day: "Tuesday", openTime: "09:00", closeTime: "17:00" },
  { day: "Wednesday", openTime: "08:30", closeTime: "18:00" },
  { day: "Thursday", openTime: "09:00", closeTime: "17:00" },
  { day: "Friday", openTime: "08:30", closeTime: "18:00" },
];

const OpeningCard = () => {
  return (
    <div className="bg-[#0B835C] text-white p-4 rounded">
      <h1 className="text-3xl font-bold mb-4">Welcome to Udum!</h1>
      <p className="text-lg font-semibold mb-6">
        Discover our opening hours and reserve your table now.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data?.map((dayData) => (
          <div
            className="flex items-center justify-around my-1 p-2 border border-gray-300 rounded-lg"
            key={dayData.day}
          >
            <h5 className="text-lg">{dayData.day}</h5>
            <div className="flex gap-x-4 text-lg">
              <p>{dayData.openTime}</p>
              <p>-</p>
              <p>{dayData.closeTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpeningCard;
