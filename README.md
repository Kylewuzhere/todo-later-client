# todo-later-client

Hey there! Welcome to Todo-Later Client, my personal React project. This application is designed to help you manage your todos effortlessly. As a client-side app, it communicates with the server-side app, [Todo-Later-Server](https://github.com/Kylewuzhere/todo-later-server), via API. Before we dive in, I'd like to mention that user authentication is a priority, so I've integrated Auth0 as the authentication provider. You'll need to log in before you can start using the app.

## Technologies Used

- React - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="30" height="30"/>
- Javascript - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="30" height="30"/>
- HTML - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" width="30" height="30"/>
- CSS - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" width="30" height="30" />
- Bootstrap - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" width="30" height="30" />
- Auth0 - <picture><source media="(prefers-color-scheme: light)" srcset="https://cdn.auth0.com/website/sdks/logos/auth0_light_mode.png" height="30">
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.auth0.com/website/sdks/logos/auth0_dark_mode.png" height="30">
    <img alt="Auth0 Logo" src="https://cdn.auth0.com/website/sdks/logos/auth0_light_mode.png" height="30"></picture>

## Features

- Create a new todo item
- View existing todo items
- Update a todo item by ID
- Delete a todo item by ID

## Authentication

Todo-Later Client uses Auth0 for user authentication. Users need to sign up and log in before they can use the app. Auth0 provides a secure and reliable authentication service, ensuring that only authenticated users can access and interact with the todo app.

## Deployment

You can access Todo-Later Client right away using the following Netlify deployment URL: https://roaring-kangaroo-61ec7d.netlify.app/.

## Getting Started

Before you can run Todo-Later Client, there are a few prerequisites you need to take care of. Let's go through them step by step:

Create an Auth0 Application and API: To enable user authentication and secure API communication, you'll need to create an Auth0 application and API. Follow these steps:

- Sign up for an Auth0 account at https://auth0.com/ if you don't have one already.
- Go to the Auth0 Dashboard and navigate to the "Applications" section.
- Click on the "Create Application" button and give your application a name.
- Select "Single Page Web Applications" as the application type.
- In the "Settings" tab of your application, locate the "Domain" and "Client ID" values. These will be used as the REACT_APP_AUTH0_DOMAIN and REACT_APP_AUTH0_CLIENT_ID environment variables, respectively.
- Next, go to the "APIs" section in the Auth0 Dashboard.
- Click on the "Create API" button and provide a name and an identifier for your API.
- Remember the identifier, as it will be used as the REACT_APP_AUTH0_AUDIENCE environment variable.

Then, let's clone the repository from GitHub:

```
git clone https://github.com/your-username/todo-later-client.git
```

Next, we'll need to install the project dependencies. Navigate to the project's root directory:

```
cd todo-later-client
yarn install
```

Now, let's set up the environment variables:

Create a .env file in the project's root directory.

Inside the .env file, define the following environment variables:

```
REACT_APP_API_URL=<URL of the Todo-Later Server API>
REACT_APP_AUTH0_DOMAIN=<Auth0 domain>
REACT_APP_AUTH0_CLIENT_ID=<Auth0 client ID>
REACT_APP_AUTH0_AUDIENCE=<Auth0 audience of the resource server>
```

Great! We're almost there. Let's start the development server:

```
yarn start
```

Finally, open your favorite web browser and navigate to http://localhost:3000 to access Todo-Later Client.

## Authentication

I have integrated Auth0 into the app for seamless user authentication. To get started, sign up for an account and log in. Once you're authenticated, you will be able to access the app and all of its features.

## To be added

- Timestamp (when a todo is created and completed)
- User demo account (pre-populated read-only app)
