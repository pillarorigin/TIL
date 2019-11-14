balls = [0] * 4
# 공이 4개 0 0 0 0 

conunt = 0

def rec(depth):
	# 깊이를 확인
	if depth == 3: # depth가 3칸이면 (선택된 공의 갯수라 생각)
		conunt += 1
		print(conunt)
	else: # 선택된 공이 3개가 아니면 계속 돌아
		# for문을 통해서 경우의 수를 탐색
		for i in range(depth, 4): # 첫번째 공은 제외하고 
			# 중복 제거(visited)
			# if visited[i]:
			# 	visitedd[i] = 1
			balls[i] = 1
			rec(i+1)
			balls[i] = 0
			# 재귀적으로 함수 호출
			#visited 중복

rec(0)