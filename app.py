import mysql.connector
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import time

app = Flask(__name__)
CORS(app)

ruta_destino = './static/imagenes/'

class Catalogo:
        def __init__(self, host, user, password, database):
                self.conn = mysql.connector.connect(
                        host=host,
                        user=user,
                        password=password
                )
                self.cursor = self.conn.cursor()
                
                try:
                        self.cursor.execute(f"USE {database}")
                except mysql.connector.Error as err:
                        if err.errno == mysql.connector.errorcode.ER_BAD_DB_ERROR:
                                self.cursor.execute(f"CREATE DATABASE {database}")
                                self.conn.database = database
                        else:
                                print(err)
                                raise err
                        
                self.cursor.execute('''CREATE TABLE IF NOT EXISTS roles (
                        id INT PRIMARY KEY AUTO_INCREMENT,
                        type VARCHAR(255) NOT NULL);''')
                self.cursor.execute('''INSERT INTO roles (type) VALUES ("admin"),
                                    ("designer"),
                                    ("maker"),
                                    ("user");''')
                
                self.cursor.execute('''CREATE TABLE IF NOT EXISTS categories (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL);''')

                self.cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                        id INT PRIMARY KEY AUTO_INCREMENT,
                        name VARCHAR(255) NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        password VARCHAR(255) NOT NULL,
                        validation VARCHAR(255) NOT NULL,
                        role_id INT NOT NULL,
                        FOREIGN KEY (role_id) REFERENCES roles(id));''')
                
                self.cursor.execute('''CREATE TABLE IF NOT EXISTS products (
                        id INT PRIMARY KEY AUTO_INCREMENT,
                        name VARCHAR(255) NOT NULL,
                        name_image VARCHAR(255),
                        price VARCHAR(255),
                        category_id INT(4),
                        FOREIGN KEY (category_id) REFERENCES categories(id));''')
                
                self.conn.commit()
                
                self.cursor.close()
                self.cursor = self.conn.cursor(dictionary=True)

        def register_user(self, name, email, password, validation, role_id):
        	sql = "INSERT INTO users (name, email, password, validation, role_id) VALUES (%s, %s, %s, %s, %s)"
        	values = (name, email, password, validation, role_id)

        	self.cursor.execute(sql, values)
        	self.conn.commit()
        	return self.cursor.lastrowid
        def get_users(self):
            self.cursor.execute("SELECT * FROM users")
            users = self.cursor.fetchall()
            return users
        
        def create_product(self, name, name_image, price, category_id):
            sql = "INSERT INTO products (name, name_image, price, category_id) VALUES (%s, %s, %s, %s)"
            values = (name, name_image, price, category_id)
            
            self.cursor.execute(sql, values)
            self.conn.commit()
            return self.cursor.lastrowid
        
        def get_one_product(self, id):
            self.cursor.execute(f"SELECT * FROM products WHERE id = {id}")
            return self.cursor.fetchone()
        
        def update_product(self, id, new_name, new_price, new_category_id):
            sql = "UPDATE products SET name = %s, price = %s, category_id = %s WHERE id = %s"
            values = (new_name, new_price, new_category_id, id)
            self.cursor.execute(sql, values)
            self.conn.commit()
            return self.cursor.rowcount > 0
        
        def get_all_products(self):
            self.cursor.execute("SELECT * FROM products")
            products = self.cursor.fetchall()
            return products
            
catalogo = Catalogo(host='localhost', user='root', password='1234', database='fansculp')
        
@app.route("/register", methods=["POST"])
def register_user():
	name = request.form['name']
	email = request.form['email']
	password = request.form['password']
	validation = request.form['validation']
	role_id = request.form['role_id']

	new_user = catalogo.register_user(name, email, password, validation, role_id)
	if new_user:
		return jsonify({"mensaje": "Registrado exitosamente"}), 201
	else:
		return jsonify({"mensaje": "error al registrar"}), 500
# Mostrar todos los usuarios
@app.route("/", methods=["GET"])
def home():
        return jsonify({"mensaje"})
@app.route("/users", methods=["GET"])
def get_users():
    users = catalogo.get_users()
    return jsonify(users)


# METODOS PARA lOS PRODUCTOS
@app.route("/create-product", methods=["POST"])
def create_product():
    name = request.form['name']
    image = request.files['image']
    price = request.form['price']
    category_id = request.form['category_id']
    name_image = ""
    
    name_image = secure_filename(image.filename)
    name_base, extension = os.path.splitext(name_image)
    name_image = f"{name_base}_{int(time.time())}{extension}"
    print("image", image)
 
    new_product = catalogo.create_product(name, name_image, price, category_id)
    
    if new_product:
        image.save(os.path.join(ruta_destino, name_image))
        return jsonify({"mensaje": "creado exitosamente"}), 201
    else:
        return jsonify({"mensaje": "error al registrar"}), 500
    
@app.route("/get_product/<int:id>", methods=["GET"])
def get_one_product(id):
    product = catalogo.get_one_product(id)
    if product:
        return jsonify(product), 201
    else:
        return "producto no encontrado", 404    

@app.route("/update-product/<int:id>", methods=["PUT"])
def update_product(id):
    new_name = request.form.get('name')
    new_price = request.form.get('price')
    new_category_id = request.form.get('category_id')
    
    if catalogo.update_product(id, new_name, new_price, new_category_id):
        return jsonify({"mensaje": "modificado exitosamente"}), 201
    else:
        return jsonify({"mensaje": "error al registrar"}), 500

@app.route("/get_all_products", methods=["GET"])
def get_all_products():
    get_all_products = catalogo.get_all_products()
    return jsonify(get_all_products)

if __name__ == "__main__":
    app.run(debug=True)
