### 1. express-basic-ex 프로젝트 생성

### 2. 요구사항 명세
```
Valid :Joi

DB schema
resource: users(api/users, api/users/:id) CRUD 동작

schema
-id 
    - optional:마지막 요소가 Delete되고 새로운 데이터가 post되면 id가 중복 안되도록만 (PK)
-name
    - string
    - required
    - 1글자 이상
-email
    - email
    - required
    - 5글자 이상

-birthday
    - date
    - birthday(year) 기준으로 19살 이상.

const DBarray = {
    id:1, name:'tony', email:'tony@gamil.com', birthday:'11-01-1999'
    id:1, name:'tony', email:'tony@gamil.com', birthday:'11-01-1999'
    id:1, name:'tony', email:'tony@gamil.com', birthday:'11-01-1999'
}


```