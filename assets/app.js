/* =====================================================================
   Agung Tri Mahmudi — portofolio
   Data proyek, kamus bilingual, dan seluruh perilaku halaman.

   Urutan berkas:
     1. Data proyek        5. Modal
     2. Badge teknologi    6. Bahasa
     3. Kamus UI (i18n)    7. Tema, navigasi, gerak
     4. Render konten      8. Form kontak & inisialisasi
   ===================================================================== */

/* ======================== 1. DATA PROYEK ===========================
   Tiap proyek punya versi id & en. Section = { h: judul, p: teks }.
   Baris kosong ganda di dalam `p` dipecah menjadi paragraf terpisah saat
   dirender. Urutan larik menentukan angka Romawi pada kartu.
   ================================================================== */
const PROJECTS = [
  /* ---------- I. Rekap RS ---------- */
  {
    icon: 'hospital',
    github: 'https://github.com/Agungtrimahmudi-automation/Rekap-Data-Dokter',
    image: 'assets/img/rekap-rs-workflow.png',
    tags: ['n8n','Apps Script','Google Sheets API','Google Docs API','Google Drive API','Gmail API','JavaScript'],
    id: {
      title: 'Rekap Data Kunjungan Dokter: Otomatis dalam 1 Menit',
      hook: 'Dari 2 jam menyatukan 3 file Excel jadi 1 menit. Laporan kunjungan dokter langsung tersaji sebagai PDF rapi, siap kirim.',
      sections: [
        { h: 'Pendahuluan', p: 'Setiap akhir bulan, staf administrasi rumah sakit menyusun laporan kunjungan dokter. Dokumennya wajib, angkanya harus tepat, dan tenggatnya tidak bisa digeser. Yang menyita waktu bukan menulis laporannya, melainkan merapikan data sebelum laporan itu bisa ditulis: dua jam menyalin dan menghitung ulang, hampir selalu berujung lembur, dan satu salah ketik di tengah jalan cukup untuk mengulang semuanya.' },
        { h: 'Masalah', p: 'Data datang dari tiga sumber: Rawat Inap, Poli, dan ICU. Tidak ada satu pun yang memakai format yang sama. Satu file menulis tanggal DD/MM/YYYY, file lain MM/DD/YYYY. Ada yang memakai strip, ada yang memakai garis miring. Semua itu harus diseragamkan lebih dulu, baris demi baris, dengan tangan.\n\nYang lebih berat ada di data rawat inap. Pasien yang masuk 2 Juni dan keluar 5 Juni tercatat sebagai satu baris di Excel, padahal laporan menuntutnya menjadi empat hari terpisah. Setiap baris harus dipecah begitu, setiap bulan. Sesudah itu data masih harus dikelompokkan per dokter dan dihitung jumlah pasiennya per hari: tiga puluh hari, empat dokter. Pekerjaannya tidak sulit. Yang melelahkan adalah tidak ada satu langkah pun yang boleh meleset.' },
        { h: 'Solusi', p: 'Saya bangun satu alur yang mengambil alih seluruh langkah itu. Staf membuka form yang saya buat dengan Google Apps Script, mengunggah tiga file Excel, dan mengisi bulan target. Setelah tombol kirim ditekan, sistem berjalan sendiri: membaca ketiga file, menyeragamkan format tanggal, memecah rentang rawat inap menjadi hari-hari terpisah, lalu menggabungkan seluruhnya.\n\nHasil gabungan itu dikelompokkan per dokter, dihitung per hari, dan disusun ke Google Docs sebelum dikonversi menjadi PDF. Lewat Docs dulu, bukan langsung ke PDF, supaya staf tetap bisa menyunting bila ada yang perlu disesuaikan sebelum laporan dibagikan. Notifikasi berisi berkas laporan itu masuk ke email mereka.' },
        { h: 'Hasil', p: 'Proses yang dulu memakan waktu dua jam kini selesai dalam satu menit: penghematan waktu mencapai 95 persen. Kesalahan hitung nyaris tidak pernah terjadi lagi, dan staf tidak perlu lagi lembur di akhir bulan sehingga bisa fokus ke pekerjaan yang lebih penting. Sistem ini mulai dipakai staf rumah sakit sejak Juni 2026, dan langsung memangkas beban kerja mereka sejak laporan bulan pertama.' },
      ],
    },
    en: {
      title: 'Doctor Visit Report: Automated in Under a Minute',
      hook: 'From 2 hours merging three Excel files down to 1 minute. The doctor visit report is generated straight into a clean, send-ready PDF.',
      sections: [
        { h: 'Introduction', p: 'At the end of every month, hospital admin staff compile the doctor visit report. The document is mandatory, the figures have to be exact, and the deadline does not move. What ate up the time was not writing the report but tidying the data before the report could be written: two hours of copying and recounting, almost always ending in overtime, and a single typo halfway through was enough to start over.' },
        { h: 'Problem', p: 'The data came from three sources: Inpatient, Outpatient (Poli), and ICU. None of them agreed on anything. One file wrote dates as DD/MM/YYYY, another as MM/DD/YYYY; some used dashes, some used slashes. All of it had to be reconciled first, row by row, by hand.\n\nThe heavier problem was the inpatient data. A patient admitted on June 2 and discharged on June 5 was recorded as a single row in Excel, while the report demanded four separate days. Every such row had to be split that way, every month. After that, the data still had to be grouped per doctor and counted per day: thirty days, four doctors. The work was not difficult. What made it exhausting was that not a single step was allowed to slip.' },
        { h: 'Solution', p: 'I built one pipeline that takes over every one of those steps. Staff open a form I made with Google Apps Script, upload the three Excel files, and enter the target month. Once submit is pressed, the system runs on its own: it reads all three files, normalizes the date formats, expands inpatient ranges into individual days, then merges everything.\n\nThe merged result is grouped per doctor, counted per day, and laid out in Google Docs before being converted to PDF. Through Docs first rather than straight to PDF, so staff can still edit anything that needs adjusting before the report goes out. An email notification with the report file lands in their inbox.' },
        { h: 'Result', p: 'A process that once took two hours now finishes in one minute: a 95 percent time saving. Miscalculations have all but disappeared, and staff no longer work overtime at month-end, freeing them to focus on more important work. The system has been used by the hospital staff since June 2026 and cut their workload from the very first monthly report.' },
      ],
    },
  },

  /* ---------- II. Jurnal Basarnas ---------- */
  {
    icon: 'clipboard-list',
    github: 'https://github.com/Agungtrimahmudi-automation/Jurnal-Siaga',
    image: 'assets/img/jurnal-siaga.png',
    tags: ['n8n','Google Sheets API','Google Drive API','Google Form','SMTP Email','JavaScript'],
    id: {
      title: 'Jurnal Siaga: Generator Laporan Shift Bulanan Otomatis',
      hook: 'Laporan shift Basarnas dari 30+ dropdown manual jadi satu form: 30 menit → 2 menit. Berjalan sejak Juli 2025, melewati dua kali pergantian template.',
      sections: [
        { h: 'Pendahuluan', p: 'Kantor Basarnas wajib menerbitkan jurnal siaga setiap bulan: catatan siapa berjaga di shift mana, sepanjang tiga puluh hari. Isinya nyaris tidak pernah berubah dari bulan ke bulan, tapi tetap disusun ulang dari nol setiap kali. Tiga puluh menit yang habis untuk mengetik ulang sesuatu yang sudah diketik bulan lalu.' },
        { h: 'Masalah', p: 'Jurnalnya dibuat lewat berkas dengan dropdown panjang, lebih dari tiga puluh pilihan. Alurnya selalu sama: pilih dari dropdown, salin barisnya, ganti isinya dengan kegiatan shift berikutnya, ulangi sampai satu bulan penuh. Tidak ada yang sulit di sana, dan justru itu yang mengganggu saya: pekerjaan yang tidak menuntut penilaian apa pun tetap menuntut tiga puluh menit perhatian penuh. Kalau kombinasi shift dan harinya benar-benar acak, tidak ada yang bisa dilakukan. Tapi ternyata tidak acak.' },
        { h: 'Solusi', p: 'Saya petakan seluruh kombinasi shift dan hari, dan semuanya ternyata jatuh ke empat pola yang berulang. Saya sederhanakan menjadi empat template: A, B, C, dan D. Staf cukup mengisi satu Google Form berisi tanggal, bulan, dan shift awal. Sistem menentukan template yang tepat untuk setiap tanggal, menyalinnya, mengisi hari dan tanggal, menggabungkan seluruh sheet, lalu mengirim PDF ke email pengirim.' },
        { h: 'Hasil', p: 'Tiga puluh menit menjadi dua menit, penghematan waktu 80 persen. Sistem ini berjalan konsisten sejak Juli 2025, lebih dari satu tahun. Template admin sempat berganti dua kali di rentang itu, dan karena yang saya otomatisasi adalah polanya dan bukan tampilannya, logika intinya tidak perlu disentuh dan sistem tetap berjalan tanpa kendala.' },
      ],
    },
    en: {
      title: 'Standby Journal: Automated Monthly Shift Report Generator',
      hook: 'Basarnas shift reports from 30+ manual dropdowns down to a single form: 30 minutes → 2 minutes. Running since July 2025, through two template changes.',
      sections: [
        { h: 'Introduction', p: 'A Basarnas (search & rescue) office must publish a standby journal every month: a record of who is on duty for which shift, across thirty days. The contents barely change from month to month, yet it was rebuilt from scratch every time. Thirty minutes spent retyping something that had already been typed last month.' },
        { h: 'Problem', p: 'The journal was built in a file full of long dropdowns, more than thirty options. The routine was always the same: pick from a dropdown, copy the row, replace its contents with the next shift\'s activity, repeat until the month was full. Nothing about it was difficult, and that is exactly what bothered me: work that demanded no judgment at all still demanded thirty minutes of undivided attention. If the shift-and-day combinations were genuinely random, there would be nothing to do about it. But they were not random.' },
        { h: 'Solution', p: 'I mapped every shift-and-day combination, and all of them turned out to fall into four recurring patterns. I simplified them into four templates: A, B, C, and D. Staff only fill in a single Google Form with the date, month, and starting shift. The system picks the right template for each date, copies it, fills in the day and date, merges all sheets, then emails a PDF to the sender.' },
        { h: 'Result', p: 'Thirty minutes became two, an 80 percent time saving. The system has run consistently since July 2025, over a year. The admin template changed twice in that span, and because what I automated was the pattern rather than the layout, the core logic never had to be touched and the system kept running without issues.' },
      ],
    },
  },

  /* ---------- III. AI Chatbot UMKM ---------- */
  {
    icon: 'bot',
    github: 'https://github.com/Agungtrimahmudi-automation/chatbot-umkm-warung-sore',
    image: 'assets/img/bot-umkm.png',
    tags: ['n8n','Google Sheets API','Gemini API','Telegram API'],
    id: {
      title: 'AI Chatbot UMKM: Studi Kasus Layanan Pelanggan Otomatis',
      hook: 'Bot Telegram + Google Sheets + AI, dibangun sebagai studi kasus untuk usaha jajanan nyata milik seorang teman. Alurnya, mulai dari tanya menu sampai pesan dan bukti transfer, sudah teruji ujung ke ujung.',
      sections: [
        { h: 'Pendahuluan', p: 'Saya ingin tahu sejauh mana satu bot bisa menggantikan pekerjaan menjawab pertanyaan pelanggan yang itu-itu saja. Supaya latihannya tidak mengambang, saya pakai usaha nyata sebagai skenario: usaha jajanan milik seorang teman di Kotamara. Sejak awal saya sudah tahu ini tidak akan langsung dipakai, jadi saya kerjakan sebagai studi kasus, bukan sebagai pesanan.' },
        { h: 'Masalah', p: 'Pertanyaan yang masuk ke sebuah toko kecil sebenarnya sedikit dan berulang: barangnya ada atau tidak, harganya berapa, pembayarannya sudah masuk atau belum. Semua jawabannya sudah tersimpan, hanya saja di tempat yang tidak bisa dibaca oleh percakapan. Selama catatan dan chat terpisah, pemilik toko harus menjadi jembatan di antara keduanya, dan jembatan itu hanya bekerja saat dia sedang memegang ponsel.' },
        { h: 'Solusi', p: 'Saya bangun bot Telegram yang membaca stok dan harga langsung dari Google Sheets, jadi tidak ada data yang perlu disalin dua kali. Di atasnya ada tiga hal lagi: pemesanan langsung lewat perintah /order dengan validasi stok, verifikasi bukti transfer (pelanggan kirim foto setelah order, bot meneruskannya ke admin untuk dicek manual), dan mode admin supaya stok dan harga bisa diperbarui lewat chat tanpa membuka spreadsheet.\n\nTelegram saya pilih karena API-nya terbuka dan gratis. WhatsApp menuntut API berbayar atau pindah ke WA Business, dan untuk sebuah studi kasus biaya itu tidak masuk akal dikeluarkan hanya untuk membuktikan logikanya bekerja.' },
        { h: 'Hasil', p: 'Seluruh alurnya saya verifikasi ujung ke ujung: cek stok, cek harga, pemesanan lewat /order, bukti transfer yang tercocok otomatis ke pesanan yang benar dan diteruskan ke admin, serta mode admin — semuanya bekerja seperti yang dirancang. Dalam prosesnya saya juga menemukan dan memperbaiki beberapa bug nyata: trigger yang sempat mati total karena webhook placeholder dari template lama, dan notifikasi admin yang terkirim lebih awal dari seharusnya, sebelum bukti transfer sempat diunggah.\n\nMeski begitu, sampai sekarang teman saya belum memakainya untuk transaksi pelanggan sungguhan. Usahanya berjalan sepenuhnya offline, pembeli datang langsung, dan kode QRIS di pesan bot masih placeholder karena belum ada gambar asli dari admin.\n\nSaya memilih tetap menampilkannya apa adanya. Yang saya buktikan di sini adalah alurnya bisa bekerja ujung ke ujung, bukan bahwa ada transaksi nyata yang sudah lewat sana, dan dua hal itu tidak sama. Pelajaran yang saya bawa: memvalidasi bahwa sesuatu bisa dibangun jauh lebih mudah daripada memvalidasi bahwa seseorang benar-benar membutuhkannya, dan urutan yang benar adalah kebutuhan lebih dulu.' },
      ],
    },
    en: {
      title: 'SME AI Chatbot: An Automated Customer Service Case Study',
      hook: 'A Telegram bot + Google Sheets + AI, built as a case study for a friend\'s real snack shop. The flow, from menu questions through ordering and payment proof, has been verified end to end.',
      sections: [
        { h: 'Introduction', p: 'I wanted to find out how much of the work of answering the same handful of customer questions a single bot could take over. To keep the exercise grounded, I used a real business as the scenario: a friend\'s snack shop in Kotamara. I knew from the start it would not go straight into use, so I treated it as a case study rather than a commission.' },
        { h: 'Problem', p: 'The questions a small shop receives are few and repetitive: is it in stock, what does it cost, has the payment come through. Every answer is already recorded somewhere, just somewhere the conversation cannot read. As long as the records and the chat stay separate, the shop owner has to be the bridge between them, and that bridge only works while he is holding his phone.' },
        { h: 'Solution', p: 'I built a Telegram bot that reads stock and prices straight from Google Sheets, so no data has to be copied twice. On top of that sit three more things: ordering directly via an /order command with stock validation, payment-proof verification (the customer sends a photo after ordering and the bot forwards it to the admin for a manual check), and an admin mode so stock and prices can be updated over chat without opening the spreadsheet.\n\nI chose Telegram because its API is open and free. WhatsApp required either a paid API or a switch to WA Business, and for a case study that cost made no sense purely to prove the logic works.' },
        { h: 'Result', p: 'I verified the whole flow end to end: stock lookups, price lookups, placing an order via /order, a payment-proof photo that gets auto-matched to the right order and forwarded to the admin, and admin mode — all working as designed. Along the way I also found and fixed real bugs: a trigger that was completely dead because of a leftover placeholder webhook ID from an old template, and an admin notification that fired too early, before the payment proof had even been uploaded.\n\nEven so, he has not put it to use for real customer transactions. His business runs entirely offline, buyers come to him in person, and the QRIS code in the bot\'s message is still a placeholder because the admin hasn\'t handed over the real image yet.\n\nI chose to show it exactly as it is. What I proved here is that the flow works end to end, not that any real transaction has gone through it, and those are not the same thing. The lesson I took away: proving something can be built is far easier than proving someone actually needs it, and the correct order is need first.' },
      ],
    },
  },

  /* ---------- IV. Recipe RAG (Telegram) ---------- */
  {
    icon: 'chef-hat',
    github: 'https://github.com/Agungtrimahmudi-automation/recipe-rag-assistant',
    image: 'assets/img/recipe-rag.png',
    tags: ['Python','FastAPI','Gemini API','Telegram API','n8n','Docker'],
    id: {
      title: 'Recipe RAG: Asisten Masak via Telegram',
      hook: 'Bot Telegram yang menjawab dari 1.000 resep asli, tanpa vector database, tanpa resep karangan.',
      sections: [
        { h: 'Pendahuluan', p: '"Enaknya tempe di rumah dimasak apa ya?" adalah pertanyaan yang lebih cocok ditanyakan ke bot daripada ke mesin pencari, tapi hanya kalau bot itu benar-benar membaca kumpulan resep nyata alih-alih mengarang sesuatu yang terdengar masuk akal. Model bahasa biasa tidak bisa melihat koleksi resep tertentu, dan akan dengan tenang menyebut bahan atau langkah yang sebenarnya tidak ada di mana pun.' },
        { h: 'Masalah', p: 'Saya ingin pipeline yang menjejakkan setiap klaim pada dokumen nyata, bisa diakses dari Telegram, dan mau berkata "tidak ada di koleksi saya" ketimbang menebak. Bot ini juga harus berperilaku seperti asisten sungguhan, bisa basa-basi, bertanya balik, dan menawarkan pilihan dari daftar pendek, bukan kotak pencarian sekali tembak yang menumpahkan daftar tautan.' },
        { h: 'Solusi', p: 'Tiga bagian terpisah: (1) `prepare_dataset.py` menyaring dataset resep Indonesia dari Kaggle (8 kategori dari Cookpad Indonesia) menjadi 1.000 resep paling disukai, tiap baris menyimpan URL sumber aslinya. (2) `build_index.py` meng-embed setiap resep dengan Gemini dan menyimpan vektornya ke file JSON biasa (sengaja tanpa vector database terpisah), bisa dilanjutkan kapan saja tanpa mengulang panggilan API untuk resep yang sudah pernah di-embed. (3) `ask.py` / `api.py` menjalankan pencarian dan jawaban, baik lewat CLI untuk uji manual maupun sebagai bot Telegram untuk pemakaian sehari-hari.' },
        { h: 'Hasil', p: 'Berjalan aktif lewat Telegram untuk kebutuhan sehari-hari. Contoh nyata: tanya "saya punya tempe di rumah, enaknya dimasak apa ya?", bot mengambil 8 resep tempe paling relevan (skor kecocokan 0.72–0.73) lengkap dengan tautan sumber Cookpad-nya, lalu menjawab dari resep-resep itu saja. Tidak ada bahan atau langkah yang dikarang, semua bisa ditelusuri balik ke resep aslinya.' },
      ],
    },
    en: {
      title: 'Recipe RAG: Telegram Cooking Assistant',
      hook: 'A Telegram bot that answers from 1,000 real recipes, no vector database, no invented recipes.',
      sections: [
        { h: 'Introduction', p: '"What can I cook with the tempe I already have?" is a question worth asking a bot instead of a search engine, but only if the bot actually looks at a real recipe collection instead of hallucinating a plausible-sounding one. A plain LLM call can\'t see any particular collection and will happily invent ingredients or steps that don\'t exist.' },
        { h: 'Problem', p: 'I wanted a pipeline that grounds every factual claim in a real document set, reachable from Telegram, that admits "not in my collection" instead of guessing. It also had to behave like an actual assistant (chit-chat, follow-up questions, picking from a shortlist) rather than a one-shot search box that dumps a wall of links.' },
        { h: 'Solution', p: 'Three separate pieces: (1) `prepare_dataset.py` samples a Kaggle Indonesian-recipe dataset (8 categories scraped from Cookpad Indonesia) down to the 1,000 most-loved recipes, each keeping its source URL. (2) `build_index.py` embeds every recipe with Gemini and caches the vectors to a plain JSON file (deliberately with no separate vector database), and is resumable, so re-running it only embeds genuinely new recipes. (3) `ask.py` / `api.py` handle retrieval and generation, either as a CLI for manual testing or as a Telegram bot for everyday use.' },
        { h: 'Result', p: 'Runs actively via Telegram for daily use. A real example: asking "I have tempe at home, what should I cook?" returns the 8 most relevant tempe recipes (match scores 0.72–0.73) with their original Cookpad source links, and answers only from those recipes. Nothing is invented, every claim traces back to an actual recipe.' },
      ],
    },
  },

  /* ---------- V. Laporan Mingguan HP ---------- */
  {
    icon: 'smartphone',
    github: 'https://github.com/Agungtrimahmudi-automation/laporan-hp-mingguan',
    image: 'assets/img/laporan-hp-mingguan.png',
    tags: ['Python','YouTube Data API','Google Sheets API','Google Slides API','Gmail API'],
    id: {
      title: 'Laporan Mingguan HP: Konsensus Top 10 per Kelas Harga',
      hook: 'Memindai ratusan ulasan YouTube dan artikel setiap Minggu, lalu mengirim peringkat konsensus Top 10 HP per kelas harga sebagai PDF + rekap Sheets.',
      sections: [
        { h: 'Pendahuluan', p: 'Setiap kali ada yang bertanya "HP 3 jutaan sekarang bagusnya apa?", jawabannya butuh satu jam menonton review. Tiap kanal punya jagoan sendiri, tiap artikel menyusun daftar dengan kriteria yang tidak dijelaskan, dan tidak ada satu pun yang menggabungkan semuanya menjadi satu daftar per kelas harga.' },
        { h: 'Masalah', p: 'Yang sebenarnya dicari bukan opini satu reviewer, melainkan titik temu banyak reviewer. Begitu pertanyaannya dirumuskan seperti itu, pekerjaannya berubah bentuk: ini bukan sesuatu yang perlu ditonton, melainkan sesuatu yang bisa dihitung. Dan karena daftarnya bergeser tiap minggu, menghitungnya sekali tidak menyelesaikan apa-apa. Dikerjakan manual, seminggu kemudian semuanya dimulai lagi dari nol.' },
        { h: 'Solusi', p: 'Pipeline Python delapan tahap: kumpulkan ulasan YouTube dan artikel media teknologi, ekstrak penyebutan tiap perangkat, hitung skor konsensus (otoritas sumber × kesegaran × sinyal peringkat × kecocokan kelas harga), lalu susun deliverable (Google Sheets dan deck Google Slides yang diekspor ke PDF) dan kirim ke email. Sengaja tanpa model bahasa di jalur penilaian, supaya setiap angka bisa ditelusuri ke sumber dan posisi karakternya. Berjalan otomatis tiap Minggu pagi lewat Windows Task Scheduler.' },
        { h: 'Hasil', p: 'Run 2026-W30: 238 sumber terkumpul (174 video YouTube, 64 artikel web) menghasilkan 2.102 penyebutan perangkat, disaring menjadi 50 peringkat akhir (10 HP × 5 kelas harga). Deliverable berupa PDF dan rekap Google Sheets dengan 238 sumber yang bisa ditelusuri balik.' },
      ],
    },
    en: {
      title: 'Weekly Phone Report: Top 10 Consensus per Price Class',
      hook: 'Scans hundreds of YouTube reviews and tech articles every Sunday, then emails a consensus Top 10 phone ranking per price class as a PDF + Sheets recap.',
      sections: [
        { h: 'Introduction', p: 'Whenever someone asks "what\'s the best phone under 3 million rupiah right now?", the answer takes an hour of watching reviews. Every channel has its own favorite, every article ranks by unstated criteria, and none of them combine everything into a single list per price class.' },
        { h: 'Problem', p: 'What is actually being sought is not one reviewer\'s opinion but the point where many reviewers agree. Once the question is framed that way, the nature of the work changes: this is not something to be watched, it is something to be computed. And because the lists shift every week, computing it once settles nothing. Done by hand, a week later it all starts over from zero.' },
        { h: 'Solution', p: 'An eight-stage Python pipeline: collect YouTube reviews and tech articles, extract device mentions, compute a consensus score (source authority × recency × ranking signal × price-class fit), then assemble the deliverables (a Google Sheets recap and a Google Slides deck exported to PDF) and email them out. Deliberately no language model in the scoring path, so every number can be traced back to its source and character position. Runs automatically every Sunday morning via Windows Task Scheduler.' },
        { h: 'Result', p: 'Run 2026-W30: 238 collected sources (174 YouTube videos, 64 web articles) produced 2,102 device mentions, filtered down to 50 final rankings (10 phones × 5 price classes). The deliverable is a PDF plus a Google Sheets recap with all 238 sources traceable.' },
      ],
    },
  },

  /* ---------- VI. Novel Rekomendasi Harian ---------- */
  {
    icon: 'book-open',
    github: 'https://github.com/Agungtrimahmudi-automation/novel-rekomendasi-harian',
    image: 'assets/img/novel-harian.png',
    tags: ['n8n','Gemini API','Google Sheets API','Gmail API'],
    id: {
      title: 'Novel Rekomendasi Harian: Digest Ranking Lintas Situs',
      hook: 'Digest email tiap pagi berisi Top 10 novel dari empat situs, lengkap dengan penanda judul baru dan perubahan peringkat. Sebelas situs saya periksa lebih dulu, lima dibuang karena diblokir atau sudah mati.',
      sections: [
        { h: 'Pendahuluan', p: 'Saya membaca web novel setiap hari, dan tiap pagi selalu mengulang ritual yang sama: buka satu per satu situs peringkat, bandingkan mana yang naik, tebak mana yang layak dibaca. Sering saya membaca daftar yang sama persis dengan kemarin tanpa sadar, karena peringkat jarang berubah drastis.' },
        { h: 'Masalah', p: 'Tiga hal yang ingin diselesaikan: empat situs harus dibuka manual tiap hari, tidak ada cara tahu mana judul yang benar-benar baru versus yang sudah nangkring seminggu, dan sebagian besar situs berbahasa Inggris termasuk genre yang selalu harus difilter manual.' },
        { h: 'Solusi', p: 'Satu workflow n8n terjadwal 07:00 WITA yang mengambil data dari empat sumber (WTR Lab, Royal Road, NovelUpdates via proxy, MeioNovel), menggabungkan dan menyaring genre, menerjemahkan dengan Gemini 2.5 Flash, membandingkan dengan riwayat di Google Sheets untuk menghitung status baru/naik/turun, lalu mengirim digest HTML lewat Gmail. Sebelas situs saya periksa lebih dulu untuk memetakan mana yang bisa diakses, sebelum arsitekturnya diputuskan. Lima di antaranya diblokir Cloudflare atau sudah mati, jadi tidak dipakai.' },
        { h: 'Hasil', p: 'Berjalan otomatis tiap pagi, satu eksekusi ±67 detik, menghasilkan 40 judul per hari (10 dari tiap 4 sumber) yang sudah tersaring genre, lengkap dengan badge BARU, indikator naik/turun peringkat, dan hari ke-berapa judul itu bertahan di daftar.' },
      ],
    },
    en: {
      title: 'Daily Novel Recommendations: Cross-Site Ranking Digest',
      hook: 'A morning email digest of Top 10 novels from four sites, with new-title badges and rank-change indicators. Eleven sites were probed first; five were dropped as blocked or dead.',
      sections: [
        { h: 'Introduction', p: 'I read web novels every day, and every morning I repeated the same ritual: open each ranking site one by one, compare what moved up, guess what\'s worth reading. I\'d often read the exact same list as yesterday without realizing it, since rankings rarely change drastically.' },
        { h: 'Problem', p: 'Three things needed solving: four sites had to be opened manually every day, there was no way to tell a genuinely new title from one that had been sitting there for a week, and most sites were in English, including genres that always had to be filtered by hand.' },
        { h: 'Solution', p: 'A single n8n workflow scheduled for 07:00 WITA that fetches from four sources (WTR Lab, Royal Road, NovelUpdates via proxy, MeioNovel), merges and filters by genre, translates with Gemini 2.5 Flash, compares against history in Google Sheets to compute new/up/down status, then sends an HTML digest via Gmail. Eleven sites were probed first to map what was actually reachable before the architecture was decided. Five of them were Cloudflare-blocked or dead and were dropped.' },
        { h: 'Result', p: 'Runs automatically every morning, one execution takes about 67 seconds, producing 40 titles a day (10 from each of 4 sources) already filtered by genre, complete with a NEW badge, rank up/down indicators, and a day-count for titles that have stuck around.' },
      ],
    },
  },
];

