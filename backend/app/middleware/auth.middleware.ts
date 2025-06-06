import asyncHandler from 'express-async-handler';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { env } from '../lib/env';
import { prisma } from '../lib/ctx';
import { userFields } from '../lib/user.utils';
export const protect = asyncHandler(async (req, res, next) => {
	let token;
	if (req.headers.authorization?.startsWith('Bearer')) {
		// take token without Bearer:
		token = req.headers.authorization.split(' ')[1];
		const decodedToken = jwt.verify(token, env.JWT_SECRET);
		// ===== ! ======
		if (typeof decodedToken === 'string') {
			res.status(401);
			throw new Error('Invalid token format');
		}

		// Проверяем различные возможные поля
		const payload = decodedToken as JwtPayload;
		const userId = payload.userId || payload.id || payload.sub;

		if (!userId || typeof userId !== 'number') {
			res.status(401);
			throw new Error('Invalid token structure');
		}
		// ===== ! ======
		const userFound = await prisma.user.findUnique({
			where: {
				id: userId
			},
			select: userFields
		});

		if (userFound) {
			req.user = userFound;
			next();
		} else {
			res.status(401);
			throw new Error('un authorized');
		}
	}
});
