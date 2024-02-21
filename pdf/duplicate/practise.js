async function disableUserTotp(req, res, next){
    //check preset user is primary
    //get user by :user 
   // let user = await UserGrp.GetUserInfo(req.body.username);
   //check is user be,ongs to samne company
   //same company disable, otherwise throw error user does not belongs to your company
   const userId = req.params.user;
    console.log("userId",userId);
    // let user1=await UserTotpUserModel.disableUserTotp(userId)
    // console.log("user1",user1);
    // console.log(user1._id);
    let user = await UserGrp.getUsersInfo(userId);
}