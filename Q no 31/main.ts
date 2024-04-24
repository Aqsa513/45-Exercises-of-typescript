let userNames = ["Ayesha","Farwa","Admin","Qudsia","Maheen"]; 

// Remove all values fro our Array is empty
userNames = []

// If statment for checking Lenght of our Arrary is empty?
if(userNames.length === 0){
    console.log(" your Array in Empty we need to find some users!")
}else{
//  If Array is not empty Use ForEach Loop on Array

userNames.forEach(oneUser =>{
    if( oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser},thank you for logging in again.`)
    }
})
}
















