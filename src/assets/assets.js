import logo from './top.mp4'
import Footer from './bg3.mp4'
import webvid from './webdev.mp4'
import cloud from './cloud.mp4'
import aiml from './aimlser.mp4'
import profile_img_1 from './profile_img_1.webp'
import profile_img_3 from './profile_img_2.webp'
import profile_img_2 from './profile_img_3.webp'

import main_bg from './techbg2_2k.mp4'

export const assets = {
    logo,
    webvid,
    cloud,
    aiml,
    Footer,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    main_bg,
}

export const tabs = [
  {
    number: "01",
    heading: "TechNova WebCraft",
    description:
      " We create high-performance, visually stunning, and user-friendly websites tailored to your business needs. Whether it’s a sleek corporate site, a dynamic e-commerce platform, or a custom web application, our expert developers use the latest technologies to deliver exceptional digital solutions.",
    video:webvid,
  },
  {
    number: "02",
    heading: "TechNova CloudX",
    description:
      "We provide comprehensive cloud solutions that help businesses leverage the power of cloud technology to drive efficiency, scalability, and innovation. From cloud migration to management and security, our experts design tailored solutions that ensure your data is always secure, accessible, and optimized for growth.",
    video:cloud,
  },
  {
    number: "03",
    heading: "MachineMind by TechNova",
    description:
      "We bring cutting-edge AI and machine learning solutions to help businesses make smarter, data-driven decisions. From predictive analytics to automation, our tailored AI/ML services are designed to optimize operations, enhance customer experiences, and drive innovation.",
    video:aiml,
  },
];

  export const Team_MemberData = [
    {
        name: "Donald Jackman",
        title: " Web Developer",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        experience: '15 year',
        description: "An experienced developer specializing in front-end and back-end technologies, creating seamless and user-friendly web applications."
    },
    {
        name: "Richard Nelson",
        title: " AI/ML Engineer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        experience: '7 year',
        description: "Focused on developing intelligent systems and machine learning models to enhance automation and data-driven decision-making."
    },
    {
        name: "James Washington",
        title: "Cloud Engineer",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        experience: '10 year',
        description: "An expert in cloud computing, ensuring scalable, secure, and efficient cloud infrastructure for TechNova's digital solutions."
    }
];