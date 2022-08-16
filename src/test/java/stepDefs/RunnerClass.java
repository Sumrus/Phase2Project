package stepDefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		plugin = {"html:target/htm-cucumber","json:target/cucumber.json"}, // to generate report
		
		features= "src/test/java/features",
		tags= {"@Regression,@Sanity"},
		glue= {"stepDefs"}

)


public class RunnerClass {
	
	

}
