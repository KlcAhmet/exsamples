# Factory Pattern

The factory pattern is a creational pattern that provides a template that can be used to create objects. It is used in
complex situations where the type of the object required can vary and needs to be specified in each case.

It does not use the new keyword directly to instantiate objects; hence, it does not explicitly require the use of a
constructor to create objects. Instead, as discussed, it provides a generic interface that delegates the object creation
responsibility to the corresponding sub-class.

## When to use the factory pattern?

- When the type of objects required cannot be anticipated beforehand.
- When multiple objects that share similar characteristics need to be created.
- When you want to generalize the object instantiation process since the object set up is complex in nature.