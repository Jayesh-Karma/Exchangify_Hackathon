const express = require("express");
const router = express.Router();
const {
    sendInvite,
    viewRequests,
    respondToRequest,
} = require("../controllers/inviteController");
const { checkUser } = require("../middlewares/checkUserMiddleware");

// Send a request (invite)
router.post("/send-request", checkUser, sendInvite);

// View requests
router.get("/view-requests", checkUser, viewRequests);

// Respond to a request
router.post("/respond-request", checkUser, respondToRequest);

module.exports = router;