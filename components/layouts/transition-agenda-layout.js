import Link from 'next/link'
import SectionTypes from '../section-types-list'

export default function TransitionAgendaLayout(props) {
    
    const themaData = [props.themeData[0]]
    return (
        <>
        <div className="global-margin">
            <div className=" pt-20 pb-20">
                <h1 className="mobile sm:desktop">Bouw</h1>
            </div>
            <h2 className='mobile sm:desktop py-10'>
                Bouw Themas and Specials
            </h2>
            <h3 className='mobile sm:desktop'>
                I think we need to create a really good card component that can be quite flexible. This component could be used on the home page, thema page, and transitoin agenda page.
            </h3>
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
            <div>
                <h2 className='mobile sm:desktop py-10'>Top X most impactful measures</h2>
                <h3 className='mobile sm:desktop'>I was thinking here we could create an array of instruments in sanity that reference the actual instruments. That way the legal team can select the instruments they want and put them in the correct order. 
                <br />
                Would need to create a new component to display each instrument on the front end. 
                </h3>
                <div className='py-10 grid grid-cols-2 gap-8'>
                <div className='border'><h3 className='mobile sm:desktop p-4'>Measure 1</h3></div>
                <div className='border'><h3 className='mobile sm:desktop p-4'>Measure 2</h3></div>
                <div className='border'><h3 className='mobile sm:desktop p-4'>Measure 3</h3></div>
                <div className='border'><h3 className='mobile sm:desktop p-4'>Measure 4</h3></div>
                <div className='border'><h3 className='mobile sm:desktop p-4'>Measure 5</h3></div>


                </div>
            </div>
            <div>
                <h2 className='mobile sm:desktop py-10'>Check out our latest workshops and reports</h2>
                <h3 className='mobile sm:desktop'>Here perhaps we could use something similar to the news cards on the home page. Then the content team can add, remove or update the cards on the cms. 
                <br />
                similarly to the top X section this could be an array in sanity so the team can choose the order etc. 
                <br />
                Would need to improve the news card component that exists already.  
                </h3>
                <div className='py-10 grid grid-cols-4 gap-4'>
                    <div className='h-64 rounded-cl border'>
                        <div className='p-4'>
                        <h3 className='mobile sm:desktop py-4'>Workshop</h3>
                        <Link href='/bouw' className='link-interaction text-green-500 py-4'>
                            <span>Link to pdf</span>
                        </Link>
                        </div>
                    </div>
                    <div className='h-64 rounded-cl border'>
                        <div className='p-4'>
                        <h3 className='mobile sm:desktop py-4'>Workshop</h3>
                        <Link href='/bouw' className='link-interaction text-green-500 py-4'>
                            <span>Link to pdf</span>
                        </Link>
                        </div>
                    </div>
                    <div className='h-64 rounded-cl border'>
                        <div className='p-4'>
                        <h3 className='mobile sm:desktop py-4'>Workshop</h3>
                        <Link href='/bouw' className='link-interaction text-green-500 py-4'>
                            <span>Link to pdf</span>
                        </Link>
                        </div>
                    </div>
                    <div className='h-64 rounded-cl border'>
                        <div className='p-4'>
                        <h3 className='mobile sm:desktop py-4'>Workshop</h3>
                        <Link href='/bouw' className='link-interaction text-green-500 py-4'>
                            <span>Link to pdf</span>
                        </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}