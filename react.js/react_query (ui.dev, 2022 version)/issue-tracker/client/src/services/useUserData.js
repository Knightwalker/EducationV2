import { useQuery } from "@tanstack/react-query";

const useUserData = (userId) => {
    const usersData = useQuery({
        queryKey: ["users", userId],
        queryFn: () => {
            return fetch(`http://localhost:5000/api/user/${userId}`).then(res => res.json())
        },
        enabled: !!userId
    });
    return usersData;
}

export default useUserData;