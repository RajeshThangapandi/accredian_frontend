import React, { useState } from 'react';
import ReferralBenefits from './components/ReferralBenefits';
import ReferModal from './components/ReferModal';
import Hero from './components/Hero';
import { ToastContainer, toast } from 'react-toastify';
import '../src/components/styles/tailwind.css';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
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

 toast.success('Reference Send Successfully..');

    console.log(form);
    handleClose();
  })
  .catch(error => {
    toast.error('Server Error.');
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
