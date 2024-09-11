const mongoose = require('mongoose');
const User = require('../models/User'); // Adjust the path if necessary
const bcrypt = require('bcryptjs');

// Database connection
mongoose.connect('mongodb://localhost:27017/db_url', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(error => console.log(error));

const createAdminUser = async () => {
  try {
    const adminExists = await User.findOne({ email: 'admin@example.com' });
    if (adminExists) {
      console.log('Admin user already exists');
      return;
    }

    const hashPassword = await bcrypt.hash('adminpassword', 12);

    const adminUser = new User({
      userName: 'AdminUser',
      email: 'admin@example.com',
      password: hashPassword,
      role: 'admin',
    });

    await adminUser.save();
    console.log('Admin user created successfully');
  } catch (error) {
    console.log('Error creating admin user:', error);
  } finally {
    mongoose.disconnect();
  }
};

createAdminUser();
