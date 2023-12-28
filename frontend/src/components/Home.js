import React , {useRef} from "react";
import car1 from '../images/car1.jpg'
import car2 from '../images/car2.jpg'
import car3 from '../images/car3.jpg'
import car4 from '../images/car4.jpg'
import carfive from '../images/carfive.jpg'
import carsix from '../images/carsix.jpg'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const formRef = useRef();
    const handleclick =()=>{
        navigate('/login')

    }
    const handleContactSubmit = async (e) => {
        e.preventDefault();
    
        // Create a new FormData object from the form element
        const formData = new FormData(e.target);
    
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
    
        try {
          // Make a POST request to the backend API endpoint
          const response = await axios.post('https://aftabassignmentbackend.onrender.com/api/contact', {
            name,
            email,
            message,
          });
    
          // Check if the submission was successful
          if (response.data.success) {
            alert('Contact form submitted successfully!');
            // You can also reset the form if needed
            e.target.reset();
          } else {
            alert('Failed to submit the contact form. Please try again.');
          }
        } catch (error) {
          console.error('Error submitting the contact form:', error);
          alert('Internal server error. Please try again later.');
        }
      };
    
  return (
    <div className="w-full bg-gray-100">
      <header className="flex h-20 w-full items-center px-4 md:px-6 bg-blue-500 text-white">
        <div className="w-[150px]">
          <a href="#">
            <CarIcon className="h-6 w-6 text-white" />
            <span className="sr-only">Car Shop</span>
          </a>
        </div>
        <div className="flex w-full justify-center">
          <nav className="hidden lg:flex">
            <ul className="flex space-x-4">
              <li>
                <a href="#homepage">Home</a>
              </li>
              <li>
                <a href="#listings">Listings</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto w-[150px]">
          <button className="text-blue-500 bg-white px-4 py-2 rounded border border-blue-500 " onClick={handleclick}>
            Login
          </button>
        </div>
      </header>
      <main className="container px-4 md:px-6 py-8">
        <section className="w-full py-12 md:py-24 lg:py-32 space-y-8" id="homepage">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500">
            Welcome to Car Shop
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Find your dream car today.
          </p>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 space-y-8" id="listings">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500">Our Listings</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            
              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt={`Car `}
                      className="w-full h-full object-cover object-center"
                      src={car1}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Lambo</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt={`Car `}
                      className="w-full h-full object-cover object-center"
                      src={car2}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Lambo</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt={`Car `}
                      className="w-full h-full object-cover object-center"
                      src={car3}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Lambo</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt={`Car `}
                      className="w-full h-full object-cover object-center"
                      src={car4}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Lambo</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt={`Car `}
                      className="w-full h-full object-cover object-center"
                      src={carfive}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Lambo</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div  className="w-full">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <a href="#">
                    <img
                      alt={`Car `}
                      className="w-full h-full object-cover object-center"
                      src={carsix}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Lambo</h3>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
           
          </div>
          
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500">Contact Us</h2>
        <form className="mt-4 space-y-4" onSubmit={handleContactSubmit}>
          <input
            className="block w-full p-2 border border-gray-300 rounded-md"
            name="name"
            placeholder="Enter your name"
            required
            type="text"
          />
          <input
            className="block w-full p-2 border border-gray-300 rounded-md"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
          />
          <textarea
            className="block w-full p-2 border border-gray-300 rounded-md"
            name="message"
            placeholder="Enter your message"
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Submit</button>
        </form>
      </section>
      </main>
      <footer className="w-full py-12 bg-blue-500 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h3 className="text-lg font-semibold">© 2023 Car Shop. All rights reserved.</h3>
        </div>
      </footer>
    </div>
  );
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
