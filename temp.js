async function haaa(resolve) {
	await new Promise((resolve) => setTimeout(resolve, 10000));

	console.log("hi");
}
haaa(ta());
console.log("hellos");
function ta() {
	for (let j = 0; j < 1; j++) {
		for (let i = 0; i < 1000999900; i++) {
			if (i == 1000999900 - 1) console.log(i);
		}
	}
}
