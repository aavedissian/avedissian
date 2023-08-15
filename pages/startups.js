import Layout from '@/components/Layout'

export default function Startups() {
  return (
    <Layout>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-4xl'>Startups</h2>
          <p>I invest in Pre-Seed and Seed rounds. I love meeting founders, playing with <a target="_blank" href="https://cdixon.org/2010/01/03/the-next-big-thing-will-start-out-looking-like-a-toy">toys</a>, and navigating the <a target="_blank" href="https://cdixon.org/2013/08/04/the-idea-maze">idea maze</a>.</p>
          <p>I help startups with business development, product strategy, and introductions to customers and investors.</p>
          <p>If you are seeking investment, product feedback, or strategic advice, please email <a href="mailto:anthony@seedclub.ventures">anthony@seedclub.ventures</a>.</p>
          <p>To streamline the process, feel free to include a Google Doc with answers to the following:</p>
          <ul class="list-disc list-inside"> 
          <li>What is the mission of your company?</li>
          <li>What problem is your company solving?</li>
          <li>What is your solution to the problem?</li>
          <li>Why build the company now?</li>
          <li>How do you plan to make money?</li>
          <li>Who is on the team?</li>
          <li>What progress have you made?</li>
          </ul>
        </div>
    </Layout>
  )
}
