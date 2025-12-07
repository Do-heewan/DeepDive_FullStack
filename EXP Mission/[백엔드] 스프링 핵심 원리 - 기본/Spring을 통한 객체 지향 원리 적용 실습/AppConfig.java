@Configuration
public class AppConfig {

    @Bean
    public MemberService memberService() {
        return new MemberServiceImpl(memoryMemberRepository());
    }

    @Bean
    public OrderService orderService() {
        return new OrderServiceImpl(
            memoryMemberRepository(),
            discountPolicy()
        );
    }

    @Bean
    public MemoryMemberRepository memoryMemberRepository() {
        return new MemoryMemberRepository();
    }

    @Bean
    public DiscountPolicy discountPolicy() {
        // return new FixDiscountPolicy();
        return new RateDiscountPolicy();
    }
}
