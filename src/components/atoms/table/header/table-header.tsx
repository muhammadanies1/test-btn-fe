import React from "react";

type TableHeaderProps = {
  headers: string[];
};

const TableHeader = ({ headers }: TableHeaderProps) => (
  <thead className="bg-gray-200 text-black">
    <tr className="h-9">
      {headers.map((header, index) => (
        <th key={index} className="p-2">
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
