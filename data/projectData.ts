import { Project } from "@/types/Project";

export default [
  {
    id: 1,
    name: "Units Converting App",
    short: "Build a Units Converting App with FLUTTER",
    problem:
      "Everyday unit conversions (length, weight, temperature) meant switching between several single-purpose apps or doing the math by hand.",
    description:
      "The unit conversion application provides a user-friendly interface that makes it easy for users to convert different types of measurements according to their needs. Whether it's length, weight, volume, temperature, or other units, this app allows users to convert them effortlessly. For example, if you want to convert meters to feet or kilograms to pounds, this app has got you covered. It simplifies the process of converting measurements into the units you prefer. So, whether you're working on a science project or need to convert units for everyday tasks, this application is a handy tool that helps you get accurate conversions quickly and easily.",
    img: "/portfolio/projects/icons8-flutter-48.png",
    link: "https://github.com/hashanranasinghe/units-converting-app.git",
    techStack: ["Flutter", "Dart"],
    impact: "Personal-use utility covering 5+ measurement categories.",
  },
  {
    id: 2,
    name: "The dictionary app",
    short: "Build a Dictionary App with FLUTTER & FIREBASE",
    problem:
      "Botany students had no quick way to look up scientific plant names alongside their Sinhala meanings.",
    description:
      "The BOTANY APP is a useful tool for students learning about plants. It has a collection of scientific names and their Sinhala meanings. The app allows the administrator to add, search, update, and delete words. Users can sign up for the app and search for terms using either the scientific name or the Sinhala name. The app stores all the information in a database called Firebase. It's a great resource for students studying botany and helps them easily find the meanings of scientific names in Sinhala.",
    img: "/portfolio/projects/dic.png",
    link: "https://github.com/hashanranasinghe/botany-app.git",
    techStack: ["Flutter", "Firebase"],
    impact: "Searchable Sinhala botanical dictionary with admin-managed entries.",
  },

  {
    id: 3,
    name: "ToDo App",
    short: "Build a TO-DO App with FLUTTER & FIREBASE",
    problem:
      "Students needed a lightweight task manager with a built-in focus mode, not another bloated productivity suite.",
    description:
      "The to-do app I created is a handy tool for managing tasks and staying organized. With this app, users can easily add new tasks, edit existing ones, and mark tasks as completed when they're finished. It's perfect for keeping track of homework, chores, or any other responsibilities. Additionally, the app offers a helpful focus mode, which allows users to concentrate on their tasks without distractions. Moreover, it provides insights into how much time you spend on other apps on your phone, helping you manage your screen time effectively. So, whether you're a student juggling assignments or just someone looking to stay on top of daily tasks, this to-do app has got you covered.",
    img: "/portfolio/projects/todo.png",
    link: "https://github.com/hashanranasinghe/ToDo-App.git",
    techStack: ["Flutter", "Firebase"],
    impact: "Task manager with a focus mode and screen-time insights.",
  },
  {
    id: 4,
    name: " Android encryption & video sharing",
    short: "Build a Video Sharing App with FLUTTER & FIREBASE",
    problem:
      "Sharing personal videos through consumer apps gave users no control over who could keep or re-share them.",
    description:
      "The video-sharing app allows users to share their personal videos with their friends.To get started, users need to sign up for the app. Once signed in, they can upload their videos. When sharing a video, users can choose specific friends to share it with. The app uses a special encryption method called AES algorithm to protect the video's privacy. This means that the video is securely encoded and can only be viewed by the intended recipients. If a user wants to remove a video, they have the option to delete it from both their own device and the recipient's device, or just from their own device. It's a safe and convenient way to share videos with friends!",
    img: "/portfolio/projects/video.png",
    link: "https://github.com/hashanranasinghe/android-video-encryption-sharing.git",
    techStack: ["Flutter", "Firebase", "AES Encryption"],
    impact: "AES-encrypted video sharing with per-recipient delete control.",
  },

  {
    id: 5,
    name: "Safe Park",
    short: "Build a Parking App with FLUTTER & FIREBASE",
    problem:
      "Drivers in busy areas had no fast way to find nearby available parking, and lot owners had no way to list space.",
    description:
      "The mobile app we created for the MADHACK 2021 hackathon program is designed to help users find the nearest car park. To use the app, users need to sign up either as a vehicle owner or a car park owner. It's a group project that we worked on together. We're proud to say that our team won the second place in the competition! With this app, users can easily locate available parking spaces nearby. Whether you're driving to a shopping mall or an event, the app will guide you to the closest car park. It's a helpful tool for anyone looking for a parking spot in a busy area.",
    img: "/portfolio/projects/safepark.png",
    link: "https://github.com/MadHack-2021/Team-Origins.git",
    techStack: ["Flutter", "Firebase"],
    impact: "2nd place, MADHACK 2021 — built end-to-end in a team hackathon sprint.",
    featured: true,
  },
  {
    id: 6,
    name: "Loan Suggestion App",
    short: "Build a Loan Suggestion App with FLUTTER & FIREBASE",
    problem:
      "Comparing loan options across job type, interest rate, and duration meant manual spreadsheet math for most borrowers.",
    description:
      "The loan-finding app is designed to assist users in finding the most suitable loan options that match their needs. It takes into account various factors like job position, interest rate, loan category, and duration. By considering these preferences, the app provides personalized recommendations for loans. Users can also estimate their monthly payments and the total interest they would pay over the loan duration. This helps users make informed decisions and choose the loan that fits their financial situation. Whether it's for education, a car, or any other purpose, this app makes it easier for users to explore and compare different loan options.",
    img: "/portfolio/projects/loan.png",
    link: "https://github.com/hashanranasinghe/LoanGuru.git",
    techStack: ["Flutter", "Firebase"],
    impact: "Personalized loan matching with built-in monthly payment estimates.",
  },
  {
    id: 7,
    name: "Food Care App",
    short: "Build a Food Care App with FLUTTER, NODE.JS & MONGODB",
    problem:
      "Usable surplus food was going to waste with no easy way to connect donors to people who needed it.",
    description:
      "The food waste reduction app is a helpful tool that connects people who have extra food with those who are in need. Instead of throwing away or wasting food, users can donate their excess food through the app. This way, food that would have gone to waste can be given to someone who can use it. It's a great way to help reduce food waste and ensure that everyone has enough to eat. By using this app, we can make a positive impact on our community and work together to tackle the problem of food waste.",
    img: "/portfolio/projects/food.png",
    link: "https://github.com/hashanranasinghe/food-care-app.git",
    techStack: ["Flutter", "Node.js", "MongoDB"],
    impact: "Full-stack donation-matching app: Flutter client, Node.js/MongoDB backend.",
  },
  {
    id: 8,
    name: "Cricket Score App",
    short: "Build a Scoring App with FLUTTER & FIREBASE",
    problem:
      "Tournament organizers tracked schedules and live scores manually, with no shared source of truth for participating teams.",
    description:
      "The cricket tournament management system consists of two apps: the admin app and the user app. The admin app is used by organizers to create and manage cricket tournaments. They can set up the tournament schedule, teams, and other important details. On the other hand, the user app is designed for teams participating in the tournament. It allows teams to register for the tournament and provides live updates on scores during matches. This way, teams can stay updated on their performance and track the progress of other teams. The system makes it easier for organizers to manage tournaments and provides a convenient platform for teams to participate and stay informed.",
    img: "/portfolio/projects/score.png",
    link: "https://github.com/supunnilakshana/info-bash.git",
    techStack: ["Flutter", "Firebase"],
    impact: "Two-app system (admin + team) for tournament setup and live scoring.",
  },
  {
    id: 9,
    name: "GPA-Calculator",
    short: "Build a GPA-calculator App with Next.JS",
    problem:
      "CIS department students had no fast, reliable way to calculate GPA and class standing from raw module results.",
    description:
      "The GPA Calculator Web App was built with a simple mission: to help CIS department students easily calculate and track their academic performance. Developed using Next.js and Tailwind CSS, and hosted on Firebase, this web app offers a seamless and responsive experience across devices.\n" +
      "Students can input their results, which are stored locally using IndexedDB, ensuring their data stays on their device even after closing the browser. The app calculates GPA and class standing, such as First Class, Second Class, or Pass, giving students a clear understanding of their academic progress. Additionally, it provides access to past result records of all users in a centralized, viewable format. Whether you're planning your educational goals or just want a quick breakdown of your performance, this tool is designed specifically for our CIS community to make GPA tracking simple, reliable, and accessible.",
    img: "/portfolio/projects/gpa.png",
    launch: "https://gpa-web-app.web.app/",
    techStack: ["Next.js", "Tailwind CSS", "Firebase", "IndexedDB"],
    impact:
      "Live at gpa-web-app.web.app — actively used across the CIS student community.",
    featured: true,
  },
  {
    id: 10,
    name: "Subscription - Tracker Backend",
    short:
      "Build a Subscription Tracker backend with Node.js, MongoDB , arcject and n8n",
    problem:
      "Manual subscription tracking meant missed renewal dates, and a naive polling loop wouldn't scale to many users.",
    description:
      "I developed a Subscription Tracker Backend as a self-learning project to practice backend development and explore workflow automation using n8n. The system allows users to add subscriptions with renewal dates and automatically sends email reminders before renewals. To avoid scalability issues with long-running workflows, I implemented a cron-based scheduling approach using n8n, which checks for upcoming renewals daily and triggers email notifications accordingly. I also integrated Arcjet to protect the API from spam and abusive requests, ensuring better security. This project helped me gain hands-on experience with real-world backend challenges like scheduling, automation, and API protection.",
    img: "/portfolio/projects/n8n.png",
    launch: "https://github.com/hashanranasinghe/subscription-tracker.git",
    techStack: ["Node.js", "MongoDB", "Arcjet", "n8n"],
    impact:
      "Cron-based n8n workflow automates renewal reminders; Arcjet blocks abusive API traffic.",
    featured: true,
  },
  {
    id: 11,
    name: "Lumen Ui",
    short: "Build a Flutter UI package.",
    problem:
      "Flutter apps ship bloated when developers pull in an entire UI library just to use a handful of components.",
    description:
      "Lumen UI is an innovative open-source CLI tool for Flutter that solves the problem of bloated applications by generating UI components on demand. The project aims to create a modular approach where developers can scaffold only the specific components they need, rather than including entire UI libraries as dependencies.",
    img: "/portfolio/projects/lumen.png",
    link: "https://github.com/hashanranasinghe/lumen_ui",
    techStack: ["Flutter", "Dart", "CLI"],
    impact: "Open-source CLI that scaffolds only the components a project actually needs.",
  },
  {
    id: 12,
    name: "File Nest",
    short: "Build a Productivity App with FLUTTER & Local Storage",
    problem:
      "Users were juggling separate apps for files, to-dos, expenses, habits, and notes instead of one unified place.",
    description:
      "FilE NesT was born out of a personal goal to solve a common problem: the overwhelming number of separate productivity apps such as file managers, to-do lists, expense trackers, habit trackers, and note-takers each tackling just one part of our daily needs.\n" +
      "I wanted to bring these tools together into one unified, efficient app. While it may sound ambitious, it's a vision I'm deeply passionate about.\n" +
      "FilE NesT is a simple yet powerful productivity app designed to help you stay organized effortlessly. With features like file and folder management, built-in note-taking, and a to-do list system, it eliminates the need for juggling multiple apps. You can access everything offline, enjoy biometric authentication for added security, and use the app in Sinhala, Tamil, or English—with more languages on the way. Developed with Flutter and built on the MVVM architecture, FilE NesT is optimized for scalability and smooth cross-platform performance. Using Hive for local storage ensures speed and reliability, making FilE NesT the perfect companion for anyone seeking to simplify their digital life.\n" +
      "I also integrated Google AdMob to support the app's development, allowing me to keep it free for everyone while continuing to improve the experience.",
    img: "/portfolio/projects/filenest.png",
    launch:
      "https://play.google.com/store/apps/details?id=com.filenest.filenestapp&pcampaignid=web_share",
    techStack: ["Flutter", "Hive", "MVVM", "AdMob"],
    impact:
      "Live on the Play Store — offline-first, with biometric lock and Sinhala/Tamil/English support.",
    featured: true,
  },
  {
    id: 13,
    name: "Wurdz",
    short: "Build a word finding App with FLUTTER & Local Storage",
    problem:
      "Word-search games are usually static puzzles with no real sense of progression or replay value.",
    description:
      "Wurdz was created to make learning fun, visual, and interactive. The idea came from a simple thought: what if finding words could be more than just a puzzle, what if it could be an adventure?\n" +
      "In Wurdz, players swipe across letter grids to discover hidden words, each tied to a specific theme like animals, fruits, or vegetables. As they play, they not only strengthen their vocabulary but also unlock short, engaging descriptions that bring each word to life. The game features multiple levels, a leaderboard for competitive fun, and a clean, kid-friendly interface. With features like progress tracking, hints, and volume control, Wurdz is designed to be both educational and entertaining. Built with Flutter and structured for performance and scalability, it's the perfect blend of gaming and learning whether you're a curious child, a language learner, or just someone who enjoys a good word challenge.\n" +
      "I also integrated Google AdMob to support the app's development, allowing me to keep it free for everyone while continuing to improve the experience.",
    img: "/portfolio/projects/wurdz.png",
    launch:
      "https://play.google.com/store/apps/details?id=com.vivixeon.wurdz&pcampaignid=web_share",
    techStack: ["Flutter", "Local Storage", "AdMob"],
    impact: "Live on the Play Store — themed word-search game with leaderboards and hints.",
    featured: true,
  },
] satisfies Project[];
