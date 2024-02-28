# Decorator Pattern

The decorator pattern focuses on adding properties, functionalities, and behavior to existing classes dynamically. The
additional decoration functionalities aren’t considered essential enough to be a part of the original class definition
as they can cause clutter. Hence, the decorator pattern allows modifying the code without changing the original class.

Unlike the creational patterns, the decorator pattern is a structural pattern that does not focus on object creation
rather decoration. Hence, it doesn’t rely on prototypal inheritance alone; it takes the object and keeps adding
decoration to it. This makes the process more streamlined. Let’s take a look at an example to understand this concept
better.

JavaScript developers can use the decorator pattern when they want to easily modify or extend the functionality of an
object without changing its base code.

It can be used if an application has a lot of distinct objects with the same underlying code. Instead of creating all of
them using different sub-classes, additional functionalities can be added to the objects using the decorator pattern.

A simple example can be of text formatting where you need to apply different formattings such as bold, italics, and
underline to the same text.