import Link from "next/link";
import React from "react";
import appConfig from "@/config/app";
import { Facebook, Twitch, Instagram, Youtube } from "iconsax-react";

const socialIcons = [
    {id:"facebook", icon:<Facebook />},
    {id:"twitter", icon:<Twitch />},
    {id:"instagram", icon:<Instagram />},
    {id:"youtube", icon:<Youtube />},
]

const Header = () => {
  return (
    <header className="flex p-6 justify-around items-center">
      <h1 className="text-5xl font-bold type">Newspaper</h1>
      <ul className="nav_links flex items-center gap-3">
       {appConfig.links.map((link, i)=>(
        <li key={i}>
            <Link href={link.href}>{link.label}</Link>
        </li>
       ))}
      </ul>

      <div className="flex gap-3">
        {
            appConfig.socialHandles.map((social, i)=>(
                <div key={i} className="flex gap-2">
                    {socialIcons[i].id==(social.name) ? socialIcons[i].icon:""}
              </div>
            ))
        }
      </div>
    </header>
  );
};

export default Header;
