import Link from "next/link";
import Image from "next/image";

// Home page component
export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Profile image */}
      <Image src="/profile.jpg" alt="Profile Photo" width={200} height={200} className="rounded-full mx-auto" />
      {/* Brief introduction about yourself */}
      <h1 className="text-4xl font-bold mt-4 text-center">Welcome to My Resume Website</h1>
      <p className="mt-4 text-xl text-center">
        Hi, I'm Harjot Singh Salh, a dedicated full-time student at Southern Alberta Institute of Technology.
        I am passionate about Software Development and enjoy learning new things every day. I love exploring
        new technologies and applying them in my projects.
      </p>
      <p className="mt-4 text-center">
        Connect with me on{" "}
        <a href="mailto:harjotsingh.salh@edu.sait.ca" className="text-blue-500 underline">
          Email
        </a> or check out my {" "}
        <a href="https://github.com/HarjotSalh" className="text-blue-500 underline">
          GitHub
        </a>.
      </p>
      {/* Links to other pages */}
      <div className="mt-8 text-center">
        <Link href="/resume" className="text-blue-500 underline">View My Resume</Link>
      </div>
      <div className="mt-4 text-center">
        <Link href="/contact" className="text-blue-500 underline">Contact Me</Link>
      </div>
    </div>
  );
}
