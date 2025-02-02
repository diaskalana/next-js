export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-5 text-center text-white text-4xl font-sans shadow-lg fixed top-0 left-0 w-full flex justify-between items-center z-50">
        <h1 className="font-bold text-3xl tracking-wider text-yellow-400 drop-shadow-lg">
          Next.js Project
        </h1>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a href="#home" className="relative transition duration-300">
                Home
                <span className="absolute inset-0 bg-yellow-400 opacity-0 transition duration-300 transform scale-105 rounded-lg"></span>
              </a>
            </li>
            <li>
              <a href="#features" className="relative transition duration-300">
                Features
                <span className="absolute inset-0 bg-yellow-400 opacity-0 transition duration-300 transform scale-105 rounded-lg"></span>
              </a>
            </li>
            <li>
              <a
                href="#get-started"
                className="relative transition duration-300"
              >
                Get Started
                <span className="absolute inset-0 bg-yellow-400 opacity-0 transition duration-300 transform scale-105 rounded-lg"></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="relative transition duration-300">
                Contact
                <span className="absolute inset-0 bg-yellow-400 opacity-0 transition duration-300 transform scale-105 rounded-lg"></span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow bg-white p-10 text-center text-black text-xl font-sans mt-20">
        <section className="my-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-center p-10 animate-fade-in rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105 hover:rotate-2 max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-5 animate-slide-in drop-shadow-lg">
            Welcome to the Next.js Project
          </h2>
          <p className="text-2xl animate-fade-in drop-shadow-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            ut.
          </p>
        </section>
        <section className="my-10 p-10 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105 hover:rotate-2 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-5 animate-slide-in drop-shadow-lg">
            Features
          </h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-2xl space-y-3">
            <li className="mb-2 text-lg animate-fade-in">
              Fast and responsive
            </li>
            <li className="mb-2 text-lg animate-fade-in">SEO friendly</li>
            <li className="mb-2 text-lg animate-fade-in">Easy to customize</li>
            <li className="mb-2 text-lg animate-fade-in">
              Powered by Next and Tailwind CSS
            </li>
          </ul>
        </section>
        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-5">Get Started</h2>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="mt-5 px-6 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition duration-300">
            Learn More
          </button>
        </section>
      </main>
      <footer className="bg-black p-5 text-center text-white text-xl font-sans shadow-lg fixed bottom-0 left-0 w-full z-50">
        © 2024 Next.js Project. All rights reserved.
      </footer>
    </div>
  );
}
