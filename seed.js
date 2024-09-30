const mongoose = require("mongoose");

// Models
// const Product = require("./models/product");
const Article = require("./models/product");

// connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/blogme")
  .then((result) => {
    console.log(`connected to mongodb server`);
  })
  .catch((err) => {
    console.log(err);
  });

// const seedProducts = [
//   {
//     name: "Kemeja Flanel",
//     brand: "Hollister",
//     price: 750000,
//     color: "biru muda",
//     category: "Baju",
//   },
//   {
//     name: "Celana Chino",
//     brand: "Levi's",
//     price: 900000,
//     color: "krem",
//     category: "Celana",
//   },
//   {
//     name: "Sweater",
//     brand: "Gap",
//     price: 650000,
//     color: "merah muda",
//     category: "Jaket",
//   },
//   {
//     name: "Tas Ransel",
//     brand: "Herschel",
//     price: 1500000,
//     color: "biru",
//     category: "Aksesoris",
//   },
//   {
//     name: "Kacamata Aviator",
//     brand: "Ray-Ban",
//     price: 2000000,
//     color: "emas",
//     category: "Aksesoris",
//   },
//   {
//     name: "Baju Renang",
//     brand: "Speedo",
//     price: 500000,
//     color: "biru tua",
//     category: "Baju",
//   },
//   {
//     name: "Celana Panjang",
//     brand: "New Era",
//     price: 350000,
//     color: "hitam",
//     category: "Celana",
//   },
//   {
//     name: "Rompi",
//     brand: "Zara",
//     price: 850000,
//     color: "abu-abu",
//     category: "Baju",
//   },
//   {
//     name: "Jas",
//     brand: "Hugo Boss",
//     price: 4500000,
//     color: "hitam",
//     category: "Baju",
//   },
// ];

