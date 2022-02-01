export const logLibrary = () => {

console.log("In Library.js")
console.log(Date())

var today = new Date()

console.log(today.getFullYear())
console.log(today.getMonth() + 1)
console.log(today.getDate())
console.log(today.getHours())
console.log(today.getMinutes()) 
console.log(today.getSeconds())
console.log(today.getMilliseconds())

console.log("A unique id based on current timestamp can be:")
console.log('' + today.getFullYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + today.getMilliseconds())

}

export const getUniqueIdWithTs = () => {

    console.log("In getUniqueIdWithTs ")
    var today = new Date()
    console.log("A unique id based on current timestamp is:")
    var uniqueId = '' + today.getFullYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + today.getMilliseconds()
    console.log(uniqueId)

    return uniqueId
}
