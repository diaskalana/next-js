export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black p-5 text-center text-white text-4xl font-sans shadow-lg fixed top-0 left-0 w-full">
        <h1 className="font-bold">Next.js Project</h1>
      </header>
      <main className="flex-grow bg-white p-10 text-center text-black text-xl font-sans mt-20">
        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-5">
            Welcome to the Next.js Project
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            ut.
          </p>
        </section>
        <section className="my-10">
          <h2 className="text-3xl font-semibold mb-5">Features</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-2xl">
            <li className="mb-2">Fast and responsive</li>
            <li className="mb-2">SEO friendly</li>
            <li className="mb-2">Easy to customize</li>
            <li className="mb-2">Powered by Next and Tailwind CSS</li>
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
      <footer className="bg-black p-5 text-center text-white text-xl font-sans shadow-lg fixed bottom-0 left-0 w-full">
        © 2024 Next.js Project. All rights reserved.
      </footer>
    </div>
  );
}
