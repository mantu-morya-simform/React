export default function DataTable<T>(prop: {
  presentableColumns: Required<keyof T>;
  data: T[];
}) {
  return <div></div>;
}
