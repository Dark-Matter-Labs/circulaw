// import Link from 'next/link'
import SectionTypes from '../section-types-list'
export default function TransitionAgendaLayout(props) {
    const themaData = [props.themeData[0]]
    const bouwTransitionAgenda = props?.bouwTransitionAgenda
    // this needs to be generic and not bouw related
    console.log(themaData, 'check')
    return (
        <>
        <div className="global-margin">
            <div className=" pt-20 pb-20">
                <h1 className="mobile sm:desktop">{bouwTransitionAgenda?.transitionAgendaTitle}</h1>
                <h2 className='mobile sm:desktop'>{bouwTransitionAgenda?.subtitle}</h2>
            </div>
            <h2 className='mobile sm:desktop py-10'>
                Bouw Themas and Specials
            </h2>
            <div className='py-10'>
            <SectionTypes themaCards={themaData}/>
            </div>
            <div className='py-10'>
                <h2 className='mobile sm:desktop py-10'>European Law</h2>               
                <h3 className='mobile sm:desktop'>I think we can put a portable text here which will be able to upload pdfs and control some styling. </h3> 

                <p className='mobile sm:desktop'>  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        </>
    )
}