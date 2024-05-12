const FooterCard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between py-4 flex-wrap">
      <div className="flex flex-col items-center lg:items-start gap-y-2 lg:gap-y-0 lg:flex-row lg:gap-x-4 p-4 bg-black rounded mb-4 lg:mb-0">
        <h1 className="text-[#F59533] font-bold text-5xl">01</h1>
        <div className="text-white">
          <p>Welcome our restaurant</p>
          <h1 className="text-3xl font-bold">Dhaka</h1>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start gap-y-2 lg:gap-y-0 lg:flex-row lg:gap-x-4 p-4 bg-black rounded mb-4 lg:mb-0">
        <h1 className="text-[#F59533] font-bold text-5xl">02</h1>
        <div className="text-white">
          <p>Call</p>
          <h1 className="text-3xl font-bold">+02- 4689011</h1>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start gap-y-2 lg:gap-y-0 lg:flex-row lg:gap-x-4 p-4 bg-black rounded">
        <h1 className="text-[#F59533] font-bold text-5xl">03</h1>
        <div className="text-white">
          <p>Write</p>
          <h1 className="text-3xl font-bold">admin.com</h1>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
