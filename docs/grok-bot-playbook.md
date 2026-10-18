# Grok Bot — WhatsApp + Google Sheets SOP

Grok Bot (Sheets + WhatsApp erişimi) ve hauzmaid.com aynı lead formatını kullanır. Site, Ads tıklamasından gelen WhatsApp mesajının sonuna makine satırları ekler.

## Gelen WhatsApp mesajını oku

Müşteri metninden sonra şu satırlar gelebilir:

```
Area: Cheras
Service: part-time maid
Source: hauzmaid.com/part-time-maid-kl
Lang: en
Gclid: EAIa...
Campaign: part-time-maid
UtmSource: google
```

Eski form satırları da geçerli: `Nama` / `Name`, `Telefon` / `Phone`, `Pembantu` / `Helpers`, `Jam` / `Hours`.

## Hauzmaid_Vendor satırına yaz

Header satırı 4. Yeni onaylı iş için boş satır ekle:

| Sheet sütunu | Kaynak |
|---|---|
| Date | Müşterinin istediği tarih; yoksa boş bırak, CS doldurur |
| Time | İstenen saat; yoksa boş |
| Helpers# | `Helpers` / `Pembantu` |
| Hours | `Hours` / `Jam` |
| Address | `Area` + müşterinin yazdığı adres |
| Customer Name | `Name` / `Nama` |
| Contact | WhatsApp numarası |
| Remarks | `Service` + `Source` + `Campaign` + `Gclid` (tek satır) |

Fatura PDF’sini script üretir. Grok Bot yalnızca satırı doldurur; iptal / kırmızı satıra yazma.

## Ads kalitesi (Grok audit P1)

Remarks’ta şu sızıntı terimleri varsa CS’e işaretle, Search negatif listesine ekle:

`home services`, `prime lux`, `ultra cleaning`, `always clean`, `4k cleaning`, `cleaner agent`

## Alan hacmini siteye geri besle

Ayda bir `Hauzmaid_Vendor` Address sütunundan semt sayımı çıkar. En yüksekler `src/lib/local-seo.ts` `demand` alanına yazılır (Cheras, Subang Jaya, KLCC, Puchong…).

## Cevap şablonu (WhatsApp)

Kısa tut. Fiyatı Ads ile aynı söyle:

- Minimum RM80 (1 pembantu × 2 jam)
- 3+ jam pembantu: RM35/jam
- Tiada deposit, tiada caj pengangkutan
- Bayar pindahan bank semasa ketibaan

Kaynak `/part-time-maid-kl` ise part-time maid vurgula. Kaynak `/home-aircon-cleaning-kl` ise ev + aircond ve “pay on arrival” vurgula.
