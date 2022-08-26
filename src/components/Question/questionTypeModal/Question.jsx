import React, { useState } from "react";
import QuestionTypeModal from "./QuestionTypeModal";

function Question() {
  const [modal, setModal] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {modal && <QuestionTypeModal setModal={setModal} />}
      <div
        style={{
          maxHeight: "10rem",
          padding: "2rem 3rem",
          border: "1px solid black",
          maxWidth: "20rem",
          textAlign: "center",
          fontSize: "2.5rem",
          cursor: "pointer",
        }}
        onClick={() => {
          setModal(true);
        }}
      >
        Add Question
      </div>
    </div>
  );
}

export default Question;
