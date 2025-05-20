# React Little Data Grid

This is a little table/grid view for ReactJS projects. The goal is to have a speadsheet like UI.

## Usage

```sh
npm i react-little-data-grid
```

Then in your jsx code

```jsx
import "react-little-data-grid/dist/react-little-data-grid.css";
import { DataGrid } from "react-little-data-grid";

function App() {
  const cols = [
    {
      rowField: "title",
      text: "Movie",
    },
    {
      rowField: "year",
      text: "Release year",
    },
    {
      rowField: "director",
      text: "Director",
    },
    {
      rowField: "description",
      text: "Description",
    },
  ];

  const rows = [
    {
      id: "100",
      title: "Avatar",
      year: 2009,
      director: "James Cameron",
      description: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    },
    {
      id: "101",
      title: "I Am Legend",
      year: 2007,
      director: "Francis Lawrence",
      description: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
    },
  ];

  return (
    <>
      <DataGrid cols={cols} rows={rows} showIndexCol editable />
    </>
  );
}

export default App;
```

## Development

```sh
$ git clone https://github.com/aktsbot/react-little-data-grid
$ cd react-little-data-grid
$ npm i
$ npm link
```


We need a dummy project to test the plugin as we make changes to it. Make that with

```sh
$ mkdir -p __chopshop # already in .gitignore
$ cd __chopshop
$ npm create vite@latest test-react-app -- --template react-ts  
$ cd test-react-app
$ npm i
$ npm run dev
# in another terminal in the same directory
$ npm link react-little-data-grid
```

Copy over the sample code in the usage section to your `test-react-app`'s jsx, and we should be in business.


## Credits

- [Mevlüt Can Tuna](https://medium.com/@mevlutcantuna/building-a-modern-react-component-library-a-guide-with-vite-typescript-and-tailwind-css-862558516b8d)
- [Robin Rendle](https://css-tricks.com/idea-simple-responsive-spreadsheet/)

