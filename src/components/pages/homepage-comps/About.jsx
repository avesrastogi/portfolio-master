import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section
      name="About"
      className="relative w-full md:h-screen text-white h-unset"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">
            About me
          </h2>
        </div>

        <p className="mb-4 py-6">
          Hey! I'm Sanskar and My expertise lies in crafting intuitive and
          responsive user interfaces and backend solutions using HTML, CSS, and JavaScript, with a
          strong proficiency in modern frameworks like React.js.
          On the back-end, I have solid experience with .NET Framework, .NET Core and databases such as MySQL. This blend of
          front-end and back-end skills allows me to build robust and seamless
          full-stack applications.
        </p>

        <p>
          Thanks to my creativity, my attention to detail and my determination,
          I realized that I have a great talent for developing web applications.
          I am fascinated by this great world of technologies and possibilities,
          and I am sure that I will be able to create incredible projects both
          professionally and personally with you.
        </p>
      </div>

      <ScrollLink
        to="Projects"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default About;
