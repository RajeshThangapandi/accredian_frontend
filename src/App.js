import React, { useState } from 'react';

import HowItWorks from './components/HowItWorks';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ReferModal from './components/ReferModal';
import ContactSection from './components/ContactSection';
import Hero from './components/Hero';
import '../src/components/styles/tailwind.css';
import axios from 'axios';

const App = () => {

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    yourName: '',
    yourEmail: '',
    friendsName: '',
    friendsEmail: '',
    courseId: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
axios.post('https://accredian-backend-s4na.onrender.com/referrals', form)
  .then(response => {
    console.log('Success:', response.data);
   
    console.log(form);
    handleClose();
  })
  .catch(error => {
    console.error('Error:', error);
  });

   
  };

  return (
    <>
   
   <Hero onOpenModal={handleOpen}/>
    <ReferralBenefits onOpenModal={handleOpen} />
    
    

    <ReferModal
      open={open}
      onClose={handleClose}
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />

  </>
  );
};

export default App;