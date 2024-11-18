import React from 'react';
import styles from "./styles.module.css";
import Link from 'next/link';

const TrialButton = ({text,link}) => {
  return (
    <Link href={link}
    >
    <div className=" h-fit flex items-center justify-center text-center ">
      <div
        className={`${styles.buttonPlain} relative overflow-hidden border-[1.5px] border-[#134BD6] rounded-[40px] text-[#111111] text-[0.97vw] font-light ` }
        data-text={`${text}`}
      >
        <span className='text-[0.97vw] font-light '>{`${text}`}</span>
      </div>
    </div>
    </Link>
  );
};

export default TrialButton;
