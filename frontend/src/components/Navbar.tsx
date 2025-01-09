import LOGO from '../assets/logo2-servem.png'
const Navbar = () => {
  return (
    <main className="w-full h-full p-1 flex justify-between items-center">
        <div className="Links w-[35%] h-full p-1 border border-black flex justify-evenly items-center">
            <h1 className="text-sm font-bold font-sans">Home</h1>
            <h1 className="text-sm font-bold font-sans">Services</h1>
            <h1 className="text-sm font-bold font-sans">About Us</h1>
            <h1 className="text-sm font-bold font-sans">Contact</h1>
            <h1 className="text-sm font-bold font-sans">Review</h1>
        </div>
        <div className="Logo w-[20%] h-full p-1 border border-black flex gap-4 items-center">
            <img className='w-[60%] h-full object-fit' src={LOGO} alt="LOGO" />
        </div>
        <div className="LogInStatus w-[16%] h-full p-2 border border-black flex justify-center gap-7 items-center">
            <div className="avatar h-8 w-8 flex justify-center items-center rounded-full border border-black">
                A
            </div>
            <button className="px-2 py-1 rounded-md bg-black text-white text-md font-semibold">
                Log In
            </button>
        </div>
    </main>
  )
}

export default Navbar