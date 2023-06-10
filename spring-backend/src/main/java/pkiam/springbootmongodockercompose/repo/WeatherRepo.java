package pkiam.springbootmongodockercompose.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import pkiam.springbootmongodockercompose.entity.Weather;

public interface WeatherRepo extends MongoRepository<Weather, Integer> {
}
