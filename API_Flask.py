from flask import *

import urllib
import mysql.connector as mys
mycon=mys.connect(host='localhost',user='root',passwd='$23_sql',database='hostelBuddy')
mycursor=mycon.cursor()
query1 = 'select name from details'
mycursor.execute(query1)
name_data = mycursor.fetchall()
print(name_data)

app = Flask(__name__)
@app.route('/login',methods = ['GET'])  
def login():  
      name=request.args.get('name')  
      registrationNo = request.args.get('registerNo')  
      if name in name_data:  
          query2 = f'''select * from details WHERE name = {name}'''
          mycursor.execute(query2)
          return "Welcome %s" %name
   
if __name__ == '__main__':  
   app.run(debug = True)


    