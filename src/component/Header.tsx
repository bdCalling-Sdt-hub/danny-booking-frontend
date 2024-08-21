import logo from "./../assets/logo.svg";
const Header = () => {
  return (
    <div className="bg-[#212629]  py-2 sticky top-0 z-10 ">
      <div className="container mx-auto flex justify-between items-center px-2 lg:px-0">
        <img src={logo} width={70} alt="" />
        <h1 className="text-[#fff] font-[600] text-xl">
          BOOK YOUR <span className="text-[#10B981]">TABLE</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
