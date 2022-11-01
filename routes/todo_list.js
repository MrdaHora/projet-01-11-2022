const express = require("express");
const router = express.Router();
const todo_listController = require("../controllers/todo_listController");

router.get("/", todo_listController.list);
router.get("/show/:título/", todo_listController.show);
router.get("/create/", todo_listController.create);
router.post("/create/", todo_listController.create);
router.post("/:título/update", todo_listController.update);
router.get("/:título/update", todo_listController.update);
router.get("/:título/delete", todo_listController.delete);

module.exports = router;