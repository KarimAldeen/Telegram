import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"



const API = {
    
    REGISTER:"/api/users/register",
    LOGIN:"/api/users/login",
}

const KEY = "Auth"
export const useLogin = () => useAddMutation(KEY , API.LOGIN)
export const useRegister = () => useAddMutation(KEY , API.REGISTER)
