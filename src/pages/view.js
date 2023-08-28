import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, [params.bookId, store]);

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const coverStyle = {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "10px",
  };

  const authorStyle = {
    fontSize: "18px",
    marginBottom: "10px",
  };

  const introStyle = {
    marginBottom: "10px",
  };

  const completedStyle = {
    fontStyle: "italic",
    marginBottom: "10px",
  };

  const reviewStyle = {
    marginBottom: "10px",
  };

  return (
    <Layout>
      <h2 style={titleStyle}>{item?.title}</h2>
      <div>
        {item?.cover ? (
          <img src={item.cover} alt="cover" style={coverStyle} />
        ) : (
          ""
        )}
      </div>
      <div style={authorStyle}>Author: {item?.author}</div>
      <div style={introStyle}>Intro: {item?.intro}</div>
      <div style={completedStyle}>
        {item?.completed ? "Completed" : "Not Completed"}
      </div>
      <div style={reviewStyle}>Review: {item?.review}</div>
    </Layout>
  );
}
