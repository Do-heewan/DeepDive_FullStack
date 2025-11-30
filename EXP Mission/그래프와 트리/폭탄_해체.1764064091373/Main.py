N, M = map(int, input().split())

graph = {}
line = []
for _ in range(M):
	a, b = map(int, input().split())
	line.append([a, b])
	graph[a] = graph.get(a, 0) + 1
	graph[b] = graph.get(b, 0) + 1

res = []
for i, l in enumerate(line):
	a, b = l[0], l[1]
	if graph[a] > 1 and graph[b] > 1:
		res.append(i+1)

if res:
	print(*res)
else:
	print(-1)
