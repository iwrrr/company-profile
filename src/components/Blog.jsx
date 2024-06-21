import React from "react";

import image1 from "../assets/image_1.jpeg";
import image2 from "../assets/image_2.jpeg";
import image3 from "../assets/image_3.jpeg";

import icArrowRight from "../assets/ic_arrow_right.svg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: image1,
    },
    {
      id: 2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: image2,
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: image3,
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-4xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutral-grey font-semibold mb-4">
          Caring is the new marketing
        </h2>
        <p className="md:w-3/4 text-sm text-neutral-grey mx-auto mb-8">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>

      {/* All blogs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="hover:scale-95 transition-all duration-300"
            />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-neutral-grey font-semibold line-clamp-2">
                {blog.title}
              </h3>
              <div className="flex items-center justify-center">
                <a
                  href="/"
                  className="text-brand-primary hover:text-neutral-grey"
                >
                  Readmore
                </a>
                <img src={icArrowRight} alt="" className="inline-block ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
