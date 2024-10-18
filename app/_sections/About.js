import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div>
      <section className="section text-white">
        <div className="column px-8 py-16 | flex flex-col md:flex-row gap-8 md:gap-16 items-center ">
          <div className="col-1 w-full">
            <div className="img-box relative aspect-square">
              <Image fill src="/about-bg.jpg" className="object-cover" />
            </div>
          </div>
          <div className="col-2">
            <div className="text-content py-16">
              <h2 className="section_subtitle uppercase |  text-dark-400 font-bold text-sm tracking-wider | flex items-start gap-4">
                <div className="bg-secondary h-1 w-12"></div>
                About us
              </h2>
              <h3 className="section__title | text-4xl md:text-5xl lg:text-6xl mt-4">
                We Invite You to Visit Our Coffee House
              </h3>
              <p className="section__description | leading-loose mt-8">
                Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae
                repudiandae dolorem, beatae dolorum, praesentium itaque et quam
                quaerat.
              </p>
              <Link
                href="/about"
                className="bg-secondary px-6 block mt-8 w-fit py-4 uppercase"
              >
                read more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
