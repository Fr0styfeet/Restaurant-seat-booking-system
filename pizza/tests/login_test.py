from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize the Chrome WebDriver
driver = webdriver.Chrome()

# Open your MERN application (make sure it’s running)
driver.get('http://localhost:3000')  # Adjust the port if necessary

# Wait for the login form elements to be visible
try:
    email_input = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.NAME, 'email'))  # Adjust as needed
    )
    
    password_input = driver.find_element(By.NAME, 'password')  # Adjust as needed
    login_button = driver.find_element(By.ID, 'login-button')   # Adjust as needed

    # Fill in the login form with your credentials
    email_input.send_keys('your_email@example.com')  # Replace with your actual email
    password_input.send_keys('your_password')  # Replace with your actual password
    
    # Click the login button
    login_button.click()

    # Wait for the next page to load and check for a welcome message
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, 'welcome-message'))  # Adjust as needed
    )

    print("Login successful!")

except Exception as e:
    print(f"An error occurred during login: {e}")

finally:
    # Close the browser
    driver.quit()
