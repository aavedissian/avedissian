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
          <p>{`Hi, I'm Anthony`}</p>

          <p>I invest in early-stage startups at <a className='text-blue-600' target='_blank' href="https://seedclub.ventures/">Seed Club Ventures</a> and, together with my wife, also design and craft <a className='text-blue-600' target='_blank' href="https://www.laravalentina.com/">fine jewelry</a>.</p>
     
          <p>I live in Los Angeles and enjoy reading, <a className='text-blue-600' target='_blank' href="https://www.instagram.com/antilosh.eats/">cooking</a>, swimming, skiing, golf, tennis, and Muay Thai.</p> 

          <p>I grew up in London and have lived in Istanbul, Yerevan, Miami, Lisbon, Shanghai, Phuket, and Barcelona.</p>

          <p>You can reach me on <a className='text-blue-600' target='_blank' href="https://twitter.com/antavedissian">Twitter</a> or <a className='text-blue-600' target='_blank' href="https://warpcast.com/antavedissian">Warpcast</a> and find my writing on <a className='text-blue-600' target='_blank' href="https://paragraph.xyz/@antavedissian">Paragraph</a>.</p>
        </div>
    </Layout>
  )
}
