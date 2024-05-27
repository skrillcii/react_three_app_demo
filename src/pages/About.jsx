import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I am{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          SKriLLCii
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Machine Learning Engineer based in Tokyo, specializing in AI, Cloud
          and Robotics.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I am an engineer who previously worked as a research scientist at
            IBM Research Tokyo tackling fundamental challenges of machine
            learning (ML) & deep learning (DL) in various fields, including but
            not limited to image recognition, audio analysis, anomaly detection,
            domain adaptations and robotics.
          </p>
          <p>
            In parallel, I also have over 3 years of experience as a data
            scientist, setting up a full pipeline of ML/DL frameworks from data
            collection, database management, data pre-processing, modeling
            management, mass batch experiments on cloud computing to deliver
            insights and propose solutions to business topics.
          </p>
          <p>
            With the above-mentioned research and data science experiences, I
            took on an exciting adventure in joining ExaWizards, one of the top
            startups founded in Tokyo which was later listed in December 2021. I
            joined as a machine learning engineer, to expand my horizons, to
            further explore the technology stack as a whole.
          </p>
          <p>
            I am currently working on product development with ML/DL backend on
            embedded systems, integrated with cloud microservices in a
            full-stack software engineer-orientated workflow to architect and
            explore potential solutions to be deployed into production
            environments.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.data}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      className="text-black-500/50 font-normal pl-1 text-sm"
                      key={`experience-point-${index}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
