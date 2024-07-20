import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioGif1 from '../images/portfolio/portfolioGif-1.gif';
import portfolioGif2 from '../images/portfolio/test2.gif';
import portfolioGif3 from '../images/portfolio/test3.gif';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Hi, I'm Natch.",
  description: 'A site built by Natch.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  secondaryName: `Hi, I'm Natch!`,
  name: `Let's Explore my Software Engineering Journey.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Based in Victoria/Melbourne, I am currently pursuing a
        <strong className="text-stone-100"> Bachelor's of Software Engineering (Honours) </strong>
        at RMIT University. My studies encompass a wide range of software engineering disciplines including{' '}
        <strong className="text-stone-100">
          modern software requirements, development, testing, and design techniques.
        </strong>{' '}
        I apply these skills across a diverse range of projects including mobile, web, and enterprise applications.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me playing sports with some mates, experimenting with some{' '}
        <strong className="text-stone-100">game development</strong> projects, or exploring beautiful{' '}
        <strong className="text-stone-100">hiking trails</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      <p>
        Hey! I'm <b>Natch</b> and I'm a proactive and dedicated undergraduate student in Computer Science with
        strong programming skills and hands-on experience in various environments. I seek to leverage my problem-solving
        abilities and technical knowledge in a dynamic software engineering role.
      </p>
      <p>I am well-versed in the following skills:</p>
      <ul>
        <li>
          <b>Programming Languages:</b> Python, Java, C++
        </li>
        <li>
          <b>Scripting:</b> Shell scripting - <b>Operating Systems:</b> Linux (Ubuntu)
        </li>
        <li>
          <b>Tools & Technologies:</b> Git, Docker, SQL
        </li>
        <li>
          <b>Networking:</b> Basic understanding of TCP/IP, DNS, DHCP
        </li>
        <li>
          <b>Databases:</b> MySQL, PostgreSQL
        </li>
        <li>…Among many others!</li>
      </ul>
      <p>
        I have had experience in various personal projects, that are outlined in my CV; but here are a few of my
        proudest projects:
      </p>
      <ul>
        <li>
          <b>VX User research with Tourism North East (TNE)</b>
        </li>
        <li>
          <b>Mock full-stack e-commerce application for fresh produce</b>
        </li>
        <li>
          <b>A website that displays climate change data sourced from the Australian Bureau of Meteorology</b>
        </li>
        <li>
          <b>Volunteering in the development of the revised IOTAA 2023 website</b>.
        </li>
      </ul>
      <p>
        I've developed various fundamental skills for programming from my lifelong journey in education. I’ve always
        loved solving problems and developing solutions that feel satisfying.
      </p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Melbourne, Victoria', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Thai | Australian | New Zealander', Icon: FlagIcon},
    {label: 'Interests', text: 'Fitness, Tech, Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'Royal Melbourne Institute of Technology (RMIT)', Icon: AcademicCapIcon},
    // {label: 'Employment', text: '', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Thai',
        level: 4,
      },
      // {
      //   name: 'Japanese',
      //   level: 3,
      // },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'REST APIs',
        level: 7,
      },
      {
        name: 'MySQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'C#',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Personal Website Landing Page',
    description: (
      <>
      <p>
        Personal website that displays my coding journey and my proudest projects.
      </p>
      <p>Learned the following:</p>
      <li>Typescript</li>
      <li>Tailwind</li>
      </>
    ),
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: (
      <>
      <p>
        Mock fullstack e-commerce application that taught me the core of frontend and backend of websites using React.js for the frontend and Express.js for the backend.
      </p>
      <p>Learned the following:</p>
      <li>CSS Animations</li>
      <li>React.js</li>
      <li>HTML Forms</li>
      </>
    ),
    url: 'https://reactresume.com',
    image: portfolioGif1,
  },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: portfolioImage,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: portfolioGif2,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: portfolioGif3,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'The following are the best ways to reach out to me: best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'n.laoharawee@gmail.com',
      href: 'mailto:n.laoharawee@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Melbourne, Australia',
      href: 'https://www.google.ca/maps/place/Melbourne+VIC/@-37.9707261,144.3937378,9z/data=!3m1!4b1!4m6!3m5!1s0x6ad646b5d2ba4df7:0x4045675218ccd90!8m2!3d-37.8136276!4d144.9630576!16zL20vMGNoZ3pt?entry=ttu',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.LinkedIn,
      text: 'natchanonlaoharawee',
      href: 'www.linkedin.com/in/natchanonlaoharawee',
    },
    // {
    //   type: ContactType.Twitter,
    //   text: 'NatchLaoharawee',
    //   href: 'https://x.com/NatchLaoharawee',
    // },
    {
      type: ContactType.Github,
      text: 'NatchanonLaoharawee',
      href: 'https://github.com/NatchanonLaoharawee',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/NatchanonLaoharawee'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/natchanonlaoharawee'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/NatchLaoharawee'},
];
