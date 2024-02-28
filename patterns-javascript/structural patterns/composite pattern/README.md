# Composite Pattern

The composite pattern is used to structure objects in a tree-like hierarchy. Here, each node of the tree can be composed
of either child node(s) or be a leaf (no children objects). This pattern allows the client to work with these components
uniformly; that is, a single object can be treated exactly how a group of objects is treated.

This pattern allows the formation of deeply nested structures. If a leaf object receives the request sent by the client,
it will handle it. However, if the recipient is composed of children, the request is forwarded to the child components.

Composite pattern is powerful as it allows us to treat an object as a composite. Since both single and composite objects
share the same interface, it allows reusing objects without worrying about their compatibility.

You can use this pattern if you want to develop a scalable application that uses plenty of objects. It is particularly
helpful in situations where you are dealing with a tree-like hierarchy of objects. An example of this pattern being used
is by your operating system to create directories and sub-directories. Libraries like React and Vue also use this
pattern to build reusable interfaces.