import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
                src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                alt="d,d,,"
                className=" rounded-full w-40 h-40"
              />
            </div>
          </div>
          <div className="text-lg font-semibold text-white ">Mr. Owori</div>

          <div className="tt">
            I really enjoyed the services I got from here.I will definitely come
            back.
          </div>
        </div>

        <div className="cc">
          <div className="w-full  flex flex-col items-center ">
            <div className=" w-40 h-40">
              <img
                src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                alt="d,d,,"
                className=" rounded-full w-40 h-40"
              />
            </div>
          </div>
          <div className="text-lg font-semibold text-white ">Mr. Owori</div>

          <div className="tt">
            I really enjoyed the services I got from here.I will definitely come
            back.
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonials;