const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

/* ====================== 2. BADGE TEKNOLOGI =========================
   shields.io dengan gaya & warna yang sama seperti badge di README tiap
   repo, supaya tag di kartu proyek langsung dikenali sebagai hal yang
   sama. Tag di luar kamus ini jatuh ke badge abu-abu polos.
   ================================================================== */
const TAG_BADGES = {
  'n8n': 'https://img.shields.io/badge/n8n-0A0A0A?style=for-the-badge&logo=n8n&logoColor=white',
  'Python': 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
  'JavaScript': 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
  'Docker': 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
  'FastAPI': 'https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white',
  'Apps Script': 'https://img.shields.io/badge/Apps%20Script-4285F4?style=for-the-badge&logo=googleappsscript&logoColor=white',
  'Gemini API': 'https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white',
  'Telegram API': 'https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white',
  'Google Sheets API': 'https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white',
  'Google Docs API': 'https://img.shields.io/badge/Google%20Docs-4285F4?style=for-the-badge&logo=googledocs&logoColor=white',
  'Google Drive API': 'https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white',
  'Google Slides API': 'https://img.shields.io/badge/Google%20Slides-F4B400?style=for-the-badge&logo=googleslides&logoColor=white',
  'Gmail API': 'https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white',
  'Google Form': 'https://img.shields.io/badge/Google%20Forms-7248B9?style=for-the-badge&logo=googleforms&logoColor=white',
  'SMTP Email': 'https://img.shields.io/badge/SMTP%20Email-4B5563?style=for-the-badge&logo=gmail&logoColor=white',
  'YouTube Data API': 'https://img.shields.io/badge/YouTube%20Data%20API-FF0000?style=for-the-badge&logo=youtube&logoColor=white',
};

