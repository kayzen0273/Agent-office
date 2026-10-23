# Agent Office

Kantor virtual isometrik berisi para agen. Satu file `index.html`, tanpa proses build: buka langsung di browser atau pasang di GitHub Pages.

## Struktur

```
agent-office/
├── index.html            aplikasi (sprite dan avatar sudah tertanam di dalamnya)
├── characters/           sumber aset tiap karakter
│   ├── characters.json   daftar karakter, peran, dan tim
│   ├── prabowo/          pet.json + spritesheet.webp
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

Setiap folder di `characters/` berisi `pet.json` dan `spritesheet.webp` (format Petdex, 8 kolom x 9 baris, frame 192x208). Di dalam `index.html` sprite dipakai dalam setengah resolusi (frame 96x104) dan disimpan sebagai base64 di konstanta `SPRS`, sedangkan avatar chat 64x64 ada di `AVS`.

Baris spritesheet yang dipakai aplikasi: 0 diam, 1 jalan kanan, 2 jalan kiri, 3 melambai, 4 melompat, 8 berpikir.

## Menjalankan

Buka `index.html` di browser. Untuk GitHub Pages: Settings, Pages, pilih branch `main` dan folder `/ (root)`.
