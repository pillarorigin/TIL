### 1. mongoose 사용
    0. mongoose install
    1. mongoose connect / disconnect
    2. Create Shema 생성
        ```js
          const courseSchema = new mongoose.Schema({
              dataSet
            })
        ```
    3. Create Model (생성한 스키마를 통해 모델을 만든다)
    4. Create Method (메소드 등록하거나 내부적으로 validate)
        4-1. Create instance by Model(모델을 통해 인스턴스를 생성 후 )
        4-2. 
        4-3. Save instance
