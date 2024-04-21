# Class-based Components

## Agenda

- Review of Classes and OOP in JavaScript
- Class-based Components in React
  - History
  - Syntax of Class-based Component
  - Lifecycle Methods 

## Class-based Components in React

- Up until the introduction of hooks in Feb 2019, React applications were built using Class-based components

- Class-based components were using lifecycle methods

- At the time, functional components were used only when no state of lifecycle methods were required.

- Legacy Code: While functional components with hooks are the preferred approach for new development, many existing codebases still use class-based components. 

- Class-based components continue to be maintained and may coexist with functional components in the same codebase.

## Syntax

- The basic syntax of class components

```js
Copy code
import React, { Component } from 'react';

class MyComponent extends Component {
  // Constructor (optional)
  constructor(props) {
    super(props);
    // Initialize state if needed
    this.state = {
      // State properties
    };
  }

  // Lifecycle methods (optional)
  componentDidMount() {
    // Code to run after component is mounted to the DOM
  }

  // Method to render JSX (required)
  render() {
    return (
      <div>
        {/* JSX content */}
      </div>
    );
  }
}

export default MyComponent;
```

## Lifecycle Methods 
 
- Class-based components introduced the concept of component lifecycle methods, allowing developers to hook into specific phases of a component's lifecycle. 

- These methods, such as the following provided developers with fine-grained control over component initialization, updating, and cleanup.

  - `componentDidMount`
  - `componentDidUpdate` 
  - `componentWillUnmount`