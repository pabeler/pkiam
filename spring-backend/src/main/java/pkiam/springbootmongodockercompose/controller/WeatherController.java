package pkiam.springbootmongodockercompose.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pkiam.springbootmongodockercompose.model.Weather;
import pkiam.springbootmongodockercompose.repo.WeatherRepo;
import pkiam.springbootmongodockercompose.service.SequenceGeneratorService;

import java.util.Date;
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
        try {
            Date currentDate = weatherRepo.findTopByCityNameOrderByDateDesc(weather.getCityName()).getDate();
            if (currentDate != null) {
                if (weatherRepo.findTopByCityNameOrderByDateDesc(weather.getCityName()).getDate().equals(weather.getDate())) {
                    return null;
                }
            }
        } catch (NullPointerException ignored) {}
        weather.setId(sequenceGeneratorService.generateSequence(Weather.SEQUENCE_NAME));
        return weatherRepo.save(weather);
    }

    @GetMapping("/lastDateInDatabase/{cityName}")
    public Date getLastDateInDatabase(@PathVariable String cityName) {
        return weatherRepo.findTopByCityNameOrderByDateDesc(cityName).getDate();
    }

    @GetMapping("/findByCityName/{cityName}")
    public List<Weather> getWeatherByCityName(@PathVariable String cityName) {
        return weatherRepo.findByCityName(cityName);
    }
}
