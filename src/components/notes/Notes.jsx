import { useContext } from "react";
import {Box, Grid} from "@mui/material";
import { styled } from "@mui/material/styles";

import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";

import { DataContext } from "../context/DataProvider";

const DrawHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () =>{

    const {notes} = useContext(DataContext);
    return(
        <Box sx={{ display : 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%;' }}>
                <DrawHeader />
                <Form />
                {
                    notes.length > 0 ?
                        <Grid container>
                        {
                            notes.map((note) => (
                                <Grid item>
                                    <Note note={note} />
                                </Grid>
                            ))
                        }
                        </Grid>
                        : <EmptyNotes />
                }        
            </Box>
        </Box>
       
    )
}

export default Notes;