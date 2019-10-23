import jwt from 'jsonwebtoken';

import User from '../models/Users';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    console.log('email: ', email);
    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        token: jwt.sign({ id }, authConfig.secret, authConfig.expiresIn),
      },
    });
  }
}

export default new SessionController();
