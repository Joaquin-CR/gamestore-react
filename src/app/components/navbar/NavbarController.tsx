'use client';
import { useRouter } from 'next/navigation';

export default function NavbarController() {
  const router = useRouter();

  function goTo(path: string) {
    router.push(path);
  }
  return { goTo };
}
