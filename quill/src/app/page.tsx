import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper className="mb-12 flex flex-col justify-center items-center text-center">
        <div className="mt-28 sm:mt-40 mx-auto mb-4 flex max-w-fit  items-center justify-center space-x-2 border border-gray-200 overflow-hidden bg-white rounded-full px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm animate-in font-semibold text-gray-700">
            Quill is now public!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl md:text-6xl font-bold lg:text-7xl">
          Chat with your <span className="text-blue-600">Documents</span> in
          seconds
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Quill allows you to have conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </p>
        <Link href={'/dashboard'} target="_blank" className="mt-5">
        <Button className="bg-black text-white hover:bg-black">
          Get Started <ArrowRight className="w-5 h-5" />
        </Button>
        </Link>
      </MaxWidthWrapper>
    </div>
  );
}
