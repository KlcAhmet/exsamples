# MVP Kalıbı

MVP kalıbı, Model-View-Presenter'ın kısaltmasıdır. Kullanıcı arayüzüne odaklanan MVC kalıbından türetilmiştir. MVP ise sunum mantığını iyileştirmeye odaklanır.

Üç bileşenden oluşur:

- **Model:** Uygulamanın ihtiyaç duyduğu ve görüntüde göstermek istediğimiz verileri sağlar.
- **View:** Verileri modelden görüntülemek için, kullanıcının eylemlerini/komutlarını işleme koyması için sunucuya iletir.
- **Sunucu:** Model ile view arasında aracı görevi görür. Modelden veriyi alır, işler ve görüntülenmesi için view'e geri gönderir. Aynı zamanda kullanıcının view ile etkileşimine de tepki verir.

## MVP kalıbı ne zaman kullanılmalıdır?

Bu kalıbı aşağıdaki durumlarda kullanabilirsiniz:

* Uygulamanız sunum mantığının çok fazla yeniden kullanımını gerektiriyorsa.
* Uygulamanız çok fazla kullanıcı etkileşimi gerektiriyorsa.
* Uygulamanız karmaşık görünümlere sahipse.
* Sunucu, birim testi yapılabilen sahte bir arayüz sağlayabildiğinden daha kolay test için.