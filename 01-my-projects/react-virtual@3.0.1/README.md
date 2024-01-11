Rendering 1 million elements directly in the DOM using React.js can lead to performance issues, and might even crash as updating the DOM is a resource-intensive operation. Virtualization is a technique used to render only the items that are currently visible on the screen, rather than rendering the entire list.

This example experiments with the `@tanstack/react-virtual` package, which achieves virtualization through the use of techniques like windowing and infinite scrolling. This solves the problem and rendering 1,000,000 is possible without any performance issues. 

**name:** TanStack Virtual
**docs:** https://tanstack.com/virtual/v3/docs/guide/introduction
**npm:** https://www.npmjs.com/package/@tanstack/react-virtual
**use case:**
- rendering a list of 1 million items or more