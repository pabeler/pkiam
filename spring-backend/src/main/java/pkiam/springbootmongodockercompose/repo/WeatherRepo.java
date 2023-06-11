package pkiam.springbootmongodockercompose.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import pkiam.springbootmongodockercompose.model.Weather;

public interface WeatherRepo extends MongoRepository<Weather, Integer> {
}
