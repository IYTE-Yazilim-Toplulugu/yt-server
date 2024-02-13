const express = require("express");
const { newMember, getMembers, checkMember } = require("../../controllers/memberController.js");

const memberRouter = express.Router();

memberRouter.post("/newMember", newMember);
memberRouter.get("/allMembers", getMembers);
memberRouter.post("checkMember", checkMember);

module.exports = memberRouter;