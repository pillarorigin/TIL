### 1. 클라우드 서비스란?

![img](https://k.kakaocdn.net/dn/QeYSo/btqvbIXCq2I/OAZtVII1gS1UP0JbjpPHk0/img.png)



| 서비스로서의 인프라스트럭처<br/>(IaaS, Infrastructure as a service) | 서비스로서의 플랫폼<br/>(PaaS, Platform as a service)        | 서비스로서의 소프트웨어 (SaaS, Software as a service)        |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 가장 기본적인 클라우드 서비스 모델입니다. 가상 머신과 기타 자원들을 구독자에 대한 서비스로 제공합니다. | 응용 프로그램 개발자들에게 개발 환경을 제공하는 클라우드 서비스 모델입니다. 운영 체제, 프로그래밍 언어 실행 환경, 데이터베이스, 웹 서버를 포함한 컴퓨팅 플랫폼을 제공합니다. | 응용 소프트웨어와 데이터베이스에 대한 접근 권한을 가지는 클라우드 서비스 모델입니다. 클라우드 제공자(기업)들은 응용 프로그램을 실행하는 기반 구조와 플랫폼을 관리합니다. |
| 디스크 용량은 컴퓨터 부하와 함께 동적으로 규모가 조절됩니다. 사용률 기반의 과금이 가능합니다. 예로 AWS에서 제공하는 EC2가 있습니다. | 컴퓨터 자원은 응용 프로그램 수요에 맞게 자동으로 규모가 조절됩니다. 최근의 전문화된 PaaS로 BaaS(서비스로서의 블록체인)이 있습니다. | 일반적으로 종량제(pay-per-use)나 구독 형태로 비용을 지불합니다. 예로 네이버에서 제공하는 네이버 클라우드가 있습니다. |



    서버리스 컴퓨팅
    
    "시장에서 화두는 클라우드보다 기업의 디지털 트랜스포메이션이라고 봅니다." - 톰 송 오라클 사장 
    
    디지털 트랜스포메이션 기반은 데이터입니다. 


### 2. 클라우드 7개 서비스 비교 (궁금한 정보는 ctrl + f로 검색.)
```
Amazon AWS / Microsoft Azure / IBM IBM-Cloud / Google GoogleCloud(GGC) / Oracle Cloud / firebase / heroku
```

#### Amazon AWS
**분석**
```
Amazone Athena : SQL을 사용해 S3의 데이터 쿼리
Amazon EMR : 호스팅된 하둡 프레임워크
Amazon Kinesis : 실시간 비디오 및 데이터 스트림 분석
Amazon Redshift : 빠르고 간단하며 비용 효율적인 데이터 웨어하우징
AWS Data Pipeline : 데이터 중심의 주기적인 워크플로를 위한 오케스트레이션 서비스
AWS Lake Formation : 며칠 만에 안전한 데이터 레이크 구축
Amazon CloudSearch : 관리형 검색 서비스
Amazon Elasticsearch Servie : Elasticsearch 클러스터를 실행 및 확장
Amazon Managed Streaming for Apache Kafka : 완전 관리형 Apache kafka 서비스
Amazon QuickSight : 빠른 비즈니스 분석 서비스
AWS Glue : 데이터 준비 및 로드
```
**애플리케이션 통합**

```
AWS Step Functions : 분산 애플리케이션을 위한 조정
Amazon EventBridge : SaaS 앱 및 AWS 서비스를 위한 서버리스 이벤트 버스
Amazon MQ : ActiveMQ용 관리형 메시지 브로커
Amazon Simple Notification Service(SNS) : 게시/구독용 관리형 메시지 주제
Amazon Simple Queue Service(SQS) : 관리형 메시지 대기열
AWS AppSync : 여러 원본의 적절한 데이터로 앱을 대규모로 구동
```
**증강현실 및 가상현실(오직 AWS에만 있다.)**
```
Amazon Sumerian : 증강현실 및 가상현실 애플리케이션을 구축 및 실행
```
**AWS 비용 관리**
```
AWS 비용 탐색기 : AWS 비용 및 사용 분석
AWS 예산 : 사용자 지정 비용 및 사용 예산을 설정
AWS 비용 및 사용 보고서 : 포괄적인 비용 및 사용 정보에 액세스
예약 인스턴스 보고 : 예약 인스턴스(RI) 심층 분석
```
**블록체인**
```
Amazon Managed Blockchain : 확장 가능한 블록체인 네트워크를 생성 및 관리
Amazon QLDB(Quantum Ledger Database) : 완전관리형 원장 데이터베이스
```
**비즈니스 애플리케이션**
```
Alexa for Business : Alexa로 조직의 역량 강화
Amazon Chime : 편리한 회의, 화상 통화 및 채팅
Amazon WorkDocs : 안전한 엔터프라이즈 문서 스토리지 및 공유
Amazon WorkMail : 안전한 이메일 및 일정 관리
```
**컴퓨팅**
```
Amazon EC2 : 클라우드의 가상 서버
Amazon EC2 Auto Scaling : 수요에 맞춰 컴퓨팅 파워 조정
Amazon Elastic Container Registry : Docker 이미지 저장 및 검색
Amazon Elastic Container Service : Docker 컨테이너 실행 및 관리
Amazon Elastic Kubernetes Service : AWS에서 관리형 Kubernetes 실행
Amazon Lightsail : 가상 프라이빗 서버 시작 및 관리
AWS Batch : 규모와 상관없이 배치 작업 실행
AWS Elastic Beanstalk : 웹 앱 실행 및 관리
AWS Fargate : 서버 또는 클러스터를 관리할 필요 없이 컨테이너 실행
AWS Lambda : 서버에 대한 걱정 없이 코드 실행
AWS Outposts : AWS 인프라를 온프레미스에서 실행
AWS Serverless Application Repository : 서버리스 애플리케이션을 검색, 배포 및 게시
VMware Cloud on AWS : 사용자 지정 하드웨어 없이 하이브리드 클라우드 구축
```
**고객 인게이지먼트**
```
Amazon Connect : 클라우드 기반 콜 센터 서비스
Amazon Pinpoint : 채널 전체에서 사용자 참여 개인화
Amazon Simple Email Service(SES) : 이메일 송수신
```
**데이터베이스**
```
Amazon Aurora : 고성능 관리형의 관계형 데이터베이스
Amazon DynamoDB : 관리형 NoSQL 데이터 베이스
Amazon DocumentDB(MongoDB 호환) : 완전관리형 문서 데이터베이스
Amazon ElastiChache : 인 메모리 캐싱 시스템
Amazon Neptune : 완전관리형 그래프 데이터베이스 서비스
Amazon Quantum Ledger Database(QLDB) : 완전관리형 원장 데이터베이스
Amazon RDS : MySQL, PostgreSQL, Oracle, SQL Server 및 MariaDB를 위한 관리형의 관계형 데이터베이스 서비스
Amazon RDS on VMware : 온프레미스 데이터베이스 관리 자동화
Amazon Redshift : 빠르고 간단하며 비용 효율적인 데이터 웨어하우징
Amazon Timestream : 완전관리형 시계열 데이터베이스
AWS Database Migration Service : 최소한의 가동 중단으로 데이터베이스 마이그레이션
```
**개발자 도구**
```
Amazon Corretto : 프로덕션용 OpenJDK배포
AWS 클라우드 개발 키트 : 코드를 사용하여 클라우드 인프라 모델링
AWS Cloud9 : 클라우드 IDE에서 코드 작성, 실행 및 디버깅
AWS CodeBuild : 코드 빌드 및 테스트
AWS CodeCommit : 프라이빗 Git 리포지토리에 코드 저장
AWS CodeDeploy : 코드 배포 자동화
AWS CodePipeline : 지속적 전단을 사용한 소프트웨어 릴리스
AWS CodeStar : AWS 애플리케이션 개발 및 배포
AWS 명령줄 인터페이스 : AWS 서비스를 관리하는 통합 도구
AWS 도구 및 SDK : AWS의 도구 및 SDK
AWS X-Ray : 애플리케이션 분석 및 디버깅
```
**최종 사용자 컴퓨팅**
```
Amazon WorkSpaces : 클라우드에서의 가상 데스크톱
Amazon AppStream 2.0 : 데스크톱 애플리케이션을 안전하게 브라우저로 스트리밍
Amazon WorkLink : 내부 웹 사이트에 대한 모바일 액세스 활성화
```
**게임 기술**
```
Amazon GameLift : 간단하고 빠르며 비용 효율적인 전용 게임 서버 호스팅
Amazon Lumberyard : AWS 및 Twitch와 통합된 크로스플랫폼 3D 게임 엔진으로 전체 소스까지 무료로 제공
```
**사물 인터넷**
```
AWS IoT Core : 디바이스를 클라우드에 연결
Amazon FreeRTOS : 마이크로 컨트롤러를 위한 IoT 운영 체제
AWS Greengrass : 디바이스를 위한 로컬 컴퓨팅, 메시징 및 동기화
AWS IoT 1-Click : 클릭 한 번으로 AWS Lambda 트리거를 생성
AWS IoT Analytics : IoT 디바이스에 대한 분석
AWS IoT Button : 클라우드 프로그래밍 가능한 대시 버튼
AWS IoT Device Defender : IoT 디바이스의 보안 관리
AWS IoT Device Management : IoT 디바이스를 온보딩, 조직화 및 원격으로 관리
AWS IoT Events : IoT 이벤트 감지 및 대응
AWS IoT SiteWise : IoT 데이터 수집기 및 인터프리터
AWS IoT Things Graph : 디바이스 및 웹 서비스를 손쉽게 연결
AWS 파트너 디바이스 카탈로그 : AWS 호환 IoT 하드웨어의 큐레이션 된 카탈로그
```
**기계 학습**
```
Amazon SageMaker : Machine Learning 모델을 대규모로 구축, 교육 및 배포
Amazon Elastic Inference : 딥 러닝 추론 가속화
Amazon Lex : 음성 및 텍스트 챗봇 구축
Amazon Polly : 텍스트를 생생한 음성으로 변환
Amazon SageMaker Ground Truth : 정확한 ML 교육 데이터 세트 구축
Amazon Translate : 자연스럽고 유창한 언어 번역
AWS Deep Learning AMI : EC2에서 딥 러닝 빠르게 시작하기
AWS DeepLens : 딥 러닝을 사용하는 비디오 카메라
Amazon Inferentia : 기계 학습 추론 칩
AWS 기반 TensorFlow : 오픈 소스 인공 지능 라이브러리
Amazon Comprehend : 텍스트에서 통찰력 확보 및 관계 파악
Amazon Forecast : 기계 학습을 사용하여 예측 정확도 개선
Amazon Personalize : 애플리케이션에 실시간 추천 기능을 구축
Amazon Rekognition : 이미지와 비디오 분석
Amazon Textract : 문서에서 텍스트와 데이터 추출
Amazon Transcribe : 자동 음성 인식
AWS Deep Learning Containers : 딥 러닝을 위한 Docker 이미지
AWS DeepRacer : ML로 움직이는 1/18 크기의 자율주행 경주용 자동차
AWS 기반 Apache MXnet : 확장 가능한 고성능 딥 러닝
```
**관리 및 커버넌스**
```
Amazon CloudWatch : 리소스 및 애플리케이션 모니터링
AWS Auto Scaling : 수요에 맞춰 여러 리소스의 규모 조정
AWS Chatbot : AWS용 ChatOps
AWS CloudFormation : 템플릿을 사용하여 리소스 생성 및 관리
AWS CloudTrail : 사용자 작업 및 API 사용 추적
AWS 명령줄 인터페이스 : AWS 서비스를 관리하는 통합 도구
AWS Config : 리소스 인벤토리 및 변경 추적
AWS Control Tower : 안전하고 규정을 준수하는 다중 계정 환경을 설정 및 관리
AWS 콘솔 모바일 애플리케이션 : 이동 중에도 리소스에 액세스
AWS License Manager : 라이선스 추적, 관리 및 제어
AWS Management Console : 웹 기반 사용자 인터페이스
AWS Managed Services : AWS의 인프라 운영 관리
AWS OpsWorks : Chef 및 Puppet을 사용해 운영 자동화
AWS Organizations : AWS 계정 전체에 걸쳐 중앙 집중식 거버넌스 및 관리
AWS Personal Health Dashboard : AWS 서비스 상태에 대한 맞춤형 보기
AWS Service Catalog : 표준화된 제품 생성 및 사용
AWS Systems Manager : 운영 통찰력 확보 및 조치 수행
AWS Trusted Advisor : 성능 및 보안 최적화
AWS Well-Architected Tool : 워크로드를 검토 및 개선
```
**미디어 서비스**
```
Amazon Elastic Transcoder : 사용이 쉽고 확장 가능한 미디어 트랜스코딩
Amazon Kinesis Video Streams : 동영상 스트림 처리 및 분석
AWS Elemental MediaConnect : 안정적이고 안전한 라이브 비디오 전송
AWS Elemental MediaConvert : 파일 기반 비디오 콘텐츠를 변환
AWS Elemental MediaLive : 라이브 비디오 콘텐츠를 변환
AWS Elemental MediaPackage : 비디오 생성 및 패키징
AWS Elemental MediaStore : 미디어 스토리지 및 간단한 HTTP 오리진
AWS Elemental MediaTailor : 비디오 개인화 및 수익화
AWS Elemental 어플라이언스 및 소프트웨어 : 온프레미스 미디어 솔루션
```
**마이그레이션 및 전송**
```
AWS Migration Hub : 한 곳에서 마이그레이션을 추적
AWS Application Discovery Service : 온프레미스 애플리케이션을 파악하여 마이그레이션을 간소화
AWS Database Migration Service : 최소한의 다운타임으로 데이터베이스를 이전
AWS DataSync : 간단하고 빠른 온라인 데이터 전송
AWS Server Migration Service : 온프레미스 서버를 AWS로 마이그레이션
AWS Snow 패밀리 : AWS에서 데이터를 마이그레이션하기 위한 물리적 디바이스
AWS Transfer for SFTP : 완전관리형 SFTP 서비스
CloudEndure 마이그레이션 : AWS로의 대규모 마이그레이션 자동화
```
**모바일**
```
AWS Amplify : 모바일 및 웹 애플리케이션의 구축과 배포
Amazon API Gateway : API 구축, 배포 및 관리
Amazon Pinpoint : 채널 전체의 사용자 참여 개인화
AWS AppSync : 여러 원본의 적절한 데이터로 앱을 대규모로 구동
AWS Device Farm : 실제 디바이스로 AWS 클라우드에서 Android, iOS 및 웹 앱을 테스트
```
**네트워킹 및 콘텐츠 전송**
```
Amazon VPC : 격리된 클라우드 리소스
Amazon API Gateway : API 구축, 배포 및 관리
Amazon CloudFront : 글로벌 콘텐츠 전송 네트워크
Amazon Route 53 : 확장 가능한 Domain Name System
AWS PrivateLink : AWS에 호스팅된 서비스에 안전하게 액세스
AWS App Mesh : 마이크로서비스 모니터링 및 제어
AWS Cloud Map : 마이크로서비스를 위한 애플리케이션 리소스 레지스트리
AWS Direct Connect : AWS로 전용 네트워크 연결
AWS Global Accelerator : 애플리케이션 가용성 및 성능 개선
AWS Transit Gateway : VPC 및 계정 연결을 손쉽게 확장
Elastic Load Balancing : 수신 트래픽을 여러 대상에 걸쳐 분산
```
**로보틱스**
```
AWS RoboMaker : 로보틱스 애플리케이션을 개발, 테스트 및 배포
```
**인공위성**
```
AWS Ground Station : 서비스로서의 완전관리형 그라운드 스테이션
```
**보안, 자격 증명 및 규정 준수**
```
AWS Identity and Access Management : 사용자 액세스 및 암호화 키 관리
Amazon Cognito : 앱을 위한 자격 증명 관리
Amazon GuardDuty : 관리형 위협 탐지 서비스
Amazon Inspector : 애플리케이션 보안 분석
Amazon Macie : 데이터를 검색, 분류 및 보호
AWS Artifact : AWS의 규정 준수 보고서에 대한 온디맨드 액세스
AWS Certificate Manager : SSL/TLS 인증서 프로비저닝, 관리 및 배포
AWS CloudHSM : 규정 준수를 위한 하드웨어 기반 키 스토리지
AWS Directory Service : Active Directory 호스팅 및 관리
AWS Firewall Manager : 중앙에서 방화벽 규칙 관리
AWS Key Management Service : 암호화 키의 제어 및 생성 관리
AWS Resource Access Manager : AWS 리소스를 공유할 수 있는 간단하고 안전한 서비스
AWS Secrets Manager : 보안 정보를 교체, 관리 및 검색
AWS Security Hub : 통합된 보안 및 규정 준수 센터
AWS Shield : DDoS 보호
AWS Single Sign-On : 클라우드 SSO(Single Sign-On) 서비스
AWS WAF : 악성 웹 트래픽 필터링
```
**스토리지**
```
Amazon Simple Storage Service(S3) : 클라우드의 확장 가능한 스토리지
Amazon Elastic Block Store(EBS) : EC2 블록 스토리지 볼륨
Amazon Elastic File System(EFS) : EC2를 위한 완전관리형 파일 시스템
Amazon FSx for Lustre : S3와 통합된 고성능 파일 시스템
Amazon FSx for Windows File Server : 완전관리형 Windows 네이티브 파일 시스템
Amazon S3 Glacier : 클라우드의 저렴한 아카이브 스토리지
AWS Backup : AWS 서비스 전체에 걸쳐 중앙 집중식 백업
AWS Snow 패밀리 : AWS에서 데이터를 마이그레이션하기 위한 물리적 디바이스
AWS Storage Gateway : 하이브리드 스토리지 통합
```

#### Microsoft Azure
**IoT(Internet of Things)**
```
Azure IoT Central : 엔터프라이즈 IoT를 위한 완전 관리형 SaaS(Software as a Solution)를 사용하여 쉽고 빠르게 IoT 배포를 만드세요.
Azure IoT 솔루션 가속기 : 검증된 결과가 포함된 일반적인 사용 사례 템플릿을 사용하여 모든 수직 시장을 위한 맞춤형 IoT 솔루션을 빌드하세요.
Azure IoT Edge : 클라우드에서 에지 디바이스로 워크로드를 이동하여 더 나은 환경을 창출하세요.
Azure IoT Hub : 에지에서 클라우드까지, 수십억 개의 IoT 디바이스를 연결하고, 관리하고, 확장하세요.
Azure Digital Twins : 실제 물리적 공간을 복제하여 차세대 IoT 공간 인텔리전스 솔루션 빌드
Azure Sphere : 계층화된 엔드투엔드 보안 기능을 사용하여 새로운 디바이스를 빌드하고 기존 장비를 더 안전하게 연결하세요.
Azure Time Series Insights : 수집한 모든 데이터를 분석, 저장 및 관리하여 성장에 도움이 되는 유용한 인사이트를 창출하세요.
Azure Maps : 보안 위치 API를 사용하여 앱에 공간 분석, 지도 및 모바일 솔루션을 추가해 보세요.
```
**AI플랫폼**

```
Cognitive Services : 스마트 API 기능을 추가하여 상황에 맞는 상호 작용 가능
Azure Bot Service : 필요에 따라 확장 가능한 지능형 서버리스 봇 서비스
머신 러닝 : 기계 학습 모델을 빌드 및 학습하고 클라우드에서 에지로 배포
Azure Databricks : 빠르고 쉬운 협업용 Apache Spark 기반 분석 플랫폼
Azure Search : 모바일 앱 및 웹앱 개발을 위한 AI 기반 클라우드 검색 서비스
```
**ID**
```
Azure Active Directory : 온-프레미스 디렉터리 동기화 및 Single Sign-On 활성화
Azure Active Directory B2C : 클라우드에서 소비자 ID 및 액세스 관리
Active Directory Domain Services : Azure 가상 머신을 도메인 컨트롤러가 없는 도메인에 연결
Azure Information Protection : 민감한 정보를 언제 어디서나 더 효과적으로 보호
```
**블록체인**
```
Azure Blockchain 서비스 : 컨소시엄 블록체인 네트워크 빌드, 관리 및 확장
Azure Blockchain Workbench : 클라우드에서 블록체인 앱을 손쉽게 프로토타이핑
Logic Apps : 코드 작성 없이 클라우드에서 데이터 액세스 및 사용 자동화
Azure Cosmos DB : 모든 규모에 맞게 전역 배포된 다중 모델 데이터베이스
```
**Microsoft Azure Stack**
```
Azure Stack : 하이브리드 클라우드 애플리케이션으로 혁신 실현
Azure Stack HCI 솔루션 : HCI(하이퍼컨버지드 인프라) 솔루션을 사용하면 온-프레미스로 가상 머신을 실행하면서 손쉽게 Azure에 연결할 수 있습니다.
```
**스토리지**
```
스토리지 계정 : 높은 내구성과 가용성, 그리고 고도의 확장성이 있는 클라우드 스토리지
Azure Backup : 데이터 보호 단순화 및 랜섬웨어로부터 보호
StorSimple : 엔터프라이즈 하이브리드 클라우드 스토리지 솔루션으로 비용 절감
Azure Data Lake Storage : Azure Blob Storage에서 빌드된 확장성이 매우 뛰어나고 안전한 Data Lake 기능
Blob Storage : 비정형 데이터용 REST 기반 개체 스토리지
Disk Storage : 가상 머신을 지원하는 영구적이고 안전한 디스크 옵션
Managed Disks : Azure 가상 머신을 위한 영구적이고 안전한 디스크 스토리지
Queue Storage : 트래픽에 따른 효율적인 앱 확장
File Storage : 표준 SMB 3.0 프로토콜을 사용하는 파일 공유
Data Box : Data Box 어플라이언스 및 솔루션을 통해 Azure로 데이터 전송 및 Edge 컴퓨팅 사용
Avere vFXT for Azure : 클라우드에서 고성능 파일 기반 워크로드 실행
Azure FXT Edge Filer : HPC 환경을 위한 하이브리드 스토리지 최적화 솔루션
Azure HPC Cache : HPC(고성능 컴퓨팅)를 위한 파일 캐싱
Archive Storage : 가끔 액세스하는 데이터의 저장을 위한 업계 최고의 가격대 스토리지
Storage Explorer : Azure Storage 리소스 탐색 및 체험
Azure NetApp Files : NetApp에서 제공하는 엔터프라이즈급 Azure 파일 공유
Azure Data Share : 외부 조직과 빅 데이터를 안전하고 간단하게 공유할 수 있는 서비스입니다.
```
**DevOps**
```
Azure DevOps : 팀 간의 코드 공유, 작업 추적 및 소프트웨어 전송을 위한 서비스
Azure Pipelines : 모든 플랫폼 및 클라우드에 지속적으로 빌드, 테스트 및 배포
Azure Boards : 팀에서 작업 계획, 추적 및 논의
Azure Repos : 프로젝트에 적합한 무제한 클라우드 기반 개인 Git 리포지토리 사용
Azure Artifacts : 패키지를 만들고 호스트한 후 팀과 공유
Azure Test Plans : 매뉴얼 및 예비 테스트 도구 키트로 안심하고 테스트 및 제공
Azure DevTest Lab : 재사용 가능 템플릿 및 아티팩트를 사용하는 환경을 신속하게 조성
DevOps Tool Integrations : Azure에서 선호하는 DevOps 도구 사용
Azure Monitor : 애플리케이션, 인프라 및 네트워크를 완전히 식별 가능
```
**Web**
```
App Service : 강력한 웹 및 모바일용 클라우드 앱을 신속하게 구축
Azure Maps : 데이터에 지리적 컨텍스트를 제공하는 간단하고 안전한 위치 인식 API
Content Delivery Network : 전 세계 광범위한 고객에게 안전하고 신뢰할 수 있는 콘텐츠 전송 보장
Azure Search : 모바일 앱 및 웹앱 개발을 위한 AI 기반 클라우드 검색 서비스
Notification Hubs : 모든 백엔드에서 모든 종류의 플랫폼으로 푸시 알림을 전송할 수 있습니다.
API Management : 개발자, 파트너 및 직원에게 안전하게 대규모로 API를 게시
Web Apps : 중요 업무용 웹앱을 대규모로 빠르게 만들고 배포
Mobile Apps : 모든 모바일 앱용 백 엔드 빌드 및 호스트
API Apps : 클라우드 API를 간편하게 빌드하고 사용
Web App for Containers : 비즈니스와 함께 확장하는 컨테이너화된 웹앱을 쉽게 배포 및 실행
Azure SignalR Service : 쉽게 실시간 웹 기능 추가전자상거래
```
**Windows Virtual Desktop**
```
Windows Virtual Desktop : 모든 디바이스에 클라우드 규모의 가상 데스크톱 환경 제공
```
**개발자 도구**
```
Visual Studio : 클라우드에서 앱을 개발하기 위한 강력하고 유연한 환경
Visual Studio Code : 클라우드 개발을 위한 강력하고 간단한 코드 편집기
SDK : 필요한 SDK 및 명령줄 도구 제공
Azure DevOps : 팀 간의 코드 공유, 작업 추적 및 소프트웨어 전송을 위한 서비스
CLI : 다중 플랫폼과 확장 가능 앱 및 서비스를 빌드, 배포, 진단 및 관리
Azure Pipelines : 모든 플랫폼 및 클라우드에 지속적으로 빌드, 테스트 및 배포
Azure Lab Services : 클래스룸, 체험, 개발과 테스트 및 기타 시나리오를 위한 랩 설정
Azure DevTest Lab : 재사용 가능 템플릿 및 아티팩트를 사용하는 환경을 신속하게 조성
개발자 도구 통합 : Azure에서 Eclipse, IntelliJ, Maven 등 익숙한 개발 도구 사용
App Configuration : 앱 구성을 위한 빠르고 확장성 있는 매개 변수 스토리지
```
**관리 및 거버넌스**
```
Azure Backup : 데이터 보호 단순화 및 랜섬웨어로부터 보호
Azure Site Recovery : 기본 제공 재해 복구 서비스로 비즈니스 운영 유지
Azure Advisor : 맞춤형의 Azure의 모범 사례 권장 엔진
Scheduler : 단순 또는 복잡하게 반복되는 일정에 따라 작업 실행
Automation : 프로세스 자동화를 통해 클라우드 관리를 간소화합니다
Traffic Manager : 높은 성능과 가용성을 위해 들어오는 트래픽 라우팅
Azure Monitor : 애플리케이션, 인프라 및 네트워크를 완전히 식별 가능
Network Watcher : 네트워크 성능 모니터링 및 진단 솔루션
Azure Service Health : Azure 서비스의 문제가 영향을 주는 경우에 대해 개인 설정된 지침 및 지원입니다.
Microsoft Azure Portal : 통합된 단일 콘솔에서 모든 Azure 제품을 구축, 관리, 모니터링
Azure Resource Manager : 앱 리소스 관리 방법 간소화
Cloud Shell : 브라우저 기반 셸 (shell)로 Azure 관리 간소화
Azure Mobile App : 언제 어디서나 Azure 리소스에 연결
Azure Policy : Azure 리소스를 위한 대규모 기업 거버넌스 및 표준 구현
Cost Management : 클라우드 비용 최적화와 동시에 잠재력 최대화
Azure의 관리형 애플리케이션 : 클라우드 제품 관리 간소화
Azure Migrate : 온-프레미스 VM을 Azure로 쉽게 검색, 평가, 크기 조정 및 마이그레이션
Azure Blueprints : 관리되는 환경을 신속하게 반복 생성
Azure Lighthouse : 서비스 공급 기업은 고객을 대규모로 정밀하게 관리할 수 있습니다.
```
**네트워킹**
```
Content Delivery Network : 세계 광범위한 고객에게 안전하고 신뢰할 수 있는 콘텐츠 전송 보장
Express Route : Azure로 연결되는 전용 프라이빗 네트워크 파이버 커넥션
Azure DNS : Azure에서 DNS 도메인 호스트
Virtual Network : 프라이빗 네트워크 프로비전, 온-프레미스 데이터 센터에 선택적으로 연결
Traffic Manager : 높은 성능과 가용성을 위해 들어오는 트래픽 라우팅
Load Balancer : 애플리케이션에 높은 가용성 및 네트워크 성능 제공
VPN Gateway : 안전한 네트워크 간 연결 설정
Application Gateway : Azure에서 안전하고 확장 가능하며 고가용성의 웹 프론트엔드 구축
Azure DDoS Protection : 분산된 서비스 거부(DDoS) 공격으로부터 애플리케이션 보호
Network Watcher : 네트워크 성능 모니터링 및 진단 솔루션
Azure Firewall : 기본 제공 고가용성, 무제한 클라우드 확장성 및 유지 관리 불필요가 적용된 기본 방화벽 기능
Virtual WAN : Azure를 통해 분기 간 연결 최적화 및 자동화
Azure Front Door : 글로벌 마이크로 서비스 기반 웹 애플리케이션을 위한 확장성 있는 보안이 강화된 제공 지점
Azure Bastion : 가상 머신에 대한 프라이빗 및 완전 관리형 RDP 및 SSH 액세스
Azure Private Link : Azure 플랫폼에 호스트된 서비스에 대한 프라이빗 액세스를 통해 Microsoft 네트워크의 데이터를 유지할 수 있습니다.
```
**데이터베이스**
```
Virtual Machines의 SQL Server : 클라우드에서 엔터프라이즈 SQL Server 앱 호스트
Azure SQL Database : 클라우드의 지능적인 관리형 SQL
Azure Cosmos DB : 모든 규모에 맞게 전역 배포된 다중 모델 데이터베이스
Azure Cache for Redis : 높은 처리량과 짧은 데이터 액세스 대기 시간으로 애플리케이션에 강력한 성능 부여
SQL Server Stretch Database : 온-프레미스 SQL Server 데이터베이스를 Azure로 동적으로 확장
Table Storage : 반구조화된 데이터 세트을 사용하는 NoSQL 키 값 스토리지
Azure Database for PostgreSQL : 앱 개발자용 PostgreSQL 데이터베이스 관리 서비스
Azure Database for MariaDB : 앱 개발자를 위한 관리 MariaDB 데이터베이스 서비스
Azure Database for MySQL : 앱 개발자용 MySQL 데이터베이스 관리 서비스
Azure Database Migration Service : 클라우드로 온-프레미스 데이터베이스 마이그레이션 간소화
Azure SQL Database Edge : 작은 공간에 설치 가능한 에지 최적화 데이터 엔진(기본 제공 AI 포함)
```
**마이그레이션**
```
Azure Site Recovery : 기본 제공 재해 복구 서비스로 비즈니스 운영 유지
Cost Management : 클라우드 비용 최적화와 동시에 잠재력 최대화
Azure Database Migration Service : 클라우드로 온-프레미스 데이터베이스 마이그레이션 간소화
Azure Migrate : 온-프레미스 VM을 Azure로 쉽게 검색, 평가, 크기 조정 및 마이그레이션
Data Box : Data Box 어플라이언스 및 솔루션을 통해 Azure로 데이터 전송 및 Edge 컴퓨팅 사용
```
**모바일**
```
App Service : 강력한 웹 및 모바일용 클라우드 앱을 신속하게 구축
Azure Maps : 데이터에 지리적 컨텍스트를 제공하는 간단하고 안전한 위치 인식 API
Notification Hubs : 모든 백엔드에서 모든 종류의 플랫폼으로 푸시 알림을 전송할 수 있습니다.
API Management : 개발자, 파트너 및 직원에게 안전하게 대규모로 API를 게시
Web Apps : 중요 업무용 웹앱을 대규모로 빠르게 만들고 배포
Mobile Apps : 모든 모바일 앱용 백 엔드 빌드 및 호스트
API Apps : 클라우드 API를 간편하게 빌드하고 사용
Azure Mobile App : 언제 어디서나 Azure 리소스에 연결
Visual Studio App Center : 지속적으로 앱 빌드, 테스트, 릴리스 및 모니터링
Xamarin : 더 빠르게 클라우드 기반 모바일 앱 만들기
Web App for Containers : 비즈니스와 함께 확장하는 컨테이너화된 웹앱을 쉽게 배포 및 실행
```
**미디어**
```
Content Delivery Network : 전 세계 광범위한 고객에게 안전하고 신뢰할 수 있는 콘텐츠 전송 보장
Media Services : 대규모 비디오 및 오디오의 인코딩, 저장 및 스트리밍
Encoding : 클라우드 규모의 스튜디오 등급 인코딩
Live and On-Demand Streaming : 비즈니스 요구를 충족시킬 수 있는 규모로 거의 모든 디바이스에 콘텐츠 전달
Azure Media Player : 모든 재생 요구를 충족하는 단일 플레이어
Content Protection : AES, PlayReady, Widevine 및 Fairplay를 사용하여 안전하게 콘텐츠 전송
```
**미디어 분석** : 음성 및 시각 서비스를 통해 비디오 파일에서 인사이트 파악
```
Video Indexer : 비디오 인사이트 활용하기
```
**보안**
```
Azure Active Directory : 온-프레미스 디렉터리 동기화 및 Single Sign-On 활성화
Azure Information Protection : 민감한 정보를 언제 어디서나 더 효과적으로 보호
Active Directory Domain Services : Azure 가상 머신을 도메인 컨트롤러가 없는 도메인에 연결
Key Vault : 키 및 기타 암호의 보호 및 유지 관리 제어
Security Center : 하이브리드 클라우드 워크로드 전체 내 보안 관리 통합 및 지능형 공격 보호 사용
Azure 전용 HSM : 클라우드에서 사용하는 하드웨어 보안 모듈 관리
VPN Gateway : 안전한 네트워크 간 연결 설정
Application Gateway : Azure에서 안전하고 확장 가능하며 고가용성의 웹 프론트엔드 구축
Azure DDoS Protection : 분산된 서비스 거부(DDoS) 공격으로부터 애플리케이션 보호
Azure Sentinel : 바로 옆에서 지켜봅니다. 전체 엔터프라이즈를 위한 인텔리전트 보안 분석
```
**분석 기능**
```
Azure Databricks : 빠르고 쉬운 협업용 Apache Spark 기반 분석 플랫폼
Azure Stream Analytics : 수백만 개의 IoT 디바이스에서 실시간 데이터 스트림 처리
SQL Data Warehouse : 엔터프라이즈급 기능을 갖춘 탄력적인 Data warehouse-as-a-Service
HDInsight : Hadoop, Spark, R Server, HBase 및 Storm 클러스터 클라우드의 프로비전
Data Factory : 편리해진 엔터프라이즈급 하이브리드 데이터 통합
Data Lake Analytics : 빅 데이터를 쉽게 만드는 분산 분석 서비스
Event Hubs : 수백만 개의 디바이스에서 원격 측정 수신
Power BI Embedded : 완벽하고 뛰어난 대화형의 데이터 시각화 기능을 애플리케이션에 포함
Azure Analysis Services : 엔터프라이즈급 분석 엔진 서비스
HDInsight용 R Server : 빅 데이터를 위한 예측 분석, 머신 러닝 및 통계 모델링
Data Catalog : 귀사의 엔터프라이즈 데이터 자산으로부터 더 많은 가치를 창출해보십시오.
Azure Data Lake Storage : Azure Blob Storage에서 빌드된 확장성이 매우 뛰어나고 안전한 Data Lake 기능
Azure Data Explorer : 빠르고 확장성이 뛰어난 데이터 탐색 서비스
Azure Data Share : 외부 조직과 빅 데이터를 안전하고 간단하게 공유할 수 있는 서비스입니다.
```
**컨테이너**
```
Azure Kubernetes Service(AKS) : Kubernetes의 배치, 관리, 운용 간소화
Service Fabric : Windows 또는 Linux에서 마이크로서비스 개발 및 컨테이너 오케스트레이션
Container Instances : 서버를 관리할 필요 없이 손쉽게 Azure에서 컨테이너 실행
Azure Function : 서버를 사용하지 않는 코드로 이벤트 처리
Container Registry : 모든 유형의 Azure 배포에서 컨테이너 이미지 저장 및 관리
Web Apps : 중요 업무용 웹앱을 대규모로 빠르게 만들고 배포
Mobile Apps : 모든 모바일 앱용 백 엔드 빌드 및 호스트
API Apps : 클라우드 API를 간편하게 빌드하고 사용
Web App for Containers : 비즈니스와 함께 확장하는 컨테이너화된 웹앱을 쉽게 배포 및 실행
Azure Red Hat OpenShift : 완전 관리형 OpenShift 서비스, Red Hat과 공동 작업
```
**컴퓨팅**
```
Virtual Machines : 빠른 속도로 Windows 및 Linux 가상 머신 프로비전
Azure Kubernetes Service(AKS) : Kubernetes의 배치, 관리, 운용 간소화
Service Fabric : Windows 또는 Linux에서 마이크로서비스 개발 및 컨테이너 오케스트레이션
App Service : 강력한 웹 및 모바일용 클라우드 앱을 신속하게 구축
Container Instances : 서버를 관리할 필요 없이 손쉽게 Azure에서 컨테이너 실행
Batch : 작업 예약 및 컴퓨팅 관리를 클라우드에서 크기 조정
Virtual Machines의 SQL Server : 클라우드에서 엔터프라이즈 SQL Server 앱 호스트
Cloud Services : 가용성과 확장성이 뛰어난 클라우드 애플리케이션 및 API 만들기
Azure 큰 인스턴스의 SAP HANA : 모든 하이퍼 스케일 클라우드 공급자의 최대 SAP HANA 워크로드 실행
Azure Function : 서버를 사용하지 않는 코드로 이벤트 처리
Virtual Machine Scale Sets : 최대 수천 대의 Linux 및 Windows 가상 머신의 관리 및 확장
Web Apps : 중요 업무용 웹앱을 대규모로 빠르게 만들고 배포
Mobile Apps : 모든 모바일 앱용 백 엔드 빌드 및 호스트
API Apps : 클라우드 API를 간편하게 빌드하고 사용
Linux Virtual Machines : Ubuntu, Red Hat 및 기타 운영 체제용 가상 컴퓨터 프로비전
Windows Virtual Desktop : 모든 디바이스에 클라우드 규모의 가상 데스크톱 환경 제공
Azure CycleCloud : 모든 규모의 HPC 및 큰 컴퓨팅 클러스터 만들기, 관리, 운영 및 최적화
Azure VMware Solution by CloudSimple : Azure에서 기본적으로 VMware 워크로드 실행
Azure Dedicated Host : Windows 및 Linux용 Azure VM을 호스트하는 전용 물리적 서버
```
**통합**
```
Event Grid : 대규모의 안정적인 이벤트 딜리버리
API Management : 개발자, 파트너 및 직원에게 안전하게 대규모로 API를 게시
Service Bus : 프라이빗 및 퍼블릭 클라우드 환경 간 연결
```
**혼합현실**
```
Azure Digital Twins : 차세대 IoT 공간 인텔리전스 솔루션 빌드
Spatial Anchors : 다중 사용자 공간 인식 혼합 현실 경험 만들기
Kinect DK : 고급 AI 센서가 포함된 개발자 키트를 사용하여 Computer Vision 및 음성 모델 빌드
원격 렌더링 : 고품질의 대화형 3D 콘텐츠를 렌더링하고 실시간으로 디바이스에 스트리밍하기
```

#### IBM IBM-Cloud



#### Google GoogleCloud(GGC)
**인프라 현대화**
```
Anthos : 온프레미스와 공용 클라우드 모두에서 실행되는 완벽하게 통합된 클라우드 서비스로 전체 애플리케이션 수명 주기를 개선하세요.
Google Cloud에서 사용하는 SAP : Google의 안전한 글로벌 인프라에서 중요한 비즈니스 애플리케이션을 실행하세요.
고성능 컴퓨팅 : 비용 효율적이고 확장 가능한 인프라로 대담한 아이디어를 획기적인 발견으로 발전시키세요.
VM 이전 : VM을 이전해 Google Cloud에서 빠르게 시작해 보세요.
데이터 센터 이전 : 리프트 앤 시프트, 애플리케이션 변경, 하이브리드 등 클라우드로 가는 길을 선택하세요.
GCP 기반 Windows : 안전하고 비용 효율적인 클라우드 환경에서 Windows 작업 부하를 실행하세요.
```
**데이터 관리**
```
데이터베이스 마이그레이션 : Google Cloud를 통해 데이터베이스 마이그레이션을 간소화하세요.
Google Cloud 데이터베이스 포트폴리오 : 현재는 물론 미래의 모든 애플리케이션을 지원하는 확장 가능한 완전 관리형 데이터베이스 서비스입니다.
GCP에서 사용하는 SQL Server : 유연성과 확장성이 높은 고성능 SQL Server 가상 머신입니다.
Google Cloud 파트너와 함께하는 Oracle® 작업 부하 관리 : 업계 최고의 파트너가 제공하는 완전 관리형 Oracle 작업 부하 서비스를 소개합니다.
```
**애플리케이션 개발**
```
Anthos : 온프레미스와 공용 클라우드 모두에서 실행되는 완벽하게 통합된 클라우드 서비스로 전체 애플리케이션 수명 주기를 개선하세요.
서버리스 솔루션 : 개발자는 인프라 관리가 아닌 코드 작성 및 배포에 집중할 수 있습니다.
Istio 솔루션 : 마이크로 서비스를 연결, 모니터링, 보안 설정하기 위한 개방형 플랫폼입니다.
하이브리드 클라우드 관리 : 안전하고 효율적인 개방형 클라우드를 사용하여 현대화하세요.
호스팅 : Google 검색 및 YouTube에서 활용하는 인프라를 통해 미디어를 제공하세요.
지속적 배포(CD) : 소스에서 프로덕션까지 엔드 투 엔드 자동화를 실현하세요.
지속적 통합(CI) : 규모에 상관없이 코드 변경 시 빠르게 피드백을 받아 보세요.
API 관리 : 보안, 가시성, 제어 기능이 향상된 환경에서 API를 관리하세요.
모바일 앱 및 사이트 : 확장성이 뛰어나고 전 세계 어디서나 사용할 수 있는 앱과 웹사이트를 제작하여 고객을 만족시키세요.
```
**스마트 비즈니스 분석 및 AI**
```
클라우드 기반 데이터 웨어하우징 : 빠르고 확장성이 뛰어나며 경제적인 완전 관리형 클라우드 데이터 웨어하우스입니다.
빅데이터 분석 : 규모 또는 복잡성에 관계없이 모든 작업 부하를 위한 통합 서버리스 데이터 분석 플랫폼입니다.
비즈니스 인텔리전스 : 모든 의사 결정권자가 유용한 정보를 이해하고 액세스할 수 있도록 하세요.
GCP에서 데이터 레이크 구축 : 경제적이며 민첩한 방식으로 대량의 데이터를 저장, 처리, 분석하세요.
마케팅 분석 : 고객에게 더욱 풍부하고 스마트한 환경을 제공하세요.
인공지능 솔루션 : 귀하의 엔터프라이즈를 위한 사전 패키징 또는 커스텀 AI 솔루션입니다.
Contact Center AI(베타) : 강력한 인공지능 모델이 학습을 통해 고객과 소통할 수 있게 되면, 영업 담당자는 보다 복잡한 문제를 처리하는 데 집중할 수 있습니다.
```
**IoT 솔루션** : 글로벌 기기 네트워크에서 유용한 비즈니스 정보를 끌어내세요.
```
Hadoop 및 Spark 클러스터의 Google Cloud Platform 마이그레이션 : 귀사에 맞는 방식에 따라 Apache Hadoop 및 Apache Spark 클러스터를 Google Cloud Platform으로 마이그레이션하세요.
```
**생산성 및 작업 방식의 혁신**
```
팀 공동작업 및 생산성 : 업계 최고 수준의 공동작업 및 생산성 도구를 사용하여 최고의 업무를 수행하세요.
기업 이동성 : 직원들에게 위치와 기기를 불문한 안전한 업무 처리를 지원하세요.
Cloud ID : 하나의 콘솔에서 사용자, 기기, 앱을 간편하게 관리하세요.
Chrome Enterprise : Chrome Enterprise로 사용자가 클라우드 기반 도구를 쉽고 빠르게 사용할 수 있도록 지원하고 IT팀이 관리 업무에서 벗어나도록 도와주세요.
기업용 드라이브 : 클라우드 기반 콘텐츠 공동작업, 파일 공유, 스토리지를 사용해 공동작업을 더욱 효율적으로 진행하세요.
Cloud Search : 기업에서 필요로 하는 Google 검색 기능의 정수를 제공합니다.
```
**업종별 솔루션**
```
교육 : 학생들에게 성공을 보장하는 도구와 교육을 제공하세요.
에너지 : Google의 강력한 기술로 급변하는 업스트림, 다운스트림, 유틸리티 시장에서 경쟁력을 확보하세요.
금융 서비스 : 대규모 데이터세트를 분석하면서 고객 정보를 안전하게 보호하세요.
게임 : 글로벌 플레이어가 참여하고 공유하는 역동적인 게임 환경을 제공하세요.
정부 기관 : 스마트하고 안전하며 검증된 인프라로 효율성을 극대화하세요.
의료 : Google의 의료 전문 제품 및 솔루션으로 의료 데이터와 프로세스를 더욱 안전하게 관리하세요.
생명과학 : 업계를 선도하는 Google Cloud 솔루션으로 새로운 발견에서부터 시장 출시에 이르는 의약품 개발 절차를 가속화해 보세요.
전자통신, 미디어, 엔터테인먼트 : Google Cloud의 속도, 유연성, 보안을 바탕으로 원활한 시청 환경을 제공하고 심층적인 잠재고객 통계 정보를 확보하세요.
소매 : 원활하고 개인화된 쇼핑 경험으로 고객을 만족시키세요.
```
**DevOps**
```
코드형 인프라 : 머신 한 대 또는 수백만 대에서 반복 가능한 작업을 자동화하세요.
구성 관리 : 모든 서버의 배포, 아키텍처, 규정 준수를 자동화하세요.
보안 비밀 관리 : 인프라 및 애플리케이션 수준의 보안 비밀을 암호화, 저장, 관리하고 감사를 수행합니다.
서버리스 컴퓨팅 : 개발자가 인프라 관리가 아닌 코드 작성에 집중하도록 하세요.
지속적 배포(CD) : 소스에서 프로덕션까지 엔드 투 엔드 자동화를 실현하세요.
지속적 통합(CI) : 규모에 상관없이 코드 변경 시 빠르게 피드백을 받아 보세요.
```
**인사관리 및 채용**
```
Cloud Talent Solution : 채용공고 검색, 프로필 검색 등을 지원하는 API로 인재채용 기술을 강화하세요.
Hire by Google : 더 빠르게 채용하세요. Hire는 G Suite와 원활하게 통합되는 공동작업 방식의 채용 앱입니다.
```
**마케팅**
```
마케팅 기술 : 마케팅 과제를 해결할 수 있는 최고의 기술을 개발하세요.
Salesforce 및 Google Cloud : Salesforce와 Google Cloud로 통합 환경을 실현하세요.
마케팅 분석 : 고객에게 더욱 풍부하고 스마트한 환경을 제공하세요
```
**중소기업 소유자**
```
웹 호스팅 : 99.95%의 가동 시간이 보장되므로 웹사이트, 블로그 또는 온라인 상점을 호스팅하고 배포할 수 있습니다.
가상 머신 : 몇 초 만에 가동할 수 있는 VM을 사용하여 인프라를 클라우드로 이동할 수 있습니다.
데이터 분석 : 다양한 소스의 모든 데이터를 연결하고 분석하세요.
Cloud Storage : 장기 보관 데이터를 안전하게 저장하세요. 파일에 빠르게 액세스하고 공유하세요.
```

#### Oracle Cloud



#### firebase
    모바일 개발에 특화? 이유는?
    DB에 접근할 때 Firebase측에서 제공하는 함수를 통해 편하게 가능.

#### heroku


### 3. 결론

AWS
 - 당신이 에이전시이고 devops에서 전문가를 가질 여력이 있다면 사용
 - SLA가 있는 생산로드의 경우
 - 소프트웨어 버전, 틀정 패치 등 인프라에 대한 추가 제어가 필요한 경우
 - 당신이 devops에서 약간의 시간을 할애 할 수 있다면 사용

Microsoft Azure
 - 

IBM IBM-Cloud
 - 

Google GoogleCloud(GGC)
 - 

Oracle Cloud
 - 

firebase
 - 

heroku
 - 소규모 개인 프로젝트를 프로모션 하고 싶은 경우
 - 프리랜서로서 자신의 포트폴리오를 서비스중인 앱으로 제시할 경우(대부분의 경우 무료 dyno 플랜으로 충분합니다.)
 - 에이전시인 경우 웹 응용 프로그램을 제공하는데 주력해야하며 고객이 운영을 철저히 관리할 것은 약속하고 선상에 전문가가 없는 경우
 - 당신이 매우 빨리 시작할 필요가 있고 시스템 관리의 오버헤드를 원하지 않고 그렇게 할 수 있는 완전한 자유가 필요하지 않다면
 - 학생인 경우 / 새로운 프레임워크를 배우고 그냥 놀고싶다면


### Reference
> https://aws.amazon.com/ko
https://azure.microsoft.com/ko-kr/
https://hyun-am-coding.tistory.com/entry/4%EB%8C%80%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9CAWS-Amazon-Bluemix-IBM-Azure-MS-Google-Cloud-Platform-Google
https://incoffee.tistory.com/3



