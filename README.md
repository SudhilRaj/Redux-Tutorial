# Redux

Redux is a predictable state container for JavaScript applications, commonly used with React but compatible with any UI library. It provides a centralized store to manage the state of our application, making it easier to maintain and debug complex data flow. Redux employs a unidirectional data flow model, where state changes are handled through actions and reducers, ensuring a predictable outcome. With Redux, we can efficiently manage application state, handle asynchronous actions, and implement time-travel debugging for improved development efficiency and scalability

Redux consists of several key parts that work together to manage application state efficiently:

### Store:
The store is a centralized repository that holds the entire state tree of our application. It is responsible for dispatching actions, updating the state based on those actions, and notifying subscribers about state changes.
### Actions:
Actions are plain JavaScript objects that represent events or payloads of data that describe changes in the application state. They are dispatched by components or middleware and are the only way to modify the state in Redux.
### Reducers:
Reducers are pure functions responsible for specifying how the application's state changes in response to dispatched actions. Each reducer takes the current state and an action as arguments, and returns the new state based on the action type.
### Middleware:
Middleware provides a third-party extension point between dispatching an action and the moment it reaches the reducer. It can be used for logging, performing asynchronous operations, or applying additional logic to actions before they reach the reducers.
### Selectors:
Selectors are functions used to extract specific pieces of data from the Redux store state. They encapsulate the logic for deriving computed data from the state and are often used in conjunction with memoization techniques to improve performance.
### Action Creators:
Action creators are functions that create and return action objects. They encapsulate the logic for creating actions with predefined payloads, making it easier to dispatch actions from components or middleware.
### Subscription:
Subscribers are functions that are notified whenever the state in the Redux store changes. Components can subscribe to the store to receive updates and re-render when the state changes.

These parts work together to create a robust and predictable state management system in Redux, enabling developers to build scalable and maintainable JavaScript applications.

- Refer the source code for the Redux setup in a React application.
