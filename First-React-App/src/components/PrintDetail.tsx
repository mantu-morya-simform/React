import userdata from "../data/user.json";
console.log(userdata);

function PrintDetail() {
  return (
    <>
      <h1>Name : {userdata.name}</h1>
      <h1>Email : {userdata.email}</h1>
      <h1>Age : {userdata.age}</h1>
    </>
  );
}

export default PrintDetail;
