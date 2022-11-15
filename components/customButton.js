import Link from 'next/link'

export default function CustomButton() {
    return (
        <>
                  <button
                    type='button'
                    className='inline-block rounded-full items-center px-4 py-2 border border-green1 button text-green1 bg-transparent hover:bg-green1 hover:text-white1 transition ease-in-out hover:duration-150 '
                  >
                    <Link href={file.href}>
                      <a>{file.buttonText} →</a>
                    </Link>
                  </button>
        </>
    )
}


// number of characters in largest button string = 24 max len = 25

// Nav (homepage button to scroll down)
// className='inline-flex rounded-full items-center px-4 py-2 border border-green1 button text-green1 bg-blush2 hover:bg-green1 hover:text-white1 focus:outline-none'

// section-action-panel
// className='inline-flex rounded-full items-center px-4 py-2 border border-green1 button text-green1 bg-transparent hover:bg-green1 hover:text-white1 focus:outline-none'

// section-action-list (see if i can change inline block to inline flex here)
// className='inline-block rounded-full items-center px-4 py-2 border border-green1 button text-green1 bg-transparent hover:bg-green1 hover:text-white1 transition ease-in-out hover:duration-150 '

// contact page button (there are two the same)
// className='inline-flex rounded-full items-center px-4 py-2 border border-green1 button text-green1 bg-white hover:bg-greenLink focus:outline-none'

// pages/houtbouw/gemeentelikle (same button on all three special measures)
// className='inline-flex rounded-full items-center px-4 py-2 border border-green2 button text-white1 bg-green2'

// other buttons on pages/measures -- this should become one once both [measures].js is created

// the tooltip components there are some buttons... I think it is the grey ones ?