# Branch

**feature:** Yeni geliştirilecek bir özelliği iletir. Örneğin, `feature/add-filters`

**release:** Yeni bir sürüm hazırlamak için kullanılır. `release/` öneki, yeni güncellemeleri ana branch'ten bir release 
oluşturmak için birleştirmeden önce son dokunuşlar ve revizyonlar gibi görevleri yapmak için sıklıkla kullanılır. Örneğin, 
`release/v3.3.1-beta`

**bugfix:** Koda bir hata çözüyor olduğunuzu iletir ve genellikle bir issue ile ilgilidir. Örneğin, `bugfix/sign-in-flow`

**hotfix:**  `bugfix`e benzerdir, ancak prodüksiyon ortamında bulunan kritik bir hatayı düzeltmekle ilgilidir. Örneğin, 
`hotfix/cors-error`

**docs:** Dokümantasyon yazmak için kullanılır. Örneğin, `docs/quick-start`

Görev yönetimi ile çalışıyorsanız, örneğin Jira, Trello, ClickUp veya User Story oluşturabilen benzer bir araçla
çalışıyorsanız, her kartın ilişkili bir numarası vardır. Bu nedenle, bu kart numaralarını şube adı öneklerinde kullanmak
yaygındır. Örneğin:

`feature/T-531-add-sidebar` 
`docs/T-789-update-readme`  
`hotfix/T-142-security-path`

# Commit
-   **Use the imperative mood in the subject line.**  For example:
    

> `Add README.md`  ✅;  
> `Added README.md`  ❌;  
> `Adding README.md`  ❌;  
>   

-   **Capitalize the first letter of the subject line.**  For example:

> `Add user authentication`  ✅;  
> `add user authentication`  ❌;  
>   

-   **Don't end the subject line with a period.**  For example:

> `Update unit tests`  ✅;  
> `Update unit tests.`  ❌;

## Structure

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
## Commit Type
-   **feat:** Yeni özelliklerin eklenmesi.
-   **fix:** Yazılım hatalarının düzeltilmesi.
-   **refactor:** Kodun genel işlevselliğini koruyarak yapılan değişiklikler.
-   **chore:** Üretim kodunu etkilemeyen güncellemeler, araç, konfigürasyon veya kütüphane düzenlemeleri.
-   **docs:** Dokümantasyon dosyalarına ekleme veya değişiklik yapma.
-   **perf:** Performansı artırıcı kod değişiklikleri.
-   **style:** Kod biçimlendirme ve boşluk gibi kod sunumuyla ilgili düzenlemeler.
-   **test:** Testlerin eklenmesi veya düzeltilmesi.
-   **build:** Derleme sistemini veya harici bağımlılıkları etkileyen değişiklikler.
-   **ci:** CI konfigürasyon dosyalarında ve scriptlerde yapılan değişiklikler.
-   **env:** CI süreçlerindeki konfigürasyon dosyalarında veya eklemelerde yapılan değişiklikler, örneğin konteyner konfigürasyon parametreleri.

## Kapsam

Kapsam, commit tipinden sonra eklenebilen ve ek bağlamsal bilgi sağlayan bir yapıdır.

Örnekler:

-   `fix(ui): resolve issue with button alignment` (Kullanıcı arayüzünde bir hizalama sorunu çözüldü)
-   `feat(auth): implement user authentication` (Kullanıcı doğrulama özelliği eklendi)

### Body

The body of a commit message provides detailed explanations about the changes introduced by the commit. It's typically added after a blank line following the subject line.

**Example:**  

```
Add new functionality to handle user authentication.

This commit introduces a new module to manage user authentication. It includes
functions for user login, registration, and password recovery.
```

### Footer

The footer of a commit message is used to provide additional information related to the commit. This can include details such as who reviewed or approved the changes.

**Example:**  

```
Signed-off-by: John <john.doe@example.com>
Reviewed-by: Anthony <anthony@example.com>

```

### Breaking Change

Indicate that the commit includes significant changes that may lead to compatibility issues or require modifications in dependent code. You can add a  `BREAKING CHANGE`  in the footer or include  `!`  after the type/scope.

### Examples of commits using conventional commits

```
chore: add commitlint and husky
chore(eslint): enforce the use of double quotes in JSX
refactor: type refactoring
feat: add axios and data handling
feat(page/home): create next routing
chore!: drop support for Node 18

```

**With subject, body and footer:**  

```
feat: add function to convert colors in hexadecimal to rgba

Lorem Ipsum is simply dummy text of the printing and typesetting industry.

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

Reviewed-by: 2
Refs: #345
```