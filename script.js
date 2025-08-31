       // Data mahasiswa
       let mahasiswa = [
        { nama: "Abil", nim: "S1TIS230485", ips: 3.8 },
        { nama: "Adila", nim: "S1TIS230487", ips: 3.8 },
        { nama: "Awaliah", nim: "S1TIS230488", ips: 3.5 },
        { nama: "Bagas", nim: "S1TIS230489", ips: 3.7 },
        { nama: "Darmayanti", nim: "S1TIS230490", ips: 3.6 },
        { nama: "Ifraan", nim: "S1TIS230492", ips: 3.7 },
        { nama: "Riska", nim: "S1TIS230493", ips: 4.0 },
        { nama: "Amelia", nim: "S1TIS230498", ips: 3.2 },
        { nama: "Shendy", nim: "S1TIS230499", ips: 3.5 },
        { nama: "Erlunsya", nim: "S1TIS230502", ips: 3.7 },
        { nama: "Fahkri", nim: "S1TIS230503", ips: 3.7 },
        { nama: "Fisafangati", nim: "S1TIS230505", ips: 3.0 },
        { nama: "Alfin", nim: "S1TIS230509", ips: 3.7 },
        { nama: "Sindi", nim: "S1TIS230513", ips: 3.9 },
        { nama: "Yayan", nim: "S1TIS230514", ips: 3.8 },
        { nama: "Ali", nim: "S1TIS230515", ips: 3.8 },
        { nama: "Iqbal", nim: "S1TIS230517", ips: 3.6 },
        { nama: "Fajar", nim: "S1TIS230518", ips: 3.8 },
        { nama: "Hani", nim: "S1TIS230520", ips: 3.4 },
        { nama: "Dian", nim: "S1TIS230516", ips: 3.5 },
        { nama: "Adi", nim: "S1TIS230519", ips: 3.5 },
        { nama: "Auzan", nim: "S1TIS230491", ips: 3.1 },
    ];

    // Fungsi untuk menampilkan data mahasiswa pada tabel
    function displayMahasiswa(tableId, data) {
        let tbody = document.getElementById(tableId).getElementsByTagName('tbody')[0];

        // Kosongkan tbody sebelum menambahkan data baru
        tbody.innerHTML = '';

        // Iterasi data dan tambahkan ke tbody
        data.forEach(item => {
            let row = `<tr>
                            <td>${item.nama}</td>
                            <td>${item.nim}</td>
                            <td>${item.ips}</td>
                        </tr>`;
            tbody.innerHTML += row;
        });
    }

    // Fungsi untuk melakukan Bubble Sort pada data mahasiswa berdasarkan IPS (dari terkecil ke terbesar)
    function bubbleSortAscending(data) {
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < data.length - 1; i++) {
                if (data[i].ips > data[i + 1].ips) {
                    let temp = data[i];
                    data[i] = data[i + 1];
                    data[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }

    // Fungsi untuk melakukan Bubble Sort pada data mahasiswa berdasarkan IPS (dari terbesar ke terkecil)
    function bubbleSortDescending(data) {
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < data.length - 1; i++) {
                if (data[i].ips < data[i + 1].ips) {
                    let temp = data[i];
                    data[i] = data[i + 1];
                    data[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }

    // Fungsi untuk mengurutkan data mahasiswa dari terkecil ke terbesar dan menampilkan hasilnya
    function sortAscending() {
        // Salin data mahasiswa ke dalam array baru untuk diurutkan
        let sortedMahasiswa = [...mahasiswa];

        // Panggil fungsi bubbleSortAscending untuk mengurutkan dari terkecil ke terbesar
        bubbleSortAscending(sortedMahasiswa);

        // Tampilkan data sebelum diurutkan
        displayMahasiswa('unsortedTable', mahasiswa);

        // Tampilkan judul dan tabel setelah diurutkan
        document.getElementById('sortedTitle').classList.remove('hidden');
        document.getElementById('sortedTable').classList.remove('hidden');

        // Tampilkan data setelah diurutkan
        displayMahasiswa('sortedTable', sortedMahasiswa);
    }

    // Fungsi untuk mengurutkan data mahasiswa dari terbesar ke terkecil dan menampilkan hasilnya
    function sortDescending() {
        // Salin data mahasiswa ke dalam array baru untuk diurutkan
        let sortedMahasiswa = [...mahasiswa];

        // Panggil fungsi bubbleSortDescending untuk mengurutkan dari terbesar ke terkecil
        bubbleSortDescending(sortedMahasiswa);

        // Tampilkan data sebelum diurutkan
        displayMahasiswa('unsortedTable', mahasiswa);

        // Tampilkan judul dan tabel setelah diurutkan
        document.getElementById('sortedTitle').classList.remove('hidden');
        document.getElementById('sortedTable').classList.remove('hidden');

        // Tampilkan data setelah diurutkan
        displayMahasiswa('sortedTable', sortedMahasiswa);
    }

    // Fungsi untuk menyembunyikan tabel hasil yang sudah diurutkan
    function hideSortedData() {
        // Sembunyikan judul dan tabel setelah diurutkan
        document.getElementById('sortedTitle').classList.add('hidden');
        document.getElementById('sortedTable').classList.add('hidden');
    }

    // Panggil fungsi displayMahasiswa() untuk menampilkan data awal
    displayMahasiswa('unsortedTable', mahasiswa);