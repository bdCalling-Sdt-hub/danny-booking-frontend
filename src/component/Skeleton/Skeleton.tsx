const Skeleton = () => {
  return (
    <>
      {Array.from({ length: 7 }, (_, index) => (
        <div
          key={index}
          className="flex items-center justify-around my-1 px-2 py-[14px] border border-gray-300 rounded-lg"
        >
          <div className="w-20 h-4 bg-gray-300  animate-pulse"></div>
          <div className="flex gap-x-2 items-center">
            <div className="w-20 h-4 bg-gray-300  animate-pulse"></div>
            <div className="w-6 h-4 bg-gray-300  animate-pulse"></div>
            <div className="w-20 h-4 bg-gray-300  animate-pulse"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skeleton;
