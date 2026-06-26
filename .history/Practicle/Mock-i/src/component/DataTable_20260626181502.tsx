export default function DataTable<T>(prop: {
  presentableColumns: Array<keyof T>;
  data: T[];
}) {
  return <div></div>;
}
