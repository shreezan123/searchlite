package howard.west.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Map;

/**
 * DTO's make json serialization easier
 * @Data generates getters and setters to reduce java boilerplate
 */
@Data
@Builder
public class ResultDTO
{
   private Map<String, String> term;
   
}
