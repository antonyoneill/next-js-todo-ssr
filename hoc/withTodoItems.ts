import {getTodoItems} from "../gateways/Todo/getTodoItems";

type withTodoItemsReceiver = ({todoItems}) => any

type withTodoItems = (getTodoItems: getTodoItems) => (receiver: withTodoItemsReceiver) => (context: any) => any

export const withTodoItems: withTodoItems = getTodoItems => (receiver) => {
    const todoItems = getTodoItems()
    return (context) => receiver({todoItems, ...context})
}

