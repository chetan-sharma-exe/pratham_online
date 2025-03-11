import Grid2Element from "./Grid2Element";

const Grid2 = () => {
  return (
    <div className="w-full flex justify-center bg-[url(/banner-bg.jpg)] bg-fixed mt-30">
      <div className="w-full bg-[rgba(59,60,62,0.9)] py-15 flex flex-col items-center">
        <div className="w-full pl-20">
          <p className="text-2xl font-bold text-white">WHY PRATHAM ?</p>
          <div className="h-1 bg-[#f8a120] w-23 mt-2"></div>
        </div>
        <div class="flex flex-col sm:grid grid-cols-3 w-max">
          <div class="p-4 text-center">
            <Grid2Element
              icon="../../../grid2_icons/cap.png"
              title="High Density of Top Rankers"
              p="With over 10,000 final selections in 200+ colleges across India, PRATHAM Test Prep has emerged as one of the student's favorite test preparation brand in the past 15 years."
            />
          </div>
          <div class="p-4 text-center">
            <Grid2Element
              icon="../../../grid2_icons/comprehensive-preparation.png"
              title="Comprehensive Preparation"
              p="Compact and comprehensive classroom trainings are provided to students with a synoptic approach of completing adequate class hours."
            />
          </div>
          <div class="p-4 text-center">
            <Grid2Element
              icon="../../../grid2_icons/elearning.png"
              title="E-Learning System"
              p="PRATHAM E-learning comprises of student Dashboard which is an amalgamation of E-Lectures, PDFs, Class Notes and Examination Details."
            />
          </div>
          <div class="p-4 text-center">
            <Grid2Element
              icon="../../../grid2_icons/comprehensivepreparation.png"
              title="Use of Mnemonics"
              p="Mnemonics serves as a memory aid to store lists or sequence of necessary facts and figures."
            />
          </div>
          <div class="p-4 text-center">
            <Grid2Element
              icon="../../../grid2_icons/lifetime.png"
              title="Lifetime Mentorship Program"
              p="Enrolling students with PRATHAM ensure an eternal bond that the student can leverage for life."
            />
          </div>
          <div class="p-4 text-center">
            <Grid2Element
              icon="../../../grid2_icons/time.png"
              title="Regular Mock Tests"
              p="The mock tests are real-time learning experiences that focus on student’s aptitude. The mock-tests are conducted so that the students don’t get jittery on the Exam Day."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid2;
