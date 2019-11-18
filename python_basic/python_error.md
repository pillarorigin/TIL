### 1. requests 모듈 에러.
ModuleNotFoundError: No module named 'requests'
원인: 해당 모듈이 설치되어 있지 않아서 발생하는 문제
해결: pip install requests (or pip3 install requests)

### 2. pylint 가져올 수 없는 에러. (vscode)
Unable to import 'requests'pylint(import-error)
원인: The Python extension is most likely using the wrong version of Pylint. (python확장은 잘못된 버전의 pylint를 사용하고 있을 가능성이 큼)
해결: 
    1. 정규화된 python 실행 파일을 가리키도록 작업 공간 설정 구성
    step 1. settings.json을 연다.
    step 2. 파이선 실행 파일의 완전한 경로를 식별 후
    step 3. pythonPath 설정 ("python.pythonPath": "/users/xxx/bin/python")

    2. 활성화된 가상 환경에서 vs 코드 열기
    step 1. 터미널 창에서 해당 경로로 접근 후 ($cd ~)
    step 2. $pip install pylint
    strp 3. vscode를 다시 시작.

### 3. 