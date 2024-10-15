// File: CallToAction.jsx

import RoundedButton from '../RoundedButton';

const CallToAction = () => (
  <div className="py-16 px-8 bg-indigo-600 text-white text-center relative overflow-hidden">
    <h2 className="text-3xl font-bold z-20 relative">Let's Get Started!</h2>
    <p className="mt-4 text-lg z-20 relative">Contact us today to elevate your brand with professional design services.</p>
    <RoundedButton className="mt-8 px-6 py-3 bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition-all duration-300 ease-in-out z-20 relative">
      Contact Us
    </RoundedButton>    
    {/* Background image */}
    <img src="/contact.png" alt="Contact" className="absolute top-0 right-0 bottom-0 object-cover w-auto h-full opacity-40" />
  </div>
);

export default CallToAction;
