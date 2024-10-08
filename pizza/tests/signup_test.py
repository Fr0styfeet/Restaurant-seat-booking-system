from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import StaleElementReferenceException
import time

driver = webdriver.Chrome()

driver.get('http://localhost:3000') 


try:
    name_input = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.NAME, 'Name')) 
    )
    
    email_input = driver.find_element(By.NAME, 'email') 
    address_input = driver.find_element(By.NAME, 'location') 
    password_input = driver.find_element(By.NAME, 'password') 
    signup_button = driver.find_element(By.ID, 'signup-button') 


    name_input.send_keys('You Name')  
    email_input.send_keys('you_email@example.com')  
    address_input.send_keys('You Address') 
    password_input.send_keys('you_password') 
    
    time.sleep(2)
    try:
        signup_button.click()
    except StaleElementReferenceException:
        signup_button = driver.find_element(By.ID, 'signup-button')
        signup_button.click()

    print("Testing successful!")

except Exception as e:
    print(f"An error occurred during signup: {e}")

finally:
    driver.quit()
