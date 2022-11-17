import React from 'react';
import {List} from "@mui/material"
import DraggableAnswerRow from '../../components/DraggableAnswerRow/DraggableAnswerRow';
const Answerbank = ({answers, dragItem, dragOverItem, handleSort, answerBank, setAnswerBank}) => {
    return(
        <div>
            <List>
                {
                    answers.map((e, i) => {
                        return <DraggableAnswerRow key={i} answer={e.base_stat} index={i} dragItem={dragItem} dragOverItem={dragOverItem} handleSort={handleSort} answerBank={answerBank} setAnswerBank={setAnswerBank}/>
                    })
                }
            </List>
        </div>
    )
}

export default Answerbank;