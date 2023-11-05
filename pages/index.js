import Head from 'next/head'; // Import the Head component
import Layout from '@/components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      {/* Add the Head component here to set the title for this page */}
      <Head>
        <title>Anthony Avedissian</title>
      </Head>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-4xl'>About</h2>
          <Image src='/aa.jpg' width={150} height={150} alt='author' className='rounded-full' />
          <p>My name is Anthony Avedissian. I invest in technology startups at <a className='text-blue-600' target='_blank' href="https://seedclub.ventures/">Seed Club Ventures</a> and co-design fine jewelry with my wife at Lara Valentina.</p>
     
          <p>I started my career at <a className='text-blue-600' target='_blank' href="https://www.ambercapital.com/">Amber Capital</a>, an activist hedge fund, and later worked in investment banking at <a className='text-blue-600' target='_blank' href="https://www.sc.com/en/">Standard Chartered</a>.</p>
     
          <p>I grew up in London, regularly traveling to Istanbul and Yerevan. I have lived in 10+ cities, including Miami, Lisbon, Shanghai, Phuket, and Barcelona.</p>
          
          <p>I live in Los Angeles and enjoy reading, <a className='text-blue-600' target='_blank' href="https://www.instagram.com/antilosh.eats/">cooking</a>, running, swimming, skiing, hiking, and Muay Thai.</p>

          <p>You can reach me on <a className='text-blue-600' target='_blank' href="https://twitter.com/antavedissian">Twitter</a> and find my writing on <a className='text-blue-600' target='_blank' href="https://anthonyavedissian.substack.com/">Substack</a>.</p>
        </div>
    </Layout>
  )
}
