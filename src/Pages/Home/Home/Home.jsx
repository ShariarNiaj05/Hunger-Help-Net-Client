import TestTable from "../../ManageMyFoods/TestTable";
import Banner from "../Banner/Banner";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import HowWeWork from "../HowWeWork/HowWeWork";
import HowYouCanHelp from "../HowYouCanHelp/HowYouCanHelp";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedFood></FeaturedFood>
      <WhyChooseUs></WhyChooseUs>
      <HowWeWork></HowWeWork>
      <HowYouCanHelp></HowYouCanHelp>
      {/* <TestTable></TestTable> */}
    </div>
  );
};

export default Home;
