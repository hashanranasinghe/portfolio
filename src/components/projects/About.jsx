export const About = () => {
  return (
 
      <div className="rounded-lg py-10 px-10 grid gap-y-4 gap-x-32 mx-auto bg-gray-50 md:grid-cols-2 sm:grid-cols-1 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 duration-300 ">
        <div>
          <h4 className="text-xl font-bold">Name</h4>
          <small className="text-lg  text-gray-500 hover:text-black duration-300">
            Ranasinghe Mudiyanselage Hashan<br/> Kalhara Ranasinghe{" "}
          </small>
        </div>

        <div>
          <h4 className="text-xl font-bold">Birth day</h4>
          <small className="text-lg  text-gray-500 hover:text-black duration-300">06 April 1999</small>
        </div>

        <div>
          <h4 className="text-xl font-bold">Age</h4>
          <small className="text-lg  text-gray-500 hover:text-black duration-300">23</small>
        </div>

        <div>
          <h4 className="text-xl font-bold">Phone Number</h4>
          <small className="text-lg  text-gray-500 hover:text-black duration-300">+9476 6352298</small>
        </div>

        <div>
          <h4 className="text-xl font-bold">Email</h4>
          <small className="text-lg  text-gray-500 hover:text-black duration-300">hashan.ranasinghe98@gmail.com</small>
        </div>

        <div>
          <h4 className="text-xl font-bold">Address</h4>
          <small className="text-lg text-gray-500 hover:text-black duration-300">
            No.364/E, Embilmeegama,<br/> Pilimatalwa.
          </small>
        </div>
      </div>

  );
};
