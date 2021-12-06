import React, { useContext } from 'react';
import { Box, Button } from '@chakra-ui/react'
import { AppContext } from '../context/ContextProvider'
import { nanoid } from 'nanoid'

function AddButton({index}) {
    const [state, dispatch] = useContext(AppContext);

    console.log(index);

    const addTask = () => {
        const task = {
            id: nanoid(),
            title: 'New Task Title',
            description: 'Task Description',
            author: {
                name: 'Admin',
                email: 'admin@gmail.com'
            },
            color: {
                red: true,
                green: false,
                yello: false
            }
        }

        dispatch({
            type: 'ADD_TASK',
            payload: {task, index}
        })
    }

    return (
        <Box display="flex" justifyContent="center" mb={2}> 
            <Button colorScheme="green" size="xs" rounded="sm" onClick={addTask}>+ Add</Button>
        </Box>
    )
}

export default AddButton
