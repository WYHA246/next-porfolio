'use client'
import Title from "@/app/utlis/Title";
import { LiaDownloadSolid } from "react-icons/lia";
import ProfileImg from '../../../public/image/profile.png'
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import { BsEye} from "react-icons/bs";

const data = [
  {
    id: 1,
    number: 3,
    name: "Years Experience",
  },
  {
    id: 2,
    number: 5,
    name: "Happy Clients",
  },
  {
    id: 3,
    number: 10,
    name: "Project Done",
  },
  {
    id: 4,
    number: 2,
    name: "Rewards",
  },
];

const About = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <div className="my-10 min-h-screen">
      <Title title="Know Me More" />
      {/* Information  */}
      <div className="flex flex-wrap mt-20">
        {/* About me info */}
        <div className="lg:w-2/3">
          <div className="mx-10 md:mx-20">
            <h1 className="text-2xl text-slate-800 font-bold">
              I'm
              <span className="text-2xl text-violet-700 ms-3">
                Waiyan Htet Aung
              </span>
              , a Cloud Administrator
            </h1>
            <br />
            <p data-aos="fade-up" className="text-slate-500 leading-loose text-justify font-semibold">
            I have a genuine passion for technology and innovation. Despite with a background in medical field, I've always been fascinated by the vast possibilities of technology. 
            </p>
            <br />
            <div className="flex flex-wrap flex-col-reverse md:flex-row-reverse"> 
              <div className="lg:w-1/2 mt-3 md:mt-0">
                <p data-aos="fade-up" className="text-slate-500 leading-loose text-justify md:ms-3">
                However, the Covid-19 pandemic provided a unique opportunity for reflection and exploration, leading me to delve into new areas such as technology and science. With a profound passion for science and technology, I have transitioned my career towards becoming an IT technician, driven by the dynamic landscape of cloud technology. Recognizing the burgeoning trend in cloud computing, I have dedicated myself to becoming a specialist in this field. My journey began with a solid foundation in Amazon Web Services (AWS), where I have diligently pursued and obtained various certifications offered by AWS. 
              </p>
              </div>
              <div data-aos="flip-up" className="lg:w-1/2">
                <Image src={ProfileImg} width={400} height={400} alt="profile_img" />
              </div>
            </div>
          </div>
          <div className="mx-10 md:mx-20">
            <p data-aos="fade-up" className="text-slate-500 leading-loose text-justify md:ms-3"> Moving forward, I am enthusiastic about broadening my expertise to encompass other leading cloud platforms such as Azure and Google Cloud, ensuring a comprehensive understanding of diverse cloud environments. My commitment to staying at the forefront of technological advancements underscores my dedication to delivering innovative solutions in the realm of cloud computing.</p>
          </div>
        </div>
        {/* Contact me info */}
        <div data-aos="slide-left" className="w-full lg:w-1/3 text-lg ">
          <div className="mx-10 md:mx-20 lg:mx-0 mt-5 lg:mt-0">
            <div>
              <div className="relative">
                <div className="mb-2 py-3">
                  
                  <span className="font-bold text-slate-800"> Name: </span>
                  <span className="ms-3 text-slate-500"> Waiyan Htet Aung </span>
                </div>
                <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
              </div>
              <div className="relative">
                <div className="mb-2 py-3">
                  <span className="font-bold text-slate-800">
                    Email:
                  </span>
                  <a
                    href="mailto:waiyanhtetaung644@gmail.com"
                    className="ms-3 text-violet-700"
                  >
                    waiyanhtetaung644@gmail.com
                  </a>
                </div>
                <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
              </div>
              <div className="relative">
                <div className="mb-2 py-3">
                  
                  <span className="font-bold text-slate-800"> Age: </span>
                  <span className="ms-3 text-slate-500"> 25 </span>
                </div>
                <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
              </div>
              <div className="relative">
                <div className="mb-2 py-3">
                  
                  <span className="font-bold text-slate-800"> From: </span>
                  <span className="ms-3 text-slate-500"> Block 653 JLN TENAGA Singapore </span>
                  <span className="ms-3 text-slate-500 block"> #04-60, S-410653 </span>
                </div>
                <span className="absolute bottom-0 left-0 bg-slate-500 w-3/4 h-[2px]"></span>
              </div>
            </div>
          </div>
          {/* Download button  */}
          <div className="mx-10 flex justify-start gap-2">
            <div className="text-center mt-10">
              <a
                href="/pdf/minthetpaing_cv.pdf"
                download="MinThetPaingCV.pdf"
                className="py-3 px-4 bg-violet-700 text-white transition-all ease-out delay-100  rounded-3xl shadow-md shadow-violet-500 hover:bg-red-400"
              >
                Download CV <LiaDownloadSolid className="inline" />
              </a>
            </div>
            <div className="text-center mt-10">
              <a
                href="/pdf/minthetpaing_cv.pdf"
                target="_blank"
                title="MinThetPaingCV"
                className="py-3 px-4 bg-violet-700 text-white transition-all ease-out delay-100  rounded-3xl shadow-md shadow-violet-500 hover:bg-red-400"
              >
                View CV <BsEye className="inline" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* skills */}
      <div className="my-10 mx-5 md:mx-20">
        <Skills />
      </div>
      {/* status section  */}
      <div className="flex flex-wrap mt-20 md:mx-20 md:mb-10 lg:mb-0">
        {data.map((item) => (
          <div data-aos="fade-up" className="w-1/2 lg:w-1/4" key={item.id}>
            <div className="border-r-2 border-r-slate-300 px-4  mx-5 mt-3 md:mt-0">
              <div className="flex text-slate-800  font-bold items-center justify-center mb-5">
                <h1 className="text-6xl">
                  <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    {counterOn && <CountUp 
                      start={0} 
                      end={item.number}
                      duration={2} 
                      delay={0} 
                    /> }
                  </ScrollTrigger> 
                </h1>
                <div>  
                  <span className="text-5xl"> + </span>
                </div>
              </div>
              <div>
                <h1 className="text-slate-500 text-center"> {item.name} </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Experience  */}
      <div className="my-20 mx-5 md:mx-20">
        <Experience />
      </div>
    </div>
  );
};

export default About;



