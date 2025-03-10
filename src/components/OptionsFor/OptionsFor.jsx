const OptionsFor = () => {
  return (
    <div className="w-60 sm:w-290 text-[#081054] mt-20 bg-white">
      <p className="text-2xl font-bold">OPTIONS FOR</p>
      <div className="h-1 bg-[#f8a120] w-23 mt-2"></div>
      <div className="flex flex-col sm:grid sm:grid-cols-4">
        <div className="flex flex-col items-start">
          <div className="my-5">
            <p className="text-base font-bold">
              Class 10<sup>th</sup>
            </p>
          </div>
          <button className="bg-[#f8a120] shadow-lg mb-4 w-55 h-7 rounded-sm text-white cursor-pointer">
            STREAM SELECTION
          </button>
          <button className="bg-[#f8a120] shadow-lg mb-4 w-55 h-7 rounded-sm text-white cursor-pointer">
            CAREER SELECTION
          </button>
        </div>
        <div className="flex flex-col items-start">
          <div className="my-5">
            <p className="text-base font-bold">
              Class 12<sup>th</sup>
            </p>
          </div>
          <div className="flex gap-5">
            <button className="bg-[#f8a120] shadow-lg mb-4 w-25 h-7 rounded-sm text-white cursor-pointer">
              CUET
            </button>
            <button className="bg-[#f8a120] shadow-lg mb-4 w-25 h-7 rounded-sm text-white cursor-pointer">
              CLAT
            </button>
          </div>
          <div className="flex gap-5">
            <button className="bg-[#f8a120] shadow-lg mb-4 w-25 h-7 rounded-sm text-white cursor-pointer">
              IIM I IPM
            </button>
            <button className="bg-[#f8a120] shadow-lg mb-4 w-25 h-7 rounded-sm text-white cursor-pointer">
              AILET
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="my-5">
            <p className="text-base font-bold">Study Abroad</p>
          </div>
          <button className="bg-[#f8a120] shadow-lg mb-4 w-55 h-7 rounded-sm text-white cursor-pointer">
            SAT
          </button>
          <button className="bg-[#f8a120] shadow-lg mb-4 w-55 h-7 rounded-sm text-white cursor-pointer">
            APPLICATION GUIDANCE
          </button>
        </div>
        <div className="flex flex-col items-start">
          <div className="my-5">
            <p className="text-base font-bold">Up Skilling</p>
          </div>
          <button className="bg-[#f8a120] shadow-lg mb-4 w-55 h-7 rounded-sm text-white cursor-pointer">
            NCFM Derivatives
          </button>
          <button className="bg-[#f8a120] shadow-lg mb-4 w-55 h-7 rounded-sm text-white cursor-pointer">
            COUNSELING DIVISION
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionsFor;
