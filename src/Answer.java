@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String content;
    private LocalDateTime createdAt;
    private int upvotes;

    @ManyToOne
    private Question question;
    // 기타 필드 및 getter/setter...
}
