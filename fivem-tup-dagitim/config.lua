Config = {}

-- İşe başlama noktası
Config.StartPoint = vec3(170.21, -1633.83, 29.29)

-- Teslimat noktaları
Config.DropPoints = {
    vec3(124.89, -1088.81, 29.19),
    vec3(-34.33, -1847.12, 26.19),
    vec3(412.24, -1759.43, 29.41),
    vec3(1148.06, -404.62, 67.22),
    vec3(-1211.22, -331.17, 37.78),
    vec3(-1468.95, -681.58, 26.18)
}

-- Ödeme aralığı (her teslimat)
Config.Payment = {
    min = 250,
    max = 450
}

-- Oyuncunun bir anda taşıyabileceği max tüp
Config.MaxCarry = 3

-- Marker ve etkileşim ayarı
Config.InteractDistance = 2.0
Config.MarkerDrawDistance = 18.0

-- Job etiketleri
Config.Blip = {
    sprite = 478,
    color = 5,
    scale = 0.85,
    name = 'Tüp Dağıtım Merkezi'
}
