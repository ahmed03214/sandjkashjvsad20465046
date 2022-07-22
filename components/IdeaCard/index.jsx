/* eslint-disable @next/next/no-img-element */
import React from "react";

const IdeaCard = ({ title, desc, img }) => {
  return (
    <article className="mb-4">
      <h2 className="mb-2">{title}</h2>

      <mian className="idea-card bg-lighter rounded flex-column flex-md-row gap-5 px-4 py-3 flex-center border">
        <img draggable={false} className="w-25" src={img} alt="" />

        <p className="desc text-center text-md-end">{desc}</p>
      </mian>
    </article>
  );
};

export default IdeaCard;
