import sys
input = sys.stdin.readline

arr = [1, 5, 2, 7, 6, 2]

# sorted() 함수를 사용한 정렬
# sorted() 함수는 원본 리스트를 변경하지 않고 정렬된 새로운 리스트를 반환합니다.
sorted_arr = sorted(arr)


# 리스트의 sort() 메소드를 사용하여 직접 정렬
# sort() 메소드는 원본 리스트 자체를 정렬하여 변경합니다.
arr.sort()
print(*arr) 


arr2 = [1, 5, 2, 7, 6, 2]
#sort() 메소드에 정렬 조건(키)를 지정하여 정렬하기
# 아래 예제는 내림차순 정렬을 위해 각 요소에 -1을 곱하는 람다 함수를 사용합니다.
arr2.sort(key = lambda x : -x)
print(*arr2)
