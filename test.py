from selenium import webdriver
from time import sleep
import random
browser = webdriver.Chrome("E:\cdriver\chromedriver_win32\chromedriver.exe")
js1 = "var q=document.documentElement.scrollTop=400"
js2 = "var q=document.documentElement.scrollTop=0"
browser.get('https://yyj3603.github.io/shopify-admin/#/shopify-admin/products/productlist') 
""" browser.get('http://localhost:8000/products/productlist') """
sleep(3)
form = browser.find_element_by_xpath("//form/div")
prosubbtn = form.find_element_by_xpath("//button[@type='submit']")
proresbtn = form.find_element_by_xpath("//button[@type='button']")
proform = form.find_element_by_xpath("//div[@id='type']/div")



def shaxuan():
    """ 名字筛选 """
    proname = form.find_element_by_xpath("//input[@id='name']")
    proname.send_keys("123")
    prosubbtn.click()
    sleep(2)
    proresbtn.click()
    sleep(5)
    """ 类型筛选 """
    protype = form.find_element_by_xpath("//div[@id='type']")
    protype.click()
    sleep(2)
    key = random.randrange(1, 5)
    if(key == 1):
        browser.find_element_by_xpath("//body/div[2]//ul/li[1]").click()
    elif(key == 2):
        browser.find_element_by_xpath("//body/div[2]//ul/li[2]").click()
    elif(key == 3):
        browser.find_element_by_xpath("//body/div[2]//ul/li[3]").click()
    elif(key == 4):
        browser.find_element_by_xpath("//body/div[2]//ul/li[4]").click()
    elif(key == 5):
        browser.find_element_by_xpath("//body/div[2]//ul/li[5]").click()
    prosubbtn.click()
    sleep(3)
    proresbtn.click()
    sleep(5)
    """ 供应商筛选 """
    proven = form.find_element_by_xpath("//div[@id='vendor']")
    proven.click()
    sleep(2)
    key = random.randrange(1, 5)
    if(key == 1):
        browser.find_element_by_xpath("//body/div[3]//ul/li[1]").click()
    elif(key == 2):
        browser.find_element_by_xpath("//body/div[3]//ul/li[2]").click()
    elif(key == 3):
        browser.find_element_by_xpath("//body/div[3]//ul/li[3]").click()
    elif(key == 4):
        browser.find_element_by_xpath("//body/div[3]//ul/li[4]").click()
    elif(key == 5):
        browser.find_element_by_xpath("//body/div[3]//ul/li[5]").click()
    prosubbtn.click()
    sleep(3)
    proresbtn.click()
    sleep(5)
    """ 排序筛选 """
    prosort = form.find_element_by_xpath("//div[@id='sort']")
    prosort.click()
    sleep(2)
    key = random.randrange(1, 5)
    if(key == 1):
        browser.find_element_by_xpath("//body/div[4]//ul/li[1]").click()
    elif(key == 2):
        browser.find_element_by_xpath("//body/div[4]//ul/li[2]").click()
    elif(key == 3):
        browser.find_element_by_xpath("//body/div[4]//ul/li[3]").click()
    elif(key == 4):
        browser.find_element_by_xpath("//body/div[4]//ul/li[4]").click()
    elif(key == 5):
        browser.find_element_by_xpath("//body/div[4]//ul/li[5]").click()
    prosubbtn.click()
    browser.execute_script(js1)
    sleep(3)
    browser.execute_script(js2)
    sleep(3)
    proresbtn.click()
    sleep(5)
    """ 限制筛选 """
    prolimit = form.find_element_by_xpath("//div[@id='limit']")
    prolimit.click()
    sleep(2)
    key = random.randrange(1, 5)
    if(key == 1):
        browser.find_element_by_xpath("//body/div[5]//ul/li[1]").click()
    elif(key == 2):
        browser.find_element_by_xpath("//body/div[5]//ul/li[2]").click()
    elif(key == 3):
        browser.find_element_by_xpath("//body/div[5]//ul/li[3]").click()
    prosubbtn.click()
    sleep(3)
    browser.execute_script(js1)
    sleep(3)
    browser.execute_script(js2)
    proresbtn.click()
    sleep(5)

""" 商品删除 """
def delpro():
    sleep(1)
    browser.find_element_by_xpath('//*[@id="root"]/div/section/section/main/div/div[2]/div/div/div/div[1]/div[3]/div[2]/div/div/div/div/div/table/tbody/tr[1]/td[1]/span').click()
    browser.find_element_by_xpath('//*[@id="root"]/div/section/section/main/div/div[2]/div/div/div/div[1]/div[2]/span/button').click() 

""" 商品添加 """
def addpro():
    browser.find_element_by_xpath('//*[@id="root"]/div/section/section/main/div/div[2]/div/div/div/div[1]/div[2]/a/button').click()
    sleep(2)
    browser.find_element_by_xpath('//*[@id="title"]').send_keys("测试商品")
    browser.find_element_by_xpath('//*[@id="body_html"]').send_keys("测试商品描述")
    browser.find_element_by_xpath('//*[@id="vendor"]').send_keys("测试商品供应商")
    browser.find_element_by_xpath('//*[@id="product_type"]').send_keys("测试商品类型")
    browser.find_element_by_xpath('//*[@id="tags"]').send_keys("测试商品标签")
    browser.find_element_by_xpath('//*[@id="inventory_quantity"]').send_keys("666")
    browser.find_element_by_xpath('//*[@id="price"]').send_keys("6")
    browser.find_element_by_xpath('//*[@id="root"]/div/section/section/main/div/div[2]/div/form/div[8]/div/div/span/button').click()
    alert = browser.switch_to.alert
    sleep(1)
    alert.accept()

""" 编辑商品 """
def editpro():
    sleep(3)
    browser.find_element_by_xpath('//*[@id="/products$Menu"]/li[3]').click()
    browser.find_element_by_xpath('//*[@id="root"]/div/section/section/main/div/div[2]/div/div/div/div[1]/div[3]/div/div/div/div/div/table/tbody/tr[1]/td[7]/a[2]').click()

shaxuan() 
addpro()
sleep(3)
delpro() 
sleep(3) 
""" editpro()  """
pass
