export const login = (item)=>{

    return {
        type:"login",
        isLoggedIn:true,
        user:{name:item.user.name,id:item.user.id}};
    }