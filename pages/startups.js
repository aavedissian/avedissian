import Head from 'next/head'; // Import the Head component
import Layout from '@/components/Layout'

export default function Startups() {
  return (
    <Layout>
      {/* Add the Head component here to set the title for this page */}
      <Head>
        <title>Startups - Anthony Avedissian</title>
      </Head>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-4xl'>Startups</h2>
    
          <p>I invest in pre-seed, seed, and series A rounds. I love meeting founders, playing with <a className='text-blue-600' target="_blank" href="https://cdixon.org/2010/01/03/the-next-big-thing-will-start-out-looking-like-a-toy">toys</a>, and navigating the <a className='text-blue-600' target="_blank" href="https://cdixon.org/2013/08/04/the-idea-maze">idea maze</a>.</p>
    
          <p>I help startups with business development, product strategy, and introductions to customers and investors.</p>
    
          <p>If you are seeking investment, product feedback, or strategic advice, please message me on <a className='text-blue-600' target="_blank" href="https://twitter.com/antavedissian">Twitter</a> or email <a className='text-blue-600' href="mailto:anthony@seedclub.ventures">anthony@seedclub.ventures</a>.</p>
    
          <p>To streamline the process, feel free to include a commentable Google Doc answering:</p>
    
          <ul class="list-disc list-inside"> 
    
          <li>What is the purpose of your company?</li>
    
          <li>What problem is your company solving?</li>
    
          <li>What is your solution to the problem?</li>

          <li>Why are you building this company now?</li>

          <li>Who is your initial customer?</li>

          <li>How do you plan to reach your target customer?</li>
    
          <li>How do you plan to make money?</li>

          <li>What progress have you made?</li>

          <li>Who is on your team?</li>
    
          </ul>
        </div>
    </Layout>
  )
}
