import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Make sure your animation file is correctly placed

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Summary And Greeting Section

const illustration = {
  animated: true,
};

const greeting = {
  username: "Roger Baiges Trilla",
  title: "Hi all, I'm Roger",
  subTitle: emoji(
    "A passionate Artificial Intelligence student with a strong interest in applying machine learning and AI to solve real-world challenges."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Replace with your actual resume link if you have one
  displayGreeting: true,
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rogerbaiges",
  linkedin: "https://www.linkedin.com/in/rogerbaigestrilla/",
  gmail: "rogerbaigestrilla@gmail.com",
  display: true,
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI AND MACHINE LEARNING ENTHUSIAST WHO LOVES TO BUILD AND EXPERIMENT",
  skills: [
    emoji(
      "⚡ Developing and training machine learning models"
    ),
    emoji("⚡ Implementing neural networks and deep learning techniques"),
    emoji(
      "⚡ Leveraging data analysis and statistics for predictive modeling"
    ),
    emoji(
      "⚡ Enhancing algorithm performance through parallelization techniques"
    ),
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish",
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish",
    },
    {
      skillName: "PDDL",
      fontAwesomeClassname: "fas fa-robot", // No direct icon, so using a related one
    },
  ],
  display: true,
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universitat Politècnica de Catalunya - BarcelonaTech",
      logo: require("./assets/images/upcLogo.png"), // Replace with your actual logo
      subHeader: "Artificial Intelligence Bachelor's Degree",
      duration: "2022 - Present",
      desc: "With 4 honor distinctions in Data Analysis (Statistics) and AI algorithms. Mentor of newcomers.",
    },
    {
      schoolName: "IES Joan Guinjoan",
      logo: require("./assets/images/joanGuinjoanLogo.png"), // Replace with your actual logo
      subHeader: "Technological Baccalaureate",
      duration: "2020 - 2022",
      desc: "Grade: 9.33/10 (with honors). Awarded Governmental Distinction for High University Entry Exam Scores: +9.5/10",
    },
  ],
};

// Work experience section

const workExperiences = {
  display: false, // No specific work experience provided, so leaving this out
  experience: [],
};

// Achievements Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements that highlight my capabilities and contributions in AI and technology.",

  achievementsCards: [
    {
      title: "HackUPC Champion",
      subtitle:
        "Led my team to victory at the HackUPC challenge, developing an AI-based solution for transaction data analysis.",
      image: require("./assets/images/hackupcLogo.png"), // Add the correct logo or image
      imageAlt: "HackUPC Logo",
      footerLink: [
        {
          name: "Project Details",
          url: "https://github.com/rogerbaiges/hackupc-project", // Replace with the actual project link
        },
      ],
    },
    {
      title: "Challenge Auditoria Winner",
      subtitle:
        "Developed a project predicting inventory impairment using advanced AI models like autoencoders and time series algorithms.",
      image: require("./assets/images/auditoriaLogo.png"), // Add the correct logo or image
      imageAlt: "Auditoria Challenge Logo",
      footerLink: [
        {
          name: "Project Details",
          url: "https://github.com/rogerbaiges/auditoria-project", // Replace with the actual project link
        },
      ],
    },
    {
      title: "Governmental Distinction",
      subtitle:
        "Recognized with a Governmental Distinction for achieving over 9.5/10 in the University Entry Exam scores.",
      image: require("./assets/images/distinctionLogo.png"), // Add the correct logo or image
      imageAlt: "Distinction Logo",
      footerLink: [],
    },
    {
      title: "Mentor at UPC",
      subtitle:
        "Mentored newcomers at Universitat Politècnica de Catalunya, guiding them in AI and technology.",
      image: require("./assets/images/upcLogo.png"), // Add the correct logo or image
      imageAlt: "UPC Logo",
      footerLink: [],
    },
  ],
  display: true,
};

// Projects Section

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the projects I have worked on",

  projects: [
    {
      image: require("./assets/images/cirrhosisLogo.png"), // Add the correct logo or image
      projectName: "Cirrhosis Survival Prediction",
      projectDesc:
        "Developed ML models to accurately predict cirrhosis patient survival rates, achieving an F1-score > 0.8.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/rogerbaiges/cirrhosis-prediction", // Replace with the actual project link
        },
      ],
    },
    {
      image: require("./assets/images/bicingLogo.png"), // Add the correct logo or image
      projectName: "Bicycle Renting Service AI Optimization (Bicing)",
      projectDesc:
        "Optimized bicycle redistribution logistics using local search algorithms like Simulated Annealing.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/rogerbaiges/bicing-optimization", // Replace with the actual project link
        },
      ],
    },
    {
      image: require("./assets/images/spotifyLogo.png"), // Add the correct logo or image
      projectName: "Statistical Study of Spotify’s Top Songs",
      projectDesc:
        "Analyzed Spotify’s top tracks using ML and statistical methods to identify improvement areas for the company.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/rogerbaiges/spotify-study", // Replace with the actual project link
        },
      ],
    },
    {
      image: require("./assets/images/arduinoLogo.png"), // Add the correct logo or image
      projectName: "Research on Automatic Systems",
      projectDesc:
        "Investigated the use of Arduino for creating an efficient automatic watering system, reducing water consumption through smart scheduling.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/rogerbaiges/automatic-watering-system", // Replace with the actual project link
        },
      ],
    },
  ],
  display: true,
};

// Blog Section

const blogSection = {
  title: "Blogs",
  subtitle: "I love to write about AI and technology, sharing my learnings with others.",
  displayMediumBlogs: false, // Set to true if you want to display Medium blogs automatically
  blogs: [], // Add blog posts if any
  display: false,
};

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "rogerbaigestrilla@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "", // Replace with your Twitter username
  display: false, // Set to true if you want to display your Twitter section
};

const isHireable = true; // Set false if you are not looking for a job

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
};