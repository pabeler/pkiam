package pkiam.springbootmongodockercompose.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import pkiam.springbootmongodockercompose.model.Weather;

import java.util.List;

public interface WeatherRepo extends MongoRepository<Weather, Integer> {
    Weather findTopByCityNameOrderByDateDesc(String cityName);

    List<Weather> findByCityName(String cityName);
}
