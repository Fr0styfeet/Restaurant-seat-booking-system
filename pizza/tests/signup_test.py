from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize the Chrome WebDriver
driver = webdriver.Chrome()

# Open your MERN application (make sure it’s running)
driver.get('http://localhost:3000')  # Adjust to your signup URL

# Wait for the signup form elements to be visible
try:
    name_input = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.NAME, 'Name'))  # Adjust as needed
    )
    
    email_input = driver.find_element(By.NAME, 'email')  # Adjust as needed
    address_input = driver.find_element(By.NAME, 'location')  # Adjust as needed
    password_input = driver.find_element(By.NAME, 'password')  # Adjust as needed
    signup_button = driver.find_element(By.ID, 'signup-button')  # Adjust as needed

    # Fill in the signup form
    name_input.send_keys('Your Name')  # Replace with the actual name
    email_input.send_keys('your_email@example.com')  # Replace with your actual email
    address_input.send_keys('Your Address')  # Replace with your actual address
    password_input.send_keys('your_password')  # Replace with your actual password
    
    # Click the signup button
    # Use JavaScript to click the button
    driver.execute_script("arguments[0].click();", signup_button)
    signup_button.click()

    # # Wait for the next page to load and check for a success message
    WebDriverWait(driver, 100).until(
        EC.visibility_of_element_located((By.ID, 'welcome-message'))  # Adjust as needed
    )

    print("Signup successful!")

except Exception as e:
    print(f"An error occurred during signup: {e}")

finally:
    # Close the browser
    driver.quit()
