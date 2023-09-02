import image from "../../assets/images/p.jpg";
function ServiceCard() {
  return (
    <div 


    
    className="h-[330px] w-[275px] bg-white flex flex-col justify-around items-center p-5 rounded-lg cursor-pointer hover:shadow-lg hover:scale-105 duration-300">
      <div className="relative flex justify-center items-center group h-[132px] w-[235px] rounded-lg">
        <img
          src={image}
          loading="lazy"
          width="150"
          height="90"
          decoding="async"
          data-nimg="1"
          className="object-cover rounded-lg"
          alt=""
        />
      </div>
      <h1 className="text-lg font-bold py-2">UI/UX Design</h1>
      <p className="text-gray-400 text-base text-center pb-5">
        {" "}
        Reference site about Lorem Ipsum, giving information on its origins.{" "}
      </p>
      <div className="flex flex-row justify-between w-full pb-2 items-center">
        <a
          href=""
          className="text-sm font-bold rounded-md px-3 py-1 hover:bg-blue-700 text-blue-700 hover:text-white bg-white"
        >
          Git Hub
        </a>
        <a
          href=""
          className="text-sm font-bold rounded-md px-3 py-1 hover:bg-blue-700 text-blue-700 hover:text-white bg-white"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
