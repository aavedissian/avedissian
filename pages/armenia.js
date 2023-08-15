import Layout from '@/components/Layout'

export default function Books() {
  return (
    <Layout>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold text-4xl'>Armenia</h2>
          <p>I have lived in Yerevan for extended periods and toured much of Armenia and its neighbouring regions, including Georgia, Artsakh, and Anatolia.</p>
          <p>I won the Neruzh startup competition in 2018, participated in the FAST accelerator program, and am excited about the emerging tech and startup ecosystem in Armenia.</p>
          <p>I am interested in investing in and nurturing Armenian startups and supporting local initiatives in education, healthcare, and pharmaceuticals.</p>
          <p>Please email me at <a href="mailto:anthony@seedclub.ventures">anthony@seedclub.ventures</a> or DM on <a target="_blank" href="https://twitter.com/antavedissian">Twitter</a> to discuss further.</p>
        </div>
    </Layout>
  )
}