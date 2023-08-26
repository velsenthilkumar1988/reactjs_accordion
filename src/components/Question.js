
import { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const Question = () => {
    const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className='container question --card'>
        <div className='question-title --flex-between'>
            <h4 className='--text-p --fw-bold'>Can I Learn React</h4>
            <button className='question-icon'>
                {
                    showAnswer?(
                        <AiOutlineMinus color='red'/>
                    ) : (
                        <AiOutlinePlus color="green"/>
                    )
                }
            </button>
        </div>
    </div>
  )
}

export default Question;