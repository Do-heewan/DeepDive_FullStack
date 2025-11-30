N, M, K = map(int, input().split())

panda = []
for _ in range(K):
	panda.append(list(map(int, input().split())))

score = [[0] * (M+1) for _ in range(N+1)]
for i in range(N+1):
	for j in range(M+1):
		for p in panda:
			if i == p[0] and j == p[1]:
				score[i][j] = 1_000_000_000
			distance = (i - p[0]) ** 2 + (j - p[1]) ** 2
			score[i][j] += distance

result = []
for ix in score:
	result.append(min(ix))

print(min(result))