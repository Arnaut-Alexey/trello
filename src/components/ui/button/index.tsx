import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IButtonProps } from './interface';

import styles from './style.module.scss';

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, isDisabled = false, type, path, size, isLoading = false, onClick } = props;

  const navigate = useNavigate();

  const handleClick = () => {

    if (type === 'link' && path) {
      navigate(path)
    }

    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className={`${styles.btn} ${isLoading ? styles.__loading : ''} ${isDisabled ? styles.__disabled : ''} ${type === 'link' ? styles.__link : ''} ${size === 'sm' ? styles.__sm : styles.__md}`}
      onClick={handleClick}
    >
      <span>
        {children}
      </span>
    </button>
  )
}
