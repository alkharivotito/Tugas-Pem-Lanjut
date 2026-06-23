import express from "express";
import { authenticateToken } from "../middleware/VerifyTokens.js";

import {
    getAllPinjam,
    insertPinjam,
    cariPinjamByID,
    deletePinjam,
    cariBukuPinjam,
    returnBuku,
    laporanReturnBuku,
} from "../controllers/pinjam.controllers.js";

const router = express.Router();
router.get("/laporan-return", authenticateToken, laporanReturnBuku);
router.get("/dpinjam/:nim",cariBukuPinjam);
router.post("/kembali",returnBuku);

router.get("/", getAllPinjam);
router.post("/", insertPinjam);
router.get("/:id", cariPinjamByID);
router.delete("/:id", deletePinjam);

export default router;