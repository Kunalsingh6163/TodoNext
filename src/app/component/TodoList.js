import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';

function TodoList(props) {
  return (
    <div>
        <li className='list-item'>
        <Typography variant="body2">{props.item}</Typography>
            <IconButton  onClick={e=>{
                props.deleteListItem(props.index)
            }}>
                <DeleteOutlineIcon />
            </IconButton>
        </li>
    </div>
  )
}

export default TodoList