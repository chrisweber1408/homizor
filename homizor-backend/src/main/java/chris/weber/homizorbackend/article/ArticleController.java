package chris.weber.homizorbackend.article;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/article")
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;

    @PostMapping("/add")
    public void addAnArticle(@RequestBody Article article){
        articleService.addAnArticle(article);
    }

    @GetMapping("/get/{id}")
    public Article getAnArticle(@PathVariable String id){
        return articleService.getAnArticle(id);
    }

    @GetMapping("/getAll")
    public List<Article> getAllArticle(){
        return articleService.getAllArticle();
    }

}