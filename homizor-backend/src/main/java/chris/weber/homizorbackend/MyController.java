package chris.weber.homizorbackend;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/number")
public class MyController {

    private MyService myService;

    @PutMapping("/add/{number}")
    public void addANumber(@PathVariable Integer number){
        myService.addANumber(number);
    }

}
