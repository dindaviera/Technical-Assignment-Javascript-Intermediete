const isR18Plus = (age) => {
    return new Promise((resolve, reject) => {
        if (age > 18) {
            resolve("anda sudah dewasa")
        } else {
            reject("anda masih di bawah umur")
        }
    })
}
const printR18Plus = async () => {
//   const underAge = await isR18Plus(10);
//   const properAge = await isR18Plus(19);

//   console.log(underAge);
//   console.log(properAge);
  
    try {
        const underAge = await isR18Plus(10);
        console.log(underAge)
    } catch (error) {
        console.log(error)
    }
    
    try {
        const properAge = await isR18Plus(19);
        console.log(properAge)
    } catch (error) {
        console.log(error)
    }
}

printR18Plus();
