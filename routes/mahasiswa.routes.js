import express from "express";
import {
    getAllMahasiswa,
    tambahmahasiswabaru,
    cariMahasiswaByNIM,
    updateMahasiswa,
    deleteMahasiswa
} from "../controllers/mahasiswa.controllers.js";
import { authenticateToken } from "../middleware/VerifyTokens.js";

const router = express.Router();

// GET semua mahasiswa
router.get("/",authenticateToken, getAllMahasiswa);

// POST tambah mahasiswa
router.post("/",authenticateToken, tambahmahasiswabaru);

// GET mahasiswa by NIM
router.get("/:nim",authenticateToken, cariMahasiswaByNIM);

// UPDATE mahasiswa
router.patch("/:id",authenticateToken, updateMahasiswa);

// DELETE mahasiswa
router.delete("/:id",authenticateToken, deleteMahasiswa);

export default router;