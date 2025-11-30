# 인접 행렬로 그래프 선언 예시

# 정점 개수
n = 5
# 간선 (무방향 그래프 예시)
edges = [(0, 1), (0, 2), (1, 3), (1, 4), (2, 4)]

# 인접 행렬 생성
graph = [[0] * n for _ in range(n)]
for u, v in edges:
  graph[u][v] = 1
  graph[v][u] = 1  # 무방향이므로 대칭

# 출력
print()
for row in graph:
	print(*row, end=' ')
	print()
