document.addEventListener("DOMContentLoaded", () => {
  const form      = document.getElementById("pendaftaran-form");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      nama:      form.nama.value.trim(),
      nim:       form.nim.value.trim(),
      peminatan: form.peminatan.value || "-",
      angkatan:  form.angkatan.value   || "-",
      tanggal:   form.tanggal.value    || "-",
      alamat:    form.alamat.value.trim() || "-",
    };

    // Buat markup tabel
    resultDiv.innerHTML = `
      <h2>Hasil Pendaftaran</h2>
      <table>
        <tr><td class="label">Nama</td><td class="value">: ${data.nama}</td></tr>
        <tr><td class="label">NIM</td><td class="value">: ${data.nim}</td></tr>
        <tr><td class="label">Peminatan</td><td class="value">: ${data.peminatan}</td></tr>
        <tr><td class="label">Angkatan</td><td class="value">: ${data.angkatan}</td></tr>
        <tr><td class="label">Tanggal</td><td class="value">: ${data.tanggal}</td></tr>
        <tr><td class="label">Alamat</td><td class="value">: ${data.alamat}</td></tr>
      </table>
    `;
    resultDiv.hidden = false;
    
    // (opsional) scroll ke hasil
    resultDiv.scrollIntoView({ behavior: "smooth" });
  });
});
