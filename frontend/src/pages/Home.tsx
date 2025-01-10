import Navbar from "../components/Navbar"
import image from "../assets/DALL·E 2025-01-09 18.12.10 - A modern and eco-friendly cityscape focusing on waste management and recycling. The illustration shows smart bins with digital interfaces and sensors,.webp"
import image2 from "../assets/DALL·E 2025-01-10 22.40.41 - A modern, cleanly designed street view map featuring a random urban area as the base location. The map has four distinct markers representing dustbins.webp"
import image3 from "../assets/DALL·E 2025-01-10 23.14.09 - A visually engaging user interface for a mobile app that provides data insights on collected bin fill level data. The design showcases a dashboard wit.webp"
import Card from "../components/Card"
import TestimonialCard from "../components/TestimonialCard"
import FAQSection from "../components/FAQSection"
import Footer from "../components/Footer"

function Home() {
  const CardData = [
    {img:image,title:"Smart E-Bins with Fill Level Indicator",description:"Monitor your e-waste bin's fill level with our smart sensor, so you know when it's time to recycle, with a convenient visual indicator."},
    {img:image2,title:"Locate the Nearest E-Bins",description:"Easily locate nearby e-bins and see if they have space.."},
    {img:image3,title:"Data Analytics and Insights",description:"Interface showing data insights for bin fill levels. It includes charts, maps, and key statistics for real-time analytics"},
  ]


  return (
    <main className="p-3 max-w-screen bg-[#fffaf4]">
      <header className="w-full h-20 p-1 mb-3 border-b-2 border-gray-200 bg-[#fffaf4]">
        <Navbar />
      </header>
      <section className="w-full h-[70vh] p-1 mb-12 flex justify-center">
        <div className="w-[35%] h-full flex flex-col justify-between p-1 ">
          <div className={`imageDiv w-[96%] h-[60%] transform origin-top-left border border-black rounded-br-[4rem]`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          </div>
          <div className="w-full h-50% mt-3 p-2">
            <p className="text-sm font-semibold text-gray-500">
              We strive to create a sustainable and innovative community where everyone has access to a safe, healthy, and clean environment.
            </p>
          </div>
        </div>
        <div className="relative textDiv w-full h-full p-1 ">
          <h1 className="absolute top-12 left-36 p-2 rotate-[9deg] font-semibold rounded-lg text-white bg-black tracking-wider text-5xl ">
            S E R V E  M
          </h1>
          <h2 className="w-[35vw] absolute top-40 left-20 font-semibold tracking-wider  text-5xl ">
         sustainable and innovative solutions
          </h2>
          <div className={`absolute imageDiv w-[40%] h-[70%] bottom-0 right-0 border border-black  rounded-bl-[4rem]`}
            style={{
              backgroundImage: `url(${image2})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          >
          </div>
        </div>
      </section>
      {/* services-section */}

      <section className="services max-w-screen min-h-[75vh] mb-12 p-7 border border-black rounded-[4rem] bg-zinc-900">
        <div className="w-full h-[30%] p-1 flex justify-between items-center ">
          <h1 className="text-4xl font-semibold text-white tracking-wide px-2 py-2">OUR SERVICES</h1>
          <p className="text-xs font-regular text-white tracking-wide w-80 ">"Efficient Routes, Effective Results," "Smart Tracking, Smart Disposal," "Waste Management, Streamlined"</p>
        </div>
        <div className="w-full h-[65%] mt-5 p-3 flex justify-between items-end">
          {CardData.map((card, index) => (
            <Card key={index} img={card.img} title={card.title} description={card.description} />
          ))}
          
        </div>
      </section>

      {/* Impact-Page */}

      <section className="impacts max-w-screen min-h-[75vh] mb-12 border border-black rounded-[4rem] bg-[#57534E]">
        <div className="w-full h-[30vh] p-3 rounded-[4rem] bg-zinc-900 flex flex-col gap-5 items-center ">
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
        <div className="w-full h-[60vh] rounded-b-[4rem] bg-[#57534E]">
          <section className="w-full h-[15vh] p-7 mt-3 flex  justify-between items-center">
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

      {/* faq-page */}

      <section className="FAQS max-w-screen min-h-[75vh] p-3 mb-8 ">
        <FAQSection />
      </section>
      <footer className="max-w-screen rounded-[4rem] min-h-[60vh] p-3 bg-black">
        <Footer />
      </footer>
    </main>
  )
}

export default Home
