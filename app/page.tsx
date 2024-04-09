import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2">
        <div className="md:h-full h-80 bg-[#F5F5F5] relative overflow-hidden">
          <div className="p-4 flex flex-row">
            <div className="flex-initial font-normal text-zinc-900 text-3xl leading-tight md:text-4xl">
              Traveling
            </div>
            <div className="flex-initial font-semibold text-zinc-900 text-3xl leading-tight md:text-4xl">
              Man
            </div>
          </div>

          <div className="mt-8 px-14">
            <img
              src="/ycombinator/Component.png"
              alt="Sample itinerary graph"
              className="relative object-cover object-center"
            />
          </div>
        </div>


        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            Planning your vacations should not feel like a full time job.
          </h1>
          <p className="text-gray-500">
            Define your needs. Let computers do what they do best. Join the waitlist!
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
