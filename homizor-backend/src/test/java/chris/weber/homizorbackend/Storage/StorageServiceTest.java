package chris.weber.homizorbackend.Storage;

import chris.weber.homizorbackend.article.Article;
import chris.weber.homizorbackend.article.ArticleRepo;
import chris.weber.homizorbackend.article.ArticleService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class StorageServiceTest {

    @Test
    void addAStorage() {
        //given
        Storage storage = new Storage("TestStorage");
        StorageRepo storageRepo = mock(StorageRepo.class);
        ArticleRepo articleRepo = mock(ArticleRepo.class);
        StorageService storageService = new StorageService(storageRepo, articleRepo);
        //when
        storageService.addAStorage(storage);
        //then
        verify(storageRepo).save(storage);
    }

    @Test
    void getAStorage() {
        //given
        Storage storage = new Storage("TestStorage");
        StorageRepo storageRepo = mock(StorageRepo.class);
        ArticleRepo articleRepo = mock(ArticleRepo.class);
        StorageService storageService = new StorageService(storageRepo, articleRepo);
        when(storageRepo.findById("123")).thenReturn(Optional.of(storage));
        //when
        Storage result = storageService.getAStorage("123");
        //then
        assertThat(result.getName()).isEqualTo("TestStorage");
    }

    @Test
    void getAllStorages() {
        //given
        Storage storage1 = new Storage("TestStorage");
        Storage storage2 = new Storage("TestStorage");
        StorageRepo storageRepo = mock(StorageRepo.class);
        ArticleRepo articleRepo = mock(ArticleRepo.class);
        StorageService storageService = new StorageService(storageRepo, articleRepo);
        when(storageRepo.findAll()).thenReturn(List.of(storage1, storage2));
        //when
        List<Storage> result = storageService.getAllStorages();
        //then
        assertThat(result.size()).isEqualTo(2);
    }

    @Test
    void addArticleIntoStorage() {
        //given
        //when
        //then
    }
}