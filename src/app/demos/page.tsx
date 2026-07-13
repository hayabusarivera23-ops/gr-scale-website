import type { Metadata } from 'next'
import DemoTheater from '@/components/DemoTheater'

export const metadata: Metadata = {
  title: 'Demo Theater — GR Scale | Live Websites for Local Service Businesses',
  description: 'Real client work and 13 live industry demos, viewable right on the page. See exactly what your business could look like online — roofing, plumbing, HVAC, barbershops, and more.',
}

export default function DemosPage() {
  return <DemoTheater />
}
