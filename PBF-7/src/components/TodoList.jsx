import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
const TodoList = ({ todos, deleteTodo }) => ( // Komponen daftar todo; menerima todos (array) dan deleteTodo (fungsi) dari induk
  <div>

    <List> {/* Wadah daftar dari Material UI */}
      {todos.map((todo, index) => ( 
        <ListItem key={index.toString()} dense button>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText secondary={todo} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => { // Saat diklik, panggil deleteTodo dengan index todo ini
                deleteTodo(index);
              }}
            >
              <DeleteOutlinedIcon stroke="red" fill="red" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>

  </div>
);

export default TodoList;
