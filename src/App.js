import Appbar from "./Appbar";
import FlowerPost from "./FlowerPost";
import FlowerPostCreate from "./FlowerPostCreate";
import React, { useEffect, useState } from "react";
import { List, Paper, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { call } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    call("/flower-post", "GET", null).then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  let posts = items.length > 0 && (
    <Paper style={{ margin: 20 }}>
      <List>
        <Link to="/flower-post/detail">
          {items.map((item) => (
            <FlowerPost item={item} key={item.id} />
          ))}
        </Link>
      </List>
    </Paper>
  );

  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };

  const addPost = (item) => {
    item.id = "ID-" + items.length;
    setItems([...items, item]);
  };

  let postListPage = (
    <div>
      <Appbar />
      <div className="posts">{posts}</div>
      <Link to="/flower-post/create">
        <Fab sx={fabStyle} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );

  let loadingPage = <h1>로딩 중</h1>;

  let content = loadingPage;
  if (!loading) {
    content = postListPage;
  }

  return <div className="App">{content}</div>;
}

export default App;
