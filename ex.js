{ 
	key	: value,
	key	: value
}

person = {
	firstname	: 'Natalia',
	lastname	: 'Fiero',
	height		: 63,
	interests 	: [
			'golf',
			'dressage'
	]
};

person.firstname;
person.interests[0];

people = [
	{
		firstname	: 'Natalia',
		lastname	: 'Fiero',
		height		: 63,
		interests 	: [
			'golf',
			'dressage'
		]
	},
	{
		firstname 	: 'Andy',
		lastname	: 'Andydy',
		height 		: 82,
		interests	: [
			'kites',
			'basketball'
		]
	}

];

numbers = [
	4,
	7,
	8,
	6,
	9,
	1,
	2
];

i = 0;
while (i < numbers.length) { 
	numbers[i]++; // starting from 0, add i + 1 = 1; 
	i++; // increment i = 0, now i = 1;
}




----



i = 0;
while (i < numbers.length) { 
	numbers[i]++;
	i++; 
}

function changeNumber(number) {
	numbers[i] = (numbers[i] * numbers[i] - 6)/4;
	if (numbers[i] < 10) {
		numbers[i] = 7;
	}
	return number + 5;
}

for (i = 0; i < numbers.length; i++) {
	numbers[i] = changeNumber(numbers[i]);
}





firstname = [];
lastname = [];
interests = [];
averageHeight = [];

people[0].height; //82
people[1].height; //63

divide by

people.length; //2

