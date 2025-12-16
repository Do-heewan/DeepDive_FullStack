nums = list(map(int, input().split()))
freq = {}  # 빈 딕셔너리 생성

# 각 숫자의 등장 횟수를 계산
for num in nums:
	freq[num] = freq.get(num, 0) + 1

# 결과 출력
for key, value in freq.items():
	print(f"{key} : {value}")
