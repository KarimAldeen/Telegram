import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"



const API = {
    
    GET:"/api/users/find/",
    ADD:"/example",
    DELETE:"/example",
    UPDATE:"/example"
}

const KEY = "USERS"

export const useGetAllUsers= (params?:any) => useGetQuery(KEY , API.GET, params)
export const useAddUsers= () => useAddMutation(KEY , API.ADD)
export const useUpdateUsers= (params?:any) => useUpdateMutation(KEY , API.GET, params)
export const useDeleteUsers= (params?:any) => useDeleteMutation( KEY , API.DELETE)
