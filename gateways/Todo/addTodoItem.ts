export type addTodoItem = (item: string) => { success: boolean; error?: boolean };

export const addTodoItem: addTodoItem = (item) => {
    // Do something with it

    return { success: true };
};
