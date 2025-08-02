'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = document.cookie.includes('token=');

    if (isLoggedIn) {
      router.replace('/contacts');
    } else {
      router.replace('/signup');
    }
  }, [router]);

  return null;
}
