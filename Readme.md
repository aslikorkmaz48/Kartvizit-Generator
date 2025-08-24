# 📇 Kartvizit Generator



**Kartvizit Generator**, kullanıcıların hızlı ve kolay bir şekilde **şık, kişiselleştirilmiş dijital kartvizitler** oluşturmasını sağlayan modern bir web uygulamasıdır. TailwindCSS ile tasarlanmış responsive bir arayüz sunar ve kullanıcı deneyimini ön planda tutar.

---

## 🔹 Özellikler

- 📝 **Canlı Önizleme:** Formdaki bilgiler (isim, meslek, e-posta, telefon, web sitesi, sosyal medya linkleri) anında kartvizite yansır. Böylece kullanıcı kartvizitini gerçek zamanlı görebilir.  
- 🎨 **Tema Seçimi:** Berry Sunset, Ocean Breeze ve Slate Minimal gibi farklı renk gradyanlarıyla kartviziti kişiselleştirebilirsiniz.  
- 🆎 **Avatar Harfi:** İsmin ilk harfi kartvizitte avatar olarak gösterilir, görsel olarak daha profesyonel bir görünüm sağlar.  
- 🔗 **Sosyal Medya Linkleri:** LinkedIn ve GitHub bağlantıları eklenebilir; kartvizit dijital olarak paylaşılabilir.  
- 📥 **PNG ve PDF İndir:** Kartviziti `html-to-image` ile PNG, `jsPDF` ile PDF olarak indirebilirsiniz.  
- 💻 **Responsive Tasarım:** Hem masaüstü hem de mobil cihazlarda sorunsuz çalışır.  
- ⚡ **Kullanıcı Dostu:** Basit ve anlaşılır arayüz ile herhangi bir teknik bilgi gerekmeden kullanılabilir.

---

## 🔹 Teknolojiler
- **HTML & JavaScript**: Dinamik form ve kartvizit önizlemesi için.  
- **TailwindCSS**: Modern, hızlı ve responsive tasarım için.  
- **html-to-image**: Kartviziti PNG formatına dönüştürmek için.  
- **jsPDF**: Kartviziti PDF olarak indirmek için.  

---

## 🔹 Kurulum
1. Depoyu klonlayın:
```bash
git clone https://github.com/kullaniciadi/kartvizit-generator.git
Klasöre gidin:
cd kartvizit-generator
index.html dosyasını tarayıcıda açın.
Ek sunucu veya kurulum gerekmez; tamamen frontend tabanlı bir uygulamadır.

🔹 Kullanım
Formu doldurun:

Ad Soyad
Meslek
E-posta
Telefon
Web sitesi
LinkedIn / GitHub
Tema seçin: Berry, Ocean veya Slate.
Kartvizit anında güncellenecek ve önizleme kısmında gözükecek.

Kartviziti indirmek için:
PNG İndir → Kartvizit resmi olarak kaydedilir.
PDF İndir → Kartvizit PDF formatında kaydedilir.

🔹 Proje Yapısı
css
Kopyala
Düzenle
kartvizit-generator/
│
├── index.html       ← HTML yapısı, form ve kartvizit önizlemesi
├── style.css        ← Özel CSS stilleri (avatar, butonlar, kart gradientleri)
└── script.js        ← JavaScript: formdan kartvizite veri aktarımı ve indirme


🔹 Katkıda Bulunma
Depoyu fork’layın.
Yeni bir branch açın (git checkout -b feature/yenilik).
Değişikliklerinizi commit edin (git commit -am 'Yeni özellik ekledim').
Branch’e push edin (git push origin feature/yenilik).
Pull request oluşturun.

🔹 Lisans
Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakabilirsiniz.

🔹 İletişim
Projeyle ilgili öneri, bug veya geri bildirimler için:
📧 E-posta: korkmaz.asli2003@gmail.com
🌐 GitHub: https://github.com/aslikorkmaz48