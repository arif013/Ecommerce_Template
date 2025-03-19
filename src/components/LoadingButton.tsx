import { useState } from 'react';

interface LoadingButtonProps {
  isLoading?: boolean;
  onClick: () => void | Promise<void>;
  text?: string;
}

const LoadingButton = (props: LoadingButtonProps) => {
  const { isLoading, onClick, text } = props;

  const [isInternalLoading, setIsInternalLoading] = useState(false);

  const handleClick = async () => {
    setIsInternalLoading(true);
    try {
      await onClick();
    } finally {
      setIsInternalLoading(false);
    }
  };

  if (isLoading || isInternalLoading) {
    return <button className='items-left text-white bg-black p-[10px] w-full'  disabled>Adding...</button>;
  }

  return <button className='items-left text-white bg-black p-[10px] w-full'  onClick={handleClick}>{text}</button>;
};

export default LoadingButton