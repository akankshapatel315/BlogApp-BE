const Blog = require("../Models/blogModel");
const authentication = require("../middleware/authJWT");

const addArticle = async (req: any, res: any) => {
  try {
    const { title, description, category, userId } = req.body;
    const createdUserId = req.body.userId;
    const newBlog = await new Blog({
      title,
      description,
      category,
      createdUserId,
    });
    await Blog.create(newBlog);

    res.status(200).send({ newBlog, message: "Blog created successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getAllArticles = async (req: any, res: any) => {
  try {
    const articles = await Blog.find();
    res
      .status(200)
      .send({ articles, message: "Blog are fetched successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const deleteArticles = async (req: any, res: any) => {
  try {
    const id = req.params;
    const data = await Blog.findByIdAndDelete(id);
    res.send(`${data} has been deleted..`);
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
};

const getArticleByUser = async (req: any, res: any) => {
  try {
    const id = req.query._id;
    const result = await Blog.find(id);
    if(!result)
      {
      res.status(200).send("Not Found Blog");
      }
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const updateArticle = async (req: any, res: any) => {
  try {
    const id = req.body._id;
    const updatedData = req.body;
    const result = await Blog.findByIdAndUpdate(id, updatedData);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = { addArticle, getAllArticles, deleteArticles, updateArticle };
