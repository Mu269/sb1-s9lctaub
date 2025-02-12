import React, { useState } from 'react';
import { Factory, Recycle, Package, Phone, Mail, MapPin, ChevronRight, Award, Users, Globe, Building2 } from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'products':
        return <ProductsPage />;
      case 'corporate':
        return <CorporatePage />;
      default:
        return <HomePage />;
    }
  };

  const NavLink = ({ page, children }: { page: string, children: React.ReactNode }) => (
    <button 
      onClick={() => setActivePage(page)}
      className={`px-4 py-2 ${activePage === page ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Factory className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold">Horozogullari</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <NavLink page="home">Ana Sayfa</NavLink>
              <NavLink page="products">Ürünlerimiz</NavLink>
              <NavLink page="corporate">Kurumsal</NavLink>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                İletişim
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Horozogullari</h3>
              <p className="text-gray-400">Pet endüstrisinde güvenilir çözüm ortağınız</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Ürünler</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Pet Levha</li>
                <li>Pet Flake</li>
                <li>Pet Deşe</li>
                <li>Özel Üretimler</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Kurumsal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Hakkımızda</li>
                <li>Kalite Politikamız</li>
                <li>İnsan Kaynakları</li>
                <li>Belgelerimiz</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">İletişim</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Telefon: +90 (XXX) XXX XX XX</li>
                <li>E-posta: info@horozogullari.com</li>
                <li>Adres: İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Horozogullari. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
            alt="Factory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Horozogullari
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Pet Levha, Pet Flake ve Pet Deşe alanında Türkiye'nin önde gelen üreticisi
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition w-fit flex items-center gap-2">
            İletişime Geçin <ChevronRight size={20} />
          </button>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Yıllık Tecrübe</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Uzman Personel</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Teknik Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Ürünlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1605618826115-fb9e775cf15d?auto=format&fit=crop&q=80"
                  alt="Pet Levha"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Pet Levha</h3>
                <p className="text-gray-600 mb-4">Yüksek kaliteli Pet levha üretimi ve tedariki</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Detaylı Bilgi <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80"
                  alt="Pet Flake"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Pet Flake</h3>
                <p className="text-gray-600 mb-4">Geri dönüşüm ve Pet flake işleme hizmetleri</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Detaylı Bilgi <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1616690710400-a16d146927c5?auto=format&fit=crop&q=80"
                  alt="Pet Deşe"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Pet Deşe</h3>
                <p className="text-gray-600 mb-4">Endüstriyel pet atık yönetimi ve işleme</p>
                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Detaylı Bilgi <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">İletişim</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Phone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Telefon</h3>
              <p className="text-gray-600">+90 (XXX) XXX XX XX</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Mail className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">E-posta</h3>
              <p className="text-gray-600">info@horozogullari.com</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Adres</h3>
              <p className="text-gray-600">İstanbul, Türkiye</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductsPage() {
  return (
    <>
      {/* Products Hero */}
      <section className="relative py-24 bg-gray-900">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Ürünlerimiz</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Yüksek kalite standartlarında üretilen ürünlerimiz ile endüstriyel ihtiyaçlarınıza çözüm sunuyoruz
          </p>
        </div>
      </section>

      {/* Detailed Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {/* Pet Levha */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605618826115-fb9e775cf15d?auto=format&fit=crop&q=80"
                  alt="Pet Levha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Pet Levha</h2>
                <p className="text-gray-600 mb-6">
                  Yüksek kaliteli Pet levha üretimimiz ile ambalaj sektörüne özel çözümler sunuyoruz. 
                  Farklı kalınlık ve ebatlarda üretim yapabilme kapasitemiz ile müşterilerimizin tüm ihtiyaçlarını karşılıyoruz.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Package className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>Özel ebat seçenekleri</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>Yüksek kalite standartları</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Recycle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>%100 geri dönüştürülebilir</span>
                  </li>
                </ul>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                  Teklif Alın <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Pet Flake */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Pet Flake</h2>
                <p className="text-gray-600 mb-6">
                  Modern tesislerimizde işlenen Pet Flake ürünlerimiz, yüksek saflık oranı ve kalitesi ile 
                  geri dönüşüm endüstrisinin ihtiyaçlarını karşılıyor.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>Yüksek saflık oranı</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Factory className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>Modern işleme tesisleri</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>Uluslararası standartlar</span>
                  </li>
                </ul>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                  Teklif Alın <ChevronRight size={20} />
                </button>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80"
                  alt="Pet Flake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Pet Deşe */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1616690710400-a16d146927c5?auto=format&fit=crop&q=80"
                  alt="Pet Deşe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Pet Deşe</h2>
                <p className="text-gray-600 mb-6">
                  Endüstriyel pet atıklarının geri dönüşümünde uzman ekibimiz ve gelişmiş teknolojimiz ile 
                  sürdürülebilir çözümler sunuyoruz.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Recycle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>Çevre dostu işleme</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>Uzman ekip</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Factory className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>Endüstriyel ölçek</span>
                  </li>
                </ul>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                  Teklif Alın <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CorporatePage() {
  return (
    <>
      {/* Corporate Hero */}
      <section className="relative py-24 bg-gray-900">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Kurumsal</h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            20 yılı aşkın tecrübemiz ile pet endüstrisinde güvenilir çözüm ortağınız
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
              <p className="text-gray-600">
                Pet endüstrisinde global bir marka olarak, sürdürülebilir ve yenilikçi çözümlerle 
                sektöre yön veren lider kuruluş olmak.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
              <p className="text-gray-600">
                Müşterilerimize en kaliteli ürün ve hizmeti sunarak, çevreye duyarlı ve 
                sürdürülebilir bir gelecek için çalışmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Kalite Politikamız</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Kalite Standartları</h3>
              <p className="text-gray-600">
                Uluslararası kalite standartlarına uygun üretim ve hizmet anlayışı
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">
                Müşteri beklentilerini aşan hizmet kalitesi ve çözüm odaklı yaklaşım
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Recycle className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Sürdürülebilirlik</h3>
              <p className="text-gray-600">
                Çevre dostu üretim süreçleri ve sürdürülebilir kaynak kullanımı
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Belgelerimiz</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">ISO 9001:2015</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">ISO 14001:2015</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">OHSAS 18001</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">TSE Belgesi</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;