import express, {
  static as _static
} from 'express';

const PORT_NUMBER = 3000;

/** Instantiate your
    express server instance **/
const _express = express ();

/** Tells express to serve files
    located in your build directory -> ../dist/ **/
_express.use ('/', _static ('../dist'));

/** Start your server instance,
    and point your browser to localhost:PORT_NUMBER **/
_express.listen (PORT_NUMBER, () => {
  console.log ('Express is listening on port', PORT_NUMBER);
});
