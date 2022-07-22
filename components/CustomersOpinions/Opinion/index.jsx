import React from "react";

import Avatar from "../../Avatar";

const Opinion = ({ opinion }) => {
  return (
    <article className={`text-center cu-pointer w-fit`}>
      <Avatar className="mb-2" src={opinion.avatar} width={80} />

      <div className="info">
        <p className="name m-0">{opinion.name}</p>
        <p className="opinion small text-muted">{opinion.opinion}</p>
      </div>
    </article>
  );
};

export default Opinion;
