import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ProfileComponents from './ProfileComponents';

export default function UseEffectFatch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await axios.get('http://localhost:4000');
    console.log(resFetch);

    if (resFetch.status !== 200) return alert('통신에러');

    const data = await resFetch.data;
    console.log(data);
    setDataArr(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {dataArr.map((el, index) => {
        return (
          <ProfileComponents
            key={index}
            name={el.name}
            age={el.age}
            nickName={el.nickName}
          />
        );
      })}
    </div>
  );
}
