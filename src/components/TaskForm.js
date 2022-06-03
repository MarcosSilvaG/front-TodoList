import {
	Button,
	Card,
	CardContent,
	CircularProgress,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";

export default function TaskForm() {
    
    const [task, setTask] = useState({
        title:"",
        description:"",
    })
    const  [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
    const handleSubmit =  async (event) => {
        event.preventDefault();
        
        setLoading(true)

        const response = await fetch("http://localhost:4000/tasks", {
                method:"POST",
                body: JSON.stringify(task),
                headers: {"Content-Type":"application/json"}
        })
        const data = await response.json()
        navigate("/")
        setLoading(false)
    }   
    
    const handleChange = (event) => {
        setTask({...task, [event.target.name]: event.target.value}); 
    }

    return (
		<Grid
			container
			direction="column"
			alignItems="center"
			justifyContent="center"
		>
			<Grid item xs={3}>
				<Card
					sx={{ mt: 7 }}
					style={{
						backgroundColor: "#1e272e",
						padding: "1rem",
					}}
				>
					<Typography variant="5" textAlign="center" color="white">
						Create task
					</Typography>
					<CardContent>
						<form onSubmit={handleSubmit}>
							<TextField
								variant="filled"
								label="Write your title"
								sx={{
									display: "block",
									margin: ".5rem 0",
								}}
                                name="title"
                                onChange={handleChange}
                                inputProps={{ style: { color: "white" } }}
								InputLabelProps={{ style: { color: "white" } }}
							/>
							<TextField
								variant="filled"
								label="Write your description"
								multiline
								rows={4}
								sx={{
									display: "block",
									margin: ".5rem 0",
								}}
                                name="description"
                                onChange={handleChange}
                                inputProps={{ style: { color: "white" } }}
								InputLabelProps={{ style: { color: "white" } }}
							/>
							<Button
								variant="contained"
								color="primary"
								type="submit"
                                disabled={!task.title || !task.description}
							>
								{loading ? <CircularProgress 
                                    color="inherit"
                                    size={24}
                                /> :  "Create"}
							</Button>
						</form>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
