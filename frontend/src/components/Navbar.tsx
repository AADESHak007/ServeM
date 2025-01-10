import { Link, useNavigate } from 'react-router-dom'
import LOGO from '../assets/logo2-servem.png'
import { useRecoilState, useRecoilValue } from 'recoil'
import { LoginStatus, User, Userdetails } from '../store/atoms'



const Navbar = () => {
    const [login, setLogin] = useRecoilState(LoginStatus)
    const userInfo = useRecoilValue<User>(Userdetails)
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token')
        setLogin(false);
        navigate('/authlogin')
    }

    return (
        <main className="w-full h-full p-1 flex justify-between items-center">
            <div className="Links w-[35%] h-full p-1 flex justify-evenly items-center">
                {login ? (
                    <>
                        <Link to={'/'} className="text-sm font-bold font-sans">Home</Link>
                        <Link to={'/locations'} className="text-sm font-bold font-sans">Services</Link>
                        <Link to={'/about'} className="text-sm font-bold font-sans">About Us</Link>
                        <Link to={'/contact'} className="text-sm font-bold font-sans">Contact</Link>
                        <Link to={'/complaint'} className="text-sm font-bold font-sans">Report</Link>
                    </>
                ) : (
                    <>
                        <Link to={'/'} className="text-sm font-bold font-sans">Home</Link>
                        
                        <Link to={'/about'} className="text-sm font-bold font-sans">About Us</Link>
                        <Link to={'/contact'} className="text-sm font-bold font-sans">Contact</Link>
                    </>
                )}

            </div>
            <div className="Logo w-[20%] h-full p-1 flex gap-4 items-center">
                <img className='w-[60%] h-full object-fit' src={LOGO} alt="LOGO" />
            </div>
            <div className="LogInStatus w-[16%] h-full p-2 flex justify-center gap-7 items-center">
                {login ? (
                    <>
                        <div className="avatar h-8 w-8 flex justify-center items-center rounded-full border border-black">
                            <h1 className='font-bold'>{userInfo.name.substring(0, 1)}</h1>
                        </div>
                        <button onClick={handleLogout} className="px-2 py-1 rounded-md bg-black text-white text-md font-semibold">
                            Log Out
                        </button>
                    </>
                ) : (
                    <button onClick={() => {
                        navigate('/authlogin')
                    }} className="px-2 py-1 rounded-md bg-black text-white text-md font-semibold">
                        Log In
                    </button>
                )}

            </div>
        </main>
    )
}

export default Navbar