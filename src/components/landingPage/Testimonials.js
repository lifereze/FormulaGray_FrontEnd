import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaUser } from "react-icons/fa";
function Testimonials() {
  return (
    <div>
      <div className="la">
        <h2>Testimonials</h2>
        <p>What our Clients say</p>
      </div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2500}
        showThumbs={false}
      >
        <div className="cc">
          <div className="w-full  flex flex-col items-center ">
            <div className=" w-40 h-40">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="d,d,,"
                className=" rounded-full w-40 h-40"
              />
            </div>
          </div>
          <div className="text-lg font-semibold text-white ">Ngozi Okereke</div>
          <div className=" text-[skyblue] ">UCW MBA Student</div>

          <div className="tt">
            Formula Gray helped me apply and all I did was supply some
            documents. My visa was approved after 3 months of application and
            right now I am in UCW.
          </div>
        </div>

        <div className="cc">
          <div className="w-full  flex flex-col items-center ">
            <div className=" w-40 h-40">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="d,d,,"
                className=" rounded-full w-40 h-40"
              />
            </div>
          </div>
          <div className="text-lg font-semibold text-white ">Mrs Amasi </div>
          <div className=" text-[skyblue] ">
            University of Canada West MBA Student
          </div>

          <div className="tt">
            I wanted to travel with my daughter and FG helped me with both my
            visa application and that of my daughter. I left for Canada in
            January 2022.They walked me through every step, and I was delighted
            when the immigration requested my passport.Now I am settling in
            Canada and started my studies with University of Canada West and my
            Daughter is enrolled into a High school in Vancouver.
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonials;
