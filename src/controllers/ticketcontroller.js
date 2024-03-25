const {ticketservice} = require('../service/index')
async function createticketcontroller(req,res){
    try {
        const ticket = await ticketservice.createticket({
            subject:req.body.subject,
            content:req.body.content,
            recepientEmail:req.body.recepientEmail,
            status:req.body.status
        })
        return res.json({
            data:ticket
        })
    } catch (error) {
        console.log(error);
        return res.json({

        })
                
    }
}
module.exports={createticketcontroller}