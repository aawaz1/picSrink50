export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Our Image Compressor</h1>
          <p className="text-lg">
            Easily compress images to less than <span className="font-semibold">50 KB</span> while maintaining high quality.  
            Fast, efficient, and free to use!
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">1. Upload Your Image</h3>
              <p className="text-gray-700">Select any image you want to compress.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">2. Automatic Compression</h3>
              <p className="text-gray-700">Our smart algorithm reduces the file size while maintaining quality.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">3. Download & Use</h3>
              <p className="text-gray-700">Download your optimized image in seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Image Compressor?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">💡 High Quality</h3>
              <p className="text-gray-600">Keep your images sharp and clear.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">🚀 Fast & Free</h3>
              <p className="text-gray-600">No sign-up required, instant compression.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">🔒 Secure</h3>
              <p className="text-gray-600">Your images are processed securely without being stored.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-600 text-white py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Try It Now!</h2>
          <p className="text-lg mb-6">Compress your images instantly with our smart tool.</p>
          <a
            href="/"
            className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Compress Your Image
          </a>
        </div>
      </section>
    </div>
  );
}
