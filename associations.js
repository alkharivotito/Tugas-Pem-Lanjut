import Buku from './models/buku.model.js';
import Mahasiswas from './models/mahasiswa.model.js';
import Pinjams from './models/pinjam.model.js';
import Detail_pinjams from './models/detail_pinjam.model.js';

// Asosiasi Mahasiswa dan Pinjam
Mahasiswas.hasMany(Pinjams, { foreignKey: 'nim' });
Pinjams.belongsTo(Mahasiswas, { foreignKey: 'nim' });

// Asosiasi Buku dan Detail_pinjam
Buku.hasMany(Detail_pinjams, { foreignKey: 'buku_id' });
Detail_pinjams.belongsTo(Buku, { foreignKey: 'buku_id' });

// Asosiasi Pinjam dan Detail_pinjam
Pinjams.hasMany(Detail_pinjams, { foreignKey: 'pinjam_id' });
Detail_pinjams.belongsTo(Pinjams, { foreignKey: 'pinjam_id' });