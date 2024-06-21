import React from "react";

const MyFooter = () => {
  const sections = [
    {
      title: "Company",
      items: ["Tentang Kami", "Blog", "Program"],
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms and Condition"],
    },
  ];

  // const items = [
  //   { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  //   {
  //     name: "Instagram",
  //     icon: FaInstagram,
  //     link: "https://www.instagram.com/",
  //   },
  //   { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  //   { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  //   { name: "Github", icon: FaGithub, link: "https://github.com/" },
  // ];

  return (
    <div className="w-full mt-24 bg-white text-gray-300 py-y px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase text-neutral-d-grey pt-2">
              {section.title}
            </h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-neutral-grey hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase text-neutral-d-grey">Alamat</p>
          <p className="py-4 text-neutral-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            consequuntur expedita vitae delectus quia, rem exercitationem facere
            tempore quasi culpa!
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-neutral-grey">
        <p className="py-4">2024 Workflow, LLC. All rights reserved</p>
      </div>
    </div>
  );
};

export default MyFooter;
