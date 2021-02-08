import {getTodoItems} from "../gateways/Todo/getTodoItems";

type withTodoItemsReceiver = ({todoItems}) => any

type withTodoItems = (receiver: withTodoItemsReceiver) => (context: any) => any

export const withTodoItems: withTodoItems = (receiver) => {
    const todoItems = getTodoItems()
    return (context) => receiver({todoItems, ...context})
}

