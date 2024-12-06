# Custom Dropdown

![Custom Dropdown](https://drive.google.com/uc?export=view&id=1ko1a0YVOTED5POoXQQJsILSXYlScYODr)

**Custom Dropdown** is a project built with React that allows you to customize the appearance of a blog page through a convenient and interactive sidebar. The user can modify the article's styles, apply changes, or reset the settings to their initial values.

[Макет проекта](https://www.figma.com/file/FEeiiGLOsE7ktXbPpBxYoD/Custom-dropdown?type=design&node-id=0%3A1&mode=design&t=eXRJnWC6Xsuw0qR4-1)

---

### What Was Done:
#### Blog page customization via a React-based sidebar:
- ✅ **Sidebar functionality setup**:
  - Implemented mechanics for opening and closing the sidebar:
    - The sidebar opens when clicking the "arrow."
    - The sidebar closes when clicking the "arrow" again or clicking outside its area.
  - Handled changes in settings:
    - Settings are saved only after clicking the "Apply" button.
    - When clicking the "Reset" button, settings revert to their initial state.
  - All settings are applied through CSS variables defined at the application level.

- ✅ **Property editing form**:
  - Finalized the `ArticleParamsForm` component:
    - Organized the composition of form components.
    - Managed the states of both the form and the page.
    - Configured the data flow between the form and the page.

- ✅ **Data transfer**:
  - Implemented saving the states of the form and the page.
  - The page state updates through CSS variables after clicking the "Apply" button.

---


To run **Storybook**, execute:

```
npm run storybook
```

- To run the linter, execute:

```
npm run stylelint
```

- To run the linter, execute:

```
npm run lint
```

- To run the formatter, execute:

```
npm run format
```

