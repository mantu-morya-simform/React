import React from "react";

interface UserDetailsTable {
  id: string;
  name: string;
  age: number;
  salary: number;
}

const Test = () => {
  return (
    <div>
      <DataTable<UserDetailsTable>
        presentableColumns={["id", "name", "salary"]}
        data={[{ id: "1", name: "Mark", age: 21, salary: 35_000 }]}
      />
    </div>
  );
};

export default Test;

// columnsOrder has to be from the interface that is mentioned.
