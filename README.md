# (WIP) React Layout Builder

This is an experimental implementation of a layout builder for [Bootstrap](https://getbootstrap.com), built with [React](https://reactjs.org) and [Redux](https://redux.js.org).

![Demo](/src/assets/demo.gif)

TODO:

- Add controls to remove component and edit modifiers (css classes);
- Allow users to export the generated HTML;
- Simplify the component declaration;
- Make it flexible to support any UI kit (Bootstrap, Bulma, Foundation, etc);
- Write tests;
- Refactor 🤓

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

Clone the repository.

```
git clone https://github.com/tregismoreira/react-layout-builder.git
```

Install the dependencies.

```
# with YARN
yarn
```

Start the project.

```
# with YARN
yarn start

# or with NPM
npm run start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Authors

- Thiago Régis ([tregismoreira](https://twitter.com/tregismoreira)) - _Initial work_

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

See [LICENSE](LICENSE)
