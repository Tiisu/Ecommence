// This is a temporary script to make a user an admin
// Run with: node make-admin.js your-email@example.com

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const email = process.argv[2];

if (!email) {
  console.error('Please provide an email address');
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(async () => {
    console.log("MongoDB connected");
    
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      
      if (!user) {
        console.error(`User with email ${email} not found`);
        process.exit(1);
      }
      
      // Update the user's role to admin
      user.role = 'admin';
      await user.save();
      
      console.log(`User ${email} is now an admin`);
      process.exit(0);
    } catch (error) {
      console.error('Error updating user:', error);
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
