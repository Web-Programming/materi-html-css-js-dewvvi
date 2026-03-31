// fungsi utk memuat data dari session storage dan menampilkannya
function displayGuest() {
    const guestListUI = document.getElementById('guestList');
    guestListUI.innerHTML = ' '; // reset tampilan list

    // mengambil data dari session storage jika kosong buat array baru
    let guests = JSON.parse(sessionStorage.getItem('guests')) || [];

    guests.forEach(guests => {
        let li = document.createElement('li');
        li.textContent = guests;
        guestListUI.appendChild(li);
    });
}

// fungsi utk menambah data
function addGuest() {
    const input = document.getElementById('guestInput');
    const guestName = input.value;
    if (guestName === ' ') {
        alert('nama tidak bole kosong!');
        return;
    }

    //ambil data lama
    let guests = JSON.parse(sessionStorage.getItem('guests')) || [];

    // tambah data baru ke array
    guests.push(guestName);

    //simpan kembali ke storage dalam bentuk string
    sessionStorage.setItem('guests', JSON.stringify(guests));

    // bersihkan input dan perbarui tampilan
    input.value = ' ';
    displayGuest();

}

// fungsi utk menghapus semua data
function clearList() {
    if (confirm('hapus semua data tamu di sesi ini?')) {
        sessionStorage.removeItem('guests');
        displayGuest();
    }
}