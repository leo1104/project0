const blog = require("../modals/blogs");
require("dotenv").config();

exports.blog_get = async (req, res) => {
  blog.find({}, (error, blogs) => {
    if (error) {
      console.error("Failed to retrieve blogs", error);
      res.status(500).json({ error: "Failed to retrieve blogs" });
    } else {
      res.json(blogs);
    }
  });
};

exports.addBlog = async (req, res) => {
  const { title, desc, mainImage, fullDesc,images } = req.body;

  const newBlog = new blog({
    title,
    desc,
    mainImage,
    fullDesc,
    images,
  });

  newBlog.save((error, blogs) => {
    if (error) {
      console.error("Failed to add blog", error);
      res.status(500).json({ error: "Failed to add blog" });
    } else {
      res.json({
        blogId: blogs._id,
        title: blogs.title,
        desc: blogs.desc,
        mainImage: blogs.mainImage,
        fullDesc: blogs.fullDesc,
        images: blogs.images,
      });
    }
  });
};

exports.updateBlog = async (req, res) => {
  const { title, desc, mainImage, fullDesc, blogId,images } = req.body;

  blog.findByIdAndUpdate(
    blogId,
    { title, desc, mainImage, fullDesc,images },
    { new: true },
    (error, updateBlog) => {
      if (error) {
        console.error("Failed to update blog", error);
        res.status(500).json({ error: "Failed to update blog" });
      } else {
        res.json({
          blogId: updateBlog._id,
          title: updateBlog.title,
          desc: updateBlog.desc,
          mainImage: updateBlog.mainImage,
          fullDesc:updateBlog.fullDesc,
          images:updateBlog.images,
        });
      }
    }
  );
};

exports.deleteBlog = async (req, res) => {
  const { blogId } = req.body;

  blog.findByIdAndRemove(blogId, (error, deletedBlog) => {
    if (error) {
      console.error("Failed to delete blog", error);
      res.status(500).json({ error: "Failed to delete blog" });
    } else if (!deletedBlog) {
      res.status(404).json({ error: "blog not found" });
    } else {
      res.json({
        message: "blog deleted successfully",
        blogId: deletedBlog._id,
        title: deletedBlog.title,
      });
    }
  });
};
