import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


interface ChoiceProps {
    signUp: boolean;
    setSignUp: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUp = ({ choice }: { choice: ChoiceProps }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setSignUp } = choice;

    const handleSwitch = () => {
        setSignUp(!choice.signUp)
    }
    const navigate = useNavigate();

    const handleSubmit = async () => {

        await axios.post("http://localhost:3000/api/v1/user/signup", {
            name,
            email,
            password
        }).then(() => {
            alert("You have successfully signed up")
        }).catch(() => {
            alert("Failed to sign up")
        })
    }


    return (
        <>

            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                            <input onChange={(e) => {
                                return setName(e.target.value)
                            }} type="name" name="name" id="name" placeholder="Name ..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input onChange={(e) => {
                                return setEmail(e.target.value)
                            }}
                                type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                            <input onChange={(e) => {
                                return setPassword(e.target.value)
                            }} type="password" name="password" id="password" placeholder="••••••••" autoComplete="new-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button onClick={handleSubmit} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a onClick={handleSwitch} href="#" className="font-medium text-primary-600 hover:underline">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp 