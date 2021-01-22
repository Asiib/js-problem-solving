


/*
	***Kilometer to meter conversion function***
	This function help you to convert kilometer to meter value
*/
function kilometerToMeter(kilometer=0){
	if ("number" === typeof(kilometer) && 0 <= kilometer) {
		return Math.round(kilometer * 1000); 
	}
	return `Input Error! please pass a positive number as argument of "kilometerToMeter" function.`;
}
var kiloToMeter = kilometerToMeter(167);
console.log(kiloToMeter);

/*
	Budget Calculor function 
	This function calculates total budget according to given number of elements
*/
function budgetCalculator(watch=0,phone=0,laptop=0) {
	if ("number" === typeof(watch) && "number" === typeof(phone) && "number" === typeof(laptop)) {
		// check negative value of argument
		if (0<= watch && 0 <= phone && 0 <= laptop) {
			let totalBudget = watch*50+phone*100+laptop*500;
			return totalBudget;
		}
		return `Input Error! please pass a positive number as argument of "budgetCalculator" function.`;
	}
	return `Type Error! please pass a number type argument into "budgetCalculator" function.`;
}
var totalBudgetCalculator = budgetCalculator(3,5,2);
console.log(totalBudgetCalculator);

/*
	***Hotel Cost function***
	This function calculates total cost of staying in hotel with discounted price based on condition
*/
function hotelCost(days){

	if ("number" === typeof(days)) {
		// check negative value of argument		
		if (0 <= days) {
			// general cost with regular price
			let totalCost = days * 100;
			// calculate discount based on condition
			let discount20 = ( (days - 10) * 20*100)/100;
			let discount30 = ( (days - 20) * 30*100)/100;

			if(10 >= days){
				return totalCost;
			}
			else if(10 <= days && 20 >= days){
				totalCost = totalCost - discount20;
				return totalCost;
			}
			else if(20 < days){
				totalCost = totalCost - (discount20 + discount30);
				return totalCost;
			}
		}
		return `Input Error! please pass a positive number as argument of "hotelCost" function`;
	}
	return `Type Error! please pass a positive number as argument of "hotelCost" function`;
}
var hotelTotal = hotelCost(24);
console.log(hotelTotal);


/*
	Mega Friend Function 
	This function can find maximum number of character within an array
*/
function megaFriend(friends = ['hasin hayder','jhankar mahbub','tamim shahriar subin','abu ashraf masnun']){
	// check the type and if array is not empty
	if ('object' === typeof(friends) && 0 !== friends.length && '' !== friends[0]) {
		let friend = friends[0];
		for (let i = 0; i < friends.length; i++) {
			let nameLength = friends[i].length;
			if (nameLength > friend.length) {
				friend = friends[i];
			}
		}
		return friend;
	}
	return `Invalid argument type! please fill at least one item into an array then pass it as an argument to "megaFriend" function.`;
}
var maxFriend = megaFriend();
console.log(maxFriend);

