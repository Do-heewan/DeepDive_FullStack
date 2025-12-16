from collections import Counter

N, M = map(int, input().split())
my_item = Counter(input().split())
your_item = Counter(input().split())

for _ in range(M):
	give, take = input().split()

	if my_item[give] != 0 and your_item[take] != 0:
		my_item[give] -= 1
		my_item[take] = my_item.get(take, 0) + 1

		your_item[take] -= 1
		your_item[give] = your_item.get(give, 0) + 1

res = []
for k, v in my_item.items():
	if v != 0:
		res.append(k)

res.sort()
print(*res)