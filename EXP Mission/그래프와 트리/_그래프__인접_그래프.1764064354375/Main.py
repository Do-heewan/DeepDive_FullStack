# 인접 리스트로 그래프 선언 예시

# 정점 개수
n = 5
# 간선 (무방향 그래프 예시)
edges = [(0, 1), (0, 2), (1, 3), (1, 4), (2, 4)]

# 인접 리스트 생성
graph = [[] for _ in range(n)]
for u, v in edges:
    graph[u].append(v)
    graph[v].append(u)  # 무방향이므로 반대쪽도 추가

# 출력
print()
for i in range(n):
    print(f"{i}: {graph[i]}")
