import React from 'react';
import DoneList from './DoneList';
import Todolist from './Todolist';

export default function ListContainer() {
  return (
    <>
      <Todolist />
      <DoneList />
    </>
  );
}
