import React, { useLayoutEffect } from "react";
import imgOne from "../assets/img/png/data-Service-img.png";
import { gsap } from "gsap";
const GsapTopic = () => {
  useLayoutEffect(() => {
    let animate = gsap.timeline({
      markers: true,
    });
    animate
      // .fromTo(
      //   ".heading",
      //   {
      //     xPercent: -100,
      //   },
      //   {
      //     xPercent: 0,
      //     ease: "bounce",
      //     delay: 2,
      //   },
      //   "=-.5"
      // )
      .from(".heading", {
        xPercent: -50,
        duration: 5,
        ease: "bounce",
      })
      .fromTo(
        ".para",
        {
          xPercent: 220,
        },
        {
          xPercent: 0,
          ease: "elastic",
        }
      )
      .from(".icon_img", {
        rotate: "360deg",
      });
  }, []);
  return (
    <>
      <div className="bg-info parent overflow-hidden">
        <div className="container d-flex align-items-center min-vh-100">
          <div className="row">
            <div className="col-6">
              <h2 className="text-white heading">
                This is my First Gsap topics
              </h2>
              <p className="text-white fs-5 para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur incidunt vel, quod officia corporis odio adipisci
                labore, architecto deleniti, animi quisquam ab aperiam saepe
                ducimus quis assumenda iste? At earum dolorum harum veritatis
                rerum, est aspernatur necessitatibus! A omnis iusto consequuntur
                porro odio eaque numquam, rerum nulla expedita dicta cumque fuga
                velit possimus qui nam laboriosam accusamus neque? Ipsum odio ad
                delectus sapiente fugiat quia, officiis in aspernatur fugit
                voluptates adipisci ratione commodi iusto. Sequi nihil fugit
                excepturi modi, maiores earum deleniti quibusdam libero expedita
                praesentium a nam voluptatum reiciendis sint eum illum omnis
                beatae tempora odit eaque ratione. Culpa!
              </p>
            </div>
            <div className="col-6 text-center">
              <img className="icon_img" src={imgOne} alt="data-Service-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="min-vh-100 bg-success"></div>
    </>
  );
};

export default GsapTopic;
