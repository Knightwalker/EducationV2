import { USERS_URL } from "../../constants";
import { apiSlice } from "../apiSlice";

const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => {
        return {
            login: builder.mutation({
                query: (data) => {
                    const url = USERS_URL + "/auth";
                    return {
                        url: url,
                        method: "POST",
                        body: data
                    }
                } 
            })
        } 
    }
});

const { useLoginMutation } = usersApiSlice;
export { useLoginMutation }