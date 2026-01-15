import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
      <div className="px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            The page you're looking for is being updated.
          </p>
        </div>

        <Link href="/">
          <a className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
