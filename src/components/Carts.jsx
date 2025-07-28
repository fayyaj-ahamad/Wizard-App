const Carts = ({ imgs, heading }) => {
  return (
    <div className="card-item relative border-2 border-black rounded-2xl flex flex-col lg:flex-row shadow-[0_8px_0_black] w-full max-w-[530px] mx-auto lg:h-[280px] bg-white">

      {/* Text Section */}
      <div className="text p-4 sm:p-6 lg:p-8 flex-1">
        <h1 className="bg-bgcolor inline-block text-xl sm:text-2xl md:text-3xl lg:text-4xl p-2 sm:p-3 font-semibold">
          {heading}
        </h1>
      </div>

      {/* Icon */}
      <div className="icon absolute left-3 bottom-3 cursor-pointer w-10 h-10 bg-black rounded-full flex justify-center items-center">
        <i className="ri-arrow-right-up-line text-iconColor text-2xl md:text-3xl"></i>
      </div>

      {/* Learn More */}
      <div className="more absolute left-2 bottom-4">
        <p className="text-black text-sm md:text-base pl-12 font-bold">Learn More</p>
      </div>

      {/* Image Section */}
      <div className="card-img w-full lg:w-[250px] h-[180px] sm:h-[200px] lg:h-[250px] mx-auto mb-4 lg:mb-0">
        <img src={imgs} alt="service" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Carts;
