import Image from 'next/image';
import Link from 'next/link';

export default function ThemeBottomSection({ props }) {
  return (
    <div className='bg-green3 bg-opacity-10'>
      <div className='pt-5 global-margin  '>
        <div className='border-b border-grey1 pb-10'>
          <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
            <div className='col-span-2'>
              <h2 className='pt-10 mobile sm:main'>{props.seeMeasuresTitle}</h2>
              <div className='block py-4 sm:hidden'>
                <Image
                  src={props.seeMeasuresImage}
                  alt={props.seeMeasuresImageAlt}
                />
              </div>
              <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>
                {props.seeMeasuresText}
              </p>
              <Link href={props.seeMeasuresLink}>
                <span className='text-greenLink link-mobile sm:link'>
                  {props.seeMeasuresLinkText}
                </span>
              </Link>
            </div>
            <div className='hidden sm:block'>
              <Image
                src={props.seeMeasuresImage}
                alt={props.seeMeasuresImageAlt}
              />
            </div>
          </div>
        </div>
        <div className='border-b border-grey1 pb-10'>
          <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
            <div className='col-span-2'>
              <h2 className='pt-10 mobile sm:main'>{props.samenhangTitle}</h2>
              <div className='block py-4 sm:hidden'>
                <Image
                  src={props.samenhangImage}
                  alt={props.samenhangImageAlt}
                />
              </div>
              <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>{props.samenhangText}</p>
              <Link href={props.samenhangLink}>
                <span className='text-greenLink link-mobile sm:link'>
                  {props.samenhangLinkText}
                </span>
              </Link>
            </div>
            <div className='hidden sm:block'>
              <Image src={props.samenhangImage} alt={props.samenhangImageAlt} />
            </div>
          </div>
        </div>
        <div className='border-b border-grey1 pb-40 pt-10'>
          <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
            <div className='col-span-2'>
              <h2 className='pt-10 mobile sm:main'>{props.welkeTitle}</h2>
              <div className='block py-4 sm:hidden'>
                <Image src={props.welkeImage} alt={props.welkeImageAlt} />
              </div>
              <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>{props.welkeText}</p>
              <Link href={props.welkeLink}>
                <span className='text-greenLink link-mobile sm:link'>{props.welkeLinkText}</span>
              </Link>
            </div>
            <div className='hidden sm:block'>
              <Image src={props.welkeImage} alt={props.welkeImageAlt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
