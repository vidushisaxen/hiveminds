import React from 'react';
import styles from "./styles.module.css";
import Link from 'next/link';

const PlainButton = ({text,link,...props}) => {
  return (
    <Link {...props} href={link} className={`${styles.buttonPlain} relative overflow-hidden border-[1.5px] border-[#134BD6] rounded-[40px]  text-[0.97vw] font-light  h-fit flex items-center justify-center text-center` }
    data-text={`${text}`} >
        <span className='text-[0.97vw] font-light leading-[1]'>{`${text}`}</span>
    </Link>
  );
};

export default PlainButton;
