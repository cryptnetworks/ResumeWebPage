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
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import resume from '../components/assets/resume.pdf';
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
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
        I'm a New York based <strong className="text-stone-100">Information Security Professional</strong>, currently working
        for <strong className="text-stone-100">The New York State Office of Information Technology Services</strong> working to protect the data of our agencies and citizens. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">guitar</strong>;
        traveling to see an <strong className="text-stone-100">orchestra or the Yankees play</strong>; or exploring the beautiful{' '}
        <strong className="text-stone-100">Adirondack Mountains</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'src/components/assets/resume.pdf',
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
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'New York', Icon: MapIcon},
    {label: 'Nationality', text: 'Italian/American', Icon: FlagIcon},
    {label: 'Interests', text: 'Acoustic Guitar, Orchestral Music, Hiking, Baseball, Learning, Traveling', Icon: SparklesIcon},
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
      }
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
        name: 'Typescript',
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
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
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
    content: <p>My studies were heavily focused in cybersecurity operations and technologies. As apart of my capstone, I was responsible for designing and coordinating the beginning steps of a VDI instructure solution to allow less privileged students to be able to utilize industry tooling with nothing more than a Chromebook and internet connection. In addition, I was heavily involved in the interworkings of the program at UAlbany. The program was undergoing a revision when I was attending.</p>,
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
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQH8mUyKZgjbfA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684265566376?e=1738800000&v=beta&t=F2HA8HJoL7TWaYvozvtSKxRlNMN0wdmwdFYlnbKPs8Y',
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
