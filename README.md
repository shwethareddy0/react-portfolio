# React Portfolio

## Description

React Portfolio is about my education, experience , resume, contact information and skills.

Here is the link to the [deployed application](https://shwethareddy0.github.io/react-portfolio/)

### Features

- Fully Responsive
- Easy to modify

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Installation

- Create a new repository on your GitHub account.
- Clone this repository to modify the files and images as required.
- Push your changes to your GitHub repository.
- Deploy to your preferred hosting service.

## Usage

This project can be used in any web browser or on any devices including the mobile devices.

The following image is the demo screenshot of the deployed application.

![Demo screenshot](/public/demo-react-portfolio.gif)

Following is a code snippet of the application page.

Here it refers to the parent component iterating over an array and rendering children.

```
return (
    <div className="portfolio">
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
    );

```

## Technologies Used

- HTML5
- CSS3
- Bootstrap
- React
- Git
- GitHub
- GitHub Pages

## Credits

- Reactjs.org
- Stack Overflow

## License

This project is licensed under the [MIT](./LICENSE) license.
