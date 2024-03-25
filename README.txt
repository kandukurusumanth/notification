1->started with notification service with db:model as ticket
2->added some fields to it
3->this service mainly used to send the gmail to the user
4->now we installed nodemailer to send email to everyone who have entered
5->now create a your own mail to send the message so a get the 2-steps verficiation done through
    manage google account and then see go to then after that again go to 2-steps verficiation
    now got to last you will see app password enter any text in it and the get some code from there
    by clicking on create
6->config mail according dont put comman after the GMAIL which gone take that also and can provide this
    error:Invalid login: 535-5.7.8 Username and Password not accepted. For more information, go to
    so, be careful 
7->there  some function like create ticket and many more then after this
8->setup the rabbitmq  in the booking service not in notification server
    1->just do localhost:15672
    2->this is will open the rabbitmq dashboard then
    3->to connect your application to rabbitmq there  is package  amqplib
    4->this is help you to connect to rabbitmq 
    5->just install 
    6->why do we use rabbitmq?
        in simple words to make the notification scaleable or simply not to 
        have heavy request coming to notification due to which notification server
        can't handle properly we can use some know as the rabbitmq it make the notification
        server to handle the request properly 
9->after seeting up rabbitmq
    1->read the docs properly
    2->await channel.sendToQueue(queue, Buffer.from('something to do'))
    3->in the above sendToQueue(queue)
        1->this queue which is present in sendToQueue is important
            because that queue should have the name of the queue you have created so
            this is one of the important
10->start the use of queue
    const queue=await channel.sendToQueue(queue, Buffer.from('something to do'))
    this queue will return  true
