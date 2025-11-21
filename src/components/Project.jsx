const Projects = () => {
  const projectList = [
    {
      title: "Python Quiz Game",
      description:
        "A simple python game that uses online as well as local questions for both online and offline experience",
      link: "https://github.com/chrisnalamic/Quiz_game_v1",
    },
    {
      title: "Portfolio Website with html,css and js",
      description:
        "Simple portfolio website with HTML, CSS and JavaScript.",
      link: "https://github.com/chrisnalamic/my_portfolio",
    },
    {
      title: "Portfolio Website with React and Tailwind CSS",
      description:
        "A fully responsive personal portfolio built using React and Tailwind CSS.",
      link: "#",
    },
    {
      title: "Rock Paper Scissors Game",
      description:
        "A fun, interactive JavaScript game with animations and dynamic UI.",
      link: "https://github.com/chrisnalamic/Rock-Paper-Scissors",
    },
  ];

  return (
    <div id="projects" className="w-full flex flex-col items-center pt-15 px-4">

      {/* Section Header */}
      <div className="text-center">
        <p className="text-gray-600 text-lg">Browse My</p>
        <h1 className="text-5xl font-bold text-black mt-2">Projects</h1>
      </div>

      {/* Project Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {projectList.map((p, i) => (
          <div
            key={i}
            className="border border-black/25 rounded-4xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
          >
            <h2 className="text-2xl font-bold text-black mb-3">{p.title}</h2>
            <p className="text-gray-700 mb-5">{p.description}</p>
            <a
              href={p.link}
              className="inline-block px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              View More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;