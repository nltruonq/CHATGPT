const router = require("express").Router();

const chatgptController = require("../controllers/chatgptController");

router.post("/", chatgptController.chat);

module.exports = router;
