const GeneralFooter = () => {
  return (
    <footer className="relative mt-auto flex flex-col items-center text-gray-300 mb-6 gap-2 md:flex-row md:justify-evenly">
      <div className="flex gap-x-4 md:order-last">
        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/avesrastogi"
        >
          <i className="bx bxl-github"></i>
        </a>

        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/avni-rastogi-951029131/"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>

      <p className="md:order-2">• Copyright ©2023 | All rights reserved • </p>
      <p>@avni_rastogi</p>
    </footer>
  );
};

export default GeneralFooter;
