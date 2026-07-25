const{


sendIncident

}=require("../services/n8nService");


exports.analyzeIncident=async(req,res)=>{


const{

service,
status,
error,
environment

}=req.body;


const result=await sendIncident({


service,
status,
error,
environment


});


res.json(result);


};