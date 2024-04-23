# Class-based Components

## Agenda

* Review of Classes and OOP in JavaScript
* Class-based Components in React
  + History
  + Syntax of Class-based Component
  + Lifecycle Methods 

## Class-based Components in React

* Up until the introduction of hooks in Feb 2019, React applications were built using Class-based components

* Class-based components were using lifecycle methods

* At the time, functional components were used only when no state of lifecycle methods were required.

* Legacy Code: While functional components with hooks are the preferred approach for new development, many existing codebases still use class-based components. 

* Class-based components continue to be maintained and may coexist with functional components in the same codebase.

## Syntax

* The basic syntax of class components

```js
Copy code
import React, {
    Component
} from 'react';

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
        return ( <
            div > {
                /* JSX content */
            } <
            /div>
        );
    }
}

export default MyComponent;
```

## Lifecycle Methods 

 
* Class-based components introduced the concept of component lifecycle methods, allowing developers to hook into specific phases of a component's lifecycle. 

* These methods, such as the following provided developers with fine-grained control over component initialization, updating, and cleanup.

### Lifecycle

* [Lifecycle Methods](./react_lifecycle_methods.webp)
* [Class Component Syntax](./class_component_syntax.md)

#### Mounting React components

  1. Constructor - Initializes the state and any methods that needs to be binded
  2. Render - renders the component when it's first mounted
  3. `componentDidMount` is called after the component is inserted into the DOM. You can use it for tasks like data fetching. Called only once.
  4. `componentWillMount` deprecated. Was used to set the state before the component mounted. Should not be used

#### Updating React components

1. `static getDerivedStateFromProps()` First method to be called when updating. Used when the state based on prop changes.
2. `shouldComponentUpdate()` Control whether the component should re-render or not for a prop change to improve performance.
3. `componentDidUpdate()` called right after a component render and has updated the DOM.

#### Unmounting React components

1. `componentWillUnmount`  can be used to perform cleanups such as removing event listeners, invalidating timers or intervals, etc. (React 16)
