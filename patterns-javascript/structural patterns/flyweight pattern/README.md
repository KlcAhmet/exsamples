# Flyweight Pattern

It is a structural pattern that focuses on the sharing of data amongst related objects. It helps prevent repetitive
code, hence, increases efficiency when it comes to data sharing as well as conserving the memory.

It takes the common data structs/objects that are used by a lot of objects and stores them in an external object (
flyweight) for sharing; you could say that it is used for caching purposes. So the same data does not need to have
separate copies for each object; instead, it is shared amongst all.

A flyweight is an independent object that can be used in multiple contexts simultaneously. It cannot be distinguished
from the instances of objects that are not sharable. A flyweight object can consist of two states:

- intrinsic: this state is stored in the flyweight. It contains the information required by the internal methods of
  objects. It is independent of the context of the flyweight; hence, it is sharable with other objects.


- extrinsic: this state depends on the context of the flyweight; hence, it cannot be shared. Normally, the client
  objects pass the extrinsic state to the flyweight object when needed.

This pattern should be used when your application has plenty of objects using similar data or when memory storage cost
is high. JavaScript uses this pattern to share a list of immutable strings across the application.

This pattern is mostly used in applications such as network apps or word processors. It can also be used in web browsers
to prevent loading the same images twice. The flyweight pattern allows caching of the images. Hence, when a web page
loads, only the new images are loaded from the Internet, the already existing ones are fetched from the cache.