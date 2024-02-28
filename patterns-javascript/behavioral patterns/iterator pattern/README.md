# Iterator Pattern

Iterator pattern, bir nesne koleksiyonunu ardışık olarak yinelemek için kullanılabilecek çeşitli iteratör türleri tanımlamayı sağlar.
Bu tasarım, koleksiyonun alt yapısını gizlerken yineleme işleminin nasıl gerçekleştiğini kapsüller.

Çoğu dilde IEnumerable ve IEnumerator gibi yerleşik iteratörler bulunur; ancak JavaScript yalnızca for, for-in, while gibi temel döngü yapılarını destekler.
İteratör Tasarımı, JavaScript geliştiricilerinin grafikler veya ağaçlar gibi karmaşık yapılarda saklanan koleksiyonları kolayca taramak için kullanılabilecek
başka karmaşık iteratörler oluşturmalarına olanak tanır. Bu iteratörler daha sonra, istemci tarafından koleksiyonun iç işleyişini bilmeden koleksiyonu taramak için kullanılabilir.

İteratörler, next adlı bir işlevi çağırıp bir dizi değerin içinden sonuna ulaşana kadar adım atan bir davranış izler.
Bunu yapmak için, geçerli konuma ve gezdiği koleksiyona referans tutmaları gerekir. Bu nedenle, bir iteratörün next, hasNext, currentItem ve each gibi işlevleri vardır.

Bu desen, özellikle yinelemeyle doğrudan ilgili problemlerle, esnek döngü yapıları tasarlama ve temel temsili bilmeden karmaşık bir koleksiyondan öğelere erişme
gibi durumlarda kullanılabilir. Herhangi bir koleksiyonu türünden bağımsız olarak verimli bir şekilde yineleyen genel bir iteratör uygulamak için kullanılabilir.