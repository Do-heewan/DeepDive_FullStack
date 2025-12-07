public class MemberApp {
    public static void main(String[] args) {
		...

        ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);
        MemberService memberService = applicationContext.getBean(MemberService.class);

        ...
    }
}
