package chris.weber.homizorbackend;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class MyNumber {

    @Id
    private final String id = "1";
    private Integer number;

}
