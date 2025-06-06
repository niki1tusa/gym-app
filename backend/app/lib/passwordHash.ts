import argon from 'argon2';
const ARGON_OPTIONS = {
	type: argon.argon2i,
	memoryCost: 2 ** 16,
	timeCost: 3,
	parallelism: 1
};
export const passwordHash = async (password: string) => {
	return await argon.hash(password, ARGON_OPTIONS);
};
