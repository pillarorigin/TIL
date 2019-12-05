### 1. Git
WORKING COPY -> (git add) -> INDEX -> (git commit) -> LOCAL REPO -> (git push) -> REMOTE REPO

![img](https://about.gitlab.com/images/git_flow/four_stages.png)

### 2. mongodb-advanced


### 3. express-advanced
```js
    1. require module
        1-1. express require
        1-2. 3rd require
        1-3. router require
    2. server listen
    3. router
    4. middleware
        4-1. built-in middleware
        4-2. 3rd middleware
        4-3. customizing middleware
    5. 
```


### 4. Middleware (Built-In)
```js
app.use(express.json()) //req.body.data
app.use(express.urlencoded({extended:true})); //x-www-form-urlencoded - body-parser
app.use(express.static('public')); // GET ~/<filename.확장자>
```

### 5. Middleware (3rd)

1. HELMET 
    app에서 필요한 보안 요소.
    [HELMET] : https://helmetjs.github.io/
        ```bash
            $ yarn add helmet (최신버전이 설치됨)
        ```
2. Morgan
    log기록을 남겨주는 모듈.
    [Morgan] : https://github.com/expressjs/morgan
        ```bash
            $ yarn add morgan
        ```