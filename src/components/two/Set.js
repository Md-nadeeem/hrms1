"use client"
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Profile1 from './Profile1';
import Profile2 from './Profile2';
import Profile3 from './Profile3';

const Set= () => {
  const [visible, setVisible] = useState(false);
 

  const showModal = () => {
    setVisible(true);
    
  };

 

  const handleClose = () => {
    setVisible(false);
  
  };

  

 

  return (
    <div className='bg-blue-200 h-screen flex justify-center items-center'>
      <Button type="primary" onClick={showModal} className='bg-blue-500'>
        Edit
      </Button>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleClose}
        okText="continue"
        >
    <Profile1 />
     <Profile2 />
         <Profile3 />
      </Modal>
    </div>
  );
};

export default Set;
