import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"



const API = {
    
    GET:"/api/message/",
    ADD:"/api/message/",

   
}

const KEY = "MESSAGE"

export const useGetAllMessage= (params?:any) => useGetQuery(KEY , API.GET, params)
export const useAddMessage= (params?:any) => useAddMutation(KEY , API.ADD,params)
