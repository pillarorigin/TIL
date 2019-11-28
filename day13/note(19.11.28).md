### 1. mongoose use
    0. mongoose install
    1. mongoose connect / disconnect
    2. Create Shema 생성
        ```js
          const courseSchema = new mongoose.Schema({
              dataSet
            })
        ```
    3. Create Model (생성한 스키마를 통해 모델을 만든다)
    
    <--express가 model을 불러오고 난 뒤에 하는 동작 들-->

    4. Create Method (메소드 등록하거나 내부적으로 validate)
        4-1. Create instance by Model(모델을 통해 인스턴스를 생성 후 )
            4-1-1. validate ($ yarn add @hapi/joi)
        4-2. dataSet
        4-3. Save instance
    5. Read Method
        5-1. Get Data by Model

### 2. Express Router flow
    0. import module
    1. Create router object

