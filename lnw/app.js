let data_article = [
  // {
  //   id: 1,
  //   type: "news",
  //   date: "DD/MM/YYYY",
  //   img: "unknown.png",
  //   link: "404.html",
  //   title: "Unknown",
  //   highlight: "ini penjelasan singkat",
  //   author: "Andri",
  //   author_img: "andri.png",
  //   author_link: "#andri"
  // }
]

let data_program = {
  pendidikan: [
    {title: "Ibadurrahman Duri Boarding School (IDBS)", content: ""},
    {title: "Maqdis Ibadurrahman", content: ""},
    {title: "PAUD Qur'an Terpadu Maqdis", content: ""},
    {title: "SDIT Maqdis Ibadurrahman", content: ""},
  ],
  sosial: [
    {title: "Menebar Alqur'an", content: ""},
  ],
  ekonomi: [
    {title: "Perkebunan", content: "Tersebar di Mandau (Kulim Km.5, dan Pematang Pudu), Pinggir (Desa Tengganau), Tegar, Balam, Cucut, dan Jambi."},
    {title: "Ticketing & Travel", content: "Melayani pembelian tiket pesawat, pembelian pulsa, listrik, BPJS, serta tagihan PPOB lainnya."},
    {title: "Warung Maqdis", content: 'Menyediakan kebutuhan barang harian dan berbagai jajanan sehat non MSG.'},
    {title: "Koperasi Syariah", content: "Melayani simpan pinjam dengan akad mudarabah."},
    {title: "Catering", content: "Terbagi menjadi 2 lokasi yaitu di Belading dan Balai Raja."},
    {title: "Laundry", content: "Laundry LNW Ibadurrahman terletak di 2 lokasi yaitu di Jl. Mawar dan komplek RCI."},
    {title: "Kantin", content: "Kantin yang dikelola LNW Ibadurrahman saat ini adalah kantin IDBS untuk santri putra dan putri."},
    {title: "Air Minum Ibadurrahman", content: "Berada di komplek IDBS, Balai Raja."}
  ], 
  dakwah: [
    {title: "Radio Dakta Mandau", content: ""}
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

new Vue({
  el: "#vue-form",
  data: {
    donatur_call: 'Sdr',
    donatur_name: '',
    donatur_email: '',
    donatur_phone: '',
    donation_amount: '',
    donation_type: '',
    donation_desc: '',
    picked: '',
    donation: data_donation,
  }
});