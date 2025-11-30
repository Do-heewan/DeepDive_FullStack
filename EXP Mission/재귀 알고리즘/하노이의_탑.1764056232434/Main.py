def hanoi_state_after_k_moves(n, k):
    # 각 원반이 어느 막대에 있는지 추적 (1-indexed)
    disk_position = [1] * (n + 1)  # disk_position[i] = i번 원반이 있는 막대 번호
    
    def hanoi_moves(n, src, dst, aux, move_count, max_moves):
        """하노이의 탑 이동을 시뮬레이션하고 K번째까지만 수행"""
        if n == 0 or move_count[0] >= max_moves:
            return
        
        # n-1개의 원반을 src에서 aux로 이동
        hanoi_moves(n - 1, src, aux, dst, move_count, max_moves)
        
        if move_count[0] < max_moves:
            # n번 원반을 src에서 dst로 이동
            move_count[0] += 1
            disk_position[n] = dst
        
        if move_count[0] >= max_moves:
            return
        
        # n-1개의 원반을 aux에서 dst로 이동
        hanoi_moves(n - 1, aux, dst, src, move_count, max_moves)
    
    # K번 이동 수행
    move_count = [0]
    hanoi_moves(n, 1, 3, 2, move_count, k)
    
    # 각 막대별 원반 크기 합 계산
    rod_sums = [0, 0, 0, 0]  # 1, 2, 3번 막대 (0번 인덱스는 사용 안 함)
    for disk_size in range(1, n + 1):
        rod = disk_position[disk_size]
        rod_sums[rod] += disk_size
    
    return rod_sums[1], rod_sums[2], rod_sums[3]

n = 20  # 원반 개수
k = int(input())

rod1_sum, rod2_sum, rod3_sum = hanoi_state_after_k_moves(n, k)

print(rod1_sum, rod2_sum, rod3_sum)
