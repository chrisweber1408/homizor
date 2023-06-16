package chris.weber.homizorbackend.article;

import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;

class ArticleServiceTest {

    @Test
    void addAnArticle() {
        //given
        Article article = new Article("TestArticle");
        ArticleRepo articleRepo = mock(ArticleRepo.class);
        ArticleService articleService = new ArticleService(articleRepo);
        //when
        articleService.addAnArticle(article);
        //then
        verify(articleRepo).save(article);
    }

    @Test
    void getAnArticle() {
        //given
        Article article = new Article("TestArticle");
        ArticleRepo articleRepo = mock(ArticleRepo.class);
        ArticleService articleService = new ArticleService(articleRepo);
        when(articleRepo.findById("123")).thenReturn(Optional.of(article));
        //when
        Article result = articleService.getAnArticle("123");
        //then
        assertThat(result.getName()).isEqualTo("TestArticle");
    }

    @Test
    void getAllArticle() {
    }

    @Test
    void deleteArticle() {
    }
}