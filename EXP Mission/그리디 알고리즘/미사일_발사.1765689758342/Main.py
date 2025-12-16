def uclid(x, y):
	return x ** 2 + y ** 2

N = int(input())

booster = {}
answer = 0
for _ in range(N):
	x, y, t = map(int, input().split())
	time = 2 * uclid(x, y)
	
	start = t
	end = t + time

	booster[start] = booster.get(start, 0) + 1
	booster[end] = booster.get(end, 0) - 1

	answer += time

current = 0
max_overlap = 0

for time in sorted(booster):
	current += booster[time]
	max_overlap = max(max_overlap, current)

print(answer - max_overlap)