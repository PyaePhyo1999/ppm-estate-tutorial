import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0cdaccab-ed93-4c88-b15f-eca318a21c07");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult();
    }
  };

  return (
    
  <motion.div 
  initial={{opacity:0, x: -200}}
  transition={{duration:1}}
  whileInView={{opacity:1,x:0}}
  viewport={{once:true}}
  className='container px-6 py-10
    mx-auto w-full overflow-hidden md:px-20' id='Contact'>
   <h1 className='text-2xl sm:text-4xl mb-2 font-bold text-center'>Contact
       <span className='underline underline-offset-4 decoration-1 under font-light'> With Us</span></h1>
   <p className='text-center mx-auto text-gray-500 max-w-80 mb-8'>Ready to Make a Move? Let Build Your Future Together</p>

   <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-4 flex flex-col items-center'>
      <div className='flex flex-wrap'> 
        <div className='w-full text-left md:w-1/2 mt-2'>
        Your Name
        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' 
        type="text" name='Name' placeholder='Your Name' required />
        </div>
        <div className='w-full text-left md:w-1/2 md:pl-4 mt-2'>
        Your Email
        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' 
        type="email" name='Email' placeholder='Your Email' required />
        </div>
      </div>
        <div class="w-full text-left my-6">
               Message
               <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' 
               type="message" name='Message' placeholder='Your Message' required></textarea>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 mb-4 rounded'>{result ? result : "Send Message"}</button>
  </form>
   </motion.div>

  )
}

export default Contact