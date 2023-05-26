package chris.weber.homizorbackend.Storage;

import chris.weber.homizorbackend.article.Article;
import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Storage {

    @Id
    private final String id = UUID.randomUUID().toString();
    private String name;
    @OneToMany
    @Nullable
    private List<Article> articleList = new ArrayList<>();

    public Storage(String name) {
        this.name = name;
    }

    public void addAnArticle(Article article){
        this.articleList.add(article);
    }


}