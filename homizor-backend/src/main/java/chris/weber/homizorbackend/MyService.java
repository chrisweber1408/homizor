package chris.weber.homizorbackend;

import org.springframework.stereotype.Service;

@Service
public class MyService {

    private MyRepo myRepo;

    public void addANumber(Integer number) {
        MyNumber myNumber = new MyNumber(number);
        myRepo.save(myNumber);
    }
}
