@Service
public class QaService {
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private AnswerRepository answerRepository;

    public Question postQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Answer postAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    public List<Answer> getAnswersByQuestionId(Long questionId) {
        return answerRepository.findByQuestionIdOrderByUpvotesDesc(questionId);
    }
    // 기타 비즈니스 로직...
}
