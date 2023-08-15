import Layout from '@/components/Layout'

export default function Startups() {
  return (
    <Layout>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-4xl'>Startups</h2>
          <p>I invest in Pre-Seed, Seed, and Series A rounds and love meeting founders, playing with <a target="_blank" href="https://cdixon.org/2010/01/03/the-next-big-thing-will-start-out-looking-like-a-toy">toys</a>, and navigating the <a target="_blank" href="https://cdixon.org/2013/08/04/the-idea-maze">idea maze</a>. If you are seeking investment, product feedback, or strategic advice, please email me at <a href="mailto:anthony@seedclub.ventures">anthony@seedclub.ventures</a>.</p>
          <p>To streamline the process, feel free to include a Google Doc with answers to the following:</p>
          <p>What’s your company’s purpose?</p>
          <p>What problem are you solving?</p>
          <p>What’s your solution to the problem?</p>
          <p>Why build the company now?</p>
          <p>How do you plan to make money?</p>
          <p>Who’s on the team?</p>
          <p>What progress have you made?</p>
        </div>
    </Layout>
  )
}