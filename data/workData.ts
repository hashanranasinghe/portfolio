import { Education } from "@/types/Education";

export default [
  {
    id: 1,
    place: "hsenid Mobile Solutions PVT Ltd",
    title: "Trainee Software Engineer",
    duration: "12‑2023 – 06‑2024",
    description:
      "I successfully contributed to essential projects in alert monitoring and data scraping, enhancing operational processes and data management.\n" +
      "• Developed the SNMP Alert Monitoring System using Python, Airflow, Grafana, and Docker to streamline server alert management and status tracking, enhancing realtime monitoring for system engineers.\n" +
      "• Managed a data-scraping pipeline to meet data requirements, ensuring data accuracy and accessibility, and shared results through Google Sheets for the data team.\n" +
      "• Executed independent scraping tasks to fulfill dynamic data needs and collaborated closely with the data team to maintain seamless data flow and ownership.",
  },
  {
    id: 2,
    place: "Self-employed",
    title: "Freelance Software Developer",
    duration: "",
    description:
      "Developed a doctor-patient app using the MVVM architecture and the Provider package, featuring secure video calls (Agora, Firebase Cloud Functions), seamless OnePay payments, in-app chat, and appointment scheduling to provide effortless access to healthcare services.\n\n" +
      "• Built a blood-donation app based on the MVVM architecture and the Provider package, integrating geolocation, Firebase, Cloud Functions, real-time notifications, and an AI chatbot. The app enables hospitals to organize blood camps and allows users to schedule appointments and participate with ease.",
  },
] satisfies Education[];
