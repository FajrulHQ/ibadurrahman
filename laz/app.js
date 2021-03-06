let data_article = [
  {
    id: 2,
    type: "Berita",
    date: "08/10/2021",
    img: "rakorda-baznas.jpg",
    link: "rakorda-baznas",
    title: "LAZ Ibadurrahman mengikuti RAKORDA BAZNAS SE - PROVINSI RIAU",
    highlight: "Pada tanggal 30 September - 01 Oktober 2021 LAZ Ibadurrahman mengikuti RAKORDA BAZNAS SE - PROVINSI RIAU dengan tema",
    author: "Andri",
    content: `\t\tAlhamdulillah… Pada tanggal 30 September - 01 Oktober 2021 LAZ Ibadurrahman mengikuti RAKORDA BAZNAS SE - PROVINSI RIAU dengan tema “Menjadi Lembaga Utama Menyejahterakan Umat”, yang dilaksanakan di Hotel Mutiara Merdeka Pekanbaru. Kegiatan ini dihadiri oleh pimpinan BAZNAS pusat Ahmad Sudrajat dan juga para pimpinan BAZNAS Kabupaten / Kota serta pimpinan LAZNAS / LAZ Kabupaten / Kota. 
\n\t\tPada kesempatan ini, LAZ Ibadurrahman menyampaikan pelaporan pengelolaan ZIS LAZ Ibadurrahman tahun 2020 sampai dengan 2021. Semoga kedepannya LAZ Ibadurrahman mampu menjadi Lembaga Zakat yang Amanah, Profesional dan Transparan bagi masyarakat.
    `
  },
  {
    id: 1,
    type: "Berita",
    date: "07/10/2021",
    img: "jumat-berkah.jpg",
    link: "jumat-berkah",
    title: "LAZ Ibadurrahman menggelar kegiatan Jumat Berkah",
    highlight: "Pada hari Jum’at, 01 Oktober 2021 LAZ Ibadurrahman menggelar kegiatan Jumat Berkah di sekitar",
    author: "Andri",
    content: `\t\tAlhamdulillah… Pada hari Jum’at, 01 Oktober 2021 LAZ Ibadurrahman menggelar kegiatan Jumat Berkah di sekitar Jalan Mawar dan Jalan Hangtuah. Kegiatan “Jum’at Berkah” ini didukung oleh Muzakki LAZ Ibadurrahman & PIIMAU (Persatuan Ibu-Ibu Masjid Agung Ushuluddin). 
\n\t\tKegiatan “Jum’at Berkah” merupakan agenda rutin yang senantiasa dilakukan setiap hari Jumat. Dimana LAZ Ibadurrahman menjadi jembatan para Muzakki LAZ Ibadurrahman dalam menebar senyum dhuafa dengan memborong dagangan UMKM,dan membagikannya di sekitar Jalan Mawar dan Jalan Hangtuah. Biaya operasional untuk kegiatan “Jumat Berkah” bersumber dari infak para donatur LAZ Ibadurrahman. Selain memborong UMKM, LAZ Ibadurrahman juga bekerjasama dengan PIIMAU membagikan 100 paket sembako kepada para dhuafa di Kecamatan Mandau, Bathin Solapan dan juga Pinggir.
    `
  }
]