const tagBadgeUrl = (tag) =>
  TAG_BADGES[tag] || `https://img.shields.io/badge/${encodeURIComponent(tag)}-4B5563?style=for-the-badge`;

const renderTagBadges = (tags) =>
  tags.map((tag) => `<img src="${tagBadgeUrl(tag)}" alt="${tag}" loading="lazy" />`).join('');

/* ======================= 3. KAMUS UI (i18n) ========================
   Nilai `id` di sini harus identik dengan teks yang ditulis langsung di
   index.html, karena markup itulah yang tampil sebelum skrip berjalan.
   ================================================================== */
const I18N = {
  id: {
    nav_about:'Tentang', nav_projects:'Portofolio', nav_skills:'Keahlian',
    nav_repos:'Repositori', nav_cert:'Sertifikasi', nav_contact:'Kontak',
    hero_badge:'Tersedia untuk proyek otomatisasi',
        hero_hello:'Halo, saya Agung.',
                hero_bio:'Saya merancang sistem otomatisasi yang mengurangi pekerjaan manual, menghubungkan berbagai aplikasi, dan membantu tim bekerja lebih cepat serta terstruktur.',
        hero_cta1:'Lihat Hasilnya', hero_cta2:'Hubungi Saya',
        stat_time:'Waktu Dihemat di Laporan RS',
        stat_orgs:'Instansi Memakainya',
        stat_systems:'Sistem Berjalan',
        stat_uptime_val:'1+', stat_uptime:'Tahun di Produksi',
        about_kicker:'Tentang Saya', about_title:'Otomatisasi workflow produksi, hasil terukur.',
                about_body:'Saya memulai dari masalah nyata: staf menghabiskan jam untuk menyalin data antar spreadsheet setiap bulan. Pola ini tidak sulit secara teknis — panjang langkah dan pengulangan adalah beban utamanya. Pekerjaan berulang tanpa keputusan kognitif adalah kandidat tepat untuk otomatisasi.', about_body2:'Otomatisasi di proses yang salah justru menambah kompleksitas. Saya sarankan pertahankan manual bila alur belum stabil; sistem baru hanya layak dibangun saat mengurangi beban nyata, bukan menambahkannya.', about_c1_t:'Fokus pada solusi teknis: n8n, Python, LLM integration, data pipeline.', about_c1_b:'Setiap sistem berawal dari masalah nyata yang benar-benar merepotkan, seperti staf rumah sakit yang lembur tiap akhir bulan demi satu laporan.',
        about_c2_t:'AI hanya untuk pemahaman bahasa alami, bukan menggantikan logika bisnis.', about_c2_b:'AI dipakai hanya di bagian yang butuh memahami bahasa. Perhitungan skor peringkat HP justru sengaja tanpa LLM, supaya angkanya bisa ditelusuri.',
        about_c3_t:'Transformasi proses: manual \u2192 otomatis \u2192 terintegrasi dengan AI.', about_c3_b:'Sistem tertua saya berjalan sejak Juli 2025 dan bertahan melewati dua kali pergantian template admin.',
        proj_kicker:'Portofolio', proj_title:'Solusi otomatisasi yang saya bangun',
        proj_sub:'Enam sistem: dua dipakai instansi lain setiap bulan, tiga saya jalankan sendiri setiap hari, dan satu studi kasus yang terbukti bekerja tapi belum dipakai. Klik untuk detail lengkapnya, termasuk keputusan dan angkanya.',
        proj_readmore:'Baca Selengkapnya',
        how_kicker:'Cara Kerja', how_title:'Yang saya kerjakan sebelum node pertama dibuat',
        how_sub:'Empat kebiasaan yang menentukan apakah sebuah otomatisasi masih berjalan setahun kemudian, atau berhenti begitu ada satu hal yang berubah.',
        how_s1_t:'Petakan dulu, bangun belakangan',
        how_s1_b:'Untuk digest novel, sebelas situs saya periksa satu per satu sebelum arsitekturnya diputuskan. Lima ternyata diblokir atau sudah mati, dan itu jauh lebih murah diketahui di awal daripada setelah parser-nya selesai dibuat.',
        how_s2_t:'Rancang alur kerja end-to-end: input \u2192 proses \u2192 output terverifikasi.',
        how_s2_b:'Saya merancang otomatisasi sesuai kebutuhan sebenarnya, bukan menambah lapisan aplikasi yang tidak diperlukan. UI baru dibangun saat proyek memang membutuhkannya.',
        how_s3_t:'Angka yang bisa ditelusuri',
        how_s3_b:'Peringkat HP dihitung tanpa model bahasa sama sekali, supaya tiap angka bisa ditelusuri balik ke sumbernya. Bot resep menjawab hanya dari 1.000 resep nyata, lengkap dengan tautan aslinya.',
        how_s4_t:'Metrik terverifikasi, bukan perkiraan.',
        how_s4_b:'Staf rumah sakit memakai sistemnya sendiri sejak Juni 2026. Jurnal Basarnas bertahan melewati dua kali pergantian template tanpa logika intinya disentuh.',
        mid_cta:'Punya pekerjaan bulanan yang mirip? Ceritakan saja.',
        mid_cta_btn:'Ceritakan prosesnya',
        skill_kicker:'Teknologi', skill_title:'Tools & keahlian saya',
        skill_sub:'n8n sebagai platform utama saya, didukung keahlian di AI/LLM, integrasi API, dan perancangan workflow.',
        repo_kicker:'Repositori', repo_title:'Semua repository publik',
        repo_sub:'Diambil langsung dari GitHub, selalu terbaru, termasuk yang belum ditulis ceritanya di atas.',
        repo_loading:'Memuat daftar repository...',
        repo_error:'Daftar repository belum bisa dimuat otomatis saat ini.',
        repo_error_link:'Lihat langsung di GitHub',
        repo_updated:'diperbarui',
        cert_kicker:'Sertifikasi', cert_title:'Kursus yang sudah diselesaikan',
        cert_sub:'Setiap kursus di bawah ini saya selesaikan sampai sertifikatnya terbit.',
        contact_kicker:'Kontak', contact_title:'Punya proses yang ingin diotomatisasi?',
        contact_sub:'Buka untuk kolaborasi otomatisasi workflow dan integrasi AI. Hubungi via email atau LinkedIn.',
    form_name:'Nama', form_name_ph:'Nama Anda',
    form_email:'Email', form_email_ph:'email@contoh.com',
    form_msg:'Pesan', form_msg_ph:'Ceritakan proses yang ingin diotomatisasi…',
    form_send:'Kirim Pesan',
    form_success:'Terima kasih. Pesan Anda sudah terkirim.',
    form_error:'Pesan gagal terkirim. Silakan coba lagi, atau kirim langsung ke',
    footer_rights:'Dibuat dengan HTML, CSS, dan kopi.',
    modal_doc:'Lihat dokumentasi teknis',
    modal_close:'Tutup',
  },
  en: {
    nav_about:'About', nav_projects:'Portfolio', nav_skills:'Skills',
    nav_repos:'Repositories', nav_cert:'Certifications', nav_contact:'Contact',
    hero_badge:'Available for automation projects',
    hero_hello:"Hi, I'm",
    hero_bio:"I build systems that take over repetitive work. One hospital's monthly report used to take two hours; it now finishes in one minute, and has been running that way since June 2026.",
    hero_cta1:'See the Results', hero_cta2:'Contact Me',
    stat_time:'Time Saved, Hospital Report',
    stat_orgs:'Organizations Using Them',
    stat_systems:'Systems Running',
    stat_uptime_val:'1+', stat_uptime:'Years in Production',
    about_kicker:'About Me', about_title:'Smart automation, real results.',
    about_body:'I do not start from a list of tools. I start from watching someone spend an evening copying numbers from one spreadsheet into another, then doing the same thing again next month with different numbers. Work like this is rarely difficult. What makes it heavy is the length: many steps, all repetitive, and not one of them asks a person to think. Work that does not ask a person to think is exactly the work a machine should be doing.',
    about_body2:'Beyond that, I more often suggest leaving things manual. Automation dropped into the wrong process lifts nobody\'s burden. All it adds is one more system that has to be maintained.',
    about_c1_t:'Problem-First', about_c1_b:'Every system starts from a real, painful problem, like hospital staff working overtime each month-end for one report.',
    about_c2_t:'Logic + AI', about_c2_b:'AI goes where language judgment is required. The phone-ranking scoring path is deliberately LLM-free, so the numbers stay traceable.',
    about_c3_t:'Measurable', about_c3_b:'My oldest system has run since July 2025 and survived two changes to the admin template.',
    proj_kicker:'Portfolio', proj_title:'Automation solutions I built',
    proj_sub:'Six systems: two used by other organizations every month, three I run myself every day, and one case study that works but is not yet in use. Click for the full story, including the decisions and the numbers.',
    proj_readmore:'Read More',
    how_kicker:'How I Work', how_title:'What I do before the first node is written',
    how_sub:'Four habits that decide whether an automation is still running a year later, or stops the moment one thing changes.',
    how_s1_t:'Map first, build later',
    how_s1_b:'For the novel digest, I probed eleven sites before deciding the architecture. Five turned out to be blocked or dead, and that is far cheaper to learn upfront than after the parser is written.',
    how_s2_t:'Right-sized scope',
    how_s2_b:'I design automation to match the actual need, not to add an application layer nobody asked for. A UI only gets built when the project genuinely calls for one.',
    how_s3_t:'Numbers you can trace',
    how_s3_b:'Phone rankings are computed with no language model in the scoring path, so every number leads back to its source. The recipe bot answers only from 1,000 real recipes, each with its original link.',
    how_s4_t:'Runs without me',
    how_s4_b:'Hospital staff have operated their system themselves since June 2026. The Basarnas journal survived two template changes without its core logic being touched.',
    mid_cta:'If there is a monthly job at your office shaped like any of the above, I would like to hear about it.',
    mid_cta_btn:'Tell me about it',
    skill_kicker:'Technology', skill_title:'My tools & skills',
    skill_sub:'n8n as my primary platform, supported by expertise in AI/LLM, API integration, and workflow design.',
    repo_kicker:'Repositories', repo_title:'All public repositories',
    repo_sub:'Pulled directly from GitHub, always current, including the ones not yet written up above.',
    repo_loading:'Loading repository list…',
    repo_error:'The repository list could not be loaded automatically right now.',
    repo_error_link:'View directly on GitHub',
    repo_updated:'updated',
    cert_kicker:'Certifications', cert_title:'Courses completed',
    cert_sub:'Every course below was completed through to the certificate.',
    contact_kicker:'Contact', contact_title:'Have a process you want to automate?',
    contact_sub:'Tell me about the job your office repeats most often. My first reply is a question to map the flow, not a quote: some processes turn out cheaper to tidy up than to automate, and that is better known early.',
    form_name:'Name', form_name_ph:'Your name',
    form_email:'Email', form_email_ph:'email@example.com',
    form_msg:'Message', form_msg_ph:'Tell me about the process you want to automate…',
    form_send:'Send Message',
    form_success:'Thank you. Your message has been sent.',
    form_error:'The message failed to send. Please try again, or write directly to',
    footer_rights:'Built with HTML, CSS, and coffee.',
    modal_doc:'View technical documentation',
    modal_close:'Close',
  },
};

