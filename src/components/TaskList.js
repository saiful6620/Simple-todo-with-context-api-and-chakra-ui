import React, { useContext } from 'react'
import { Text } from '@chakra-ui/react'
import { AppContext } from '../context/ContextProvider'
import Task from './Task';
import AddButton from './AddButton'

function TaskList() {
    const [state] = useContext(AppContext);
    const { tasks } = state;
    return (
        <>
            <Text fontSize={20} fontWeight={700} mb={2}>Task List</Text>
            {
                tasks.map((task, index) => {
                    return <Task key={task.id} task={task} index={index + 1} />
                })  
            }

            {
                tasks.length === 0 && <AddButton index={0} />
            }
        </>
    )
}

export default TaskList
