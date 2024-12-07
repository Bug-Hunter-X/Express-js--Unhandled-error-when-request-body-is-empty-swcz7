# Express.js: Unhandled Error when Request Body is Empty

This repository demonstrates a common error in Express.js applications where the server crashes when it receives a request with an empty or malformed request body.  The issue is caused by the lack of proper input validation and error handling. The bug.js file shows the flawed code and bugSolution.js provides a solution.

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to start the server with the error.
5. Run `node bugSolution.js` to start the server with the fix.

## Problem

The `bug.js` file attempts to access properties of the request body without first checking if they exist or if the request body itself is valid.  This leads to an unhandled error when a request with an empty or missing required field is sent.

## Solution

The `bugSolution.js` file demonstrates a robust solution which involves:

* Validating that `req.body` is not empty
* Checking if the required field ('name' in this example) exists in `req.body` before accessing it.
* Returning a proper error response when validation fails

This approach prevents the server from crashing and provides a more user-friendly experience.