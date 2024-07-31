"use client"; // This directive tells Next.js that this is a Client Component

// Resume page component
export default function Resume() {
  return (
    <div className="container mx-auto p-4 fade-in">
      <h1 className="text-4xl font-bold">Resume</h1>
      {/* Education section */}
      <section className="mt-8 slide-in">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p>High School Diploma</p>
        <p>Currently pursuing Software Development at Southern Alberta Institute of Technology</p>
      </section>
      {/* Work experience section */}
      <section className="mt-8 slide-in">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <p>Currently pursuing software development at SAIT (Southern Alberta Institute of Technology).</p>
        <p>Aspiring to become a professional in the future. Have hands-on experience in Python, C#, JavaScript, React Native, and SQL.</p>
      </section>
      {/* Skills section */}
      <section className="mt-8 slide-in">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <p>Proficient in React Native .js</p>
      </section>
    </div>
  );
}
