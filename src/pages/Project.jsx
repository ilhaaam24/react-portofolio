const Project = () => {
  const projects = [
    {
      title: "Weather App",
      tool: "HTML, CSS, Javascript",
      image: "/assets/projects/weatherapp.png",
    },
    {
      title: "Hotel Booking App",
      tool: "Laravel 11, Tailwind, Mysql",
      image: "/assets/projects/hotelapp.png",
    },
    {
      title: "Analisi Data Bike Sharing",
      tool: "Python, Pandas, Matplotlib, Seaborn",
      image: "/assets/projects/analisisdata.png",
    },
  ];
  return (
    <div id="project" className="flex flex-col items-center justify-center min-h-screen p-4 gap-4 mt-8  ">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm text-gray-600">My recent</p>
        <h1 className="text-3xl font-bold mb-8">Projects 🚀</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 w-full max-w-screen-lg">
        {projects.map((project, index) => (
          <div className="flex flex-col  bg-white shadow-md  rounded-lg overflow-hidden h-[300px] w-[300px] hover:-translate-y-1 duration-300 px-4 pt-4" key={index}>
            <img src={project.image} className="w-full h-[250px] object-cover rounded-md" alt="Project 1" />
            <div className="py-4">
              <h2 className="text-md font-medium">{project.title}</h2>
              <p className="text-xs text-gray-500 mt-1">{project.tool}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
