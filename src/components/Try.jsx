import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Try = () => {
  gsap.registerPlugin(ScrollTrigger);
  // ScrollTrigger.defaults({
  //   toggleActions: "play none none reverse",
  // });
  useLayoutEffect(() => {
    let value = gsap.timeline({
      scrollTrigger: {
        trigger: ".text_parent",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    });
    value.fromTo(
      ".para_text",
      {
        scale: 1,
        duration: 1,
      },
      {
        scale: 2,
      }
    );
  });
  return (
    <>
      <div className="bg-primary min-vh-100 text_parent d-flex justify-content-center align-items-center">
        <p className="para_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          incidunt cupiditate odit autem expedita quo omnis, natus error? Iste
          esse alias illum? Provident, nam delectus! Sint fugiat eveniet
          voluptas deleniti.
        </p>
      </div>
    </>
  );
};

export default Try;
