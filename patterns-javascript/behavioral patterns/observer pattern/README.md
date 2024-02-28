# Observer Pattern

Observer pattern, bir olaya abone olmuş nesnelerin (gözlemciler) girdiyi beklemelerine ve bilgilendirildiklerinde buna tepki vermelerine izin veren önemli bir davranışsal tasarım desenidir.
Bu, girdinin sağlanıp sağlanmadığını sürekli kontrol etmeleri gerekmediği anlamına gelir. Ana konu, tüm gözlemcilerin bir listesini tutar ve olay ne zaman meydana gelirse, izleyicilere durumu bildirerek
durumlarını buna göre güncellemelerini sağlar.

Bu desene eşleştirebileceğimiz gerçek hayattan bir örneğe bakalım. İlginç makaleler yayınlayan bir web sitesi düşünün.
Her gün siteyi yeni makaleler olup olmadığını kontrol etmek için ziyaret ediyorsunuz, yoksa bir süre/gün sonra tekrar ziyaret ediyorsunuz.
Ya bunun yerine web sitesine abone olsaydınız? Aboneliğe sahip olduktan sonra, her yeni makale yayınlandığında bildirim alacaksınız.
Böylece, şimdi birkaç saatte bir siteyi kontrol etmek yerine, yeni makale için bildirimi beklemeniz yeterli.

Gözlemci Tasarımı aşağıdaki durumlarda kullanılabilir:

* Büyük uygulamaları gevşek bağlı nesnelerden oluşan bir sisteme bölerek kod yönetimini iyileştirmek için.
* Aksi takdirde sıkı bağlılık nedeniyle mümkün olmayan gözlemciler ve aboneler arasındaki dinamik bir ilişki sağlayarak daha fazla esneklik sağlamak için.
* Uygulamanın farklı bölümleri arasındaki iletişimi iyileştirmek için.
* Gevşek bağlı nesneler arasında bire çok bağımlılık oluşturmak için.