/* Keahlian dikelompokkan: n8n sebagai platform utama, sisanya pendukung.
   Grup dengan learning:true dirender bergaris putus-putus. */
const SKILLS = [
  {
    cat:  { id:'Platform Otomasi', en:'Automation Platform' },
    note: { id:'tool utama saya',  en:'my primary tool' },
    items:[ ['zap','n8n'] ],
  },
  {
    cat:  { id:'Bahasa Pemrograman', en:'Programming Languages' },
    items:[ ['file-code','Python'], ['braces','JavaScript'] ],
  },
  {
    // Disebut "LLM" secara generik, bukan nama model tertentu, karena
    // pilihan model berganti per proyek. "Vector DB" sengaja tidak masuk:
    // repo RAG yang sudah jadi justru dibangun tanpa vector database.
    cat:  { id:'AI & LLM', en:'AI & LLM' },
    items:[
      ['sparkles','Generative AI (LLM)'], ['pen-line','Prompt Engineering'], ['library','RAG'],
      ['search','Embeddings & Retrieval'], ['bot','AI Agent'], ['code-2','AI-Driven Coding'],
    ],
  },
  {
    cat:  { id:'Integrasi & API', en:'Integrations & APIs' },
    items:[ ['link','Google APIs'], ['globe','HTTP Request'], ['message-circle','Telegram API'], ['plug','REST API'], ['webhook','Webhook'] ],
  },
  {
    cat:  { id:'Inti & Pendukung', en:'Core & Supporting' },
    items:[ ['puzzle','Workflow Design'], ['file-terminal','Apps Script'], ['palette','HTML/CSS'], ['hexagon','Node.js'], ['container','Docker'] ],
  },
  {
    cat:  { id:'Sedang Dipelajari', en:'Currently Learning' },
    note: { id:'target belajar berikutnya', en:'next learning goals' },
    learning: true,
    items:[ ['database','Supabase'], ['brain','MCP (Model Context Protocol)'] ],
  },
];

