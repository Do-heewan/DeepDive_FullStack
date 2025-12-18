### BFS 구현하기

import sys
from collections import deque
input = sys.stdin.readline

N, M = map(int, input().split()) # N : 정점의 개수, M : 간선의 개수
G = [[] for _ in range(N+1)]

for _ in range(M):
	s, e = map(int, input().split())
	G[s].append(e)

# 번호가 큰 노드부터 탐색
for g in G:
	g.sort(reverse=True)

# 노드를 다시 방문하지 않게 위한 방문 관리 변수가 필요하다.
V = [False for _ in range(N+1)]

# q = deque()
# q.append(1)
# V[1] = True

# while q:
#     current_Node = q.popleft()
#     print(current_Node) # 현재 위치를 출력하는 print문

#     for next_Node in G[current_Node]:
#         if not V[next_Node]: # 방문하지 않은 노드의 번호를 확인한다.
#             q.append(next_Node)
#             V[next_Node] = True

def dfs(n):
	V[n] = True
	print(n)

	for ix in G[n]:
		if not V[ix]:
			dfs(ix)

dfs(1)