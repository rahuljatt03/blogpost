import EmployeeModel from "../models/BlogPost.js"

export const CreateEmployee=async(req,res)=>{
    try{
        const empData=await EmployeeModel.create({
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary});
        if(empData) res.status(201).send({message:"BlogPost CReated!!!"});
        else res.Status(404).send({message:"Unable To Create BlogPost!!!"});
    }catch(error){
        console.log("Fail To Submit Data!!!");
    }
        };


        export const UpdateEmployee=async(req,res)=>{
            try{
                const empData=await EmployeeModel.findByIdAndUpdate(
                    {_id:req.body._id},
                    {name:req.body.name,
                        address:req.body.address,
                        salary:req.body.salary,
                    });
                if(empData) res.status(200).send({message:"BlogPost  updated!!!"});
                else res.status(404).send({message:"Unable To update BlogPost!!!"});
            }catch(error){
                console.log("Fail To Submit Data!!!");
            }
                };

        
                export const DeleteEmployee=async(req,res)=>{
                    try{
                        const empData=await EmployeeModel.deleteOne({_id:req.body.id});

                        // if(empData.deleteCount==1)
                        //     res.status(200).send({message:"Employee Delete!!!"});
                        //  else res.status(404).send({message:"Unable tp Delete Employee !!"});

                        if(empData) res.status(200).send({message:"BlogPost Delete!!!"});
                         else res.status(404).send({message:"Unable tp Delete BlogPost !!"});

                         
                    } catch(error){
                        console.log("Fail to Submit Data !!!");
                    }
                };
export const GetEmployee=async(req,res)=>{
    try{
        const empData=await EmployeeModel.find();
        if(empData)
        res.status(200).send({empData});
                    }catch(error){
                        console.log("Find to Submit Data !!!");
                    }
                };
        
