package chris.weber.homizorbackend.article;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.*;

class ArticleServiceTest {

    @Test
    void addAnArticle() {
        //given
        Article article = new Article("TestArticle");
        ArticleRepo articleRepo = Mockito.mock(ArticleRepo.class);
        ArticleService articleService = new ArticleService(articleRepo);
        //when
        articleService.addAnArticle(article);
        //then
        Mockito.verify(articleRepo).save(article);
    }

    @Test
    void getAnArticle() {
        //given

        //when
        //then
    }

    @Test
    void getAllArticle() {
    }

    @Test
    void deleteArticle() {
    }
}