# Template for React 
#### Using Bun, Vite, Typescript, redux/RTK and MUI/Joy-ui

---

This is my preferred way of setting up a react project. 
Some key features include:
- Barrel files for components
- Request and state handling using redux
- Hot reload development and building using vite
- A minimal UI library for quick prototyping (JOY UI)
- Custom import resolution `@/myModule`

### Getting started 
To get started run 
```zsh
bun install
```
and then
```zsh
bun run dev
```
to start the dev server.

### Styling
The `theme.ts` file can be modified to apply global styles within the UI library.

To create a specific styled component, use `@emotion/styled` 
