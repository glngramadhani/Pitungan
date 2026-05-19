document.addEventListener("DOMContentLoaded", () => {
    // 1. Interaktivitas Mock Kuis
    const options = document.querySelectorAll(".option");

    options.forEach(option => {
        option.addEventListener("click", () => {
            // Hapus style custom dan class active dari semua opsi
            options.forEach(opt => {
                opt.classList.remove("active");
                opt.style.background = "white";
                opt.style.color = "#111827";
            });
            
            // Tambahkan efek saat diklik
            option.classList.add("active");
            
            // Jika memilih jawaban benar (56) kasih warna hijau, kalau salah merah
            if (option.innerText === "56") {
                option.style.background = "#10b981"; // hijau cerah
                option.style.color = "white";
            } else {
                option.style.background = "#ef4444"; // merah cerah
                option.style.color = "white";
                
                // Kembalikan ke warna asli setelah 1 detik (kalau salah)
                setTimeout(() => {
                    option.classList.remove("active");
                    option.style.background = "white";
                    option.style.color = "#111827";
                }, 1000);
            }
        });
    });

    // 2. Efek Scroll Halus (Smooth Scroll)
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});
