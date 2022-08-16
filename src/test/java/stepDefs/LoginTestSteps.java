package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginTestSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@Given("User is on SauceDemo login page")
	public void user_is_on_SauceDemo_login_page() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	    
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(5000);
	}

	@When("User enters Valid Username {string}")
	public void user_enters_Valid_Username(String UserNameVal) {
	    // Write code here that turns the phrase above into concrete actions
	    
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys(UserNameVal);
		
		
	}


	@When("User enterd Valid Password {string}")
	public void user_enterd_Valid_Password(String PasswordVal) {
	    // Write code here that turns the phrase above into concrete actions
		
		WebElement Password = driver.findElement(By.id("password"));
	    Password.sendKeys(PasswordVal);
	}

	@When("User clicks on Login button")
	public void user_clicks_on_Login_button() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement LogBtn = driver.findElement(By.id("login-button"));
	    LogBtn.click();
	}

	@Then("User lands on the Product Page")
	public void user_lands_on_the_Product_Page() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Successfull Login");
	}

	@When("User enters Invalid Username {string}")
	public void user_enters_Invalid_Username(String UserNameVal) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys(UserNameVal);
	}

	@When("User enterd Invalid Password {string}")
	public void user_enterd_Invalid_Password(String PasswordVal) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement Password = driver.findElement(By.id("password"));
	    Password.sendKeys(PasswordVal);
	}

	@Then("User gets the error message as {string}")
	public void user_gets_the_error_message_as(String ExpMsg) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement ErrorMsg = driver.findElement(By.xpath("//*[@class='error-message-container error']"));
		
		String ActualMsg = ErrorMsg.getText();
	    
		Assert.assertEquals(ExpMsg, ActualMsg);
		
	}
	


}
