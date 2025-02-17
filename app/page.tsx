import Image from "next/image";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VideoPlayer from "./components/VideoPlayer";

export default function Home() {
  return (
    <>
      <div className="perent flex flex-col basis-10/12 mt-32 space-y-14">
        {/* welcome */}
        <div
          className="flex w-10/12 h-auto bg-white rounded-3xl m-auto p-14 justify-between "
          // sx={{
          //   backgroundImage: "url('/images/Artboard1.png')",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",

          // }}
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-semibold  mb-4">
              Oracle Project
              <br /> Development Consultants
            </h1>
            <p className="text-base/5 font-normal mb-4">
              Pioneering Commercial & Contract Management Consultancy. We take
              <br /> immense pride in being your trusted partner for top-notch
              quantity surveying, <br /> commercial and contract management
              consultancy services.
            </p>
            <div className="w-80 h-20 flex p-4 rounded-3xl backdrop-filter backdrop-blur-lg bg-gradient-to-r from-[#0072AA] to-[#002E44] ">
              <Image
                className="w-18 h-auto"
                src={require(".//assets/logo4.png")}
                alt="logo4"
              />
              <Image
                className="w-18 h-auto"
                src={require(".//assets/logo2.png")}
                alt="logo2"
              />
              <Image
                className="w-18 h-auto"
                src={require(".//assets/logo1.png")}
                alt="logo1"
              />
              <Image
                className="w-18 h-auto"
                src={require(".//assets/logo3.png")}
                alt="logo3"
              />
            </div>
          </div>
          <div>
            <Image
              className="w-96"
              src={require("../public/images/Artboard1.png")}
              alt="Artboard1"
              // width={500}
              // height={500}
            />
          </div>
        </div>
        {/* about */}
        <div className="flex flex-col w-10/12 h-auto bg-white rounded-3xl m-auto p-14 align-center justify-center">
          <div className="flex flex-col align-center justify-center">
            <h4 className="text-lg text-gray-600 mb-1  text-center">
              About Us
            </h4>
            <h1 className="text-5xl font-semibold mb-4 text-center">
              This is us, This is our story
            </h1>
            <p className="text-base/5 font-normal mb-8  px-64 text-center">
              Our journey began with a vision to redefine the landscape of
              commercial and contract management consultancy services in the
              construction industry. We set out to create a company that not
              only delivers exceptional results.
            </p>
          </div>
          <div>
            {/* <Image
              className="w-full rounded-3xl"
              src={require("../public/images/video.png")}
              alt="Artboard2"
            /> */}
            <VideoPlayer
              url="https://youtu.be/nNecHSXc7dE"
              thumbnail={"../public/images/video.png"}
            />
          </div>
        </div>

        {/* services */}
        <div className="flex flex-col w-10/12 h-auto bg-white rounded-3xl m-auto p-14 align-center justify-center">
          <div className="flex flex-col align-center justify-center">
            <h4 className="text-lg text-gray-600 mb-1  text-center">
              Our Services
            </h4>
            <h1 className="text-5xl font-semibold mb-4 text-center">
              Our Expertise, Your Vision
            </h1>
            <p className="text-base/5 font-normal mb-8  px-64 text-center">
              By combining our expertise with your vision, we are confident in
              creating remarkable projects that stand the test of time.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#F4F4F5] rounded-xl p-6">
              <h1 className="text-5xl font-bold text-right">01</h1>
              <h2 className="text-3xl font-bold mb-2">
                Quantity Surveying
                <br /> Cost Management
              </h2>
              <p>
                We take pride in delivering expert construction cost management,
                guiding your project from concept to completion with precise
                budgeting, estimating, and cost control.
              </p>
            </div>
            <div className="bg-[#F4F4F5] rounded-xl p-6">
              <h1 className="text-5xl font-bold text-right">02</h1>
              <h2 className="text-3xl font-bold mb-2">
                Contract
                <br /> Management
              </h2>
              <p>
                We take pride in delivering expert construction cost management,
                guiding your project from concept to completion with precise
                budgeting, estimating, and cost control.
              </p>
            </div>
            <div className="bg-[#F4F4F5] rounded-xl p-6">
              <h1 className="text-5xl font-bold text-right">03</h1>
              <h2 className="text-3xl font-bold mb-2">
                Claims
                <br /> Consultancy​
              </h2>
              <p>
                We take pride in delivering expert construction cost management,
                guiding your project from concept to completion with precise
                budgeting, estimating, and cost control.
              </p>
            </div>
            <div className="bg-[#F4F4F5] rounded-xl p-6">
              <h1 className="text-5xl font-bold text-right">04</h1>
              <h2 className="text-3xl font-bold mb-2">
                Dispute
                <br /> Resolutions
              </h2>
              <p>
                We take pride in delivering expert construction cost management,
                guiding your project from concept to completion with precise
                budgeting, estimating, and cost control.
              </p>
            </div>
            <div className="bg-[#F4F4F5] rounded-xl p-6">
              <h1 className="text-5xl font-bold text-right">05</h1>
              <h2 className="text-3xl font-bold mb-2">
                Specialist
                <br /> Services
              </h2>
              <p>
                We take pride in delivering expert construction cost management,
                guiding your project from concept to completion with precise
                budgeting, estimating, and cost control.
              </p>
            </div>
            <div className="bg-[#F4F4F5] rounded-xl p-6">
              <h1 className="text-5xl font-bold text-right">06</h1>
              <h2 className="text-3xl font-bold mb-2">
                Services to
                <br /> Contractors
              </h2>
              <p>
                We take pride in delivering expert construction cost management,
                guiding your project from concept to completion with precise
                budgeting, estimating, and cost control.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button
              endIcon={<ArrowForwardIosIcon />}
              sx={{ color: "black", textTransform: "capitalize" }}
            >
              <h2 className="text-gray-950 text-transform: capitalize">
                More about our Services
              </h2>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
