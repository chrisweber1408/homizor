package chris.weber.homizorbackend.article;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepo articleRepo;
    public void addAnArticle(Article article) {
        articleRepo.save(article);
    }

    public Article getAnArticle(String id) {
        return articleRepo.findById(id).orElseThrow();
    }

    public List<Article> getAllArticle() {
        return articleRepo.findAll();
    }

    public void deleteArticle(String id) {
        articleRepo.deleteById(id);
    }
}