import { Card, Typography, CardContent, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function TaskList() {
	const [tasks, setTasks] = useState([]);

	const loadTask = async () => {
		const response = await fetch("http://localhost:4000/tasks");
		const data = await response.json();
		setTasks(data);
	};
	useEffect(() => {
		loadTask();
	}, []);
	return (
		<>
			<h1>Task List</h1>
			{tasks.map(task => (
				<Card
					style={{
						marginBottom: ".7rem",
						backgroundColor: "#1e272e",
					}}
				>
					<CardContent
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<div style={{color:"white"}}>
							<Typography>{task.title}</Typography>
							<Typography>{task.description}</Typography>
						</div>

						<div>
							<Button
								variant="contained"
								color="inherit"
								onClick={() => console.log("Editando")}
							>
								Edit
							</Button>
							<Button
								variant="contained"
								color="warning"
								onClick={() => console.log("Eliminando")}
								style={{ marginLeft: ".5rem" }}
							>
								Delete
							</Button>
						</div>
					</CardContent>
				</Card>
			))}
		</>
	);
}
