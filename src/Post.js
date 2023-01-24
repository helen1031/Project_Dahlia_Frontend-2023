import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import React, { useState } from "react";

const Post = (props) => {
  const [item, setItem] = useState(props.item);

  // UI 참고) https://mui.com/material-ui/react-list/
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt=""
          src=""
          sx={{ width: 56, height: 56 }}
          variant="rounded"
        />
      </ListItemAvatar>
      <ListItemText primary={item.flowerName} />
    </ListItem>
  );
};

export default Post;
