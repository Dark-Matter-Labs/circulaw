import FeedbackComponent from '@/components/forms/feedback';
import { Suspense } from 'react';

export const metadata = {
  title: 'Met jouw hulp maken we CircuLaw beter - CircuLaw',
};

export default function FeedbackPage() {
  return (
    <Suspense>
      <FeedbackComponent />
    </Suspense>
  );
}
