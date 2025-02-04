import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/github.jpg';
import porfolioImage2 from '../images/portfolio/wikijs.jpg'
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
  title: 'M. DeSocio - Information Security Professional',
  description:
    "This is Mike DeSocio's personal website. Here you can find information about him, his projects, and how to get in touch.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  Wiki: 'wiki',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mike DeSocio.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a New York based <strong className="text-stone-100">Information Security Professional</strong>, currently
        working for{' '}
        <strong className="text-stone-100">The New York State Office of Information Technology Services</strong> working
        to protect the data of our agencies and citizens.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">guitar</strong>; traveling to
        see an <strong className="text-stone-100">orchestra or the Yankees play</strong>; or exploring the beautiful{' '}
        <strong className="text-stone-100">Adirondack Mountains</strong>.
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
      href: `mailto:mike+website@desocios.com`,
      text: 'Email me!',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm Mike DeSocio! Most of my life I have been surrounded by 
  computers and technology. From the ripe young age of 3, I can remember by dad
  coming home and working on client PCs and showing me the ins and outs. I was hooked!
  15 years later after an awakening from Music School, I enrolled in the Bachelors of Science
  Program for Cybersecurity at the University at Albany. I was heavily involved with on campus organizations
  such as Cyber Defense Organization (CDO) and IEEE. CDO gave me the ability to explore new technologies and 
  gain more friends and mentors along the way. Most of my software and technology expertise grew here.
  My current cybersecurity toolset skills include security logging and hunting using Splunk and QRadar; gathering
  CTI information for hunts using threat feeds imported into OpenCTI; and a vast knowledge base of different NIST
  Standards (800-30, 800-53r5, 800-63, 800-171) and other compliance domains such as CJIS, IRS Pub1075, and more.`,
  description_2:`On the weekends, I like to travel to the Adirondacks and enjoy what it has to offer. My family
  owns property up there and it's a great escape from the busy life! You'll often find me playing guitar, hiking,
  or exploring the surrounding region!`,
  aboutItems: [
    {label: 'Location', text: 'New York', Icon: MapIcon},
    {label: 'Nationality', text: 'Italian/American', Icon: FlagIcon},
    {
      label: 'Hobbies',
      text: 'Acoustic Guitar, Orchestral Music, Hiking, Baseball, Homelabbing, Learning, Traveling',
      Icon: SparklesIcon,
    },
    {label: 'Study', text: 'University at Albany, SUNY', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'New York State Office of Information Technology Services', Icon: BuildingOffice2Icon},
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
    ],
  },
  {
    name: 'Cybersecurity Domains',
    skills: [
      {
        name: 'Risk Management',
        level: 9,
      },
      {
        name: 'Operations Center Analyst',
        level: 8,
      },
      {
        name: 'Threat Intelligence',
        level: 7,
      },
      {
        name: 'Policy Writing',
        level: 7,
      },
    ],
  },
  {
    name: 'Enterprise IT Services',
    skills: [
      {
        name: 'Containerization Services',
        level: 8,
      },
      {
        name: 'Splunk',
        level: 5,
      },
      {
        name: 'Microsoft Active Directory Services',
        level: 4,
      },
    ],
  },
  {
    name: 'Operating Systems',
    skills: [
      {
        name: 'MacOS',
        level: 9,
      },
      {
        name: 'Linux',
        level: 8,
      },
      {
        name: 'Windows',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Wiki',
    description: 'I document all of my projects on my wiki here! It allows for me to update them more easily.',
    url: 'https://wiki.idiots.cc',
    image: porfolioImage2,
  },
  {
    title: 'GitHub',
    description: 'All of my codebases for my projects can be found here. I try to keep them updated as much as',
    url: 'https://github.com/mdesocio',
    image: porfolioImage1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'January 2021 - December 2023',
    location: 'University at Albany, SUNY',
    title: 'Bachelors of Science in Cybersecurity',
    content: (
      <p>
        My studies were heavily focused in cybersecurity operations and technologies. As apart of my capstone, I was
        responsible for designing and coordinating the beginning steps of a VDI instructure solution to allow less
        privileged students to be able to utilize industry tooling with nothing more than a Chromebook and internet
        connection. In addition, I was heavily involved in the interworkings of the program at UAlbany. The program was
        undergoing a revision when I was attending.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2023 - Present',
    location: 'New York State Office of Information Technology Services',
    title: 'Information Technology Specialist III',
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
      name: 'Collin C.',
      text: 'Mike has proven time and time again, that he is a consummate cybersecurity professional...He is highly motivated and actively seeks out new challenges and opportunities for growth, and his dedication to learning is steadfast and unwavering. Mike has proven to be a highly capable and motivated individual. Any team that Mike is a part of will surely be lucky to have him.',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQH8mUyKZgjbfA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684265566376?e=1738800000&v=beta&t=F2HA8HJoL7TWaYvozvtSKxRlNMN0wdmwdFYlnbKPs8Y',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot to reach me. I check emails more frequently than other platforms.',
  items: [
    {
      type: ContactType.Email,
      text: 'Email Me!',
      href: 'mailto:mike+website@desocios.com',
    },
    {
      type: ContactType.Instagram,
      text: '@crypticnetworks',
      href: 'https://www.instagram.com/crypticnetworks/',
    },
    {
      type: ContactType.Github,
      text: 'mdesocio',
      href: 'https://github.com/mdesocio',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Michael DeSocio',
      href: 'https://www.linkedin.com/in/michael-desocio-95b461187'
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mdesocio'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/michael-desocio-95b461187'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/crypticnetworks/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/mdesocio28'},
];
