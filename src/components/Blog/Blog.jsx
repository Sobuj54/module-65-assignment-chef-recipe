import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <article>
        <h4>
          What are the differences between controlled and uncontrolled
          components ?
        </h4>
        <p>
          <span className="fw-semibold">Ans :</span>
          <br />
          <span className="fw-semibold">Controlled components :</span>
          In React, Controlled Components are those in which form’s data is
          handled by the component’s state. It takes its current value through
          props and makes changes through callbacks like onClick, onChange, etc.
          A parent component manages its own state and passes the new values as
          props to the controlled component.
        </p>
        <p>
          <span className="fw-semibold">Uncontrolled components :</span>
          Uncontrolled Components are the components that are not controlled by
          the React state and are handled by the DOM (Document Object Model). So
          in order to access any value that has been entered we take the help of
          refs.
        </p>
      </article>
      <article className="mt-5">
        <h4>How to validate react props using proptypes ?</h4>
        <p>
          <span className="fw-semibold"> Ans :</span> <br />
          Props and PropTypes are important mechanisms for passing read-only
          attributes between React components. We can use React props, short for
          properties, to send data from one component to another. If a component
          receives the wrong type of props, it can cause bugs and unexpected
          errors in your app. Since JavaScript doesn’t have a built-in type
          checking solution, many developers use extensions like TypeScript and
          Flow. However, React has an internal mechanism for props validation
          called PropTypes.
        </p>
        <p>
          The PropTypes utility exports a wide range of validators for
          configuring type definitions. Below, we’ll list the available
          validators for basic, renderable, instance, multiple, collection, and
          required prop types.
        </p>
        <p className="fw-semibold">
          Below are the validators for the basic data types:
        </p>
        <ul className="proptypes-list">
          <li>PropTypes.any: The prop can be of any data type</li>
          <li>PropTypes.bool: The prop should be a Boolean</li>
          <li>PropTypes.number: The prop should be a number</li>
          <li>PropTypes.string: The prop should be a string</li>
          <li>PropTypes.func: The prop should be a function</li>
          <li>PropTypes.array: The prop should be an array</li>
          <li>PropTypes.object: The prop should be an object</li>
          <li>PropTypes.symbol: The prop should be a symbol</li>
        </ul>
      </article>
      <article className="mt-5">
        <h4>Difference between Node.js and Express.js ?</h4>
        <p>
          <span className="fw-semibold">Ans :</span> <br />
          <span className="fw-semibold">Node.js :</span> Node.js is an open
          source and cross-platform runtime environment for executing JavaScript
          code outside of a browser. You need to remember that NodeJS is not a
          framework and it’s not a programming language. Most of the people are
          confused and understand it’s a framework or a programming language. We
          often use Node.js for building back-end services like APIs like Web
          App or Mobile App. Node.js is a platform for building the i/o
          applications which are server-side event-driven and made using
          JavaScript.It’s used in production by large companies such as Paypal,
          Uber, Netflix, Walmart and so on.
        </p>
        <p>
          <span className="fw-semibold">Express.js :</span> Express is a small
          framework that sits on top of Node.js’s web server functionality to
          simplify its APIs and add helpful new features. It makes it easier to
          organize your application’s functionality with middle ware and
          routing. It adds helpful utilities to Node. Express.js is a framework
          based on Node.js which is used for building web-application using
          approaches and principles of Node.js event-driven architecture.js’s
          HTTP objects. It facilitates the rendering of dynamic HTTP objects.
        </p>
      </article>
      <article className="mt-5">
        <h4>What is a custom hook, and why will you create a custom hook ?</h4>
        <p>
          <span className="fw-semibold">Ans :</span>
          <br />
          React custom hooks are reusable functions that a React JS developer
          can use to add special and unique functionality to the React
          applications. Usually, if there is a requirement to add a feature, one
          can install a third-party library and solve the problem. But what if
          there is no such library with hooks that can be used? This problem is
          solved by using custom React JS hooks. A custom hook is a special
          JavaScript function whose name starts with ‘use’ and can be used to
          call other hooks.
        </p>
        <p>
          <span className="fw-semibold">Benefits of custom hook :</span>
          <br />
          Custom React JS hooks offer three major benefits over standard library
          hooks: Reusability, readability, and testability.
        </p>
        <ol>
          <li>
            <span className="fw-semibold">Reusability</span>
            <br />
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which ensures clean code and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </li>
          <li className=" mt-2">
            <span className="fw-semibold">Readability</span>
            <br />
            Instead of using High-Order Components (HOCs), one can use custom
            hooks to improve the readability of the code. Complex codes can
            become hard to read if layers of providers surround the components,
            consumers, HOCs, render props, and other abstractions, generally
            known as wrapper hell. On the other hand, using custom React JS
            hooks can provide cleaner logic and a better way to understand the
            relationship between data and the component.
          </li>
          <li className="mt-2">
            <span className="fw-semibold ">Testability</span>
            <br />
            Generally, the test containers and the presentational components are
            tested separately in React. This is not a trouble when it comes to
            unit tests. But, if a container contains several HOCs, it becomes
            difficult as you will have to test the containers and the components
            together to do the integration tests. Using custom React JS hooks,
            this problem can be eliminated as the hooks allow you to combine
            containers and components into one component. It also makes it
            easier to write separate unit tests for custom hooks. Using custom
            hooks also makes it easier to mock hooks when compared to mock HOCs
            as it is similar to mocking a function.
          </li>
        </ol>
      </article>
    </div>
  );
};

export default Blog;
