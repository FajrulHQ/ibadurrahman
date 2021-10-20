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