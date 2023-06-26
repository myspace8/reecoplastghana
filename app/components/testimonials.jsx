'use client';

import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Sarah M",
      title: "GreenTech Solutions",
      quote:
        "Impressed by the performance of recycled plastic pavement bricks. Smooth roads, reduced plastic waste, and a win for sustainability and aesthetics!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela Stian",
      title: "EcoTech Constructors",
      quote:
        "Game-changer for our warehouse! Sturdy waste plastic pallets streamline logistics, reduce carbon footprint. A win-win solution for efficiency and sustainability.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim Ahmed",
      title: "EcoConstruct Builders",
      quote:
        "Skeptical at first, but amazed by recycled plastic pavement bricks. Easy installation, visual appeal, and low maintenance compared to traditional materials.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => {
        // Calculate the index of the next testimonial
        const nextTestimonial =
          (prevTestimonial + 1) % testimonials.length;
        return nextTestimonial;
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-14 h-[500px]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-gray-400 font-semibold pb-6">
            What people are saying
          </h3>
          <ul>
            {testimonials.map((item, idx) => (
              currentTestimonial === idx && (
                <li key={idx} 
                className={`${
                    currentTestimonial === idx ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500`}
                >
                  <figure>
                    <blockquote>
                      <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      {/* <img
                        src={item.avatar}
                        className="w-16 h-16 mx-auto rounded-full"
                      /> */}
                      <div className="mt-3">
                        {/* <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span> */}
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              )
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-black focus:ring ${
                    currentTestimonial === idx ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
