from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()


driver.get('http://localhost:3000')  


try:
    email_input = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.NAME, 'email'))
    )
    
    password_input = driver.find_element(By.NAME, 'password') 
    login_button = driver.find_element(By.ID, 'login-button')  
  
    email_input.send_keys('you_email@example.com') 
    password_input.send_keys('you_password')  
    
    time.sleep(2) 
    login_button.click()

    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, 'welcome-message')) 
    )

    print("Login successful!")

except Exception as e:
    print(f"An error occurred during login: {e}")

finally:
    driver.quit()
