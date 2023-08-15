import Layout from '@/components/Layout'

export default function Books() {
  return (
    <Layout>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-4xl'>Principles</h2>
          <p>Principles I regularly come back to.</p>
          <ul class="list-disc list-inside"> 
          <li class="font-bold">Transcend Paradigms.</li>Mental models are useful abstractions of reality, but it is important to remain intellectually unattached and flexible. Every model, including the one that shapes your worldview, is a tremendously limited understanding of an immense and amazing universe. 
          
          <li>Take Action. In the <a target="_blank" href="https://en.wikipedia.org/wiki/Buridan%27s_ass">Buridan’s Ass</a>, the donkey dies because it is unable to decide. Do not be the donkey. Take action, even when no option is preferable.</li>
          
          <li>Compound. The greatest returns in life, whether in wealth, relationships, or knowledge, come from <a href="https://anthonyavedissian.substack.com/p/on-compounding">compound interest</a>.</li>
          
          <li>Prioritize. Decide on your most important priority for this: decade, year, quarter, and month. Systematically allocate time to meet those priorities.</li>
          
          <li>Engineer serendipity. Luck is not magic. It is a state of mind and a property of networks. It can be measured, analyzed, and <a href="https://medium.com/aspen-ideas/engineering-serendipity-941e601a9b65">engineered</a>.</li>
          
          <li>Invert. To be successful, rather than study success, which is subject to survivorship bias, study the causes of failure and engineer the elimination or mitigation of those risks.</li>
                    
          <li>Remain curious. Stay as close to the edge as you can without going over. You will discover new things unseen from the center.</li>
          
          <li>Live holistically. “Work-life balance” sets up a <a target="_blank" href="https://blog.nateliason.com/p/work-life-balance">false dichotomy</a>, implying work and life must be traded off. Instead, integrate work as one part of a holistic life, where each area supports and complements others.</li>
          
          <li>Radical honesty. Honesty, not only with others but also oneself, leads to deeper relationships, clear decision-making, and a more authentic life.</li>
                              
          <li>Look forward. Make decisions based on <a target="_blank" href="https://en.wikipedia.org/wiki/Sunk_cost">future value</a>, not unrecoverable past events/investments.</li>

          <li>Simplify. You do not understand something well enough until you can explain it simply. In a few sentences, with simple words.</li>

          <li>Maintain efficiency. 80% of results are often driven by <a target="_blank" href="https://en.wikipedia.org/wiki/Pareto_principle">20% of efforts</a>.</li>

          </ul>
        </div>
    </Layout>
  )
}