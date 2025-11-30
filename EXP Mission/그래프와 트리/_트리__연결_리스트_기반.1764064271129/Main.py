# 연결 리스트 기반 그래프 선언 예시

class Node:
    def __init__(self, vertex):
        self.vertex = vertex
        self.next = None

class Graph:
    def __init__(self, n):
        self.n = n
        self.adj = [None] * n  # 각 정점의 head 노드 저장

    def add_edge(self, u, v):
        # u -> v
        node = Node(v)
        node.next = self.adj[u]
        self.adj[u] = node

        # 무방향 그래프라면 v -> u도 추가
        node = Node(u)
        node.next = self.adj[v]
        self.adj[v] = node

    def print_graph(self):
        for i in range(self.n):
            print(f"{i}:", end=" ")
            temp = self.adj[i]
            while temp:
                print(f"{temp.vertex}", end=" -> ")
                temp = temp.next
            print("None")

# 예시 사용
g = Graph(5)
edges = [(0, 1), (0, 2), (1, 3), (1, 4), (2, 4)]
for u, v in edges:
    g.add_edge(u, v)
print()
g.print_graph()
