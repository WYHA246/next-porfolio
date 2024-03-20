import HomePage from './componets/home/HomePage'

export const metadata = {
  title: "Waiyan Htet Aung - Home",
  description: 'Home Page of waiyan htet aung portfolio',
  generator: 'Next.js',
  applicationName: "Waiyan Htet Aung's Portfolio",
  referrer: 'origin-when-cross-origin',
  keywords: ['waiyanhtetaung', 'web developer', 'myanmar', 'system administrator', 'university of medicine 2'],
  creator: 'Waiyan Htet Aung',
  publisher: 'Waiyan Htet Aung',
  openGraph: {
    title: 'Waiyan Htet Aung',
    description: 'Experienced full stack web developer with three years of expertise in front-end and back-end technologies. Skilled in JavaScript frameworks like React, Laravel and Node.js, with a focus on building robust and interactive web applications. Passionate about continuous learning and staying updated with the latest trends in web development.',
    url: '',
    siteName: 'Waiyan Htet Aung',
    images: [
      {
        url: process.env.APP_URL + '/image/profile.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  )
}
