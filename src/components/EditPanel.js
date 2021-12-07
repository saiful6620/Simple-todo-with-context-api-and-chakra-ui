import React, { useContext } from 'react';
import { Box, Text,
    FormControl,
    FormLabel, Input 
} from '@chakra-ui/react'
import { AppContext } from '../context/ContextProvider'

function EditPanel() {
    const [state, dispatch] = useContext(AppContext);
    const { selected } = state;
    const task = selected !== null ?  state.tasks[selected] : null;

    const taskUpdateHandler = (e, key, nested=false) => {
        const draftTask = { ...task };
        if (nested) {
            const nKeys = key.split('.');
            draftTask[nKeys[0]][nKeys[1]] = e.target.value;
        }else {
            draftTask[key] = e.target.value;
        }
        const draftTaskList = [...state.tasks ];
        draftTaskList[selected] = draftTask;
        dispatch({
            type: 'UPDATE_TASK',
            payload: {
                tasks: draftTaskList
            }
        })
    }
  
    return (
        task &&
        <Box flex="0 0" flexBasis="auto" width="300px" bg="white" p={4}>
            <FormControl mb={2} id='title'>
                <FormLabel fontSize=".9rem" fontWeight={600}>Title</FormLabel>
                <Input size="xs" value={task.title} onChange={(e) => taskUpdateHandler(e, 'title')} type='text' />
            </FormControl>
            <FormControl mb={2} id='description'>
                <FormLabel fontSize=".9rem" fontWeight={600}>Description</FormLabel>
                <Input size="xs" value={task.description} onChange={(e) => taskUpdateHandler(e, 'description')}  type='text' />
            </FormControl>
            <FormControl mb={2} id='author'>
                <FormLabel fontSize=".9rem" fontWeight={600}>Author</FormLabel>
                <Input size="xs" value={task.author.name} onChange={(e) => taskUpdateHandler(e, 'author.name', true)}  type='text' />
            </FormControl>
            <FormControl mb={2} id='email'>
                <FormLabel fontSize=".9rem" fontWeight={600}>Email</FormLabel>
                <Input size="xs" value={task.author.email} onChange={(e) => taskUpdateHandler(e, 'author.email', true)} type='email' />
            </FormControl>
        </Box>
    )
}

export default EditPanel
