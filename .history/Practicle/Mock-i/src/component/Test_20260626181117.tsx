import React from "react";

const Test = () => {
  return <div>Test</div>;
};

export default Test;


interface UserDetailsTable {
  id: string;
  name: string;
  age: number;
  salary: number;
}
 
<DataTable<UserDetailsTable> 
  presentableColumns=['id', 'name', 'salary']
  data=[{ id:'1', name:'Mark', age: 21, salary: 35_000 }] 
/>
 
// columnsOrder has to be from the interface that is mentioned. 
 