MySQL Workbench is used to store the data
>Edit backend/backend settings.py DATABASES variable to your own MySQL DB

# Create MySQL table: 
```
python manage.py makemigrations playground
python manage.py migrate playground
```

# To run the backend:
```
cd backend
python manage.py runserver
```
# To run the frontend:
```
cd frontend
ng serve --open
```
