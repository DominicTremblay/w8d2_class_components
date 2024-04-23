# React Class Component Syntax

```js
import React, {
    Component
} from 'react';

class SomeComponent extends Component {

    // The constructor is used to initialize state and bind methods.
    constructor(props) {
        super(props);

        // Initial state
        this.state = {}
    }

    // getDerivedStateFromProps was added in React 16.3+
    // First method to be called when updating. Used when the state based on prop changes.
    static getDerivedStateFromProps(props, state) {}

    // *`componentWillMount` is deprecated and unsafe to use.
    // Was use to initialize the state
    // Use componentDidMount instead for state initialization.

    // Invoked immediately after a component is mounted (inserted into the tree).
    // API calls, or event listeners can be set up here.
    componentDidMount() {}

    // componentWillReceiveProps is deprecated, use getDerivedStateFromProps instead.
    // It used to be called just before a mounted component received new props.

    // Determines whether the component should re-render.
    shouldComponentUpdate(nextProps, nextState) {
        // Return true or false based on certain conditions.
    }

    // componentWillUpdate is deprecated and unsafe to use.
    // Use getSnapshotBeforeUpdate for preparing before a DOM update.

    // Invoked immediately after updating occurs. Not called for the initial render.
    // Handle component updates after state or props change.
    componentDidUpdate(prevProps, prevState) {}

    // Invoked immediately before a component is unmounted and destroyed.
    // Cleanup operations like invalidating timers and cleaning up subscriptions.
    componentWillUnmount() {}

    // The render method returns the JSX of your component's UI.
    render() {
        return ( <
            div > {
                /* Component layout goes here */
            } <
            /div>
        );
    }
}

export default SomeComponent;
```
