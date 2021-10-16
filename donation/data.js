let data_donation = [
  {
    text: 'Zakat',
    value: ['Zakat Fitrah', 'Zakat Penghasilan', 'Zakat Perdagangan', 'Zakat Pertanian', 'Zakat Emas dan Perak', 'Zakat Investasi', 'Zakat Tabungan', 'Zakat Rikaz'],
    payment: [{ name: 'Mandiri', num: '172-00-0029905-9', img: 'mandiri.png' }, { name: 'BSI', num: '7099887782', img: 'bsi.png' }]
  },
  { text: 'Infaq', value: ['Shadaqah', 'Bantuan Kemanusiaan', 'Bantuan Berupa Barang'], payment: [{ name: 'Mandiri', num: '172-00-0029903-4', img: 'mandiri.png' }, { name: 'BSI', num: '7099887798', img: 'bsi.png' }] },
  { text: 'DDS', value: ['DDS'], payment: [{ name: 'Mandiri', num: '172-00-0029900-0', img: 'mandiri.png' }] },
  {
    text: 'Wakaf',
    value: ['Perkebunan', 'Tiketing dan travel', 'Warung Maqdis', 'Maqdis', 'IDBS', "Koperasi Syari'ah", "Ma'had Alqur'an Tahfidz Belading", "TK Maqdis", "SDIT Maqdis", "Catering LNW", "Laundry LNW", "Depot Air Minum AMI", "Renovasi rumah Singgah Pekanbaru", "Alqur'an dan Iqro'"],
    payment: [{ name: 'Mandiri', num: '172-00-0029896-0', img: 'mandiri.png' }, { name: 'BSI', num: '7099885593', img: 'bsi.png' }]
  },
  { text: 'Rumah Yatim', value: ['Rumah Yatim'], payment: [{ name: 'Mandiri', num: '172-00-0029901-8', img: 'mandiri.png' }, { name: 'BSI', num: '709988', img: 'bsi.png' }] }
];

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
