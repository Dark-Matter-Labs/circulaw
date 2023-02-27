import Layout from '../../components/layouts/layout';

export default function English() {
  return (
    <>
      <Layout>
        <div className='h-[30vh] global-margin'>
          ENGLISH PAGE - add title, subtitle, link, heroImage, box and portable text.
        </div>
        <div className='flex grid-cols-1 lg:grid-cols-4 global-margin justify-start'>
          <div className='col-span-3'>text</div>
          <div className='col-span-1'>green bocx</div>
        </div>
      </Layout>
    </>
  );
}
