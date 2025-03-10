import GridElement from "./GridElement";

const Grid1 = () => {
  return (
    <>
      <div class="flex flex-col sm:grid grid-cols-3 w-max">
        <div class="p-4 text-center border-r border-b border-gray-300">
          <GridElement
            icon="../../../grid1_icons/screen.png"
            title="2 Year Program"
            p1="600+ hours of training"
            p2="Interactive Online Learning portal"
            p3="100+ Mock Tests"
          />
        </div>
        <div class="p-4 text-center border-r border-b border-gray-300">
          <GridElement
            icon="../../../grid1_icons/capp.png"
            title="1 Year Program"
            p1="450+ hours of training"
            p2="Personalized Mentorship"
            p3="65+ recorded Concept Videos"
          />
        </div>
        <div class="p-4 text-center border-b border-gray-300">
          <GridElement
            icon="../../../grid1_icons/clock.png"
            title="Online Program"
            p1="Convenience and Flexibility"
            p2="Avoid commuting"
            p3="Personal Mentorship"
          />
        </div>
        <div class="p-4 text-center border-r border-b border-gray-300">
          <GridElement
            icon="../../../grid1_icons/crosshairs.png"
            title="Retaker Program"
            p1="1 on 1 Mentorship Program"
            p2="Mock Tests based on Latest pattern"
            p3="Special classes for DU, IPM and CLAT"
          />
        </div>
        <div class="p-4 text-center border-r border-b border-gray-300">
          <GridElement
            icon="../../../grid1_icons/book.png"
            title="Crash Course"
            p1="250 + hours of intensive Training"
            p2="200+ Tests to boost performance"
            p3="Current Affairs and Quizzes"
          />
        </div>
        <div class="p-4 text-center border-b border-gray-300">
          <GridElement
            icon="../../../grid1_icons/globe.png"
            title="International Education"
            p1="Coaching in SAT ®"
            p2="Class for English and Maths"
            p3="15 real time mock tests and result analysis"
          />
        </div>
        <div class="p-4 text-center border-r border-gray-300">
          <GridElement
            icon="../../../grid1_icons/keybord.png"
            title="Correspondence Course"
            p1="An E-learning system for students"
            p2="Provides class-room level preparation"
            p3="40+ video/audio lectures"
          />
        </div>
        <div class="p-4 text-center border-r border-gray-300">
          <GridElement
            icon="../../../grid1_icons/sield.png"
            title="NCFM Derivatives"
            p1="Skill based course for active trading"
            p2="Right knowledge + Competency"
            p3="For entry level professionals"
          />
        </div>
        <div class="p-4 text-center">
          <GridElement
            icon="../../../grid1_icons/division.png"
            title="Counseling Division"
            p1="For those confused about stream selection"
            p2="Stream Competency Test (IX-X)"
            p3="Career Competency Test (XI - XII)"
          />
        </div>
      </div>
    </>
  );
};

export default Grid1;
