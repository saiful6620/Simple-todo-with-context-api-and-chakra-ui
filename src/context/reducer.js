export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_TASK':
            const draftTasks = [...state.tasks];
            draftTasks.splice(payload.index, 0, payload.task);
            const draftState = {...state, tasks: draftTasks}
            return draftState;
        default:
            return state;
    }
}
