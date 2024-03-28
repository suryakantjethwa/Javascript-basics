
function checkIsSuccess(data){

    return new Promise((resolve, reject) => {
        if(data === "success"){
            return resolve("successfully executed");
        } else {
            return reject("Error occurred");
        }
        
    })
}

checkIsSuccess('success').then((result) => {
 console.log(result);
})
console.log(checkIsSuccess('success'));

