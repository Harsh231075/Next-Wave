const jwt = require('jsonwebtoken');

// Authentication middleware
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Check if Authorization header is present
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Extract token from header
  const token = authHeader.split(' ')[1];
  console.log(token);
  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach user information to the request object
    console.log(decoded.id);
    req.user = decoded.id;

    next(); // Continue to the next middleware or route handler
  } catch (err) {
    console.error('Error verifying token:', err.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
