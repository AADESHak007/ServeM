import LeafletMap from "../components/LeafletMap"
import Navbar from "../components/Navbar"


const Map = () => {
  return (
    <div className="relative max-w-screen h-screen bg-[#fffaf4] p-1">
      <header>
        <Navbar />
      </header>
      <section className="absolute top-32 left-28 map w-[80%] h-[70%] border border-black">
        <LeafletMap />
      </section>
    </div>
  )
}

export default Map