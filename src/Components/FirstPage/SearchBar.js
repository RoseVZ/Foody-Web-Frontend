// import * as react from 'react';
import { TextField,Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){
    return(
        <div>
        <TextField id="outlined-search" label="Search field" type="search" size='small'/>
        
        <Button size="large" variant='outlined'>
            <SearchIcon/>
        </Button>
        </div>
    )
}