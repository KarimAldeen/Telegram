import React from 'react';
import { UserImageURL } from '../Layout/app/Const';

const useImageError = ({ currentTarget }: any) => {
  currentTarget.onerror = null;
  if (!currentTarget.src) {
    currentTarget.src = UserImageURL || ''; // Set UserImageURL if the src is an empty string
  }
};

export default useImageError;
