N, M = map(int, input().split())
matrix = list()

for _ in range(M):
	matrix.append(list(map(int, input().split())))

# 각 열(column)마다 1의 개수 세기
for i in range(N):
	# 각 열의 1의 개수를 초기화 한 후 열 별로 1의 개수를 세기
	count = matrix[0][i] + matrix[1][i] + matrix[2][i]
	print(count)
