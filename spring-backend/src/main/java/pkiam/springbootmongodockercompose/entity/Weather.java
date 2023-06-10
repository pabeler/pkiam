package pkiam.springbootmongodockercompose.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "Weather")
public class Weather {
    @Id
    private Integer id;
    private String date;
    private String cityName;
    private String description;
    private String icon;
    private String temp;
    private String feelsLike;
    private String pressure;
    private String humidity;
    private String windSpeed;
    private String windDeg;
}
