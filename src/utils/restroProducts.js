const restroProducts = [
    {
        "data": {
          "About": {
            "Name": "Grandmama's Cafe",
            "Ratings": "4.0",
            "Locality": "Iricen Railway Colony",
            "AreaName": "Koregaon Park",
            "City": "Pune",
            "Cuisines": [
              "Italian",
              "American"
            ]
          },
          "Menu": [
           
                {
                  "id":1,
                  "name": "Butter Garlic Prawns",
                  "description": "Extra butter extra garlic just the way grandma likes it \n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 550
                },
                {
                  "id":2,  
                  "name": "Asian Style Pepper Chicken",
                  "description": "Crispy chicken bits served with home made volcano sauce\n",
                  "inStock": true,
                  "isVeg": false,
                  "price": 380
                },
                {
                  "id":3,  
                  "name": "Panko Fried Fish Fingers",
                  "description": "Crispy fish fingers served with tatar sauce\n",
                  "inStock": true,
                  "isVeg": false,
                  "price": 460
                },
                {
                  "id":4,  
                  "name": "Original Hot Buffalo Chicken Wings",
                  "description": "Flaky & crispy wings tossed in grandmamas proprietary sauces\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 360
                },
                {
                  "id":5,  
                  "name": "Chicken Shawarma",
                  "description": "Pita rolls with yum in every bite. Lebanese style chicken, hummus,  hot yogurt sauce & pickled vegetables.\n",
                  "inStock": true,
                  "isVeg": false,
                  "price": 310
                },
                {
                  "id":6,  
                  "name": "Granny's Baked Chicken Meatballs ",
                  "description": "Oven cooked meatballs with arrabiata & cheddar cheese",
                  "inStock": true,
                  "isVeg": false,
                  "price": 410
                },
                {
                  "id":7,  
                  "name": "Beiruti Hummus",
                  "description": "Lebanese version of hummus sprinkled with sumac & za'atar served with home made pita\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 320
                },
                {
                  "id":8,  
                  "name": "Falafel Shawarma",
                  "description": "Pita rolls with yum in every bite. Chickpea patty, hummus,  hot yogurt sauce & pickled vegetables\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 240
                },
                {
                  "id":9,  
                  "name": "Butter Garlic Mushrooms",
                  "description": "Buttered mushrooms, white wine, micro greens",
                  "inStock": true,
                  "isVeg": true,
                  "price": 320
                },
                {
                  "id":10,  
                  "name": "Sizzling Bloom Bread",
                  "description": "Bread stuffed with mozzarella, cheddar, bell pepper sizzling cheese sauce & roasted garlic\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 320
                },
                {
                  "id":11,  
                  "name": "Patatas Bravas  ",
                  "description": "Spain's most popular tapas, crispy potatoes tossed with delicious Spanish tomato sauce\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 230
                },
                {
                  "id":12,  
                  "name": "Mint Lemonade",
                  "description": "Lemon juice, sugar & tons of fresh mint\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 190
                },
                {
                  "id":13,  
                  "name": "Country Lemonade",
                  "description": "Lemonade topped with orange juice.\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 190
                },
                {
                  "id":14,  
                  "name": "Peach Iced Tea",
                  "inStock": true,
                  "isVeg": true,
                  "price": 190
                },
                {
                  "id":15,  
                  "name": "Lemon Iced Tea",
                  "inStock": true,
                  "isVeg": true,
                  "price": 180
                },
                {
                  "id":16,  
                  "name": "Grandmama Special Pizza",
                  "description": "The house special fully loaded pizza topped with American corn, onions, olives, bell peppers, jalapeno & sundried tomato\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 470
                },
                {
                  "id":17,  
                  "name": "Margherita Pizza",
                  "description": "Classic Italian tomato sauce with mozzarella & basil leaf\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 350
                },
                {
                  "id":18,  
                  "name": "Funghi Pizza",
                  "description": "Sauteed mushrooms, thyme, parmesan, Italian tomato sauce, mozzarella & truffle oil drizzle \n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 560
                },
                {
                  "id":19,  
                  "name": "Bbq Cottage Cheese Pizza",
                  "description": "Hickory BBQ flavoured cottage cheese topped with sweet caramelized, jalapeno & mozzarella cheese\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 540
                },
                {
                  "id":20,  
                  "name": "Corn & Jalapeno Pizza",
                  "description": "Margherita pizza topped with American corn & fresh jalapeno",
                  "inStock": true,
                  "isVeg": true,
                  "price": 450
                },
                {
                  "id":21,  
                  "name": "Four Cheese Pizza",
                  "description": "The cheesiest pizza of them all cheese & only cheese yellow cheddar, white cheddar, parmesan & mozzarella (add Italian tomato sauce on request)\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 560
                },
                {
                  "id":22,  
                  "name": "Bbq Chicken Pizza",
                  "description": "Hickory BBQ flavoured chicken topped with sweet caramelized, jalapeno & mozzarella cheese\n",
                  "inStock": true,
                  "isVeg": false,
                  "price": 600
                },
                {
                  "id":23,  
                  "name": "Pepperoni Pizza",
                  "description": "Classic Italian pepperoni with Italian tomato sauce & mozzarella cheese\n",
                  "inStock": true,
                  "isVeg": false,
                  "price": 700
                },
                {
                  "id":24,  
                  "name": "The Pizza From Punjab",
                  "description": "A pizza as Indian as it gets, tandoor cooked chicken, buttery tomato sauce, Kasturi methi & mozzarella cheese\n",
                  "inStock": true,
                  "isVeg": false,
                  "price": 550
                },
                {
                  "id":25,  
                  "name": "The Veggie One",
                  "description": "The all veggie burger with home made mayo, melted cheese & crispy potato straw",
                  "inStock": true,
                  "isVeg": true,
                  "price": 350
                },
                {
                  "id":26,  
                  "name": "Sloppy Bbq Cottage Cheese Burger",
                  "description": "Crumbled cottage cheese, caramelised onions, jalapeno, home made mayonnaise, melted cheese & crispy potato straws",
                  "inStock": true,
                  "isVeg": true,
                  "price": 360
                },
                {
                  "id":27,  
                  "name": "Mexican Burger",
                  "description": "Burger stacked with refried beans, habanero salsa, melted cheese & crispy nachos",
                  "inStock": true,
                  "isVeg": true,
                  "price": 480
                },
                {
                  "id":28,  
                  "name": "Sloppy Joe Chicken Burger",
                  "description": "Pulled barbecued chicken topped with caramelized onions, jalapenos , home made mayo & crispy potato straws\n",
                  "inStock": true,
                  "isVeg": false,
                  "price": 400
                },
                {
                  "id":29,  
                  "name": "All American Burger",
                  "description": "Grilled tenderloin patty burger served with tomato relish , caramelized onions, home made mayo & crispy potato straws\n",
                  "inStock": true,
                  "isVeg": false,
                  "price": 520
                },
                {
                  "id":30,  
                  "name": "Bombay Grill Sandwich",
                  "description": "Masala potatoes, mint chutney, amul cheese - basil panini\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 320
                },
                {
                  "id":31,  
                  "name": "Buffalo Chicken Sandwich",
                  "description": "Grilled cheese, pulled chicken in a spicy buffalo sauce with yellow cheddar - basil panini\n",
                  "inStock": true,
                  "isVeg": false,
                  "price": 390
                },
                {
                  "id":32,  
                  "name": "Grandmama Crusty Mac N Cheese",
                  "description": "Gratinated macaroni pasta in a secret super cheesy sauce\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 425
                },
                {
                  "id":33,  
                  "name": "Spaghetti Agli O Olio",
                  "description": "Pasta tossed in chilli flakes, garlic, basil, sundried tomato, olives & parmesan cheese\n",
                  "inStock": true,
                  "isVeg": true,
                  "price": 400
                }
              ]
            },
        }
]

export default restroProducts