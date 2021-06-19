
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;

// Burada yazılan kodlar fonksiyonun return ettiği sonuçları göstermeye yarıyor.
// Buna react JSX deniliyor.
// Burada bir component mimarisi kuruluyor.
// Sadece burada verilen syntax bir xml syntax formatındadır.

// Burada yazılan kodlar container component olan div'in içerisinde bulunmalıdır.
// Burada import edilen import './App.css'; ile <div className="App"> içerisinde 
// App.css isimli dosyayı çalıştırıyor.
// App.css isimli dosyadan uygulama sitilleri gelmektedir.
// Burada çalışma kolaylığı açısından iki adet klasör oluşturduk. Birisi syfaları yapılandırmak için pages. 
// kategori ve menüleri yapılandırmak için layout oluşturuldu.
// layout kısmı genelde değişmeyen yapıya sahiptir.

// header'ın hemen altındaki img src silindi.
// header'ın tamamı silindi.
// Dolayısıyla import logo from './logo.svg'; ihtiyaç kalmadı.

// App içerisinde <div className="App">  <Dashboard /> yazarsak browser da Ana sayfa iletisi görünür.
      // <Dashboard />
      // </div>