class receptError extends Error{}

class InvalidBody extends receptError{
    constructor(fields){
        this.fields=fields
        this.message=`Invalid body, required field:${this.fields.join(",")}`
        this.errorCode=400
    }
}