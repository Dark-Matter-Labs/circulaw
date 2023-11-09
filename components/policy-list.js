import Link from 'next/link';
import InstrumentMetaData from './instrument/instrument-metadata';
import Tag from './tag';

export default function PolicyList(props) {
  let lawData = [];
  if (props.data) {
    lawData = props.data;
  }
  return (
    <>
      {lawData.map((law) => (
        <Link href={'/measures/' + law.slug.current} key={law.titel}>
          <div className='block sm:ml-0 mb-10 sm:mb-8 max-w-[825px]'>
            <div className='flex justify-start items-center -ml-1'>
              {/* Expertise Tag */}
              {law?.beleid === true && (
                <Tag bgColor='bg-green-500'>
                    Beleid  
                </Tag>
               
              )}
              {law?.inkoop === true && (
                <Tag bgColor='bg-green-500'>
                Inkoop  
                </Tag>
              )}
              {law?.grondpositie === true && (
                    <Tag bgColor='bg-green-500'>
                    Grondpositie  
                    </Tag>
                
              )}
              {law?.subsidie === true && (
             
                 <Tag bgColor='bg-green-500'>
                 Subsidie  
                 </Tag>
              )}
              {law?.fiscaal === true && (
              
                 <Tag bgColor='bg-green-500'>
                 Fiscaal  
                 </Tag>
              )}
            </div>

            <div className='block mt-2 max-w-4xl'>
              <div className=' mb-2'>
                <h3 className='mobile sm:desktop text-grey-800 no-underline hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                  {law.titel}{' '}
                </h3>
              </div>

              <div className='block newlineDisplay p-md text-grey-800 mt-2 pb-2'>
                <p className='p-base'>{law.introText}</p>
              </div>
              <InstrumentMetaData data={law} />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
