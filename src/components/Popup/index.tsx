import React, { useEffect, useState } from "react";
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { PopupData } from "../../types";

const Popup: React.FC = () => {
  const [popupData, setPopupData]: Array<any> = useState([
    {
      value: 4,
      date: "20.02.2022",
      user: "Petro",
      comment: "any",
    },
    {
      value: 5,
      date: "21.02.2022",
      user: "Roman",
      comment: "any",
    },
    {
      value: 6,
      date: "22.02.2022",
      user: "Anna",
      comment: "any",
    },
  ]);
  const [value, setValue] = useState<string>("");
  const [popupDate, setPopupDate] = useState<string>("");
  const [popupUser, setPopupUser] = useState<string>("Roman");
  const [comment, setComment] = useState<string>("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleChangeUser = (e: SelectChangeEvent) => {
    setPopupUser(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const addTableData = () => {
    setPopupDate(new Date().toLocaleString().split(",")[0]);
    setPopupData([
      ...popupData,
      {
        value: Number(value),
        date: popupDate,
        user: popupUser,
        comment: comment,
      },
    ]);
    setValue("");
    setPopupDate(new Date().toLocaleString().split(",")[0]);
    setPopupUser("Roman");
    setComment("");
  };

  useEffect(() => {
    setPopupDate(new Date().toLocaleString().split(",")[0]);
  }, []);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>value</TableCell>
            <TableCell align='center'>date</TableCell>
            <TableCell align='center'>user</TableCell>
            <TableCell align='center'>comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {popupData.map((user: PopupData) => (
            <TableRow key={user.user + "1"}>
              <TableCell key={user.value}>{user.value}</TableCell>
              <TableCell key={user.value + "1"}>
                {user.date.toString()}
              </TableCell>
              <TableCell key={user.user}>{user.user}</TableCell>
              <TableCell key={user.comment}>{user.comment}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <TextField
                value={value}
                placeholder='value'
                type='number'
                onChange={handleChangeValue}
              />
            </TableCell>
            <TableCell>
              <TextField value={popupDate} />
            </TableCell>
            <TableCell sx={{ m: 1 }}>
              <Select
                labelId='demo-select-small'
                id='demo-simple-select'
                value={popupUser}
                label='User'
                onChange={handleChangeUser}
              >
                <MenuItem value='Petro'>Petro</MenuItem>
                <MenuItem value='Roman'>Roman</MenuItem>
                <MenuItem value='Anna'>Anna</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <TextField
                value={comment}
                placeholder='comment'
                type='text'
                onChange={handleCommentChange}
              />
            </TableCell>
            <TableCell>
              <Button onClick={addTableData}>Add</Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  window.close();
                }}
              >
                Close
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Popup;
