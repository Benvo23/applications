from menu import show_menu
show_menu()
print("Welcome to Pizza International lets get to your Pizza!!")
pizza = ["Pepperoni", "Cheese", "Hawaiian"]
pizza_cost = 6
pizza_size = ["XS", "S", "M", "L", "XL", "XXL"]
meats_top = ["Pepperoni", "Sausage", "Bacon", "Ham", "Chicken", "Chorizo"]
healthy_tops = ["Onions", "Mushrooms", "Bell Pepper", "Onions", "Spinach", "Tomatoes", "Jalapeños"]
cheese = ["Mozzarella" , "Cheddar", "Parmesan", "American", "Provolone"]
pizza_choice = input("Which Pizza do you want?: ").strip().lower()
while pizza_choice not in [p.lower() for p in pizza]:
    print("Invalid pizza type. Please choose from:", ', '.join(pizza))
    pizza_choice = input("Which Pizza do you want?: ").strip().lower()

pizza_size_choice = input("What size do you want?: ").strip().lower()
while pizza_size_choice not in [s.lower() for s in pizza_size]:
        print("Invalid size. Please choose from:", ', '.join(pizza_size))
        pizza_size_choice = input("What size do you want?: ").strip().lower()

extra_meat_q = input('Do you want extra meat toppings? Type "Y" for yes and "N" for no: ').lower()
if extra_meat_q == "y":
    extra_meat_choice = input('What meat do you want: ').lower()
else:
    extra_meat_choice = "None"

extra_healthy_q = input('Do you want extra healthy toppings? Type "Y" for yes and "N" for no: ').lower()
if extra_healthy_q == "y":
    extra_healthy_choice = input('What healthy topping do you want?: ').lower()
else:
    extra_healthy_choice = "None"

print("\n--- ORDER SUMMARY ---")
print(f"You have ordered a {pizza_size_choice.upper()} {pizza_choice.title()} pizza.")

if extra_meat_choice != "None":
    print(f"With extra meat topping: {extra_meat_choice.title()}")
if extra_healthy_choice != "None":
    print(f"With extra healthy topping: {extra_healthy_choice.title()}")

bill = 0
if pizza_size_choice == "xs":
    bill +=3
if pizza_size_choice == "s":
    bill += 5
if pizza_size_choice == "m":
    bill +=7
if pizza_size_choice == "l":
    bill += 9
if pizza_size_choice == "xl":
    bill += 11
if pizza_size_choice == "xxl":
    bill += 13

if extra_healthy_q == "y":
    if pizza_size_choice == "xxl":
        bill += 10
    else:
        bill += 5

if extra_meat_q == "y":
    if pizza_size_choice == "xxl":
        bill += 10
    else:
        bill += 5

total_cost = pizza_cost + bill

print(f"Total cost is ${total_cost}!")