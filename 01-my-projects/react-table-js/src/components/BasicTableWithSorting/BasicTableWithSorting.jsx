import {
    useReactTable,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getSortedRowModel
} from "@tanstack/react-table";
import mockData from "../mockData.json";
import "./BasicTableWithSorting.css";

const columnHelper = createColumnHelper();

const mockColumns = [
    columnHelper.accessor("id", {
        header: "Id"
    }),
    columnHelper.accessor("first_name", {
        header: "First Name"
    }),
    columnHelper.accessor("last_name", {
        header: "Last Name"
    }),
    columnHelper.accessor("email", {
        header: "Email"
    }),
    columnHelper.accessor("phone", {
        header: "Phone"
    }),
    columnHelper.accessor("date", {
        header: "Date",
        cell: (props) => {
            // This is how we are able to format cell data, before we display it. However this approach requires that we use the function `flexRender()`
            const value = props.getValue();
            const date = value.split("/").join("-");
            return date;
        }
    })
];

const BasicTableWithSorting = ({ columns = mockColumns, data = mockData }) => {
    const tableInstance = useReactTable({
        columns: columns,
        data: data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel()
    });

    /**
     * `rowModel` contains all rows for the table's body. However this model is calculated after all processing from other features has been applied. It requires that we first apply atleast one rowModel hook, like `getCoreRowModel()` on the `tableInstance`.
     * @see https://tanstack.com/table/v8/docs/api/core/table#getrowmodel
     */
    const rowModel = tableInstance.getRowModel();

    return (
        <table>
            <thead>
                {tableInstance.getHeaderGroups().map((headerGroup) => {
                    return (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                const isSorted = header.column.getIsSorted();

                                return (
                                    <th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {header.column.columnDef.header}
                                        {{ asc: " UP", desc: " DOWN" }[isSorted ?? null]}
                                    </th>
                                );
                            })}
                        </tr>
                    );
                })}
            </thead>
            <tbody>
                {rowModel.rows.map((row) => {
                    const cells = row.getAllCells();
                    return (
                        <tr key={row.id}>
                            {cells.map((cell) => {
                                // const originalValue = cell.getValue();
                                const computedValueEl = flexRender(cell.column.columnDef.cell, cell.getContext());
                                return (
                                    <td key={cell.id}>
                                        {computedValueEl}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default BasicTableWithSorting;