import getTodoItems from '../gateways/Todo/getTodoItems';

type withTodoItemsReceiver = ({ todoItems }) => any;

interface Dependencies {
    getTodoItems: typeof getTodoItems;
}

export const _withTodoItems = (deps: Dependencies) => (receiver: withTodoItemsReceiver) => {
    const todoItems = deps.getTodoItems();
    return (context) => receiver({ todoItems, ...context });
};

export default _withTodoItems({ getTodoItems });
