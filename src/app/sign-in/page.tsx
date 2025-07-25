import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <main className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Your files,
            <br />
            <span className="bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
              everywhere
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-300 md:text-2xl">
            Store, sync, and share your files with T4S Drive. Access your
            documents from any device, anywhere in the world.
          </p>

          <SignInButton />
        </div>
      </main>
    </div>
  );
}
