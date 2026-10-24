# Agent Office

Kantor virtual isometrik berisi para agen. `index.html` plus folder `characters/`, tanpa proses build: pasang di GitHub Pages atau jalankan dengan server lokal (mis. `python3 -m http.server`).

## Struktur

```
agent-office/
├── index.html            aplikasi (memuat sprite dari characters/*/sprite.webp; avatar chat tetap tertanam)
├── characters/           sumber aset tiap karakter
│   ├── characters.json   daftar karakter, peran, dan tim
│   ├── prabowo/          pet.json + spritesheet.webp (sumber) + sprite.webp (versi setengah resolusi yang dipakai aplikasi)
│   ├── einstein/
│   ├── deepseek/
│   ├── doraemon/
│   ├── naruto/
│   ├── yukina/
│   └── bananacat/
├── .gitignore
└── README.md
```

## Tim

| Tim | Karakter | Peran |
|---|---|---|
| Inti | Prabowo | Pendiri (CEO) |
| Teknis | Einstein, DeepSeek, Doraemon | Engineer, Desainer, QA |
| Konten sosmed | Naruto, Yukina, BananaCat | Video Editor, Social Media Manager, Content Creator |

Tim konten bekerja di Studio Konten dan Plaza Konten: mengedit di meja, lalu sesekali syuting di green screen, ring light, tripod ponsel, drone, dan set foto.

## Aset karakter

Setiap folder di `characters/` berisi `pet.json` dan `spritesheet.webp` (format Petdex, 8 kolom x 9 baris, frame 192x208). Aplikasi memakai `sprite.webp` (setengah resolusi, frame 96x104, sel yang tidak terpakai dikosongkan) lewat konstanta `SPRS`; avatar chat 64x64 ada di `AVS`.

Baris spritesheet yang dipakai aplikasi: 0 diam, 1 jalan kanan, 2 jalan kiri, 3 melambai, 4 melompat, 8 berpikir.

## Menjalankan

Buka `index.html` di browser. Untuk GitHub Pages: Settings, Pages, pilih branch `main` dan folder `/ (root)`.
