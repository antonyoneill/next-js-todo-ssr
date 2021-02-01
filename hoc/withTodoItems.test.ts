import {withTodoItems} from "./withTodoItems";
import {returnStatement} from "@babel/types";

describe('withTodoItems', () => {
    it('adds Todo Items to the context object', () => {
        const mockTodoUsecase = jest.fn().mockReturnValue(['Todo 1', 'Todo 2']);

        const stubReturn = Symbol()

        const stub = jest.fn().mockReturnValue(stubReturn);

        const callback = withTodoItems(mockTodoUsecase)(stub)

        const result = callback({foo: 'bar'})

        expect(stub).toHaveBeenCalledWith({todoItems: ['Todo 1', 'Todo 2'], foo: 'bar'})

        expect(result).toEqual(stubReturn)
    });
})