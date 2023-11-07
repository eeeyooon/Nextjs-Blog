import Link from "next/link";
import Image from "next/image";
import ProfileImage from "../../public/images/profile.png";
export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={ProfileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hello, I'm eeeyooon"}</h2>
      <h3 className="text-xl font-semibold">Frontend Developer</h3>
      <p>안녕하세요. 신입 프론트엔드 개발자입니다.</p>
      <Link href="/contact">
        <button className="bg-yellow-500  rounded-xl py-1 px-4 mt-2 font-bold">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
