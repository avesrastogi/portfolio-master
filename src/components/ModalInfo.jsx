export function ModalInfo({ SelectedProject, closeModal }) {
  const handleClickCloseButton = () => {
    closeModal();
  };

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-opacity-70 bg-black z-40 over">
      <div className="relative bg-white/20 rounded-lg w-[70%] sm:w-[60%] max-w-[800px] modalCard max-h-[80vh] flex flex-col overflow-y-auto lg:text-lg lg:w-[90%]">
        <div>
          <img
            className="w-full rounded-tl-lg rounded-tr-lg md:object-cover bg-white p-4 max-h-72"
            src={SelectedProject.src}
            alt="Resident image"
          />
        </div>

        <div className="w-full text-white p-8 flex flex-col bg-black/80 border-opacity-70 border-primary-color rounded-bl-lg rounded-br-lg">
          <h3 className="text-2xl font-semibold self-center pb-1 inline border-b-4 border-primary-color/60 mb-6">
            {SelectedProject.title}
          </h3>

          <ul>
            <li>
              <span className="text-primary-color">Description: </span>
              <span>{SelectedProject.description}</span>
            </li>

            <li>
              <span className="text-primary-color">Technologies: </span>
              <span>{SelectedProject.technologies} </span>
            </li>

          </ul>
        </div>

        <button
          onClick={handleClickCloseButton}
          className="absolute top-3 right-2 lg:right-4 cursor-pointer"
        >
          <i className="bx bx-x-circle bg-black text-primary-color text-[2.25rem] rounded-full transition-transform duration-300 hover:scale-110"></i>
        </button>
      </div>
    </section>
  );
}
