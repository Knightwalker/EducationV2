import {
    useReactTable,
    createColumnHelper,
    flexRender,
    getCoreRowModel
} from "@tanstack/react-table";
import "./BasicTableWithSelect.css";

// Components
import IndeterminateCheckbox from "./IndeterminateCheckbox";

// Data
import mockData from "../mockData.json";

const columnHelper = createColumnHelper();

const mockColumns = [
    {
        id: "select",
        header: ({ table }) => {
            // TODO: How does the magic with the checkbox minus icon happens. Research the indeterminate attribute
            return (
                // <input 
                //     type="checkbox" 
                //     checked={table.getIsAllRowsSelected()}
                //     indeterminate={table.getIsSomeRowsSelected()}
                //     onChange={table.getToggleAllRowsSelectedHandler()}
                // />
                <IndeterminateCheckbox
                    checked={table.getIsAllRowsSelected()}
                    indeterminate={table.getIsSomeRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                />
            )
        },
        cell: ({ row }) => (
            <input
                name="checkbox"
                type="checkbox"
                checked={row.getIsSelected()}
                disabled={!row.getCanSelect()}
                onChange={row.getToggleSelectedHandler()}
            />
        ),
    },
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

const BasicTableWithSelect = () => {
    const tableInstance = useReactTable({
        columns: mockColumns,
        data: mockData,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true
    });

    /**
     * `rowModel` contains all rows for the table's body. However this model is calculated after all processing from other features has been applied. It requires that we first apply atleast one rowModel hook, like `getCoreRowModel()` on the `tableInstance`.
     * @see https://tanstack.com/table/v8/docs/api/core/table#getrowmodel
     */
    const rowModel = tableInstance.getRowModel();

    return (
        <div>
            <table>
                <thead>
                    {tableInstance.getHeaderGroups().map((headerGroup) => {
                        return (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    // const originalValue = header.column.columnDef.header;
                                    const computedValueEl = flexRender(header.column.columnDef.header, header.getContext());

                                    return (
                                        <th
                                            key={header.id}
                                            colSpan={header.colSpan}
                                        >
                                            {computedValueEl}
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
            <br/>
            <div>Selected Rows:</div>
            <div>{tableInstance.getSelectedRowModel().rows.map((row) => {
                return (
                    <div key={row.id}>
                        {JSON.stringify(row.original)}
                    </div>
                )
            })}</div>
        </div>
    );
}

export default BasicTableWithSelect;