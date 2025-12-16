coins = [1, 5, 10]
#coins = [1, 3, 8]

amount = 12

result = []
count = 0
coins.sort(reverse = True)

for coin in coins:
	while amount >= coin:
		amount -= coin
		result.append(coin)
		count += 1

print(count)
print(*result)