let data_program = {
  pendidikan: [
    { title: "Beasiswa Reguler", content: "Program ini sudah berjalan 15 tahun, telah diterima 300 anak SMP dan SMA ditahun 2021 dengan penyaluran Rp. 345.000.000/tahun." },
    { title: "Beasiswa 3G", content: "Beasiswa khusus kelas 3 SMA yang sudah mendapatkan beasiswa reguler sebelumnya, telah diterima 80 Anak ditahun 2021 dengan penyaluran Rp. 40.000.000." },
    { title: "Beasiswa Perguran Tinggi", content: "Beasiswa ini diberikan kepada penerima beasiswa 3G yang lulus seleksi Universitas negeri, telah diterima 5 anak dengan penyaluran Rp. 10.000.000." },
    { title: "Beasiswa Excelent", content: "Beasiswa tingkat SMP yang bersekolah di SMP IT IDBS dibebas biayakan, telah diberikan kepada 6 anak dengan penyaluran Rp. 72.000.000/tahun." },
    { title: "Biaya Masuk Sekolah", content: "Program bantuan biaya masuk sekolah setiap tahunnya yang telah diterima 120 anak dengan penyaluran Rp. 63.900.000/tahun." },
    { title: "Beasiswa Luar Negeri", content: "Program ini telah diterima 4 anak yang sudah memasukin tahun ke dua di University of Africa (Sudan) dengan penyaluran Rp. 20.000.000/tahun." },
    { title: "Beasiswa Tahfidz Ibad", content: "Beasiswa untuk para penghafal Al-Qur'an di Ponpes Tahfidz Qur'an Ibadurrahman Belading, telah diterima 40 anak dengan penyaluran Rp. 600.000.000/tahun." }
  ],
  sosial: [
    { title: "Bantuan Kebencanaan", content: "Bantuan yang telah diberikan kepada korban Kebakaran di Desa Petani, Gempa di Sulawesi Barat dan Banjir di Kalimantan Selatan." },
    { title: "Gerakan Jum'at Berkah (GJB)", content: "Berkerja sama dengan PII MAU (Persatuan ibu-ibu Masjid Agung) dalam menyalurkan nasi kotak dan paket sembako setiap Jum'at. (donasi a.n Ust. Hasbi)." },
    { title: "Peduli Guru Ngaji", content: "Program ini juga bekerja sama dengan PII MAU dalam memberikan bantuan kepada guru ngaji di Kec.Mandau." },
    { title: "Rumah Yatim", content: "Panti asuhan milik yayasan Ibadurrahman yang berlokasi di Jl. Darul Aitaam RT/RW 004/002 Kel. Balai Raja." }
  ],
  pemberdayaan: [
    { title: "Konsia", content: "Program bantuan 'Konsumtif lanjut usia' yang telah diberikan kepada 238 orang ditahun 2021 yang berdomisili di Kec.Mandau." },
    { title: "Gerobak Berkah", content: "Bantuan kepada Bapak Edwardsyah dan Ibu Imas ini diberikan langsung oleh Ibu Tri Kasbiati (KEMENAG Prov. Riau) ditanggal 21/02/2021." },
    { title: "Kelompok Usaha Mandiri", content: 'Program ini telah berjalan di 2 kelompok yaitu "Usaha Kerupuk Nasi" di Kel. Air Jamban dan kelompok usaha di daerah Semunai Kec. Pinggir.' },
    { title: "Produktif", content: "Bantuan kepada Bapak Ali di Kel. Balai Raja yang Alhamdulillah dapat mengelola sendiri usaha tebu dan miso dirumahnya." }
  ],
  dakwah: [
    { title: "Sauqi", content: "Program 'Saung Qur'an Ibadurrahman (SAUQI) ini bertujuan menjadikan generasi yang Qur'ani dan Rabbani. Da'i LAZ Ibadurrahman yang diutus merupakan para Hafidz Qur'an dan Alumni dari PPTQ Ibadurrahman dan penerima Beasiswa Tahfidz. Program ini berjalan lancar di Gerai LAZ Ibadurrahman Cab. Pinggir dan Cab. Serai Wangi tidak terkecuali dengan cukungan masyarakat setempat." }
  ],
  kesehatan: [
    { title: "Rawat Jalan Poli", content: "Pelayanan kesehatan dari Klinik Pratama, gratis untuk kaum dhuafa yang prioritas." },
    { title: "Suntik KB", content: "Pelayanan kesehatan dari Klinik Pratama, gratis untuk kaum dhuafa yang prioritas." },
    { title: "Ambulans", content: "Pelayanan kesehatan dari Klinik Pratama, gratis untuk kaum dhuafa yang prioritas." },
    { title: "Layanan Ibu Anak", content: "Pelayanan kesehatan dari Klinik Pratama, gratis untuk kaum dhuafa yang prioritas." },
    { title: "Bersama Melawan Covid", content: "Pelayanan kesehatan dari Klinik Pratama, gratis untuk kaum dhuafa yang prioritas." }
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
