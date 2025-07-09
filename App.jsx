
import { useState } from 'react'
import './index.css';  // or './App.css' depending on where you added Tailwind


import Input from './Components/input';
import "./App.css"
function App() {
    const [formData, setFormData] = useState ({
        name:"",
        email:"",
        message:"", 

    })
    const  handleChange = (event) => {
        

        
        const { name, value } = event.target
        setFormData((prev) => ({...prev, [name]: value }))
    }
    const handleSubmit = (event) => {
event.preventDefault();
        console.log("Form submitted", formData)
    }
    return (
    <div className="flex justify-center h-screen items-center bg-gray-100">
        <form className="flex flex-col w-md gap-2 bg-white shadow-lg p-8 border-white rounded-md">
            <h1 className="text-2xl font-md">Contact Form</h1>
            <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
            <input name="name" id="name" className="border rounded-md" value={formData.name} onChange={handleChange}/>

            <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
            <input name="email" id="email" className="border rounded-md" value={formData.email} onChange={handleChange}/>

            <label htmlFor="message" className="text-gray-700 font-medium">Message</label>
            <textarea name="message" id="message" rows={4} className = "border rounded-md" value={formData.message} onChange={handleChange}/>
            <button className="bg-indigo-600 px-2 py-4 border-indigo-700 rounded-md text-white hover:big-indigo-700" onClick={handleSubmit}>SUBMIT</button>

        </form>
    </div>
    )
}
export default App