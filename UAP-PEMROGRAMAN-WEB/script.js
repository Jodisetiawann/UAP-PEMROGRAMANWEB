const dataProduk = [
  { kode: '001', nama: 'Barang A', harga: 10000 },
  { kode: '002', nama: 'Barang B', harga: 20000 },
  { kode: '003', nama: 'Barang C', harga: 30000 }
];

function produk() {
  const listProduk = document.getElementById('listProduk');
  dataProduk.forEach((barang, index) => {
      const row = listProduk.insertRow(index + 1);
      const kodeCell = row.insertCell(0);
      const namaCell = row.insertCell(1);
      const hargaCell = row.insertCell(2);

      kodeCell.textContent = barang.kode;
      namaCell.textContent = barang.nama;
      hargaCell.textContent = barang.harga;
  });
}

function transaksi(event) {
  event.preventDefault();

  const kode = document.getElementById('kode');
  const tambah = document.getElementById('tambah');

  const pilihProduk = dataProduk.find(barang => barang.kode === kode.value);

  if (!pilihProduk) {
      alert('Kode barang tidak valid');
      return;
  }

  const jumlah = parseInt(tambah.value);
  const totalHarga = pilihProduk.harga * jumlah;

  const bayar = window.prompt(
      'Total yang harus dibayar: ' + totalHarga + '\n\n' +
      'Masukkan jumlah uang yang akan dibayarkan:'
  );

  if (bayar === null || bayar === '') {
      alert('Pembayaran dibatalkan');
      return;
  }

  const jumlahBayar = parseFloat(bayar);

  if (isNaN(jumlahBayar) || jumlahBayar < totalHarga) {
      alert('Jumlah pembayaran tidak valid atau kurang dari total yang harus dibayar');
      return;
  }

  const kembalian = jumlahBayar - totalHarga;

  alert(
      'Pembayaran berhasil!\n\n' +
      'Total yang harus dibayar: ' + totalHarga + '\n' +
      'Jumlah yang dibayarkan: ' + jumlahBayar + '\n' +
      'Kembalian: ' + kembalian
  );
}

function reset() {
  document.getElementById("kode").value = "";
  document.getElementById("tambah").value = "";
}

document.addEventListener('DOMContentLoaded', () => {
  produk();
});
