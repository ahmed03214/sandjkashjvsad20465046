/* eslint-disable @next/next/no-img-element */
import React from "react";

const IdeaCard = ({ title, desc, img }) => {
  return (
    <article className="mb-5 pb-4">
      <h2 className="mb-4">{title}</h2>

      <mian className="idea-card shadow bg-lighter rounded flex-column flex-md-row gap-5 px-4 py-3 flex-center">
        <img draggable={false} className="w-25" src={img} alt="" />

        <p
          style={{ fontSize: "1.2rem" }}
          className="desc text-center text-md-end"
        >
          {desc}
        </p>
      </mian>
    </article>
  );
};

export default IdeaCard;
