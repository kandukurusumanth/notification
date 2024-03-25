const {ticketrepo} = require('../repo/index')
const ticketservice = new ticketrepo();
async function createticket(data){
    try {
        const ticket = await ticketservice.create(data)
        return ticket
    } catch (error) {
        throw error
    }
}
async function getallpendingtickets(){
    try {
        const ticket = await ticketservice.getpending();
        return ticket
    } catch (error) {
        throw error
    }
}
module.exports={
    createticket,
    getallpendingtickets
}