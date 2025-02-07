import React, { useState,useEffect} from 'react';
import NavBar from './components/NavBar';
import { Bot } from 'lucide-react';

const ChatBot = () => {
  const prompts=[
    'Book a Doctor appointment',
    'Get Live Scores',
    'Summarize My Performance',
    
  ]
  const [id,setId]=useState()
  useEffect(()=>{
    const val = Math.round(Math.random())*2
    setId(val)
  },[])
  const [messages, setMessages] = useState([]);
  const [isclick,setClick] = useState(false)
  const handleSendMessage = (message) => {
    setClick(true)
    // Add message to state (for demo, you can replace with your logic)
    setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
    // Here you would typically send the message to your AI agent and handle the response
    // For now, let's simulate a response after a short delay
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { text: 'Hello! How can I assist you today?', sender: 'agent' }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
        <NavBar/>
      <div className="flex-1 overflow-y-auto md:px-40">
        <div className="space-y-4 md:mx-10">
            <div className={`my-52 flex flex-col justify-center items-center ${isclick ? "hidden":"block"}`}><p className='p-5 text-xl text-slate-600'>Hello ,I am your Agent</p> <Bot size={32}/></div>
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-2xl ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='px-4'>

      <div className=' justify-center items-center hidden md:flex'> 
        {prompts.map((id,index)=>{
          return (<button onClick={
            ()=>{
              handleSendMessage(prompts[index])
              
            }
          }
          className='bg-slate-600 w-fit p-4 text-white rounded-xl flex justify-center mx-8 '>
          {prompts[index]}</button>
           );
        })}
        </div>

        </div>
        <button
         onClick={
            ()=>{
              handleSendMessage(prompts[id])
              
            }
          }
          className='bg-slate-600 w-fit p-4 text-white rounded-xl flex justify-center mx-8 md:hidden '>
          {prompts[id]}</button>


      <div className="p-4">
        <form
          onSubmit={(e) => {
            setClick(true)
            e.preventDefault();
            const message = e.target.elements.message.value;
            if (message.trim() !== '') {
              handleSendMessage(message);
              e.target.reset();
            }
          }}
        >
            <div className='flex md:justify-center'>
            <input
            type="text"
            name="message"
            placeholder="Type your message..."
            className="w-full md:w-3/4 p-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 justify-center items-center text-lg"
          />
            
            </div>
          
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
