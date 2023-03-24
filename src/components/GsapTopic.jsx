import React, { useEffect, useLayoutEffect } from "react";
import imgOne from "../assets/img/png/data-Service-img.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GsapTopic = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });
    // WITHOUT SCRUB AND SCROLLTRIGGER
    let animate = gsap.timeline({});
    animate
      .from(".heading", {
        xPercent: -50,
        duration: 1,
        ease: "bounce",
      })
      .from(".para", {
        duration: 1,
        xPercent: 230,
        ease: "back",
      })
      .from(".icon_img", {
        rotate: "360deg",
      });
    // .from(".name", {
    //   yPercent: -100,
    //   stagger: 0.5,
    //   duration: 1,
    //   repeat: -1,
    //   yoyo: true,
    // });
    let nametext = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",
        // start: "top top",
        // end: "bottom 80%",
        pin: true,
        // markers: true,
      },
    });
    nametext.from(".name", {
      yPercent: -100,
      stagger: 0.5,
      duration: 1,
      // repeat: -1,
      // yoyo: true,
    });
  }, []);

  useEffect(() => {
    gsap.to(".bg_img", {
      duration: 10,
      backgroundPosition: "100% 0%",
      // ease: "power2.out",
      // ease: "bounce",
      // ease: "back",
      ease: "none",
      yoyo: true,
      repeat: -1,
    });
  }, []);
  return (
    <>
      <div className="bg-info overflow-hidden">
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
            <div className="col-6 text-center pt-5">
              <img className="icon_img" src={imgOne} alt="data-Service-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="min-vh-100 bg-success d-flex justify-content-center align-items-center parent">
        <p className="text-white fs-1 fw-semibold text-center name">M</p>
        <p className="text-white fs-1 fw-semibold text-center name">Y</p>
        <p className="text-white fs-1 fw-semibold text-center name ps-3">N</p>
        <p className="text-white fs-1 fw-semibold text-center name">A</p>
        <p className="text-white fs-1 fw-semibold text-center name">M</p>
        <p className="text-white fs-1 fw-semibold text-center name">E</p>
        <p className="text-white fs-1 fw-semibold text-center name ps-3">I</p>
        <p className="text-white fs-1 fw-semibold text-center name">S</p>
        <p className="text-white fs-1 fw-semibold text-center name ps-3">A</p>
        <p className="text-white fs-1 fw-semibold text-center name">N</p>
        <p className="text-white fs-1 fw-semibold text-center name">J</p>
        <p className="text-white fs-1 fw-semibold text-center name">A</p>
        <p className="text-white fs-1 fw-semibold text-center name">L</p>
        <p className="text-white fs-1 fw-semibold text-center name">I</p>
      </div>
      <div className="bg_img min-vh-100 d-flex justify-content-center align-items-center">
        <h2 className="text-white">This Is A Beautiful Nature</h2>
      </div>
    </>
  );
};

export default GsapTopic;
