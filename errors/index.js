class receptError extends Error{}

class InvalidBody extends receptError{
    constructor(fields){
        super()
        this.fields=fields
        this.message=`Invalid body, required field:${this.fields.join(",")}`
        this.errorCode=400
    }
}

class InvalidCredentials extends receptError{
    constructor(){
        super()
        this.message=`Invalid credentials`
        this.errorCode=403
    } 
}
class unauthorized extends receptError{
    constructor(){
        super()
        this.message=`Unauthorized`
        this.errorCode=401
    }
}
class tokenExpired extends receptError{
    constructor(){
        super()
        this.message=`Token expired,please login again`
        this.errorCode=401
    }
}
class receptNotFound extends receptError{
    constructor(id){
        super()
        this.message=`recept with id ${id} not found`
        this.errorCode=404
    }
}


module.exports={ receptError,InvalidBody,InvalidCredentials,unauthorized,tokenExpired,receptNotFound }