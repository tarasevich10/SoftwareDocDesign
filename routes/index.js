import express from "express";

import userRoute from "./user.route.js";
import playlistRoute from "./playlist.route.js";
import testRoute from "./test.route.js";
import albumRoute from "./album.route.js";
import songRoute from "./song.route.js";

const router = express.Router();

router.use("/user", userRoute);
router.use("/playlist", playlistRoute);
router.use("/album", albumRoute);
router.use("/song", songRoute);
router.use("/test", testRoute);

export default router;


