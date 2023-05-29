import Link from "next/link";
import Image from "next/image";


export default function SexLink() {
    return (
        <div className="grid grid-cols-2 gap-2 rounded-sm">
          <Link href={'/women'} className="relative">
            <Image
              width={500}
              height={500}
                className="h-[160px] lg:h-[230px] w-full rounded-sm object-cover"
                src={'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'}
                alt={'Women posing'}
              />
              <p className="absolute inset-0 text-2xl text-white tracking-wider font-bold flex hover:shadow-lg items-center justify-center">Women's</p>
          </Link>
          <Link href={'/men'} className="relative">
            <Image
              width={500}
              height={500}
                className="h-[160px] lg:h-[230px] w-full rounded-sm object-cover"
                src={'https://images.unsplash.com/photo-1579635480803-b990e007f508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'}
                alt={'Women posing'}
              />
              <p className="absolute inset-0 text-2xl text-white tracking-wider font-bold flex hover:shadow-lg items-center justify-center">Men's</p>
          </Link>
        </div>
    );
};