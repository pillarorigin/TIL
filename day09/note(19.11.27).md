### 1. [실습 1] express-demo 프로젝트 생성
```js
    $ npm init
    $ npm i express
    $ npm i -g nodemon
        //package.json script 에 "start": "nodemon" 추가
```

### 2. express-demo 프로젝트 구조
```
    day09
        express-basic (express 설치 전 코드)
            node-http.js
            express-demo (express 설치 후 코드, 차이점 알아두기)
                node-modules
                index.js
                package-lock.json
                package.json
        note.md

```

### 3. REST(Representational State Transfer)
1. REST는 '네트워크 아키텍쳐 원리'의 모음.
'네트워크 아키텍쳐 원리'란 자원을 정의하고 자원에 대한 주소를 지정하는 방법 전반을 의미.

2. 자원을 이름(자원의 표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미.
자원(resource)의 표현(representation)에 의한 상태 전달
- 자원의 표현
    - 자원: 해당 소프트웨어가 관리하는 모든 것
    - ex) 문서, 그림, 데이터, 소프트웨어 자체 등
    - 자원의 표현: 그 자원을 표현하기 위한 이름
    - ex) DB의 학생 정보가 자원일 때, 'students'를 자원의 표현으로 정한다.
- 상태(정보) 전달
    - 데이터가 요청되어지는 시점에서 자원의 상태(정보)를 전달.
    - JSON 혹은 XML을 통해 데이터를 주고 받는 것이 일반적이다.

3. REST의 구체적인 개념
    HTTP URL(Uniform Resource Identifier)를 통해 자원을 명시하고, HTTP Method(POST,GET,PUT,DELETE)를 통해 자원에 대한 CRUD Operation을 적용하는 것을 의미.
    즉, REST는 자원 기반의 구조(ROA, Resource Oriented Architecture) 설계의 중심에 Resource가 있고 HTTP Method를 통해 Resource를 처리하도록 설계된 아키텍쳐를 의미한다.

    CRUD Operation
    Create: 생성(POST)
    Read : 조회(GET)
    Update: 수정(PUT, PATCH)
    Delete: 삭제(DELETE)
    HEAD: header정보 조회(HEAD)

    PUT과PATCH 구분해서 route 구성해야 한다.
        PUT : 자원의 전체 교체
        PATCH : 자원의 부분 교체


