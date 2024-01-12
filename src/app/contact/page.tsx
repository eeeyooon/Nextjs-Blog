import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "eeeyooon에게 메일 보내기",
};

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/eeeyooon" },
  { icon: <AiFillLinkedin />, url: "" },
  { icon: <AiFillYoutube />, url: "" },
];
export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>info@dev.com</p>
      <div>
        <ul className="flex gap-4 my-2 justify-center">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-5xl hover:text-blue-500"
            >
              {link.icon}
            </a>
          ))}
        </ul>
        <h2 className="text-3xl font-bold my-8">Or Send me en email</h2>
        <ContactForm />
      </div>
    </section>
  );
}
