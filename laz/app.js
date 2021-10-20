let data_article = [
//   {
//     id: 1,
//     type: "Berita",
//     date: "DD/MM/YYYY",
//     img: "unknown.png",
//     link: "layout",
//     title: "Unknown",
//     highlight: "ini penjelasan singkat",
//     author: "Andri",
//     content: `\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a neque vel urna tempus egestas in ut nisl. Donec elementum augue ut risus auctor tincidunt. Fusce egestas a ipsum fermentum auctor. Ut tincidunt tincidunt lorem condimentum auctor. Sed quam dui, porta sed lacinia at, volutpat at magna. Morbi sed ornare purus, quis cursus dolor. Vivamus at velit tincidunt, placerat diam non, accumsan arcu. Sed tellus sapien, ultricies sed efficitur eu, ullamcorper sit amet enim. Etiam facilisis viverra ultrices. Vestibulum accumsan libero in ex tincidunt condimentum. Curabitur in faucibus tellus, in malesuada dui.
// \n\t\tNulla tellus massa, auctor vel neque eget, faucibus volutpat felis. Cras placerat lobortis diam, nec sodales nunc. Aenean elementum semper lorem, interdum iaculis dolor luctus ac. Curabitur hendrerit, leo ut viverra ultrices, neque ante euismod enim, et elementum erat nibh eget purus. Nulla volutpat purus eget nisl tempor, eu commodo nisl ultricies. Aliquam efficitur, dui in maximus fermentum, nisl risus volutpat purus, in rhoncus lorem diam sed est. Suspendisse eget ullamcorper quam. Vestibulum ultricies blandit nunc, eget dignissim lorem sagittis vel. Etiam non molestie est. Maecenas auctor porttitor mauris, eu aliquet felis convallis quis.  
//     `
//   }
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
