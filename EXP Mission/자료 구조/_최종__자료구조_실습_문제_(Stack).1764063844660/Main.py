'''
스택과 큐를 직접 구현이 필요한 문제는 없습니다. (경진대회/자격대회 제외)
대부분 기본 자료 구조에 규칙을 만들 수 있다면 그게 스택 혹은 큐입니다.

Python3에서는 deque를 활용해서 Stack과 Queue를 구현합니다.
'''

from collections import deque
# deque 자료형 호출

N = 5
Stack = deque() # deque 자료형 선언

for i in range(N):
    Stack.append(i) # 스택에 값 추가 : append
    print(*Stack)

for i in range(N):
    pop_num = Stack.pop() # 스택 값 추출 : pop
    print()
    print(pop_num)
    print(*Stack)