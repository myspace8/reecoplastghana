import Image from 'next/image'
import SexLink from '../app/components/sexLink';

export default function Home() {
  return (
    <main className="">
      <div className="mt-2 lg:m-8 p-2 bg-white shadow-md rounded-sm">
        <SexLink />
      </div>
    </main>
  )
}
