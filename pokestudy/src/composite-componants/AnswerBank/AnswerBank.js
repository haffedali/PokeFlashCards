import React from 'react';
import {List} from "@mui/material"
import DraggableAnswerRow from '../../components/DraggableAnswerRow/DraggableAnswerRow';
const Answerbank = ({answers, dragItem, dragOverItem}) => {
    return(
        <div>
            <List>
                {
                    answers.map((e, i) => {
                        return <DraggableAnswerRow key={i} answer={e} index={i} dragItem={dragItem} dragOverItem={dragOverItem}/>
                    })
                }
            </List>
        </div>
    )
}

export default Answerbank;