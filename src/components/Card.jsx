
const Card = ({ image, issuer, title,  }) => {
  return (
    <div className="flex flex-col  bg-white shadow-lg rounded-lg overflow-hidden h-[350px] w-[300px] hover:scale-105 duration-300">
      <img src={image} className="w-full h-[250px] object-cover" alt="Project 1" />
      <div className="p-4">
        <h2 className="text-md font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{issuer}</p>
      </div>
    </div>
  );
};

export default Card;
