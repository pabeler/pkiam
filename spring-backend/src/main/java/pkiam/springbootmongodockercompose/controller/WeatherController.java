package pkiam.springbootmongodockercompose.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pkiam.springbootmongodockercompose.entity.Weather;
import pkiam.springbootmongodockercompose.repo.WeatherRepo;

import java.util.List;

@RestController
@RequestMapping("/weather")
public class WeatherController {
    @Autowired
    private WeatherRepo weatherRepo;

    @GetMapping("/findAll")
    public List<Weather> getWeather() {
        return weatherRepo.findAll();
    }

    @PostMapping("/add")
    public Weather addWeather(@RequestBody Weather weather) {
        return weatherRepo.save(weather);
    }
}
