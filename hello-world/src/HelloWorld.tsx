import React from 'react';

interface HelloWorldInterface {
  message: string;
}

class HelloWorld extends React.Component<HelloWorldInterface> {
  render() {
    return (
      <p>Hello, world! {this.props.message} </p>
    );
  }

}

/**
const HelloWorld = (props) => {
  return (
    <p>Hello, World! {props.message} </p>
  );
}
**/

export default HelloWorld;