const { repair, succeed, fail } = require('./enhancer.js');

// test away!
describe('enhancer functions', () => {
	describe('test repair function', () => {
		it('restor item durability to 100', () => {
			const item = {
				name: 'Ewa',
				enhancement: 16,
				durability: 10,
			};
			repair(item);
			expect(item.durability).toBe(100);
		});
	});

	describe('test success function', () => {
		it('return enhancement incresed by 1', () => {
			const input = {
				name: 'test',
				enhancement: 14,
				durability: 5,
			};

			const result = {
				name: 'test',
				enhancement: 15,
				durability: 5,
			};

			const succeedResult = succeed(input);
			expect(succeedResult.enhancement).toBe(result.enhancement);
		});
	});
	describe('test fails function', () => {
		it('return correct value for enhancement and durability', () => {
			const input = {
				name: 'test',
				enhancement: 17,
				durability: 15,
			};

			const result = {
				name: 'test',
				enhancement: 16,
				durability: 5,
			};

			const failResult = fail(input);

			expect(failResult).toEqual(result);
		});
	});
});
