package chris.weber.homizorbackend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MyService {

    private final MyRepo myRepo;

    public void addANumber(Integer number) {
        MyNumber myNumber = new MyNumber(number);
        myRepo.save(myNumber);
    }

    public void countNumberPlus() {
        Optional<MyNumber> byId = myRepo.findById("1");
        MyNumber myNumber;
        if (byId.isPresent()){
            myNumber = byId.get();
            myNumber.setNumber(myNumber.getNumber() + 1);
        } else {
            myNumber = new MyNumber(1);
        }
        myRepo.save(myNumber);
    }

    public MyNumber getNumber() {
        return myRepo.findById("1").orElseThrow();
    }
}
