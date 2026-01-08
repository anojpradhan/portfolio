import Image from "./Image";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="grid md:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-14 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="space-y-1 xs:space-y-2 sm:space-y-3">
            <h1 className="font-bold tracking-tight leading-tight text-[clamp(1.5rem,4vw,2rem)] xs:text-[clamp(1.75rem,5vw,2.5rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2.25rem,5vw,3.75rem)]">
              Hello, I'm
            </h1>
            <h2 className="font-bold tracking-tight leading-tight text-[clamp(1.75rem,5vw,2.25rem)] xs:text-[clamp(2rem,6vw,2.75rem)] sm:text-[clamp(2.25rem,6vw,3.25rem)] md:text-[clamp(2.5rem,6vw,3.75rem)]">
              <span className="relative inline-block">
                Anoj Pradhan
                <span className="absolute left-0 -bottom-0.5 xs:-bottom-1 sm:-bottom-1.5 md:-bottom-2 w-full h-px xs:h-0.5 bg-black" />
              </span>
            </h2>
          </div>

          <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6">
            <h3 className="font-medium text-[clamp(1.1rem,3vw,1.3rem)] xs:text-[clamp(1.2rem,3.5vw,1.5rem)] sm:text-[clamp(1.3rem,4vw,1.75rem)]">
              Web Developer
            </h3>
            <p className="mt-0.5 xs:mt-1 text-xs xs:text-sm sm:text-base text-gray-700">
              Based in <span className="font-semibold">Nepal</span>
            </p>
          </div>

          <p className="mt-4 xs:mt-5 sm:mt-6 text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            I craft modern, scalable web applications by combining clean
            frontend design with robust backend architecture. My work focuses on
            performance, security, and real-world usability building systems
            that are easy to scale and maintain.
          </p>

          <div className="flex md:hidden justify-center gap-2 xs:gap-3 sm:gap-4 mt-5 xs:mt-6 sm:mt-7">
            {[
              {
                Icon: Github,
                label: "GitHub",
                url: "https://github.com/anojpradhan",
              },
              {
                Icon: Linkedin,
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/anozz-pradhan/",
              },
              {
                Icon: Facebook,
                label: "Facebook",
                url: "https://www.facebook.com/azzzbug/",
              },
              {
                Icon: Instagram,
                label: "Instagram",
                url: "https://www.instagram.com/anozz_shrestha/",
              },
            ].map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                aria-label={label}
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition flex-shrink-0"
              >
                <Icon size={12} className="xs:size-[13px] sm:size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative flex justify-center w-full">
            {/* desktop divider */}
            <div className="hidden lg:block absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 w-px h-32 md:h-40 bg-gray-700" />

            <div className="w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[420px] xl:max-w-[520px]">
              <Image />
            </div>
          </div>

          {/* mobile ko divider*/}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 block md:hidden w-16 xs:w-20 h-px bg-gray-700" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
