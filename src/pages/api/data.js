// get dynamic date format
import blogImage from '@/../public/images/blog.svg';
import DesktopImage from '@/../public/images/dekstop.svg';
// Create a new Date object
const date = new Date();

// Define an array of month names
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Extract the month, day, and year from the Date object
const month = months[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();

// Combine the parts into a formatted date string
const formattedDate = `${month} ${day}, ${year}`;

export default {
  Products: [
    {
      title: 'Apple macbook pro m2',
      price: '$65.35',
      tarif: 'tarif',
      productImage: DesktopImage,
      campaignEndDate: 5,
      descripetion: `Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make a type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.`,

      slug: 'apple-macbook-pro-m2',
    },
    {
      title: 'Apple macbook pro m2',
      price: '$65.35',
      tarif: 'tarif',
      productImage: DesktopImage,
      campaignEndDate: 6,
      descripetion: `Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make a type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.`,

      slug: 'apple-macbook-pro-m2',
    },
    {
      title: 'Apple macbook pro air',
      price: '$75.35',
      tarif: 'tarif',
      productImage: DesktopImage,
      campaignEndDate: 14,
      descripetion: `Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make a type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.`,

      slug: 'apple-macbook-pro-air',
    },
    {
      title: 'Apple macbook pro tarif',
      price: '$3615.35',
      tarif: 'tarif',
      productImage: DesktopImage,
      campaignEndDate: 16,
      descripetion: `Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took and scrambled it make a type specimen book. and built in an automated factory with state-of-the-art equipment, our electric motors are a testament to our focus on perfection. These electric motors are incredibly compatible and can work with different types of tower fans, exhaust fans, and coolers among other devices.`,

      slug: 'apple-macbook-pro-tarif',
    },
  ],
  Blogs: [
    {
      title: 'How to Write a Great Resume for a Job in 2022',
      featuresImage: blogImage,
      slug: 'how-to-write-a-great-resume-for-a-job-in-thirty-days',
      shortDescription:
        'There are many variation an passage of Lorem Ipsum form by injected humour a randomised words which don look even slightly believable.',
      publishedDate: formattedDate,
      details: [
        {
          description: `<p class='text-[1.2em] text-[#3B4540] leading-[152%]'>He shared how it was easy to improvise or adapt to circumstances during in-person meetings, but nowaday you must plan ahead for that usually results in the best ideas & remote forced us spontaneous communication to be even more clear. communication cues that have developed over When planning your meetings, millions it can be tempting to arbitrarily set them for 30 minutes or an hour. But there’s merit in being more precise with your scheduling. If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of millions of years are being intentional the appointment. 
       </p>
        <p class="text-[1.2em] text-[#3B4540] leading-[152%]">Intentional remote meetings and building trust with clients is all about communication, but not communication. It’s about being intentional. When human communication cues that have developed over millions of years are being intentional Go way beyond the small talk on calls to go deeper with clients. In this article, we are going to explore the following types of resume</p>
     <ul class="flex flex-col ml-[18px] py-4 list-disc">
        <li>Traditional</li>
        <li>Entry-level</li>
        <li>Interview-level</li>
        <li>Full-time</li>
        <li>Part-time</li>
        <li>Internship</li>
        <li>Other</li> 
    </ul>
`,
        },
        {
          title: 'How to Make a Perfect Resume - Step-by-Step Guide:',
          description: `
           <p class="text-[1.2em] text-[#3B4540] leading-[152%]">He shared how it was easy to improvise or adapt to circumstances during in-person meetings, but nowaday you must plan ahead for that spontaneous communication that usually results in the best ideas & remote forced us to be even more clear. communication cues that have developed over millions  When planning your meetings, it can be tempting to arbitrarily set them for 30 minutes or an hour. But there’s merit in being more precise with your scheduling. If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of the appointment. <br />

           Intentional remote meetings and building trust with clients is all about communication, but not communication. It’s about being intentional. When human communication cues that have developed over millions of years are being intentionalGo way beyond the small talk on calls to go deeper with clients. You need to be intentional about getting to know them on a personal level.
           </p>
        `,
        },
      ],
    },
    {
      title: 'How to Write a Great Resume for a Job in 2022',
      featuresImage: blogImage,
      slug: 'how-to-write-a-great-resume-for-a-job-in-thirty-days',
      shortDescription:
        'There are many variation an passage of Lorem Ipsum form by injected humour a randomised words which don look even slightly believable.',
      publishedDate: formattedDate,
      details: [
        {
          description: `<p class='text-[1.2em] text-[#3B4540] leading-[152%]'>He shared how it was easy to improvise or adapt to circumstances during in-person meetings, but nowaday you must plan ahead for that usually results in the best ideas & remote forced us spontaneous communication to be even more clear. communication cues that have developed over When planning your meetings, millions it can be tempting to arbitrarily set them for 30 minutes or an hour. But there’s merit in being more precise with your scheduling. If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of millions of years are being intentional the appointment. 
       </p>
        <p class="text-[1.2em] text-[#3B4540] leading-[152%]">Intentional remote meetings and building trust with clients is all about communication, but not communication. It’s about being intentional. When human communication cues that have developed over millions of years are being intentional Go way beyond the small talk on calls to go deeper with clients. In this article, we are going to explore the following types of resume</p>
     <ul class="flex flex-col ml-[18px] py-4 list-disc">
        <li>Traditional</li>
        <li>Entry-level</li>
        <li>Interview-level</li>
        <li>Full-time</li>
        <li>Part-time</li>
        <li>Internship</li>
        <li>Other</li> 
    </ul>
`,
        },
        {
          title: 'How to Make a Perfect Resume - Step-by-Step Guide:',
          description: `
           <p class="text-[1.2em] text-[#3B4540] leading-[152%]">He shared how it was easy to improvise or adapt to circumstances during in-person meetings, but nowaday you must plan ahead for that spontaneous communication that usually results in the best ideas & remote forced us to be even more clear. communication cues that have developed over millions  When planning your meetings, it can be tempting to arbitrarily set them for 30 minutes or an hour. But there’s merit in being more precise with your scheduling. If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of the appointment. <br />

           Intentional remote meetings and building trust with clients is all about communication, but not communication. It’s about being intentional. When human communication cues that have developed over millions of years are being intentionalGo way beyond the small talk on calls to go deeper with clients. You need to be intentional about getting to know them on a personal level.
           </p>
        `,
        },
      ],
    },
    {
      title: 'How to Write a Great Resume for a Job in 2022',
      featuresImage: blogImage,
      slug: 'how-to-write-a-great-resume-for-a-job-in-thirty-days',
      shortDescription:
        'There are many variation an passage of Lorem Ipsum form by injected humour a randomised words which don look even slightly believable.',
      publishedDate: formattedDate,
      details: [
        {
          description: `<p class='text-[1.2em] text-[#3B4540] leading-[152%]'>He shared how it was easy to improvise or adapt to circumstances during in-person meetings, but nowaday you must plan ahead for that usually results in the best ideas & remote forced us spontaneous communication to be even more clear. communication cues that have developed over When planning your meetings, millions it can be tempting to arbitrarily set them for 30 minutes or an hour. But there’s merit in being more precise with your scheduling. If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of millions of years are being intentional the appointment. 
       </p>
        <p class="text-[1.2em] text-[#3B4540] leading-[152%]">Intentional remote meetings and building trust with clients is all about communication, but not communication. It’s about being intentional. When human communication cues that have developed over millions of years are being intentional Go way beyond the small talk on calls to go deeper with clients. In this article, we are going to explore the following types of resume</p>
     <ul class="flex flex-col ml-[18px] py-4 list-disc">
        <li>Traditional</li>
        <li>Entry-level</li>
        <li>Interview-level</li>
        <li>Full-time</li>
        <li>Part-time</li>
        <li>Internship</li>
        <li>Other</li> 
    </ul>
`,
        },
        {
          title: 'How to Make a Perfect Resume - Step-by-Step Guide:',
          description: `
           <p class="text-[1.2em] text-[#3B4540] leading-[152%]">He shared how it was easy to improvise or adapt to circumstances during in-person meetings, but nowaday you must plan ahead for that spontaneous communication that usually results in the best ideas & remote forced us to be even more clear. communication cues that have developed over millions  When planning your meetings, it can be tempting to arbitrarily set them for 30 minutes or an hour. But there’s merit in being more precise with your scheduling. If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of the appointment. <br />

           Intentional remote meetings and building trust with clients is all about communication, but not communication. It’s about being intentional. When human communication cues that have developed over millions of years are being intentionalGo way beyond the small talk on calls to go deeper with clients. You need to be intentional about getting to know them on a personal level.
           </p>
        `,
        },
      ],
    },
    {
      title: 'How to Write a Great Resume for a Job in 2022',
      featuresImage: blogImage,
      slug: 'how-to-write-a-great-resume-for-a-job-in-thirty-days',
      shortDescription:
        'There are many variation an passage of Lorem Ipsum form by injected humour a randomised words which don look even slightly believable.',
      publishedDate: formattedDate,
      details: [
        {
          description: `<p class='text-[1.2em] text-[#3B4540] leading-[152%]'>He shared how it was easy to improvise or adapt to circumstances during in-person meetings, but nowaday you must plan ahead for that usually results in the best ideas & remote forced us spontaneous communication to be even more clear. communication cues that have developed over When planning your meetings, millions it can be tempting to arbitrarily set them for 30 minutes or an hour. But there’s merit in being more precise with your scheduling. If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of millions of years are being intentional the appointment. 
       </p>
        <p class="text-[1.2em] text-[#3B4540] leading-[152%]">Intentional remote meetings and building trust with clients is all about communication, but not communication. It’s about being intentional. When human communication cues that have developed over millions of years are being intentional Go way beyond the small talk on calls to go deeper with clients. In this article, we are going to explore the following types of resume</p>
     <ul class="flex flex-col ml-[18px] py-4 list-disc">
        <li>Traditional</li>
        <li>Entry-level</li>
        <li>Interview-level</li>
        <li>Full-time</li>
        <li>Part-time</li>
        <li>Internship</li>
        <li>Other</li> 
    </ul>
`,
        },
        {
          title: 'How to Make a Perfect Resume - Step-by-Step Guide:',
          description: `
           <p class="text-[1.2em] text-[#3B4540] leading-[152%]">He shared how it was easy to improvise or adapt to circumstances during in-person meetings, but nowaday you must plan ahead for that spontaneous communication that usually results in the best ideas & remote forced us to be even more clear. communication cues that have developed over millions  When planning your meetings, it can be tempting to arbitrarily set them for 30 minutes or an hour. But there’s merit in being more precise with your scheduling. If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of the appointment. <br />

           Intentional remote meetings and building trust with clients is all about communication, but not communication. It’s about being intentional. When human communication cues that have developed over millions of years are being intentionalGo way beyond the small talk on calls to go deeper with clients. You need to be intentional about getting to know them on a personal level.
           </p>
        `,
        },
      ],
    },
  ],
};
