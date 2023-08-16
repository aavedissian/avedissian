import Layout from '@/components/Layout'

export default function Books() {
  return (
    <Layout>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-4xl'>Books</h2>

          <p>Some of my favorite books. Updates at <a className='text-blue-600' target="_blank" href="https://www.goodreads.com/user/show/97291654-anthony-avedissian">Goodreads</a>.</p>
      
          <h3 className='font-bold text-xl'>Biographies</h3>
          <ul class="list-disc list-inside"> 
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/37542581-the-spy-and-the-traitor">Spy and the Traitor</a> by Ben Macintyre</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/27220736-shoe-dog">Shoe Dog</a> by Phil Knight</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/54898389-the-almanack-of-naval-ravikant">Naval Ravikant</a> by Eric Jorgenson</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/22609522-red-notice">Red Notice</a> by Bill Browder</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/20157104-poor-charlie-s-almanack">Poor {`Charlie's`} Almanack</a> by Charles Munger</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/46223297-permanent-record">Permanent Record</a> by Edward Snowden</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/17364.Surely_You_re_Joking_Mr_Feynman_">Surely {`You're`} Joking</a> by Richard Feynman</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/109705.Mr_China">Mr. China</a> by Tim Clissold</li>
          </ul>

          <h3 className='font-bold text-xl'>Non-fiction</h3>
          <ul class="list-disc list-inside"> 
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/23692271-sapiens">Sapiens</a> by Yuval Harari</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/40121378-atomic-habits">Atomic Habits</a> by James Clear</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/174713.The_Lessons_of_History">Lessons of History</a> by Will Durant</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/6716755-thinking-in-systems">Thinking in Systems</a> by Donella Meadows</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/33514.The_Elements_of_Style">Elements of Style</a> by William Strunk</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/17434641-why-nations-fail">Why Nations Fail</a> by Daron Acemoğlu</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/14572.Peace_Is_Every_Step">Peace Is Every Step</a> by Thich Nhat Hanh</li>
          </ul>

          <h3 className='font-bold text-xl'>Fiction</h3>
          <ul class="list-disc list-inside"> 
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/157993.The_Little_Prince">Little Prince by Antoine</a> de Saint-Exupery</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/7544887-any-human-heart">Any Human Heart</a> by William Boyd</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/375802.Ender_s_Game">Ender’s Game</a> by Orson Scott Card</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/18007564-the-martian">Martian</a> by Andy Weird</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/2547.The_Prophet">Prophet</a> by Kahlil Gibran</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore">Kafka on the Shore</a> by Haruki Murakami</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/343.Perfume">Perfume</a> by Patrick Süskind</li>
          </ul>

          <h3 className='font-bold text-xl'>Start-ups</h3>
          <ul class="list-disc list-inside"> 
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/18529000-the-mom-test">Mom Test</a> by Rob Fitzpatrick</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/18050143-zero-to-one">Zero to One</a> by Peter Thiel</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/55338968-the-cold-start-problem">Cold Start Problem</a> by Andrew Chen</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/38212134-how-the-internet-happened">How the Internet Happened</a> by Brian Cullough</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/11865558-venture-deals">Venture Deals</a> by Brad Feld</li>
          <li><a className='text-blue-600' target="_blank" href="https://www.goodreads.com/book/show/2615.The_Innovator_s_Dilemma">{`Innovator's`} Dilemma</a> by Clayton Christensen</li>
          </ul>

        </div>
    </Layout>
  )
}