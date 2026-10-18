import type { BlogCategory, BlogSection } from "@/lib/blog";

export type BlogMsCopy = {
  title: string;
  excerpt: string;
  category: BlogCategory;
  sections: BlogSection[];
};

export const BLOG_MS: Record<string, BlogMsCopy> = {
  "how-often-deep-clean-home-kl": {
    title: "Berapa Kerap Anda Perlu Cucian Menyeluruh di Rumah KL?",
    excerpt:
      "Kelembapan dan habuk bandar di Kuala Lumpur menjadikan cucian menyeluruh lebih penting. Ini jadual praktikal untuk rumah KL.",
    category: "Deep Cleaning",
    sections: [
      {
        heading: "Kenapa rumah KL perlukan cucian menyeluruh yang kerap",
        paragraphs: [
          "Pembersihan rumah di Kuala Lumpur bukan sekadar permukaan yang kemas. Kelembapan tinggi, habuk monsun dan tingkap terbuka menyebabkan dapur, bilik air dan vent aircond lebih cepat kotor berbanding iklim yang lebih sejuk.",
          "Lap mingguan mengekalkan rupa yang kemas, tetapi cucian menyeluruh sampai ke papan skirting, dalam kabinet, bilah kipas dan sudut yang terlepas dalam rutin harian.",
        ],
      },
      {
        heading: "Jadual cucian menyeluruh yang mudah",
        paragraphs: [
          "Kebanyakan pangsapuri di Lembah Klang sesuai dengan cucian menyeluruh setiap 3–4 bulan. Rumah keluarga yang sibuk, rumah ada haiwan peliharaan, atau unit berhampiran tapak pembinaan mungkin perlukan setiap 6–8 minggu.",
          "Gabungkan dengan pembersihan rumah mingguan atau dua minggu sekali untuk lantai, bilik air dan permukaan dapur. Jika masa terhad, tempah cucian profesional dan kekalkan kemas-kemas ringan sendiri antara lawatan.",
        ],
      },
      {
        heading: "Bila perlu panggil profesional",
        paragraphs: [
          "Sebelum musim perayaan, selepas ada yang sakit di rumah, atau bila anda nampak kulat, gris melekit, atau habuk aircond — lebih baik tempah bantuan daripada buat sendirian.",
          "Hauzmaid menawarkan pembersihan rumah mengikut jam di seluruh Lembah Klang dari RM80 — tiada deposit dan tiada caj pengangkutan — supaya anda boleh jadualkan cucian menyeluruh tanpa bayaran yang rumit.",
        ],
      },
    ],
  },
  "keep-house-dust-free-klang-valley": {
    title: "10 Cara Mudah Kekalkan Rumah Bebas Habuk di Lembah Klang",
    excerpt:
      "Habuk bandar cepat mengendap di PJ, Subang dan Cheras. Sepuluh tabiat yang kurangkan habuk tanpa menghabiskan hujung minggu menggosok.",
    category: "Tips & Guides",
    sections: [
      {
        heading: "Tabiat harian yang kurangkan habuk",
        paragraphs: [
          "Habuk di Malaysia sering datang dari tingkap terbuka, jalan berhampiran dan penapis aircond. Mulakan dengan lap 5 minit pada waktu petang untuk permukaan yang kerap disentuh, dan vakum pantas pada tikar pintu tempat kotoran masuk.",
          "Tanggalkan kasut di pintu, kosongkan tong dapur sebelum malam, dan tutup tingkap semasa jerebu atau waktu trafik padat. Tabiat kecil mengurangkan habuk yang mengendap di lantai semalaman.",
        ],
      },
      {
        heading: "Kemenangan mingguan untuk udara lebih bersih",
        paragraphs: [
          "Basuh sarung bantal dan perabot lembut secara kerap — fabrik memerangkap zarah halus. Lap skirting dan ambang tingkap setiap minggu; habuk sering jatuh ke bawah dari tepi ini.",
          "Cuci atau tukar penapis aircond mengikut jadual. Penapis kotor mengedarkan semula habuk ke setiap bilik dan membatalkan usaha pembersihan anda.",
        ],
      },
      {
        heading: "Bila DIY tidak mencukupi",
        paragraphs: [
          "Jika habuk kembali dalam sehari, anda berkemungkinan perlukan cucian lantai dan kipas siling yang lebih mendalam. Khidmat pembantu mengikut jam boleh bersihkan bawah perabot dan rak tinggi semasa anda fokus kerja.",
          "Hauzmaid meliputi Petaling Jaya, Subang, Shah Alam, Ampang, Cheras dan banyak lagi di Lembah Klang — WhatsApp kami untuk sebut harga pantas.",
        ],
      },
    ],
  },
  "move-in-cleaning-checklist-malaysia": {
    title: "Senarai Semak Pembersihan Pindah Masuk untuk Rumah Malaysia",
    excerpt:
      "Sebelum buka kotak, gunakan senarai semak pindah masuk ini supaya rumah baharu anda di KL atau Lembah Klang bermula bersih dan higienik.",
    category: "Home Cleaning",
    sections: [
      {
        heading: "Kenapa pembersihan pindah masuk penting",
        paragraphs: [
          "Penyewa terdahulu sering tinggalkan habuk dalam kabinet, kesan sabun di bilik air dan gris dapur yang hanya nampak selepas anda bongkar kotak. Cucian pindah masuk yang terarah menyelamatkan anda daripada menggosok semasa kotak menyekat setiap bilik.",
          "Tuan rumah dan ejen di Kuala Lumpur sering serah kunci dengan pantas — cucian profesional antara serahan kunci dan hari pindah masuk ialah cara paling lancar.",
        ],
      },
      {
        heading: "Senarai semak sebelum perabot tiba",
        paragraphs: [
          "Fokus pada dapur (dapur gas, hood, dalam peti sejuk jika ada), bilik air (jubin, grout, tandas), lantai, tingkap yang boleh dicapai, dan dalam almari. Lap suis dan pemegang pintu — tempat kuman yang kerap disentuh.",
          "Semak vent aircond dan longkang balkoni. Dalam kelembapan Malaysia, kelembapan tertinggal boleh jadi bau hamis dalam beberapa hari selepas pindah masuk.",
        ],
      },
      {
        heading: "Tempah bantuan, kemudian bongkar kotak",
        paragraphs: [
          "Perkhidmatan pindah masuk Hauzmaid meliputi pangsapuri dan rumah bertanah di seluruh Lembah Klang. Tempahan minimum 2 jam dari RM80, tiada deposit, bayar semasa ketibaan.",
          "Hantar mesej dengan kawasan, tarikh ambil kunci dan saiz unit — kami sahkan pembantu dan jam supaya anda bongkar kotak ke ruang yang bersih.",
        ],
      },
    ],
  },
  "move-out-cleaning-checklist-kl": {
    title: "Senarai Semak Pembersihan Pindah Keluar untuk Sewaan KL",
    excerpt:
      "Lindungi deposit anda dengan senarai semak pindah keluar yang sesuai untuk serahan unit sewa di Kuala Lumpur.",
    category: "Home Cleaning",
    sections: [
      {
        heading: "Apa yang biasanya diperiksa tuan rumah",
        paragraphs: [
          "Ejen di KL biasanya periksa bilik air, gris dapur, kesan pada lantai, kekotoran balkoni dan kabinet kosong. Meninggalkan ini tidak siap ialah sebab biasa deposit tertangguh.",
          "Cucian pindah keluar yang terancang — bukan lap tergesa-gesa — menunjukkan unit dikembalikan dalam keadaan baik dan mempercepatkan pemeriksaan.",
        ],
      },
      {
        heading: "Senarai bilik demi bilik",
        paragraphs: [
          "Kosongkan dan lap setiap kabinet. Buang gris pada dapur gas dan hood. Gosok tandas, pancuran dan cermin. Vakum atau mop di tempat katil dan sofa dahulu. Buang daun balkoni dan lap kaca jika selamat.",
          "Jangan lupa grille pintu masuk dan kawasan kasut — kesan pertama pemeriksaan bermula di pintu.",
        ],
      },
      {
        heading: "Jimat masa dengan pasukan profesional",
        paragraphs: [
          "Hari pindah sudah mencabar. Tempah pembersihan pindah keluar Hauzmaid di KL untuk slot tetap semasa anda uruskan pembungkusan dan utiliti.",
          "Tiada caj pengangkutan di kawasan perkhidmatan Lembah Klang kami. WhatsApp 016-356 60 55 dengan tarikh serahan kunci.",
        ],
      },
    ],
  },
  "remove-bathroom-mold-naturally": {
    title: "Cara Buang Kulat Bilik Air Secara Semula Jadi di Malaysia",
    excerpt:
      "Bilik air yang lembap menjemput kulat. Kaedah semula jadi yang membantu — dan bila anda patut tempah cucian profesional yang lebih mendalam.",
    category: "Tips & Guides",
    sections: [
      {
        heading: "Kenapa kulat suka bilik air Malaysia",
        paragraphs: [
          "Pancuran panas dan pengudaraan terhad mewujudkan keadaan sesuai untuk kulat pada silikon, grout dan sudut siling. Kesan awal menghalang noda merebak.",
          "Buka tingkap selepas mandi, hidupkan exhaust fan jika ada, dan squeegee kaca untuk kurangkan kelembapan pada permukaan.",
        ],
      },
      {
        heading: "Pendekatan pencucian semula jadi",
        paragraphs: [
          "Semburan cuka putih dan pes baking soda boleh angkat kulat permukaan ringan pada jubin. Sentiasa ventilasi, pakai sarung tangan, dan jangan campur bahan kimia pencuci.",
          "Untuk kulat hitam degil dalam silikon atau siling berliang, DIY mungkin hanya luntur warna buat sementara. Cucian bilik air menyeluruh dengan peralatan sesuai lebih selamat dan tahan lama.",
        ],
      },
      {
        heading: "Pencegahan selepas mencuci",
        paragraphs: [
          "Pastikan silikon kering, basuh tikar mandi setiap minggu, dan jadualkan pembersihan rumah berkala supaya bilik air tidak berbulan-bulan tanpa gosokan teliti.",
          "Pembantu Hauzmaid boleh sertakan jam fokus bilik air dalam tempahan anda — tanya di WhatsApp semasa minta sebut harga.",
        ],
      },
    ],
  },
  "why-professional-cleaning-saves-time": {
    title: "Kenapa Pembersihan Profesional Menjimatkan Masa dalam Kehidupan Sibuk KL",
    excerpt:
      "Antara trafik dan waktu pejabat yang panjang, menyerahkan pembersihan rumah di Lembah Klang sering jadi pertukaran masa yang paling bijak.",
    category: "Tips & Guides",
    sections: [
      {
        heading: "Kos sebenar hujung minggu DIY",
        paragraphs: [
          "Cucian Sabtu yang mendalam boleh makan 4–6 jam — masa yang boleh dihabiskan bersama keluarga atau berehat selepas commute KL yang panjang. Pencuci profesional siap kerja berat semasa anda uruskan urusan atau berehat.",
          "Khidmat pembantu mengikut jam juga boleh diskalakan: tempah 2 jam untuk segar semula, atau 4 jam dengan dua pembantu bila tetamu akan datang.",
        ],
      },
      {
        heading: "Harga telus bina kepercayaan",
        paragraphs: [
          "Hauzmaid kekalkan kadar yang jelas: dari RM80 untuk 2 jam, dengan RM35/jam setiap pembantu bila anda tempah 3 jam atau lebih. Tiada deposit, tiada caj pengangkutan, bayar pindahan bank apabila pembantu tiba.",
          "Kejelasan ini bermakna anda rancang hujung minggu tanpa caj mengejut — perbezaan penting dalam perkhidmatan pembersihan profesional di Malaysia.",
        ],
      },
    ],
  },
  "kitchen-cleaning-tips-busy-families": {
    title: "Tip Pembersihan Dapur untuk Keluarga Sibuk di KL",
    excerpt:
      "Rutin dapur pantas yang kawal gris dan serpihan makanan antara lawatan pembersihan rumah yang penuh.",
    category: "Home Cleaning",
    sections: [
      {
        heading: "Selepas setiap hidangan (5 minit)",
        paragraphs: [
          "Lap kaunter dan zon percikan dapur sebelum minyak mengeras. Masukkan pinggan ke mesin basuh atau rendam kuali segera — kesan kari kering ambil masa jauh lebih lama kemudian.",
          "Sapu atau mop spot di laluan lantai berhampiran sink. Serpihan makanan cepat tarik semut di rumah tropika.",
        ],
      },
      {
        heading: "Fokus dapur mingguan",
        paragraphs: [
          "Buang gris pada dapur gas dan lap pemegang pintu peti sejuk. Kosongkan beg tong walaupun belum penuh — bau makanan semalaman cepat kuat dalam kelembapan.",
          "Sebulan sekali, alihkan toaster dan kawasan cerek lalu lap belakang peralatan di mana habuk bercampur minyak masak.",
        ],
      },
      {
        heading: "Biarkan profesional uruskan gris tebal",
        paragraphs: [
          "Penapis hood dan kabinet bawah sink sering jadi tempat DIY berhenti. Sertakan jam fokus dapur bila anda tempah pembersihan rumah Hauzmaid di KL.",
          "Kami berkhidmat untuk keluarga di seluruh Lembah Klang — WhatsApp hari pilihan dan bilangan pembantu anda.",
        ],
      },
    ],
  },
  "cleaning-tips-pet-owners-malaysia": {
    title: "Tip Pembersihan Terbaik untuk Pemilik Haiwan di Malaysia",
    excerpt:
      "Bulu, pasir dan kaki berlumpur adalah biasa. Begini cara pemilik haiwan di KL kekalkan rumah segar antara cucian profesional.",
    category: "Tips & Guides",
    sections: [
      {
        heading: "Hadkan zon kekotoran",
        paragraphs: [
          "Tetapkan kawasan makan dan litter dengan tikar yang boleh dicuci. Vakum zon ini lebih kerap daripada bilik lain supaya bulu tidak berpindah ke sofa dan katil.",
          "Lap kaki selepas berjalan dalam hujan — biasa di Lembah Klang — sebelum haiwan merentas lantai ruang tamu.",
        ],
      },
      {
        heading: "Bau tanpa wangian berlebihan",
        paragraphs: [
          "Basuh tempat tidur haiwan setiap minggu dan ventilasi bilik setiap hari. Cuci kesan kemalangan segera; kelembapan buat bau kekal jika cecair meresap ke grout atau permaidani.",
          "Elak wangian kuat yang boleh mengganggu haiwan — kesegaran dari cucian sebenar lebih baik daripada semburan pewangi.",
        ],
      },
      {
        heading: "Tempah bantuan mesra haiwan",
        paragraphs: [
          "Beritahu Hauzmaid anda ada haiwan peliharaan bila WhatsApp supaya pembantu tahu apa yang diharapkan. Masa vakum tambahan sering lebih membantu daripada semburan kimia tambahan.",
          "Tempahan mengikut jam dari RM80 memudahkan anda tambah cucian pertengahan minggu bila musim bulu tiba.",
        ],
      },
    ],
  },
  "post-renovation-cleaning-guide-kl": {
    title: "Panduan Pembersihan Selepas Ubah Suai untuk Rumah KL",
    excerpt:
      "Habuk ubah suai mengendap di mana-mana. Pelan cucian selepas ubah suai yang jelas supaya rumah anda boleh didiami semula.",
    category: "Deep Cleaning",
    sections: [
      {
        heading: "Kenapa habuk ubah suai berbeza",
        paragraphs: [
          "Potong jubin, mengampelas dan sisa bungkusan tinggalkan habuk halus yang masuk ke soket, return aircond dan rel kabinet. Cucian mingguan biasa tidak akan buangnya.",
          "Tunggu kerja pembinaan berat siap dan sisa besar dibuang sebelum cucian akhir — jika tidak, anda akan cuci dua kali.",
        ],
      },
      {
        heading: "Apa yang dicakupi cucian selepas ubah suai yang betul",
        paragraphs: [
          "Lantai (selalunya beberapa laluan), bingkai tingkap, skirting, dalam dapur, bilik air, dan lap kerja kayu terbina. Utamakan keselamatan pada tangga dan lantai basah.",
          "Hauzmaid tetapkan harga pembersihan selepas ubah suai pada RM40 sejam setiap pembantu — minta anggaran skop berdasarkan saiz unit.",
        ],
      },
      {
        heading: "Tempah sebelum hari pindah semula",
        paragraphs: [
          "Jadualkan pencuci sehari sebelum perabot kembali supaya habuk tidak terperangkap bawah sofa. Kongsi gambar tapak bila WhatsApp untuk sebut harga yang lebih jelas.",
          "Kami berkhidmat untuk serahan ubah suai di seluruh Kuala Lumpur dan Lembah Klang tanpa caj pengangkutan.",
        ],
      },
    ],
  },
  "weekly-house-cleaning-checklist": {
    title: "Senarai Semak Pembersihan Rumah Mingguan (Edisi KL)",
    excerpt:
      "Senarai semak pembersihan rumah mingguan yang realistik untuk pangsapuri dan rumah bertanah di Kuala Lumpur.",
    category: "Home Cleaning",
    sections: [
      {
        heading: "Yang wajib dibuat",
        paragraphs: [
          "Lantai (vakum atau mop), bilik air, kaunter dan sink dapur, serta kosongkan tong. Empat ini mengekalkan rumah Malaysia terasa segar setiap minggu.",
          "Tambah tukar cadar setiap 1–2 minggu dan lap meja makan serta remote — barang yang kerap disentuh tetapi sering terlepas.",
        ],
      },
      {
        heading: "Putarkan tugas mendalam",
        paragraphs: [
          "Minggu 1: dalam microwave dan rak peti sejuk. Minggu 2: kipas dan suis lampu. Minggu 3: balkoni dan tingkap yang boleh dicapai. Minggu 4: skirting dan belakang sofa.",
          "Putaran ini elakkan rasa 'semua berhabuk' tanpa menuntut maraton setiap Ahad.",
        ],
      },
      {
        heading: "Serahkan blok mingguan",
        paragraphs: [
          "Jika senarai semak tidak pernah siap, tempah lawatan berulang 2–4 jam. Pasukan pembersihan rumah Hauzmaid di Kuala Lumpur bekerja mengikut senarai keutamaan anda.",
          "Dari RM80, tiada deposit — sahkan di WhatsApp dan kekalkan hujung minggu anda bebas.",
        ],
      },
    ],
  },
  "office-cleaning-tips-kuala-lumpur": {
    title: "Tip Pembersihan Pejabat untuk Pasukan Kecil di Kuala Lumpur",
    excerpt:
      "Kekalkan pejabat kecil KL yang higienik dan sedia untuk klien dengan rutin harian ringan plus cucian profesional berjadual.",
    category: "Office Cleaning",
    sections: [
      {
        heading: "Kebersihan meja harian",
        paragraphs: [
          "Lap papan kekunci, telefon dan permukaan meja mesyuarat di hujung hari. Gadget kongsi sebar kuman lebih cepat daripada lantai di pejabat padat.",
          "Kosongkan tong makanan setiap hari — bau sisa makan tengah hari semakin kuat semalaman di ruang tanpa AC pusat.",
        ],
      },
      {
        heading: "Keutamaan pejabat mingguan",
        paragraphs: [
          "Vakum laluan trafik tinggi, cuci kaunter pantry, isi semula bekalan tandas, dan lap habuk perabot resepsi yang pertama dilihat klien.",
          "Pintu kaca dan tikar masuk berhak diberi perhatian; ia tetapkan nada sebelum sebarang pitch bermula.",
        ],
      },
      {
        heading: "Bila tempah pembersihan pejabat KL",
        paragraphs: [
          "Pasukan yang membesar sering melepasi tugas pantry DIY. Hauzmaid sediakan pembersihan pejabat Kuala Lumpur dengan tempahan jam yang fleksibel — waktu petang tersedia dengan kadar syif malam jika perlu.",
          "WhatsApp keluasan pejabat dan hari pilihan untuk anggaran yang jelas. Tiada deposit, tiada caj pengangkutan di seluruh Lembah Klang.",
        ],
      },
    ],
  },
};
