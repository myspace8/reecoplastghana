import Image from "next/image";

  export default function Hero() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 pb-6 pt-16 lg:pt-64 sm:pb-34">
        <Image
          width={1500}
          height={1500}
          src="/plastics_feat.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full md:h[80vh] w-full object-cover object-center md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-100 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[219.5625rem] h-[40rem] bg-gradient-to-tr from-[#302c2ea1] to-[#201f1f57]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#1a141645] to-[#262b2966]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
           
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-white  md:text-6xl md:tracking-tight">
                <span>Transforming waste into</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Sustainable</span> <span>Building Solutions</span>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-8 text-gray-300">
              Build Smart. Build Green.
            </p>
          </div>
        </div>
      </div>
    )
  }
  