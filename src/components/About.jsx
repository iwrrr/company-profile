import React from "react";

import loginIllustration1 from "../assets/login_illustration_1.svg";

import icMember from "../assets/ic_member.png";
import icEvent from "../assets/ic_event.png";
import icClubs from "../assets/ic_clubs.png";
import icPayment from "../assets/ic_payment.png";

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-4xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={loginIllustration1} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutral-grey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutral-grey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* Company stats */}
      <div className="bg-neutral-silver py-16">
        <div className="px-4 md:px-12 lg:px-14 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl text-neutral-grey font-semibold mb-4 md:w-2/3">
                Helping a local <br />
                <span className="text-brand-primary">
                  business reinvent itself
                </span>
              </h2>
              <p className="md:w-3/4 text-sm text-neutral-grey mb-8">
                We reached here with our hard work and dedication
              </p>
            </div>

            <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <img src={icMember} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutral-d-grey font-semibold">
                      2,245,341
                    </h4>
                    <p className="text-neutral-grey">Members</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={icEvent} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutral-d-grey font-semibold">
                      828,867
                    </h4>
                    <p className="text-neutral-grey">Event Bookings</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <img src={icClubs} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutral-d-grey font-semibold">
                      46,328
                    </h4>
                    <p className="text-neutral-grey">Clubs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src={icPayment} alt="" />
                  <div>
                    <h4 className="text-2xl text-neutral-d-grey font-semibold">
                      1,926,436
                    </h4>
                    <p className="text-neutral-grey">Payments</p>
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

export default About;
