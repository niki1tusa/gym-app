import { Request, Response } from 'express';
import { prisma } from '../lib/ctx';
import asyncHandler from 'express-async-handler';
import { passwordHash } from '../lib/passwordHash';
import { signJWT } from '../lib/signJWT';
import { userFields } from '../lib/user.utils';
import { faker } from '@faker-js/faker';
import Cookies from 'js-cookie';
// @desc Register user
// @route POST /api/auth/public
// @access Public
export const registerUser = asyncHandler(
	async (req: Request, res: Response, next) => {
		const { email, password } = req.body;
		const exUser = await prisma.user.findUnique({
			where: {
				email
			}
		});
		if (exUser) {
			res.status(400);
			throw new Error('User already exists');
		}
		const user = await prisma.user.create({
			data: {
				name: faker.name.fullName(),
				email,
				password: await passwordHash(password)
			},
			select: userFields
		});
		const token = signJWT(user.id);
        // Cookies.set('token-workout', token, { expires: new Date(Date.now() + 3000000) })
		res.json({ user, token });
	}
);
