package chris.weber.homizorbackend;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class MyController {

    private final MyService myService;

    @PutMapping("/add/{number}")
    public void addANumber(@PathVariable Integer number){
        myService.addANumber(number);
    }

    @PatchMapping("/count")
    public void countNumberPlus(){
        myService.countNumberPlus();
    }

    @GetMapping("/get")
    public MyNumber getNumber(){
        return myService.getNumber();
    }

}
