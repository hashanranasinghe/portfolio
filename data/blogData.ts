import { BlogPost } from "@/types/Blog";

export default [
  {
    id: 1,
    title: "The 10 Best Flutter Packages Every Beginner Should Practice",
    date: "01 Jul, 2025",
    categories: ["Flutter"],
    author: "Hashan Ranasinghe",
    imageSrc: "/portfolio/blog/b1.jpg",
    imageAlt: "pub dev",
    description:
      "If you’re reading this article, I know you’re just getting started with learning and practicing the Flutter framework",
      link:"https://medium.com/@hashanranasinghe98/the-10-best-flutter-packages-every-beginner-should-practice-cd2e23a4b9a2"
  },
  {
    id: 2,
    title:
      "Advanced Web Scraping: Extracting Data from PDFs Without Downloading",
    date: "06 Jan, 2025",
    categories: ["Web Scraping"],
    author: "Hashan Ranasinghe",
    imageSrc: "/portfolio/blog/b2.jpg",
    imageAlt: "scraping",
    description:
      "In my previous article, I covered the basics of web scraping with Python.",
      link:"https://medium.com/@hashanranasinghe98/advanced-web-scraping-extracting-data-from-pdfs-without-downloading-c0b866dfe401"
  },
  {
    id: 3,
    title: "Basic Guide to Web Scraping with Python",
    date: "17 Jul, 2024",
    categories: ["Web Scraping"],
    author: "Hashan Ranasinghe",
    imageSrc: "/portfolio/blog/b3.jpg",
    imageAlt: "scraping",
    description:
      "Imagine you need information from a website. Sure, you could copy it manually, but what if you need a large amount of data?",
      link:"https://medium.com/@hashanranasinghe98/basic-guide-to-web-scraping-with-python-ba192616b423"
  }
] satisfies BlogPost[];
