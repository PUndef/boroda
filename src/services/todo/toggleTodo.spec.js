import deepFreeze from 'deep-freeze';
import toggleTodo from './toggleTodo';

describe('ToDo toggle', () => {
    it('test adding', () => {
        const todoBefore = {
            id: 0,
            text: 'Learn Redux',
            completed: false,
        };
        const todoAfter = {
            id: 0,
            text: 'Learn Redux',
            completed: true,
        };

        deepFreeze(todoBefore);

        expect(toggleTodo(todoBefore)).toEqual(todoAfter);
    });
});
