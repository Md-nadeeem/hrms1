


"use client"
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Profile1 from './Profile1';
import Profile2 from './Profile2';
import Profile3 from './Profile3';
import Profile4 from './Profile4';

const Invite = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('');
  const [step, setStep] = useState(1);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('');
    setConfirmLoading(true);
  };

  // Custom handler for closing the modal
  const handleClose = () => {
    setVisible(false);
    setStep(step + 1); // Move to the next step when modal is closed
  };

  return (
    <div className='bg-blue-200 h-screen flex justify-center items-center'>
      <Button type="primary" onClick={showModal} className='bg-blue-500'>
        Edit
      </Button>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleClose} // Assigning the custom handler to onCancel
        okText="Continue"
        okButtonProps={{ style: { backgroundColor: '#1890ff' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        {/* Conditionally render Profile1 based on step */}
        {step == 1 && 
        <Profile1 step={step} setStep={setStep}/>
        }
      {step == 2 && 
        <Profile2 step={step} setStep={setStep}/>
     }
     
      {step == 3 && 
        <Profile3 step={step} setStep={setStep}/>
     }
     {step == 4 && 
        <Profile4 step={step} setStep={setStep}/>
     }
        {/* <Profile2/> */}
    
        <p>{modalText}</p>
      </Modal>
    </div>
  );
};

export default Invite;
