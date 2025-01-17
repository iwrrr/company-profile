import React from "react";

import loginIllustration2 from "../assets/login_illustration_2.svg";
import person1 from "../assets/person_1.jpeg";

import company1 from "../assets/company_1.png";
import company2 from "../assets/company_2.png";
import company3 from "../assets/company_3.png";
import company4 from "../assets/company_4.png";
import company5 from "../assets/company_5.png";
import company6 from "../assets/company_6.png";
import company7 from "../assets/company_7.png";

import icArrowRight from "../assets/ic_arrow_right.svg";

const Products = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-4xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={loginIllustration2} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutral-grey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutral-grey mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Company stats */}
      <div className="px-4 lg:px-14 max-w-screen-4xl mx-auto bg-neutral-silver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img
              src={person1}
              alt=""
              className="aspect-square object-cover object-top rounded-lg"
            />
          </div>

          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutral-grey mb-8 leading-7">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h5 className="text-brand-primary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base text-neutral-grey mb-4">
                British Dragon Boat Racing Association
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img src={company1} alt="" />
                  <img src={company2} alt="" />
                  <img src={company3} alt="" />
                  <img src={company4} alt="" />
                  <img src={company5} alt="" />
                  <img src={company6} alt="" />
                  <img src={company7} alt="" />
                  <div className="flex items-center">
                    <a
                      href="/"
                      className="text-brand-primary hover:text-neutral-grey"
                    >
                      Meet all customers
                    </a>
                    <img
                      src={icArrowRight}
                      alt=""
                      className="inline-block ml-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
