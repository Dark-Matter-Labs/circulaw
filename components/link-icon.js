import Image from 'next/image'


export default function LinkIcon() {
    return(
        <span className='pl-1'>
        <Image  
            className='mt-2' 
            alt = 'new tab' src = '/icons/VectornewTab.png' 
            width = {18} 
            height ={18}/>
        </span>
    )
}