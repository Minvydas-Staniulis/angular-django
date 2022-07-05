# MySQL Workbench
>Edit backend/backend settings.py DATABASES variable to your own MySQL DB
Command to create database:
```
create database plates
```

# Create MySQL table: 
```
python manage.py makemigrations playground
python manage.py migrate playground
```

# To run the backend:
> VirtualEnv has to be created
```
cd backend
python manage.py runserver
```
# To run the frontend:
```
cd frontend
ng serve
```
