
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  const inputStyles = {
     formContainer: {
      width: "400px",
      margin: "0 auto",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      margin: "15px 0",
    },
    title: {
      fontSize: "20px",
      textAlign: "left",
    },
    input: {
      padding: "10px",
      borderRadius: "7px",
      fontSize: "16px",
    },
  };

  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "intro":
        setIntro(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(e.target.value);
        break;
        default:
          // Manejar el caso por defecto si es necesario
        break;
    }
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  function onSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    store.createItem(newBook);
    navigate("/");
  }

  return (
    <Layout>
      <form onSubmit={onSubmit} style={inputStyles.formContainer}>
        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Title</div>
          <input
            style={inputStyles.input}
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Author</div>
          <input
            style={inputStyles.input}
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Cover</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          <div>{!!cover ? <img src={cover} alt = "" width="200" /> : ""}</div>
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>intro</div>
          <input
            style={inputStyles.input}
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Completed</div>
          <input
            style={inputStyles.input}
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>review</div>
          <input
            style={inputStyles.input}
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </div>
        <input
          type="submit"
          value="Register book"
          style={{
            padding: "15px 20px",
            minWidth: "200px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#1e9638",
            color: "white",
            fontWeight: "bolder", 
            fontSize: "18px",
          }}
        />
      </form>
    </Layout>
  );
}

 