N = int(input())
h = list(map(int, input().split()))

cnt = [0] * N # 각 신선별 볼 수 있는 신선 수 저장
stack = [] # 내가 볼 수 있는 신선들

for i in range(N):
	cur_h = h[i] # 현재 높이
	cnt[i] += len(stack) # 현재 내가 보이는 봉우리의 개수

	# 현재 스택 내부에 나보다 작은 신선이 있으면 pop (다음 사람은 나에 의해 내 앞에 신선들이 가려지기 때문)
	while stack and h[stack[-1]] <= cur_h:
		stack.pop()

	# 다음 신선은 나를 볼 수 있기에 append
	stack.append(i)

print(*cnt)