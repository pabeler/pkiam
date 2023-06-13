package pkiam.springbootmongodockercompose.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "Weather")
public class Weather {
    @Transient
    public static final String SEQUENCE_NAME = "weather_sequence";

    @Id
    private long id;

    private Date date;
    private String cityName;
    private String description;
    private String icon;
    private String temp;
    private String feelsLike;
    private String pressure;
    private String humidity;
    private String windSpeed;
    private String windDeg;
    private String cloudiness;
}
