
import { LightbulbOutlined as Lightbulb} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


const Light = styled(Lightbulb)`
     font-size: 120px;
     color: #F5F5F5;
`

const EmptyNotes = () => {
        return(
            <Box>
                <Light />
                <Typography > Notes you add appear here  </Typography>
            </Box>
        )
} 

export default EmptyNotes;