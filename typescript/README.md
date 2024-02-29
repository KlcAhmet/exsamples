## `tsc`, the TypeScript compiler
We’ve been talking about type-checking, but we haven’t yet used our type-checker.
Let’s get acquainted with our new friend tsc, the TypeScript compiler. First we’ll need to grab it via npm.

`npm install -g typescript`

Now we can use tsc to compile our TypeScript files. For example, 
if we have a file called hello.ts, we can run tsc hello.ts to compile it to hello.js.

> tsc hello.ts
> node hello.js

Or

> tsc hello.ts --watch

This will watch for changes to hello.ts and automatically recompile it to hello.js whenever hello.ts is saved.

## `ts-node`, the TypeScript execution environment
İf you want to compile and run the file at the same time, you can use ts-node.

```npm install -g ts-node```

> ts-node hello.ts