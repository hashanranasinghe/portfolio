import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";

const contactDetails = [
  {
    icon: <AssignmentIndIcon style={{ color: "blue" }} />,
    title: "Name",
    value: "Ranasinghe Mudiyanselage Hashan Kalhara Ranasinghe",
  },
  {
    icon: <CalendarMonthIcon style={{ color: "blue" }} />,
    title: "Birth day",
    value: "06 April 1999",
  },
  {
    icon: <PhoneIphoneIcon style={{ color: "blue" }} />,
    title: "Phone Number",
    value: "+9476 6352298",
  },
  {
    icon: <MailOutlineIcon style={{ color: "blue" }} />,
    title: "Email",
    value: "hashan.ranasinghe98@gmail.com",
  },
  {
    icon: <HomeIcon style={{ color: "blue" }} />,
    title: "Address",
    value: "No.364/E, Embilmeegama, Pilimatalwa.",
  },
];

export const About = () => {
  return (
    <div className="rounded-lg py-10 px-10 grid gap-y-4 gap-x-10 bg-gray-50 md:grid-cols-2 sm:grid-cols-1 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 duration-300">
      {contactDetails.map((detail, index) => (
        <div
          key={index}
          className="flex flex-col hover:text-blue-900 duration-300 gap-y-2 items-start"
        >
          <div className="flex items-center gap-x-3">
            {detail.icon}
            <h4 className="text-xl font-bold text-blue-700">{detail.title}</h4>
          </div>
          <p className="text-md text-gray-500">{detail.value}</p>
        </div>
      ))}
    </div>
  );
};
