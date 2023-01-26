import React from 'react';
import ListChild from './ListChild';
import Modal from './Modal';

export default function List() {
  const dataArr = [
    {
      item: 'gg',
      price: 5000,
    },
    {
      item: 'gg1',
      price: 3000,
    },
  ];

  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <hr />
      {dataArr.map((el, index) => {
        return <ListChild item={el.item} price={el.price} key={index} />;
      })}
    </div>
  );
}
