import { 
    createColumnHelper, 
    ColumnDef 
} from "@tanstack/react-table";
import BasicTable from "./BasicTable"
import mockData from "../mockData.json";

type TMockData = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    date: string
} 

const columnHelper = createColumnHelper<TMockData>();

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
] as ColumnDef<TMockData, unknown>[];

const ExampleUsage = () => {
    return (
        <BasicTable 
            columns={mockColumns} 
            data={mockData}
        />
    )
}

export default ExampleUsage;