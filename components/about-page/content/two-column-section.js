import { PortableText } from 'next-sanity'
import {aboutPageReducedPortableTextComponents} from '../../../lib/portable-text/pt-components'
import TitleDecorator from '@/components/title-decorator'


export default function TwoColumnSection({ data }) {
    return (
        <div className="grid grid-cols-2 gap-x-8">
            <div className="flex flex-col max-w-[500px]">
                <div className='mb-2'>
                <h3 className="text-green-500 heading-3xl-semibold">{data?.leftColumnTitle}</h3>
                <TitleDecorator width='w-1/4'/></div>
                <PortableText
                    value={data?.leftColumnContent}
                    components={aboutPageReducedPortableTextComponents} />
            </div>
            <div className="flex flex-col max-w-[500px]">
                <div className='mb-2'>
                <h3 className="text-green-500 heading-3xl-semibold ">{data?.rightColumnTitle}</h3>
<TitleDecorator width='w-1/4'/>
                </div>
                <PortableText
                    value={data?.rightColumnContent}
                    components={aboutPageReducedPortableTextComponents} />
            </div>
        </div>
    )
}