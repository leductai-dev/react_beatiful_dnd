import { createSelector } from 'reselect';

export const getColumns = createSelector(
  (state) => {
    console.log(state)
   return state.todo
  },
  (todo) => {
    console.log(todo)
    return todo.columns
  },
);

export const getLists = createSelector(
  (state) => state.todo,
  (todo) => todo.lists,
);

export const getCards = createSelector(
  (state) => state.todo,
  (todo) => todo.cards,
);

