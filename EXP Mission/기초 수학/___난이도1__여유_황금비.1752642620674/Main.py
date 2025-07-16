T = int(input())

count = [0] * T
for i in range(T):
	A, B = map(int, input().split())

	bigger = max(A, B)
	smaller = min(A, B)

	min_num = smaller * 1.6
	max_num = smaller * 1.63

	if (bigger >= min_num) and (bigger <= max_num):
		count[i] += 1

print(sum(count))