import CustomButton from './custom-button'
import { ArrowRightIcon } from '@heroicons/react/outline'


export default function NewThemaSuggestion() {
    return (
        <>
        <div className="h-32 w-[728px] hidden bg-green-500 rounded-cl sm:flex flex-row items-center justify-between shadow">
            <div className='ml-8'>
                icon
            </div>
            <div>
                text
            </div>
            <div className='mr-12'>
            <CustomButton color='home'> hello
            <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />
            </CustomButton>
            </div>
            
        </div>
        </>
    )
}