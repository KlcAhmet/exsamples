# Visitor Pattern

Visitor pattern, nesnelerin kendi yapısını değiştirmeden, nesneler topluluğuna yeni operasyonlar tanımlamaya izin verir. Bu sayede sınıfı uyguladığı mantıktan ayırmamızı sağlar.

Ekstra işlemler bir Visitor nesnesinde kapsüllenebilir. Nesneler, Visitor nesnesini kabul eden bir visitor yöntemine
sahip olabilir. Visitor daha sonra gerekli değişiklikleri yapabilir ve kendisini alan nesne üzerinde işlemleri
gerçekleştirebilir. Bu, geliştiricilerin gelecekteki uzantıları yapmalarına, kütüphaneleri/çerçeveleri
genişletmelerine vb. olanak tanır.

Visitor deseni şu durumlarda kullanılabilir:

* Veri yapısısının farklı nesneleri üzerinde benzer işlemlerin yapılması gerektiğinde.
* Veri yapısısındaki farklı nesneler üzerinde belirli işlemlerin yapılması gerektiğinde.
* Kütüphanelere veya çerçevelere genişletilebilirlik eklemek istediğinizde.