import { Request, Response } from 'express';
import { prisma } from '../lib/ctx';
import asyncHandler from 'express-async-handler';
import { verify } from 'argon2';
import { signJWT } from '../lib/signJWT';

// @desc Auth user
// @route POST /api/auth/login
// @access Public
export const authUser = asyncHandler(
	async (req: Request, res: Response, next) => {
		const { email, password } = req.body;
		if (!email || !password) {
			res.status(400);
			throw new Error('Email and password are required');
		}
		const user = await prisma.user.findUnique({
			where: {
				email
			}
		});
		if (!user) {
			res.status(401);
			throw new Error('Invalid credentials');
		}

		const isValidPassword = await verify(user?.password, password);
		if (isValidPassword) {
			const token = signJWT(user.id);
			res.json({ user, token });
		} else {
			res.status(401);
			throw new Error('Email and password are not correct');
		}
	}
);
