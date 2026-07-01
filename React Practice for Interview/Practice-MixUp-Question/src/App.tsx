import "./App.css";
import DataTable from "./component/DataTable";
import GenericArrayList from "./component/GenericArrayList";
import ReverseElement from "./component/ReverseElement";

interface UserDetailsTable {
  id: string;
  name: string;
  age: number;
  salary: number;
}

function App() {
  return (
    <>
      <ReverseElement />
      <GenericArrayList arr={[1, 2, 3, 4, 5]} />
      <GenericArrayList arr={["satyam", "mantu"]} />

      <DataTable<UserDetailsTable>
        presentableColumns={["id", "name", "salary"]}
        data={[{ id: "1", name: "Mark", age: 21, salary: 35_000 }]}
      />
    </>
  );
}

export default App;
