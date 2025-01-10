
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Complaint = () => {
const [file, setFile] = useState(null);
const [message, setMessage] = useState("") ;
const [loading, setLoading] = useState(false);
const navigate = useNavigate() ;

const handleFileChange = (e:any) => {
  setFile(e.target.files[0]);
};
const handleMessage = (e:any) => {
  setMessage(e.target.value);
};
const handleSubmit = async (e:any) => {
  e.preventDefault();
  if (!file || !message) {
    alert("Please provide both a file and a complaint message.");
    return;
  }
  setLoading(true);
  const formData = new FormData();
  formData.append("file", file);
  formData.append("complaint", message);
  console.log(formData);
  const token =localStorage.getItem("token") ;
  console.log(token);
  // Send the data to your server here.
   await axios.post("http://localhost:3000/api/v1/complaint/filecomplaint" ,formData,{
    headers:{
      "Content-Type" :"multipart/form-data" ,
      "Authorization": `Bearer ${token}` 
    }
   }
   ).then(()=>{
    alert("Complaint submitted successfully");
    setFile(null);
    setMessage("");
   }).catch((error:any)=>{
    console.log(error);
    alert("Failed to submit complaint. Please try again.");
   }).finally(()=>{
    setLoading(false);
    navigate('/')
   })

}

  return (
    <main className='max-w-screen h-screen p-1 bg-[#fffaf4]'>
      <header className='w-full h-20'>
        <Navbar />
      </header>
      <div className='w-full h-[70vh] p-1 flex justify-center items-center'>
       <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <label className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
        <input onChange={handleFileChange} className="block w-full text-sm p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea id="message" onChange={handleMessage} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        <button className='px-3 py-2 text-white bg-black'>
          SUBMIT
        </button>
      </form>
    </div>
    </main>
  )
}

export default Complaint