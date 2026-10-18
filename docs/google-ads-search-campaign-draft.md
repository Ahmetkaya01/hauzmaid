# Düşük bütçe — yüksek verim (Search + GSC)

**Hesap:** 860-024-1411  
**Kural:** Canlı Smart kampanyalara (bütçe / metin / durum) dokunulmaz.  
**Search kampanya:** Taslak — yayın onayı ayrı.

Kaynak: Grok audit + semt hacmi (Cheras 93, Subang 91, KLCC 89, Puchong 79) + ARS sitelink / Antz derinlik analizi.

## Neden az bütçe dağılır

RM20/gün ile 5 reklam grubu ve Smart ile aynı kelimeler = tıklama pahalı, dönüşüm yok. Para üç yere gitmeli: (1) niyet net kelime, (2) eşleşen lander, (3) ölçülen WhatsApp.

Smart’lar zaten geniş ağa para yakıyor. Search onları kopyalamasın — sadece sızıntısız exact/phrase alsın.

## Site (deploy sonrası Ads + GSC)

| URL | Ads / GSC işi |
|---|---|
| `/part-time-maid-kl` | Smart 1 + Search AG1 final URL |
| `/home-aircon-cleaning-kl` | Smart 2 final URL |
| `/prices` | Sitelink: Prices |
| `/about` | Sitelink: About |
| `/contact` | Sitelink: Contact |
| `/faq` | Sitelink: FAQ |
| `/areas/cheras` `/areas/subang-jaya` `/areas/puchong` | Search semt reklamları |

Kök layout artık tüm sayfaları `/` kanoniğine zorlamıyor. Sitemap: `https://www.hauzmaid.com/sitemap.xml`.

## Search taslak — RM20/gün, 2 grup

| Alan | Değer |
|------|--------|
| Ad | Hauzmaid \| Search \| House Cleaning KL |
| Ağ | Google Search only (Display / Search Partners kapalı) |
| Konum | Presence: Cheras, Subang Jaya, KLCC, Bukit Bintang, Puchong, Ampang, Bangsar, Setapak. Yarıçap genişletme kapalı. |
| Dil | English, Malay |
| Bütçe | RM20/gün (Smart’lara **ek**, Smart’tan kesme) |
| Teklif | Dönüşüm event’leri canlıysa Maximize conversions. Değilse Maximize clicks, tıklama tavanı RM2.00 |
| Saat | 08:00–22:00 MYT |
| Cihaz | Mobil öncelik (WhatsApp) |

### AG1 — Part-time maid (bütçenin ~%70’i)

Final URL: `https://www.hauzmaid.com/part-time-maid-kl`

| Eşleşme | Kelime |
|---------|--------|
| Exact | [part time maid kl], [hourly maid kl], [maid service klang valley] |
| Phrase | "part time maid cheras", "part time maid subang", "hourly maid puchong" |

### AG2 — Semt (bütçenin ~%30’i)

Final URL: ilgili `/areas/{slug}`

| Eşleşme | Kelime | URL |
|---------|--------|-----|
| Phrase | "house cleaning cheras", "maid service cheras" | `/areas/cheras` |
| Phrase | "house cleaning subang jaya", "maid service usj" | `/areas/subang-jaya` |
| Phrase | "house cleaning puchong" | `/areas/puchong` |

Üçüncü grup (aircon / office) RM20 ile açılmaz. Smart 2 o niyeti zaten yakalıyor.

### Negatifler (hesap düzeyinde de ekle)

home services, home services near me, prime lux, ultra cleaning, always clean, 4k cleaning, cleaner agent, maid agency, maid salary, job, jobs, hiring, vacancy, freelance, course, training, cheap, free, 24 hours, commercial building, factory, hospital, school

### RSA + varlıklar (yayın anında)

- Başlık: Part Time Maid in KL \| From RM80 \| No Deposit
- Açıklama: Hourly cleaning, pay on arrival. WhatsApp 016-356 60 55.
- Sitelink: Prices `/prices` · Areas `/areas` · About `/about` · Contact `/contact` · FAQ `/faq`
- Callout: No deposit · No transport fee · Pay on arrival · From RM80
- Call: 016-356 60 55
- Structured snippet: House cleaning, Move-out, Post-renovation, Aircon

## Smart (deploy sonrası, bütçeye dokunma)

| Kampanya | Final URL |
|---|---|
| Part Time Maid in KL | `https://www.hauzmaid.com/part-time-maid-kl` |
| Home Cleaning Specialists | `https://www.hauzmaid.com/home-aircon-cleaning-kl` |

YouTube follow-on views / subscriptions Secondary kalmalı.

## GSC — deploy sonrası 20 dakika

1. `sitemap.xml` gönder / yeniden oku.
2. URL Inspection → indeks iste: `/`, `/prices`, `/about`, `/contact`, `/faq`, `/part-time-maid-kl`, `/home-aircon-cleaning-kl`, `/areas/cheras`, `/areas/subang-jaya`, `/areas/puchong`.
3. Performans: sorgu = “part time maid”, “house cleaning cheras/subang/puchong”. CTR düşük title’ları `/areas` title kalıbına çek.
4. Deneyim: 404 ve soft-404 yok. Hash (`/#about`) artık sitelink değil.
5. Zengin sonuç: FAQ + LocalBusiness. Sahte yıldız eklenmedi — Google puanı netleşince `aggregateRating` yazılır.

## Ölçüm

- Event: `whatsapp_clicks`, `phone_clicks` (GA4 → Ads Primary). Prod’da `AdsLeadTracker` şart.
- WhatsApp metninde `Gclid` / `Campaign` satırı Grok Bot / Sheets’e düşer.
- İlk 14 gün: Search CPA > Smart CPA ise kelime kes, bütçeyi Cheras/Subang exact’te tut. Artırma.
