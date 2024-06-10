import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const Infobox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text} </p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-sung text-canter neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold"> SKriLLCii. </span>
      <br />
      An engineer based in Tokyo, Japan.
    </h1>
  ),
  2: (
    <Infobox
      text="I have been working on AI, Cloud & Robotics"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <Infobox
      text="I led multiple projects to success over the years"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <Infobox
      text="Need a project to be done or looking for an engineer?"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
