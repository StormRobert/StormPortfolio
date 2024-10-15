import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";
import project7 from "../assets/project-7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project-9.png";

export const HERO_CONTENT = `I am a software engineer with a strong foundation in both front-end and back-end technologies, recently graduating from a comprehensive course at Moringa School. My expertise includes front-end development with React and Three.js, and back-end technologies such as Node.js and PostgreSQL. I am passionate about leveraging these skills to design and build innovative solutions that not only drive business growth but also deliver exceptional user experiences. My goal is to continuously push the boundaries of technology, creating impactful, user-centric products that stand out in the digital landscape.`;

export const ABOUT_TEXT = `I'm a full-stack developer with a genuine love for creating web applications that make a difference. My expertise spans an array of technologies, including Figma for design, React and Three.js for dynamic front-end development, and Node.js, PostgreSQL, and Flask for robust back-end solutions. I’m comfortable in Linux environments, which helps me handle deployments and system management smoothly.
`;
export const ABOUT_TEXT2 = `My journey into tech began with a simple curiosity about how things work, and it has grown into a fulfilling career where I’m always learning and adapting. I really enjoy collaborating with others and diving into complex challenges to create something truly valuable. Outside of work, I stay active by playing football and drawing, which keep me inspired and balanced.`


export const PROJECTS = {
  basic: [
    {
      title: "Weather App",
      image: project1,
      description:
        "A fully functional weather app with HTML, CSS and Vanilla JavaScript.",
      link: "https://stormrobert.github.io/WeatherAapp.github.io/",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "React-Weather App",
      image: project2,
      description:
        "An updated version of weather app. The React Weather App is a simple web application that allows users to check the weather for various cities and manage their favorite cities.",
      technologies: ["HTML", "CSS", "React"],
      link: "https://weather-reactapp-orpin.vercel.app/",
    },
  ],
  amateur: [
    {
      title: "News App",
      image: project4,
      description:
        "StormReports is a dynamic news platform designed to keep you updated in real-time. Leveraging the NewsData API, it fetches and categorizes news articles, delivering the latest updates seamlessly. Built with React, this application offers a streamlined and user-friendly experience for staying informed across various topics.",
      technologies: ["HTML", "CSS", "React"],
      link: "https://github.com/StormRobert/news-app",
    },
    {
      title: "Sphere3D",
      image: project6,
      description:
        "This project showcases a sleek animation of a sphere, created using the Three.js library. By integrating GSAP, the animation is brought to life with smooth transitions and interactive mouse controls that allow users to change the sphere's color. It's a visually engaging demonstration of 3D graphics and animation techniques.",
      technologies: ["Threejs", "Javascript"],
      link: "https://threejs-three-phi.vercel.app/",
    },
  ],
  intermediary: [
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website built with React, Tailwind CSS, and Framer Motion, showcasing the apps I've developed and providing insights into my journey as a software engineer. This site highlights my projects, skills, and achievements, offering a dynamic and engaging user experience.",
      technologies: ["HTML", "React", "Tailwind", "Framer Motion"],
      link: "https://stormrobert.vercel.app/",
    },
    {
      title: "Kadi_Poker Game",
      image: project5,
      description:
        "We built this group collaboration game web app using React to handle the game logic, while Python took care of storing user data. It was a fun and challenging project that brought our team together, combining creativity and technical skills to create something truly interactive and dynamic.",
      technologies: ["TailwindCSS", "React", "Python", "Flask"],
      link: "https://github.com/StormRobert/KADI_POKER",
    },
    {
      title: "Calendly clone",
      image: project7,
      description:
        "As a group, we created a clone of Calendly, a popular scheduling tool, using React and Tailwind for a responsive front-end, and Python with Flask for the back-end. This project allows users to easily book appointments, manage their availability, and send invites, replicating the core functionality of the original platform while providing a smooth and user-friendly experience.",
      technologies: ["React", "TailwindCSS", "Python", "Flask"],
      links: [
        "https://github.com/suleosmann/schedule-nest-calendar-client",
        "https://github.com/suleosmann/schedule-nest-calendar-server"
      ],
    },
  ],
  realLifeProblems: [
    {
      title: "Excency",
      image: project8,
      description:
        "Exceny Wallet, currently in its early stages of development, aims to simplify cross-border currency exchange. With real-time, seamless currency conversion, it offers competitive exchange rates and minimal fees. Perfect for travelers and businesses, it ensures hassle-free transactions that save both time and money, boosting regional trade.",
      technologies: ["React", "TailwindCSS", "Python", "Flask"],
      link: "https://exency.vercel.app/",
    },
    {
      title: "Tuzo Fund",
      image: project9,
      description:
        "Tuzo Fund, currently in development, connects underprivileged students with sponsors, covering educational needs from kindergarten to high school. Sponsors can directly support individual students or contribute to a general fund. With secure transactions and safeguards for sponsor withdrawal, Tuzo Fund ensures continuous financial support, empowering students to pursue their education without barriers.",
      technologies: ["React", "TailwindCSS", "NodeJS", "ExpressJS"],
      link: "https://tuzofund.netlify.app/",
    },
  ],
};

export const CONTACT = {
  phoneNo: "+254 758801836 ",
  email: "stormarasa2@gmail.com",
};
