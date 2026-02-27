# FiveM Tüp Dağıtım Scripti

Bu kaynak, oyuncuların tüp dağıtım işi yapabildiği **standalone** bir örnektir.

## Özellikler
- İşe başlama / mesai bitirme noktası
- Tüp alma limiti (`Config.MaxCarry`)
- Rastgele teslimat noktaları
- Her teslimatta rastgele ödeme aralığı
- Framework bağımsız (ESX / QBCore ödeme satırlarını sen uyarlarsın)

## Kurulum
1. `fivem-tup-dagitim` klasörünü sunucundaki `resources` dizinine kopyala.
2. `server.cfg` dosyana şunu ekle:
   ```cfg
   ensure fivem-tup-dagitim
   ```
3. Gerekirse `config.lua` içindeki koordinatları ve ödeme değerlerini düzenle.

## Framework entegrasyonu
`server.lua` içinde `tupdagitim:server:deliverTube` eventindeki ödeme bölümünü sunucuna göre aç:

- ESX:
  ```lua
  local xPlayer = ESX.GetPlayerFromId(src)
  xPlayer.addMoney(reward)
  ```

- QBCore:
  ```lua
  local Player = QBCore.Functions.GetPlayer(src)
  Player.Functions.AddMoney('cash', reward)
  ```

## Kontroller
- `E`: İşe başla / tüp al / teslim et
- `G`: Mesaiyi bitir
