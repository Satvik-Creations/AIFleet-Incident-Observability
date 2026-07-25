const validateIncident = (req,res,next)=>{

const{

service,
status,
error,
environment

}=req.body;


if(
!service ||
!status ||
!error ||
!environment
){

return res.status(400).json({

success:false,
message:"All fields are required."

});

}


next();

};


module.exports=validateIncident;