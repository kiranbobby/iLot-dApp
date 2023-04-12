import LandView from "./LandView/LandView";
import AppFeatures from "./AppFeatures/AppFeatures";
import FeaturedProperty from "./FeaturesProperty/FeatureProperty";
import Inspotlight from "./Inspotlight/Inspotlight";
import Rating from "./Rating/Rating";
import f3 from "../../Assests/Images/f3.png";
import f2 from "../../Assests/Images/f2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faClock,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <LandView />

        <div className="flex flex-col my-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-5 text-6xl font-bold text-darker">
              In Spotlight
            </h1>
            <h2 className="text-base font-medium text-gray-500">
              Find your best place to live with us.
            </h2>
          </div>
        </div>

        <Inspotlight />
        <div className="flex flex-col my-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-5 text-6xl font-bold text-darker">
              Discover Our Featured Properties
            </h1>
            <h2 className="text-base font-medium text-gray-500">
              Discover best deals for your future house
            </h2>
          </div>
        </div>
        <FeaturedProperty />

        <AppFeatures />

        <div className="static flex flex-row items-center justify-center my-20">
          <div className="relative flex w-9/12 mb-96 ">
            <div className="absolute top-0 z-0 w-6/12 drop-shadow-3xl right-[350px]">
              <img src={f3} alt="building" />
            </div>
            <div className="absolute z-20 w-6/12 right-[100px] drop-shadow-3xl top-20">
              <img src={f2} alt="building" />
            </div>
          </div>
          <div className="box-content p-5 w-[450px] h-fit">
            <div>
              <h2 className="text-lg font-normal text-primary">
                <span className="font-bold text-dark">About</span> Our Company
              </h2>
              <h1 className="my-6 text-2xl font-bold text-darker">
                We are Offering the Best Real Estate Deals
              </h1>
              <p className="my-2 text-sm text-gray-400">
                We have already sold more than 7,000 Houses and we are Still
                going at very good pace
              </p>
            </div>
            <div className="box-content flex flex-row justify-between my-10 text-xl text-white w-72">
              <p className="px-4 py-3 rounded-lg cursor-pointer bg-primary">
                <FontAwesomeIcon icon={faCalendarCheck} />
              </p>
              <div className="flex flex-row items-center px-4 py-3 rounded-lg cursor-pointer bg-primary">
                <FontAwesomeIcon icon={faClock} />
                <p className="ml-2 text-sm">24 H Consultant</p>
              </div>
              <p className="px-4 py-3 rounded-lg cursor-pointer bg-primary">
                <FontAwesomeIcon icon={faSuitcase} />
              </p>
            </div>
          </div>
        </div>

        <Rating />
      </div>
    </>
  );
};

export default Home;
