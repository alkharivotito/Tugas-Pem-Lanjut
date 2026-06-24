import express from "express";
import {
    getAllProdi,
    tambahprodisbaru,
    cariProdiByID,
    updateProdi,
    deleteProdi
} from "../controllers/prodi.controllers.js";
import { authenticateToken } from "../middleware/VerifyTokens.js";

const router = express.Router();

// GET semua prodi
router.get("/",authenticateToken, getAllProdi);

// POST tambah prodi
router.post("/",authenticateToken, tambahprodisbaru);

// GET prodi by ID
router.get("/:id",authenticateToken, cariProdiByID);

// UPDATE prodi
router.patch("/:id",authenticateToken, updateProdi);

// DELETE prodi
router.delete("/:id",authenticateToken, deleteProdi);

export default router;