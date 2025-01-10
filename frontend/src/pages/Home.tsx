import Navbar from "../components/Navbar"
import image from "../assets/DALL·E 2025-01-09 18.12.10 - A modern and eco-friendly cityscape focusing on waste management and recycling. The illustration shows smart bins with digital interfaces and sensors,.webp"
import Card from "../components/Card"
import TestimonialCard from "../components/TestimonialCard"
import FAQSection from "../components/FAQSection"
import Footer from "../components/Footer"

function Home() {
  return (
    <main className="p-3 max-w-screen bg-yellow-50">
      <header className="w-full h-20 p-1 mb-3 border-b-2 border-gray-200 bg-yellow-50">
        <Navbar />
      </header>
      <section className="w-full h-[70vh] p-1  flex justify-center">
        <div className="w-[35%] h-full flex flex-col justify-between p-1 ">
          <div className={`imageDiv w-[96%] h-[45%] transform origin-top-left rotate-[3deg] border border-black rounded-md`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          </div>
          <div className="w-full h-50% mt-3 p-2">
            <h2 className="text-xl font-semibold text-center text-gray-900">
              Our mission
            </h2>
            <p className="text-sm text-gray-700">
              We strive to create a sustainable and innovative community where everyone has access to a safe, healthy, and clean environment.
            </p>
          </div>
        </div>
        <div className="relative textDiv w-full h-full p-1 ">
          <h1 className="absolute top-6 left-36 font-semibold tracking-wider text-5xl ">
            S E R V E  M
          </h1>
          <h2 className="absolute top-20 left-20 font-semibold tracking-wider text-2xl ">
            Serving your community through sustainable and innovative solutions
          </h2>
          <div className={`absolute imageDiv w-[40%] h-[45%] bottom-0 right-0 border border-black rounded-md`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          </div>
        </div>
      </section>
      <section className="services max-w-screen min-h-[75vh] p-3 border border-black rounded-lg bg-zinc-900">
        <div className="w-full h-[30%] p-1 flex justify-between border border-gray-300 items-center ">
          <h1 className="text-4xl font-semibold text-white tracking-wide px-2 py-2">OUR SERVICES</h1>
          <p className="text-xs font-regular text-white tracking-wide w-80 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officiis quo velit minus. Ipsam iure quo rerum quam, vel tempora.</p>
        </div>
        <div className="w-full h-[65%] mt-1 p-3 border border-white flex justify-between items-end">
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      
      <section className="impacts max-w-screen min-h-[75vh] border border-black bg-[#57534E] rounded-md">
        <div className="w-full h-[30vh] p-2 rounded-b-[4rem] bg-zinc-900 flex flex-col gap-5 items-center border border-white">
          <h1 className="text-3xl font-semibold text-white tracking-wide">Environmental Impact</h1>
          <p className="w-[70%] text-sm font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium aliquid sequi ad unde impedit at sapiente autem repellat culpa!</p>
          <div className="w-full h-[70%] p-1 flex justify-around items-center">
            <section className="flex flex-col justify-between items-center">
              <h1 className="text-3xl font-semibold text-white">30 %</h1>
              <h3 className="text-md font-bold text-white">REDUCE PLASTIC WASTE</h3>
            </section>
            <section>
              <h1 className="text-3xl font-semibold text-white">50 %</h1>
              <h3 className="text-md font-bold text-white">REDUCE PLASTIC WASTE</h3>
            </section>
            <section>
              <h1 className="text-3xl font-semibold text-white">60 %</h1>
              <h3 className="text-md font-bold text-white">REDUCE PLASTIC WASTE</h3>
            </section>
          </div>
        </div>
        <div className="w-full h-[60vh] bg-[#57534E]">
          <section className="w-full h-[15vh] p-4 flex justify-between items-center">
            <h1 className="text-3xl ml-12 font-bold text-white">Testimonials</h1>
            <div className=" p-1 mr-12">
              <button className="px-3 py-1 mx-1 rounded-full border border-white"> L </button>
              <button className="px-3 py-1 mx-1 rounded-full border border-white"> R </button>
            </div>
          </section>
          <section className="w-full h-[43vh] p-1">
            <TestimonialCard />
          </section>
        </div>
      </section>
      <section className="FAQS max-w-screen min-h-[75vh] p-3 border border-black rounded-md">
        <FAQSection />
      </section>
      <footer className="max-w-screen min-h-[75vh] p-3 bg-black">
        <Footer />
      </footer>
    </main>
  )
}

export default Home