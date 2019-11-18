import requests
# api get 요청을 통해 data를 가져오는 로직
url = "https://api.bithumb.com/public/ticker/all"

data = requests.get(url).json()['data']

for name, value in data.items():
    # type의 value가 type의 dictionary와 같으면
    if type(value) == type(dict()):
        #max_price라는 키값을 통해 float값을 가져와
        maximum = float(value['max_price'])
        minimum = float(value['min_price'])
        # python은 변수 선언시 단어와 단어 사이에 `_` 사용
        coin_range = maximum - minimum
        start_price = float(value['opening_price'])

        # 시작가 + 변동폭이 최고가 보다 높은지 확인해보자
        if start_price + coin_range > maximum:
            print("{}: 상승장".format(name))
        else:
            print("{}: 하락장".format(name))
    else:
        continue