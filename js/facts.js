
const facts = [
	{
		icon: ["fa-regular", "fa-lightbulb"],
		title: 'Innovative Experiences',
		description: 'Dreamland specializes in creating immersive experiences that allow participants to live out their most imaginative dreams',
	},
	{
		icon: ["fa-brands", "fa-discord"],
		title: 'Customizable Adventures',
		description: 'Each experience offered by Dreamland can be tailored to individual preferences and dreams, ensuring a unique adventure for every participant.',
	},
	{
		icon: ["fa-solid", "fa-pen"],
		title: 'Safety First',
		description: 'Dreamland prioritizes safety, employing advanced technology and expert staff to maintain the highest safety standards.',
	},
	{
		icon: ["fa-solid", "fa-font"],
		title: 'Community Engagement',
		description: 'Dreamland is committed to giving back to the community, hosting events and collaborations that support local causes and promote creativity among children and adults alike.',
	},
	{
		icon: ["fa-solid", "fa-bicycle"],
		title: 'Eco-Friendly Practices',
		description: 'In its pursuit of creating magical experiences, Dreamland also focuses on sustainability, using eco-friendly materials and practices to minimize environmental impact.',
	},
	{
		icon: ["fa-solid", "fa-business-time"],
		title: 'Global Reach',
		description: 'Dreamland operates in multiple locations around the world, making its unique experiences accessible to a diverse global audience.',
	},

]

const factsDisplay = document.getElementById('facts-display');

function createElements(factObject) {
	//create elements
	const container = document.createElement('div');
	const icon = document.createElement('i');
	const title = document.createElement('h3');
	const description = document.createElement('p');

	//move the elements to the container
	container.append(icon);
	container.append(title);
	container.appendChild(description);

	//add classes
	container.classList.add('facts-container');
	icon.classList.add(factObject.icon[0]);
	icon.classList.add(factObject.icon[1]);
	title.classList.add('facts-title');
	description.classList.add('facts-description');

	//display content
	title.textContent = factObject.title;
	description.textContent = factObject.description;


	factsDisplay.appendChild(container)

}

facts.forEach(createElements);