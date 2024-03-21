import HomePage from './componets/home/HomePage'

export const metadata = {
  title: "Waiyan Htet Aung - Home",
  description: 'Home Page of waiyan htet aung portfolio',
  generator: 'Next.js',
  applicationName: "Waiyan Htet Aung's Portfolio",
  referrer: 'origin-when-cross-origin',
  keywords: ['waiyanhtetaung', 'cloud specialist', 'myanmar', 'system administrator', 'cloud practitioner'],
  creator: 'Waiyan Htet Aung',
  publisher: 'Waiyan Htet Aung',
  openGraph: {
    title: 'Waiyan Htet Aung',
    description: 'A passionate junior cloud technician',
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
