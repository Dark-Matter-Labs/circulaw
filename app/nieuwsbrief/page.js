import NewsLetterComponent from '@/components/forms/nieuwsbrief';
import { Suspense } from 'react';


export default function NewsLetterPage() {
    return (
        <Suspense>
            <NewsLetterComponent />
        </Suspense>
    )
}