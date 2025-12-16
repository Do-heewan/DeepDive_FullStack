meetings = [(1, 4), (3, 5), (0, 6), (5, 7), (8, 9), (5, 9)]

# 회의를 끝나는 시간 기준으로 정렬한다.
meetings.sort(key = lambda x : x[1])

result = []
last_end_time = 0

for m in meetings:
	start, end = m[0], m[1]
	if start >= last_end_time:
		result.append(m)
		last_end_time = end

print(*result, "")
print(len(result))