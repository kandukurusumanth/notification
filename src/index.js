const express = require('express');
const {server} = require('./config/index')
const {email} = require('./config/index')  
const amqplib = require('amqplib')
const {ticketservice} = require('./service/index')
const connect = async ()=>{
    try {
        
        const queue = 'noti queue'
        const connection= await amqplib.connect('amqp://localhost');
        const channel=await connection.createChannel();
        await channel.assertQueue(queue)
        channel.consume(queue , async (msg)=>{
            const messgge =msg.content.toString();
            ticketservice.getmail(messgge)
            channel.ack(msg)
           
           
        })
    } catch (error) {
        console.log(error);
        
    }
}


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
const api = require('./router');
app.use('/api',api)
app.listen(server.PORT, async ()=>{
    console.log(`listening to portnumber:${server.PORT}`);
    await connect();
    console.log('queue started consume');
    // email.main();
    
})
