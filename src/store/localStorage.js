/* global localStorage */

/**
 * Метод получает состояние хранилища из localStorage
 * @return {Object} состояние
 */
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

/**
 * Метод сохраняет состояние в localStorage
 * @param {Object} state актуальное состояние,
 * которое необходимо сохранить в localStorage
 */
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Игнорируем ошибку
    }
};

export default loadState;
