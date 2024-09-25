import { PAGES } from '@/lib/constants/pages'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect(PAGES.LOGIN)
}
