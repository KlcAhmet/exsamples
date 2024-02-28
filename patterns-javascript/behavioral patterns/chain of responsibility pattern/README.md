# Chain of Responsibility Pattern

Chain of responsibility pattern, bir istemcinin gönderdiği isteğin birden fazla nesne tarafından alınabilmesine izin veren bir tasarım desenidir.
Bu desen, gevşek bağlı nesnelerden oluşan bir zincir oluşturur. Zincirdeki her nesne, kendisine gelen isteği ya işler ya da zincirdeki bir sonraki nesneye iletir.

Bu desenin yaygın bir örneği, DOM'daki olay baloncuklanmadır. Bir olay, onu işleyen bir öğeye ulaşana kadar DOM'un farklı iç içe geçmiş öğeleri arasında yayılır.

Programınız önceden bilmediğiniz sırada ve türde çeşitli istekleri farklı şekillerde ele alacaksa bu deseni kullanabilirsiniz.
Bu desen, birden fazla işleyiciyi zincirlemenize, böylece hepsinin isteği işleme fırsatı sunmanıza olanak tanır.

Sorumluluk Zinciri Tasarımı kullanımının iyi bir örneği, olay baloncuklanmasının DOM'daki işlenişidir.
Burada olay, iç içe geçmiş elementler arasında yayılır ve bunlardan biri olayı ele almayı seçebilir.