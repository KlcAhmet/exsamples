# MVC Pattern

MVC kalıbı, Model-View-Controller kalıbının kısaltmasıdır. Uygulamanızın kodunu düzenlemek için kullanılan bir mimari kalıbıdır. Üç bileşenlerden oluşur:

**- Model:**

  - Model bileşeni, uygulamanın ihtiyaç duyabileceği verileri yönetir.

**- View:**

  - Görünüm, mevcut modelin görsel temsili için kullanılır. Kullanıcı tarafında veriyi işler.

**- Controller:**

  - Denetleyici, model ve görünüm bileşenlerini birbirine bağlar.

Model, görünümden bağımsızdır; yani, kullanıcı arayüzü ve bilginin kullanıcı tarafında nasıl görüntülendiği ile ilgilenmez. Diğer taraftan, görünüm modelin bir gözlemcisidir. Model değiştirildiğinde (veri güncellendiğinde), gözlemcisini (görünümü) bilgilendirir, ardından görünüm buna göre tepki verir.

Söz konusu edildiği gibi, görünüm modelin görsel temsilidir. Modelde bir değişiklik bildirildiğinde, görünüm buna göre güncellenir. Görünüm katmanı kullanıcıların gördüğü yer olduğu için, kullanıcıların düzenleme veya nitelik değerlerini güncelleme gibi etkileşimde bulundukları katmandır.

Denetleyici, model ve görünüm arasındaki bağlantıdır. İkisi birbirleriyle doğrudan etkileşmez. Denetleyici, kullanıcıdan tıklama veya tuş vuruşu gibi girdi alır, ardından görünüm tarafını günceller ve ardından modeli buna göre günceller. Bazen görünümü doğrudan da güncelleyebilir.

Bu kalıbı aşağıdaki durumlarda kullanabilirsiniz:

* Uygulamanızda gelişmiş uygulama organizasyonu istiyorsanız.
* Geliştiriciler uygulamanın farklı bileşenleri üzerinde aynı anda çalışabildikleri için daha hızlı geliştirme istiyorsanız.
* MVC asenkron tekniği desteklediği için hızlı yüklenen bir uygulama geliştirmek istiyorsanız.
* Model için birden fazla görünüm istiyorsanız.
* Ayrı bileşenlerde yapılan değişikliklerin daha kolay olması nedeniyle uygulamanın ölçeklenebilirliğini artırmak istiyorsanız.