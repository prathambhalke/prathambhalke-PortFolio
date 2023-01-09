import React from "react";
import blog1 from "../assets/blog-1.jpg"
import blog2 from "../assets/blog-2.jpg"
import blogs from "../assets/blog-3.png"

const Blogs = () => {
  const projects = [
    {
      id: 1,
      image: blog1,
      demoLink: "https://medium.com/@prathameshbhalke125/nullish-coalescing-operator-6cdfff384c57",
    },
    {
      id: 2,
      image: blog2,
      demoLink: "https://medium.com/@prathameshbhalke125/currying-in-javascript-9be9dc23d57c",
    },
  ];

  return (
    <div
      name="Blogs"
      className="w-full sm:h-screen h-screen bg-gradient-to-b from-black to-gray-800 p-4 pt-24  text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Blogs
          </p>

          <p className="py-6">Check out some of my Blogs right here</p>
        </div>

        <div className="grid sm-grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, demoLink }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <a href={demoLink} target="_blank">
                  <img
                    src={image}
                    alt="Blog-images"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                </a>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                    {" "}
                    <a href={demoLink} target="_blank">
                      Open
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
