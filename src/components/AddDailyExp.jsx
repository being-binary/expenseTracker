import { useState } from 'react';
import { Button, Modal } from 'antd';
import DailyExpForm from './DailyExpForm';
const AddDailyExp = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button className='text-lg font-semibold text-white uppercase px-3 py-2 bg-green-500 rounded-lg' onClick={showModal}>
        add now
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <DailyExpForm/> 
      </Modal>
    </>
  );
}

export default AddDailyExp
