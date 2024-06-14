const expressServer = require("express");
const blogController = require("../Controllers/blogController");
const blogRouter = expressServer.Router();
const tokenauth = require("../middleware/authJWT");

// Route for creating a todo
blogRouter.use(expressServer.json());
blogRouter.post(
  "/addArticle",
  tokenauth.verifyToken,
  blogController.addArticle
);
blogRouter.get(
  "/getAllArticlesOfLoggedInUser",
  tokenauth.verifyToken,
  blogController.getAllArticlesByUser
);
blogRouter.post(
  "/updateArticle",
  tokenauth.verifyToken,
  blogController.updateArticle
);
blogRouter.get(
  "/getBlogByUserId/:id",
  tokenauth.verifyToken,
  blogController.deleteArticles
);

blogRouter.delete(
  "/deleteBlogs/:_id",
  tokenauth.verifyToken,
  blogController.deleteArticles
);

blogRouter.get(
  "/getAllArticles",
  tokenauth.verifyToken,
  blogController.getAllArticles
);


module.exports = blogRouter;
