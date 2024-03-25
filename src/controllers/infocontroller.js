
function control (req,res){
    return res.json({
        sucess:true,
        message:'ok',
        data:{},
        error:{}
    })
}
module.exports={
    control
}