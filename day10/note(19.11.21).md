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

### 3. [실습 1 ]
advanced 실습 폴더 생성
```bash
    routes
        article.js
        user.js
    index.js
    package.json
```

### 4. 미들웨어

| 미들웨어 모듈                                                | 설명                                                         | 내장 함수 (Express 3)  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------- |
| [body-parser](https://expressjs.com/ko/resources/middleware/body-parser.html) | HTTP 요청 body를 파싱합니다. [body](https://github.com/raynos/body), [co-body](https://github.com/visionmedia/co-body), 그리고 [raw-body](https://github.com/stream-utils/raw-body)도 참고하세요. | express.bodyParser     |
| [compression](https://expressjs.com/ko/resources/middleware/compression.html) | HTTP 요청들을 압축합니다.                                    | express.compress       |
| [connect-rid](https://expressjs.com/ko/resources/middleware/connect-rid.html) | 고유한 요청 ID를 생성합니다.                                 | 없음                   |
| [cookie-parser](https://expressjs.com/ko/resources/middleware/cookie-parser.html) | 쿠키 헤더를 파싱하고 `req.cookies`에 할당합니다. [cookies](https://github.com/jed/cookies)와 [keygrip](https://github.com/jed/keygrip)도 참고하세요. | express.cookieParser   |
| [cookie-session](https://expressjs.com/ko/resources/middleware/cookie-session.html) | 쿠키 기반의 세션을 만듭니다.                                 | express.cookieSession  |
| [cors](https://expressjs.com/ko/resources/middleware/cors.html) | 다양한 옵션들을 이용하여 Cross-origin resource sharing (CORS)를 활성화합니다. | 없음                   |
| [csurf](https://expressjs.com/ko/resources/middleware/csurf.html) | CSRF 취약점을 방어합니다.                                    | express.csrf           |
| [errorhandler](https://expressjs.com/ko/resources/middleware/errorhandler.html) | 개발 중에 발생하는 에러를 핸들링하고 디버깅합니다.           | express.errorHandler   |
| [method-override](https://expressjs.com/ko/resources/middleware/method-override.html) | 헤더를 이용해 HTTP method를 덮어씁니다.                      | express.methodOverride |
| [morgan](https://expressjs.com/ko/resources/middleware/morgan.html) | HTTP 요청 로그를 남깁니다.                                   | express.logger         |
| [multer](https://expressjs.com/ko/resources/middleware/multer.html) | multi-part 폼 데이터를 처리합니다.                           | express.bodyParser     |
| [response-time](https://expressjs.com/ko/resources/middleware/response-time.html) | 응답 시간을 기록합니다.                                      | express.responseTime   |
| [serve-favicon](https://expressjs.com/ko/resources/middleware/serve-favicon.html) | 파비콘을 제공합니다.                                         | express.favicon        |
| [serve-index](https://expressjs.com/ko/resources/middleware/serve-index.html) | 주어진 경로의 디렉토리 리스트를 제공합니다.                  | express.directory      |
| [serve-static](https://expressjs.com/ko/resources/middleware/serve-static.html) | 정적 파일을 제공합니다.                                      | express.static         |
| [session](https://expressjs.com/ko/resources/middleware/session.html) | 서버 기반의 세션을 만듭니다 (개발 전용).                     | express.session        |
| [timeout](https://expressjs.com/ko/resources/middleware/timeout.html) | HTTP 요청 처리를 위해 timeout을 만듭니다..                   | express.timeout        |
| [vhost](https://expressjs.com/ko/resources/middleware/vhost.html) | 가상 도메인을 만듭니다.                                      | express.vhost          |



### 5. 추가 미들웨어

| 미들웨어 모듈                                                | 설명                                                         |      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [connect-image-optimus](https://github.com/msemenistyi/connect-image-optimus) | 이미지 제공을 최적화힙니다. 할 수 있다면 이미지를 `.webp`나 `.jxr`로 바꿉니다. |      |
| [express-debug](https://github.com/devoidfury/express-debug) | 템플릿 변수 (지역), 현재 세션, 기타 등등에 대한 정보를 제공하는 개발 도구입니다. |      |
| [express-partial-response](https://github.com/nemtsov/express-partial-response) | JSON 응답을 URL의 `fields`를 받아서 필터링합니다. Google API의 Partial Response를 활용합니다. |      |
| [express-simple-cdn](https://github.com/jamiesteven/express-simple-cdn) | 정적 요소들을 위해 CDN을 사용하도록 도와줍니다. 다양한 호스트를 지원합니다. |      |
| [express-slash](https://github.com/ericf/express-slash)      | 구현된 루터에 맟춰서 슬래쉬 유무를 맞춰줍니다.               |      |
| [express-stormpath](https://github.com/stormpath/stormpath-express) | 사용자 저장소, 인증 확인, 인증, SSO, 그리고 데이터 보안에 관련된 모듈입니다. (Okta로 합쳐졌습니다) |      |
| [express-uncapitalize](https://github.com/jamiesteven/express-uncapitalize) | 대문자를 포함하는 HTTP 요청들을 표준 소문자 폼으로 리다이렉트시킵니다. containing uppercase to a canonical lowercase form. |      |
| [helmet](https://github.com/helmetjs/helmet)                 | 다양한 HTTP 헤더를 설정해 앱이 안전하게 도와줍니다.          |      |
| [join-io](https://github.com/coderaiser/join-io)             | 요청 횟수를 줄이기 위해 파일들을 묶어줍니다.                 |      |
| [passport](https://github.com/jaredhanson/passport)          | OAuth, OpenID 같은 방법들을 사용하는 인증 체계입니다. 자세한 정보는 http://passportjs.org/에서 확인하세요. |      |
| [static-expiry](https://github.com/paulwalker/connect-static-expiry) | 정적 에셋을 위해 헤더를 캐싱하거나 URL을 고유화합니다..      |      |
| [view-helpers](https://github.com/madhums/node-view-helpers) | 뷰 엔진들을 위한 일반적인 도움을 제공합니다.                 |      |
| [sriracha-admin](https://github.com/hdngr/siracha)           | 동적으로 Mongoose의 관리 사이트를 만듭니다.                  |      |



