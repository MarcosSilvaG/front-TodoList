import {Box,AppBar,Container,Toolbar,Typography,Button} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"

export default function Navbar() {
    
    const navigate = useNavigate()
    
    return (
        <Box sx= {{flexGrow: 1}}>
            <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar>
                        <Typography sx={{flexGrow: 1}} variant="h6">
                            <Link to="/" style={{textDecoration: "none",color: "#eee"}}>PERN stack</Link>
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => navigate("task/new")}>
                            New Task
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
