package chris.weber.homizorbackend.article;

import chris.weber.homizorbackend.Storage.Storage;
import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Article {
    @Id
    private final String id = UUID.randomUUID().toString();
    private String name;
    @OneToOne
    @Nullable
    private Storage storage;
}