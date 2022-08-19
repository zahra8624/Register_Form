
export const validation = (data, type)=>{
    const errors = {};

    if(!data.email){
        errors.email = "Email is required!"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Email address is invalid!"
    }else{
        delete errors.email
    }
    if(! data.password){
        errors.password = "Password is required!"
    }else if (data.password.length <6 ){
        errors.password = "password need to be 6 or more characters!"
    }
    else{
        delete errors.password
    }
    


    if( type ===  "signup"){


        
    if (!data.name.trim()){
        errors.name = "Name is required!"
    }
    else{
        delete errors.name
    }

        if(!data.confrimpassword){
            errors.confrimpassword = "You should confrim the password!"
        }else if (data.password !== data.confrimpassword){
            errors.confrimpassword = "Password don't match"
        }
        else{
            delete errors.confrimpassword
        }
    
        if(data.isAccepted){
            delete errors.isAccepted
        }
        else{
            errors.isAccepted = "Accept our regulations!"
        }
    








    }


    return errors;

} 