import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col justify-center items-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit  items-center justify-center space-x-2 border border-gray-200 overflow-hidden bg-white rounded-full px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 hover:cursor-pointer">
         <p className="text-sm font-semibold text-gray-700">
          Quill is now public!
         </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
