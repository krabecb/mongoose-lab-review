require('./config/db.connection')

const Company = require('./models/Company')

//Create Apple
// async function createApple() {
//     try {
//         const data = {
//             name: "Apple",
//             founded: "April 1, 1976",
//             employees: 2,
//             active: false,
//             products: ['computers'],
//             CEO: {name: "Steve Jobs", age: 21}
//         }
        
//         const createdCompany = await Company.create(data)
//         console.log(createdCompany)
//     } catch (err) {
//         console.log(err)
//     }
// }
// createApple()

//Create Google 
// async function createGoogle() {
//     try {
//         const data = {
//             name: "Google",
//             founded: "September 4, 1998",
//             employees: 57100,
//             active: true,
//             products: ['search', 'maps', 'email'],
//             CEO: {name: "Larry Page", age: 43}
//         }
        
//         const createdCompany = await Company.create(data)
//         console.log(createdCompany)
//     } catch (err) {
//         console.log(err)
//     }
// }
// createGoogle()

//Update Apple
// async function updateApple() {
//     try {
//         const data = {
//             name: "Apple Inc",
//             founded: "April 1, 1976",
//             employees: 66000,
//             active: true,
//             products: ['computers', 'phones', 'tablets'],
//             CEO: {name: "Tim Cook", age: 56}
//         }
        
//         const updatedCompany = await Company.updateOne({name: "Apple"}, data)
//         console.log(updatedCompany)
//     } catch (err) {
//         console.log(err)
//     }
// }
// updateApple()

//Find Apple and Log Employees
// async function findAppleEmployees() {
//     try {
//         const foundCompany = await Company.findOne({"name": "Apple Inc"})
//         console.log(foundCompany.employees)
//     } catch (err) {
//         console.log(err)
//     }
// }
// findAppleEmployees()

//Find Google and Log Employees
// async function findGoogleEmployees() {
//     try {
//         const foundCompany = await Company.findOne({"name": "Google"})
//         console.log(foundCompany.employees)
//     } catch (err) {
//         console.log(err)
//     }
// }
// findGoogleEmployees()

//Delete Apple
// async function deleteApple() {
//     try {
//         const deleteResponse = await Company.deleteOne({"name": "Apple Inc"})
//         console.log("Deleted: ", deleteResponse)
//     } catch (err) {
//         console.log(err)
//     }
// }
// deleteApple()

//Delete Google
// async function deleteGoogle() {
//     try {
//         const deleteResponse = await Company.deleteOne({"name": "Google"})
//         console.log("Deleted: ", deleteResponse)
//     } catch (err) {
//         console.log(err)
//     }
// }
// deleteGoogle()