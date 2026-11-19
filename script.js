
// Mengambil elemen form
const form = document.querySelector(".custom-form");

// Ketika tombol kirim ditekan
form.addEventListener("submit", function(event) {

    // Mencegah halaman langsung berpindah
    event.preventDefault();

    // Mengambil data dari form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const tanggal = document.getElementById("tgl").value;
    const jurusan = document.getElementById("jurusan").value;
    const alamat = document.getElementById("alamat").value;

    // Mengambil jenis kelamin
    const jk = document.querySelector(
        'input[name="jk"]:checked'
    );

    // Mengambil minat
    const minat = document.querySelectorAll(
        'input[name="minat[]"]:checked'
    );

    // Memeriksa password
    if (password.length < 8) {
        alert("Password harus minimal 8 karakter!");
        return;
    }

    // Mengambil pilihan jenis kelamin
    const jenisKelamin = jk ? jk.value : "";

    // Mengambil pilihan minat
    let pilihanMinat = [];

    minat.forEach(function(item) {
        pilihanMinat.push(item.value);
    });

    // Menampilkan konfirmasi data
    const konfirmasi = confirm(
        "Apakah data pendaftaran sudah benar?\n\n" +
        "Nama: " + nama + "\n" +
        "Email: " + email + "\n" +
        "Tanggal Lahir: " + tanggal + "\n" +
        "Jenis Kelamin: " + jenisKelamin + "\n" +
        "Jurusan: " + jurusan + "\n" +
        "Alamat: " + alamat + "\n" +
        "Minat: " + pilihanMinat.join(", ")
    );

    // Jika pengguna menyetujui
    if (konfirmasi) {
        alert(
            "Pendaftaran berhasil disiapkan!\n" +
            "Terima kasih telah mendaftar di SMK BAKTI NUSANTARA 666."
        );

        // Mengirim form ke proses.php
        form.submit();
    }

});


// Konfirmasi tombol reset
form.addEventListener("reset", function(event) {

    const yakin = confirm(
        "Apakah kamu yakin ingin menghapus semua data?"
    );

    if (!yakin) {
        event.preventDefault();
    }

});
