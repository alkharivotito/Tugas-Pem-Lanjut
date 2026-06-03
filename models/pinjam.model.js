import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
import Mahasiswas from "./mahasiswa.model.js";
import Buku from "./buku.model.js";

const { DataTypes } = Sequelize;
const Pinjams = db.define(
    "pinjams",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        tanggal_pinjam: {
            type: DataTypes.DATE,
        },
        tanggal_kembali: {
            type: DataTypes.DATE,
        },
        nim: {
            type: DataTypes.INTEGER,
        },
        pegawai_id: {
            type: DataTypes.INTEGER,
        },
        created_at: {
            type: DataTypes.DATE,
        },
        updated_at: {
            type: DataTypes.DATE,
        },
    },
    {
        freezeTableName: true,
    }
);

Pinjams.belongsTo(Mahasiswas, { foreignKey: "nim" });
Mahasiswas.hasMany(Pinjams, { foreignKey: "nim" });

export default Pinjams;