const GITHUB_USER = 'Agungtrimahmudi-automation';
const CONTACT_EMAIL = 'agungtrimahmudi.it@gmail.com';

/* ========================= 4. RENDER KONTEN ======================== */

let LANG = localStorage.getItem('lang') || 'id';

const t = (key) => (I18N[LANG] && I18N[LANG][key]) || key;

const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));

const drawIcons = () => { if (window.lucide) window.lucide.createIcons(); };

function renderProjects() {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = PROJECTS.map((p, i) => {
    const d = p[LANG];
    const thumb = p.image
      ? `<div class="card__thumb"><img src="${p.image}" alt="${escapeHtml(d.title)}" loading="lazy" /></div>`
      : '';
    return `
      <article class="card reveal">
        ${thumb}
        <div class="card__body">
          <div class="card__meta">
            <span class="seal"><i data-lucide="${p.icon}"></i></span>
            <span class="card__numeral">${NUMERALS[i] || i + 1}</span>
          </div>
          <h3 class="card__title">${escapeHtml(d.title)}</h3>
          <p class="card__hook">${escapeHtml(d.hook)}</p>
          <div class="tags">${renderTagBadges(p.tags)}</div>
          <button class="link-arrow card__cta" data-open="${i}">
            ${t('proj_readmore')}
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" d="M5 12h14m-6-6 6 6-6 6"/></svg>
          </button>
        </div>
      </article>`;
  }).join('');

  grid.querySelectorAll('[data-open]').forEach((btn) => {
    btn.addEventListener('click', () => openModal(Number(btn.dataset.open), btn));
  });
  drawIcons();
  observeReveal();
}

