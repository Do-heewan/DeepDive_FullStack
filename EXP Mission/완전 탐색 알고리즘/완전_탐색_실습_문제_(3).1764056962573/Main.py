M = int(input())
matrix = [[0] * 5 for _ in range(5)]

# Dx/Dy 선언하기
dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]

for _ in range(M):
	x, y = map(int, input().split())
	for i in range(4):
		# 조회하기
		nx = x + dx[i]
		ny = y + dy[i]

		if 0 <= nx < 5 and 0 <= ny < 5:
			matrix[nx][ny] += 1

for col in matrix:
	print(*col, end=' \n')

