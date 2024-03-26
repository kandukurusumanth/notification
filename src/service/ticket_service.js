const { server } = require('../config/index');
const {ticketrepo} = require('../repo/index')
const ticketservice = new ticketrepo();
const {email} = require('../config/index')  
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
async function getmail(userid){
    try {
            const user = await fetch (`${server.USER_API}/api/v1/user/${userid}`)
            const userdetails = await user.json();
            console.log('came to getmail function')
            await email.main(server.GMAIL,userdetails.data.email)
    } catch (error) {
        
        throw error
    }
}
module.exports={
    createticket,
    getallpendingtickets,
    getmail
}