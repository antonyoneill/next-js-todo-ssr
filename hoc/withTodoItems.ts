import {getTodoItems} from "../gateways/Todo/getTodoItems";

type withTodoItemsReceiver = ({todoItems}) => any

interface Dependencies {
    getTodoItems: getTodoItems
}

type withTodoItems = (receiver: withTodoItemsReceiver) => (context: any) => any

export const _withTodoItems = (deps: Dependencies): withTodoItems =>  (receiver) => {
    const todoItems = deps.getTodoItems()
    return (context) => receiver({todoItems, ...context})
}

export const withTodoItems: withTodoItems = _withTodoItems({getTodoItems: getTodoItems})