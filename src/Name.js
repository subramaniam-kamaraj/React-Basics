import React, { useState } from "react";

function Name() {
  const [title, settitle] = useState();
  const [data, postData] = useState([]);

  const handletitle = e => {
    settitle(e.target.value);
  };

  const clickHandler = tit => {
    if (tit !== undefined) {
      postData([...data, title]);
    }
  };

  return (
    <div>
      <input type="text" onChange={handletitle} />
      <button
        onClick={() => {
          clickHandler(title);
        }}
      >
        <span>Click Me</span>
      </button>
      <ul>
        {data.map(i => {
          return <li key={i}>{i}</li>;
        })}
      </ul>
    </div>
  );
}
export default Name;
