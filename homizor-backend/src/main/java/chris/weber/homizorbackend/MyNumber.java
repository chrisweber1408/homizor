package chris.weber.homizorbackend;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
public class MyNumber {

    @Id
    private final String id = UUID.randomUUID().toString();
    private Integer number;

}