function renderSkills() {
  const grid = document.getElementById('skillGrid');
  grid.innerHTML = SKILLS.map((group) => {
    const pillClass = group.learning ? 'pill pill--learning' : 'pill';
    const pills = group.items
      .map(([icon, name]) => `<span class="${pillClass}"><i data-lucide="${icon}"></i>${name}</span>`)
      .join('');
    const note = group.note ? `<span class="skill-group__note">(${group.note[LANG]})</span>` : '';
    return `
      <div class="skill-group reveal">
        <div class="skill-group__head">
          <h3>${group.cat[LANG]}</h3>
          ${note}
          <span class="line"></span>
        </div>
        <div class="pills">${pills}</div>
      </div>`;
  }).join('');
  drawIcons();
  observeReveal();
}

/* Daftar repository diambil live dari GitHub REST API tanpa autentikasi.
   Fork dan repo profil disaring. Bila gagal (rate limit / offline), seksi
   ini turun jadi tautan ke GitHub, bukan blok kosong. */
let REPO_CACHE = null;
let REPO_FAILED = false;

async function loadRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    REPO_CACHE = data.filter((r) => !r.fork && r.name.toLowerCase() !== GITHUB_USER.toLowerCase());
  } catch (err) {
    REPO_FAILED = true;
  }
  renderRepos();
}

