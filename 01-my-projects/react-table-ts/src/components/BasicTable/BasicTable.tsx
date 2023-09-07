import { ReactNode } from "react";
import { 
    useReactTable,
    flexRender,
    getCoreRowModel,
    ColumnDef
} from "@tanstack/react-table";
import classNames from "./BasicTable.module.css";

type TBasicTable<TData> = {
    columns: ColumnDef<TData, unknown>[],
    data: TData[]
}

const BasicTable = <TData extends object>({ columns, data }: TBasicTable<TData>) => {
    const tableInstance = useReactTable<TData>({
        columns: columns,
        data: data,
        getCoreRowModel: getCoreRowModel()
    });

    /**
     * `rowModel` contains all rows for the table's body. However this model is calculated after all processing from other features has been applied. It requires that we first apply atleast one rowModel hook, like `getCoreRowModel()` on the `tableInstance`.
     * @see https://tanstack.com/table/v8/docs/api/core/table#getrowmodel
     */
    const rowModel = tableInstance.getRowModel();
    const headerGroups = tableInstance.getHeaderGroups();

    return (
        <table className={classNames.table}>
            <thead>
                {headerGroups.map((headerGroup) => {
                    return (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                    >
                                        {header.column.columnDef.header as ReactNode}
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

export default BasicTable;