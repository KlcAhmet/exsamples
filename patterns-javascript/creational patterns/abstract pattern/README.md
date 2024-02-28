# Abstract Pattern

To understand the abstract pattern, let’s go back to the factory pattern. We use the factory pattern to create multiple
objects from the same family without having to deal with the creation process. The abstract pattern is similar; the
difference is that it provides a constructor to create families of related objects. It is abstract, meaning it does not
specify concrete classes or constructors.

The abstract pattern for creating instances is preferred over initializing them using the new operator since
constructors have limited control over the process, whereas; a factory will have broader knowledge.

- The use-cases for this pattern are:
- applications requiring the re-use or sharing of objects
- applications with complex logic, they have multiple families of related objects that need to be used together object
  caching
- when the object creation process is to be shielded from the client