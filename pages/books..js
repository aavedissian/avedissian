import Layout from '@/components/Layout'

export default function Books() {
  return (
    <Layout>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-4xl'>Books</h2>
          <p>Some of my favorite books. Updates at <a target="_blank" href="https://www.goodreads.com/user/show/97291654-anthony-avedissian">Goodreads</a>.</p>
          <h3 className='font-bold text-xl'>Biographies</h3>
          <p>Spy and the Traitor by Ben Macintyre</p>
          <p>Shoe Dog by Phil Knight</p>
          <p>Naval Ravikant by Eric Jorgenson</p>
          <p>Poor {`Charlie's`} Almanack by Charles Munger</p>
          <p>Surely {`You're`} Joking by Richard Feynman</p>
          <p>Mr. China by Tim Clissold</p>
          <h3 className='font-bold text-xl'>Non-fiction</h3>
          <p>Sapiens by Yuval Harari</p>
          <p>Atomic Habits by James Clear</p>
          <p>Lessons of History by Will Durant</p>
          <p>Thinking in Systems by Donella Meadows</p>
          <p>Elements of Style by William Strunk</p>
          <p>Why Nations Fail by by Daron Acemoğlu</p>
          <p>Peace Is Every Step by Thich Nhat Hanh</p>
          <h3 className='font-bold text-xl'>Fiction</h3>
          <p>Little Prince by Antoine de Saint-Exupery</p>
          <p>Any Human Heart by William Boyd</p>
          <p>Ender’s Game by Orson Scott Card</p>
          <p>Martian by Andy Weird</p>
          <p>Prophet by Kahlil Gibran</p>
          <p>Kafka on the Shore by Haruki Murakami</p>
          <p>Perfume by Patrick Süskind</p>
          <h3 className='font-bold text-xl'>Start-ups</h3>
          <p>Mom Test by Rob Fitzpatrick</p>
          <p>Zero to One by Peter Thiel</p>
          <p>Cold Start Problem by Andrew Chen</p>
          <p>How the Internet Happened by Brian McCullough</p>
          <p>Venture Deals by Brad Feld</p>
          <p>{`Innovator's`} Dilemma by Clayton Christensen</p>
        </div>
    </Layout>
  )
}