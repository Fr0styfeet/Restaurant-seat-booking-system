from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time

# Start time
start_time = time.time()

#test cases
test_cases = {
    'valid_login': None,     # Test case for valid login
    'invalid_login': None,   # Test case for invalid login
    'valid_signup': None,    # Test case for valid signup
    'invalid_signup': None,  # Test case for invalid signup
    'signout': None,          #test case for signout
}

driver = webdriver.Chrome()
url = "http://localhost:3000" 

driver.maximize_window()
driver.get(url)

email_input_name = "email"
password_input_name = "password"

# Test Data
valid_email = "validuser@example.com"
valid_password = "validpass"
valid_address="validadd"
valid_username="validusername"
invalid_username = "invaliduser@example.com"
invalid_password = ""


### Test Case 1: Invalid Signup ###
signup = driver.find_element(By.ID, 'signup')
driver.execute_script("arguments[0].click();", signup)
time.sleep(3)
WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.NAME, email_input_name)))
driver.find_element(By.NAME, email_input_name).send_keys("") 
driver.find_element(By.NAME, password_input_name).send_keys("")  
driver.find_element(By.NAME, 'Name').send_keys(valid_username)
driver.find_element(By.NAME, 'location').send_keys(valid_address)
time.sleep(3)
signup_button = driver.find_element(By.ID, 'signup-button')
driver.execute_script("arguments[0].click();", signup_button)
time.sleep(3)

alert = WebDriverWait(driver, 10).until(EC.alert_is_present())
alert_message = alert.text
if "Signup Successful" in alert_message:  
    test_cases['invalid_signup'] = False
else: 
    test_cases['invalid_signup'] = True
alert.accept()


### Test Case 3: Invalid Login ###
driver.get(url)
login = driver.find_element(By.ID, 'login')
driver.execute_script("arguments[0].click();", login)
time.sleep(3)
WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.NAME, email_input_name)))
driver.find_element(By.NAME, email_input_name).send_keys(valid_email)
driver.find_element(By.NAME, password_input_name).send_keys("")
time.sleep(3)
login_button = driver.find_element(By.ID, 'login-button')
driver.execute_script("arguments[0].click();", login_button)
time.sleep(3)

alert = WebDriverWait(driver, 10).until(EC.alert_is_present())
alert_message = alert.text
if "Login Successful" in alert_message: 
    test_cases['invalid_login'] = False
else: 
    test_cases['invalid_login'] = True
alert.accept()




### Test Case 3  Valid Signup ###
driver.get(url)
signup = driver.find_element(By.ID, 'signup')
driver.execute_script("arguments[0].click();", signup)
time.sleep(3)
WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.NAME, email_input_name)))
driver.find_element(By.NAME, email_input_name).send_keys(valid_email)  # Empty email field
driver.find_element(By.NAME, password_input_name).send_keys(valid_password)  # Invalid short password
driver.find_element(By.NAME, 'Name').send_keys(valid_username)
driver.find_element(By.NAME, 'location').send_keys(valid_address)
time.sleep(3)
signup_button = driver.find_element(By.ID, 'signup-button')
driver.execute_script("arguments[0].click();", signup_button)
time.sleep(3)

alert = WebDriverWait(driver, 10).until(EC.alert_is_present())
alert_message = alert.text
if "Signup Successful" in alert_message: 
    test_cases['valid_signup'] = True
else: 
    test_cases['valid_signup'] = False
alert.accept()


### Test Case 4: Valid Login ###
driver.get(url)
login = driver.find_element(By.ID, 'login')
driver.execute_script("arguments[0].click();", login)
time.sleep(3)
WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.NAME, email_input_name)))
driver.find_element(By.NAME, email_input_name).send_keys(valid_email) 
driver.find_element(By.NAME, password_input_name).send_keys(valid_password)
time.sleep(3)
login_button = driver.find_element(By.ID, 'login-button')
driver.execute_script("arguments[0].click();", login_button)
time.sleep(3)

alert = WebDriverWait(driver, 10).until(EC.alert_is_present())
alert_message = alert.text
if "Login Successful" in alert_message:
    test_cases['valid_login'] = True
else: 
    test_cases['valid_login'] = False
alert.accept()


driver.get(url)
### Test Case : sign out ###
signout = driver.find_element(By.ID, 'signout')
driver.execute_script("arguments[0].click();", signout)
time.sleep(3)

alert = WebDriverWait(driver, 10).until(EC.alert_is_present())
alert_message = alert.text
if "Signout Successful" in alert_message:
    test_cases['signout'] = True
else: 
    test_cases['signout'] = False
alert.accept()
time.sleep(3)


print("Test Case Results:")
for case, result in test_cases.items():
    print(f"{case}: {'Passed' if result else 'Failed'}")

driver.quit()

end_time = time.time()
print(f"Testing completed in {end_time - start_time:.3f} seconds.")
