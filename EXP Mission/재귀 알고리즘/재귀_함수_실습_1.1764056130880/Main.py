import sys
sys.setrecursionlimit(1000)
# Python3의 경우 재귀 제한을 풀어줘야한다.
# 기본은 1000인 경우가 있고, 넉넉하게 1_000_000 정도로 숫자를 조정해주면 좋다.

def countdown(N):
	if (N == 0): return
	
	print(N)
	countdown(N-1)

countdown(10)