import React from 'react';
import styles from "./styles.module.css";
import Link from 'next/link';

const TrialButton = ({text,link}) => {
  return (
    <Link href={link}
    >
    <div className="w-fit h-fit flex items-center justify-center text-center   min-w-[9vw]">
      <div
        className={`${styles.buttonPlain} relative overflow-hidden w-full h-full p-0 border-[1.5px] border-[#134BD6] rounded-[40px] text-[#111111] text-[0.97vw] font-light px-[2vw] py-[1.5vw]` }
        data-text={`${text}`}
      >
        <span className='text-[0.97vw] font-light '>{`${text}`}</span>
      </div>
    </div>
    </Link>
  );
};

export default TrialButton;
