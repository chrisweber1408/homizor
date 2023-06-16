package chris.weber.homizorbackend.Storage;

import chris.weber.homizorbackend.article.Article;
import chris.weber.homizorbackend.article.ArticleRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StorageService {

    private final StorageRepo storageRepo;
    private final ArticleRepo articleRepo;

    public void addAStorage(Storage storage) {
        storageRepo.save(storage);
    }

    public Storage getAStorage(String id) {
        return storageRepo.findById(id).orElseThrow();
    }

    public List<Storage> getAllStorages() {
        return storageRepo.findAll();
    }

    public void addArticleIntoStorage(String storageId, String articleId) {
        Storage storage = storageRepo.findById(storageId).orElseThrow();
        Article article = articleRepo.findById(articleId).orElseThrow();
        storage.addAnArticle(article);
        storageRepo.save(storage);
    }
}