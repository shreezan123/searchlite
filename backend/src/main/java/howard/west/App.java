package howard.west;

import com.google.gson.Gson;
import howard.west.dto.ResultDTO;
import howard.west.cs276.assignments.Index;
import howard.west.cs276.assignments.Query;
import lombok.extern.slf4j.Slf4j;

import static spark.Spark.before;
import static spark.Spark.get;
import static spark.Spark.options;
import static spark.Spark.port;

import java.util.Map;
import java.util.TreeMap;

@Slf4j
public class App {

  //copied from https://sparktutorials.github.io/2016/05/01/cors.html
  // Enables CORS on requests. This method is an initialization method and should be called once.
  private static void enableCORS(final String origin, final String methods, final String headers) {

    options("/*", (request, response) -> {

      String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
      if (accessControlRequestHeaders != null) {
        response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
      }

      String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
      if (accessControlRequestMethod != null) {
        response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
      }

      return "OK";
    });

    before((request, response) -> {
      response.header("Access-Control-Allow-Origin", origin);
      response.header("Access-Control-Request-Method", methods);
      response.header("Access-Control-Allow-Headers", headers);
      // Note: this may or may not be necessary in your particular application
      response.type("application/json");
    });
  }

  public static void main(String[] args) {
    // by default this is 4567 in order to prevent collisions with
    // other things that may be running on the machine.  We are running in a docker container
    // so that is not an issue

    final Map<String, Map<String, String>> dummyData = new TreeMap<String, Map<String, String>>();
    final Map<String, String> puppies = new TreeMap<String, String>();
    final Map<String, String> chelseafc = new TreeMap<String, String>();
  
    
    puppies.put("http://www.adoptapet.com/adopt-a-shelter-puppy", "Housebreaking: Before you adopt, consider how much time your new family member will spend alone. Remember...");
    puppies.put("http://www.akc.org/puppies/", "Congratulations! You've made the important decision to bring a puppy into your heart as well as your home. Now...");
    puppies.put("https://en.wikipedia.org/wiki/Puppy", "A puppy is a juvenile dog. Some puppies can weigh 1–3 lb (0.45–1.36 kg), while larger ones can weigh up to 15–23 lb (6.8–10.4 kg). All healthy puppies...");

    chelseafc.put("https://twitter.com/search?q=chelsea+fc&ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Esearch", "Welcome to the official Twitter account of Premier League champions Chelsea Football Club...");
    chelseafc.put("https://www.chelseafc.com/", "Home of the Champions...");
    chelseafc.put("https://en.wikipedia.org/wiki/Chelsea_F.C.", "Chelsea Football Club (/ˈtʃɛlsiː/) is an English professional football club based in Fulham, London, that competes in the Premier League, of which they are reigning champions. Founded in 1905...");

    dummyData.put("Puppies", puppies);
    dummyData.put("Chelsea FC", chelseafc);

  
    port(8080);

    enableCORS("http://frontend.howard.test:4200", "GET", "");

    //GSON is used to map to json.
    Gson gson = new Gson();

    //String indexPath = "output/tiny-index";
    // TODO: Copy your full sized generated index to this path and uncomment this line:
    String indexPath = "output/index";

    //the route callback is a lambda function
    get("/", (req, res) -> {
      log.info("Loading the index");
      return "hello world";
    });
    get(
      "/search",
      "application/json",
<<<<<<< HEAD
      (req, res) -> Query.mainQuery(indexPath, req.queryMap("q").value()),
=======
      (req, res) -> ResultDTO.builder().term(dummyData.get(req.queryMap("q").value())),
      //(req, res) -> ResultDTO.builder().term(req.queryMap("q").value()),
>>>>>>> 6d6731963340573a8ad020e505f8900bb6eed4bc
      gson::toJson); // <- this is called a method reference
  }
}
