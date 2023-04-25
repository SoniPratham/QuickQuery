import React from 'react';
import { useTable } from 'react-table';

const Table = ({ data }) => {
  const columns = React.useMemo(
    () => [      {        Header: 'First Name',        accessor: 'first_name',      },      {        Header: 'Last Name',        accessor: 'last_name',      },      {        Header: 'Email',        accessor: 'email',      },      {        Header: 'Gender',        accessor: 'gender',      },      {        Header: 'Income',        accessor: 'income',      },      {        Header: 'City',        accessor: 'city',      },      {        Header: 'Car',        accessor: 'car',      },      {        Header: 'Quote',        accessor: 'quote',      },      {        Header: 'Phone Price',        accessor: 'phone_price',      },    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue', margin: 'auto' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold' }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', background: 'papayawhip' }}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
