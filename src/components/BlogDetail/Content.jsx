import React from 'react';
import ShareDetails from './ShareDetails';

const Content = ({ slug, date, content }) => {

    return (
        <>
            <section className='h-full w-screen py-[5vw]' id='blog-detail'>
                <div className='container-lg w-full h-full flex items-start justify-between mobile:flex-col'>
                    <ShareDetails slug={slug} date={date} />
                    <div className='w-[60%] h-full space-y-[1.5vw] mobile:w-full mobile:mt-[4vw] mobile:space-y-[4vw]'>
                        <div
                            className=''
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Content;