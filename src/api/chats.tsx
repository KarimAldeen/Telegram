import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"



const API = {
    
    GET:"/api/chats/",
    ADD:"/api/chats",
    DELETE:"/api/chats",
    UPDATE:"/api/chats"
}

const KEY = "CHATS"

export const useGetAllChats= (params?:any) => useGetQuery(KEY , API.GET, params)
export const useAddChats= () => useAddMutation(KEY , API.ADD)
export const useUpdateChats= (params?:any) => useUpdateMutation(KEY , API.GET, params)
export const useDeleteChats= (params?:any) => useDeleteMutation( KEY , API.DELETE)
