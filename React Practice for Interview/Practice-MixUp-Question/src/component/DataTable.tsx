const DataTable = <T,>({}: {
  presentableColumns?: Partial<keyof T>[];
  data: T[];
}) => {
  return <div>DataTable</div>;
};

export default DataTable;
