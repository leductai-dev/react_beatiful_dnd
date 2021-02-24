import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled  from 'styled-components'
// carbon core
import TextInput from 'carbon-components-react/lib/components/TextInput';
import ButtonIcon from 'components/atoms/ButtonIcon';

// carbon icon
import TrashCan32 from '@carbon/icons-react/lib/trash-can/32';

// components
import TodoCard from './TodoCard';
import TodoCreate from './TodoCreate';

// redux
import { changeTitleList, removeList } from './redux/todo.reducer';

function TodoList({ title, cards, listId, index }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleEditTitleList = () => {
    dispatch(changeTitleList(listId, listTitle));
    setIsEditing(false);
  };

  const handleRemove = () => {
    dispatch(removeList(listId));
  };

  const List = styled.div`
  flex: 1 1 auto;
  padding: 0 5px;
  min-height: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 0;
  background-color: ${prop => prop.isDraggingOver ? 'green':'inherit'}
  `

  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="todoList"
        >
        <div>
            {isEditing ? (
              <TextInput
                id="test2"
                autoFocus
                onFocus={handleFocus}
                onBlur={handleEditTitleList}
                onChange={(e) => setListTitle(e.target.value)}
                value={listTitle}
              />
            ) : (
              <div {...provided.dragHandleProps} className="todoList__head">
                <div
                  className="todoList__head__title"
                  onClick={() => setIsEditing(true)}
                >
                  <div>{title}</div>
                </div>
                <ButtonIcon icon={TrashCan32} onClick={handleRemove} />
              </div>
                  )}
          </div>
          <Droppable droppableId={String(listId)} type="CARD" direction="vertical" > 
            {(providedDrop,snapshot) => (
              <>
          
                <List
                  {...providedDrop.droppableProps}
                  ref={providedDrop.innerRef}
                  isDraggingOver = {snapshot.isDraggingOver}
                
                >
                  {cards.map((card, idx) => {
                    return (
                      <TodoCard
                        key={card.id}
                        cardId={card.id}
                        title={card.title}
                        index={idx}
                        listId={listId}
                        member={card.member}
                      />
                    );
                  })}
                  {providedDrop.placeholder}
                </List>
                <TodoCreate listId={listId} />
              </>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default TodoList;
