from collections import deque

def bfs(n):
	Q = deque()
	Q.append(n)
	visited[n] = True
	cnt = 0
	
	while Q:
		c = Q.popleft()

		for g in graph[c]:
			if not visited[g]:
				visited[g] = True
				Q.append(g)

				cnt += 1

	return cnt

T = int(input())

for _ in range(T):
	N, M = map(int, input().split())

	graph = [[] for _ in range(N+1)]
	visited = [False] * (N+1)
	for _ in range(M):
		a, b = map(int, input().split())
		graph[a].append(b)
		graph[b].append(a)

	print(bfs(1))