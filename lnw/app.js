let data_article = [
  {
    id: 2,
    type: "Berita",
    date: "29/09/2021",
    img: "wakaf-quran.jpg",
    link: "wakaf-quran",
    title: "Penyaluran Wakaf Alqur’an",
    highlight: "Menerima wakaf Al-Qur’an dan buku edukasi Islami untuk disalurkan kepada saudara kita yang membutuhkan.",
    author: "Andri",
    content: `Menerima wakaf Al-Qur’an dan buku edukasi Islami untuk disalurkan kepada saudara kita yang membutuhkan.

Bagi sahabat sekalian yang ingin memberikan wakaf Al-Qur’an dan buku nya melalui LAZ LNW Ibadurrahman, bisa langsung datang ke kantor kami yang beralamat di Jalan Mawar No 5, Duri.
    
Atau transfer ke nomor rekening:

Mandiri
172-00-0029896-0
an. Laz Ibadurrahman - Wakaf

Bank Syariah Indonesia
7099885593
an. Laz Ibadurrahman – Wakaf

Informasi lebih lanjut:
0852-7192-7169
`
  },
  {
    id: 1,
    type: "Berita",
    date: "22/09/2021",
    img: "wakaf-sauqi.jpg",
    link: "wakaf-sauqi",
    title: "Wakaf Sauqi ( Saung qur’an Ibadurrahman )",
    highlight: "Alhamdulillah telah diterima wakaf rumah yang akan dijadikan sebagai SAUQI (Saung Qur’an) Ibadurrahman yang berlokasi di",
    author: "Andri",
    content: `Dari Utsman bin Affan ra., bahwa Rasulullah shallallahu ‘alaihi wa sallam bersabda:
خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
“Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya.” (HR. Tirmidzi)

Alhamdulillah telah diterima wakaf rumah yang akan dijadikan sebagai SAUQI (Saung Qur’an) Ibadurrahman yang berlokasi di Perumnas Tahap 3 Jalan Belibis. Agar dapat memberikan fasilitas yang terbaik kami akan mengadakan open donasi. 

Berikut perlengkapan yang dibutuhkan:
-Karpet layak pakai
-Alat-alat dapur
-Perlengkapan sholat
`
  }
]

let data_program = {
  pendidikan: [
    { title: "Ibadurrahman Duri Boarding School (IDBS)", content: "" },
    { title: "Maqdis Ibadurrahman", content: "" },
    { title: "PAUD Qur'an Terpadu Maqdis", content: "" },
    { title: "SDIT Maqdis Ibadurrahman", content: "" },
  ],
  sosial: [
    { title: "Menebar Alqur'an", content: "" },
  ],
  ekonomi: [
    { title: "Perkebunan", content: "Tersebar di Mandau (Kulim Km.5, dan Pematang Pudu), Pinggir (Desa Tengganau), Tegar, Balam, Cucut, dan Jambi." },
    { title: "Ticketing & Travel", content: "Melayani pembelian tiket pesawat, pembelian pulsa, listrik, BPJS, serta tagihan PPOB lainnya." },
    { title: "Warung Maqdis", content: 'Menyediakan kebutuhan barang harian dan berbagai jajanan sehat non MSG.' },
    { title: "Koperasi Syariah", content: "Melayani simpan pinjam dengan akad mudarabah." },
    { title: "Catering", content: "Terbagi menjadi 2 lokasi yaitu di Belading dan Balai Raja." },
    { title: "Laundry", content: "Laundry LNW Ibadurrahman terletak di 2 lokasi yaitu di Jl. Mawar dan komplek RCI." },
    { title: "Kantin", content: "Kantin yang dikelola LNW Ibadurrahman saat ini adalah kantin IDBS untuk santri putra dan putri." },
    { title: "Air Minum Ibadurrahman", content: "Berada di komplek IDBS, Balai Raja." }
  ],
  dakwah: [
    { title: "Radio Dakta Mandau", content: "" }
  ]
}

new Vue({
  el: "#vue-app",
  data: {
    article: data_article,
    program: data_program,
  },
  components: {
    "carousel": VueCarousel.Carousel,
    "slide": VueCarousel.Slide
  }
});