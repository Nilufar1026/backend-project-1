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

module.exports={ receptError,InvalidBody,InvalidCredentials }