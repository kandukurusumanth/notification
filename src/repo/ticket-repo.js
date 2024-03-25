const {Ticket} = require("../models/index");
const CrudRepository = require("./crud-repo");

class ticketrepo extends CrudRepository{
    constructor(){
        super(Ticket)
    }
    async getpending(){
        try {
            const response = await Ticket.findAll({where:{
                status:'PENDING'
            }}) 
            return response
        } catch (error) {
            throw error
        }
    }
}

module.exports=ticketrepo