 import { useState, useRef, useContext } from "react";

 import { Box , TextField, ClickAwayListener } from "@mui/material";
 import {styled} from "@mui/material/styles";
 import {v4 as uuid} from "uuid";

 import { DataContext } from "../context/DataProvider"; 

const Container = styled(Box)`
      display: flex;
      flex-direction: column;
      width: 600px;
      box-shadow: 0 1px 2px 0 rgb(60 64 67/ 70%), 0 1px 6px 2px rgb(60 64 67/30%);
      padding: 10px 15px;
      border-radius: 8px;
      border-color: #e0e0e0;
      margin: auto;
      min-height: 30px;
`

const note = {
    id: '',
    heading: '',
    text: ''
}

const Form = () => {

    const [showTextField, setShowTextField] = useState(false);
    const [addNote, setAddNote] = useState({ ...note, id: uuid() });

    const {  setNotes } = useContext(DataContext);

    const containerRef = useRef(); 
    
    const handleCickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minheight = '30px'
        setAddNote({ ...note, id: uuid() });

        if(addNote.heading || addNote.text){
            setNotes(prevArr => [addNote, ...prevArr]);
        }
    }

    const onTextAreaClick = () => {
        setShowTextField(true);
        containerRef.current.style.minHeight = '70px'
    }

    const onTextChange = (e) => {
          let changedNote = {...addNote, [e.target.name]: e.target.value};
          setAddNote(changedNote);
    }

    return(
        <ClickAwayListener onClickAway={handleCickAway}>
          <Container ref = {containerRef}>
            { showTextField &&
                <TextField 
                    placeholder="Title"
                    variant="standard"
                    InputProps={{disableUnderline: true}}
                    style={{marginBottom: 20}}
                    onChange={(e) => onTextChange(e)}
                    name="heading"
                    value={addNote.heading}
                />
            }
            <TextField 
                placeholder="Write a note..."
                multiline
                maxRows={Infinity}
                variant="standard"
                InputProps={{disableUnderline: true}}
                onClick={onTextAreaClick}
                onChange={(e) => onTextChange(e)}
                name='text'
                value = {addNote.text}
            />
          </Container>
        </ClickAwayListener>
    )
}

export default Form;