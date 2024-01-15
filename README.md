<h1>Bus Ticket Buying Web Site</h1>
 
<h2>Kullanılan Teknolojiler</h2>

Aşağıda, projenin geliştirilmesinde kullanılan teknolojilere dair detayları bulabilirsiniz.

## Kullanılan Teknolojiler

### 1. [TailwindCSS](https://tailwindcss.com/)

Tasarım için TailwindCSS kullanıldı. Hızlı ve özelleştirilebilir bir CSS framework'üdür.

### 2. [React](https://reactjs.org/)

React kütüphanesi kullanılarak kullanıcı arayüzü oluşturuldu. Bileşen tabanlı bir yapı sunuldu.

### 3. [TypeScript](https://www.typescriptlang.org/)

Proje, kodun daha güvenli ve okunabilir olması amacıyla TypeScript kullanılarak geliştirildi.

### 4. [React Hooks](https://reactjs.org/docs/hooks-intro.html)

`useEffect`, `useDispatch`, ve `useState` gibi React hook'ları kullanıldı. Bileşenlerde state ve yaşam döngüsü işlemleri yönetildi.

### 5. [Redux Toolkit](https://redux-toolkit.js.org/)

State yönetimi için Redux Toolkit kullanıldı.

### 6. [Firebase](https://firebase.google.com/)

Login ve kayıt sayfaları için Firebase kullanıldı.

### 7. [React Router DOM](https://reactrouter.com/web/guides/quick-start)

Sayfa geçişleri için React Router DOM kullanıldı. Tek sayfa uygulamalarında sayfa yönetimini kolaylaştırmak için kullanıldı.

### 8. [React Icons](https://react-icons.github.io/react-icons/)

Uygulamada kullanılan ikonlar için React Icons kullanıldı.

### 9. [React-Toastify](https://fkhadra.github.io/react-toastify/introduction/)

Ekran üzerinde kullanıcıya bilgilendirme mesajları göstermek için React-Toastify kullanıldı.

### 10. [JSON Server](https://github.com/typicode/json-server)

API için JSON Server kullanıldı. Basit ve hızlı bir şekilde sahte bir API oluşturmak için kullanıldı.

### 11. [Vite](https://vitejs.dev/)

Projede hızlı ve modern bir geliştirme deneyimi sağlamak amacıyla Vite kullanıldı. 

## Kullanılan Teknolojiler ve Sürümleri

- **@reduxjs/toolkit**: ^2.0.1
- **axios**: ^1.6.5
- **firebase**: ^10.7.1
- **json-server**: ^1.0.0-alpha.17
- **react**: ^18.2.0
- **react-datepicker**: ^4.25.0
- **react-dom**: ^18.2.0
- **react-icons**: ^5.0.1
- **react-redux**: ^9.0.4
- **react-router-dom**: ^6.21.1
- **react-select**: ^5.8.0
- **react-toastify**: ^9.1.3

## Geliştirme Sürümleri (DevDependencies)

- **@types/react**: ^18.2.15
- **@types/react-dom**: ^18.2.7
- **@typescript-eslint/eslint-plugin**: ^6.0.0
- **@typescript-eslint/parser**: ^6.0.0
- **@vitejs/plugin-react**: ^4.0.3
- **autoprefixer**: ^10.4.16
- **eslint**: ^8.45.0
- **eslint-plugin-react-hooks**: ^4.6.0
- **eslint-plugin-react-refresh**: ^0.4.3
- **postcss**: ^8.4.33
- **tailwindcss**: ^3.4.1
- **typescript**: ^5.0.2
- **vite**: ^4.4.5

## Kurulum

1. **Depoyu İndirme (Clone):**
   ```bash
   git clone https://github.com/kullanici_adi/proje-adı.git
   ```

## Çalıştırma

1. **Proje Dizinine Girme:**

```bash
   cd proje-adı
```
2. **Bağımlılıkları Yükleme:**

```bash
   npm install
```
3. **JSON Server'ı Başlatma:**

```bash
   npm run server
```
4. **Uygulamayı Başlatma:**

```bash
   npm run dev
```

## Uygulama Sayfaları

1. **Login Page:**
   - Kullanıcı, E-Mail ve Parola bilgisi ile giriş yapabilir.
   - Başarılı girişte Homepage sayfasına yönlendirilir.
   - Hatalı girişte ilgili hata mesajı görüntülenir.

2. **Register Page:**
   - Kullanıcı, E-Mail, Parola, Ad, Soyad, Cinsiyet ve Doğum Tarihi gibi bilgileri girerek kayıt olabilir.
   - Başarılı kayıt sonrasında Login sayfasına yönlendirilir.
   - Hatalı girişimde kullanıcıya uyarılar verilir.

3. **Homepage:**
   - Kullanıcı, kalkış yeri, varış yeri ve sefer tarihi gibi bilgileri girebilir.
   - Arama butonu ile Inquiry Page sayfasına yönlendirilir.

4. **Inquiry Page:**
   - Kullanıcı, Homepage'da verdiği bilgilere göre uygun seferleri listeleyebilir.
   - Seferlere ait özet bilgiler görüntülenir.
   - Uygun sefer bulunamazsa 'Uygun Sefer Bulunamadı' uyarısı verilir.

5. **Trip Details Page:**
   - Kullanıcı, Inquiry Page'de seçtiği sefere ait detayları görüntüleyebilir ve koltuk seçimi yapabilir.
   - Koltuk seçimi ile ilgili kurallar ve fiyat bilgisi görüntülenir.
   - Devam butonu ile Payment sayfasına yönlendirilir.

6. **Payment Page:**
   - Kullanıcı, seçilen sefer için ödeme yapabilir.
   - Kart bilgilerinin alındığı bir ödeme formu bulunur.
   - Ödeme başarılı olduğunda kullanıcıya bilgi verilir ve Homepage'e dönebilmesi için bir buton sunulur.


<h3>Projenin Canlı Linki</h3>

