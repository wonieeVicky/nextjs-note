﻿'use client';

import { useState } from 'react';

export default function Counter() {
  console.log('hi! - client component');
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>숫자 증가</button>
    </>
  );
}
