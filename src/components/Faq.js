import React from 'react';
import {PiBooksBold} from "react-icons/pi";
import Question from './Question';

const Faq = () => {
  return (
    <section className='faq-sec --text-center'>
      <div className='container faq'>
        <div className='title --center-all'>
            <PiBooksBold size={50} color='orangered' />
            <h1 className='--mb2'>FAQ</h1>
            <p className='--text-small'>As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation. Bootstrap at its core Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible </p>
            <div className='questions'>
                <Question/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
