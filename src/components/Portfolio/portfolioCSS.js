import React, { useState } from "react";
import Card from "react-bootstrap/Card";



function ProjectCSS(props) {

	const currentProject = useState(props)[0].projectApps;

	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const deployedLink = currentProject.deployed;
	const gitrepo = currentProject.github;


	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={ image }
				className="card-image"
                style = {{width: "150%"}}
			/>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Link href={deployedLink} target="_blank" className="card-link">
						{name} App
					</Card.Link>
					<br></br>
					<Card.Link href={gitrepo} target="_blank" className="card-link">
						{name} Github
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default ProjectCSS;