4. SOAP
  SOAP(Simple Object Access Protocol)은 일반적으로 널리 알려진 HTTP, HTTPS, SMTP 등을 통해 XML기반의 메세지를 네트워크상에서 교환하는 프로토콜이다.

  SOAP 기반의 서비스는 SOA의 개념을 실현하기 위한 기술이다.
  SOA(Service Oriented Architecture)란 서비스 지향 아키텍쳐라는 뜻으로 대규모 시스템을 구축 시 시스템의 각 업무(기능)를 비즈니스적인 의미를 갖는 서비스라는 단위로 묶어 조합하여 시스템을 구축하는 소프트웨어 아키텍쳐를 의미한다.

  SOAP에서는 모든 데이터가 XML로 표현되며, 데이터와 데이터를 다루는 오퍼레이션들이 WSDL로 정의되면 UDDI라는 전역적인 서비스 저장소에 등록되어 누구라도 서비스를 찾을 수 있도록 공개된다. 여기서 WSDL이란 Web Services Description Language의 약자로 웹 서비스 기술언어 또는 기술된 정의 파일의 총칭으로 기술된 XML이며, UDDI는 웹서비스를 등록하고 검색하기 위한 저장소로 웹서비스를 공개적으로 접근, 검색이 가능하도록 공개된 레지스트리이다.

  위의 정의에서 나온것처럼 SOAP은 HTTP, HTTPS, SMTP등을 통해 XML기반의 메세지를 네트워크상에서 교환하는데 아래 그림과 같이 Envelope, Header, Body로 구성된 XML문서로 표현되며, 복잡한 구조를 가져 HTTP상에서 전달되기 무겁고 메세지의 인코딩/디코딩 과정 등 개발하는데 난이도가 높다.

  ![img](https://t1.daumcdn.net/cfile/tistory/9945F2375AC4736D30)

  [ref] : https://gangnam-americano.tistory.com/39

5. REST vs SOAP

    ![img](https://t1.daumcdn.net/cfile/tistory/990C603A5AC4799E2B)

    ![img](https://t1.daumcdn.net/cfile/tistory/995AAF3A5AC4799E24)

    **비교1.**
    SOAP는 구조에 따라 UDDI레지스트리를 통해서 웹서비스를 등록, 검색, 바인딩하여 사용하며 RESTful의 경우 리소스를 등록하고 저장해두는 중간 매개체 없이 리소스 제공자가 리소스 요청자에게 직접 제공한다.

    **비교2.**
    SOAP는 상호통신하는데 있어 프로그램들이 잘 이해할 수 있는 문법에 따라 개발되었으며 이에 따라 기술적으로 맞는 개발 프로그래밍 능력이 요구된다. 반면, RESTful은 인터넷 서비스 업체들이 개발자들에게 손쉬운 데이터를 제공하자는 목적에 출발하여 SOAP와 비교해 쉽게 개발/이용 할 수 있다.

    **비교3.**
    비교2와 함께 보면 SOAP은 사람보다 기계가 우선적으로 이해하기 쉬운 구조인 반면 RESTful은 기계보다 사람이 이해하기 쉽게 인터넷 기본(HTTP/XML) 구조로 별도의 환경이 필요없다는 장점이 있다.

### 4. REST API(Application Programming Interface)
데이터와 기능의 집합을 제공. 컴퓨터 프로그램간 상호작용을 촉진하며, 서로 정보를 교환 가능하도록 하는 것.

**REST API 정의**
    REST 기반으로 서비스 API를 구현한 하는 것.

**REST API 특징**
    확장성과 재사용성이 높아 유지보수 및 운용을 편리하게 할 수 있다.
    REST는 HTTP표준 기반으로 구현하므로 HTTP를 지원하는 프로그램 언어로 클라이언트, 서버를 구현 할 수 있다.

**REST API 설계**
    도큐먼트 : 객체 인스턴스나 데이터베이스 레코드와 유사한 개념
    컬렉션 : 서버에서 관리하는 디렉터리라는 리소스
    스토어 : 클라이언트에서 관리하는 리소스 저장소

1. URI는 정보의 자원을 표현
    1. resource는 동사보다는 명사를, 대문자보다는 소문자를 사용한다.
    2. resource의 도큐먼트 이름으로는 단수 명사를 사용해야 한다.
    3. resource의 컬렉션 이름으로는 복수 명사를 사용해야 한다.
    4. resource의 스토어 이름으로는 복수 명사를 사용해야 한다
        - `GET /Member/1` -> `GET/members/1`
2. 자원에 대한 행위는 HTTP Method로 표현한다.
    1. URI에 HTTP Method가 들어가면 안된다.
        - `GET /members/delete/1` -> `DELETE /members/1`
    2. URI에 행위에 대한 동사 표현이 들어가면 안된다.
    (즉, CRUD 기능을 나타내는 것은 URI에 사용하지 않는다.)
        - `GET /members/show/1` -> `GET /members/1`
        - `GET /members/insert/2` -> `POST /members/2`
    3. 경로 부분 중 변하는 부분은 유일한 값으로 대체한다.
    (즉, :id는 하나의 특정 resource를 나타내는 고유값이다.)
        - student를 생성하는 route: `POST /students`
        - id=12인 student를 삭제하는 route: `DELETE /students/12`

**REST API 설계 상세 규칙**
1. 슬래시 구분자(`/`)는 계층 관계를 나타내는데 사용한다.
2. URI 마지막 문자로 슬래시(`/`)를 포함하지 않는다.
3. 하이픈(`-`)은 URI 가독성을 높이는데 사용한다.
4. 밑줄(`_`)은 URI에 사용하지 않는다.
5. URI 경로에는 소문자가 적합하다.
6. 파일확장자는 URI에 포함하지 않는다.
    - REST API에서는 메세지 body내용의 포맷을 나타내기 위한 파일 확장자를 URI안에 포함시키지 않는다.
    - Accept header를 사용한다.
    - `http://restapi.example.com/members/soccer/345/photo.jpg (X)`
    -> `GET / members/soccer/345/photo HTTP/1.1 Host: restapi.example.com Accept: image/jpg (O)`
7. 리소스 간에는 연관 관계가 있는 경우
    - /리소스명/리소스ID/관계가 있는 다른 리소스명
    - `GET: /users/{userid}/devices(일반적으로 소유 'has`의 관계를 표현할 때 

**REST API 참고 응답상태 코드 **
    1xx : 전송 프로토콜 수준의 정보 교환
    2xx : 클라어인트 요청이 성공적으로 수행됨
    3xx : 클라이언트는 요청을 완료하기 위해 추가적인 행동을 취해야 함
    4xx : 클라이언트의 잘못된 요청
    5xx : 서버쪽 오류로 인한 상태코드

### 5. RESTful
REST API를 제공하는 웹 서비스를 RESTful 하다고 할 수 있다.
    
RESTful한 API를 구현하는 목적이 성능향상은 아니며, 일관적인 컨벤션을 통한 API의 이해도 및 호환성을 높이는 것이 주 동기이므로 성능이 중요한 상황에서는 굳이 RESTful한 API를 구현할 필요는 없다.

RESTful하지 못한 경우
    - CRUD 기능을 모두 POST로만 처리하는 API
    - route에 resource, id외의 정보가 들어가는 경우
        `/members/updateName`

[ref] : https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html

### 6. POSTMAN
localhost:3000/api/members로 요청
    BODY
        ROW
            ```
            {
                "인자 1" : "text",
                "인자 2" : "text"
            }
            ```

### 7. [실습 2] json server 프로젝터 생성
json 파일을 DB로 사용할 수 있게 해주는 server
``` bash
    $ npm install -g json-server
    (//json-server는 db.json 파일 안의 제이슨형태의 데이터형식을 가져다 쓰는 express 라이브러리라고 보면 됨)
    $ npm init -y
    $ touch db.json
```

### 8. json server 프로젝트 구조도
    day09
        express-basic
            express-demo
            json-server
                db.json
                package.json
        note(19.11.27).md

### 9. 프로젝트 실행
```bash
    $ json-server --watch db.json --port 5000
```
//확인은 postman에서 localhost:5000/members로 GET 호출
//create는 postman에서 localhost:5000/members로 POST 호출
[json-server] : https://redux-advanced.vlpt.us/3/01.html

### 10. Firebase

[Firebase] : https://console.firebase.google.com/

### 11. joi 설치
schema를 대신 확인하는애
Validate 작성을 위해
express-basic > express-demo 폴더에서
```bash
    $ npm install @hapi/joi
```
[joi] : https://www.npmjs.com/package/joi
[joi-api] : https://hapi.dev/family/joi/

### 12. validate 사용
//validate 중복 제거를 위한 리팩토링 (POST만 리팩토링, PATCH 부분은 리팩토링 하기 전 코드)
function validateMember(member) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        course: Joi.string().required()
    });
    // return schema.Validate(req.body);
    return schema.validate(member);
}

### 13. PUT과 PATCH
(상세 설명 넣어야 할 부분)
PUT과PATCH 구분해서 route 구성해야한다.
PUT : 자원의 전체 교체

PATCH : 자원의 부분 교체

### References
>https://www.slipp.net/wiki/pages/viewpage.action?pageId=12878219
A MEAN Blog REST와 RESTful
http://mygumi.tistory.com/55
https://brainbackdoor.tistory.com/53
http://tech.devgear.co.kr/delphi_news/433404
https://meetup.toast.com/posts/92
https://spoqa.github.io/2012/02/27/rest-introduction.html
https://hackernoon.com/build-restful-api-in-go-and-mongodb-5e7f2ec4be94
https://docs.oracle.com/cd/E76467_01/alloc/pdf/141/html/operations_guide/alloc-og_restful-impl.htm
SOAP과 REST의 차이
https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html