function renderRepos() {
  const grid = document.getElementById('repoGrid');
  if (!grid) return;

  if (REPO_FAILED) {
    grid.innerHTML = `
      <div class="repo-fallback">
        <p class="muted">${t('repo_error')}</p>
        <a class="link-arrow" href="https://github.com/${GITHUB_USER}?tab=repositories" target="_blank" rel="noopener">
          ${t('repo_error_link')}
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </a>
      </div>`;
    return;
  }

  if (!REPO_CACHE) {
    grid.innerHTML = `<p class="muted">${t('repo_loading')}</p>`;
    return;
  }

  const locale = LANG === 'id' ? 'id-ID' : 'en-US';
  grid.innerHTML = REPO_CACHE.map((r) => {
    // Deskripsi mentah GitHub tidak ditampilkan: bahasanya mengikuti tiap
    // repo (campur ID/EN) dan tidak ikut berganti saat bahasa halaman diubah.
    const updated = new Date(r.pushed_at).toLocaleDateString(locale, { year: 'numeric', month: 'short' });
    return `
      <a class="tile repo reveal" href="${r.html_url}" target="_blank" rel="noopener">
        <h3>${escapeHtml(r.name)}</h3>
        <div class="repo__meta">
          ${r.language ? `<span class="repo__lang">${escapeHtml(r.language)}</span>` : ''}
          <span>${t('repo_updated')} ${updated}</span>
        </div>
      </a>`;
  }).join('');
  observeReveal();
}

