import {withTodoItems} from "./withTodoItems";

jest.mock('../gateways/Todo/getTodoItems', () => ({
    getTodoItems: () => (['Todo 1', 'Todo 2'])
}))

describe('withTodoItems', () => {
    it('adds Todo Items to the context object', () => {
        const stubReturn = Symbol()

        const stub = jest.fn().mockReturnValue(stubReturn);

        const callback = withTodoItems(stub)

        const result = callback({foo: 'bar'})

        expect(stub).toHaveBeenCalledWith({todoItems: ['Todo 1', 'Todo 2'], foo: 'bar'})

        expect(result).toEqual(stubReturn)
    });
})