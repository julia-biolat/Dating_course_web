@RestController
@RequestMapping("/api/qa")
public class QaController {
    @Autowired
    private QaService qaService;

    @PostMapping("/questions")
    public ResponseEntity<Question> postQuestion(@RequestBody Question question) {
        Question postedQuestion = qaService.postQuestion(question);
        return new ResponseEntity<>(postedQuestion, HttpStatus.CREATED);
    }

    @PostMapping("/answers")
    public ResponseEntity<Answer> postAnswer(@RequestBody Answer answer) {
        Answer postedAnswer = qaService.postAnswer(answer);
        return new ResponseEntity<>(postedAnswer, HttpStatus.CREATED);
    }

    @GetMapping("/questions/{questionId}/answers")
    public ResponseEntity<List<Answer>> getAnswersByQuestionId(@PathVariable Long questionId) {
        List<Answer> answers = qaService.getAnswersByQuestionId(questionId);
        return ResponseEntity.ok(answers);
    }
    // 기타 엔드포인트...
}
