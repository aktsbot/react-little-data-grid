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


