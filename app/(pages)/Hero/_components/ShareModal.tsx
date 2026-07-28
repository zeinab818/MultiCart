"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ShareModal() {
  const links = {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    mail: "mailto:",
    whatsapp: "https://wa.me/",
  };

  const [selectedLink, setSelectedLink] = useState(links.facebook);
  const [copied, setCopied] = useState(false);

  const handleSelect = (link: string) => {
  setSelectedLink(link);
};
  const copyLink = async () => {
    await navigator.clipboard.writeText(selectedLink);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger className="flex cursor-pointer items-center gap-2 font-montserrat text-[#222] ">
        <Share2 size={18} />
        <span>Share</span>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-montserrat text-xl font-semibold">
            Share It
          </DialogTitle>
        </DialogHeader>

        {/* Social Icons */}
        <ul className="flex items-center  gap-3 py-3">
          <li>
            <button
              onClick={() => handleSelect(links.facebook)}
              className={`flex h-11 w-11 items-center justify-center border transition
    ${
              selectedLink === links.facebook
                ? "bg-(--main-color) text-white border-(--main-color)"
                : "bg-[#f8f8f8] border-[#eeeeee] "
    }`}
            >
              <i className="ri-facebook-line text-xl"></i>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleSelect(links.twitter)}
                className={`flex h-11 w-11 items-center justify-center border transition
                    ${
                              selectedLink === links.twitter
                                ? "bg-(--main-color) text-white border-(--main-color)"
                                : "bg-[#f8f8f8] border-[#eeeeee] "
                    }`}
            >
            
              <i className="ri-twitter-line text-xl"></i>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleSelect(links.linkedin)}
className={`flex h-11 w-11 items-center justify-center border transition
    ${
              selectedLink === links.linkedin
                ? "bg-(--main-color) text-white border-(--main-color)"
                : "bg-[#f8f8f8] border-[#eeeeee] "
    }`}
            >
            
              <i className="ri-linkedin-line text-xl"></i>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleSelect(links.mail)}
className={`flex h-11 w-11 items-center justify-center border transition
    ${
              selectedLink === links.mail
                ? "bg-(--main-color) text-white border-(--main-color)"
                : "bg-[#f8f8f8] border-[#eeeeee] "
    }`}
            
            >
              <i className="ri-mail-line text-xl"></i>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleSelect(links.whatsapp)}
className={`flex h-11 w-11 items-center justify-center border transition
    ${
              selectedLink === links.whatsapp
                ? "bg-(--main-color) text-white border-(--main-color)"
                : "bg-[#f8f8f8] border-[#eeeeee] "
    }`}
            
            >
              <i className="ri-whatsapp-line text-xl"></i>
            </button>
          </li>
        </ul>

        {/* Link Input */}
        <div className="flex gap-5">
             <Input
          value={selectedLink}
         
          className="font-montserrat rounded-none!"
        />

      
          <Button
            type="button"
            onClick={copyLink}
            className="cursor-pointer bg-(--main-color) px-6 text-white rounded-none! hover:bg-white font-montserrat  border-(--main-color) hover:text-(--main-color) "
          >
            {copied ? "Copied!" : "Copy Link"}
          </Button>
    
        </div>
       
      </DialogContent>
    </Dialog>
  );
}