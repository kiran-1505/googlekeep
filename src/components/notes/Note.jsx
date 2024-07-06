
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete  } from "@mui/icons-material";

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const Note = ({note}) =>{
    return(
        <Card>
            <CardContent> 
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Archive 
                      fontSize="small"
                      style={{marginLeft: 'auto'}}
                />
                <Delete 
                    fontSize="small"
                />
            </CardActions>
        </Card>
    )
}

export default Note;