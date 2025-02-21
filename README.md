# Equal Experts Full Stack Engineer Exercise - Joseph Guest Submission

This is Joseph Guest's submission for the [Equal Experts Full Stack Engineer Exercise](https://equalexperts.github.io/ee-tech-interviews-uk/grocery-list-problem.html).

Version number: 5b8d0fd276b6d288905ed2f63a934e057e8feca2

## Prerequisites

- Node.js
- NPM

## Installation

To get started, clone the repository and run `npm install`.

## Running the app

To run the application:

Run `npm run dev` to start the development server.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the tests

To run the end-to-end tests, ensure the dev server is running then run `npx playwright test` in another terminal window.

# Exercise Requirements

## The Problem

Create a basic shopping list, with:

- [x] A web frontend, with the Equal Experts branding
- [x] A backend API (happy for data to be stored in memory)

With the functionality to:

- [x] View the shopping list
- [x] Add a new item to the shopping list
- [x] Remove items from the shopping list
- [x] Strikethrough items in the shopping list

## Methods to follow

- [x] Test coverage
- [x] Simplicity (🤞)
- [x] Self-explanatory code (🤞)

# Notes

## Where's the backend API?

NextJS has support for [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations), which is a great way to have a "backend API" without having to write a full backend. We also gain some advantages of using this function-first methodology, such as: type safety, autocomplete, and the ability to use the same code for both the frontend and backend. I've used these actions both on the server and on the client.

I've included a specific directory named `/app/actions` which contains the functions which operate as the backend API.

## Why only e2e tests, where are the unit tests?

Similarly to the above point, since NextJS is a full stack framework we can avoid writing frontend only and backend only tests. Due to the size of the app and the time constraints, I don't believe it worthwhile to add another testing framework to the mix. We can still perform TDD using this approach.
