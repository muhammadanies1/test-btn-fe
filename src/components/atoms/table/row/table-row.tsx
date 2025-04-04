type TableRowProps<T> = {
  data: T;
  columns: (keyof T)[];
};

const TableRow = <T,>({ data, columns }: TableRowProps<T>) => (
  <tr className="hover:bg-gray-100">
    {columns.map((column) => (
      <td key={String(column)} className="p-2">
        {String(data[column])}
      </td>
    ))}
  </tr>
);

export default TableRow;
