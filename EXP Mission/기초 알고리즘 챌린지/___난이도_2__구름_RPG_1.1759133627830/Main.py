import math

def is_prime(x):
	if x == 2:
		return True
	if x % 2 == 0:
		return False

	for i in range(3, int(math.sqrt(x)) + 1, 2):
			if x % i == 0:
					return False
	return True

N = int(input())

armor = []
for _ in range(N):
	armor.append(int(input()))

for a in armor:
	print("Yes" if is_prime(a) else "No")