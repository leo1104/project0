const user = require("../modals/users");
require("dotenv").config();

exports.user_get = async (req, res) => {
  const query = req.query.isLeader;

  let filter = {};
  if (query === 'true') {
    filter = { isLeader: true };
  } else if (query === 'false'||!query||query===undefined) {
    filter = { $or: [{ isLeader: false } ] };
  }

  try {
    const users = await user.find(filter);
    res.json(users);
  } catch (error) {
    console.error('Failed to retrieve users', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};


exports.addMember = async (req, res) => {
  const { fullname, desc, image, post,isLeader } = req.body;

  const newUser = new user({
    fullname,
    desc,
    image,
    post,
    isLeader
  });

  newUser.save((error, user) => {
    if (error) {
      console.error("Failed to add user", error);
      res.status(500).json({ error: "Failed to add user" });
    } else {
      res.json({
        userId: user._id,
        fullname: user.fullname,
        desc: user.desc,
        image: user.image,
        isLeader:user.isLeader
      });
    }
  });
};

exports.updateMember = async (req, res) => {
  const { fullname, desc, image, post, userId } = req.body;
  console.log(userId);

  user.findByIdAndUpdate(
    userId,
    { fullname, desc, image, post },
    { new: true },
    (error, updatedUser) => {
      if (error) {
        console.error("Failed to update user", error);
        res.status(500).json({ error: "Failed to update user" });
      } else {
        res.json({
          userId: updatedUser._id,
          fullname: updatedUser.fullname,
          desc: updatedUser.desc,
          image: updatedUser.image,
        });
      }
    }
  );
};

exports.deleteMember = async (req, res) => {
  const { userId } = req.body;

  user.findByIdAndRemove(userId, (error, deletedUser) => {
    if (error) {
      console.error("Failed to delete user", error);
      res.status(500).json({ error: "Failed to delete user" });
    } else if (!deletedUser) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json({
        message: "User deleted successfully",
        userId: deletedUser._id,
        fullname: deletedUser.fullname,
        desc: deletedUser.desc,
        image: deletedUser.image,
      });
    }
  });
};
