    /* ==========================================
    BOOKING FORM
    ========================================== */

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value;

            const phone = document.getElementById("phone").value;

            const packageName = document.getElementById("package").value;

            const date = document.getElementById("date").value;

            const person = document.getElementById("person").value;

            const message =

    `Halo Kayuh Glamping,

    Saya ingin melakukan reservasi.

    Nama : ${name}

    No HP : ${phone}

    Paket : ${packageName}

    Tanggal : ${date}

    Jumlah Orang : ${person}

    Terima kasih.`;

            window.open(

    `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`,

    "_blank"

            );

        });

    }