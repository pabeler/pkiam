package pkiam.springbootmongodockercompose.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pkiam.springbootmongodockercompose.model.Weather;
import pkiam.springbootmongodockercompose.repo.WeatherRepo;
import pkiam.springbootmongodockercompose.service.SequenceGeneratorService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
public class WeatherController {
    @Autowired
    private WeatherRepo weatherRepo;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    @GetMapping("/findAll")
    public List<Weather> getWeatherList() {
        return weatherRepo.findAll();
    }

    @PostMapping("/add")
    public Weather addWeather(@RequestBody Weather weather) {
        weather.setId(sequenceGeneratorService.generateSequence(Weather.SEQUENCE_NAME));
        return weatherRepo.save(weather);
    }
}
