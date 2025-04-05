// //Task_1.1
// const a = 2
// const b = 3
// console.log(a * b)
// //Task_1.2
// const c = 10
// const d = 5
// console.log(c / d)
// //Task_1.3
// const e = 4
// const f = 2
// console.log(e + f)
// //Task_1.4
// const numberConst = 11
// const isTrue = true
// const language = 'java script'
// const stringNumber = '100'
// console.log(numberConst)
// console.log(isTrue)
// console.log(language)
// console.log(stringNumber)
// //Task_1.5
// let num = 1
// num += 11
// num -= 11
// num *= 11
// num /= 11
// num++
// num--
// //Task_2.1
// const numberUser = Number(prompt('Enter a number'))
// console.log(Math.pow(numberUser, 2))
// //Task_2.2
// const numberUser1 = Number(prompt('Enter a first number'))
// const numberUser2 = Number(prompt('Enter a second number'))
// console.log((numberUser1 + numberUser2) / 2)
// //Task_2.3
// const minutesUser = Number(prompt('Enter a number of minutes'))
// console.log(minutesUser * 60)
// //Task_2.4
// const greeting = 'Hello'
// const nameUser = prompt('Enter your name')
// console.log(greeting + ', ' + nameUser + '!')
//Task_2.5
const firstNameUser = prompt('Enter your first name') || 'John'
const lastNameUser = prompt('Enter your last name') || 'Doe'
const emailUser = prompt('Enter your email') || 'example@example.com'
const phoneUser = prompt('Enter your phone number') || '+380000000000'
const ageUser = Number(prompt('Enter your age')) || 18
const addressUser = prompt('Enter your address') || 'Unknown address'

document.write(
	`<div class="user-card">
		<h1 class="user-name">${firstNameUser} ${lastNameUser}</h1>
		<p class="user-info">Email: ${emailUser}</p>
		<p class="user-info">Phone: ${phoneUser}</p>
		<p class="user-info">Age: ${ageUser}</p>
		<p class="user-info">Address: ${addressUser}</p>
	</div>`
)
