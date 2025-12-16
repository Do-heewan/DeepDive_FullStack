import math

# 데이터를 입력받으세요.
weight, reps = map(int, input().split())
result = math.trunc(weight * (1 + (reps / 30)))

print(result)