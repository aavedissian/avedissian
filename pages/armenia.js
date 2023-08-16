import Layout from '@/components/Layout'

export default function Books() {
  return (
    <Layout>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-4xl'>Armenia</h2>
   
          <p>I have lived in Yerevan for extended periods and toured much of Armenia and its neighbouring regions, including Georgia, Artsakh, and Anatolia.</p>
 
          <p>I won <a className='text-blue-600' target="_blank" href="https://neruzh.am/en/">Neruzh</a> in 2018 and participated in the <a className='text-blue-600' target="_blank" href="https://fast.foundation/">FAST accelerator</a> in 2019. I am excited about the emerging technology and startup ecosystem in Armenia.</p>
  
          <p>I am interested in investing in Armenian startups and supporting local initiatives in education, healthcare, and pharmaceuticals.</p>
  
          <p>Please message me on <a className='text-blue-600' target="_blank" href="https://twitter.com/antavedissian">Twitter</a> or email <a className='text-blue-600' href="mailto:anthony@seedclub.ventures">anthony@seedclub.ventures</a> to discuss further.</p>
        </div>
    </Layout>
  )
}