const seedArticles = [
  {
    title: "Belajar Dasar HTML: Panduan untuk Pemula",
    image: "path/to/image.jpg", // ganti dengan path gambar yang sesuai
    summary: "Pelajari dasar-dasar HTML, bahasa markup untuk membangun struktur halaman web.",
    content: `
      <h2>Apa Itu HTML?</h2>
      <p>HTML, atau <strong>HyperText Markup Language</strong>, adalah bahasa standar yang digunakan untuk membuat halaman web. HTML menyediakan struktur dasar dari sebuah website, memungkinkan kita menampilkan teks, gambar, tautan, dan banyak elemen lainnya di browser.</p>
      <p>HTML bukanlah bahasa pemrograman seperti JavaScript, melainkan <strong>bahasa markup</strong>. Ini berarti HTML menggunakan tag-tag untuk menandai elemen-elemen yang ingin kita tampilkan di halaman web.</p>
  
      <h2>Struktur Dasar HTML</h2>
      <pre><code>
      &lt;!DOCTYPE html&gt;
      &lt;html lang="en"&gt;
          &lt;head&gt;
              &lt;meta charset="UTF-8"&gt;
              &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
              &lt;title&gt;Judul Halaman&lt;/title&gt;
          &lt;/head&gt;
          &lt;body&gt;
              &lt;h1&gt;Selamat Datang di Dunia HTML&lt;/h1&gt;
              &lt;p&gt;Ini adalah paragraf pertama saya.&lt;/p&gt;
          &lt;/body&gt;
      &lt;/html&gt;
      </code></pre>
      <p><strong>Penjelasan:</strong></p>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code>: Menyatakan bahwa dokumen ini menggunakan versi HTML5.</li>
        <li><code>&lt;html&gt;</code>: Elemen root yang mencakup seluruh isi halaman.</li>
        <li><code>&lt;head&gt;</code>: Bagian yang berisi metadata seperti judul halaman, link ke stylesheet, dan informasi lain yang tidak tampil langsung di halaman.</li>
        <li><code>&lt;title&gt;</code>: Judul yang akan muncul di tab browser.</li>
        <li><code>&lt;body&gt;</code>: Berisi semua konten yang ditampilkan di halaman, seperti teks, gambar, dan tautan.</li>
      </ul>
  
      <h2>Tag Dasar dalam HTML</h2>
      <p>HTML terdiri dari <strong>tag</strong> yang membungkus konten. Berikut adalah beberapa tag dasar yang sering digunakan:</p>
  
      <h3>1. Heading (Judul)</h3>
      <p>Tag heading digunakan untuk menampilkan judul di halaman. Terdapat 6 tingkat heading dari <code>&lt;h1&gt;</code> (paling besar) hingga <code>&lt;h6&gt;</code> (paling kecil).</p>
      <pre><code>
      &lt;h1&gt;Ini adalah Heading 1&lt;/h1&gt;
      &lt;h2&gt;Ini adalah Heading 2&lt;/h2&gt;
      </code></pre>
  
      <h3>2. Paragraf</h3>
      <p>Untuk membuat paragraf, gunakan tag <code>&lt;p&gt;</code>.</p>
      <pre><code>
      &lt;p&gt;Ini adalah sebuah paragraf.&lt;/p&gt;
      </code></pre>
  
      <h3>3. Gambar</h3>
      <p>Tag <code>&lt;img&gt;</code> digunakan untuk menampilkan gambar.</p>
      <pre><code>
      &lt;img src="path/to/image.jpg" alt="Deskripsi Gambar"&gt;
      </code></pre>
  
      <h3>4. Tautan (Link)</h3>
      <p>Untuk membuat tautan ke halaman lain, gunakan tag <code>&lt;a&gt;</code>.</p>
      <pre><code>
      &lt;a href="https://www.example.com"&gt;Kunjungi Situs&lt;/a&gt;
      </code></pre>
  
      <h3>5. Daftar</h3>
      <p>Untuk membuat daftar berurutan dan tidak berurutan:</p>
      <pre><code>
      &lt;ol&gt;
        &lt;li&gt;Item pertama&lt;/li&gt;
        &lt;li&gt;Item kedua&lt;/li&gt;
      &lt;/ol&gt;
  
      &lt;ul&gt;
        &lt;li&gt;Item pertama&lt;/li&gt;
        &lt;li&gt;Item kedua&lt;/li&gt;
      &lt;/ul&gt;
      </code></pre>
  
      <h2>Memasukkan Gaya dengan CSS</h2>
      <p>HTML sendiri hanya memberikan struktur. Untuk mempercantik tampilan, kita bisa menggunakan <strong>CSS</strong>.</p>
      <pre><code>
      &lt;style&gt;
      body {
          background-color: #f0f0f0;
          font-family: Arial, sans-serif;
      }
      h1 {
          color: #333;
      }
      p {
          color: #666;
      }
      &lt;/style&gt;
      </code></pre>
  
      <h2>Menyusun Formulir</h2>
      <p>Formulir digunakan untuk mengumpulkan data dari pengguna:</p>
      <pre><code>
      &lt;form action="/submit" method="POST"&gt;
          &lt;label for="name"&gt;Nama:&lt;/label&gt;
          &lt;input type="text" id="name" name="name" required&gt;
  
          &lt;label for="email"&gt;Email:&lt;/label&gt;
          &lt;input type="email" id="email" name="email" required&gt;
  
          &lt;button type="submit"&gt;Kirim&lt;/button&gt;
      &lt;/form&gt;
      </code></pre>
  
      <h2>Penutup</h2>
      <p>HTML adalah fondasi utama dari semua halaman web. Dengan menguasai dasar-dasarnya, Anda bisa mulai membangun situs web sederhana dan beranjak ke pengembangan web yang lebih kompleks.</p>
    `,
    author: "Apriyanto Ulami Setiawan",
    createdAt: new Date().toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  },
  {
    title: "Belajar JavaScript Pemula",
    image: "assets/images/html.png",
    summary: "JavaScript salah satu framework JavaScript yang digunakan untuk membangun aplikasi web.",
    content: [
      {
        title: "1.JavaScript adalah framework minimalis untuk Node.js yang digunakan untuk membangun aplikasi web dengan bahasa pemrograman yang dinamis dan interaktif.",
        paragraph: "JavaScript adalah framework minimalis untuk Node.js yang digunakan untuk membangun aplikasi web dengan bahasa pemrograman yang dinamis dan interaktif.",
      },
      {
        title: "2.JavaScript adalah framework minimalis untuk Node.js yang digunakan untuk membangun aplikasi web dengan bahasa pemrograman yang dinamis dan interaktif.",
        paragraph: "dengan JavaScript, pengguna dapat membuat aplikasi web yang interaktif, dinamis, dan cepat.",
      },
      {
        title: "3.JavaScript adalah framework minimalis untuk Node.js yang digunakan untuk membangun aplikasi web dengan bahasa pemrograman yang dinamis dan interaktif.",
        paragraph: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "4. Adapun kelebihan dari JavaScript adalah:",
        paragraph: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    author: "Apriyanto Ulami Setiawan",
    createdAt: new Date(),
    category: "Pengembangan Web",
    comments: [
      {
        name: "Sandhika Galih",
        comment: "Bermanfaat",
      },
      {
        name: "Dea Afrizal",
        comment: "Mantaps",
      },
    ],
  },
];

Article.create({
  title: "Evolusi Game: Dari Klasik hingga Modern",
  image: "assets/images/evolution-of-games.jpg",
  summary: "Industri game telah mengalami perubahan besar dari waktu ke waktu. Artikel ini akan mengeksplorasi evolusi game dari era klasik hingga game modern saat ini.",
  content: [
    {
      title: "",
      paragraph:
        "Sejak kemunculan game pertama, industri ini telah berkembang pesat. Dari permainan arcade sederhana hingga game AAA dengan grafis realistis, setiap generasi game telah menawarkan pengalaman baru bagi para pemain. Memahami evolusi game dapat membantu kita menghargai seni dan teknologi di balik setiap permainan.",
      image: "",
    },
    {
      title: "Era Klasik",
      paragraph:
        "Game klasik seperti Pong dan Space Invaders menjadi fondasi bagi industri game. Dengan grafis sederhana dan gameplay yang mudah dipahami, game-game ini menarik banyak penggemar dan menjadi ikon budaya pop. Era ini menunjukkan bagaimana game dapat menjadi bentuk hiburan yang menyenangkan.",
      image: "",
    },
    {
      title: "Era Konsol",
      paragraph:
        "Dengan munculnya konsol seperti Nintendo dan Sega, game mulai memasuki rumah-rumah. Game seperti Super Mario Bros. dan Sonic the Hedgehog menjadi favorit di kalangan anak-anak dan remaja. Era ini juga memperkenalkan permainan multiplayer, yang memungkinkan teman-teman bermain bersama di satu konsol.",
      image: "",
    },
    {
      title: "Game PC dan Online",
      paragraph:
        "Kemajuan teknologi membawa game ke komputer pribadi dan internet. Game seperti Counter-Strike dan World of Warcraft menciptakan komunitas online yang besar. Game ini tidak hanya menghibur, tetapi juga menghubungkan pemain dari seluruh dunia.",
      image: "",
    },
    {
      title: "Era Mobile dan Game Free-to-Play",
      paragraph:
        "Dengan meningkatnya penggunaan smartphone, game mobile seperti Candy Crush dan PUBG Mobile menjadi sangat populer. Model bisnis free-to-play juga muncul, di mana pemain dapat mengunduh game secara gratis tetapi harus membeli item dalam game. Ini mengubah cara kita melihat dan mengakses game.",
      image: "",
    },
    {
      title: "Masa Depan Game",
      paragraph:
        "Teknologi baru seperti realitas virtual (VR) dan augmented reality (AR) mulai memasuki dunia game. Dengan kemampuan untuk menciptakan pengalaman yang lebih imersif, masa depan game tampak menjanjikan. Selain itu, perkembangan kecerdasan buatan (AI) juga menjanjikan gameplay yang lebih dinamis dan menantang.",
      image: "",
    },
    {
      title: "Kesimpulan",
      paragraph:
        "Evolusi game menunjukkan bagaimana hiburan digital telah beradaptasi dengan perubahan teknologi dan kebutuhan pemain. Dari game klasik hingga game modern, setiap fase membawa sesuatu yang baru dan menarik. Masa depan game akan terus berkembang, dan kita sebagai pemain akan terus menikmati inovasi yang ditawarkan.",
      image: "",
    },
  ],
  author: "Apriyanto Ulami Setiawan",
  createdAt: new Date(),
  category: "Game",
  comments: [
    {
      name: "Sandhika Galih",
      comment: "Menarik sekali! Saya suka belajar tentang sejarah game.",
      image: "/assets/images/user1.png",
    },
    {
      name: "Dea Afrizal",
      comment: "Era mobile benar-benar mengubah cara kita bermain game.",
      image: "/assets/images/user2.png",
    },
    {
      name: "Budi Santoso",
      comment: "Saya berharap VR akan lebih banyak digunakan di game mendatang.",
      image: "/assets/images/user3.png",
    },
    {
      name: "Lisa Suryani",
      comment: "Artikel ini sangat informatif, terima kasih!",
      image: "/assets/images/user4.png",
    },
    {
      name: "Rina Fitriani",
      comment: "Game online membuat saya merasa terhubung dengan banyak orang.",
      image: "/assets/images/user5.png",
    },
  ],
})
  .then((result) => {
    console.log("Artikel berhasil dibuat: " + result);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

//   title: "Cara Menjaga Kesehatan Mental di Tengah Kesibukan",
//   image: "assets/images/mental-health.jpg",
//   summary: "Kesehatan mental sama pentingnya dengan kesehatan fisik. Artikel ini akan membahas beberapa cara untuk menjaga kesehatan mental di tengah kesibukan dan tekanan hidup sehari-hari.",
//   content: [
//     {
//       title: "Pentingnya Kesehatan Mental",
//       paragraph:
//         "Kesehatan mental adalah aspek penting dalam kesejahteraan seseorang. Kesehatan mental yang baik memungkinkan kita untuk menghadapi stres, bekerja secara produktif, dan menikmati hidup dengan seimbang. Di tengah tekanan hidup yang meningkat, menjaga kesehatan mental menjadi semakin penting untuk menghindari masalah seperti kecemasan dan depresi.",
//       image: "",
//     },
//     {
//       title: "Manajemen Stres",
//       paragraph:
//         "Stres adalah bagian tak terhindarkan dalam kehidupan, namun cara kita mengelolanya sangat menentukan dampaknya terhadap kesehatan mental. Beberapa cara yang dapat dilakukan untuk mengelola stres adalah dengan beristirahat secara cukup, bermeditasi, berolahraga, dan berbicara dengan teman atau keluarga. Jangan ragu untuk mencari bantuan profesional jika merasa stres sudah terlalu berlebihan.",
//       image: "assets/images/stress-management.jpg",
//     },
//     {
//       title: "Pentingnya Tidur yang Cukup",
//       paragraph:
//         "Tidur yang cukup sangat penting bagi kesehatan mental dan fisik. Kurang tidur dapat mempengaruhi suasana hati, daya ingat, dan kemampuan kita untuk berkonsentrasi. Usahakan untuk tidur setidaknya 7-8 jam setiap malam agar tubuh dan pikiran dapat beristirahat dengan baik.",
//       image: "assets/images/sleep.jpg",
//     },
//     {
//       title: "Menerapkan Mindfulness",
//       paragraph:
//         "Mindfulness adalah praktik fokus pada momen saat ini dengan cara yang tidak menghakimi. Teknik ini telah terbukti efektif dalam mengurangi kecemasan dan meningkatkan kesejahteraan mental. Anda dapat menerapkan mindfulness dengan meditasi, atau dengan secara sadar memfokuskan perhatian pada apa yang Anda lakukan saat ini, seperti makan atau berjalan.",
//       image: "",
//     },
//     {
//       title: "Aktivitas Fisik untuk Kesehatan Mental",
//       paragraph:
//         "Olahraga tidak hanya bermanfaat bagi kesehatan fisik, tetapi juga sangat baik untuk kesehatan mental. Berolahraga secara teratur dapat meningkatkan suasana hati, mengurangi gejala depresi, dan meningkatkan tingkat energi. Aktivitas fisik juga membantu mengalihkan pikiran dari masalah sehari-hari, memberikan waktu bagi pikiran untuk beristirahat.",
//       image: "assets/images/exercise-mental-health.jpg",
//     },
//     {
//       title: "Membangun Dukungan Sosial",
//       paragraph:
//         "Memiliki hubungan yang positif dengan orang lain adalah salah satu kunci untuk menjaga kesehatan mental. Luangkan waktu untuk bertemu dengan teman atau keluarga, dan jangan ragu untuk berbicara tentang perasaan Anda. Dukungan sosial yang baik dapat membantu mengurangi stres dan memberikan pandangan baru dalam menghadapi masalah.",
//       image: "",
//     },
//     {
//       title: "Kesimpulan",
//       paragraph:
//         "Menjaga kesehatan mental adalah investasi jangka panjang untuk kualitas hidup yang lebih baik. Dengan mengelola stres, tidur yang cukup, berolahraga, dan menjaga hubungan sosial yang baik, Anda bisa mencapai keseimbangan mental yang lebih baik. Jangan lupa bahwa meminta bantuan profesional bukanlah tanda kelemahan, tetapi langkah bijak untuk menjaga kesehatan mental Anda.",
//       image: "",
//     },
//   ],
//   author: "Apriyanto Ulami Setiawan",
//   createdAt: new Date(),
//   category: "Kesehatan",
//   comments: [
//     {
//       name: "Sandhika Galih",
//       comment: "Artikel yang sangat relevan dengan kehidupan sehari-hari.",
//       image: "/assets/images/user.png",
//     },
//     {
//       name: "Dea Afrizal",
//       comment: "Informasi ini benar-benar membantu menjaga kesehatan mental saya.",
//       image: "/assets/images/user.png",
//     },
//   ],
// })
//   .then((result) => {
//     console.log("Artikel berhasil dibuat" + result);
//   })
//   .catch((err) => {
//     console.log("error" + err);
//   });

// Insert seed articles
// Insert seed articles
// Article.insertMany(seedArticles)
//   .then(() => {
//     console.log("Artikel berhasil disimpan");

// Update the specific article
//   return Article.updateOne(
//     { title: "Pentingnya Belajar Pemrograman di Era Digital" },
//     {
//       $set: {
//         createdAt: new Date("2024-09-26"),
//         content: [
//           {
//             title: "1. Pilih Bahasa Pemrograman yang Tepat",
//             bucket:
//               "Tergantung pada tujuan Anda. Misalnya, untuk pengembangan web, Anda bisa mulai dengan HTML, CSS, JavaScript, dan jika tertarik dengan backend, Node.js bisa menjadi pilihan. Jika ingin membuat aplikasi mobile, Anda bisa memilih Kotlin atau Swift.",
//           },
//           {
//             title: "2. Mulai dengan Proyek Kecil",
//             bucket:
//               "Mulailah dengan proyek kecil seperti membuat halaman web sederhana, aplikasi kalkulator, atau bahkan blog pribadi. Proyek ini akan membantu Anda mempraktikkan konsep-konsep dasar dalam pemrograman dan memberikan pemahaman lebih mendalam.",
//           },
//           {
//             title: "3. Bergabung dengan Komunitas",
//             bucket:
//               "Ada banyak komunitas pemrograman baik online maupun offline. Bergabung dengan komunitas akan membantu Anda belajar lebih cepat, mendapatkan mentor, dan berbagi pengalaman dengan orang-orang yang memiliki minat yang sama.",
//           },
//         ],
//       },
//     }
//   );
// })
// .then((result) => {
//   console.log("BERHASIL DI UPDATE:", result);
// })
// .catch((err) => {
//   console.log("GAGAL INSERT/UPDATE", err);
// });

const deleteId = ["66f9fffd1fb181bdce8369d9", "66f9f8a717a3039ba0333302", "66f9f8ae230828503fe28d91", "66f8a5788a1ff28852f96e7c", "66f8b0f7c83c74cf381b0ea4"];

Article.deleteMany({ _id: { $in: deleteId } })
  .then((result) => {
    console.log(result + "Berhasil di hapus");
  })
  .catch((err) => {
    console.log(err);
  });

// seedArticles.forEach((article) => {
//   const formattedDate = article.createdAt.toLocaleDateString("id-ID", {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
//   console.log(`Tanggal dibuat: ${formattedDate}`);
// });
// const seedUsers = [
//   {
//     username: "admin",
//     password: "admin",
//     role: "admin",
//   },
//   {
//     username: "user",
//     password: "user",
//     role: "user",
//   },
// ];

// Product.insertMany(seedArticles)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// async function updateManyArticles() {
//   try {
//     const updateArticles = await Article.updateMany({
//       $set: {
//         createdAt: new Date().toLocaleDateString("id-ID", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//           weekday: "long",
//         }),
//       },
//     });
//     console.log(updateArticles);
//   } catch (err) {
//     console.error(err);
//   }
// }

// // Jalankan fungsi update
// updateManyArticles();

// Article.insertMany(seedArticles)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// seedArticles.forEach(async (article) => {
//   const existingProduct = await Article.findOne({ name: article.name });
//   if (!existingProduct) {
//     await Article.create(article);
//   }
// });

// Article.deleteMany({})
//   .then(() => {
//     return Article.insertMany(seedArticles);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Fungsi untuk mengupdate field createdAt
