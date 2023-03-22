import {
  TextField,
  Container,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import Appbar from "./Appbar";
import { PhotoCamera } from "@mui/icons-material";
import React, { useState } from "react";
import { postCreate } from "./service/ApiService";

const FlowerPostCreate = (props) => {
  // Backend enum에서 가져와야 함
  const colors = [
    {
      value: 0,
      label: "White",
    },
    {
      value: 1,
      label: "Pink",
    },
  ];
  const height = [
    {
      value: 0,
      label: "S (~50CM)",
    },
    {
      value: 1,
      label: "M (~75CM)",
    },
    {
      value: 2,
      label: "L (~100CM)",
    },
    {
      value: 3,
      label: "XL (100~CM)",
    },
  ];
  const disclosure = [
    {
      value: 0,
      label: "비공개",
    },
    {
      value: 1,
      label: "친구공개",
    },
    {
      value: 2,
      label: "전체공개",
    },
  ];

  const [nameValue, setNameValue] = useState({});
  const [colorValue, setColorValue] = useState({});
  const [heightValue, setHeightValue] = useState({});
  const [featureValue, setFeatureValue] = useState({});
  const [quantityValue, setQuantityValue] = useState({});
  const [disclosureValue, setDisclosureValue] = useState({});

  const onNameChange = (event) => {
    setNameValue(event.currentTarget.value);
  };
  const onFeatureChange = (event) => {
    setFeatureValue(event.currentTarget.value);
  };
  const onQuantityChange = (event) => {
    setQuantityValue(event.currentTarget.value);
  };
  const onDisclosureChange = (event) => {
    setDisclosureValue(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    const flowerName = data.get("flowerName");
    const flowerColor1 = data.get("flowerColor1");
    const flowerHeight = data.get("flowerHeight");
    const flowerFeature = data.get("flowerFeature");
    const flowerQuantity = data.get("flowerQuantity");
    const disclosureScope = data.get("disclosureScope");
    postCreate({
      flowerName: flowerName,
      flowerColor1: flowerColor1,
      flowerHeight: flowerHeight,
      flowerFeature: flowerFeature,
      flowerQuantity: flowerQuantity,
      disclosureScope: disclosureScope,
    }).then((response) => {
      window.location.href = "/";
    });
  };

  return (
    <div className="PostCreate">
      <Appbar></Appbar>
      <h3>다알리아 등록하기</h3>
      <Container style={{ margin: 10 }}>
        <form noValidate onSubmit={handleSubmit}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
          <TextField
            fullWidth
            required
            name="flowerName"
            id="flowerName"
            label="이름"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="flowerColor1"
            select
            label="색상1"
            variant="outlined"
            helperText="색상을 선택해주세요"
          >
            {colors.map((option) => (
              <MenuItem key={option.value} value={option.value || ""}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="flowerHeight"
            fullWidth
            select
            label="키"
            variant="outlined"
            helperText="키를 선택해주세요"
          >
            {height.map((option) => (
              <MenuItem key={option.value} value={option.value || ""}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            multiline
            rows={4}
            id="flowerFeature"
            label="특징"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="flowerQuantity"
            label="보유수량"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="disclosureScope"
            fullWidth
            select
            label="공개범위"
            variant="outlined"
            helperText="공개범위를 선택해주세요"
          >
            {disclosure.map((option) => (
              <MenuItem key={option.value} value={option.value || ""}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained">
            등록
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default FlowerPostCreate;
