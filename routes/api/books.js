const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;

//contains two routes, one which calls a .get and a .post from book controller
//the other pulls an id from the route, and runs a find, update and remove from book controller.