export const jsonGenerate = (statusCode,message,data=null)=>{
    return{ststus:statusCode,message:message,data:data};
}