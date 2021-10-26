import React from "react";

const HooksText = () => {
  return (
    <div>
      <h4>What You Should Know About React Hooks</h4>
      <h6>
        First released in October of 2018, the React hook APIs provide an
        alternative to writing class-based components, and offer an alternative
        approach to state management and lifecycle methods. Hooks bring to
        functional components the things we once were only able to do with
        classes, like being able to work with React local state, effects and
        context through <strong>useState</strong> ,{" "}
        <strong className="mr-1">useEffect</strong>
        and <strong>useContext</strong> . Additional Hooks include:{" "}
        <strong>useReducer</strong> , <strong>useCallback</strong>,{" "}
        <strong>useMemo</strong> , <strong>useRef</strong> ,{" "}
        <strong>useImperativeHandle</strong>, <strong>useLayoutEffect</strong>
        and <strong>useDebugValue</strong> .
      </h6>
      <br />
      <h4>So How Do We Use Hooks</h4>
      <h6>
        The easiest way to describe Hooks is to show side-by-side examples of a
        class component that needs to have access to state and lifecycle
        methods, and another example where we achieve the same thing with a
        functional component. Below I provide a working example similar to those
        in the ReactJS docs, but one that you can touch and play around with,
        getting your hands dirty with a StackBlitz demo for each stage of our
        learning. So let's stop talking and start learning about React Hooks.
      </h6>
      <br />

      <h4>The Benefits of Using Hooks</h4>
      <h6>
        Hooks have a lot of benefit to us as developers, and they are going to
        change the way we write components for the better. They already help us
        to write clearer and more concise code - it's like we went on a code
        diet and we lost a lot of weight and we look better and feel better. It
        brings out our jawline and makes us feel lighter on our toes. It's the
        one change that works for us. Just look at what React Hooks have done
        for others!
        <br />
        All kidding aside, Hooks do trim the fat. It cuts down and makes our
        code more readable, concise and clear. To demonstrate, let's check out a
        class version of our canonical “document title effect” and see the
        difference between how we used to write something like this side by side
        with an example using an npm-installed Hook that does the same thing.
        The side-by-side below shows how the component has lost a little weight.
        We not only save about five lines of code, but the readability and
        test-ability also improve with the change over to Hooks. Switching
        existing code over to Hooks could have a big impact on the sheer volume
        of code and readability, but I would encourage you to take it slow.
        Remember that Hooks is backward compatible with the code it's replacing
        and can live side by side with it, so there's no need to rewrite the
        whole codebase immediately.
      </h6>
      <br />
      <h4>Five Important Rules for Hooks</h4>
      <h6>
        Before we create our own Hook, let's review a few of the major rules we
        must always follow.
        <ol className="mt-2" style={{ fontSize: "15px" }}>
          <li>
            Never call Hooks from inside a loop, condition or nested function
          </li>
          <li>Hooks should sit at the top-level of your component</li>
          <li>Only call Hooks from React functional components</li>
          <li>Never call a Hook from a regular function</li>
          <li>Hooks can call other Hooks</li>
        </ol>
      </h6>
    </div>
  );
};

export default HooksText;
