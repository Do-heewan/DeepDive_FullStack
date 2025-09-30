N, M, start = map(int, input().split())
tree = list(map(int, input().split()))
Q = int(input())
move = list(input().split())

target = start - 1
count = 0
base_growth = 0  # 전체적인 성장량을 추적

for i in range(Q):
	# 현재 위치의 실제 나무 크기 계산
	actual_size = tree[target] + base_growth
	
	# 수확 가능한지 확인
	if actual_size >= M:
			count += actual_size
			tree[target] = -base_growth  # 수확 후 크기를 0으로 만들기 위해
	
	# 이동 처리
	if move[i] == "L":
			target = (target - 1) % N
	elif move[i] == "R":
			target = (target + 1) % N
	# "S"인 경우 target은 그대로

	# 모든 나무가 1씩 성장 (base_growth로 일괄 처리)
	base_growth += 1

print(count)