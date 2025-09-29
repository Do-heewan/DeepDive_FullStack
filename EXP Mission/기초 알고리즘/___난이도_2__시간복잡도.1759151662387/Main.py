N = int(input())

count = 0
i = 5

# 5, 25, 125, ... 로 나누어가며 5의 개수를 센다
while i <= N:
    count += N // i
    i *= 5

print(count)