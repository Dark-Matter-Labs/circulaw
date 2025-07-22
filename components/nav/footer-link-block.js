import NewButton from '../shared/new-button';

export default function FooterLinkBlock(props) {
  return (
    <div className=''>
      <div className=''>
        <h3 className='heading-2xl-semibold text-cl-black'>{props.title}</h3>
        <div className=''>
          <div>
            <div className='p-base mt-2 max-w-xl text-white'>{props.paragraph}</div>
          </div>
          <div className='mt-5'>
            {props.isImpactReport ? (
              <NewButton
                variant='secondaryLight'
                icon='download'
                href={props.buttonLink}
                newTab={true}
              >
                {props.buttonText}
              </NewButton>
            ) : (
              <NewButton variant='secondaryLight' icon='arrowRight' href={props.buttonLink}>
                {props.buttonText}
              </NewButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
