import React from "react";

import icMembership from "../assets/ic_membership.svg";
import icNational from "../assets/ic_national.svg";
import icClubs from "../assets/ic_clubs.svg";

import company1 from "../assets/company_1.png";
import company2 from "../assets/company_2.png";
import company3 from "../assets/company_3.png";
import company4 from "../assets/company_4.png";
import company5 from "../assets/company_5.png";
import company6 from "../assets/company_6.png";
import company7 from "../assets/company_7.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organizations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: { icMembership },
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: { icNational },
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: { icClubs },
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutral-d-grey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutral-grey">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Company logo */}
        <div className="my-12 flex flex-wrap justify-center gap-12">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company4} alt="" />
          <img src={company5} alt="" />
          <img src={company6} alt="" />
          <img src={company7} alt="" />
        </div>
      </div>

      {/* Services card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutral-d-grey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutral-grey">Who is Nextcent suitable for?</p>
      </div>

      {/* Cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div>
                <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                  <img src={service.image} alt="" className="-ml-3" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-grey mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-neutral-grey">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
