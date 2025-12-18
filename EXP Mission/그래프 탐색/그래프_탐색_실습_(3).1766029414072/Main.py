from collections import deque

dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]

def bfs(x, y):
	Q = deque()
	Q.append([x, y])
	visited[x][y] = 1

	while Q:
		cx, cy = Q.popleft()

		for i in range(4):
			nx = cx + dx[i]
			ny = cy + dy[i]

			if 0 <= nx < N and 0 <= ny < N:
				if not visited[nx][ny] and matrix[nx][ny] == 0:
					Q.append([nx, ny])
					visited[nx][ny] = 1

N = int(input())

matrix = []
for _ in range(N):
	matrix.append(list(map(int, input().split())))

visited = [[0] * N for _ in range(N)]

bfs(0, 0)

for v in visited:
	print(*v, "")