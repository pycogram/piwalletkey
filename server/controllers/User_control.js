const UserModel = require('../models/User');

const registerUser = async(req, res) => {
    console.log(234567);
/************************************ Collect info from user************************************/ 
    // Grab data from request body
    const {username, full_name, email, wallet} = req.body;

    // Check if email already exist
    const exist = await UserModel.findOne({ email });
    if (exist) {
      return res.status(400).json({ error: "Email address already reported" });
    }

    try {
        // Register the user
        await UserModel.create({ username, full_name, email, wallet });

        // Send the response
        res.status(200).json({ email});
    } catch (error) {
        res.status(500).json({ error: error.message });
    };

}

module.exports = registerUser;