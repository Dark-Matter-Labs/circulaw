import { Suspense } from 'react';

import FeedbackComponent from '@/components/forms/feedback';

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
