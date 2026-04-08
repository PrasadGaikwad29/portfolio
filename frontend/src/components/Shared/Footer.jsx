import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/prasadGaikwad29",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/prasadgaikwad29/",
    label: "LinkedIn",
  },
];
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/5 py-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-sans text-xl text-accent tracking-widest">
          Prasad<span className="text-white">Gaikwad</span>
        </span>

        <p className="font-body text-xs text-netflix-gray text-center">
          {`© ${year} PRASAD GAIKWAD · Built with React & Node.js · Deployed on Vercel`}
        </p>

        <div className="flex items-center gap-4">
          {socials.map(function ({ icon: Icon, href, label }) {
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-netflix-gray hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
