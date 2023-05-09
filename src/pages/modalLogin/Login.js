import React, { useState, useContext, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';
import { Modal } from 'antd';

const Login = () => {
  return (
    <Modal
      centered={centered}
      visible={visible}
      // onOk={onOk}
      // onCancel={onCancel}
      footer={null}
      width={width}
      animationIn={'slideInTop'}
      animationOut={'slideOutTop'}
      className="modalStyle"
      closable={false}
    >
      
    </Modal>
  );
};

export default Login;
