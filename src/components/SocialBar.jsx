import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [
  { Icon: Github, link: "https://github.com/anojpradhan" },
  { Icon: Linkedin, link: "https://www.linkedin.com/in/anozz-pradhan/" },
  { Icon: Facebook, link: "https://www.facebook.com/azzzbug/" },
  { Icon: Instagram, link: "https://www.instagram.com/anozz_shrestha/" },
];

const SocialBar = () => {
  return (
    <div className="fixed hidden top-1/3 left-4 lg:flex lg:flex-col gap-4 z-50">
      {socials.map(({ Icon, link }, i) => (
        <a
          key={i}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border flex items-center justify-center rounded-md hover:bg-black hover:text-white transition-all duration-300"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
