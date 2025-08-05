const userSchema = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Simple email regex validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, errors: [{ msg: 'Invalid email format!' }] });
        }

        // Password must be at least 6 characters and contain a number
        if (password.length < 6 || !/\d/.test(password)) {
            return res.status(400).json({
                success: false,
                errors: [{ msg: 'Password must be at least 6 characters and include a number.' }]
            });
        }

        const existingUser = await userSchema.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, errors: [{ msg: 'Email is already registered!' }] });
        }

        //Encrypt the password to secure
        const salt = await bcrypt.genSalt(10);
        let securPass = await bcrypt.hash(password, salt);


        const user = new userSchema({ name, email, password: securPass });
        const userData = await user.save();

        //To securly Show the user Data which render on frontend
        const { password: _, ...safeUser } = userData._doc;


        return res.status(200).json({ success: true, message: 'User registered successfully!', user: safeUser });

    } catch (error) {
        console.log('Internal Server Error:', error);
        return res.status(500).json({ success: false, message: `Internal server error : ${error}` });
    }
};



const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)

        if (!email || !password) {
            return res.status(400).json({ success: false, errors: [{ msg: 'Email and password are required.' }] });
        }

        const user = await userSchema.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, errors: [{ msg: 'Email is Not registered!' }] });
        }

        const passMatch = await bcrypt.compare(password, user.password);

        if (!passMatch) {
            return res.status(400).json({ success: false, errors: [{ msg: 'Invalid Credentials!' }] });
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, jwtSecret); // imp

        return res.status(200).json({ success: true, message: 'User logged-in successfully!', authToken: authToken });

    } catch (error) {
        console.log('Internal Server Error:', error);
        return res.status(500).json({ success: false, message: `Server Error : ${error}` });
    }
};




module.exports = { register, loginUser };