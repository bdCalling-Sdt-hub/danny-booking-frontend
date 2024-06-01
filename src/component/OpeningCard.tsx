/* eslint-disable @typescript-eslint/no-explicit-any */

const OpeningCard = ({ branchData }: any) => {
  const data = branchData?.length > 0 ? branchData[0] : {};

  return (
    <div className="bg-[#0B835C] text-white p-4 rounded">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to <span className="text-yellow-500">{data?.branch}</span>
      </h1>
      <p className="text-lg font-semibold mb-6">
        Discover our opening hours and reserve your table now.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data?.schedule?.map((dayData: any) => (
          <div
            className="flex items-center justify-around my-1 p-2 border border-gray-300 rounded-lg"
            key={dayData.day}
          >
            <h5 className="text-lg">{dayData.day}</h5>
            {dayData.isClosed ? (
              <p className="text-lg text-yellow-400">Closed</p>
            ) : (
              <div className="flex gap-x-4 text-lg">
                <p>{dayData.openTime}</p>
                <p>-</p>
                <p>{dayData.closeTime}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpeningCard;
