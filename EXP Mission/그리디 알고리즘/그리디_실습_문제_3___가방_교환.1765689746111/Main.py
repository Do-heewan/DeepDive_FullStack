# (무게, 가치)
items = [(10, 60), (20, 100), (30, 120)]
capacity = 50


total_value = 0
bag = []

for weight, value in items:
    if capacity >= weight:
        # 전부 넣을 수 있는 경우
        capacity -= weight
        total_value += value
        bag.append((weight, value))
    else:
        # 일부만 넣는 경우 (분할)
        fraction = capacity / weight
        total_value += value * fraction
        bag.append((capacity, value * fraction))
        break

print(*bag, "")
print(total_value)