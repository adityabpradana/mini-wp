# mini-wp
## HTTP Methods
### Articles
|URL|Method|URL Params|Data|Success|Error|
|---|------|----------|-----------|-------|-----|
|/api/articles|GET|-|-| **Code:** 200 <br>**Content:** <br> [ { title: "Article Title", description: "Lorem ipsum dolor sit ...", image_path: "http://store.googleapistorage.com/bucketname/filename.jpg", author: "johnsmith" }, ... ] |**Code:** 404<br> **Content:** { error : "articles doesn't exist" } |
|/api/articles|GET|:productId|-| **Code:** 200 <br> **Content:**<br> { title: "Article Title", description: "Lorem ipsum dolor sit ...", image_path: "http://store.googleapistorage.com/bucketname/filename.jpg", author: "johnsmith" } |**Code:** 404<br>**Content:** { error : "Product doesn't exist" } |
|/api/articles|POST|-|data: Object| **Code:** 201 <br> **Content:**<br> { title: "Article Title", description: "Lorem ipsum dolor sit ...", image_path: "http://store.googleapistorage.com/bucketname/filename.jpg", author: "johnsmith" } |**Code:** 404<br>**Content:** { error: "Can't add product" } <br> or <br> **Code:** 401<br>**Content:** <br> { error : "You are unauthorized to make this request." } |
|/api/articles|PUT|:productId|id: String, data: Object| **Code:** 200<br>**Content:**<br> { title: "Article Title", description: "Lorem ipsum dolor sit ...", image_path: "http://store.googleapistorage.com/bucketname/filename.jpg", author: "johnsmith" }  |**Code:** 404<br>**Content:** { error: "Can't replace product" }<br> or <br> **Code:** 401<br>**Content:** <br> { error : "You are unauthorized to make this request." } |
|/api/articles|PATCH|:productId|id: String, data: Object| **Code:** 200<br>**Content:**<br> { productName: "T-shirt", description: ... ,price: 40000, **_stock: 30_**, category:[outfit, men]}  |**Code:** 404<br>**Content:** { error: "Can't update product" }<br> or <br> **Code:** 401<br>**Content:** <br> { error : "You are unauthorized to make this request." }|
|/api/articles|DELETE|:productId|id: String| **Code:** 200<br>**Content:**<br>{ title: "Article Title", description: "Lorem ipsum dolor sit ...", image_path: "http://store.googleapistorage.com/bucketname/filename.jpg", author: "johnsmith" }  |**Code:** 404<br>**Content:** { error: "Product doesn't exist" } <br> or <br> **Code:** 401<br>**Content:** <br> { error : "You are unauthorized to make this request." }|

### Users
|URL|Method|URL Params|Data|Success|Error|
|---|------|----------|-----------|-------|-----|
|/api/users/signin|POST|-|email: String, password: String| **Code:** 200<br>**Content:** <br> {token: "3821739218fewfer32rf2", username:"Aditya" }|**Code:** 400<br> **Content:** { error: "Wrong Email or Password "}  |
|/api/users/signin/google|POST|-|-| **Code:** 200<br>**Content:** {token: "3821739218fewfer32rf2", username:"Aditya Pradana" |**Code:** 400 <br>**Content:** { error: "Bad request" } |
|/api/users/signup|POST|-|username: String, email: String, password: String| **Code:** 201<br>**Content:** { message: "User has been registered" } |**Code:** 400 <br> **Content:** { error: "Bad request}  |

