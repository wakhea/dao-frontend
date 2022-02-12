import Image from 'next/image';

const NextImage = ({ ...props }) => {
  return <Image {...props} layout="fill"/>;
};

export default NextImage;
