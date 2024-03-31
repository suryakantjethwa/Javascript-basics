
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



    fetch('https://api.potterdb.com/v1/characters?sort=name').then((result) => {
       return result.json();
    }).then((response) => {
       console.log(response);
    })
  