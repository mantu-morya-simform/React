/\*

1st eg:

This JSX:

<h1>Hello</h1>

gets converted into:

React.createElement("h1", null, "Hello");

or in modern React:

jsx("h1", {
children: "Hello",
});

2nd eg :

You write:

<div>Hello</div>

React internally sees:

createElement("div", {}, "Hello");

React then converts this into a Virtual DOM object.

Example object:

{
type: "div",
props: {
children: "Hello"
}
}

// fragment

<React.Fragment>

  <h1>Hello</h1>
  <p>World</p>
</React.Fragment>

// or

<>

<h1>Hello</h1>
<p>World</p>
</>

Step 1: TypeScript → JavaScript

Step 2: JSX → JavaScript

This:

<h1>Hello</h1>

becomes:

jsx("h1", {
children: "Hello",
});

In older React:

React.createElement(
"h1",
null,
"Hello"
);

This transformation is done by Babel, or esbuild depending on setup.

Step 3: Dependency graph created

Step 4: Bundle creation

Step 5: Tree shaking

Unused code removed.

\*/
