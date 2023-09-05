import {
    useReactTable,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel
} from "@tanstack/react-table";
import mockData from "../mockData.json";
import "./BasicTableWithPagination.css";

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

const BasicTableWithPagination = () => {
    const tableInstance = useReactTable({
        columns: mockColumns,
        data: mockData,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
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
                                    return (
                                        <th
                                            key={header.id}
                                            colSpan={header.colSpan}
                                        >
                                            {header.column.columnDef.header}
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
            <div>
                <button
                    onClick={() => tableInstance.setPageIndex(0)}
                    disabled={!tableInstance.getCanPreviousPage()}
                >
                    First Page
                </button>
                <button
                    onClick={() => tableInstance.previousPage()}
                    disabled={!tableInstance.getCanPreviousPage()}
                >
                    Previous Page
                </button>
                <button
                    onClick={() => tableInstance.nextPage()}
                    disabled={!tableInstance.getCanNextPage()}
                >
                    Previous Page
                </button>
                <button
                    onClick={() => tableInstance.setPageIndex(tableInstance.getPageCount() - 1)}
                    disabled={!tableInstance.getCanNextPage()}
                >
                    Last Page
                </button>
            </div>
            You are on page number: {" "} {tableInstance.options.state.pagination.pageIndex}
            <br />
            Total pages: {" "} {tableInstance.getPageCount() - 1}
            <br />
            Go to page: {" "}
            <input
                type="number"
                value={tableInstance.options.state.pagination.pageIndex}
                onChange={(e) => tableInstance.setPageIndex(e.target.value)}
            />
            <br />
            Page Size: {" "}
            <select
                value={tableInstance.options.state.pagination.pageSize}
                onChange={(e) => tableInstance.setPageSize(e.target.value)}
            >
                {[10, 25, 50].map((sizeValue, idx) => {
                    return (
                        <option key={idx} value={sizeValue}>{sizeValue}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default BasicTableWithPagination;