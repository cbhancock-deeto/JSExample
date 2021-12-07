let arr = [
	true,
	8,
	8.8,
	{
		Name: 'Cody',
		EyeColor: 'Blue',
	},
	[3, 2, 1],
];

arr.forEach((e) => {
	if (typeof e === 'boolean') {
		console.log(e);
	} else if (Array.isArray(e)) {
		e.forEach((a) => {
			console.log(a);
		});
	} else if (typeof e === 'object') {
		Object.keys(e).forEach((a) => {
			console.log(a + ': ' + e[a]);
		});
	}
});
