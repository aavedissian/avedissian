import Layout from '@/components/Layout'

export default function Books() {
  return (
    <Layout>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-4xl'>Principles</h2>
          <p>Some principles I regularly come back to.</p>
          <ul class="list-disc list-inside"> 
          <li><span className="font-bold">Compound.</span> The greatest returns in life come from <a className='text-blue-600' href="https://anthonyavedissian.substack.com/p/on-compounding">compounding</a>. Keep consistent and play long-term games.</li>

          <li><span className="font-bold">Prioritize.</span> Decide on your most important priority for this decade, year, and month. Systematically allocate time to meet those priorities.</li>

          <li><span className="font-bold">Live holistically.</span> Work-life balance is a <a className='text-blue-600' target="_blank" href="https://blog.nateliason.com/p/work-life-balance">false dichotomy</a>. Integrate work as one part of a holistic life, where each area supports and complements others.</li>

          <li><span className="font-bold">Maintain efficiency.</span> 80% of results are often driven by <a className='text-blue-600' target="_blank" href="https://en.wikipedia.org/wiki/Pareto_principle">20% of efforts</a>.</li>

          <li><span className="font-bold">Invert.</span> To be successful, rather than study success, study the <a className='text-blue-600' href="https://jamesclear.com/inversion">causes of failure</a> and engineer the elimination or mitigation of those risks.</li>

          <li><span className="font-bold">Transcend Paradigms.</span> Mental models are <a className='text-blue-600' target="_blank" href="https://fs.blog/map-and-territory/">useful abstractions</a>, but are not the same as reality. Remain flexible and intellectually unattached.</li>

          <li><span className="font-bold">Take Action.</span> In the <a className='text-blue-600' target="_blank" href="https://en.wikipedia.org/wiki/Buridan%27s_ass">Buridan’s Ass</a>, the donkey dies because it does not decide. Do not be the donkey. Take action, even when no option is preferable.</li>
        
          <li><span className="font-bold">Radical honesty.</span> Honesty, with others and oneself, leads to deeper relationships, clear decision-making, and a more authentic life.</li>
                              
          <li><span className="font-bold">Look forward.</span> Make decisions based on <a className='text-blue-600' target="_blank" href="https://en.wikipedia.org/wiki/Sunk_cost">future value</a>, not unrecoverable past investments.</li>


          </ul>
        </div>
    </Layout>
  )
}