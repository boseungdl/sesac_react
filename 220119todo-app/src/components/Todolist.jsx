import React from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { create, done } from '../store/modules/todo';
export default function Todolist() {
  const inputRef = useRef();
  const todoList = useSelector((state) => state.todo.list).filter(
    (e) => e.done === false
  );

  const nextID = useSelector((state) => state.todo.nextID);

  const dispatch = useDispatch();

  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            dispatch(create({ id: nextID, text: inputRef.current.value }));
            inputRef.current.value = '';
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {todoList.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button onClick={() => dispatch(done(el.id))}>완료</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
