import { Cloud, Shield, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <Cloud className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold">T4S Drive</span>
        </div>
        <div className="hidden items-center space-x-8 md:flex">
          <Link
            href="#features"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
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

          {children}

          <p className="pt-4 text-sm text-gray-400">
            Free 15GB storage • No credit card required
          </p>
        </div>
      </main>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
              <Shield className="h-8 w-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold">Secure Storage</h3>
            <p className="text-gray-400">
              Your files are encrypted and protected with enterprise-grade
              security.
            </p>
          </div>

          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
              <Zap className="h-8 w-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold">Lightning Fast</h3>
            <p className="text-gray-400">
              Upload and download files at blazing speeds with our global CDN.
            </p>
          </div>

          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
              <Users className="h-8 w-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold">Easy Sharing</h3>
            <p className="text-gray-400">
              Share files and folders with anyone, with granular permission
              controls.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-800 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center space-x-2 md:mb-0">
            <Cloud className="h-6 w-6 text-gray-400" />
            <span className="text-gray-400">
              © 2024 T4S Drive. All rights reserved.
            </span>
          </div>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
