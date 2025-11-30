N, M = map(int, input().split())
matrix = list()
for _ in range(M):
	matrix.append(list(map(int, input().split())))

answer = 0
# 1의 개수를 세는 2중 반복문 작성하기
for i in range(M):
	for j in range(N):
		if matrix[i][j] == 1:
			answer += 1

print(answer)