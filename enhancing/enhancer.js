module.exports = {
	succeed,
	fail,
	repair,
	get,
};

function succeed(item) {
	if (item.enhancement < 20) {
		item = { ...item, enhancement: item.enhancement + 1 };
		return item;
	} else {
		return { ...item };
	}
}

function fail(item) {
	if (item.enhancement < 15) {
		return { ...item, durability: item.durability - 5 };
	} else if (item.enhancement >= 15 && item.enhancement <= 16) {
		return { ...item, durability: item.durability - 10 };
	} else if (item.enhancement > 16) {
		return {
			...item,
			durability: item.durability - 10,
			enhancement: item.enhancement - 1,
		};
	}
}

function repair(item) {
	item.durability = 100;
	return { ...item };
}

function get(item) {
	if (item.enhancement === 0) {
		return { ...item };
	} else {
		return { ...item, name: `[+${item.enhancement}] ${item.name}` };
	}
}