/* ============================ 5. MODAL ============================= */

const modal = document.getElementById('modal');
const modalPanel = modal.querySelector('.modal__panel');
let lastFocused = null;

function openModal(index, trigger) {
  const p = PROJECTS[index];
  const d = p[LANG];
  lastFocused = trigger || document.activeElement;

  document.getElementById('modalSeal').innerHTML = `<i data-lucide="${p.icon}"></i>`;
  document.getElementById('modalTitle').textContent = d.title;

  const cover = p.image ? `<img src="${p.image}" alt="${escapeHtml(d.title)}" loading="lazy" />` : '';
  // Baris kosong ganda memisahkan paragraf: narasi yang panjang tidak terbaca
  // sebagai satu balok teks.
  const paragraphs = (text) =>
    String(text).split(/\n{2,}/).map((par) => `<p class="prose">${escapeHtml(par.trim())}</p>`).join('');
  document.getElementById('modalBody').innerHTML = cover + d.sections
    .map((s) => `<div><h4>${escapeHtml(s.h)}</h4>${paragraphs(s.p)}</div>`)
    .join('');

  document.getElementById('modalTags').innerHTML = renderTagBadges(p.tags);

  const githubBtn = document.getElementById('modalGithub');
  if (p.github) {
    githubBtn.href = p.github;
    githubBtn.hidden = false;
  } else {
    githubBtn.hidden = true;
  }

  drawIcons();
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').focus();
}

function closeModal() {
  if (!modal.classList.contains('is-open')) return;
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
  document.getElementById('modalBody').scrollTop = 0;
  if (lastFocused) lastFocused.focus();
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// Esc menutup modal; Tab dikurung di dalam panel selama modal terbuka.
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('is-open')) return;
  if (e.key === 'Escape') { closeModal(); return; }
  if (e.key !== 'Tab') return;

  const focusables = modalPanel.querySelectorAll(
    'a[href]:not([hidden]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

/* =========================== 6. BAHASA ============================= */

function applyLang() {
  document.documentElement.lang = LANG;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = I18N[LANG][el.getAttribute('data-i18n')];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const value = I18N[LANG][el.getAttribute('data-i18n-ph')];
    if (value !== undefined) el.setAttribute('placeholder', value);
  });
  document.querySelectorAll('[data-i18n-label]').forEach((el) => {
    const value = I18N[LANG][el.getAttribute('data-i18n-label')];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  // Tombol menampilkan bahasa tujuan, bukan bahasa yang sedang aktif.
  document.getElementById('langLabel').textContent = LANG === 'id' ? 'EN' : 'ID';

  renderProjects();
  renderSkills();
  renderRepos();
}

document.getElementById('langToggle').addEventListener('click', () => {
  LANG = LANG === 'id' ? 'en' : 'id';
  localStorage.setItem('lang', LANG);
  applyLang();
});

/* ================= 7. TEMA, NAVIGASI, DAN GERAK ==================== */

// Tema sudah dipasang oleh skrip kecil di <head> agar tidak ada kedip saat
// memuat. Di sini tinggal menangani tombolnya.
document.getElementById('themeToggle').addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const mobileMenu = document.getElementById('mobileMenu');
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
mobileMenu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let revealObserver;
function observeReveal() {
  // Tanpa IntersectionObserver, konten tidak boleh ikut hilang: tampilkan saja.
  if (REDUCED_MOTION || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
  }
  document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => revealObserver.observe(el));
}

function initCountUp() {
  const nums = document.querySelectorAll('.stat-num');
  if (REDUCED_MOTION) {
    nums.forEach((el) => { el.textContent = el.dataset.count; });
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.count);
        const step = Math.max(1, Math.ceil(target / 40));
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = current;
        }, 25);
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((n) => obs.observe(n));
}

// Garis emas tipis di puncak halaman, menunjukkan posisi gulir.
function initProgress() {
  const bar = document.getElementById('progress');
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : '0%';
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

// Tautan navigasi menyala mengikuti seksi yang sedang dibaca.
function initNavHighlight() {
  const links = [...document.querySelectorAll('.nav__link')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length) return;

  // Seksi yang sedang melintasi pita tengah layar dicatat, lalu yang paling
  // awal dalam urutan dokumen yang disorot. Kalau tidak ada satu pun (mis. saat
  // masih di hero), semua sorotan dilepas — bukan menyisakan yang terakhir.
  const visible = new Set();
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });
      const active = sections.find((s) => visible.has(s.id));
      links.forEach((link) =>
        link.classList.toggle('is-active', !!active && link.getAttribute('href') === `#${active.id}`)
      );
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach((s) => obs.observe(s));
}

/* ================== 8. FORM KONTAK & INISIALISASI ================== */

const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

function showFormStatus(kind) {
  formStatus.hidden = false;
  formStatus.className = `form__status form__status--${kind === 'ok' ? 'ok' : 'err'}`;
  formStatus.innerHTML = kind === 'ok'
    ? escapeHtml(t('form_success'))
    : `${escapeHtml(t('form_error'))} <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  formStatus.hidden = true;
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    form.reset();
    showFormStatus('ok');
  } catch (err) {
    // Kegagalan jaringan atau penolakan endpoint tidak boleh tampil sebagai
    // sukses: pengirim perlu tahu pesannya tidak sampai.
    showFormStatus('err');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
applyLang();
observeReveal();
initCountUp();
initProgress();
initNavHighlight();
loadRepos();
drawIcons();
