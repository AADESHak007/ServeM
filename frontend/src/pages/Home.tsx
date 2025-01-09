import Navbar from "../components/Navbar"

function Home() {
  return (
    <main className="p-3 max-w-screen h-screen bg-yellow-100">
      <header className="w-full h-[10%] p-1 mb-3 border-b-2 border-gray-200 bg-yellow-100">
        <Navbar />
      </header>
    </main>
  )
}

export default Home