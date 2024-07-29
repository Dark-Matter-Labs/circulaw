import FeedbackComponent from '@/components/forms/feedback';
import { Suspense } from 'react';

export default function FeedbackPage() {
    return (
        <Suspense>
            <FeedbackComponent />
        </Suspense>
    )
}