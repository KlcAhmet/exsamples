# Command Pattern

Command pattern, istekleri veya işlemleri ayrı nesnelerde kapsülleme olanağı sağlar. Bu desen, istek gönderen nesneleri, bu istekleri yerine getiren nesnelerden ayırır.

Bir istemcinin uygulamanın her yerinden bir API'nin yöntemlerine doğrudan erişim sağladığını düşünün. Bu API'nin uygulama şekli değişirse ne olur? Değişiklik, API'nin kullanıldığı her yerde yapılmalıdır. Bunu önlemek için soyutlamadan yararlanarak istek gönderen nesneleri, isteği uygulayan nesnelerden ayırabiliriz. Artık bir değişiklik olursa, sadece çağrı yapan nesne değişmesi gerekir.

Bu deseni şu durumlarda kullanabilirsiniz:

* İstekleri farklı zamanlarda sıraya almak ve yürütmek için.
* Sıfırlama veya geri alma gibi işlemler yapmak istediğinizde.
* Yapılan isteklerin geçmişini tutmak istediğinizde.