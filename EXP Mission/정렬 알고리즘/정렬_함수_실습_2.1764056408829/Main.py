import sys
input = sys.stdin.readline

arr = [[1, 1], [2, 3], [3, 1], [4, 3], [5, 2], [6, 4]]
arr.sort()
'''
배열의 두 번째 요소가 더 클 수록 우선 순위가 높고, 그 값이 간다면 첫 번째 요소가 더 작을 수록 우선 순위가 높게 정렬하시오.
'''
arr.sort(key=lambda x : -x[1])
print(*arr, sep=" ")