export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_TASK':
            const draftTasks = [...state.tasks];
            draftTasks.splice(payload.index, 0, payload.task);
            const draftState = {...state, tasks: draftTasks, selected: payload.index}
            return draftState;
            
        case 'SELECT_TASK':
            return {...state, selected: payload.index}   

        case 'UPDATE_TASK':
            return {...state, tasks: payload.tasks }   

        default:
            return state;
    }
}
