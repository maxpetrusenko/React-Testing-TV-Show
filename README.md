# React Testing TV Show

## Advanced Web Applications ➡ Testing React

### Objectives

- use mocks in unit tests
- test asynchronous API calls that are made in a component
- test React components as the props change

### Introduction

As a developer, I need to write tests for the feature you are building, and even sometimes on components and features other developers have built. This project will mimic a situation where I am asked to test someone else's code.


### Instructions and/or completion requirements

Challenge for this module: write tests for both the `App.js` component and the `Episodesjs` component. Take note of where the state is being managed, where the async call is, and where different data peices are being rendered. Understanding all of this will be important so you know how to test each component.

**Moving the async call**

The async call being inside the component makes it hard to test the asynchronous nature of the component. Let's move the async function into an `/api` directory so we can easily mock that function and make the async tests easier.
