const oneForAll = [
    {
        "label": "Maple Banana Frozen Yogurt",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b2d/b2dbd9ac524a41cae54682d3b5dc8d10.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJHMEUCIQDOonk6bv4OH5QQE9eNl0YVIkmxzeKvU62nWkq78YfLBgIgbG%2BbUSqw3540YgewSjuyya909KqOVz57P4jGMuMEHecquQUIEBAAGgwxODcwMTcxNTA5ODYiDEgreB%2Ffh8yLGR31HiqWBciRKslr0pa57JMXvMo8DhZDSgs1nNVReK5SXJ1tsAhvMSmyeXuQyqaii9zkEhf%2F2ixCM1TOGUSm0hqnRV0U%2FCvXTtuvyThwlzKMHYNYH0dBWaNaxnZzkgIeU2m7GBL0BmrXxNx1IA4k7citGwWVYLNoZ1TyB3dTU1kDWY1HUPeb6jdfnK2wloFBa10%2FeDTNxtyDQTVXu%2FeQmgYnZ7FX0RXU4nukfcTsm2bskwMt6Li7kg1%2F5swcZokVx70xAwVFIzAJTZWuBkmw2HJKjJDOOAqNwG6UIR1CzHS%2FaI6zmWoK7Orj0aMeGNz%2Bsdz%2FBsFOw7lJirpuDduHLZfW5MkecnTCm3ifp7AV%2B3GVqpwzuFf9yP2bSOp45x97k9uWBozawXz1Z4mPzJWbn8nTbjPQWziKSo0lU7Fgoz6xVOD7avHB%2Bys8HJnB%2Bntkqjyvx%2Bt%2B%2FU6GFswFc7eHtqcogqFiM7%2BprAmFz7ikyTU92ZVM59BqNDS1ZwleROS%2FNo9xP1yPo20ClrkNg5Z6ZVShIg8Kq32iZQy5Z0sS4RAYeuDACmikmm4A6Lh9PzsICTK9pWb0%2FaNVeiSBTTRyv3W5n%2F8eASVVIKAF6EEUMT2o%2FCqG%2FQyI9e%2BNs6wZZsFv2d4psZcCjcIW3WkmQwjI21eFtPCsSSfsHjps9as2VKqM0ywiw%2BH9K%2FouJhEl0ufLNzmvjI72IebOxxQ37ka9wrFHinqeSMu9S%2B0hn3sI%2BAhf1AViUUJNSELRzmcZ7%2BLwKsmCSmVVUC2d7P85yfT%2FF%2FtORhrVYlxpvsrKSi5%2BMqcSV%2FDoDC18SFtiTW8%2FyEkNsvf8rCPVaFSrg19aowwiOGWXcC1pnZIOwb3R9qkRQ5kcv7Z8eLb%2Bf6kF6VNeMJKuy6cGOrEBjeZN%2BpHy4gNBwHW4pnh61VtGOtKR39cKSSkjnjl4McsAHlMoghx4XOvu5xy4IC83HAkz8ksmAPZ%2BFj7K8yClPJf97bWectASW5t1QwPz7M2rpnYnSmzEC3ptbfW7o%2BQurPO%2F53s%2BwffRG3ER7Wgtys%2FoaFNnag%2BDwypq1Maxa4x45PBu%2FN7RGqnXDy79ivbnjIq28nbE6L8GglSUVzM43A%2BI%2BwaDeGNXpZwvMpzrz3L9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T071301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFMROWLVHM%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2a0be77224d69c17e39bad7f6a9530567c83c14c152578082588cdf71f95955f",
        "urlOfimage": "https://edamam-product-images.s3.amazonaws.com/web-img/b2d/b2dbd9ac524a41cae54682d3b5dc8d10.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJHMEUCIQDOonk6bv4OH5QQE9eNl0YVIkmxzeKvU62nWkq78YfLBgIgbG%2BbUSqw3540YgewSjuyya909KqOVz57P4jGMuMEHecquQUIEBAAGgwxODcwMTcxNTA5ODYiDEgreB%2Ffh8yLGR31HiqWBciRKslr0pa57JMXvMo8DhZDSgs1nNVReK5SXJ1tsAhvMSmyeXuQyqaii9zkEhf%2F2ixCM1TOGUSm0hqnRV0U%2FCvXTtuvyThwlzKMHYNYH0dBWaNaxnZzkgIeU2m7GBL0BmrXxNx1IA4k7citGwWVYLNoZ1TyB3dTU1kDWY1HUPeb6jdfnK2wloFBa10%2FeDTNxtyDQTVXu%2FeQmgYnZ7FX0RXU4nukfcTsm2bskwMt6Li7kg1%2F5swcZokVx70xAwVFIzAJTZWuBkmw2HJKjJDOOAqNwG6UIR1CzHS%2FaI6zmWoK7Orj0aMeGNz%2Bsdz%2FBsFOw7lJirpuDduHLZfW5MkecnTCm3ifp7AV%2B3GVqpwzuFf9yP2bSOp45x97k9uWBozawXz1Z4mPzJWbn8nTbjPQWziKSo0lU7Fgoz6xVOD7avHB%2Bys8HJnB%2Bntkqjyvx%2Bt%2B%2FU6GFswFc7eHtqcogqFiM7%2BprAmFz7ikyTU92ZVM59BqNDS1ZwleROS%2FNo9xP1yPo20ClrkNg5Z6ZVShIg8Kq32iZQy5Z0sS4RAYeuDACmikmm4A6Lh9PzsICTK9pWb0%2FaNVeiSBTTRyv3W5n%2F8eASVVIKAF6EEUMT2o%2FCqG%2FQyI9e%2BNs6wZZsFv2d4psZcCjcIW3WkmQwjI21eFtPCsSSfsHjps9as2VKqM0ywiw%2BH9K%2FouJhEl0ufLNzmvjI72IebOxxQ37ka9wrFHinqeSMu9S%2B0hn3sI%2BAhf1AViUUJNSELRzmcZ7%2BLwKsmCSmVVUC2d7P85yfT%2FF%2FtORhrVYlxpvsrKSi5%2BMqcSV%2FDoDC18SFtiTW8%2FyEkNsvf8rCPVaFSrg19aowwiOGWXcC1pnZIOwb3R9qkRQ5kcv7Z8eLb%2Bf6kF6VNeMJKuy6cGOrEBjeZN%2BpHy4gNBwHW4pnh61VtGOtKR39cKSSkjnjl4McsAHlMoghx4XOvu5xy4IC83HAkz8ksmAPZ%2BFj7K8yClPJf97bWectASW5t1QwPz7M2rpnYnSmzEC3ptbfW7o%2BQurPO%2F53s%2BwffRG3ER7Wgtys%2FoaFNnag%2BDwypq1Maxa4x45PBu%2FN7RGqnXDy79ivbnjIq28nbE6L8GglSUVzM43A%2BI%2BwaDeGNXpZwvMpzrz3L9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T071301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFMROWLVHM%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2a0be77224d69c17e39bad7f6a9530567c83c14c152578082588cdf71f95955f",
        "source": "No Recipes",
        "url": "http://norecipes.com/blog/2008/04/26/maple-banana-frozen-yogurt/",
        "shareAs": "http://www.edamam.com/recipe/maple-banana-frozen-yogurt-067f0b7be628ae847366e4f3e614b319/recipes",
        "yield": 4,
        "ingredientLines": [
            "2 rice bananas",
            "16 oz maple yogurt (I use Brown Cow Cream Top)",
            "1 tsp vanilla"
        ],
        "ingredients": [
            {
                "text": "2 rice bananas",
                "quantity": 2,
                "measure": "<unit>",
                "food": "bananas",
                "weight": 231.4,
                "foodCategory": "fruit",
                "foodId": "food_bjsfxtcaidvmhaa3afrbna43q3hu",
                "image": "https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg"
            },
            {
                "text": "16 oz maple yogurt (I use Brown Cow Cream Top)",
                "quantity": 16,
                "measure": "ounce",
                "food": "yogurt",
                "weight": 453.59237,
                "foodCategory": "yogurt",
                "foodId": "food_a79ojfkbgdeekgblqmky9bunr8f6",
                "image": "https://www.edamam.com/food-img/933/933eb3791b3a2175e007f1607d56b7e2.jpg"
            },
            {
                "text": "1 tsp vanilla",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "vanilla",
                "weight": 4.2,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Yuzu Kosho",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/3cb/3cbca745062064c3bbd561a951d9b8c0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJHMEUCIQDOonk6bv4OH5QQE9eNl0YVIkmxzeKvU62nWkq78YfLBgIgbG%2BbUSqw3540YgewSjuyya909KqOVz57P4jGMuMEHecquQUIEBAAGgwxODcwMTcxNTA5ODYiDEgreB%2Ffh8yLGR31HiqWBciRKslr0pa57JMXvMo8DhZDSgs1nNVReK5SXJ1tsAhvMSmyeXuQyqaii9zkEhf%2F2ixCM1TOGUSm0hqnRV0U%2FCvXTtuvyThwlzKMHYNYH0dBWaNaxnZzkgIeU2m7GBL0BmrXxNx1IA4k7citGwWVYLNoZ1TyB3dTU1kDWY1HUPeb6jdfnK2wloFBa10%2FeDTNxtyDQTVXu%2FeQmgYnZ7FX0RXU4nukfcTsm2bskwMt6Li7kg1%2F5swcZokVx70xAwVFIzAJTZWuBkmw2HJKjJDOOAqNwG6UIR1CzHS%2FaI6zmWoK7Orj0aMeGNz%2Bsdz%2FBsFOw7lJirpuDduHLZfW5MkecnTCm3ifp7AV%2B3GVqpwzuFf9yP2bSOp45x97k9uWBozawXz1Z4mPzJWbn8nTbjPQWziKSo0lU7Fgoz6xVOD7avHB%2Bys8HJnB%2Bntkqjyvx%2Bt%2B%2FU6GFswFc7eHtqcogqFiM7%2BprAmFz7ikyTU92ZVM59BqNDS1ZwleROS%2FNo9xP1yPo20ClrkNg5Z6ZVShIg8Kq32iZQy5Z0sS4RAYeuDACmikmm4A6Lh9PzsICTK9pWb0%2FaNVeiSBTTRyv3W5n%2F8eASVVIKAF6EEUMT2o%2FCqG%2FQyI9e%2BNs6wZZsFv2d4psZcCjcIW3WkmQwjI21eFtPCsSSfsHjps9as2VKqM0ywiw%2BH9K%2FouJhEl0ufLNzmvjI72IebOxxQ37ka9wrFHinqeSMu9S%2B0hn3sI%2BAhf1AViUUJNSELRzmcZ7%2BLwKsmCSmVVUC2d7P85yfT%2FF%2FtORhrVYlxpvsrKSi5%2BMqcSV%2FDoDC18SFtiTW8%2FyEkNsvf8rCPVaFSrg19aowwiOGWXcC1pnZIOwb3R9qkRQ5kcv7Z8eLb%2Bf6kF6VNeMJKuy6cGOrEBjeZN%2BpHy4gNBwHW4pnh61VtGOtKR39cKSSkjnjl4McsAHlMoghx4XOvu5xy4IC83HAkz8ksmAPZ%2BFj7K8yClPJf97bWectASW5t1QwPz7M2rpnYnSmzEC3ptbfW7o%2BQurPO%2F53s%2BwffRG3ER7Wgtys%2FoaFNnag%2BDwypq1Maxa4x45PBu%2FN7RGqnXDy79ivbnjIq28nbE6L8GglSUVzM43A%2BI%2BwaDeGNXpZwvMpzrz3L9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T071301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMROWLVHM%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0c8f17cf699cfdd664c059c86a79541d0f96c9b770f62a330f6f6a90b1f7ac1f",
        "source": "No Recipes",
        "url": "http://norecipes.com/blog/2011/10/30/yuzu-kosho-yuzu-chili-paste/",
        "shareAs": "http://www.edamam.com/recipe/yuzu-kosho-755f45da76fea193dbe6b5c5bf253f47/recipes",
        "yield": 2,
        "ingredientLines": [
            "2 green togarashi pepper (or 3 thai bird chilis)",
            "6 green yuzu",
            "1 teaspoon salt"
        ],
        "ingredients": [
            {
                "text": "2 green togarashi pepper (or 3 thai bird chilis)",
                "quantity": 2,
                "measure": "pepper",
                "food": "bird chilis",
                "weight": 90,
                "foodCategory": "vegetables",
                "foodId": "food_a6g98mqatzj7vca6ms3bnbzqxf3s",
                "image": "https://www.edamam.com/food-img/469/469213672957a242638e20c27e3e8acd.jpeg"
            },
            {
                "text": "6 green yuzu",
                "quantity": 6,
                "measure": "<unit>",
                "food": "yuzu",
                "weight": 504,
                "foodCategory": "fruit",
                "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
            },
            {
                "text": "1 teaspoon salt",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "salt",
                "weight": 6,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "condiments and sauces"
        ]
    },
    {
        "label": "Pomegranate Poached Pears",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/341/341345beaa8c6d391e9db83dd5af4b16.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJHMEUCIQDOonk6bv4OH5QQE9eNl0YVIkmxzeKvU62nWkq78YfLBgIgbG%2BbUSqw3540YgewSjuyya909KqOVz57P4jGMuMEHecquQUIEBAAGgwxODcwMTcxNTA5ODYiDEgreB%2Ffh8yLGR31HiqWBciRKslr0pa57JMXvMo8DhZDSgs1nNVReK5SXJ1tsAhvMSmyeXuQyqaii9zkEhf%2F2ixCM1TOGUSm0hqnRV0U%2FCvXTtuvyThwlzKMHYNYH0dBWaNaxnZzkgIeU2m7GBL0BmrXxNx1IA4k7citGwWVYLNoZ1TyB3dTU1kDWY1HUPeb6jdfnK2wloFBa10%2FeDTNxtyDQTVXu%2FeQmgYnZ7FX0RXU4nukfcTsm2bskwMt6Li7kg1%2F5swcZokVx70xAwVFIzAJTZWuBkmw2HJKjJDOOAqNwG6UIR1CzHS%2FaI6zmWoK7Orj0aMeGNz%2Bsdz%2FBsFOw7lJirpuDduHLZfW5MkecnTCm3ifp7AV%2B3GVqpwzuFf9yP2bSOp45x97k9uWBozawXz1Z4mPzJWbn8nTbjPQWziKSo0lU7Fgoz6xVOD7avHB%2Bys8HJnB%2Bntkqjyvx%2Bt%2B%2FU6GFswFc7eHtqcogqFiM7%2BprAmFz7ikyTU92ZVM59BqNDS1ZwleROS%2FNo9xP1yPo20ClrkNg5Z6ZVShIg8Kq32iZQy5Z0sS4RAYeuDACmikmm4A6Lh9PzsICTK9pWb0%2FaNVeiSBTTRyv3W5n%2F8eASVVIKAF6EEUMT2o%2FCqG%2FQyI9e%2BNs6wZZsFv2d4psZcCjcIW3WkmQwjI21eFtPCsSSfsHjps9as2VKqM0ywiw%2BH9K%2FouJhEl0ufLNzmvjI72IebOxxQ37ka9wrFHinqeSMu9S%2B0hn3sI%2BAhf1AViUUJNSELRzmcZ7%2BLwKsmCSmVVUC2d7P85yfT%2FF%2FtORhrVYlxpvsrKSi5%2BMqcSV%2FDoDC18SFtiTW8%2FyEkNsvf8rCPVaFSrg19aowwiOGWXcC1pnZIOwb3R9qkRQ5kcv7Z8eLb%2Bf6kF6VNeMJKuy6cGOrEBjeZN%2BpHy4gNBwHW4pnh61VtGOtKR39cKSSkjnjl4McsAHlMoghx4XOvu5xy4IC83HAkz8ksmAPZ%2BFj7K8yClPJf97bWectASW5t1QwPz7M2rpnYnSmzEC3ptbfW7o%2BQurPO%2F53s%2BwffRG3ER7Wgtys%2FoaFNnag%2BDwypq1Maxa4x45PBu%2FN7RGqnXDy79ivbnjIq28nbE6L8GglSUVzM43A%2BI%2BwaDeGNXpZwvMpzrz3L9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T071301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMROWLVHM%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a64185dc7941e37cbe82e02d9cd8f192a21fd3ef9e1aeb462549e26607e66686",
        "source": "No Recipes",
        "url": "http://norecipes.com/blog/2009/01/06/pomegranate-poached-pears/",
        "shareAs": "http://www.edamam.com/recipe/pomegranate-poached-pears-a77035c0a27f6496d3a9afa180f260bc/recipes",
        "yield": 4,
        "ingredientLines": [
            "3 bosc pears peeled cored and quartered",
            "8 oz. pomegranate juice (I used POM 100%)",
            "1/4 C sugar"
        ],
        "ingredients": [
            {
                "text": "3 bosc pears peeled cored and quartered",
                "quantity": 3,
                "measure": "<unit>",
                "food": "bosc pears",
                "weight": 566.2,
                "foodCategory": "fruit",
                "foodId": "food_aaony0caj2wn99a5sl1cva1ewzzt",
                "image": "https://www.edamam.com/food-img/ac1/ac1aacdf6f501fde692ce9f287c914d3.jpg"
            },
            {
                "text": "8 oz. pomegranate juice (I used POM 100%)",
                "quantity": 8,
                "measure": "ounce",
                "food": "pomegranate juice",
                "weight": 226.796185,
                "foodCategory": "sweetened beverages",
                "foodId": "food_bzk1qx5bikiddob3zb3yebw5k8ew",
                "image": "https://www.edamam.com/food-img/f9a/f9a50ef137a0b23f94dc0883a7cb5248.jpg"
            },
            {
                "text": "1/4 C sugar",
                "quantity": 0.25,
                "measure": "cup",
                "food": "sugar",
                "weight": 50,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "french"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Raspberry Coulis",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/42c/42cc077633d22b1a775b557d0edc07a1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJHMEUCIQDOonk6bv4OH5QQE9eNl0YVIkmxzeKvU62nWkq78YfLBgIgbG%2BbUSqw3540YgewSjuyya909KqOVz57P4jGMuMEHecquQUIEBAAGgwxODcwMTcxNTA5ODYiDEgreB%2Ffh8yLGR31HiqWBciRKslr0pa57JMXvMo8DhZDSgs1nNVReK5SXJ1tsAhvMSmyeXuQyqaii9zkEhf%2F2ixCM1TOGUSm0hqnRV0U%2FCvXTtuvyThwlzKMHYNYH0dBWaNaxnZzkgIeU2m7GBL0BmrXxNx1IA4k7citGwWVYLNoZ1TyB3dTU1kDWY1HUPeb6jdfnK2wloFBa10%2FeDTNxtyDQTVXu%2FeQmgYnZ7FX0RXU4nukfcTsm2bskwMt6Li7kg1%2F5swcZokVx70xAwVFIzAJTZWuBkmw2HJKjJDOOAqNwG6UIR1CzHS%2FaI6zmWoK7Orj0aMeGNz%2Bsdz%2FBsFOw7lJirpuDduHLZfW5MkecnTCm3ifp7AV%2B3GVqpwzuFf9yP2bSOp45x97k9uWBozawXz1Z4mPzJWbn8nTbjPQWziKSo0lU7Fgoz6xVOD7avHB%2Bys8HJnB%2Bntkqjyvx%2Bt%2B%2FU6GFswFc7eHtqcogqFiM7%2BprAmFz7ikyTU92ZVM59BqNDS1ZwleROS%2FNo9xP1yPo20ClrkNg5Z6ZVShIg8Kq32iZQy5Z0sS4RAYeuDACmikmm4A6Lh9PzsICTK9pWb0%2FaNVeiSBTTRyv3W5n%2F8eASVVIKAF6EEUMT2o%2FCqG%2FQyI9e%2BNs6wZZsFv2d4psZcCjcIW3WkmQwjI21eFtPCsSSfsHjps9as2VKqM0ywiw%2BH9K%2FouJhEl0ufLNzmvjI72IebOxxQ37ka9wrFHinqeSMu9S%2B0hn3sI%2BAhf1AViUUJNSELRzmcZ7%2BLwKsmCSmVVUC2d7P85yfT%2FF%2FtORhrVYlxpvsrKSi5%2BMqcSV%2FDoDC18SFtiTW8%2FyEkNsvf8rCPVaFSrg19aowwiOGWXcC1pnZIOwb3R9qkRQ5kcv7Z8eLb%2Bf6kF6VNeMJKuy6cGOrEBjeZN%2BpHy4gNBwHW4pnh61VtGOtKR39cKSSkjnjl4McsAHlMoghx4XOvu5xy4IC83HAkz8ksmAPZ%2BFj7K8yClPJf97bWectASW5t1QwPz7M2rpnYnSmzEC3ptbfW7o%2BQurPO%2F53s%2BwffRG3ER7Wgtys%2FoaFNnag%2BDwypq1Maxa4x45PBu%2FN7RGqnXDy79ivbnjIq28nbE6L8GglSUVzM43A%2BI%2BwaDeGNXpZwvMpzrz3L9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T071301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMROWLVHM%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9d2d13f842399910675f9413210162be02720fcb167642877a298c622f989aef",
        "source": "No Recipes",
        "url": "http://norecipes.com/recipe/raspberry-coulis/",
        "shareAs": "http://www.edamam.com/recipe/raspberry-coulis-e92e72709183ac1fd271320c8644b222/recipes",
        "yield": 1,
        "ingredientLines": [
            "200 grams raspberries (~2 cups)",
            "3 tablespoons sugar - evaporated cane juice",
            "2 tablespoons water",
            "1 tablespoon lemon juice"
        ],
        "ingredients": [
            {
                "text": "200 grams raspberries (~2 cups)",
                "quantity": 200,
                "measure": "gram",
                "food": "raspberries",
                "weight": 200,
                "foodCategory": "fruit",
                "foodId": "food_al3e7s2a1lm4i6bga7o0abp399zg",
                "image": "https://www.edamam.com/food-img/a67/a671e604bed03c27259eab176c781e22.jpg"
            },
            {
                "text": "3 tablespoons sugar - evaporated cane juice",
                "quantity": 3,
                "measure": "tablespoon",
                "food": "sugar",
                "weight": 37.4999999993661,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "2 tablespoons water",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "water",
                "weight": 29.573529562,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "1 tablespoon lemon juice",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "lemon juice",
                "weight": 15.2499999997422,
                "foodCategory": "100% juice",
                "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "french"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Lemongrass Ginger Syrup",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/55b/55bf6e6c050ce73f1af5e77f286f34a0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJHMEUCIQDOonk6bv4OH5QQE9eNl0YVIkmxzeKvU62nWkq78YfLBgIgbG%2BbUSqw3540YgewSjuyya909KqOVz57P4jGMuMEHecquQUIEBAAGgwxODcwMTcxNTA5ODYiDEgreB%2Ffh8yLGR31HiqWBciRKslr0pa57JMXvMo8DhZDSgs1nNVReK5SXJ1tsAhvMSmyeXuQyqaii9zkEhf%2F2ixCM1TOGUSm0hqnRV0U%2FCvXTtuvyThwlzKMHYNYH0dBWaNaxnZzkgIeU2m7GBL0BmrXxNx1IA4k7citGwWVYLNoZ1TyB3dTU1kDWY1HUPeb6jdfnK2wloFBa10%2FeDTNxtyDQTVXu%2FeQmgYnZ7FX0RXU4nukfcTsm2bskwMt6Li7kg1%2F5swcZokVx70xAwVFIzAJTZWuBkmw2HJKjJDOOAqNwG6UIR1CzHS%2FaI6zmWoK7Orj0aMeGNz%2Bsdz%2FBsFOw7lJirpuDduHLZfW5MkecnTCm3ifp7AV%2B3GVqpwzuFf9yP2bSOp45x97k9uWBozawXz1Z4mPzJWbn8nTbjPQWziKSo0lU7Fgoz6xVOD7avHB%2Bys8HJnB%2Bntkqjyvx%2Bt%2B%2FU6GFswFc7eHtqcogqFiM7%2BprAmFz7ikyTU92ZVM59BqNDS1ZwleROS%2FNo9xP1yPo20ClrkNg5Z6ZVShIg8Kq32iZQy5Z0sS4RAYeuDACmikmm4A6Lh9PzsICTK9pWb0%2FaNVeiSBTTRyv3W5n%2F8eASVVIKAF6EEUMT2o%2FCqG%2FQyI9e%2BNs6wZZsFv2d4psZcCjcIW3WkmQwjI21eFtPCsSSfsHjps9as2VKqM0ywiw%2BH9K%2FouJhEl0ufLNzmvjI72IebOxxQ37ka9wrFHinqeSMu9S%2B0hn3sI%2BAhf1AViUUJNSELRzmcZ7%2BLwKsmCSmVVUC2d7P85yfT%2FF%2FtORhrVYlxpvsrKSi5%2BMqcSV%2FDoDC18SFtiTW8%2FyEkNsvf8rCPVaFSrg19aowwiOGWXcC1pnZIOwb3R9qkRQ5kcv7Z8eLb%2Bf6kF6VNeMJKuy6cGOrEBjeZN%2BpHy4gNBwHW4pnh61VtGOtKR39cKSSkjnjl4McsAHlMoghx4XOvu5xy4IC83HAkz8ksmAPZ%2BFj7K8yClPJf97bWectASW5t1QwPz7M2rpnYnSmzEC3ptbfW7o%2BQurPO%2F53s%2BwffRG3ER7Wgtys%2FoaFNnag%2BDwypq1Maxa4x45PBu%2FN7RGqnXDy79ivbnjIq28nbE6L8GglSUVzM43A%2BI%2BwaDeGNXpZwvMpzrz3L9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T071301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMROWLVHM%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c0ff6a7085393495e0cabd068748f404fbeba2067132a027e7124c3db95cf253",
        "source": "No Recipes",
        "url": "http://norecipes.com/blog/lemongrass-ginger-syrup/",
        "shareAs": "http://www.edamam.com/recipe/lemongrass-ginger-syrup-3d81878cd040aa6a73a2c3f11293102a/recipes",
        "yield": 12,
        "ingredientLines": [
            "570 grams fresh ginger (20 ounces)",
            "3 stalks lemongrass",
            "2 cups water",
            "6 cups sugar"
        ],
        "ingredients": [
            {
                "text": "570 grams fresh ginger (20 ounces)",
                "quantity": 20,
                "measure": "ounce",
                "food": "fresh ginger",
                "weight": 566.9904625,
                "foodCategory": "vegetables",
                "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
                "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
            },
            {
                "text": "3 stalks lemongrass",
                "quantity": 3,
                "measure": "stalk",
                "food": "lemongrass",
                "weight": 60,
                "foodCategory": "vegetables",
                "foodId": "food_b3l1z8na3dy8qfaht3yubbrdu94h",
                "image": "https://www.edamam.com/food-img/a6e/a6ef38b461759334bbdc4d25ca678ad1.jpg"
            },
            {
                "text": "2 cups water",
                "quantity": 2,
                "measure": "cup",
                "food": "water",
                "weight": 473.176473,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "6 cups sugar",
                "quantity": 6,
                "measure": "cup",
                "food": "sugar",
                "weight": 1200,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "french"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "condiments and sauces"
        ]
    },
    {
        "label": "Pandan Wrapped Roast Pork",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c5e/c5ef5dccb2c83f31d1d77de0c9e2d937.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJHMEUCIQDOonk6bv4OH5QQE9eNl0YVIkmxzeKvU62nWkq78YfLBgIgbG%2BbUSqw3540YgewSjuyya909KqOVz57P4jGMuMEHecquQUIEBAAGgwxODcwMTcxNTA5ODYiDEgreB%2Ffh8yLGR31HiqWBciRKslr0pa57JMXvMo8DhZDSgs1nNVReK5SXJ1tsAhvMSmyeXuQyqaii9zkEhf%2F2ixCM1TOGUSm0hqnRV0U%2FCvXTtuvyThwlzKMHYNYH0dBWaNaxnZzkgIeU2m7GBL0BmrXxNx1IA4k7citGwWVYLNoZ1TyB3dTU1kDWY1HUPeb6jdfnK2wloFBa10%2FeDTNxtyDQTVXu%2FeQmgYnZ7FX0RXU4nukfcTsm2bskwMt6Li7kg1%2F5swcZokVx70xAwVFIzAJTZWuBkmw2HJKjJDOOAqNwG6UIR1CzHS%2FaI6zmWoK7Orj0aMeGNz%2Bsdz%2FBsFOw7lJirpuDduHLZfW5MkecnTCm3ifp7AV%2B3GVqpwzuFf9yP2bSOp45x97k9uWBozawXz1Z4mPzJWbn8nTbjPQWziKSo0lU7Fgoz6xVOD7avHB%2Bys8HJnB%2Bntkqjyvx%2Bt%2B%2FU6GFswFc7eHtqcogqFiM7%2BprAmFz7ikyTU92ZVM59BqNDS1ZwleROS%2FNo9xP1yPo20ClrkNg5Z6ZVShIg8Kq32iZQy5Z0sS4RAYeuDACmikmm4A6Lh9PzsICTK9pWb0%2FaNVeiSBTTRyv3W5n%2F8eASVVIKAF6EEUMT2o%2FCqG%2FQyI9e%2BNs6wZZsFv2d4psZcCjcIW3WkmQwjI21eFtPCsSSfsHjps9as2VKqM0ywiw%2BH9K%2FouJhEl0ufLNzmvjI72IebOxxQ37ka9wrFHinqeSMu9S%2B0hn3sI%2BAhf1AViUUJNSELRzmcZ7%2BLwKsmCSmVVUC2d7P85yfT%2FF%2FtORhrVYlxpvsrKSi5%2BMqcSV%2FDoDC18SFtiTW8%2FyEkNsvf8rCPVaFSrg19aowwiOGWXcC1pnZIOwb3R9qkRQ5kcv7Z8eLb%2Bf6kF6VNeMJKuy6cGOrEBjeZN%2BpHy4gNBwHW4pnh61VtGOtKR39cKSSkjnjl4McsAHlMoghx4XOvu5xy4IC83HAkz8ksmAPZ%2BFj7K8yClPJf97bWectASW5t1QwPz7M2rpnYnSmzEC3ptbfW7o%2BQurPO%2F53s%2BwffRG3ER7Wgtys%2FoaFNnag%2BDwypq1Maxa4x45PBu%2FN7RGqnXDy79ivbnjIq28nbE6L8GglSUVzM43A%2BI%2BwaDeGNXpZwvMpzrz3L9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T071301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMROWLVHM%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=803f255b36982baf815f6639e9b456560094909848b3af523df8dc38001ee096",
        "source": "No Recipes",
        "url": "http://norecipes.com/blog/2009/02/23/pandan-wrapped-roast-pork/",
        "shareAs": "http://www.edamam.com/recipe/pandan-wrapped-roast-pork-5e0a0380fcefe4cd472edb02cadd4dd7/recipes",
        "yield": 12,
        "ingredientLines": [
            "14 pandan (screw pine) leaves",
            "4 lbs pork butt or other well marbled cut of pork cut into large chunks",
            "smoked sea salt"
        ],
        "ingredients": [
            {
                "text": "14 pandan (screw pine) leaves",
                "quantity": 14,
                "measure": "<unit>",
                "food": "pandan",
                "weight": 8.4,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b2uws0abbx2wi3bog0a70a088xiw",
                "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
            },
            {
                "text": "4 lbs pork butt or other well marbled cut of pork cut into large chunks",
                "quantity": 4,
                "measure": "pound",
                "food": "pork",
                "weight": 1814.36948,
                "foodCategory": "meats",
                "foodId": "food_aisetlvawqaqp8a2uc28uaf46l5m",
                "image": "https://www.edamam.com/food-img/d55/d553f23d42b9c8fb314416ccd5cde3d2.jpg"
            },
            {
                "text": "smoked sea salt",
                "quantity": 0,
                "measure": null,
                "food": "sea salt",
                "weight": 10.93661688,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Homemade Sauerkraut (Choucroute)",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ccf/ccf485fbd43ffc79fdd5bd2cb3f89c0c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJHMEUCIQDOonk6bv4OH5QQE9eNl0YVIkmxzeKvU62nWkq78YfLBgIgbG%2BbUSqw3540YgewSjuyya909KqOVz57P4jGMuMEHecquQUIEBAAGgwxODcwMTcxNTA5ODYiDEgreB%2Ffh8yLGR31HiqWBciRKslr0pa57JMXvMo8DhZDSgs1nNVReK5SXJ1tsAhvMSmyeXuQyqaii9zkEhf%2F2ixCM1TOGUSm0hqnRV0U%2FCvXTtuvyThwlzKMHYNYH0dBWaNaxnZzkgIeU2m7GBL0BmrXxNx1IA4k7citGwWVYLNoZ1TyB3dTU1kDWY1HUPeb6jdfnK2wloFBa10%2FeDTNxtyDQTVXu%2FeQmgYnZ7FX0RXU4nukfcTsm2bskwMt6Li7kg1%2F5swcZokVx70xAwVFIzAJTZWuBkmw2HJKjJDOOAqNwG6UIR1CzHS%2FaI6zmWoK7Orj0aMeGNz%2Bsdz%2FBsFOw7lJirpuDduHLZfW5MkecnTCm3ifp7AV%2B3GVqpwzuFf9yP2bSOp45x97k9uWBozawXz1Z4mPzJWbn8nTbjPQWziKSo0lU7Fgoz6xVOD7avHB%2Bys8HJnB%2Bntkqjyvx%2Bt%2B%2FU6GFswFc7eHtqcogqFiM7%2BprAmFz7ikyTU92ZVM59BqNDS1ZwleROS%2FNo9xP1yPo20ClrkNg5Z6ZVShIg8Kq32iZQy5Z0sS4RAYeuDACmikmm4A6Lh9PzsICTK9pWb0%2FaNVeiSBTTRyv3W5n%2F8eASVVIKAF6EEUMT2o%2FCqG%2FQyI9e%2BNs6wZZsFv2d4psZcCjcIW3WkmQwjI21eFtPCsSSfsHjps9as2VKqM0ywiw%2BH9K%2FouJhEl0ufLNzmvjI72IebOxxQ37ka9wrFHinqeSMu9S%2B0hn3sI%2BAhf1AViUUJNSELRzmcZ7%2BLwKsmCSmVVUC2d7P85yfT%2FF%2FtORhrVYlxpvsrKSi5%2BMqcSV%2FDoDC18SFtiTW8%2FyEkNsvf8rCPVaFSrg19aowwiOGWXcC1pnZIOwb3R9qkRQ5kcv7Z8eLb%2Bf6kF6VNeMJKuy6cGOrEBjeZN%2BpHy4gNBwHW4pnh61VtGOtKR39cKSSkjnjl4McsAHlMoghx4XOvu5xy4IC83HAkz8ksmAPZ%2BFj7K8yClPJf97bWectASW5t1QwPz7M2rpnYnSmzEC3ptbfW7o%2BQurPO%2F53s%2BwffRG3ER7Wgtys%2FoaFNnag%2BDwypq1Maxa4x45PBu%2FN7RGqnXDy79ivbnjIq28nbE6L8GglSUVzM43A%2BI%2BwaDeGNXpZwvMpzrz3L9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T071301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMROWLVHM%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9bc65e772583575366d49bf0603b49ad15c48ec01474a5df852feba36965d426",
        "source": "No Recipes",
        "url": "http://norecipes.com/blog/2009/05/05/homemade-sauerkraut-choucroute/",
        "shareAs": "http://www.edamam.com/recipe/homemade-sauerkraut-choucroute-e015a4c0966d7be2f8cedad74bb2031d/recipes",
        "yield": 8,
        "ingredientLines": [
            "1 large head of cabbage",
            "1/2 C kosher salt (less if using table salt)",
            "4 liters of water (about 16 cups)",
            "2 empty 3 liter water bottles (only use clear plastic) or a glass mason jar"
        ],
        "ingredients": [
            {
                "text": "1 large head of cabbage",
                "quantity": 1,
                "measure": "head",
                "food": "cabbage",
                "weight": 1248,
                "foodCategory": "vegetables",
                "foodId": "food_afb4o8kb767k0iapchxupaifxk1z",
                "image": "https://www.edamam.com/food-img/cb1/cb1411c925c19de26620e63cb90d0e14.jpg"
            },
            {
                "text": "1/2 C kosher salt (less if using table salt)",
                "quantity": 0.5,
                "measure": "cup",
                "food": "kosher salt",
                "weight": 116.5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "4 liters of water (about 16 cups)",
                "quantity": 4,
                "measure": "liter",
                "food": "water",
                "weight": 4000,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "2 empty 3 liter water bottles (only use clear plastic) or a glass mason jar",
                "quantity": 2,
                "measure": "liter",
                "food": "water",
                "weight": 2000,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "central europe"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Chinese Five Spice Powder",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d15/d15eb0a51a9ee6c744ad11237dacb0dc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJHMEUCIQDOonk6bv4OH5QQE9eNl0YVIkmxzeKvU62nWkq78YfLBgIgbG%2BbUSqw3540YgewSjuyya909KqOVz57P4jGMuMEHecquQUIEBAAGgwxODcwMTcxNTA5ODYiDEgreB%2Ffh8yLGR31HiqWBciRKslr0pa57JMXvMo8DhZDSgs1nNVReK5SXJ1tsAhvMSmyeXuQyqaii9zkEhf%2F2ixCM1TOGUSm0hqnRV0U%2FCvXTtuvyThwlzKMHYNYH0dBWaNaxnZzkgIeU2m7GBL0BmrXxNx1IA4k7citGwWVYLNoZ1TyB3dTU1kDWY1HUPeb6jdfnK2wloFBa10%2FeDTNxtyDQTVXu%2FeQmgYnZ7FX0RXU4nukfcTsm2bskwMt6Li7kg1%2F5swcZokVx70xAwVFIzAJTZWuBkmw2HJKjJDOOAqNwG6UIR1CzHS%2FaI6zmWoK7Orj0aMeGNz%2Bsdz%2FBsFOw7lJirpuDduHLZfW5MkecnTCm3ifp7AV%2B3GVqpwzuFf9yP2bSOp45x97k9uWBozawXz1Z4mPzJWbn8nTbjPQWziKSo0lU7Fgoz6xVOD7avHB%2Bys8HJnB%2Bntkqjyvx%2Bt%2B%2FU6GFswFc7eHtqcogqFiM7%2BprAmFz7ikyTU92ZVM59BqNDS1ZwleROS%2FNo9xP1yPo20ClrkNg5Z6ZVShIg8Kq32iZQy5Z0sS4RAYeuDACmikmm4A6Lh9PzsICTK9pWb0%2FaNVeiSBTTRyv3W5n%2F8eASVVIKAF6EEUMT2o%2FCqG%2FQyI9e%2BNs6wZZsFv2d4psZcCjcIW3WkmQwjI21eFtPCsSSfsHjps9as2VKqM0ywiw%2BH9K%2FouJhEl0ufLNzmvjI72IebOxxQ37ka9wrFHinqeSMu9S%2B0hn3sI%2BAhf1AViUUJNSELRzmcZ7%2BLwKsmCSmVVUC2d7P85yfT%2FF%2FtORhrVYlxpvsrKSi5%2BMqcSV%2FDoDC18SFtiTW8%2FyEkNsvf8rCPVaFSrg19aowwiOGWXcC1pnZIOwb3R9qkRQ5kcv7Z8eLb%2Bf6kF6VNeMJKuy6cGOrEBjeZN%2BpHy4gNBwHW4pnh61VtGOtKR39cKSSkjnjl4McsAHlMoghx4XOvu5xy4IC83HAkz8ksmAPZ%2BFj7K8yClPJf97bWectASW5t1QwPz7M2rpnYnSmzEC3ptbfW7o%2BQurPO%2F53s%2BwffRG3ER7Wgtys%2FoaFNnag%2BDwypq1Maxa4x45PBu%2FN7RGqnXDy79ivbnjIq28nbE6L8GglSUVzM43A%2BI%2BwaDeGNXpZwvMpzrz3L9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T071301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMROWLVHM%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3a6bcb6709194a3038867a95b7aa9b6cf1756bff8c09d5e32e6aebcf1b6e1c1a",
        "source": "No Recipes",
        "url": "http://norecipes.com/blog/2008/12/09/chinese-five-spice-powder/",
        "shareAs": "http://www.edamam.com/recipe/chinese-five-spice-powder-7a17e0e0d25099c448d2381a719a80df/recipes",
        "yield": 2,
        "ingredientLines": [
            "3 pieces whole star anise",
            "20 cloves",
            "3″ long piece of Vietnamese cinnamon (or other Cassia bark)",
            "1 Tbs Sichuan pepper (husks only, the black seeds are gritty)",
            "1 tsp cumin",
            "1/4 tsp white peppercorns"
        ],
        "ingredients": [
            {
                "text": "3 pieces whole star anise",
                "quantity": 3,
                "measure": "piece",
                "food": "star anise",
                "weight": 6,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_beyvheuancih87bwyqk6yb4av11q",
                "image": "https://www.edamam.com/food-img/bea/bea10bb0afae1e498edadf0aa1be805e.jpg"
            },
            {
                "text": "20 cloves",
                "quantity": 20,
                "measure": "<unit>",
                "food": "cloves",
                "weight": 3,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_abb00nxbw761ggavcuto7b3mw1s0",
                "image": "https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg"
            },
            {
                "text": "3″ long piece of Vietnamese cinnamon (or other Cassia bark)",
                "quantity": 3,
                "measure": "piece",
                "food": "cinnamon",
                "weight": 7.800000000000001,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
            },
            {
                "text": "1 Tbs Sichuan pepper (husks only, the black seeds are gritty)",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "Sichuan pepper",
                "weight": 5.3,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_beml4s1aonwfqhbjeb8ggb7li7j5",
                "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
            },
            {
                "text": "1 tsp cumin",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "cumin",
                "weight": 2.1,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
                "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
            },
            {
                "text": "1/4 tsp white peppercorns",
                "quantity": 0.25,
                "measure": "teaspoon",
                "food": "white peppercorns",
                "weight": 0.6,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a443px0bncpqa5avv80p3anrp26k",
                "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "chinese"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "condiments and sauces"
        ]
    },
    {
        "label": "Ham Stock",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ae0/ae073b4739820714bf4a9f7a4a25bade.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJHMEUCIQDOonk6bv4OH5QQE9eNl0YVIkmxzeKvU62nWkq78YfLBgIgbG%2BbUSqw3540YgewSjuyya909KqOVz57P4jGMuMEHecquQUIEBAAGgwxODcwMTcxNTA5ODYiDEgreB%2Ffh8yLGR31HiqWBciRKslr0pa57JMXvMo8DhZDSgs1nNVReK5SXJ1tsAhvMSmyeXuQyqaii9zkEhf%2F2ixCM1TOGUSm0hqnRV0U%2FCvXTtuvyThwlzKMHYNYH0dBWaNaxnZzkgIeU2m7GBL0BmrXxNx1IA4k7citGwWVYLNoZ1TyB3dTU1kDWY1HUPeb6jdfnK2wloFBa10%2FeDTNxtyDQTVXu%2FeQmgYnZ7FX0RXU4nukfcTsm2bskwMt6Li7kg1%2F5swcZokVx70xAwVFIzAJTZWuBkmw2HJKjJDOOAqNwG6UIR1CzHS%2FaI6zmWoK7Orj0aMeGNz%2Bsdz%2FBsFOw7lJirpuDduHLZfW5MkecnTCm3ifp7AV%2B3GVqpwzuFf9yP2bSOp45x97k9uWBozawXz1Z4mPzJWbn8nTbjPQWziKSo0lU7Fgoz6xVOD7avHB%2Bys8HJnB%2Bntkqjyvx%2Bt%2B%2FU6GFswFc7eHtqcogqFiM7%2BprAmFz7ikyTU92ZVM59BqNDS1ZwleROS%2FNo9xP1yPo20ClrkNg5Z6ZVShIg8Kq32iZQy5Z0sS4RAYeuDACmikmm4A6Lh9PzsICTK9pWb0%2FaNVeiSBTTRyv3W5n%2F8eASVVIKAF6EEUMT2o%2FCqG%2FQyI9e%2BNs6wZZsFv2d4psZcCjcIW3WkmQwjI21eFtPCsSSfsHjps9as2VKqM0ywiw%2BH9K%2FouJhEl0ufLNzmvjI72IebOxxQ37ka9wrFHinqeSMu9S%2B0hn3sI%2BAhf1AViUUJNSELRzmcZ7%2BLwKsmCSmVVUC2d7P85yfT%2FF%2FtORhrVYlxpvsrKSi5%2BMqcSV%2FDoDC18SFtiTW8%2FyEkNsvf8rCPVaFSrg19aowwiOGWXcC1pnZIOwb3R9qkRQ5kcv7Z8eLb%2Bf6kF6VNeMJKuy6cGOrEBjeZN%2BpHy4gNBwHW4pnh61VtGOtKR39cKSSkjnjl4McsAHlMoghx4XOvu5xy4IC83HAkz8ksmAPZ%2BFj7K8yClPJf97bWectASW5t1QwPz7M2rpnYnSmzEC3ptbfW7o%2BQurPO%2F53s%2BwffRG3ER7Wgtys%2FoaFNnag%2BDwypq1Maxa4x45PBu%2FN7RGqnXDy79ivbnjIq28nbE6L8GglSUVzM43A%2BI%2BwaDeGNXpZwvMpzrz3L9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T071301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFMROWLVHM%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3e23c4ca8a0dbd5c3de35fdda7022fab941c0ccee81a0022e4202bd917214966",
        "source": "No Recipes",
        "url": "http://norecipes.com/recipe/ham-stock/",
        "shareAs": "http://www.edamam.com/recipe/ham-stock-37b6f298818e8827d6eb0880ec8ea627/recipes",
        "yield": 9,
        "ingredientLines": [
            "1 tablespoon vegetable oil",
            "250 grams leeks",
            "800 gram ham bone cut in half",
            "10 cups water"
        ],
        "ingredients": [
            {
                "text": "1 tablespoon vegetable oil",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "vegetable oil",
                "weight": 14,
                "foodCategory": "Oils",
                "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
            },
            {
                "text": "250 grams leeks",
                "quantity": 250,
                "measure": "gram",
                "food": "leeks",
                "weight": 250,
                "foodCategory": "vegetables",
                "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
                "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
            },
            {
                "text": "800 gram ham bone cut in half",
                "quantity": 800,
                "measure": "gram",
                "food": "ham bone",
                "weight": 800,
                "foodCategory": "condiments and sauces",
                "foodId": "food_beo9rw3bkrsuprbp7nd3gavoz5bj",
                "image": "https://www.edamam.com/food-img/d61/d616f7ae21b8fac6355babb72f0dc840.jpg"
            },
            {
                "text": "10 cups water",
                "quantity": 10,
                "measure": "cup",
                "food": "water",
                "weight": 2365.882365,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "mediterranean"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "soup"
        ]
    },
    {
        "label": "Pavlova",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f75/f752c161352f5d66d12dd4f1f3b68506.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLWVhc3QtMSJHMEUCIQDOonk6bv4OH5QQE9eNl0YVIkmxzeKvU62nWkq78YfLBgIgbG%2BbUSqw3540YgewSjuyya909KqOVz57P4jGMuMEHecquQUIEBAAGgwxODcwMTcxNTA5ODYiDEgreB%2Ffh8yLGR31HiqWBciRKslr0pa57JMXvMo8DhZDSgs1nNVReK5SXJ1tsAhvMSmyeXuQyqaii9zkEhf%2F2ixCM1TOGUSm0hqnRV0U%2FCvXTtuvyThwlzKMHYNYH0dBWaNaxnZzkgIeU2m7GBL0BmrXxNx1IA4k7citGwWVYLNoZ1TyB3dTU1kDWY1HUPeb6jdfnK2wloFBa10%2FeDTNxtyDQTVXu%2FeQmgYnZ7FX0RXU4nukfcTsm2bskwMt6Li7kg1%2F5swcZokVx70xAwVFIzAJTZWuBkmw2HJKjJDOOAqNwG6UIR1CzHS%2FaI6zmWoK7Orj0aMeGNz%2Bsdz%2FBsFOw7lJirpuDduHLZfW5MkecnTCm3ifp7AV%2B3GVqpwzuFf9yP2bSOp45x97k9uWBozawXz1Z4mPzJWbn8nTbjPQWziKSo0lU7Fgoz6xVOD7avHB%2Bys8HJnB%2Bntkqjyvx%2Bt%2B%2FU6GFswFc7eHtqcogqFiM7%2BprAmFz7ikyTU92ZVM59BqNDS1ZwleROS%2FNo9xP1yPo20ClrkNg5Z6ZVShIg8Kq32iZQy5Z0sS4RAYeuDACmikmm4A6Lh9PzsICTK9pWb0%2FaNVeiSBTTRyv3W5n%2F8eASVVIKAF6EEUMT2o%2FCqG%2FQyI9e%2BNs6wZZsFv2d4psZcCjcIW3WkmQwjI21eFtPCsSSfsHjps9as2VKqM0ywiw%2BH9K%2FouJhEl0ufLNzmvjI72IebOxxQ37ka9wrFHinqeSMu9S%2B0hn3sI%2BAhf1AViUUJNSELRzmcZ7%2BLwKsmCSmVVUC2d7P85yfT%2FF%2FtORhrVYlxpvsrKSi5%2BMqcSV%2FDoDC18SFtiTW8%2FyEkNsvf8rCPVaFSrg19aowwiOGWXcC1pnZIOwb3R9qkRQ5kcv7Z8eLb%2Bf6kF6VNeMJKuy6cGOrEBjeZN%2BpHy4gNBwHW4pnh61VtGOtKR39cKSSkjnjl4McsAHlMoghx4XOvu5xy4IC83HAkz8ksmAPZ%2BFj7K8yClPJf97bWectASW5t1QwPz7M2rpnYnSmzEC3ptbfW7o%2BQurPO%2F53s%2BwffRG3ER7Wgtys%2FoaFNnag%2BDwypq1Maxa4x45PBu%2FN7RGqnXDy79ivbnjIq28nbE6L8GglSUVzM43A%2BI%2BwaDeGNXpZwvMpzrz3L9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T071301Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMROWLVHM%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ee08c0cf8b9d24667681f529e85aa5625df6917c4d34f4e43af58e927829d7ba",
        "source": "No Recipes",
        "url": "http://norecipes.com/blog/pavlova-recipe/",
        "shareAs": "http://www.edamam.com/recipe/pavlova-97326255e8197d8f1cd8ef12614fbdab/recipes",
        "yield": 5,
        "ingredientLines": [
            "105 grams aged egg whites (about 3.7 ounces)",
            "120 grams superfine sugar (about 4.2 ounces)",
            "2 teaspoons potato starch",
            "1 teaspoon vanilla extract",
            "1/2 teaspoon white vinegar"
        ],
        "ingredients": [
            {
                "text": "105 grams aged egg whites (about 3.7 ounces)",
                "quantity": 3.700000047683716,
                "measure": "ounce",
                "food": "egg whites",
                "weight": 104.8932369143106,
                "foodCategory": "Eggs",
                "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
                "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
            },
            {
                "text": "120 grams superfine sugar (about 4.2 ounces)",
                "quantity": 4.199999809265137,
                "measure": "ounce",
                "food": "superfine sugar",
                "weight": 119.0679917177576,
                "foodCategory": "sugars",
                "foodId": "food_b83hz1dbrydiwzag8btahb15lu4l",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "2 teaspoons potato starch",
                "quantity": 2,
                "measure": "teaspoon",
                "food": "potato starch",
                "weight": 5.33333333360384,
                "foodCategory": "grains",
                "foodId": "food_b84cpw8b4ow2ulbapa2agas4f9ev",
                "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
            },
            {
                "text": "1 teaspoon vanilla extract",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "vanilla extract",
                "weight": 4.2,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
            },
            {
                "text": "1/2 teaspoon white vinegar",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "white vinegar",
                "weight": 2.5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_am3vwadag9arxtadrwyfcau2w3b2",
                "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "eastern europe"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    }
,
    {
        "label": "Breakfast Sausage Puffs",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e26/e267487d5cd69a038c3284931b4a3c1b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102644Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=455cca7dc619b9fc18f04ab2298673865e21b27e5af6b9c768d5496a967f5d23",
        "source": "Martha Stewart",
        "url": "https://www.marthastewart.com/868891/breakfast-sausage-puffs",
        "shareAs": "http://www.edamam.com/recipe/breakfast-sausage-puffs-63ccc00c3c1051750933c9ad8fb9e987/breakfast",
        "yield": 8,
        "ingredientLines": [
            "1 sheet puff pastry, thawed",
            "2 tablespoons maple syrup, plus more for serving",
            "18 cooked breakfast sausages, about 1 pound",
            "1 egg"
        ],
        "ingredients": [
            {
                "text": "1 sheet puff pastry, thawed",
                "quantity": 1,
                "measure": "sheet",
                "food": "puff pastry",
                "weight": 25,
                "foodCategory": "quick breads and pastries",
                "foodId": "food_bdy019nbzjeni3atliworbbgahrk",
                "image": "https://www.edamam.com/food-img/bc7/bc7dc9b99ce87d5a6dc136e30d6aadd1.jpg"
            },
            {
                "text": "2 tablespoons maple syrup, plus more for serving",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "maple syrup",
                "weight": 40,
                "foodCategory": "sugars",
                "foodId": "food_bo37p69bopqshvaul0bn4bv0kqni",
                "image": "https://www.edamam.com/food-img/ced/ced25c45453a118e531c8aaf33e2ee38.jpg"
            },
            {
                "text": "18 cooked breakfast sausages, about 1 pound",
                "quantity": 1,
                "measure": "pound",
                "food": "sausages",
                "weight": 453.59237,
                "foodCategory": "Cured meats",
                "foodId": "food_aidvlr4a5hvqixbbd5rbhbb3wiri",
                "image": "https://www.edamam.com/food-img/2c7/2c73a127447b754a803e3804898a1afd.jpg"
            },
            {
                "text": "1 egg",
                "quantity": 1,
                "measure": "<unit>",
                "food": "egg",
                "weight": 43,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "breakfast"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Recipe: Muffin-Pan Breakfast Sliders",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/259/2590a1d5a46dd9ecdb065d271941e806?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102644Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d9ee71f7492d80bb740f5d81ca95c97b96a960b8dbd02fd26fabe616e2a49ea3",
        "source": "The Kitchn",
        "url": "http://www.thekitchn.com/recipe-muffin-pan-breakfast-sliders-234089",
        "shareAs": "http://www.edamam.com/recipe/recipe-muffin-pan-breakfast-sliders-ee6092cb5ff8b4d6c46482ca1e5d4ca7/breakfast",
        "yield": 4,
        "ingredientLines": [
            "4 ounces uncooked breakfast sausage, casings removed",
            "4 large eggs",
            "2 slices American cheese, halved"
        ],
        "ingredients": [
            {
                "text": "4 ounces uncooked breakfast sausage, casings removed",
                "quantity": 4,
                "measure": "ounce",
                "food": "sausage",
                "weight": 113.3980925,
                "foodCategory": "Cured meats",
                "foodId": "food_aidvlr4a5hvqixbbd5rbhbb3wiri",
                "image": "https://www.edamam.com/food-img/2c7/2c73a127447b754a803e3804898a1afd.jpg"
            },
            {
                "text": "4 large eggs",
                "quantity": 4,
                "measure": "<unit>",
                "food": "eggs",
                "weight": 200,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "2 slices American cheese, halved",
                "quantity": 2,
                "measure": "slice",
                "food": "American cheese",
                "weight": 42,
                "foodCategory": "Cheese",
                "foodId": "food_bjqrzuebbvmm4ubyh7aija9bw809",
                "image": "https://www.edamam.com/food-img/ea0/ea0c5a115d3e067852af1f1b0b10ada8.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "breakfast"
        ],
        "dishType": [
            "sandwiches"
        ]
    },
    {
        "label": "The Wrangler Breakfast Taco recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/669/6690c340b7ac554d0cc194a53619b586?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102644Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5771fc5a4464f1e3ed1c70eecb652b1f4feec0821c4e958e436340d301bbe473",
        "source": "Food Republic",
        "url": "http://www.foodrepublic.com/recipes/the-wrangler-breakfast-taco-recipe/",
        "shareAs": "http://www.edamam.com/recipe/the-wrangler-breakfast-taco-recipes-8aaf935a0992d5bf66c690cdf394f015/breakfast",
        "yield": 4,
        "ingredientLines": [
            "1/2 cup cooked breakfast potatoes, seasoned to taste",
            "2 eggs , beaten",
            "1 thick slice smoked beef brisket, chopped",
            "2 tablespoons jack cheese, shredded",
            "1 flour tortilla",
            "2 tablespoons salsa"
        ],
        "ingredients": [
            {
                "text": "1/2 cup cooked breakfast potatoes, seasoned to taste",
                "quantity": 0.5,
                "measure": "cup",
                "food": "potatoes",
                "weight": 75,
                "foodCategory": "vegetables",
                "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
                "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
            },
            {
                "text": "2 eggs , beaten",
                "quantity": 2,
                "measure": "<unit>",
                "food": "eggs",
                "weight": 86,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "1 thick slice smoked beef brisket, chopped",
                "quantity": 1,
                "measure": "<unit>",
                "food": "beef brisket",
                "weight": 1812,
                "foodCategory": "meats",
                "foodId": "food_akcl1lrbxwowcrai1l6xkbtvxhsn",
                "image": "https://www.edamam.com/food-img/e0d/e0dd59302a5bf4ff2d2e4797cdfe4160.jpg"
            },
            {
                "text": "2 tablespoons jack cheese, shredded",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "jack cheese",
                "weight": 30.6796874994813,
                "foodCategory": "Cheese",
                "foodId": "food_atp17pta7d5it2a80ct13ard6aj3",
                "image": "https://www.edamam.com/food-img/590/59062b9f8d57ebc7d831b7b7c231f726.jpg"
            },
            {
                "text": "1 flour tortilla",
                "quantity": 1,
                "measure": "<unit>",
                "food": "flour tortilla",
                "weight": 49,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_a9ql6pdb639bs5b2nlvbob3w0mlj",
                "image": "https://www.edamam.com/food-img/357/357e415685787e6d6844e8d08c1b1586.jpg"
            },
            {
                "text": "2 tablespoons salsa",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "salsa",
                "weight": 36,
                "foodCategory": "canned soup",
                "foodId": "food_b0t3obfawlm5k2b6erxscacez35u",
                "image": "https://www.edamam.com/food-img/995/995d0f166754a0475c181b9c156fec43.jpg"
            }
        ],
        "totalTime": 25,
        "cuisineType": [
            "mexican"
        ],
        "mealType": [
            "breakfast"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Breakfast Sausage, Mushroom, and Cheddar Rolls Recipe",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e91/e916124a358d7f7bf72386b3c303ee13.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102644Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1e56cad93147abc12e40a81e70eaa60ddeb6ad5313d71a0fdab779df7c32ff90",
        "source": "Serious Eats",
        "url": "http://www.seriouseats.com/recipes/2014/01/breakfast-sausage-mushroom-cheddar-roll-recipe.html",
        "shareAs": "http://www.edamam.com/recipe/breakfast-sausage-mushroom-and-cheddar-rolls-recipe-80ffa6f067ed26dd624de1afcc838448/breakfast",
        "yield": 10,
        "ingredientLines": [
            "1/2 pound breakfast sausage (about 10 links)",
            "10 ounces button mushrooms, finely chopped",
            "4 sprigs thyme",
            "1/2 cup grated sharp Cheddar cheese",
            "1 pound puff pastry, thawed if frozen",
            "1 egg, beaten",
            "Kosher salt and freshly ground black pepper",
            "Hot English or Dijon mustard for serving"
        ],
        "ingredients": [
            {
                "text": "1/2 pound breakfast sausage (about 10 links)",
                "quantity": 10,
                "measure": "link",
                "food": "sausage",
                "weight": 250,
                "foodCategory": "Cured meats",
                "foodId": "food_aidvlr4a5hvqixbbd5rbhbb3wiri",
                "image": "https://www.edamam.com/food-img/2c7/2c73a127447b754a803e3804898a1afd.jpg"
            },
            {
                "text": "10 ounces button mushrooms, finely chopped",
                "quantity": 10,
                "measure": "ounce",
                "food": "button mushrooms",
                "weight": 283.49523125,
                "foodCategory": "vegetables",
                "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
                "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
            },
            {
                "text": "4 sprigs thyme",
                "quantity": 4,
                "measure": "sprig",
                "food": "thyme",
                "weight": 12,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
                "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
                "text": "1/2 cup grated sharp Cheddar cheese",
                "quantity": 0.5,
                "measure": "cup",
                "food": "Cheddar cheese",
                "weight": 66,
                "foodCategory": "Cheese",
                "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            },
            {
                "text": "1 pound puff pastry, thawed if frozen",
                "quantity": 1,
                "measure": "pound",
                "food": "puff pastry",
                "weight": 453.59237,
                "foodCategory": "quick breads and pastries",
                "foodId": "food_bdy019nbzjeni3atliworbbgahrk",
                "image": "https://www.edamam.com/food-img/bc7/bc7dc9b99ce87d5a6dc136e30d6aadd1.jpg"
            },
            {
                "text": "1 egg, beaten",
                "quantity": 1,
                "measure": "<unit>",
                "food": "egg",
                "weight": 43,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "Kosher salt and freshly ground black pepper",
                "quantity": 0,
                "measure": null,
                "food": "Kosher salt",
                "weight": 6.8285256075000005,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "Kosher salt and freshly ground black pepper",
                "quantity": 0,
                "measure": null,
                "food": "black pepper",
                "weight": 3.4142628037500002,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
                "text": "Hot English or Dijon mustard for serving",
                "quantity": 1,
                "measure": "serving",
                "food": "Dijon mustard",
                "weight": 30,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
                "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
            }
        ],
        "totalTime": 40,
        "cuisineType": [
            "british"
        ],
        "mealType": [
            "breakfast"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Mini Breakfast Cookie & Yogurt",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f07/f079c0441daa56a0d4e87aa9b556370c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102644Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fc30f6a093241ea4555b78aa8c280b60259ba39d0e16a4a8daf5e2e0210a4fd4",
        "source": "EatingWell",
        "url": "http://www.eatingwell.com/recipe/266418/mini-breakfast-cookie-yogurt/",
        "shareAs": "http://www.edamam.com/recipe/mini-breakfast-cookie-yogurt-51e55d07a1235eda0fc8f059a9eff5c4/breakfast",
        "yield": 1,
        "ingredientLines": [
            "1 oatmeal raisin mini breakfast cookie",
            "5⅓ ounces nonfat organic vanilla Greek yogurt",
            "1 cup raspberries"
        ],
        "ingredients": [
            {
                "text": "1 oatmeal raisin mini breakfast cookie",
                "quantity": 1,
                "measure": "<unit>",
                "food": "cookie",
                "weight": 16,
                "foodCategory": "quick breads and pastries",
                "foodId": "food_b8hkw37asceztnbj3sfiuajjet67",
                "image": "https://www.edamam.com/food-img/376/376e4b71a4c4f3a57b554dce6652cca2.jpg"
            },
            {
                "text": "5⅓ ounces nonfat organic vanilla Greek yogurt",
                "quantity": 5.333333333333333,
                "measure": "ounce",
                "food": "Greek yogurt",
                "weight": 151.19745666666665,
                "foodCategory": "yogurt",
                "foodId": "food_bllzl82a5fkj4yanmzoztapdyryz",
                "image": "https://www.edamam.com/food-img/689/6891387401f579242e7303ce8ec00e18.jpg"
            },
            {
                "text": "1 cup raspberries",
                "quantity": 1,
                "measure": "cup",
                "food": "raspberries",
                "weight": 123,
                "foodCategory": "fruit",
                "foodId": "food_al3e7s2a1lm4i6bga7o0abp399zg",
                "image": "https://www.edamam.com/food-img/a67/a671e604bed03c27259eab176c781e22.jpg"
            }
        ],
        "totalTime": 5,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "breakfast"
        ],
        "dishType": [
            "biscuits and cookies"
        ]
    },
    {
        "label": "Breakfast Patty Melt recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/cd2/cd22b14330062e18fbdf3f41017d4bb9?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102644Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1fb9de037091cd5f36a3dee37955949e41f977d4703a189c35d7a50254d87a2a",
        "source": "Pioneer Woman",
        "url": "http://thepioneerwoman.com/cooking/breakfast-patty-melt/",
        "shareAs": "http://www.edamam.com/recipe/breakfast-patty-melt-recipes-da57ba7e791f6848a9f0607ab2f4d2d6/breakfast",
        "yield": 2,
        "ingredientLines": [
            "4 Tablespoons Butter, More If Needed",
            "1/2 whole Medium Yellow Onion, Sliced",
            "1/4 pound Breakfast Sausage (Jimmy Dean, JC Potter, Etc)",
            "2 whole Eggs, Beaten",
            "3 slices Cheddar, Swiss, Provolone, Or Other Cheese",
            "2 slices Bread (sourdough, Rye, Whole Wheat, Etc.)"
        ],
        "ingredients": [
            {
                "text": "4 Tablespoons Butter, More If Needed",
                "quantity": 4,
                "measure": "tablespoon",
                "food": "Butter",
                "weight": 56.8,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "1/2 whole Medium Yellow Onion, Sliced",
                "quantity": 0.5,
                "measure": "<unit>",
                "food": "Yellow Onion",
                "weight": 62.5,
                "foodCategory": "vegetables",
                "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
                "text": "1/4 pound Breakfast Sausage (Jimmy Dean, JC Potter, Etc)",
                "quantity": 0.25,
                "measure": "pound",
                "food": "Sausage",
                "weight": 113.3980925,
                "foodCategory": "Cured meats",
                "foodId": "food_aidvlr4a5hvqixbbd5rbhbb3wiri",
                "image": "https://www.edamam.com/food-img/2c7/2c73a127447b754a803e3804898a1afd.jpg"
            },
            {
                "text": "2 whole Eggs, Beaten",
                "quantity": 2,
                "measure": "<unit>",
                "food": "Eggs",
                "weight": 86,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "3 slices Cheddar, Swiss, Provolone, Or Other Cheese",
                "quantity": 3,
                "measure": "slice",
                "food": "Cheddar",
                "weight": 84,
                "foodCategory": "Cheese",
                "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            },
            {
                "text": "2 slices Bread (sourdough, Rye, Whole Wheat, Etc.)",
                "quantity": 2,
                "measure": "slice",
                "food": "Bread",
                "weight": 58,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
                "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
            }
        ],
        "totalTime": 35,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "sandwiches"
        ]
    },
    {
        "label": "Sausage and Potato Breakfast Casserole",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/0a9/0a9c66d16ead80b99ac5678978e124e7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102644Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4069a7b05bd7dd0b450dd6a7617e075dc530b412d6f8e64ebbf40c77f29951a1",
        "source": "Epicurious",
        "url": "https://www.epicurious.com/recipes/food/views/sausage-and-potato-breakfast-casserole-4387",
        "shareAs": "http://www.edamam.com/recipe/sausage-and-potato-breakfast-casserole-2a6125db43a0cfa7378d4c96b1a021f7/breakfast",
        "yield": 6,
        "ingredientLines": [
            "1 pound bulk breakfast sausage",
            "2 tablespoons all purpose flour",
            "1 1/2 cups milk (do not use low-fat or nonfat)",
            "1 1-pound package frozen shredded hash brown potatoes",
            "4 green onions, finely chopped",
            "1 1/4 cups grated sharp cheddar cheese"
        ],
        "ingredients": [
            {
                "text": "1 pound bulk breakfast sausage",
                "quantity": 1,
                "measure": "pound",
                "food": "sausage",
                "weight": 453.59237,
                "foodCategory": "Cured meats",
                "foodId": "food_aidvlr4a5hvqixbbd5rbhbb3wiri",
                "image": "https://www.edamam.com/food-img/2c7/2c73a127447b754a803e3804898a1afd.jpg"
            },
            {
                "text": "2 tablespoons all purpose flour",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "all purpose flour",
                "weight": 15.62499999973582,
                "foodCategory": "grains",
                "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
                "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
            },
            {
                "text": "1 1/2 cups milk (do not use low-fat or nonfat)",
                "quantity": 1.5,
                "measure": "cup",
                "food": "milk",
                "weight": 366,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "1 1-pound package frozen shredded hash brown potatoes",
                "quantity": 1,
                "measure": "pound",
                "food": "potatoes",
                "weight": 453.59237,
                "foodCategory": "vegetables",
                "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
                "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
            },
            {
                "text": "4 green onions, finely chopped",
                "quantity": 4,
                "measure": "<unit>",
                "food": "green onions",
                "weight": 55.555555555555564,
                "foodCategory": "vegetables",
                "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
                "text": "1 1/4 cups grated sharp cheddar cheese",
                "quantity": 1.25,
                "measure": "cup",
                "food": "cheddar cheese",
                "weight": 165,
                "foodCategory": "Cheese",
                "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "breakfast"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Breakfast Casserole with Mushroom \"Gravy\"",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f4c/f4c9fe167ef8227b80a30227ef503607.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102644Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=38541cf36e2d0b317c5f1d929227323caee3464109d7a70b3926261511e734dc",
        "source": "Food52",
        "url": "https://food52.com/recipes/40963-breakfast-casserole-with-mushroom-gravy",
        "shareAs": "http://www.edamam.com/recipe/breakfast-casserole-with-mushroom-gravy-1ca063c8b9ed284c77ee5f61460f5461/breakfast",
        "yield": 10,
        "ingredientLines": [
            "1 pound breakfast sausage",
            "4 cups shredded cheddar cheese",
            "8 slices of bread",
            "6 eggs",
            "2 cups milk + 1/2 cup milk, reserved",
            "1 can of Cream of Mushroom soup",
            "1/2 tablespoon dried Italian Herbs",
            "3/4 teaspoon dry mustard powder",
            "1/2 teaspoon salt",
            "Freshly cracked black pepper"
        ],
        "ingredients": [
            {
                "text": "1 pound breakfast sausage",
                "quantity": 1,
                "measure": "pound",
                "food": "sausage",
                "weight": 453.59237,
                "foodCategory": "Cured meats",
                "foodId": "food_aidvlr4a5hvqixbbd5rbhbb3wiri",
                "image": "https://www.edamam.com/food-img/2c7/2c73a127447b754a803e3804898a1afd.jpg"
            },
            {
                "text": "4 cups shredded cheddar cheese",
                "quantity": 4,
                "measure": "cup",
                "food": "cheddar cheese",
                "weight": 452,
                "foodCategory": "Cheese",
                "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            },
            {
                "text": "8 slices of bread",
                "quantity": 8,
                "measure": "slice",
                "food": "bread",
                "weight": 232,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
                "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
            },
            {
                "text": "6 eggs",
                "quantity": 6,
                "measure": "<unit>",
                "food": "eggs",
                "weight": 258,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "2 cups milk + 1/2 cup milk, reserved",
                "quantity": 2,
                "measure": "cup",
                "food": "milk",
                "weight": 488,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "1 can of Cream of Mushroom soup",
                "quantity": 1,
                "measure": "can",
                "food": "Cream of Mushroom soup",
                "weight": 303,
                "foodCategory": "canned soup",
                "foodId": "food_b628l7bbpw7rnqa1ri8egb0xetpn",
                "image": "https://www.edamam.com/food-img/545/545d0db4311588977bed0aabfa530c58.jpg"
            },
            {
                "text": "1/2 tablespoon dried Italian Herbs",
                "quantity": 0.5,
                "measure": "tablespoon",
                "food": "Herbs",
                "weight": 1.35,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
            },
            {
                "text": "3/4 teaspoon dry mustard powder",
                "quantity": 0.75,
                "measure": "teaspoon",
                "food": "mustard powder",
                "weight": 1.5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b0xqxo3a93nsz8a6ppdilau4ujwt",
                "image": "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg"
            },
            {
                "text": "1/2 teaspoon salt",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "salt",
                "weight": 3,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "Freshly cracked black pepper",
                "quantity": 0,
                "measure": null,
                "food": "black pepper",
                "weight": 6.577327110000001,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "breakfast"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Breakfast Focaccia recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fa7/fa78d1cd0b98a051db016a42e3a13aac?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102644Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=31f660900042fc79873d5f6069bf47d6f3acdbb220cef76e229be5309758cedc",
        "source": "Tasting Table",
        "url": "http://www.tastingtable.com/cook/recipes/breakfast-focaccia-bread-bacon-sausage-eggs-sheet-tray-meal",
        "shareAs": "http://www.edamam.com/recipe/breakfast-focaccia-recipes-bf7f5d9e327aa706986e6f717c053bbd/breakfast",
        "yield": 7,
        "ingredientLines": [
            "1 cup whole milk, heated to 115°",
            "2¼ teaspoons (¼ ounce) active dry yeast",
            "¼ teaspoon sugar",
            "5 cups flour",
            "1 cup water",
            "1 cup grated cheddar cheese, divided",
            "⅓ cup extra-virgin olive oil, plus more for greasing and brushing",
            "2 teaspoons kosher salt",
            "6 ounces breakfast sausage, cooked and cut into 1-inch pieces",
            "4 strips cooked bacon, cut into 1-inch pieces",
            "1 roasted red pepper, sliced into strips",
            "6 eggs",
            "sea salt flakes",
            "chopped parsley",
            "thyme"
        ],
        "ingredients": [
            {
                "text": "1 cup whole milk, heated to 115°",
                "quantity": 1,
                "measure": "cup",
                "food": "whole milk",
                "weight": 244,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "2¼ teaspoons (¼ ounce) active dry yeast",
                "quantity": 0.25,
                "measure": "ounce",
                "food": "yeast",
                "weight": 7.08738078125,
                "foodCategory": "condiments and sauces",
                "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
                "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
            },
            {
                "text": "¼ teaspoon sugar",
                "quantity": 0.25,
                "measure": "teaspoon",
                "food": "sugar",
                "weight": 1.05,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "5 cups flour",
                "quantity": 5,
                "measure": "cup",
                "food": "flour",
                "weight": 625,
                "foodCategory": "grains",
                "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
                "text": "1 cup water",
                "quantity": 1,
                "measure": "cup",
                "food": "water",
                "weight": 236.5882365,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "1 cup grated cheddar cheese, divided",
                "quantity": 1,
                "measure": "cup",
                "food": "cheddar cheese",
                "weight": 132,
                "foodCategory": "Cheese",
                "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            },
            {
                "text": "⅓ cup extra-virgin olive oil, plus more for greasing and brushing",
                "quantity": 0.3333333333333333,
                "measure": "cup",
                "food": "extra-virgin olive oil",
                "weight": 72,
                "foodCategory": "Oils",
                "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
                "text": "2 teaspoons kosher salt",
                "quantity": 2,
                "measure": "teaspoon",
                "food": "kosher salt",
                "weight": 9.70833333382575,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "6 ounces breakfast sausage, cooked and cut into 1-inch pieces",
                "quantity": 6,
                "measure": "ounce",
                "food": "sausage",
                "weight": 170.09713875,
                "foodCategory": "Cured meats",
                "foodId": "food_aidvlr4a5hvqixbbd5rbhbb3wiri",
                "image": "https://www.edamam.com/food-img/2c7/2c73a127447b754a803e3804898a1afd.jpg"
            },
            {
                "text": "4 strips cooked bacon, cut into 1-inch pieces",
                "quantity": 4,
                "measure": "strip",
                "food": "bacon",
                "weight": 116,
                "foodCategory": "cured meats",
                "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
                "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
            },
            {
                "text": "1 roasted red pepper, sliced into strips",
                "quantity": 1,
                "measure": "<unit>",
                "food": "roasted red pepper",
                "weight": 73,
                "foodCategory": "vegetables",
                "foodId": "food_b3qdnlvaxpt1i3ayle41la3mow3z",
                "image": "https://www.edamam.com/food-img/7f8/7f874d848dbb46bf1dfa5418564a736c.jpeg"
            },
            {
                "text": "6 eggs",
                "quantity": 6,
                "measure": "<unit>",
                "food": "eggs",
                "weight": 258,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "sea salt flakes",
                "quantity": 0,
                "measure": null,
                "food": "sea salt",
                "weight": 11.667186536190455,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "chopped parsley",
                "quantity": 0,
                "measure": null,
                "food": "parsley",
                "weight": 19.44531089365076,
                "foodCategory": "vegetables",
                "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            },
            {
                "text": "thyme",
                "quantity": 0,
                "measure": null,
                "food": "thyme",
                "weight": 19.44531089365076,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
                "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            }
        ],
        "totalTime": 45,
        "cuisineType": [
            "italian"
        ],
        "mealType": [
            "breakfast"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Tropical Breakfast Parfait",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b07/b072b5e540fe302ead7a4ac06e6435f2.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102644Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dc03613bcd7fffbed48ba96fd74609d7f4df5f421b48ac7b719ecb97dec7ad11",
        "source": "Food Network",
        "url": "https://www.foodnetwork.com/recipes/rachael-ray/tropical-breakfast-parfait-recipe-1957021",
        "shareAs": "http://www.edamam.com/recipe/tropical-breakfast-parfait-c19d40657bc8143f784e5a6e3bbd6353/breakfast",
        "yield": 4,
        "ingredientLines": [
            "2 cups vanilla yogurt (low-fat or non-fat is fine)",
            "1 small can mandarin oranges, drained",
            "3/4 cup crisped rice breakfast cereal",
            "1 cup diced fresh pineapple"
        ],
        "ingredients": [
            {
                "text": "2 cups vanilla yogurt (low-fat or non-fat is fine)",
                "quantity": 2,
                "measure": "cup",
                "food": "vanilla yogurt",
                "weight": 490,
                "foodCategory": "yogurt",
                "foodId": "food_anys5uea4c804kadsixwvbcjpjov",
                "image": "https://www.edamam.com/food-img/1f8/1f80a36cdee5108b37e6a2da2dd04a76.jpg"
            },
            {
                "text": "1 small can mandarin oranges, drained",
                "quantity": 1,
                "measure": "<unit>",
                "food": "mandarin oranges",
                "weight": 28.3,
                "foodCategory": "fruit",
                "foodId": "food_a24i0asarijf6nbnhkbbrbgy91bw",
                "image": "https://www.edamam.com/food-img/f82/f82193abe21e23c1562bb5340f74e336.jpg"
            },
            {
                "text": "3/4 cup crisped rice breakfast cereal",
                "quantity": 0.75,
                "measure": "cup",
                "food": "breakfast cereal",
                "weight": 37.5,
                "foodCategory": "ready-to-eat cereals",
                "foodId": "food_adc1nzdb5zh4wya5q99krac7k8q6",
                "image": "https://www.edamam.com/food-img/3bb/3bb0ff128db2dbf9b5e570a23e37f648.jpg"
            },
            {
                "text": "1 cup diced fresh pineapple",
                "quantity": 1,
                "measure": "cup",
                "food": "pineapple",
                "weight": 165,
                "foodCategory": "fruit",
                "foodId": "food_b5maw38amr54vpat8d5vhbgmqfxn",
                "image": "https://www.edamam.com/food-img/2da/2da6f2397ab64ed185c082edebc4dd7c.jpg"
            }
        ],
        "totalTime": 5,
        "cuisineType": [
            "french"
        ],
        "mealType": [
            "breakfast"
        ],
        "dishType": [
            "starter"
        ]
    }
,
    {
        "label": "Snack Stackers (Lunch Box Surprise)",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/25e/25e6050264942ae29dbb62944400393e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df2b2d42b06ea9dc99180928dc162919dcace94161dbb6e0d72829213f100617",
        "source": "food.com",
        "url": "http://www.food.com/recipe/snack-stackers-lunch-box-surprise-251773",
        "shareAs": "http://www.edamam.com/recipe/snack-stackers-lunch-box-surprise-b989b7376989ae016708c511bf642115/lunch+recipes",
        "yield": 1,
        "ingredientLines": [
            "1 slice lunch meat",
            "1 slice cheese",
            "4 Ritz crackers"
        ],
        "ingredients": [
            {
                "text": "1 slice lunch meat",
                "quantity": 1,
                "measure": "slice",
                "food": "meat",
                "weight": 57,
                "foodCategory": "meats",
                "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
                "text": "1 slice cheese",
                "quantity": 1,
                "measure": "slice",
                "food": "cheese",
                "weight": 28,
                "foodCategory": "Cheese",
                "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            },
            {
                "text": "4 Ritz crackers",
                "quantity": 4,
                "measure": "<unit>",
                "food": "Ritz crackers",
                "weight": 13.2,
                "foodCategory": "crackers",
                "foodId": "food_a7e70joahmaymibybmv10buc9vxy",
                "image": "https://www.edamam.com/food-img/752/7526e07c93cab399169fad9a7c04d7a1.png"
            }
        ],
        "totalTime": 5,
        "cuisineType": [
            "british"
        ],
        "mealType": [
            "breakfast",
            "lunch/dinner",
            "snack"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Pickle Roll-Ups",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c45/c45441fbc7e80360738a9d6e96db8213.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=66587e24b20cf131b045b0333b1cec139dfd61eb61b53b1e54081182c2c7cf1c",
        "source": "pipandebby.com",
        "url": "http://www.pipandebby.com/pip-ebby/2010/11/26/pickle-roll-ups.html",
        "shareAs": "http://www.edamam.com/recipe/pickle-roll-ups-24fbd6ed5421e3702dec6aaee4847ff4/lunch+recipes",
        "yield": 4,
        "ingredientLines": [
            "8 slices corned beef lunch meat",
            "4 oz. cream cheese",
            "4 medium dill pickles"
        ],
        "ingredients": [
            {
                "text": "8 slices corned beef lunch meat",
                "quantity": 8,
                "measure": "slice",
                "food": "meat",
                "weight": 456,
                "foodCategory": "meats",
                "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
                "text": "4 oz. cream cheese",
                "quantity": 4,
                "measure": "ounce",
                "food": "cream cheese",
                "weight": 113.3980925,
                "foodCategory": "Cheese",
                "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
            },
            {
                "text": "4 medium dill pickles",
                "quantity": 4,
                "measure": "<unit>",
                "food": "dill pickles",
                "weight": 260,
                "foodCategory": "vegetables",
                "foodId": "food_brxuwiub7to3nnb38uxhtb445ewf",
                "image": "https://www.edamam.com/food-img/03f/03fa7b874c54364a179587981c4fb8da.jpeg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Little Reubens",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4b2/4b2be9a26859494b8b34479d6aed3f50.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3b64ea65604096a4a1ff96b7d81c35e849cc6d78dba46b87a897f1bbabf932d4",
        "source": "food.com",
        "url": "http://www.food.com/recipe/little-reubens-135971",
        "shareAs": "http://www.edamam.com/recipe/little-reubens-7fb6828be530e56b707519bacb89b80c/lunch+recipes",
        "yield": 48,
        "ingredientLines": [
            "2 (8 ounce) cans refrigerated crescent dinner rolls",
            "1 cup sauerkraut, rinsed and patted dry",
            "1 (16 ounce) package Little Smokies sausages (for lunch) or 2 (8 count) packages hot dogs (for lunch)",
            "1 cup thousand island dressing",
            "1 teaspoon prepared horseradish (or to taste)"
        ],
        "ingredients": [
            {
                "text": "2 (8 ounce) cans refrigerated crescent dinner rolls",
                "quantity": 16,
                "measure": "ounce",
                "food": "dinner rolls",
                "weight": 453.59237,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
            },
            {
                "text": "1 cup sauerkraut, rinsed and patted dry",
                "quantity": 1,
                "measure": "cup",
                "food": "sauerkraut",
                "weight": 142,
                "foodCategory": "vegetables",
                "foodId": "food_arysj9zbwxj534aw7zlhib58ord8",
                "image": "https://www.edamam.com/food-img/984/9846ab937bdc1208eb71b29709a754c6.jpg"
            },
            {
                "text": "1 (16 ounce) package Little Smokies sausages (for lunch) or 2 (8 count) packages hot dogs (for lunch)",
                "quantity": 16,
                "measure": "ounce",
                "food": "sausages",
                "weight": 453.59237,
                "foodCategory": "Cured meats",
                "foodId": "food_aidvlr4a5hvqixbbd5rbhbb3wiri",
                "image": "https://www.edamam.com/food-img/2c7/2c73a127447b754a803e3804898a1afd.jpg"
            },
            {
                "text": "1 cup thousand island dressing",
                "quantity": 1,
                "measure": "cup",
                "food": "thousand island dressing",
                "weight": 250,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_aau8cxwbsxwl7ia76kbwxbqnsjft",
                "image": "https://www.edamam.com/food-img/e27/e27d68c67e85fc1579c5bc856f0171ff.jpg"
            },
            {
                "text": "1 teaspoon prepared horseradish (or to taste)",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "prepared horseradish",
                "weight": 5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bt10wq1burha64az05cdka9pweff",
                "image": "https://www.edamam.com/food-img/cc8/cc83e12eb36bdcc3015201c1cfac8656.jpg"
            }
        ],
        "totalTime": 27,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "sandwiches"
        ]
    },
    {
        "label": "Pickle Beef Roll-Ups",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/640/6405daf971e6656d0b8a73d327c2c673.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3d8f2fe85656818c032664a777f8886225272bdbcefdd0c562d926d1bfa59088",
        "source": "completerecipes.com",
        "url": "https://completerecipes.com/pickle-beef-roll-ups.html",
        "shareAs": "http://www.edamam.com/recipe/pickle-beef-roll-ups-9894d7bdc72941d91f4f749a4b380604/lunch+recipes",
        "yield": 4,
        "ingredientLines": [
            "8 slices corned beef lunch meat",
            "4 ounces cream cheese",
            "14 medium dill pickles"
        ],
        "ingredients": [
            {
                "text": "8 slices corned beef lunch meat",
                "quantity": 8,
                "measure": "slice",
                "food": "meat",
                "weight": 456,
                "foodCategory": "meats",
                "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
                "text": "4 ounces cream cheese",
                "quantity": 4,
                "measure": "ounce",
                "food": "cream cheese",
                "weight": 113.3980925,
                "foodCategory": "Cheese",
                "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
            },
            {
                "text": "14 medium dill pickles",
                "quantity": 14,
                "measure": "<unit>",
                "food": "dill pickles",
                "weight": 910,
                "foodCategory": "vegetables",
                "foodId": "food_brxuwiub7to3nnb38uxhtb445ewf",
                "image": "https://www.edamam.com/food-img/03f/03fa7b874c54364a179587981c4fb8da.jpeg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Turkey and Cheese Bagel Sandwich",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f87/f87228369a4c1815071cd34751be8acd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6777711f58c1521e541aecc747c79e47c41efead63c822512cd09f8e86af1bae",
        "source": "sofabfood.com",
        "url": "http://www.sofabfood.com/turkey-egg-and-cheese-bagel-sandwich-with-video/",
        "shareAs": "http://www.edamam.com/recipe/turkey-and-cheese-bagel-sandwich-4d423bad0da20d82577e7b2bdeba0af6/lunch+recipes",
        "yield": 4,
        "ingredientLines": [
            "* 1 wheat bagel",
            "* 2 egg",
            "* 2 piece of turkey lunch meat",
            "* 1/4 cup of shredded cheese",
            "* dash of water"
        ],
        "ingredients": [
            {
                "text": "* 1 wheat bagel",
                "quantity": 1,
                "measure": "<unit>",
                "food": "wheat bagel",
                "weight": 98,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_ayw82n7aw6w4bfa0pzwbdainpkvw",
                "image": "https://www.edamam.com/food-img/15b/15b524b2aa86a51f71aaccf8b56b55c7.png"
            },
            {
                "text": "* 2 egg",
                "quantity": 2,
                "measure": "<unit>",
                "food": "egg",
                "weight": 86,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "* 2 piece of turkey lunch meat",
                "quantity": 2,
                "measure": "piece",
                "food": "meat",
                "weight": 170,
                "foodCategory": "meats",
                "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
                "text": "* 1/4 cup of shredded cheese",
                "quantity": 0.25,
                "measure": "cup",
                "food": "cheese",
                "weight": 28.25,
                "foodCategory": "Cheese",
                "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            },
            {
                "text": "* dash of water",
                "quantity": 1,
                "measure": "dash",
                "food": "water",
                "weight": 0.616115199,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "sandwiches"
        ]
    },
    {
        "label": "Yummy & Juicy Turkey Quesadilla",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/011/0111b060a6af66aba6845aeb2203f118.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e7d8ab5c0f6285c77a1c5289778bfc59cff590ce66a69c2663794d38f30e610b",
        "source": "BigOven",
        "url": "http://www.bigoven.com/recipe/Yummy--Juicy-Turkey-Quesadilla/289771",
        "shareAs": "http://www.edamam.com/recipe/yummy-juicy-turkey-quesadilla-41d166b642554f8b1ceb257258a21d00/lunch+recipes",
        "yield": 1,
        "ingredientLines": [
            "2 flour tortillas",
            "1 cup cheese",
            "4 - 5 slices turkey lunch meat",
            "Hot sauce (optional)"
        ],
        "ingredients": [
            {
                "text": "2 flour tortillas",
                "quantity": 2,
                "measure": "<unit>",
                "food": "flour tortillas",
                "weight": 98,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_a9ql6pdb639bs5b2nlvbob3w0mlj",
                "image": "https://www.edamam.com/food-img/357/357e415685787e6d6844e8d08c1b1586.jpg"
            },
            {
                "text": "1 cup cheese",
                "quantity": 1,
                "measure": "cup",
                "food": "cheese",
                "weight": 132,
                "foodCategory": "Cheese",
                "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            },
            {
                "text": "4 - 5 slices turkey lunch meat",
                "quantity": 4.5,
                "measure": "slice",
                "food": "meat",
                "weight": 256.5,
                "foodCategory": "meats",
                "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            },
            {
                "text": "Hot sauce (optional)",
                "quantity": 0,
                "measure": null,
                "food": "Hot sauce",
                "weight": 0,
                "foodCategory": "canned soup",
                "foodId": "food_a6201h1bu1m0tfbrvis6ma6nvhzv",
                "image": "https://www.edamam.com/food-img/946/946c38a4c278da4361d2615d653d685a.jpg"
            }
        ],
        "totalTime": 5,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "brunch"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Crispy Potato Mojos recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/77a/77a79534149036235152fa0c40ecf02b?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7d4183076f7e78fdfa61d6d595876af71f211496c3e992a1fbc375fcc243d8bc",
        "source": "Pinch of Yum",
        "url": "http://pinchofyum.com/crispy-potato-mojos",
        "shareAs": "http://www.edamam.com/recipe/crispy-potato-mojos-recipes-513461d4bd4bc0c3d83c19c46ed58229/lunch+recipes",
        "yield": 5,
        "ingredientLines": [
            "4 potatoes, washed",
            "1 cup milk",
            "1½ cups fried chicken breading mix, like Shore Lunch brand or Oven Fry brand",
            "oil"
        ],
        "ingredients": [
            {
                "text": "4 potatoes, washed",
                "quantity": 4,
                "measure": "<unit>",
                "food": "potatoes",
                "weight": 852,
                "foodCategory": "vegetables",
                "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
                "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
            },
            {
                "text": "1 cup milk",
                "quantity": 1,
                "measure": "cup",
                "food": "milk",
                "weight": 244,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "1½ cups fried chicken breading mix, like Shore Lunch brand or Oven Fry brand",
                "quantity": 1.5,
                "measure": "<unit>",
                "food": "fried chicken",
                "weight": 24,
                "foodCategory": "sandwhiches",
                "foodId": "food_alxugipafrrbkaa7nha90a0xyzuz",
                "image": "https://www.edamam.com/food-img/36b/36b69cbc3200dc7bd7de8224c2c87187.jpg"
            },
            {
                "text": "oil",
                "quantity": 0,
                "measure": null,
                "food": "oil",
                "weight": 15.232,
                "foodCategory": "Oils",
                "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
            }
        ],
        "totalTime": 30,
        "cuisineType": [
            "south american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Victory's Deli Pickle Wraps",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e9a/e9a3e6873d0fbb542df4aacfcf928351.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=af50e65ce263a66d92b2e9010d6e7d5923065168b4063621aa01875f6f7f784c",
        "source": "food.com",
        "url": "http://www.food.com/recipe/victorys-deli-pickle-wraps-221518",
        "shareAs": "http://www.edamam.com/recipe/victory-s-deli-pickle-wraps-c656f64b5d327ac68bfd9547f1de936d/lunch+recipes",
        "yield": 30,
        "ingredientLines": [
            "2 (32 ounce) jars baby dill pickles",
            "1 (8 ounce) package cream cheese",
            "5 (2 1/2 ounce) packagesthin sliced deli lunch meat"
        ],
        "ingredients": [
            {
                "text": "2 (32 ounce) jars baby dill pickles",
                "quantity": 64,
                "measure": "ounce",
                "food": "dill pickles",
                "weight": 1814.36948,
                "foodCategory": "vegetables",
                "foodId": "food_brxuwiub7to3nnb38uxhtb445ewf",
                "image": "https://www.edamam.com/food-img/03f/03fa7b874c54364a179587981c4fb8da.jpeg"
            },
            {
                "text": "1 (8 ounce) package cream cheese",
                "quantity": 8,
                "measure": "ounce",
                "food": "cream cheese",
                "weight": 226.796185,
                "foodCategory": "Cheese",
                "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
            },
            {
                "text": "5 (2 1/2 ounce) packagesthin sliced deli lunch meat",
                "quantity": 12.5,
                "measure": "ounce",
                "food": "meat",
                "weight": 354.3690390625,
                "foodCategory": "meats",
                "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            }
        ],
        "totalTime": 20,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "salad"
        ]
    },
    {
        "label": "Homemade Freezer Breakfast Sandwiches",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c7f/c7f764ad70eb009ca590f546b86e7103.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1819d2c3190abe26148057144bbde4b83f171ab8b2b843aee6bebfc7a894ed7f",
        "source": "frugalitygal.com",
        "url": "http://frugalitygal.com/2015/09/freezer-breakfast-sandwiches-recipe.html",
        "shareAs": "http://www.edamam.com/recipe/homemade-freezer-breakfast-sandwiches-6da4f68441667f83ea3678b62c5e2af4/lunch+recipes",
        "yield": 22,
        "ingredientLines": [
            "* 1 1/2 dozen egg",
            "* 18 english muffin (3 pack of 6)",
            "* 18 slice of cheese",
            "* 1 lb sliced lunch meat"
        ],
        "ingredients": [
            {
                "text": "* 1 1/2 dozen egg",
                "quantity": 18,
                "measure": "<unit>",
                "food": "egg",
                "weight": 774,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "* 18 english muffin (3 pack of 6)",
                "quantity": 18,
                "measure": "<unit>",
                "food": "english muffin",
                "weight": 1026,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_a2cnfomb05l36abpxyronby1slmi",
                "image": "https://www.edamam.com/food-img/27b/27be1e4962864c7ac5ef87013879a352.jpg"
            },
            {
                "text": "* 18 slice of cheese",
                "quantity": 18,
                "measure": "slice",
                "food": "cheese",
                "weight": 504,
                "foodCategory": "Cheese",
                "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            },
            {
                "text": "* 1 lb sliced lunch meat",
                "quantity": 1,
                "measure": "pound",
                "food": "meat",
                "weight": 453.59237,
                "foodCategory": "meats",
                "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "sandwiches"
        ]
    },
    {
        "label": "Crock Pot Reuben Dip Recipe",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/3c9/3c907bb9498562ad955473c59382c732.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=78be672223da17a80f9f2f5946cfd8152ad44321c0a3e516aea1d25759fa5ab7",
        "source": "tammileetips.com",
        "url": "https://www.tammileetips.com/2015/01/crock-pot-reuben-dip-recipe/",
        "shareAs": "http://www.edamam.com/recipe/crock-pot-reuben-dip-recipe-a5179face00a541c1d580d2ac7fa367d/lunch+recipes",
        "yield": 8,
        "ingredientLines": [
            "1 jar sauerkraut, 32oz, drained",
            "2 cup shredded swiss cheese",
            "1 lunch meat package of corned beef,",
            "1/2 cup butter, melted"
        ],
        "ingredients": [
            {
                "text": "1 jar sauerkraut, 32oz, drained",
                "quantity": 32,
                "measure": "ounce",
                "food": "sauerkraut",
                "weight": 907.18474,
                "foodCategory": "vegetables",
                "foodId": "food_arysj9zbwxj534aw7zlhib58ord8",
                "image": "https://www.edamam.com/food-img/984/9846ab937bdc1208eb71b29709a754c6.jpg"
            },
            {
                "text": "2 cup shredded swiss cheese",
                "quantity": 2,
                "measure": "cup",
                "food": "swiss cheese",
                "weight": 216,
                "foodCategory": "Cheese",
                "foodId": "food_am9c0zybyfhgn9brc0imabzslets",
                "image": "https://www.edamam.com/food-img/419/419f6ce36db411c072d0dbf6c8510897.jpg"
            },
            {
                "text": "1 lunch meat package of corned beef,",
                "quantity": 1,
                "measure": "<unit>",
                "food": "corned beef",
                "weight": 57,
                "foodCategory": "cured meats",
                "foodId": "food_aejgdv3a562bk6a89mn8fbatgvvy",
                "image": "https://www.edamam.com/food-img/398/3987556d40b795424aca4c832bce1c4a.jpg"
            },
            {
                "text": "1/2 cup butter, melted",
                "quantity": 0.5,
                "measure": "cup",
                "food": "butter",
                "weight": 113.5,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "sandwiches"
        ]
    }
,
    {
        "label": "Chicken Caprese Appetizers",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/09d/09d160a18ce03d8033d2ee86387c44da.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102921Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2075390506474820ae5380ae66ca454af25e0dcd2c664efba1d2e5dc04348c86",
        "source": "Food52",
        "url": "https://food52.com/recipes/25168-chicken-caprese-appetizers",
        "shareAs": "http://www.edamam.com/recipe/chicken-caprese-appetizers-98b10b20ebefb815b63d9d3ec37a6041/appetizers",
        "yield": 14,
        "ingredientLines": [
            "2 boneless skinless chicken breasts, cut into 1 inch pieces",
            "2 cups Italian seasoned bread crumbs",
            "2 eggs",
            "15-20 cherry tomatoes",
            "12 mini bocconcini cut in half",
            "12-16 fresh basil leaves",
            "vegetable oil",
            "salt pepper"
        ],
        "ingredients": [
            {
                "text": "2 boneless skinless chicken breasts, cut into 1 inch pieces",
                "quantity": 2,
                "measure": "<unit>",
                "food": "boneless skinless chicken breasts",
                "weight": 544,
                "foodCategory": "Poultry",
                "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
                "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
            },
            {
                "text": "2 cups Italian seasoned bread crumbs",
                "quantity": 2,
                "measure": "cup",
                "food": "bread crumbs",
                "weight": 216,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_ata1dxza443wfda7jb4e5b3zwt9p",
                "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
            },
            {
                "text": "2 eggs",
                "quantity": 2,
                "measure": "<unit>",
                "food": "eggs",
                "weight": 86,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "15-20 cherry tomatoes",
                "quantity": 17.5,
                "measure": "<unit>",
                "food": "cherry tomatoes",
                "weight": 262.5,
                "foodCategory": "vegetables",
                "foodId": "food_a30b0hpbvavginafe0tocbf6ymje",
                "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
            },
            {
                "text": "12 mini bocconcini cut in half",
                "quantity": 12,
                "measure": "<unit>",
                "food": "bocconcini",
                "weight": 1344,
                "foodCategory": "Cheese",
                "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
                "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
            },
            {
                "text": "12-16 fresh basil leaves",
                "quantity": 14,
                "measure": "leaf",
                "food": "fresh basil",
                "weight": 7,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
                "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
            },
            {
                "text": "vegetable oil",
                "quantity": 0,
                "measure": null,
                "food": "vegetable oil",
                "weight": 33.4492,
                "foodCategory": "Oils",
                "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
            },
            {
                "text": "salt pepper",
                "quantity": 0,
                "measure": null,
                "food": "salt",
                "weight": 14.757,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "italian"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "New Flavors For Appetizers",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e4a/e4ab07449a8875722aee032caa14b97d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102921Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c8e80e7eed66fe49ee6f996e123cb4c9d725461d48f109af9f8340b7d115763d",
        "source": "Matt Bites",
        "url": "http://mattbites.com/2009/04/08/new-flavors-for-appetizers/",
        "shareAs": "http://www.edamam.com/recipe/new-flavors-for-appetizers-a27f5188872055e4bbd4ecdfc27c9cb0/appetizers",
        "yield": 8,
        "ingredientLines": [
            "1 lb sushi-grade ahi tuna, well chilled",
            "1 large or 2 small bulbs of fennel",
            "1 bunch (about eight) radishes",
            "1/4 cup fresh lemon juice",
            "1/2 cup peppery extra-virgin olive oil",
            "1 pinch sea salt and freshly ground pepper"
        ],
        "ingredients": [
            {
                "text": "1 lb sushi-grade ahi tuna, well chilled",
                "quantity": 1,
                "measure": "pound",
                "food": "ahi tuna",
                "weight": 453.59237,
                "foodCategory": "seafood",
                "foodId": "food_bu5s7alaj4fjv8bf9qxvnba38oay",
                "image": "https://www.edamam.com/food-img/022/022db6571bd5b3dfbd3ef8941c775d12.jpg"
            },
            {
                "text": "1 large or 2 small bulbs of fennel",
                "quantity": 1,
                "measure": "bulb",
                "food": "fennel",
                "weight": 175.5,
                "foodCategory": "vegetables",
                "foodId": "food_a4sdbkob8ixokpb07a42dbt3typw",
                "image": "https://www.edamam.com/food-img/038/038c19f86af781e925c97991e17b90ed.jpeg"
            },
            {
                "text": "1 bunch (about eight) radishes",
                "quantity": 1,
                "measure": "bunch",
                "food": "radishes",
                "weight": 120,
                "foodCategory": "vegetables",
                "foodId": "food_bs6xkukbtd85e7b2lh5zfazpe45y",
                "image": "https://www.edamam.com/food-img/ad7/ad78f4315cdba1dc26ccef0d7dba464b.jpg"
            },
            {
                "text": "1/4 cup fresh lemon juice",
                "quantity": 0.25,
                "measure": "cup",
                "food": "lemon juice",
                "weight": 61,
                "foodCategory": "100% juice",
                "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
            },
            {
                "text": "1/2 cup peppery extra-virgin olive oil",
                "quantity": 0.5,
                "measure": "cup",
                "food": "extra-virgin olive oil",
                "weight": 108,
                "foodCategory": "Oils",
                "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
                "text": "1 pinch sea salt and freshly ground pepper",
                "quantity": 1,
                "measure": "pinch",
                "food": "sea salt",
                "weight": 0.30338541705136723,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "1 pinch sea salt and freshly ground pepper",
                "quantity": 1,
                "measure": "pinch",
                "food": "pepper",
                "weight": 0.1437500001847091,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "mediterranean"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Swizzle-Stick Pizza Appetizers",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/043/0436c59d74c0b622c03e970a806780cb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102921Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=254d9f5de2d10575a7675bed6fae22ebc5b06bda865ef2da09c5c1c24292e94b",
        "source": "Real Simple",
        "url": "https://www.realsimple.com/food-recipes/browse-all-recipes/swizzle-stick-pizza-appetizers",
        "shareAs": "http://www.edamam.com/recipe/swizzle-stick-pizza-appetizers-ee485694492ed446e4ab7f207608b792/appetizers",
        "yield": 6,
        "ingredientLines": [
            "1 12-inch frozen cheese pizza",
            "1/3 cup store-bought pesto",
            "1 8-ounce ball fresh mozzarella, cut into 1/4-inch-thick slices",
            "1/3 cup sun-dried tomatoes, drained and thinly sliced"
        ],
        "ingredients": [
            {
                "text": "1 12-inch frozen cheese pizza",
                "quantity": 1,
                "measure": "<unit>",
                "food": "cheese pizza",
                "weight": 452,
                "foodCategory": "pizza",
                "foodId": "food_at830s9amds32fb8w6ufmaopzk8n",
                "image": "https://www.edamam.com/food-img/c01/c0150280d71059c23c025f501f502dc0.jpg"
            },
            {
                "text": "1/3 cup store-bought pesto",
                "quantity": 0.3333333333333333,
                "measure": "cup",
                "food": "pesto",
                "weight": 90.66666666666666,
                "foodCategory": "condiments and sauces",
                "foodId": "food_amlzb2yam5vuysaaikhe3a68ojnn",
                "image": "https://www.edamam.com/food-img/6e3/6e3933ee3f66304462b42f766329633c.jpg"
            },
            {
                "text": "1 8-ounce ball fresh mozzarella, cut into 1/4-inch-thick slices",
                "quantity": 8,
                "measure": "ounce",
                "food": "mozzarella",
                "weight": 226.796185,
                "foodCategory": "Cheese",
                "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
                "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
            },
            {
                "text": "1/3 cup sun-dried tomatoes, drained and thinly sliced",
                "quantity": 0.3333333333333333,
                "measure": "cup",
                "food": "sun-dried tomatoes",
                "weight": 18,
                "foodCategory": "vegetables",
                "foodId": "food_aq6acefaz2zqp1anqb7iiatc27q6",
                "image": "https://www.edamam.com/food-img/023/0231ec1c0873483bd9747d71d57e6215.jpeg"
            }
        ],
        "totalTime": 20,
        "cuisineType": [
            "italian"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter",
            "main course"
        ]
    },
    {
        "label": "Time for a Drink: the Appetizer No. 4 Recipe",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d81/d81807141e51a9e1f7c5de30dd999ce5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102921Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6c007d786a50ddcfb694c6c8f4699ab43bea4d4114223b36a2249cae05a97944",
        "source": "Serious Eats",
        "url": "http://www.seriouseats.com/recipes/2010/10/cocktails-appetizer-no-4-drinks-recipe.html",
        "shareAs": "http://www.edamam.com/recipe/time-for-a-drink-the-appetizer-no-4-recipe-3083178496f64367b70ee20af563316d/appetizers",
        "yield": 1,
        "ingredientLines": [
            "2 ounces bourbon",
            "1/2 teaspoon Cointreau",
            "3 dashes Peychaud's bitters",
            "lemon twist, for garnish"
        ],
        "ingredients": [
            {
                "text": "2 ounces bourbon",
                "quantity": 2,
                "measure": "ounce",
                "food": "bourbon",
                "weight": 56.69904625,
                "foodCategory": "liquors and cocktails",
                "foodId": "food_b88jy7va2cw6z3ao080f4b0dqg7d",
                "image": "https://www.edamam.com/food-img/0ff/0ffe9f2bc332f9add8b904467a79f818.jpg"
            },
            {
                "text": "1/2 teaspoon Cointreau",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "Cointreau",
                "weight": 2.31666666678417,
                "foodCategory": "liquors and cocktails",
                "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
                "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
            },
            {
                "text": "3 dashes Peychaud's bitters",
                "quantity": 3,
                "measure": "dash",
                "food": "bitters",
                "weight": 1.749999999368805,
                "foodCategory": "liquors and cocktails",
                "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
                "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
            },
            {
                "text": "lemon twist, for garnish",
                "quantity": 0,
                "measure": null,
                "food": "lemon twist",
                "weight": 0,
                "foodCategory": "fruit",
                "foodId": "food_bpg66j3a5vjuuga36uiiyaqeazpd",
                "image": "https://www.edamam.com/food-img/540/5405605c8e9b284243f06c0b1587ab6f.jpg"
            }
        ],
        "totalTime": 2,
        "cuisineType": [
            "mediterranean"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Cranberry Chutney, Goat Cheese, and Pecan Puff Pastry Appetizers",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/45c/45c4427b58f7087d0deb010d0901ec8b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102921Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8c5c4e808704d088446538e5e7a47e58eda76e57f688939877e2fbb7d5038c43",
        "source": "Honest Cooking",
        "url": "http://honestcooking.com/cranberry-chutney-goat-cheese-and-pecan-puff-pastry-appetizers/",
        "shareAs": "http://www.edamam.com/recipe/cranberry-chutney-goat-cheese-and-pecan-puff-pastry-appetizers-359141a84b8a15aa06ef11fa99a6e3fd/appetizers",
        "yield": 16,
        "ingredientLines": [
            "12 oz package fresh cranberries",
            "½ cup sugar",
            "1 teaspoon ground cinnamon",
            "1 cup orange marmalade or apricot preserves",
            "2 tablespoons lemon juice",
            "1 package (2 sheets) frozen puff pastry, thawed",
            "1 egg",
            "1 tablespoon water",
            "1 cup crumbled goat cheese",
            "¼ cup finely chopped toasted pecans"
        ],
        "ingredients": [
            {
                "text": "12 oz package fresh cranberries",
                "quantity": 12,
                "measure": "ounce",
                "food": "cranberries",
                "weight": 340.1942775,
                "foodCategory": "fruit",
                "foodId": "food_at0yaana2e4sguapnr728bkczyk9",
                "image": "https://www.edamam.com/food-img/945/94511bef5e26f15bb6eac8e950ac79a9.jpg"
            },
            {
                "text": "½ cup sugar",
                "quantity": 0.5,
                "measure": "cup",
                "food": "sugar",
                "weight": 100,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "1 teaspoon ground cinnamon",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "ground cinnamon",
                "weight": 2.6,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
            },
            {
                "text": "1 cup orange marmalade or apricot preserves",
                "quantity": 1,
                "measure": "cup",
                "food": "orange marmalade",
                "weight": 320,
                "foodCategory": "sugar syrups",
                "foodId": "food_b6nq9p3bqu2ydrbayvipqbpt22qx",
                "image": "https://www.edamam.com/food-img/55e/55e9572a1c35eeedc4900c5430f821b8.jpg"
            },
            {
                "text": "2 tablespoons lemon juice",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "lemon juice",
                "weight": 30.4999999994844,
                "foodCategory": "100% juice",
                "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
            },
            {
                "text": "1 package (2 sheets) frozen puff pastry, thawed",
                "quantity": 1,
                "measure": "package",
                "food": "puff pastry",
                "weight": 245,
                "foodCategory": "quick breads and pastries",
                "foodId": "food_bdy019nbzjeni3atliworbbgahrk",
                "image": "https://www.edamam.com/food-img/bc7/bc7dc9b99ce87d5a6dc136e30d6aadd1.jpg"
            },
            {
                "text": "1 egg",
                "quantity": 1,
                "measure": "<unit>",
                "food": "egg",
                "weight": 43,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "1 tablespoon water",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "water",
                "weight": 14.786764781,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "1 cup crumbled goat cheese",
                "quantity": 1,
                "measure": "cup",
                "food": "goat cheese",
                "weight": 180,
                "foodCategory": "Cheese",
                "foodId": "food_bj6jxigaqy71qsasnj3s8akgt6xl",
                "image": "https://www.edamam.com/food-img/e86/e86528ffe33eaa852f1cd764c80375dd.jpg"
            },
            {
                "text": "¼ cup finely chopped toasted pecans",
                "quantity": 0.25,
                "measure": "cup",
                "food": "pecans",
                "weight": 24.75,
                "foodCategory": "plant-based protein",
                "foodId": "food_a9apeypa4rgl7eax9hbjradaa4ry",
                "image": "https://www.edamam.com/food-img/42f/42ff4c36d4d0b4e8069604c97af1cfef.jpg"
            }
        ],
        "totalTime": 50,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Cheesy Southwest Appetizers",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/31f/31f1afae0dea609d811f39cbb522e024.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102921Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c209e70cacc2db16e45b61a1f970a1d3f8569dffb9db02c2f3a6069bda5a9ff7",
        "source": "Food Network",
        "url": "https://www.foodnetwork.com/recipes/cheesy-southwest-appetizers-recipe-1957801",
        "shareAs": "http://www.edamam.com/recipe/cheesy-southwest-appetizers-25df36330f6e50abb8eacba2774cbe3f/appetizers",
        "yield": 16,
        "ingredientLines": [
            "6 slices cheddar cheese",
            "3 slices monterey jack cheese",
            "32 Keebler® Town House® Original Crackers",
            "1/4 cup finely chopped red bell pepper",
            "1/4 cup finely chopped jalapeno peppers",
            "1/4 cup chopped black olives"
        ],
        "ingredients": [
            {
                "text": "6 slices cheddar cheese",
                "quantity": 6,
                "measure": "slice",
                "food": "cheddar cheese",
                "weight": 168,
                "foodCategory": "Cheese",
                "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
                "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
            },
            {
                "text": "3 slices monterey jack cheese",
                "quantity": 3,
                "measure": "slice",
                "food": "jack cheese",
                "weight": 84,
                "foodCategory": "Cheese",
                "foodId": "food_atp17pta7d5it2a80ct13ard6aj3",
                "image": "https://www.edamam.com/food-img/590/59062b9f8d57ebc7d831b7b7c231f726.jpg"
            },
            {
                "text": "32 Keebler® Town House® Original Crackers",
                "quantity": 32,
                "measure": "<unit>",
                "food": "Crackers",
                "weight": 102.4,
                "foodCategory": "crackers",
                "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
                "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
            },
            {
                "text": "1/4 cup finely chopped red bell pepper",
                "quantity": 0.25,
                "measure": "cup",
                "food": "red bell pepper",
                "weight": 37.25,
                "foodCategory": "vegetables",
                "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
                "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
            },
            {
                "text": "1/4 cup finely chopped jalapeno peppers",
                "quantity": 0.25,
                "measure": "cup",
                "food": "jalapeno peppers",
                "weight": 22.5,
                "foodCategory": "vegetables",
                "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
                "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
            },
            {
                "text": "1/4 cup chopped black olives",
                "quantity": 0.25,
                "measure": "cup",
                "food": "black olives",
                "weight": 33.600000000568,
                "foodCategory": "canned fruit",
                "foodId": "food_atlv2r9b29ejzeb1o3wgkaxqajcb",
                "image": "https://www.edamam.com/food-img/822/8221f2141e8dafd469414b20777735ca.jpg"
            }
        ],
        "totalTime": 20,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Cherry Tomatoes Appetizer",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/bf4/bf4f88442f62d37fdff2807432aff0b5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102921Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4cd6fcdd6f2a87677853f8bc6fa8ca884724b1efd007429e7210f606a7e3450b",
        "source": "BBC Good Food",
        "url": "http://www.bbcgoodfood.com/recipes/5276/",
        "shareAs": "http://www.edamam.com/recipe/cherry-tomatoes-appetizer-ed9864e2468cf6cdb66a7169803df039/appetizers",
        "yield": 4,
        "ingredientLines": [
            "olive oil",
            "italian sea salt from Cervia (or fleur de sel de Guerande)",
            "20 cherry tomatoes",
            "10 fresh basil leaves"
        ],
        "ingredients": [
            {
                "text": "olive oil",
                "quantity": 0,
                "measure": null,
                "food": "olive oil",
                "weight": 4.148,
                "foodCategory": "Oils",
                "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
                "text": "italian sea salt from Cervia (or fleur de sel de Guerande)",
                "quantity": 0,
                "measure": null,
                "food": "sea salt",
                "weight": 1.83,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "20 cherry tomatoes",
                "quantity": 20,
                "measure": "<unit>",
                "food": "cherry tomatoes",
                "weight": 300,
                "foodCategory": "vegetables",
                "foodId": "food_a30b0hpbvavginafe0tocbf6ymje",
                "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
            },
            {
                "text": "10 fresh basil leaves",
                "quantity": 10,
                "measure": "leaf",
                "food": "fresh basil",
                "weight": 5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
                "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "italian"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Mushroom Mozzarella Appetizers",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f74/f746bfd079767fde50563496ae958786.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102921Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a1302c4c4e6378b6b364d573460b6b22091d48725b29897c9a1e3cf31bc9d250",
        "source": "Food52",
        "url": "https://food52.com/recipes/11177-mushroom-mozzarella-appetizers",
        "shareAs": "http://www.edamam.com/recipe/mushroom-mozzarella-appetizers-282a221fa6024ce1c58d1d1035bc0f1a/appetizers",
        "yield": 10,
        "ingredientLines": [
            "2 tablespoons butter",
            "8 ounces your favorite mushrooms, sliced",
            "1 clove garlic, minced",
            "1 green onion, sliced",
            "1 egg",
            "1/2 cup milk",
            "1/2 cup flour",
            "1/2 teaspoon baking powder",
            "1 teaspoon aleppo pepper",
            "1 tablespoon sliced fresh basil",
            "2 cups shredded, part skim mozzarella cheese"
        ],
        "ingredients": [
            {
                "text": "2 tablespoons butter",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "butter",
                "weight": 28.4,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "8 ounces your favorite mushrooms, sliced",
                "quantity": 8,
                "measure": "ounce",
                "food": "mushrooms",
                "weight": 226.796185,
                "foodCategory": "vegetables",
                "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
                "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
            },
            {
                "text": "1 clove garlic, minced",
                "quantity": 1,
                "measure": "clove",
                "food": "garlic",
                "weight": 3,
                "foodCategory": "vegetables",
                "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
                "text": "1 green onion, sliced",
                "quantity": 1,
                "measure": "<unit>",
                "food": "green onion",
                "weight": 13.888888888888891,
                "foodCategory": "vegetables",
                "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
                "text": "1 egg",
                "quantity": 1,
                "measure": "<unit>",
                "food": "egg",
                "weight": 43,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "1/2 cup milk",
                "quantity": 0.5,
                "measure": "cup",
                "food": "milk",
                "weight": 122,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "1/2 cup flour",
                "quantity": 0.5,
                "measure": "cup",
                "food": "flour",
                "weight": 62.5,
                "foodCategory": "grains",
                "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
                "text": "1/2 teaspoon baking powder",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "baking powder",
                "weight": 2.3,
                "foodCategory": "condiments and sauces",
                "foodId": "food_bad4zycbt4w60dbut111vaub2g3e",
                "image": "https://www.edamam.com/food-img/a84/a8410ec57a2e62a1ad9955ac14d40af6.jpg"
            },
            {
                "text": "1 teaspoon aleppo pepper",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "aleppo pepper",
                "weight": 2.7,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
                "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
            },
            {
                "text": "1 tablespoon sliced fresh basil",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "fresh basil",
                "weight": 2.65,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
                "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
            },
            {
                "text": "2 cups shredded, part skim mozzarella cheese",
                "quantity": 2,
                "measure": "cup",
                "food": "mozzarella cheese",
                "weight": 519.75,
                "foodCategory": "Cheese",
                "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
                "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
            }
        ],
        "totalTime": 93,
        "cuisineType": [
            "italian"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Bhindi Masala Appetizers",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/538/538ef540ebed3103ee4485621ba4f490.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102921Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f6c41537b15acb8984ca1722b7fe4201ba22f9faa8117476ac44859cffebe86",
        "source": "The Daily Meal",
        "url": "http://www.thedailymeal.com/recipes/bhindi-masala-appetizers-recipe",
        "shareAs": "http://www.edamam.com/recipe/bhindi-masala-appetizers-f119dd6b6d90e299cb4ff95ca227473b/appetizers",
        "yield": 6,
        "ingredientLines": [
            "1 Tablespoon cumin seeds",
            "1 large Vidalia onion, diced",
            "2 Teaspoons garam masala",
            "2 dashes of kosher salt",
            "1 Teaspoon cayenne",
            "8 whole cardamom seeds",
            "4 tomatoes, diced",
            "2 Cups okra",
            "2 dashes of extra-virgin olive oil",
            "2 naan, cut into small triangles"
        ],
        "ingredients": [
            {
                "text": "1 Tablespoon cumin seeds",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "cumin seeds",
                "weight": 6,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
                "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
            },
            {
                "text": "1 large Vidalia onion, diced",
                "quantity": 1,
                "measure": "<unit>",
                "food": "Vidalia onion",
                "weight": 413.75,
                "foodCategory": "vegetables",
                "foodId": "food_a76jqx4bnd9n8ca5tojgab31dyur",
                "image": "https://www.edamam.com/food-img/a7f/a7fd8e3b26066b4c96d5b5804e7f0976.jpg"
            },
            {
                "text": "2 Teaspoons garam masala",
                "quantity": 2,
                "measure": "teaspoon",
                "food": "masala",
                "weight": 3.8,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bwlqp2wb01krjcbnzizdga6et64z",
                "image": "https://www.edamam.com/food-img/c3f/c3f96d47d334b92f0120ff0b3a512ec3.jpg"
            },
            {
                "text": "2 dashes of kosher salt",
                "quantity": 2,
                "measure": "dash",
                "food": "kosher salt",
                "weight": 1.213541666235802,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "1 Teaspoon cayenne",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "cayenne",
                "weight": 1.8,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a8iooz3aris8gba605l07brngnrx",
                "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
            },
            {
                "text": "8 whole cardamom seeds",
                "quantity": 8,
                "measure": "seed",
                "food": "cardamom",
                "weight": 2,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_atsmcv9azh5khfbu2jqs3bivfj4a",
                "image": "https://www.edamam.com/food-img/39d/39d4bfdf9dad662e89ae7bcb933c0def.jpg"
            },
            {
                "text": "4 tomatoes, diced",
                "quantity": 4,
                "measure": "<unit>",
                "food": "tomatoes",
                "weight": 492,
                "foodCategory": "vegetables",
                "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
            },
            {
                "text": "2 Cups okra",
                "quantity": 2,
                "measure": "cup",
                "food": "okra",
                "weight": 200,
                "foodCategory": "vegetables",
                "foodId": "food_azzxfccb55c06lalc8vfobrxispc",
                "image": "https://www.edamam.com/food-img/718/718616e8ece2ef3f1ae0187c0ff04cda.jpg"
            },
            {
                "text": "2 dashes of extra-virgin olive oil",
                "quantity": 2,
                "measure": "dash",
                "food": "extra-virgin olive oil",
                "weight": 1.124999999600572,
                "foodCategory": "Oils",
                "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
                "text": "2 naan, cut into small triangles",
                "quantity": 2,
                "measure": "<unit>",
                "food": "naan",
                "weight": 180,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_a0w916xb0gf9ssbfuq20aayvh9tf",
                "image": "https://www.edamam.com/food-img/396/396a49ed1e671dff53f21f2dc5803bff.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "indian"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Easy Appetizer Recipe: Baked Ricotta with Lemon, Garlic & Chives",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/3b3/3b3593117f3c4aa1f020c0783db6bd40?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCIZDCCvwfQ4OGW6v5pb9mD%2BZTMegImriYnAspC98AbsQIhALKH%2BXd32X0P%2B%2Fxpysfmeq0RH%2FZWW87TRcozLdYIj5d1KrkFCBMQABoMMTg3MDE3MTUwOTg2Igwd5UUsHI2%2BSjtZbVkqlgUboRnRUac0EX8nyrzkDAPX5dWp4GuBccxeH%2FO8i1HMQ6ksNRwkqQQvmwJHoe%2B28bmvQoAPEL5gYh2tcTzNpLwGBqx3QxeT3KXetrmRR%2Be6lEqHYk8QvFgODK%2B8IDi%2Bs%2FEg6C%2Fz9p3uj3bMH7jGe9o%2BjjKP%2BDCPVmK%2BWeVXRiO4JkTHjDOHdnm9bl%2FnjAYJU16yoq142Edx70HUepXeICC2aw8MdNDexbyTHvV2mXK22ni5l1rRq%2F%2FC3Ay0rcReYpVyEf9n%2FStntrKLsu1l36ro7Tz3XDwS%2B8WHPjm5ICJH%2B4xjqZ25Kq5xDn%2BkFfoLuKG6nupakmD%2BP9vOaLMJSBifm0vodnHsHDequmErlMMDVWlni6Luz4d%2BTJUvBuGNI%2BmgAVisoMAVTZ4XN1YbFjUifSbTLXYbJPR0uah1%2BS%2BcYJvsFrmOMvVsuvwbH69KsJigXhCiKH9utzZ6k3CsTD8bgAv2ImEAip92KE4l4%2FB%2F3FcgA0YqIW1D6Iamfnfqc9Bta938ik3XnWnkv3d5rvPITPHpZB6bF1JjmCA2Abw6TYdTR9Hwu%2F0RzNx7CDApGgDeM9rx%2FD5FGmrHV1pwpsmyDzbB1F%2BHROhBWwQvUtA0t9B6U07aQdtswKRlyDdjqix3ySA4gs4xjCmJNHmi7tOh%2FUOoMCfjjuCLLY84UlbyHiMqx68S6ZFEbt6GZW7z%2FcAw1f8Vcih51jo8owYMdzGMuRl0jwQmRlm3vU45iqO2u90Z8DxyWnNmjk44fjn9hgT%2FwWQz9R%2Fg4cDHE8erlr2P871rsOfo3mbRvTx%2F7p%2FfylHhB5hN%2Fafe42Ev7mmgzWJdADitrK23CeCsaCDCXn3aInkeN8AabDlhOWoKy8M16EZmZ%2BRtqzDMi8ynBjqwAYJF721dlv5ggNEhM6aLIsOMo7ZakofDuzPO8qheA%2B7zPbaqF7mA%2BbxQrjqrd6bB1VDZjkIRgd5Rnv%2FviMZEYO71Vmm%2FLoS9RzP5cDWBZ3yQM%2BbpEY5jO5y5RmcDglMTk1pY5PVn2t2HyyJKjA3rGJ0teQmlLUNqLNwwZHNJoCWVyI40tvsZMcmTWpYN%2BL0crEwABUzB11KS%2BvMXSjUMJf4pSPRFmNQcJS%2B9nfZJfhN0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T102921Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB5NKU6LL%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2767f9ab3952dee3fc0c7c3429aa0df04a2301751f0f9f57b130664ef6424b86",
        "source": "The Kitchn",
        "url": "http://www.thekitchn.com/appetizer-recipe-baked-ricotta-with-lemon-chives-recipes-from-the-kitchn-188852",
        "shareAs": "http://www.edamam.com/recipe/easy-appetizer-recipe-baked-ricotta-with-lemon-garlic-chives-5b06ff67116e68128cd8c434d3868fc5/appetizers",
        "yield": 8,
        "ingredientLines": [
            "15 ounces (about 2 cups) whole milk ricotta",
            "1 large lemon, zested and juiced",
            "2 large cloves garlic, minced",
            "1 ounce fresh chives, minced (about 1/2 cup)",
            "1/2 teaspoon salt"
        ],
        "ingredients": [
            {
                "text": "15 ounces (about 2 cups) whole milk ricotta",
                "quantity": 15,
                "measure": "ounce",
                "food": "whole milk ricotta",
                "weight": 425.242846875,
                "foodCategory": "Cheese",
                "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
            },
            {
                "text": "1 large lemon, zested and juiced",
                "quantity": 1,
                "measure": "<unit>",
                "food": "lemon",
                "weight": 105,
                "foodCategory": "fruit",
                "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
            },
            {
                "text": "2 large cloves garlic, minced",
                "quantity": 2,
                "measure": "clove",
                "food": "garlic",
                "weight": 10,
                "foodCategory": "vegetables",
                "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
                "text": "1 ounce fresh chives, minced (about 1/2 cup)",
                "quantity": 0.5,
                "measure": "cup",
                "food": "chives",
                "weight": 24.00000000040575,
                "foodCategory": "vegetables",
                "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
                "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
            },
            {
                "text": "1/2 teaspoon salt",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "salt",
                "weight": 3,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "mediterranean"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    }
,
    {
        "label": "Crescent Dinner Rolls",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/af7/af7b75464368166767d07b020fe7dec2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCq7xi0NwHqa8LbCYotmhtWa5VQOeuDCmTf3Yf4AQ5u4QIhANsGOhbde7P15qZ2d31S2UPJbAbS2Cwgs5gLLjOs7PtHKrkFCBMQABoMMTg3MDE3MTUwOTg2IgxE0BDiTeIgIgw39FIqlgXEvUAAXVPP4Bi4ov%2BYHgnuE%2FYJxFOW7cm3iCFP2%2BHIwGMBc07NJyEA%2FM4KpI540G6LcXmxbiXKf91BgKFGXR9ERsidM2J9e0kMAVYVKFQII89MfnE0eFHikhUCxNvhrf9aj%2FeC%2FO71FpFt0bIeUfRDT0vWqvkC8b2bkYlflQwaxtnRpVH55OoZh3U%2FmqbA0tQm4t43jdFFRc3QZruFiiXdV5FJGrvTi81DItTEguVFFuSbSpjpaRnppxVorMJm%2FTsNViQeevLQSRSz5kPYs9%2BRaJcdsRdBwnAHccOn8xSFm8tYXgwRVWuB5zmvB%2BETeWppucHbBH3rahv2abVR1mJP9G38ZUY6fTpny9DCclLWvqypHdGPk0K4nu7pKII8n956%2BRWVbtlsOHHuPkpbTTvWkIbACeLlmWlLosipH6XNqCz2N7D9tFeODNZzZizJSudlR9U5dtfC1brYjpTl1EgrvjQeXYQzL2Dj1BIAbL%2BFjmgK89O7v9jeRvGYKv4TqtSAPPgNkWNxvjvg%2BLDi9Q5zymbhuaD1VUClMpcOqR%2FIXHXDbbUptudYTGJcpRWiQ414dqVo%2F5sJKBc46PZzj0b551mJjWgCphW094i%2BYqMkxCdYGagWM0Mxo%2B%2BTSFERJvK6WuNdunK3WHFJqpK%2BD2HBGzXcrVYYme5Z%2FkpNMQ5idfj9VWaG6PPfRgPQiAqvYPAFsrcrD6I9rlfJlYEjW4iR735fXzyTULO3V%2F%2Fl6rEEF%2BIrL9hJ74Qlei0G1hFqc%2BNZrAQUAY75%2Fd%2BTuWFQtmUquAjBj8zBXdBj84YJ6ehzDuH9lxREYTp%2FJvQFEuDT9vTy14p52QvrFPUFkfQz2yj5ViKpvwCr1BEnR2fT8S3Iw5c5CERFIzCChMynBjqwAYT5o4YBCsL11j5S%2F3iTI7csU%2FVYy%2F1PZNi%2B8ZTz08GiJ2vDj7xgGIZb9CyhvVKrdt133yVbFHGExUfpEww%2B1%2FrP4c286m6mOxePOwnoHVAhJo4cxFPPZL9csYOIALMrkES6vZK8WmEywWq%2FddlObNuDE0BSYwpeLWqgETjE1tzO9WdV1ZGR9sE7hMosHsmcrL4HQK90y1XDy0Poxp3f8a8%2FvZEkgLD3r7YVRa2eGkTS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T103019Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCDXI3CGQ%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e9d0f8cc5840c5564d4093157e66602675258268ad9eeff13d3d1dacffe4a319",
        "source": "Foodista",
        "url": "http://www.foodista.com/recipe/NWZ6TS4Z/crescent-dinner-rolls",
        "shareAs": "http://www.edamam.com/recipe/crescent-dinner-rolls-3f8b062da91f39a9a559ab05899c1e5f/dinner+recipes",
        "yield": 1,
        "ingredientLines": [
            "1 (8 oz.) pkg. refrigerated crescent dinner rolls",
            "3 tablespoons butter, melted",
            "2/3 cup Savory Add-A-Crunch"
        ],
        "ingredients": [
            {
                "text": "1 (8 oz.) pkg. refrigerated crescent dinner rolls",
                "quantity": 8,
                "measure": "ounce",
                "food": "dinner rolls",
                "weight": 226.796185,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
            },
            {
                "text": "3 tablespoons butter, melted",
                "quantity": 3,
                "measure": "tablespoon",
                "food": "butter",
                "weight": 42.599999999999994,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "2/3 cup Savory Add-A-Crunch",
                "quantity": 0.6666666666666666,
                "measure": "cup",
                "food": "Savory",
                "weight": 46.93333333412684,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_abe6mosa8r5594bfwnjzlbuweeq2",
                "image": "https://www.edamam.com/food-img/088/08843b1109f444d69717111bcacc82be.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Easy Dinner Rolls",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fe4/fe445ed617bb168d4f3e76ec362ea2f6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCq7xi0NwHqa8LbCYotmhtWa5VQOeuDCmTf3Yf4AQ5u4QIhANsGOhbde7P15qZ2d31S2UPJbAbS2Cwgs5gLLjOs7PtHKrkFCBMQABoMMTg3MDE3MTUwOTg2IgxE0BDiTeIgIgw39FIqlgXEvUAAXVPP4Bi4ov%2BYHgnuE%2FYJxFOW7cm3iCFP2%2BHIwGMBc07NJyEA%2FM4KpI540G6LcXmxbiXKf91BgKFGXR9ERsidM2J9e0kMAVYVKFQII89MfnE0eFHikhUCxNvhrf9aj%2FeC%2FO71FpFt0bIeUfRDT0vWqvkC8b2bkYlflQwaxtnRpVH55OoZh3U%2FmqbA0tQm4t43jdFFRc3QZruFiiXdV5FJGrvTi81DItTEguVFFuSbSpjpaRnppxVorMJm%2FTsNViQeevLQSRSz5kPYs9%2BRaJcdsRdBwnAHccOn8xSFm8tYXgwRVWuB5zmvB%2BETeWppucHbBH3rahv2abVR1mJP9G38ZUY6fTpny9DCclLWvqypHdGPk0K4nu7pKII8n956%2BRWVbtlsOHHuPkpbTTvWkIbACeLlmWlLosipH6XNqCz2N7D9tFeODNZzZizJSudlR9U5dtfC1brYjpTl1EgrvjQeXYQzL2Dj1BIAbL%2BFjmgK89O7v9jeRvGYKv4TqtSAPPgNkWNxvjvg%2BLDi9Q5zymbhuaD1VUClMpcOqR%2FIXHXDbbUptudYTGJcpRWiQ414dqVo%2F5sJKBc46PZzj0b551mJjWgCphW094i%2BYqMkxCdYGagWM0Mxo%2B%2BTSFERJvK6WuNdunK3WHFJqpK%2BD2HBGzXcrVYYme5Z%2FkpNMQ5idfj9VWaG6PPfRgPQiAqvYPAFsrcrD6I9rlfJlYEjW4iR735fXzyTULO3V%2F%2Fl6rEEF%2BIrL9hJ74Qlei0G1hFqc%2BNZrAQUAY75%2Fd%2BTuWFQtmUquAjBj8zBXdBj84YJ6ehzDuH9lxREYTp%2FJvQFEuDT9vTy14p52QvrFPUFkfQz2yj5ViKpvwCr1BEnR2fT8S3Iw5c5CERFIzCChMynBjqwAYT5o4YBCsL11j5S%2F3iTI7csU%2FVYy%2F1PZNi%2B8ZTz08GiJ2vDj7xgGIZb9CyhvVKrdt133yVbFHGExUfpEww%2B1%2FrP4c286m6mOxePOwnoHVAhJo4cxFPPZL9csYOIALMrkES6vZK8WmEywWq%2FddlObNuDE0BSYwpeLWqgETjE1tzO9WdV1ZGR9sE7hMosHsmcrL4HQK90y1XDy0Poxp3f8a8%2FvZEkgLD3r7YVRa2eGkTS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T103019Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCDXI3CGQ%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dea0ee4845b7958bb860603ce52053c11da82c8df4c01891a23c1c121015f068",
        "source": "bowl-me-over.com",
        "url": "https://bowl-me-over.com/easy-dinner-rolls-recipe",
        "shareAs": "http://www.edamam.com/recipe/easy-dinner-rolls-e4b976e2ec489282d2c161e02da8486c/dinner+recipes",
        "yield": 12,
        "ingredientLines": [
            "12 frozen dinner rolls",
            "4 tbsp butter divided",
            "1/2 tsp Italian seasoning",
            "1/8 tsp garlic powder",
            "1/4 tsp salt"
        ],
        "ingredients": [
            {
                "text": "12 frozen dinner rolls",
                "quantity": 12,
                "measure": "<unit>",
                "food": "dinner rolls",
                "weight": 1032,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
            },
            {
                "text": "4 tbsp butter divided",
                "quantity": 4,
                "measure": "tablespoon",
                "food": "butter",
                "weight": 56.8,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "1/2 tsp Italian seasoning",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "Italian seasoning",
                "weight": 0.5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
            },
            {
                "text": "1/8 tsp garlic powder",
                "quantity": 0.125,
                "measure": "teaspoon",
                "food": "garlic powder",
                "weight": 0.3875,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_boq94r1a036492bdup9u1beyph0l",
                "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
            },
            {
                "text": "1/4 tsp salt",
                "quantity": 0.25,
                "measure": "teaspoon",
                "food": "salt",
                "weight": 1.5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Just Ducky Dinner Rolls",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f5e/f5e1390d10c48f9f3748b532fec33102?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCq7xi0NwHqa8LbCYotmhtWa5VQOeuDCmTf3Yf4AQ5u4QIhANsGOhbde7P15qZ2d31S2UPJbAbS2Cwgs5gLLjOs7PtHKrkFCBMQABoMMTg3MDE3MTUwOTg2IgxE0BDiTeIgIgw39FIqlgXEvUAAXVPP4Bi4ov%2BYHgnuE%2FYJxFOW7cm3iCFP2%2BHIwGMBc07NJyEA%2FM4KpI540G6LcXmxbiXKf91BgKFGXR9ERsidM2J9e0kMAVYVKFQII89MfnE0eFHikhUCxNvhrf9aj%2FeC%2FO71FpFt0bIeUfRDT0vWqvkC8b2bkYlflQwaxtnRpVH55OoZh3U%2FmqbA0tQm4t43jdFFRc3QZruFiiXdV5FJGrvTi81DItTEguVFFuSbSpjpaRnppxVorMJm%2FTsNViQeevLQSRSz5kPYs9%2BRaJcdsRdBwnAHccOn8xSFm8tYXgwRVWuB5zmvB%2BETeWppucHbBH3rahv2abVR1mJP9G38ZUY6fTpny9DCclLWvqypHdGPk0K4nu7pKII8n956%2BRWVbtlsOHHuPkpbTTvWkIbACeLlmWlLosipH6XNqCz2N7D9tFeODNZzZizJSudlR9U5dtfC1brYjpTl1EgrvjQeXYQzL2Dj1BIAbL%2BFjmgK89O7v9jeRvGYKv4TqtSAPPgNkWNxvjvg%2BLDi9Q5zymbhuaD1VUClMpcOqR%2FIXHXDbbUptudYTGJcpRWiQ414dqVo%2F5sJKBc46PZzj0b551mJjWgCphW094i%2BYqMkxCdYGagWM0Mxo%2B%2BTSFERJvK6WuNdunK3WHFJqpK%2BD2HBGzXcrVYYme5Z%2FkpNMQ5idfj9VWaG6PPfRgPQiAqvYPAFsrcrD6I9rlfJlYEjW4iR735fXzyTULO3V%2F%2Fl6rEEF%2BIrL9hJ74Qlei0G1hFqc%2BNZrAQUAY75%2Fd%2BTuWFQtmUquAjBj8zBXdBj84YJ6ehzDuH9lxREYTp%2FJvQFEuDT9vTy14p52QvrFPUFkfQz2yj5ViKpvwCr1BEnR2fT8S3Iw5c5CERFIzCChMynBjqwAYT5o4YBCsL11j5S%2F3iTI7csU%2FVYy%2F1PZNi%2B8ZTz08GiJ2vDj7xgGIZb9CyhvVKrdt133yVbFHGExUfpEww%2B1%2FrP4c286m6mOxePOwnoHVAhJo4cxFPPZL9csYOIALMrkES6vZK8WmEywWq%2FddlObNuDE0BSYwpeLWqgETjE1tzO9WdV1ZGR9sE7hMosHsmcrL4HQK90y1XDy0Poxp3f8a8%2FvZEkgLD3r7YVRa2eGkTS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T103019Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCDXI3CGQ%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f67b888f90bc4e6011ecf95c39608637f7e4be644f42d31321fb8264f428e10b",
        "source": "justapinch.com",
        "url": "https://www.justapinch.com/recipes/bread/bread-savory-bread/just-ducky-dinner-rolls.html",
        "shareAs": "http://www.edamam.com/recipe/just-ducky-dinner-rolls-13c5cd23fdb1908d47564c1c25f31948/dinner+recipes",
        "yield": 12,
        "ingredientLines": [
            "16 frozen dinner rolls, thawed but still cold",
            "1 egg",
            "· handful of sliced almonds"
        ],
        "ingredients": [
            {
                "text": "16 frozen dinner rolls, thawed but still cold",
                "quantity": 16,
                "measure": "<unit>",
                "food": "dinner rolls",
                "weight": 1376,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
            },
            {
                "text": "1 egg",
                "quantity": 1,
                "measure": "<unit>",
                "food": "egg",
                "weight": 43,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "· handful of sliced almonds",
                "quantity": 1,
                "measure": "handful",
                "food": "almonds",
                "weight": 17.875,
                "foodCategory": "plant-based protein",
                "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
            }
        ],
        "totalTime": 50,
        "cuisineType": [
            "eastern europe"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Garlic Butter Dinner Rolls",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/147/1471829501df10624613601db158b453.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCq7xi0NwHqa8LbCYotmhtWa5VQOeuDCmTf3Yf4AQ5u4QIhANsGOhbde7P15qZ2d31S2UPJbAbS2Cwgs5gLLjOs7PtHKrkFCBMQABoMMTg3MDE3MTUwOTg2IgxE0BDiTeIgIgw39FIqlgXEvUAAXVPP4Bi4ov%2BYHgnuE%2FYJxFOW7cm3iCFP2%2BHIwGMBc07NJyEA%2FM4KpI540G6LcXmxbiXKf91BgKFGXR9ERsidM2J9e0kMAVYVKFQII89MfnE0eFHikhUCxNvhrf9aj%2FeC%2FO71FpFt0bIeUfRDT0vWqvkC8b2bkYlflQwaxtnRpVH55OoZh3U%2FmqbA0tQm4t43jdFFRc3QZruFiiXdV5FJGrvTi81DItTEguVFFuSbSpjpaRnppxVorMJm%2FTsNViQeevLQSRSz5kPYs9%2BRaJcdsRdBwnAHccOn8xSFm8tYXgwRVWuB5zmvB%2BETeWppucHbBH3rahv2abVR1mJP9G38ZUY6fTpny9DCclLWvqypHdGPk0K4nu7pKII8n956%2BRWVbtlsOHHuPkpbTTvWkIbACeLlmWlLosipH6XNqCz2N7D9tFeODNZzZizJSudlR9U5dtfC1brYjpTl1EgrvjQeXYQzL2Dj1BIAbL%2BFjmgK89O7v9jeRvGYKv4TqtSAPPgNkWNxvjvg%2BLDi9Q5zymbhuaD1VUClMpcOqR%2FIXHXDbbUptudYTGJcpRWiQ414dqVo%2F5sJKBc46PZzj0b551mJjWgCphW094i%2BYqMkxCdYGagWM0Mxo%2B%2BTSFERJvK6WuNdunK3WHFJqpK%2BD2HBGzXcrVYYme5Z%2FkpNMQ5idfj9VWaG6PPfRgPQiAqvYPAFsrcrD6I9rlfJlYEjW4iR735fXzyTULO3V%2F%2Fl6rEEF%2BIrL9hJ74Qlei0G1hFqc%2BNZrAQUAY75%2Fd%2BTuWFQtmUquAjBj8zBXdBj84YJ6ehzDuH9lxREYTp%2FJvQFEuDT9vTy14p52QvrFPUFkfQz2yj5ViKpvwCr1BEnR2fT8S3Iw5c5CERFIzCChMynBjqwAYT5o4YBCsL11j5S%2F3iTI7csU%2FVYy%2F1PZNi%2B8ZTz08GiJ2vDj7xgGIZb9CyhvVKrdt133yVbFHGExUfpEww%2B1%2FrP4c286m6mOxePOwnoHVAhJo4cxFPPZL9csYOIALMrkES6vZK8WmEywWq%2FddlObNuDE0BSYwpeLWqgETjE1tzO9WdV1ZGR9sE7hMosHsmcrL4HQK90y1XDy0Poxp3f8a8%2FvZEkgLD3r7YVRa2eGkTS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T103019Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCDXI3CGQ%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=faa1a3bc8fb653e89efa6aa2f32ff1d30eda7bc05133de5e6d54b5df4c607ae2",
        "source": "Food Network",
        "url": "https://www.foodnetwork.com/recipes/ree-drummond/garlic-butter-dinner-rolls-2371536",
        "shareAs": "http://www.edamam.com/recipe/garlic-butter-dinner-rolls-4aa222816242c5cde505c8b10672ce53/dinner+recipes",
        "yield": 24,
        "ingredientLines": [
            "4 sticks butter",
            "24 frozen, unbaked dinner rolls",
            "16 cloves garlic, finely pressed",
            "Coarse sea salt"
        ],
        "ingredients": [
            {
                "text": "4 sticks butter",
                "quantity": 4,
                "measure": "stick",
                "food": "butter",
                "weight": 452,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "24 frozen, unbaked dinner rolls",
                "quantity": 24,
                "measure": "<unit>",
                "food": "dinner rolls",
                "weight": 2064,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
            },
            {
                "text": "16 cloves garlic, finely pressed",
                "quantity": 16,
                "measure": "clove",
                "food": "garlic",
                "weight": 48,
                "foodCategory": "vegetables",
                "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
                "text": "Coarse sea salt",
                "quantity": 0,
                "measure": null,
                "food": "sea salt",
                "weight": 15.384,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
        ],
        "totalTime": 140,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Orange-Honey Dinner Rolls",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/205/2052d13f675f375deb5056fc159de612.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCq7xi0NwHqa8LbCYotmhtWa5VQOeuDCmTf3Yf4AQ5u4QIhANsGOhbde7P15qZ2d31S2UPJbAbS2Cwgs5gLLjOs7PtHKrkFCBMQABoMMTg3MDE3MTUwOTg2IgxE0BDiTeIgIgw39FIqlgXEvUAAXVPP4Bi4ov%2BYHgnuE%2FYJxFOW7cm3iCFP2%2BHIwGMBc07NJyEA%2FM4KpI540G6LcXmxbiXKf91BgKFGXR9ERsidM2J9e0kMAVYVKFQII89MfnE0eFHikhUCxNvhrf9aj%2FeC%2FO71FpFt0bIeUfRDT0vWqvkC8b2bkYlflQwaxtnRpVH55OoZh3U%2FmqbA0tQm4t43jdFFRc3QZruFiiXdV5FJGrvTi81DItTEguVFFuSbSpjpaRnppxVorMJm%2FTsNViQeevLQSRSz5kPYs9%2BRaJcdsRdBwnAHccOn8xSFm8tYXgwRVWuB5zmvB%2BETeWppucHbBH3rahv2abVR1mJP9G38ZUY6fTpny9DCclLWvqypHdGPk0K4nu7pKII8n956%2BRWVbtlsOHHuPkpbTTvWkIbACeLlmWlLosipH6XNqCz2N7D9tFeODNZzZizJSudlR9U5dtfC1brYjpTl1EgrvjQeXYQzL2Dj1BIAbL%2BFjmgK89O7v9jeRvGYKv4TqtSAPPgNkWNxvjvg%2BLDi9Q5zymbhuaD1VUClMpcOqR%2FIXHXDbbUptudYTGJcpRWiQ414dqVo%2F5sJKBc46PZzj0b551mJjWgCphW094i%2BYqMkxCdYGagWM0Mxo%2B%2BTSFERJvK6WuNdunK3WHFJqpK%2BD2HBGzXcrVYYme5Z%2FkpNMQ5idfj9VWaG6PPfRgPQiAqvYPAFsrcrD6I9rlfJlYEjW4iR735fXzyTULO3V%2F%2Fl6rEEF%2BIrL9hJ74Qlei0G1hFqc%2BNZrAQUAY75%2Fd%2BTuWFQtmUquAjBj8zBXdBj84YJ6ehzDuH9lxREYTp%2FJvQFEuDT9vTy14p52QvrFPUFkfQz2yj5ViKpvwCr1BEnR2fT8S3Iw5c5CERFIzCChMynBjqwAYT5o4YBCsL11j5S%2F3iTI7csU%2FVYy%2F1PZNi%2B8ZTz08GiJ2vDj7xgGIZb9CyhvVKrdt133yVbFHGExUfpEww%2B1%2FrP4c286m6mOxePOwnoHVAhJo4cxFPPZL9csYOIALMrkES6vZK8WmEywWq%2FddlObNuDE0BSYwpeLWqgETjE1tzO9WdV1ZGR9sE7hMosHsmcrL4HQK90y1XDy0Poxp3f8a8%2FvZEkgLD3r7YVRa2eGkTS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T103019Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCDXI3CGQ%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=67cb285d5a4347e52e5d6868be4f58c6a2c0eafa7b1ac67ea9c7af936cc9f3bb",
        "source": "Betty Crocker",
        "url": "http://www.bettycrocker.com/recipes/orange-honey-dinner-rolls/389af8c3-12ae-4c20-b379-deb69b5774a9",
        "shareAs": "http://www.edamam.com/recipe/orange-honey-dinner-rolls-7828bb169f62a8c68eef14a6a9ff8eb3/dinner+recipes",
        "yield": 2,
        "ingredientLines": [
            "2 teaspoons honey",
            "1/2 teaspoon grated orange peel",
            "2 frozen crusty French dinner rolls (from 12.4-oz package)"
        ],
        "ingredients": [
            {
                "text": "2 teaspoons honey",
                "quantity": 2,
                "measure": "teaspoon",
                "food": "honey",
                "weight": 14.125000000716435,
                "foodCategory": "sugar syrups",
                "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
            },
            {
                "text": "1/2 teaspoon grated orange peel",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "orange peel",
                "weight": 1,
                "foodCategory": "fruit",
                "foodId": "food_b4g0yyrb23ih2rajszgs8bjpe2nn",
                "image": "https://www.edamam.com/food-img/cd4/cd456545c89e1e4c319f3cf1b5bff9e6.jpg"
            },
            {
                "text": "2 frozen crusty French dinner rolls (from 12.4-oz package)",
                "quantity": 24.799999237060547,
                "measure": "ounce",
                "food": "dinner rolls",
                "weight": 703.0681518710304,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "french"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Dinner Rolls with Chive Butter",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fb0/fb08a81382ac836ec709fee50d0f5123.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCq7xi0NwHqa8LbCYotmhtWa5VQOeuDCmTf3Yf4AQ5u4QIhANsGOhbde7P15qZ2d31S2UPJbAbS2Cwgs5gLLjOs7PtHKrkFCBMQABoMMTg3MDE3MTUwOTg2IgxE0BDiTeIgIgw39FIqlgXEvUAAXVPP4Bi4ov%2BYHgnuE%2FYJxFOW7cm3iCFP2%2BHIwGMBc07NJyEA%2FM4KpI540G6LcXmxbiXKf91BgKFGXR9ERsidM2J9e0kMAVYVKFQII89MfnE0eFHikhUCxNvhrf9aj%2FeC%2FO71FpFt0bIeUfRDT0vWqvkC8b2bkYlflQwaxtnRpVH55OoZh3U%2FmqbA0tQm4t43jdFFRc3QZruFiiXdV5FJGrvTi81DItTEguVFFuSbSpjpaRnppxVorMJm%2FTsNViQeevLQSRSz5kPYs9%2BRaJcdsRdBwnAHccOn8xSFm8tYXgwRVWuB5zmvB%2BETeWppucHbBH3rahv2abVR1mJP9G38ZUY6fTpny9DCclLWvqypHdGPk0K4nu7pKII8n956%2BRWVbtlsOHHuPkpbTTvWkIbACeLlmWlLosipH6XNqCz2N7D9tFeODNZzZizJSudlR9U5dtfC1brYjpTl1EgrvjQeXYQzL2Dj1BIAbL%2BFjmgK89O7v9jeRvGYKv4TqtSAPPgNkWNxvjvg%2BLDi9Q5zymbhuaD1VUClMpcOqR%2FIXHXDbbUptudYTGJcpRWiQ414dqVo%2F5sJKBc46PZzj0b551mJjWgCphW094i%2BYqMkxCdYGagWM0Mxo%2B%2BTSFERJvK6WuNdunK3WHFJqpK%2BD2HBGzXcrVYYme5Z%2FkpNMQ5idfj9VWaG6PPfRgPQiAqvYPAFsrcrD6I9rlfJlYEjW4iR735fXzyTULO3V%2F%2Fl6rEEF%2BIrL9hJ74Qlei0G1hFqc%2BNZrAQUAY75%2Fd%2BTuWFQtmUquAjBj8zBXdBj84YJ6ehzDuH9lxREYTp%2FJvQFEuDT9vTy14p52QvrFPUFkfQz2yj5ViKpvwCr1BEnR2fT8S3Iw5c5CERFIzCChMynBjqwAYT5o4YBCsL11j5S%2F3iTI7csU%2FVYy%2F1PZNi%2B8ZTz08GiJ2vDj7xgGIZb9CyhvVKrdt133yVbFHGExUfpEww%2B1%2FrP4c286m6mOxePOwnoHVAhJo4cxFPPZL9csYOIALMrkES6vZK8WmEywWq%2FddlObNuDE0BSYwpeLWqgETjE1tzO9WdV1ZGR9sE7hMosHsmcrL4HQK90y1XDy0Poxp3f8a8%2FvZEkgLD3r7YVRa2eGkTS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T103019Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCDXI3CGQ%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f27d87a6874bea6747cbcdf3a8da3ea9fa70d22b33110fb191c436691db66a6a",
        "source": "Food Network",
        "url": "https://www.foodnetwork.com/recipes/robin-miller/dinner-rolls-with-chive-butter-recipe-1946349",
        "shareAs": "http://www.edamam.com/recipe/dinner-rolls-with-chive-butter-fde77dd059e1fc6d73a2e3fcd52b1b10/dinner+recipes",
        "yield": 4,
        "ingredientLines": [
            "2 tablespoons light butter, softened",
            "1 tablespoon minced fresh chives",
            "Pinch black pepper",
            "4 whole-wheat dinner rolls"
        ],
        "ingredients": [
            {
                "text": "2 tablespoons light butter, softened",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "light butter",
                "weight": 28,
                "foodCategory": "Dairy",
                "foodId": "food_bn7vs0pa2g40n7aju79wsa3gmcw3",
                "image": "https://www.edamam.com/food-img/ebb/ebb83922789c022a30f4fb8afeb07c4c.jpg"
            },
            {
                "text": "1 tablespoon minced fresh chives",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "chives",
                "weight": 3,
                "foodCategory": "vegetables",
                "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
                "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
            },
            {
                "text": "Pinch black pepper",
                "quantity": 1,
                "measure": "pinch",
                "food": "black pepper",
                "weight": 0.1437500001847091,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
                "text": "4 whole-wheat dinner rolls",
                "quantity": 4,
                "measure": "<unit>",
                "food": "dinner rolls",
                "weight": 344,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
            }
        ],
        "totalTime": 5,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Super Easy Parmesan Dinner Rolls",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/76f/76f1a3f64182d5768cdc25c1cc621596.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCq7xi0NwHqa8LbCYotmhtWa5VQOeuDCmTf3Yf4AQ5u4QIhANsGOhbde7P15qZ2d31S2UPJbAbS2Cwgs5gLLjOs7PtHKrkFCBMQABoMMTg3MDE3MTUwOTg2IgxE0BDiTeIgIgw39FIqlgXEvUAAXVPP4Bi4ov%2BYHgnuE%2FYJxFOW7cm3iCFP2%2BHIwGMBc07NJyEA%2FM4KpI540G6LcXmxbiXKf91BgKFGXR9ERsidM2J9e0kMAVYVKFQII89MfnE0eFHikhUCxNvhrf9aj%2FeC%2FO71FpFt0bIeUfRDT0vWqvkC8b2bkYlflQwaxtnRpVH55OoZh3U%2FmqbA0tQm4t43jdFFRc3QZruFiiXdV5FJGrvTi81DItTEguVFFuSbSpjpaRnppxVorMJm%2FTsNViQeevLQSRSz5kPYs9%2BRaJcdsRdBwnAHccOn8xSFm8tYXgwRVWuB5zmvB%2BETeWppucHbBH3rahv2abVR1mJP9G38ZUY6fTpny9DCclLWvqypHdGPk0K4nu7pKII8n956%2BRWVbtlsOHHuPkpbTTvWkIbACeLlmWlLosipH6XNqCz2N7D9tFeODNZzZizJSudlR9U5dtfC1brYjpTl1EgrvjQeXYQzL2Dj1BIAbL%2BFjmgK89O7v9jeRvGYKv4TqtSAPPgNkWNxvjvg%2BLDi9Q5zymbhuaD1VUClMpcOqR%2FIXHXDbbUptudYTGJcpRWiQ414dqVo%2F5sJKBc46PZzj0b551mJjWgCphW094i%2BYqMkxCdYGagWM0Mxo%2B%2BTSFERJvK6WuNdunK3WHFJqpK%2BD2HBGzXcrVYYme5Z%2FkpNMQ5idfj9VWaG6PPfRgPQiAqvYPAFsrcrD6I9rlfJlYEjW4iR735fXzyTULO3V%2F%2Fl6rEEF%2BIrL9hJ74Qlei0G1hFqc%2BNZrAQUAY75%2Fd%2BTuWFQtmUquAjBj8zBXdBj84YJ6ehzDuH9lxREYTp%2FJvQFEuDT9vTy14p52QvrFPUFkfQz2yj5ViKpvwCr1BEnR2fT8S3Iw5c5CERFIzCChMynBjqwAYT5o4YBCsL11j5S%2F3iTI7csU%2FVYy%2F1PZNi%2B8ZTz08GiJ2vDj7xgGIZb9CyhvVKrdt133yVbFHGExUfpEww%2B1%2FrP4c286m6mOxePOwnoHVAhJo4cxFPPZL9csYOIALMrkES6vZK8WmEywWq%2FddlObNuDE0BSYwpeLWqgETjE1tzO9WdV1ZGR9sE7hMosHsmcrL4HQK90y1XDy0Poxp3f8a8%2FvZEkgLD3r7YVRa2eGkTS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T103019Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCDXI3CGQ%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=82595bbd5db0a571ed0731a5cb1c93d2797fbf9813866af9fb16fb2da9e18e99",
        "source": "eatthinkbemerry.com",
        "url": "http://eatthinkbemerry.com/2015/06/super-easy-parmesan-dinner-rolls/",
        "shareAs": "http://www.edamam.com/recipe/super-easy-parmesan-dinner-rolls-8f401e04b5daa67b7d72f06791711b6e/dinner+recipes",
        "yield": 12,
        "ingredientLines": [
            "12 frozen dinner rolls, such as Rhodes",
            "1/3 cup melted butter",
            "1/3 cup grated Parmesan cheese"
        ],
        "ingredients": [
            {
                "text": "12 frozen dinner rolls, such as Rhodes",
                "quantity": 12,
                "measure": "<unit>",
                "food": "dinner rolls",
                "weight": 1032,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
            },
            {
                "text": "1/3 cup melted butter",
                "quantity": 0.3333333333333333,
                "measure": "cup",
                "food": "butter",
                "weight": 75.66666666666666,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "1/3 cup grated Parmesan cheese",
                "quantity": 0.3333333333333333,
                "measure": "cup",
                "food": "Parmesan cheese",
                "weight": 49.56875,
                "foodCategory": "Cheese",
                "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Herby Butter Dinner Rolls",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c3a/c3adea04e5d8cfa190c299c1628a859d.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCq7xi0NwHqa8LbCYotmhtWa5VQOeuDCmTf3Yf4AQ5u4QIhANsGOhbde7P15qZ2d31S2UPJbAbS2Cwgs5gLLjOs7PtHKrkFCBMQABoMMTg3MDE3MTUwOTg2IgxE0BDiTeIgIgw39FIqlgXEvUAAXVPP4Bi4ov%2BYHgnuE%2FYJxFOW7cm3iCFP2%2BHIwGMBc07NJyEA%2FM4KpI540G6LcXmxbiXKf91BgKFGXR9ERsidM2J9e0kMAVYVKFQII89MfnE0eFHikhUCxNvhrf9aj%2FeC%2FO71FpFt0bIeUfRDT0vWqvkC8b2bkYlflQwaxtnRpVH55OoZh3U%2FmqbA0tQm4t43jdFFRc3QZruFiiXdV5FJGrvTi81DItTEguVFFuSbSpjpaRnppxVorMJm%2FTsNViQeevLQSRSz5kPYs9%2BRaJcdsRdBwnAHccOn8xSFm8tYXgwRVWuB5zmvB%2BETeWppucHbBH3rahv2abVR1mJP9G38ZUY6fTpny9DCclLWvqypHdGPk0K4nu7pKII8n956%2BRWVbtlsOHHuPkpbTTvWkIbACeLlmWlLosipH6XNqCz2N7D9tFeODNZzZizJSudlR9U5dtfC1brYjpTl1EgrvjQeXYQzL2Dj1BIAbL%2BFjmgK89O7v9jeRvGYKv4TqtSAPPgNkWNxvjvg%2BLDi9Q5zymbhuaD1VUClMpcOqR%2FIXHXDbbUptudYTGJcpRWiQ414dqVo%2F5sJKBc46PZzj0b551mJjWgCphW094i%2BYqMkxCdYGagWM0Mxo%2B%2BTSFERJvK6WuNdunK3WHFJqpK%2BD2HBGzXcrVYYme5Z%2FkpNMQ5idfj9VWaG6PPfRgPQiAqvYPAFsrcrD6I9rlfJlYEjW4iR735fXzyTULO3V%2F%2Fl6rEEF%2BIrL9hJ74Qlei0G1hFqc%2BNZrAQUAY75%2Fd%2BTuWFQtmUquAjBj8zBXdBj84YJ6ehzDuH9lxREYTp%2FJvQFEuDT9vTy14p52QvrFPUFkfQz2yj5ViKpvwCr1BEnR2fT8S3Iw5c5CERFIzCChMynBjqwAYT5o4YBCsL11j5S%2F3iTI7csU%2FVYy%2F1PZNi%2B8ZTz08GiJ2vDj7xgGIZb9CyhvVKrdt133yVbFHGExUfpEww%2B1%2FrP4c286m6mOxePOwnoHVAhJo4cxFPPZL9csYOIALMrkES6vZK8WmEywWq%2FddlObNuDE0BSYwpeLWqgETjE1tzO9WdV1ZGR9sE7hMosHsmcrL4HQK90y1XDy0Poxp3f8a8%2FvZEkgLD3r7YVRa2eGkTS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T103019Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCDXI3CGQ%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6cb2f1913be5583e46abf28540be133568e77372f02292c399256dc0f768f78d",
        "source": "Food Network",
        "url": "https://www.foodnetwork.com/recipes/ree-drummond/herby-butter-dinner-rolls-4530849",
        "shareAs": "http://www.edamam.com/recipe/herby-butter-dinner-rolls-2f4761821118e31b7b4434d7c970b1d1/dinner+recipes",
        "yield": 24,
        "ingredientLines": [
            "4 sticks (1 pound) salted butter",
            "24 frozen unbaked dinner rolls",
            "1 1/2 teaspoons chopped fresh rosemary",
            "1 1/2 teaspoons dried thyme",
            "1 lemon, zested"
        ],
        "ingredients": [
            {
                "text": "4 sticks (1 pound) salted butter",
                "quantity": 1,
                "measure": "pound",
                "food": "salted butter",
                "weight": 453.59237,
                "foodCategory": "Dairy",
                "foodId": "food_axwam0ga2lqqlabfq1kqtbloozm3",
                "image": "https://www.edamam.com/food-img/515/515af390107678fce1533a31ee4cc35b.jpeg"
            },
            {
                "text": "24 frozen unbaked dinner rolls",
                "quantity": 24,
                "measure": "<unit>",
                "food": "dinner rolls",
                "weight": 2064,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
            },
            {
                "text": "1 1/2 teaspoons chopped fresh rosemary",
                "quantity": 1.5,
                "measure": "teaspoon",
                "food": "fresh rosemary",
                "weight": 1.0499999999999998,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
                "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
            },
            {
                "text": "1 1/2 teaspoons dried thyme",
                "quantity": 1.5,
                "measure": "teaspoon",
                "food": "dried thyme",
                "weight": 1.5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
            },
            {
                "text": "1 lemon, zested",
                "quantity": 1,
                "measure": "<unit>",
                "food": "lemon",
                "weight": 84,
                "foodCategory": "fruit",
                "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
            }
        ],
        "totalTime": 200,
        "cuisineType": [
            "mediterranean"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Deluxe Macaroni Dinner",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6e8/6e8ea38b439fe54b6b85eda435a36254.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCq7xi0NwHqa8LbCYotmhtWa5VQOeuDCmTf3Yf4AQ5u4QIhANsGOhbde7P15qZ2d31S2UPJbAbS2Cwgs5gLLjOs7PtHKrkFCBMQABoMMTg3MDE3MTUwOTg2IgxE0BDiTeIgIgw39FIqlgXEvUAAXVPP4Bi4ov%2BYHgnuE%2FYJxFOW7cm3iCFP2%2BHIwGMBc07NJyEA%2FM4KpI540G6LcXmxbiXKf91BgKFGXR9ERsidM2J9e0kMAVYVKFQII89MfnE0eFHikhUCxNvhrf9aj%2FeC%2FO71FpFt0bIeUfRDT0vWqvkC8b2bkYlflQwaxtnRpVH55OoZh3U%2FmqbA0tQm4t43jdFFRc3QZruFiiXdV5FJGrvTi81DItTEguVFFuSbSpjpaRnppxVorMJm%2FTsNViQeevLQSRSz5kPYs9%2BRaJcdsRdBwnAHccOn8xSFm8tYXgwRVWuB5zmvB%2BETeWppucHbBH3rahv2abVR1mJP9G38ZUY6fTpny9DCclLWvqypHdGPk0K4nu7pKII8n956%2BRWVbtlsOHHuPkpbTTvWkIbACeLlmWlLosipH6XNqCz2N7D9tFeODNZzZizJSudlR9U5dtfC1brYjpTl1EgrvjQeXYQzL2Dj1BIAbL%2BFjmgK89O7v9jeRvGYKv4TqtSAPPgNkWNxvjvg%2BLDi9Q5zymbhuaD1VUClMpcOqR%2FIXHXDbbUptudYTGJcpRWiQ414dqVo%2F5sJKBc46PZzj0b551mJjWgCphW094i%2BYqMkxCdYGagWM0Mxo%2B%2BTSFERJvK6WuNdunK3WHFJqpK%2BD2HBGzXcrVYYme5Z%2FkpNMQ5idfj9VWaG6PPfRgPQiAqvYPAFsrcrD6I9rlfJlYEjW4iR735fXzyTULO3V%2F%2Fl6rEEF%2BIrL9hJ74Qlei0G1hFqc%2BNZrAQUAY75%2Fd%2BTuWFQtmUquAjBj8zBXdBj84YJ6ehzDuH9lxREYTp%2FJvQFEuDT9vTy14p52QvrFPUFkfQz2yj5ViKpvwCr1BEnR2fT8S3Iw5c5CERFIzCChMynBjqwAYT5o4YBCsL11j5S%2F3iTI7csU%2FVYy%2F1PZNi%2B8ZTz08GiJ2vDj7xgGIZb9CyhvVKrdt133yVbFHGExUfpEww%2B1%2FrP4c286m6mOxePOwnoHVAhJo4cxFPPZL9csYOIALMrkES6vZK8WmEywWq%2FddlObNuDE0BSYwpeLWqgETjE1tzO9WdV1ZGR9sE7hMosHsmcrL4HQK90y1XDy0Poxp3f8a8%2FvZEkgLD3r7YVRa2eGkTS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T103019Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCDXI3CGQ%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4ef738fce4e70002f814afb3f7e592aae66cf835e6b3b8197210f2df67aa694e",
        "source": "Allrecipes",
        "url": "https://www.allrecipes.com/recipe/117923/deluxe-macaroni-dinner/",
        "shareAs": "http://www.edamam.com/recipe/deluxe-macaroni-dinner-248f5e6dccfef73ea7cd3e573e8594a5/dinner+recipes",
        "yield": 4,
        "ingredientLines": [
            "1/2 pound ground beef",
            "1 small onion, chopped",
            "2 garlic cloves, minced",
            "10 cups water",
            "1 (14 ounce) package deluxe four cheese macaroni and cheese dinner mix",
            "2 cups chopped fresh broccoli"
        ],
        "ingredients": [
            {
                "text": "1/2 pound ground beef",
                "quantity": 0.5,
                "measure": "pound",
                "food": "ground beef",
                "weight": 226.796185,
                "foodCategory": "meats",
                "foodId": "food_boq91pbbhklr6sb0d9sbybzgklkm",
                "image": "https://www.edamam.com/food-img/cfa/cfae8f9276eaf8f0d9349ba662744a0c.jpg"
            },
            {
                "text": "1 small onion, chopped",
                "quantity": 1,
                "measure": "<unit>",
                "food": "onion",
                "weight": 70,
                "foodCategory": "vegetables",
                "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
                "text": "2 garlic cloves, minced",
                "quantity": 2,
                "measure": "clove",
                "food": "garlic",
                "weight": 6,
                "foodCategory": "vegetables",
                "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
                "text": "10 cups water",
                "quantity": 10,
                "measure": "cup",
                "food": "water",
                "weight": 2365.882365,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "1 (14 ounce) package deluxe four cheese macaroni and cheese dinner mix",
                "quantity": 14,
                "measure": "ounce",
                "food": "macaroni and cheese",
                "weight": 396.89332375000004,
                "foodCategory": "mixed grains",
                "foodId": "food_a0cotggbao06dpbyll0d9baa1ass",
                "image": "https://www.edamam.com/food-img/983/983313cbdd04739c02f6ccc5508a3001.JPG"
            },
            {
                "text": "2 cups chopped fresh broccoli",
                "quantity": 2,
                "measure": "cup",
                "food": "broccoli",
                "weight": 182,
                "foodCategory": "vegetables",
                "foodId": "food_aahw0jha9f8337ajbopx9aec6z7i",
                "image": "https://www.edamam.com/food-img/3e4/3e47317a3dd54dc911b9c44122285df1.jpg"
            }
        ],
        "totalTime": 30,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Easy Dinner Rolls",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/06d/06d541183dc72a6535fa64076efc0d9f.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMSJIMEYCIQCq7xi0NwHqa8LbCYotmhtWa5VQOeuDCmTf3Yf4AQ5u4QIhANsGOhbde7P15qZ2d31S2UPJbAbS2Cwgs5gLLjOs7PtHKrkFCBMQABoMMTg3MDE3MTUwOTg2IgxE0BDiTeIgIgw39FIqlgXEvUAAXVPP4Bi4ov%2BYHgnuE%2FYJxFOW7cm3iCFP2%2BHIwGMBc07NJyEA%2FM4KpI540G6LcXmxbiXKf91BgKFGXR9ERsidM2J9e0kMAVYVKFQII89MfnE0eFHikhUCxNvhrf9aj%2FeC%2FO71FpFt0bIeUfRDT0vWqvkC8b2bkYlflQwaxtnRpVH55OoZh3U%2FmqbA0tQm4t43jdFFRc3QZruFiiXdV5FJGrvTi81DItTEguVFFuSbSpjpaRnppxVorMJm%2FTsNViQeevLQSRSz5kPYs9%2BRaJcdsRdBwnAHccOn8xSFm8tYXgwRVWuB5zmvB%2BETeWppucHbBH3rahv2abVR1mJP9G38ZUY6fTpny9DCclLWvqypHdGPk0K4nu7pKII8n956%2BRWVbtlsOHHuPkpbTTvWkIbACeLlmWlLosipH6XNqCz2N7D9tFeODNZzZizJSudlR9U5dtfC1brYjpTl1EgrvjQeXYQzL2Dj1BIAbL%2BFjmgK89O7v9jeRvGYKv4TqtSAPPgNkWNxvjvg%2BLDi9Q5zymbhuaD1VUClMpcOqR%2FIXHXDbbUptudYTGJcpRWiQ414dqVo%2F5sJKBc46PZzj0b551mJjWgCphW094i%2BYqMkxCdYGagWM0Mxo%2B%2BTSFERJvK6WuNdunK3WHFJqpK%2BD2HBGzXcrVYYme5Z%2FkpNMQ5idfj9VWaG6PPfRgPQiAqvYPAFsrcrD6I9rlfJlYEjW4iR735fXzyTULO3V%2F%2Fl6rEEF%2BIrL9hJ74Qlei0G1hFqc%2BNZrAQUAY75%2Fd%2BTuWFQtmUquAjBj8zBXdBj84YJ6ehzDuH9lxREYTp%2FJvQFEuDT9vTy14p52QvrFPUFkfQz2yj5ViKpvwCr1BEnR2fT8S3Iw5c5CERFIzCChMynBjqwAYT5o4YBCsL11j5S%2F3iTI7csU%2FVYy%2F1PZNi%2B8ZTz08GiJ2vDj7xgGIZb9CyhvVKrdt133yVbFHGExUfpEww%2B1%2FrP4c286m6mOxePOwnoHVAhJo4cxFPPZL9csYOIALMrkES6vZK8WmEywWq%2FddlObNuDE0BSYwpeLWqgETjE1tzO9WdV1ZGR9sE7hMosHsmcrL4HQK90y1XDy0Poxp3f8a8%2FvZEkgLD3r7YVRa2eGkTS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T103019Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCDXI3CGQ%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b4a8769ca54218defffb99881f12eb678b56bc7f3157a602928c3b0f4cc0352",
        "source": "My Recipes",
        "url": "http://www.myrecipes.com/recipe/easy-dinner-rolls",
        "shareAs": "http://www.edamam.com/recipe/easy-dinner-rolls-2eeca46106805bd156bafa33e4bede66/dinner+recipes",
        "yield": 6,
        "ingredientLines": [
            "12 frozen, unbaked dinner rolls (such as Bridgford Parkerhouse Style Rolls Dough)",
            "1 egg, beaten",
            "1 to 2 Tbsp. desired topping (such as Everything Bagel, Greek, or Old Bay seasoning)",
            "1 1/2 Tbsp. melted unsalted butter"
        ],
        "ingredients": [
            {
                "text": "12 frozen, unbaked dinner rolls (such as Bridgford Parkerhouse Style Rolls Dough)",
                "quantity": 12,
                "measure": "<unit>",
                "food": "dinner rolls",
                "weight": 1032,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_brzr92vbg3padwap9ikxoblah2a3",
                "image": "https://www.edamam.com/food-img/608/6083ff46b1479341352f3fde8d1c9948.jpg"
            },
            {
                "text": "1 egg, beaten",
                "quantity": 1,
                "measure": "<unit>",
                "food": "egg",
                "weight": 43,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "1 to 2 Tbsp. desired topping (such as Everything Bagel, Greek, or Old Bay seasoning)",
                "quantity": 1.5,
                "measure": "tablespoon",
                "food": "Old Bay seasoning",
                "weight": 6.6000000000000005,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
                "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
            },
            {
                "text": "1 1/2 Tbsp. melted unsalted butter",
                "quantity": 1.5,
                "measure": "tablespoon",
                "food": "unsalted butter",
                "weight": 21.299999999999997,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            }
        ],
        "totalTime": 195,
        "cuisineType": [
            "mediterranean"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    }
,
    {
        "label": "Rhubarb Dessert",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f06/f064b49d47649a2cee6f43a16e73069c.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2caddc52db9fdadc79d3c135f55ff8cf6bdc3e258fe91ee562279b49b63a2a46",
        "source": "food.com",
        "url": "http://www.food.com/recipe/rhubarb-dessert-425881",
        "shareAs": "http://www.edamam.com/recipe/rhubarb-dessert-a44bf4b614eca96de0d680ad2cb4cb4b/dessert+recipes",
        "yield": 16,
        "ingredientLines": [
            "4 cups rhubarb, chopped",
            "1 cup granulated sugar",
            "1 (3 ounce) box strawberry Jell-O gelatin dessert",
            "1 cup water",
            "1 yellow cake mix or 1 white cake mix",
            "1⁄3 cup melted butter or 1⁄3 cup margarine"
        ],
        "ingredients": [
            {
                "text": "4 cups rhubarb, chopped",
                "quantity": 4,
                "measure": "cup",
                "food": "rhubarb",
                "weight": 488,
                "foodCategory": "fruit",
                "foodId": "food_a7d8j1ma2msbdlbqllxhfacln7y6",
                "image": "https://www.edamam.com/food-img/1ae/1aebf66086331223c10f9f4a4c4772ac.jpg"
            },
            {
                "text": "1 cup granulated sugar",
                "quantity": 1,
                "measure": "cup",
                "food": "granulated sugar",
                "weight": 200,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "1 (3 ounce) box strawberry Jell-O gelatin dessert",
                "quantity": 3,
                "measure": "ounce",
                "food": "gelatin",
                "weight": 85.048569375,
                "foodCategory": "candy",
                "foodId": "food_bh3w81wbiqrfmhbaw9hgwa3u7lky",
                "image": "https://www.edamam.com/food-img/47a/47a5b5c20c3cbfaf7332d572a5bfddbe.jpg"
            },
            {
                "text": "1 cup water",
                "quantity": 1,
                "measure": "cup",
                "food": "water",
                "weight": 236.5882365,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "1 yellow cake mix or 1 white cake mix",
                "quantity": 1,
                "measure": "<unit>",
                "food": "yellow cake mix",
                "weight": 524,
                "foodCategory": "quick breads and pastries",
                "foodId": "food_a4ug4guazuuvabbbgwzieakojn4q",
                "image": "https://www.edamam.com/food-img/e51/e51764935f990f1b12b23af7b1256f84.jpg"
            },
            {
                "text": "1⁄3 cup melted butter or 1⁄3 cup margarine",
                "quantity": 0.3333333333333333,
                "measure": "cup",
                "food": "margarine",
                "weight": 74.66666666792905,
                "foodCategory": "Oils",
                "foodId": "food_bpy417na9x14isbywkw04a21r148",
                "image": "https://www.edamam.com/food-img/33e/33ef6c4bf7db16d574a3f68fa31c4b09.jpg"
            }
        ],
        "totalTime": 55,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Frozen Oreo Dessert",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/08a/08ae6517def0173617adfd7103890011.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1c4db6c6434e6d481af3c190e7296759f153bd80ab130a5d1cdcd72e3ddc1e86",
        "source": "tastykitchen.com",
        "url": "https://tastykitchen.com/recipes/desserts/frozen-oreo-dessert/",
        "shareAs": "http://www.edamam.com/recipe/frozen-oreo-dessert-9b824b668fecf0f64455482a3acfe9e0/dessert+recipes",
        "yield": 15,
        "ingredientLines": [
            "1 package Instant Vanilla Pudding (Large Size, Approximately 6 Oz.)",
            "3 cups Milk",
            "12 ounces, weight Cool Whip Or Frozen Dessert Topping, Thawed",
            "1 package Oreos (approximately 20 Oz.), Crushed"
        ],
        "ingredients": [
            {
                "text": "1 package Instant Vanilla Pudding (Large Size, Approximately 6 Oz.)",
                "quantity": 1,
                "measure": "package",
                "food": "Instant Vanilla Pudding",
                "weight": 99,
                "foodCategory": "candy",
                "foodId": "food_abpsidkb3uccdka4zxtwha3izjnu",
                "image": "https://www.edamam.com/food-img/658/65815113cccf3d2ebcdfffecd061b48b.jpg"
            },
            {
                "text": "3 cups Milk",
                "quantity": 3,
                "measure": "cup",
                "food": "Milk",
                "weight": 732,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "12 ounces, weight Cool Whip Or Frozen Dessert Topping, Thawed",
                "quantity": 12,
                "measure": "ounce",
                "food": "Cool Whip",
                "weight": 340.1942775,
                "foodCategory": "Dairy",
                "foodId": "food_ai2bdb7bml6whwbhp5y1wb4f07ft",
                "image": "https://www.edamam.com/food-img/971/971ade15670255c0af848062c607ab90.jpg"
            },
            {
                "text": "1 package Oreos (approximately 20 Oz.), Crushed",
                "quantity": 1,
                "measure": "package",
                "food": "Oreos",
                "weight": 439,
                "foodCategory": "pastries",
                "foodId": "food_bihs8eobc58jvqbhmt6s3bym1rhf",
                "image": "https://www.edamam.com/food-img/a90/a9011c79689c79db4f1a64776509dc69.jpg"
            }
        ],
        "totalTime": 15,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Dessert-Wine-Poached Pears",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/208/208e8e9269e4247158705e51ad02594f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=31d721a7654325947890020dbc2a9a766510d4ee06cae5f53300ee717264d8c3",
        "source": "Donna Hay",
        "url": "http://www.donnahay.com.au/recipes/sweets/fruit/dessert-wine-poached-pears",
        "shareAs": "http://www.edamam.com/recipe/dessert-wine-poached-pears-f80ba02ed17f70a53ac7a6de5acb2430/dessert+recipes",
        "yield": 6,
        "ingredientLines": [
            "4 beurre bosc pears, peeled and halved",
            "1 vanilla bean, split and scraped",
            "1½ cups (375ml) dessert wine",
            "1½ cups (330g) caster (superfine) sugar"
        ],
        "ingredients": [
            {
                "text": "4 beurre bosc pears, peeled and halved",
                "quantity": 4,
                "measure": "<unit>",
                "food": "bosc pears",
                "weight": 754.9333333333334,
                "foodCategory": "fruit",
                "foodId": "food_aaony0caj2wn99a5sl1cva1ewzzt",
                "image": "https://www.edamam.com/food-img/ac1/ac1aacdf6f501fde692ce9f287c914d3.jpg"
            },
            {
                "text": "1 vanilla bean, split and scraped",
                "quantity": 1,
                "measure": "<unit>",
                "food": "vanilla bean",
                "weight": 5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
            },
            {
                "text": "1½ cups (375ml) dessert wine",
                "quantity": 375,
                "measure": "milliliter",
                "food": "dessert wine",
                "weight": 374.06762613913816,
                "foodCategory": "wines",
                "foodId": "food_a9b1edjayi2e3kae6qvpvb0l2zaf",
                "image": "https://www.edamam.com/food-img/ea0/ea026d474cb3f9c0b3302eeaa5232151.jpg"
            },
            {
                "text": "1½ cups (330g) caster (superfine) sugar",
                "quantity": 330,
                "measure": "gram",
                "food": "sugar",
                "weight": 330,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "french"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Jewel Dessert",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ee3/ee3f77f4e3f80ac79f297ca4fbc8d47b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=01d205faf0067bb07f41c9f30ca95458369173bbb7f24a79a771aae5d5ccc272",
        "source": "Men's Health",
        "url": "https://www.menshealth.com/recipes/jewel-dessert",
        "shareAs": "http://www.edamam.com/recipe/jewel-dessert-382d4f05754455c631ffb346cd40eb11/dessert+recipes",
        "yield": 14,
        "ingredientLines": [
            "4 packages (3 ounces each) gelatin dessert, of which one must be lemon",
            "3 cups boiling water",
            "1 1/2 cups cold water",
            "2 cups whipping cream",
            "1/4 cup sugar",
            "1 cup pineapple juice",
            "GRAHAM CRACKER CRUST:",
            "20 double graham crackers",
            "1/4 pound butter, softened",
            "1/4 cup sugar"
        ],
        "ingredients": [
            {
                "text": "4 packages (3 ounces each) gelatin dessert, of which one must be lemon",
                "quantity": 12,
                "measure": "ounce",
                "food": "lemon",
                "weight": 340.1942775,
                "foodCategory": "fruit",
                "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
            },
            {
                "text": "3 cups boiling water",
                "quantity": 3,
                "measure": "cup",
                "food": "water",
                "weight": 709.7647095,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "1 1/2 cups cold water",
                "quantity": 1.5,
                "measure": "cup",
                "food": "water",
                "weight": 354.88235475,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "2 cups whipping cream",
                "quantity": 2,
                "measure": "cup",
                "food": "whipping cream",
                "weight": 478,
                "foodCategory": "Dairy",
                "foodId": "food_blkhxayb2wggv1bqfzuuoazuqwg9",
                "image": "https://www.edamam.com/food-img/95c/95cc0b05cfb70cbdd2546504855f4bda.jpg"
            },
            {
                "text": "1/4 cup sugar",
                "quantity": 0.25,
                "measure": "cup",
                "food": "sugar",
                "weight": 50,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "1 cup pineapple juice",
                "quantity": 1,
                "measure": "cup",
                "food": "pineapple juice",
                "weight": 250,
                "foodCategory": "canned fruit",
                "foodId": "food_aw209cyaxr711ib8aek6ca50xm6o",
                "image": "https://www.edamam.com/food-img/3b1/3b1c6c2485df8447bf272af3fa289204.jpg"
            },
            {
                "text": "20 double graham crackers",
                "quantity": 20,
                "measure": "<unit>",
                "food": "graham crackers",
                "weight": 280,
                "foodCategory": "pastries",
                "foodId": "food_aipm8mobslonobbbkxmhbb8a4iox",
                "image": "https://www.edamam.com/food-img/448/448b5544a8ac969e88525f6bc44f5c12.jpg"
            },
            {
                "text": "1/4 pound butter, softened",
                "quantity": 0.25,
                "measure": "pound",
                "food": "butter",
                "weight": 113.3980925,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "1/4 cup sugar",
                "quantity": 0.25,
                "measure": "cup",
                "food": "sugar",
                "weight": 50,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            }
        ],
        "totalTime": 33,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Pretzel Jello Dessert",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/97e/97e8bb96a79eee5d97ca753885e75982.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0adc06d2dd162aafebd1e6d5ad4c34e2e769a05c20be5ff0a55583b020a6d9d2",
        "source": "recipezaar.com",
        "url": "http://www.recipezaar.com/Pretzel-Jello-Dessert-302722",
        "shareAs": "http://www.edamam.com/recipe/pretzel-jello-dessert-211d26e7f9cff9833f1a2b09bc86d504/dessert+recipes",
        "yield": 10,
        "ingredientLines": [
            "8 ounces cream cheese",
            "2 (3 ounce) packages strawberry Jell-O gelatin dessert",
            "3/4 cup melted butter",
            "1 cup sugar",
            "2 (10 ounce) frozen strawberries",
            "3 tablespoons sugar",
            "8 ounces Cool Whip",
            "3-4 cups crushed pretzels"
        ],
        "ingredients": [
            {
                "text": "8 ounces cream cheese",
                "quantity": 8,
                "measure": "ounce",
                "food": "cream cheese",
                "weight": 226.796185,
                "foodCategory": "Cheese",
                "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
                "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
            },
            {
                "text": "2 (3 ounce) packages strawberry Jell-O gelatin dessert",
                "quantity": 2,
                "measure": "package",
                "food": "gelatin",
                "weight": 56,
                "foodCategory": "candy",
                "foodId": "food_bh3w81wbiqrfmhbaw9hgwa3u7lky",
                "image": "https://www.edamam.com/food-img/47a/47a5b5c20c3cbfaf7332d572a5bfddbe.jpg"
            },
            {
                "text": "3/4 cup melted butter",
                "quantity": 0.75,
                "measure": "cup",
                "food": "butter",
                "weight": 170.25,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "1 cup sugar",
                "quantity": 1,
                "measure": "cup",
                "food": "sugar",
                "weight": 200,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "2 (10 ounce) frozen strawberries",
                "quantity": 20,
                "measure": "ounce",
                "food": "strawberries",
                "weight": 566.9904625,
                "foodCategory": "fruit",
                "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
                "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
            },
            {
                "text": "3 tablespoons sugar",
                "quantity": 3,
                "measure": "tablespoon",
                "food": "sugar",
                "weight": 37.4999999993661,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "8 ounces Cool Whip",
                "quantity": 8,
                "measure": "ounce",
                "food": "Cool Whip",
                "weight": 226.796185,
                "foodCategory": "Dairy",
                "foodId": "food_ai2bdb7bml6whwbhp5y1wb4f07ft",
                "image": "https://www.edamam.com/food-img/971/971ade15670255c0af848062c607ab90.jpg"
            },
            {
                "text": "3-4 cups crushed pretzels",
                "quantity": 3.5,
                "measure": "cup",
                "food": "pretzels",
                "weight": 784,
                "foodCategory": "savory snacks",
                "foodId": "food_btiuue0aksuwb6a4upk8zbxvczo1",
                "image": "https://www.edamam.com/food-img/b6c/b6cac8f12822102becc852942d5b1d02.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Norwegian Strawberry Tapioca Dessert",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/9db/9db6c6c80989e783c0726a6d55a60a54.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c90d24f94315cdc6b680d16e2ee529df10faa80728e2f43e891fdf2b4efc4163",
        "source": "food.com",
        "url": "http://www.food.com/recipe/norwegian-strawberry-tapioca-dessert-426647",
        "shareAs": "http://www.edamam.com/recipe/norwegian-strawberry-tapioca-dessert-234e389152f6070293a2bafc5f8993f0/dessert+recipes",
        "yield": 10,
        "ingredientLines": [
            "4 cups water",
            "1⁄2 cup baby pearl tapioca",
            "3 ounces strawberry Jell-O gelatin dessert",
            "1⁄2 cup sugar (optional)",
            "1 pint frozen strawberries",
            "4 -6 ounces whipped cream (optional)"
        ],
        "ingredients": [
            {
                "text": "4 cups water",
                "quantity": 4,
                "measure": "cup",
                "food": "water",
                "weight": 946.352946,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "1⁄2 cup baby pearl tapioca",
                "quantity": 0.5,
                "measure": "cup",
                "food": "tapioca",
                "weight": 76,
                "foodCategory": "grains",
                "foodId": "food_b8ll01sb3j2z1makcrbtzbr22o03",
                "image": "https://www.edamam.com/food-img/e19/e1985e408d7f2cedd809eb633e29e62c.jpg"
            },
            {
                "text": "3 ounces strawberry Jell-O gelatin dessert",
                "quantity": 3,
                "measure": "ounce",
                "food": "gelatin",
                "weight": 85.048569375,
                "foodCategory": "candy",
                "foodId": "food_bh3w81wbiqrfmhbaw9hgwa3u7lky",
                "image": "https://www.edamam.com/food-img/47a/47a5b5c20c3cbfaf7332d572a5bfddbe.jpg"
            },
            {
                "text": "1⁄2 cup sugar (optional)",
                "quantity": 0.5,
                "measure": "cup",
                "food": "sugar",
                "weight": 100,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "1 pint frozen strawberries",
                "quantity": 1,
                "measure": "pint",
                "food": "frozen strawberries",
                "weight": 298,
                "foodCategory": "fruit",
                "foodId": "food_auuu2f6btnbwd8b5vkk3gbzrsr7s",
                "image": "https://www.edamam.com/food-img/cc2/cc26ebaab395eaf79ca6b20479a37c3a.jpg"
            },
            {
                "text": "4 -6 ounces whipped cream (optional)",
                "quantity": 5,
                "measure": "ounce",
                "food": "whipped cream",
                "weight": 141.747615625,
                "foodCategory": "Dairy",
                "foodId": "food_ai2bdb7bml6whwbhp5y1wb4f07ft",
                "image": "https://www.edamam.com/food-img/971/971ade15670255c0af848062c607ab90.jpg"
            }
        ],
        "totalTime": 30,
        "cuisineType": [
            "british",
            "nordic"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Angel Food Dessert",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/593/59302273cfc5ed47212cda8e2605822d?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2265dde8e966c3982df4ae8bd87d261883c45bedb3e73121107f8f0fdd6fd816",
        "source": "food.com",
        "url": "http://www.food.com/recipe/angel-food-dessert-343503",
        "shareAs": "http://www.edamam.com/recipe/angel-food-dessert-45f32f3e68ff3bd174e9e60512755e75/dessert+recipes",
        "yield": 10,
        "ingredientLines": [
            "1 angel food cake",
            "1 pint milk or 2 cups milk",
            "1 tablespoon cornstarch",
            "2 eggs",
            "1 cup sugar",
            "1 cup boiling water",
            "2 (3 ounce) packages strawberry Jell-O gelatin dessert",
            "1 pint whipping cream or 2 cups whipping cream",
            "1 cup crushed pineapple"
        ],
        "ingredients": [
            {
                "text": "1 angel food cake",
                "quantity": 1,
                "measure": "<unit>",
                "food": "angel food cake",
                "weight": 28,
                "foodCategory": "quick breads and pastries",
                "foodId": "food_b2t8k9pa0rqlqsbck5nszbsnvc7v",
                "image": "https://www.edamam.com/food-img/e57/e57060f75296eb8cb969ba20da62131f.jpg"
            },
            {
                "text": "1 pint milk or 2 cups milk",
                "quantity": 1,
                "measure": "pint",
                "food": "milk",
                "weight": 488,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "1 tablespoon cornstarch",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "cornstarch",
                "weight": 7.999999999864745,
                "foodCategory": "grains",
                "foodId": "food_a6r17hrba37cqeabesko5a2gk233",
                "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
            },
            {
                "text": "2 eggs",
                "quantity": 2,
                "measure": "<unit>",
                "food": "eggs",
                "weight": 86,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "1 cup sugar",
                "quantity": 1,
                "measure": "cup",
                "food": "sugar",
                "weight": 200,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "1 cup boiling water",
                "quantity": 1,
                "measure": "cup",
                "food": "water",
                "weight": 236.5882365,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "2 (3 ounce) packages strawberry Jell-O gelatin dessert",
                "quantity": 2,
                "measure": "package",
                "food": "gelatin",
                "weight": 56,
                "foodCategory": "candy",
                "foodId": "food_bh3w81wbiqrfmhbaw9hgwa3u7lky",
                "image": "https://www.edamam.com/food-img/47a/47a5b5c20c3cbfaf7332d572a5bfddbe.jpg"
            },
            {
                "text": "1 pint whipping cream or 2 cups whipping cream",
                "quantity": 1,
                "measure": "pint",
                "food": "whipping cream",
                "weight": 477.99999999999994,
                "foodCategory": "Dairy",
                "foodId": "food_blkhxayb2wggv1bqfzuuoazuqwg9",
                "image": "https://www.edamam.com/food-img/95c/95cc0b05cfb70cbdd2546504855f4bda.jpg"
            },
            {
                "text": "1 cup crushed pineapple",
                "quantity": 1,
                "measure": "cup",
                "food": "pineapple",
                "weight": 165,
                "foodCategory": "fruit",
                "foodId": "food_b5maw38amr54vpat8d5vhbgmqfxn",
                "image": "https://www.edamam.com/food-img/2da/2da6f2397ab64ed185c082edebc4dd7c.jpg"
            }
        ],
        "totalTime": 15,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Baked apples with dessert wine sabayon",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d28/d285833811adc4cb4769837d76f41728.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2bf4f125ef6cfdfc07b11f597b0edf17f8ad409c1a2948812624da7c38bf0064",
        "source": "taste.com.au",
        "url": "https://www.taste.com.au/recipes/baked-apples-dessert-wine-sabayon/6a70c85e-1b07-46ad-be53-e7251e6ef506",
        "shareAs": "http://www.edamam.com/recipe/baked-apples-with-dessert-wine-sabayon-c514621723930645bc1b842800a4099c/dessert+recipes",
        "yield": 6,
        "ingredientLines": [
            "4 large Red Delicious apples",
            "100ml Brown Brothers Orange Muscat & Flora dessert wine",
            "1 teaspoon caster sugar",
            "1 vanilla bean, split lengthways, seeds removed",
            "Large pinch of ground cinnamon",
            "50g (1/4 cup) raisins",
            "3 egg yolks",
            "55g (1/4 cup) caster sugar, extra",
            "125ml (1/2 cup) Brown Brothers Orange Muscat & Flora dessert wine, extra",
            "18 slices almond bread, to serve"
        ],
        "ingredients": [
            {
                "text": "4 large Red Delicious apples",
                "quantity": 4,
                "measure": "<unit>",
                "food": "Red Delicious apples",
                "weight": 1040,
                "foodCategory": "fruit",
                "foodId": "food_a6ew6eha0m4nx4blvb73tbhfjcw6",
                "image": "https://www.edamam.com/food-img/e9a/e9a0cedf31414f009fba31eab13e552b.jpg"
            },
            {
                "text": "100ml Brown Brothers Orange Muscat & Flora dessert wine",
                "quantity": 100,
                "measure": "milliliter",
                "food": "dessert wine",
                "weight": 99.75136697043683,
                "foodCategory": "wines",
                "foodId": "food_a9b1edjayi2e3kae6qvpvb0l2zaf",
                "image": "https://www.edamam.com/food-img/ea0/ea026d474cb3f9c0b3302eeaa5232151.jpg"
            },
            {
                "text": "1 teaspoon caster sugar",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "caster sugar",
                "weight": 4.000000000202885,
                "foodCategory": "sugars",
                "foodId": "food_b83hz1dbrydiwzag8btahb15lu4l",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "1 vanilla bean, split lengthways, seeds removed",
                "quantity": 1,
                "measure": "<unit>",
                "food": "vanilla bean",
                "weight": 5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
            },
            {
                "text": "Large pinch of ground cinnamon",
                "quantity": 1,
                "measure": "pinch",
                "food": "ground cinnamon",
                "weight": 0.20312500026100197,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
            },
            {
                "text": "50g (1/4 cup) raisins",
                "quantity": 50,
                "measure": "gram",
                "food": "raisins",
                "weight": 50,
                "foodCategory": "fruit",
                "foodId": "food_a3qcdxyb09op1hbwstv5cbmoqc3d",
                "image": "https://www.edamam.com/food-img/159/159e247350db62e1f87b0636a53687f5.jpg"
            },
            {
                "text": "3 egg yolks",
                "quantity": 3,
                "measure": "<unit>",
                "food": "egg yolks",
                "weight": 40.4,
                "foodCategory": "Eggs",
                "foodId": "food_awlnigdb6qm6i1biwv7rlalfg2ni",
                "image": "https://www.edamam.com/food-img/e3f/e3f697887aec0e8ecf09a9ca8ef3944a.jpg"
            },
            {
                "text": "55g (1/4 cup) caster sugar, extra",
                "quantity": 55,
                "measure": "gram",
                "food": "caster sugar",
                "weight": 55,
                "foodCategory": "sugars",
                "foodId": "food_b83hz1dbrydiwzag8btahb15lu4l",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "125ml (1/2 cup) Brown Brothers Orange Muscat & Flora dessert wine, extra",
                "quantity": 125,
                "measure": "milliliter",
                "food": "dessert wine",
                "weight": 124.68920871304604,
                "foodCategory": "wines",
                "foodId": "food_a9b1edjayi2e3kae6qvpvb0l2zaf",
                "image": "https://www.edamam.com/food-img/ea0/ea026d474cb3f9c0b3302eeaa5232151.jpg"
            },
            {
                "text": "18 slices almond bread, to serve",
                "quantity": 18,
                "measure": "slice",
                "food": "bread",
                "weight": 522,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
                "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
            }
        ],
        "totalTime": 80,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Icebox Dessert",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e4b/e4b476f2d58fe0f1b7899a49f054abbe.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fdedbeb587971112c32acdccec9d70c7758f30b5056c3c0b2c0fb6a083ad1837",
        "source": "food.com",
        "url": "http://www.food.com/recipe/icebox-dessert-108646",
        "shareAs": "http://www.edamam.com/recipe/icebox-dessert-5774d9fb27740c02ca566118d69686da/dessert+recipes",
        "yield": 8,
        "ingredientLines": [
            "1 cup graham cracker crumbs",
            "4 tablespoons melted butter",
            "1⁄4 cup brown sugar",
            "2 eggs, separated (the egg yolks for the custard, the whites to fold in at end)",
            "1⁄2 cup granulated sugar",
            "1⁄2 cup milk",
            "1 teaspoon vanilla extract",
            "1⁄2 tablespoon unflavored gelatin (1 envelope)",
            "1 dash salt",
            "1 cup heavy cream, whipped (I've only made this dessert with fresh)"
        ],
        "ingredients": [
            {
                "text": "1 cup graham cracker crumbs",
                "quantity": 1,
                "measure": "cup",
                "food": "cracker crumbs",
                "weight": 52,
                "foodCategory": "crackers",
                "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
                "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
            },
            {
                "text": "4 tablespoons melted butter",
                "quantity": 4,
                "measure": "tablespoon",
                "food": "butter",
                "weight": 56.8,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "1⁄4 cup brown sugar",
                "quantity": 0.25,
                "measure": "cup",
                "food": "brown sugar",
                "weight": 36.25,
                "foodCategory": "sugars",
                "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
            },
            {
                "text": "2 eggs, separated (the egg yolks for the custard, the whites to fold in at end)",
                "quantity": 2,
                "measure": "<unit>",
                "food": "egg yolks",
                "weight": 26.933333333333334,
                "foodCategory": "Eggs",
                "foodId": "food_awlnigdb6qm6i1biwv7rlalfg2ni",
                "image": "https://www.edamam.com/food-img/e3f/e3f697887aec0e8ecf09a9ca8ef3944a.jpg"
            },
            {
                "text": "1⁄2 cup granulated sugar",
                "quantity": 0.5,
                "measure": "cup",
                "food": "granulated sugar",
                "weight": 100,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "1⁄2 cup milk",
                "quantity": 0.5,
                "measure": "cup",
                "food": "milk",
                "weight": 122,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "1 teaspoon vanilla extract",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "vanilla extract",
                "weight": 4.2,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
            },
            {
                "text": "1⁄2 tablespoon unflavored gelatin (1 envelope)",
                "quantity": 1,
                "measure": "envelope",
                "food": "gelatin",
                "weight": 7,
                "foodCategory": "candy",
                "foodId": "food_bh3w81wbiqrfmhbaw9hgwa3u7lky",
                "image": "https://www.edamam.com/food-img/47a/47a5b5c20c3cbfaf7332d572a5bfddbe.jpg"
            },
            {
                "text": "1 dash salt",
                "quantity": 1,
                "measure": "dash",
                "food": "salt",
                "weight": 0.4,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "1 cup heavy cream, whipped (I've only made this dessert with fresh)",
                "quantity": 1,
                "measure": "cup",
                "food": "heavy cream",
                "weight": 238,
                "foodCategory": "Dairy",
                "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
                "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
            }
        ],
        "totalTime": 920,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Icebox Dessert",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/827/8271b8a94e9f00ddd42a42e632d3954c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123347Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b13c7c375ac97e84b6a62bf261c10cd5d5221eff26f1d7c8b96775d8ebe75fef",
        "source": "recipezaar.com",
        "url": "http://www.recipezaar.com/Icebox-Dessert-108646",
        "shareAs": "http://www.edamam.com/recipe/icebox-dessert-83e0d990b60da991ea1ec16a588de41d/dessert+recipes",
        "yield": 8,
        "ingredientLines": [
            "1 cup graham cracker crumbs",
            "1/2 tablespoon unflavored gelatin (1 envelope)",
            "2 eggs , separated (the egg yolks for the custard, the whites to fold in at end)",
            "4 tablespoons melted butter",
            "1 dash salt",
            "1/2 cup milk",
            "1 teaspoon vanilla extract",
            "1/4 cup brown sugar",
            "1/2 cup granulated sugar",
            "1 cup whipped cream (I've only made this dessert with fresh)"
        ],
        "ingredients": [
            {
                "text": "1 cup graham cracker crumbs",
                "quantity": 1,
                "measure": "cup",
                "food": "cracker crumbs",
                "weight": 52,
                "foodCategory": "crackers",
                "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
                "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
            },
            {
                "text": "1/2 tablespoon unflavored gelatin (1 envelope)",
                "quantity": 1,
                "measure": "envelope",
                "food": "gelatin",
                "weight": 7,
                "foodCategory": "candy",
                "foodId": "food_bh3w81wbiqrfmhbaw9hgwa3u7lky",
                "image": "https://www.edamam.com/food-img/47a/47a5b5c20c3cbfaf7332d572a5bfddbe.jpg"
            },
            {
                "text": "2 eggs , separated (the egg yolks for the custard, the whites to fold in at end)",
                "quantity": 2,
                "measure": "<unit>",
                "food": "egg yolks",
                "weight": 26.933333333333334,
                "foodCategory": "Eggs",
                "foodId": "food_awlnigdb6qm6i1biwv7rlalfg2ni",
                "image": "https://www.edamam.com/food-img/e3f/e3f697887aec0e8ecf09a9ca8ef3944a.jpg"
            },
            {
                "text": "4 tablespoons melted butter",
                "quantity": 4,
                "measure": "tablespoon",
                "food": "butter",
                "weight": 56.8,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "1 dash salt",
                "quantity": 1,
                "measure": "dash",
                "food": "salt",
                "weight": 0.4,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "1/2 cup milk",
                "quantity": 0.5,
                "measure": "cup",
                "food": "milk",
                "weight": 122,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "1 teaspoon vanilla extract",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "vanilla extract",
                "weight": 4.2,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
                "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
            },
            {
                "text": "1/4 cup brown sugar",
                "quantity": 0.25,
                "measure": "cup",
                "food": "brown sugar",
                "weight": 36.25,
                "foodCategory": "sugars",
                "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
            },
            {
                "text": "1/2 cup granulated sugar",
                "quantity": 0.5,
                "measure": "cup",
                "food": "granulated sugar",
                "weight": 100,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "1 cup whipped cream (I've only made this dessert with fresh)",
                "quantity": 1,
                "measure": "cup",
                "food": "whipped cream",
                "weight": 60,
                "foodCategory": "Dairy",
                "foodId": "food_ai2bdb7bml6whwbhp5y1wb4f07ft",
                "image": "https://www.edamam.com/food-img/971/971ade15670255c0af848062c607ab90.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "french"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    }
,
    {
        "label": "Time for a Drink: Tuxedo Recipe",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/591/591db386a02729163e451400164a82c7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c6ea308bff75652bc17e5a189f113b2bdf33cc64ef619ceaf9180b834e41f502",
        "source": "Serious Eats",
        "url": "http://www.seriouseats.com/recipes/2008/04/time-for-a-drink-tuxedo-recipe.html",
        "shareAs": "http://www.edamam.com/recipe/time-for-a-drink-tuxedo-recipe-74c58bda6c71584ceb4e7108f872536d/drink",
        "yield": 2,
        "ingredientLines": [
            "2 ounces gin (Plymouth works very well in this drink)",
            "1 ounce fino sherry",
            "1 dash orange bitters"
        ],
        "ingredients": [
            {
                "text": "2 ounces gin (Plymouth works very well in this drink)",
                "quantity": 2,
                "measure": "ounce",
                "food": "gin",
                "weight": 56.69904625,
                "foodCategory": "liquors and cocktails",
                "foodId": "food_bzz3udhaawy24xa9sltd7b2o447b",
                "image": null
            },
            {
                "text": "1 ounce fino sherry",
                "quantity": 1,
                "measure": "ounce",
                "food": "sherry",
                "weight": 28.349523125,
                "foodCategory": "wines",
                "foodId": "food_bw2ziyiaoqtjc8abha34haszk8b9",
                "image": "https://www.edamam.com/food-img/ea6/ea6e045b01daf204a1b5b9badcc31af3.jpg"
            },
            {
                "text": "1 dash orange bitters",
                "quantity": 1,
                "measure": "dash",
                "food": "orange bitters",
                "weight": 0.5833333331262225,
                "foodCategory": "liquors and cocktails",
                "foodId": "food_b6xzjeubo7tajfad9m2i2acp2tka",
                "image": "https://www.edamam.com/food-img/6a7/6a7b42d5f3cc3053fdd9eb7abf77beb9.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "world"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "alcohol cocktail"
        ]
    },
    {
        "label": "Time for a Drink: Marmalade Sour Recipe",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fdd/fddc6e025f7c7cfc1d8d435e6fed2ea5.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0dd5d29c68f59c3c020776e86bce5d643f6123b2071fb040c6daf2867f2261d5",
        "source": "Serious Eats",
        "url": "http://www.seriouseats.com/recipes/2009/04/time-for-a-drink-marmalade-sour.html",
        "shareAs": "http://www.edamam.com/recipe/time-for-a-drink-marmalade-sour-recipe-09d699ed6d1c9c87607d49270eb99c0c/drink",
        "yield": 2,
        "ingredientLines": [
            "3 ounces cachaça",
            "1 ounce fresh lemon juice",
            "2 tablespoons orange/grapefruit/citrus marmalade (preferably low sugar)*",
            "2 dashes orange bitters (Boudreau recommends Fee’s for this drink)",
            "1 egg white"
        ],
        "ingredients": [
            {
                "text": "3 ounces cachaça",
                "quantity": 3,
                "measure": "ounce",
                "food": "cachaça",
                "weight": 85.048569375,
                "foodCategory": "liquors and cocktails",
                "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
                "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
            },
            {
                "text": "1 ounce fresh lemon juice",
                "quantity": 1,
                "measure": "ounce",
                "food": "lemon juice",
                "weight": 28.349523125,
                "foodCategory": "100% juice",
                "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
            },
            {
                "text": "2 tablespoons orange/grapefruit/citrus marmalade (preferably low sugar)*",
                "quantity": 1,
                "measure": "orange",
                "food": "marmalade",
                "weight": 40,
                "foodCategory": "sugar syrups",
                "foodId": "food_b6nq9p3bqu2ydrbayvipqbpt22qx",
                "image": "https://www.edamam.com/food-img/55e/55e9572a1c35eeedc4900c5430f821b8.jpg"
            },
            {
                "text": "2 dashes orange bitters (Boudreau recommends Fee’s for this drink)",
                "quantity": 2,
                "measure": "dash",
                "food": "orange bitters",
                "weight": 1.166666666252445,
                "foodCategory": "liquors and cocktails",
                "foodId": "food_b6xzjeubo7tajfad9m2i2acp2tka",
                "image": "https://www.edamam.com/food-img/6a7/6a7b42d5f3cc3053fdd9eb7abf77beb9.jpg"
            },
            {
                "text": "1 egg white",
                "quantity": 1,
                "measure": "<unit>",
                "food": "egg white",
                "weight": 26.4,
                "foodCategory": "Eggs",
                "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
                "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "world"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "alcohol cocktail"
        ]
    },
    {
        "label": "Grapefruit Blossom Aperitif",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/360/3602f6b23a224e5e9f22d0797c39aeca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bec01f5ca845d1eda69ada7397a8217b8fb8414929b7be976671803f7a4a423f",
        "source": "Food52",
        "url": "https://food52.com/recipes/4188-grapefruit-blossom-aperitif",
        "shareAs": "http://www.edamam.com/recipe/grapefruit-blossom-aperitif-7c44776f2f826848e31dd569e1791561/drink",
        "yield": 1,
        "ingredientLines": [
            "2 tablespoons pink grapefruit juice cocktail (you can substitute fresh pink grapefruit juice for a drier drink)",
            "2 tablespoons elderflower syrup, or elderflower drink concentrate",
            "5 ounces viognier white wine"
        ],
        "ingredients": [
            {
                "text": "2 tablespoons pink grapefruit juice cocktail (you can substitute fresh pink grapefruit juice for a drier drink)",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "fresh pink grapefruit juice",
                "weight": 30.874999999478,
                "foodCategory": "100% juice",
                "foodId": "food_bw43vfcb5p3954b4eq837adlqg6w",
                "image": "https://www.edamam.com/food-img/8aa/8aa0be9515509e45f703a656fc6abee7.jpg"
            },
            {
                "text": "2 tablespoons elderflower syrup, or elderflower drink concentrate",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "syrup",
                "weight": 40,
                "foodCategory": "sugars",
                "foodId": "food_bo37p69bopqshvaul0bn4bv0kqni",
                "image": "https://www.edamam.com/food-img/ced/ced25c45453a118e531c8aaf33e2ee38.jpg"
            },
            {
                "text": "5 ounces viognier white wine",
                "quantity": 5,
                "measure": "ounce",
                "food": "white wine",
                "weight": 141.747615625,
                "foodCategory": "wines",
                "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
                "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            }
        ],
        "totalTime": 63,
        "cuisineType": [
            "world"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "alcohol cocktail"
        ]
    },
    {
        "label": "Recipe: Leprechaun Lemonade",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/8df/8dfd652f29122bfc10a1e29b5da82c34?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=54c48d89bb50d7d29282432d2dfe6626903f5745f0f47ec157b8377b0944cdce",
        "source": "The Kitchn",
        "url": "http://www.thekitchn.com/recipe-leprechaun-lemonade-242340",
        "shareAs": "http://www.edamam.com/recipe/recipe-leprechaun-lemonade-8e3cb4df619701a273da776156f48a81/drink",
        "yield": 6,
        "ingredientLines": [
            "4 cups lemonade",
            "1 tablespoon blue raspberry drink mix, such as Kool Aid"
        ],
        "ingredients": [
            {
                "text": "4 cups lemonade",
                "quantity": 4,
                "measure": "cup",
                "food": "lemonade",
                "weight": 1056,
                "foodCategory": "sweetened beverages",
                "foodId": "food_bgtb3yaase2fz2adiqy3fbppepnj",
                "image": "https://www.edamam.com/food-img/311/3118a3ddad625ac41009a59ff610e6da.jpg"
            },
            {
                "text": "1 tablespoon blue raspberry drink mix, such as Kool Aid",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "Kool Aid",
                "weight": 5.999999999594232,
                "foodCategory": "flavored water",
                "foodId": "food_bw1e2rpa5ybxrnb43nm0ibxfxikh",
                "image": "https://www.edamam.com/food-img/d4a/d4a5414ba2b278b89ca1a57eaf6591de.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "drinks"
        ]
    },
    {
        "label": "Big Gay Ice Cream’s Tang-Creamsicle Shake recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6b9/6b969bbbb6dca49dbf95c2779c964d3c?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=01411c778c17e5ba17941f188da2b18b321989f4b590451cc83d78f288980631",
        "source": "Food Republic",
        "url": "http://www.foodrepublic.com/recipes/big-gay-ice-creams-tang-creamsicle-shake-2/",
        "shareAs": "http://www.edamam.com/recipe/big-gay-ice-cream-s-tang-creamsicle-shake-recipes-54681dc5cb9c236f673d6733b835030c/drink",
        "yield": 4,
        "ingredientLines": [
            "3/4 cup whole milk",
            "1 tablespoon Tang orange drink powder",
            "4 large scoops vanilla ice cream"
        ],
        "ingredients": [
            {
                "text": "3/4 cup whole milk",
                "quantity": 0.75,
                "measure": "cup",
                "food": "whole milk",
                "weight": 183,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "1 tablespoon Tang orange drink powder",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "orange drink",
                "weight": 15.499999999737943,
                "foodCategory": "sweetened beverages",
                "foodId": "food_backiqcalye91wbw97t0xbrrxwty",
                "image": "https://www.edamam.com/food-img/4c5/4c5ba097670dc87459bd93ecf98dc45b.jpg"
            },
            {
                "text": "4 large scoops vanilla ice cream",
                "quantity": 4,
                "measure": "scoop",
                "food": "vanilla ice cream",
                "weight": 83.6897061870615,
                "foodCategory": "frozen treats",
                "foodId": "food_bsg87una16tr8waipd66na9drm1k",
                "image": "https://www.edamam.com/food-img/1be/1be43587dc55730fc761aedf4f3df090.jpg"
            }
        ],
        "totalTime": 10,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Fizzy Lifting Drink",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/073/073efc040dcdc07b33eec4c3a6ad1681.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=61588d8068a172207d528f28e3203866792d3129e7c069880205b530d36faf6b",
        "source": "Saveur",
        "url": "http://www.saveur.com/article/Recipes/Fizzy-Lifting-Drink",
        "shareAs": "http://www.edamam.com/recipe/fizzy-lifting-drink-3b8bf08c7095fceaf1094f453f49f76c/drink",
        "yield": 2,
        "ingredientLines": [
            "½ oz. crème de cassis",
            "½ oz. ginger liqueur",
            "4 oz. brut Champagne",
            "Lemon peel, for garnish"
        ],
        "ingredients": [
            {
                "text": "½ oz. crème de cassis",
                "quantity": 0.5,
                "measure": "ounce",
                "food": "crème de cassis",
                "weight": 14.1747615625,
                "foodCategory": "liquors and cocktails",
                "foodId": "food_bzjclndb5wx6lgaq4qdvrav4xiep",
                "image": "https://www.edamam.com/food-img/625/6255aae740942e782ad588caa6aa86ca.jpg"
            },
            {
                "text": "½ oz. ginger liqueur",
                "quantity": 0.5,
                "measure": "ounce",
                "food": "ginger liqueur",
                "weight": 14.1747615625,
                "foodCategory": "liquors and cocktails",
                "foodId": "food_b31ryz2a16igvjbdmwcplbhb0q8h",
                "image": "https://www.edamam.com/food-img/b12/b12fec6be2bd44b88ceb4817013183a5.jpg"
            },
            {
                "text": "4 oz. brut Champagne",
                "quantity": 4,
                "measure": "ounce",
                "food": "Champagne",
                "weight": 113.3980925,
                "foodCategory": "wines",
                "foodId": "food_a656mk2a5dmqb2adiamu6beihduu",
                "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            },
            {
                "text": "Lemon peel, for garnish",
                "quantity": 0,
                "measure": null,
                "food": "Lemon peel",
                "weight": 0,
                "foodCategory": "fruit",
                "foodId": "food_bpg66j3a5vjuuga36uiiyaqeazpd",
                "image": "https://www.edamam.com/food-img/540/5405605c8e9b284243f06c0b1587ab6f.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "drinks"
        ]
    },
    {
        "label": "Lemon Rosé Bellini",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6cc/6cc2095943e0ca33d008de43894040e8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f158ad3bf9941e408fbb7dcda64f8d446d53798d661a20e9d0f991e2e66f2420",
        "source": "Epicurious",
        "url": "https://www.epicurious.com/recipes/food/views/lemon-rose-bellini-362450",
        "shareAs": "http://www.edamam.com/recipe/lemon-ros%C3%A9-bellini-578a369d378f5538ffb097fde4d2418f/drink",
        "yield": 1,
        "ingredientLines": [
            "1 spoonful lemon sorbet, softened",
            "1/2 ounce citrus vodka (optional, for a stronger drink)",
            "4 ounces rosé champagne",
            "2 to 3 raspberries, for garnish"
        ],
        "ingredients": [
            {
                "text": "1 spoonful lemon sorbet, softened",
                "quantity": 1,
                "measure": "spoonful",
                "food": "lemon sorbet",
                "weight": 15,
                "foodCategory": "frozen treats",
                "foodId": "food_bb0gx1jbgwfbl6b7fnyhhbpoxd4h",
                "image": "https://www.edamam.com/food-img/6f6/6f6caa41014c15fa613abef327a63b7e.jpg"
            },
            {
                "text": "1/2 ounce citrus vodka (optional, for a stronger drink)",
                "quantity": 0.5,
                "measure": "ounce",
                "food": "vodka",
                "weight": 14.1747615625,
                "foodCategory": "liquors and cocktails",
                "foodId": "food_aqnx4i8aieyph2athk58cb3cr69w",
                "image": "https://www.edamam.com/food-img/e1a/e1a4708099e89fdadeb81c2d95deaa34.jpg"
            },
            {
                "text": "4 ounces rosé champagne",
                "quantity": 4,
                "measure": "ounce",
                "food": "champagne",
                "weight": 113.3980925,
                "foodCategory": "wines",
                "foodId": "food_a656mk2a5dmqb2adiamu6beihduu",
                "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            },
            {
                "text": "2 to 3 raspberries, for garnish",
                "quantity": 2.5,
                "measure": "<unit>",
                "food": "raspberries",
                "weight": 4.75,
                "foodCategory": "fruit",
                "foodId": "food_al3e7s2a1lm4i6bga7o0abp399zg",
                "image": "https://www.edamam.com/food-img/a67/a671e604bed03c27259eab176c781e22.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "world"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "alcohol cocktail"
        ]
    },
    {
        "label": "Lime Squash Drink recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/23a/23af60df8e178de210f99c298a293e7c?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b50a532e1472423d7335704db6d21c4c4d75089f36ebfe3f76f7c1d41eff0dbf",
        "source": "Martha Stewart",
        "url": "http://www.marthastewart.com/348665/lime-squash-drink",
        "shareAs": "http://www.edamam.com/recipe/lime-squash-drink-recipes-c5ea0435dad977e9caaa1f99ebd71188/drink",
        "yield": 2,
        "ingredientLines": [
            "4 small or 2 medium-size limes",
            "3 tablespoons honey",
            "1 1/4 cups (10 ounces) carbonated water (mineral water, club soda, etc.)"
        ],
        "ingredients": [
            {
                "text": "4 small or 2 medium-size limes",
                "quantity": 4,
                "measure": "<unit>",
                "food": "limes",
                "weight": 268,
                "foodCategory": "fruit",
                "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
            },
            {
                "text": "3 tablespoons honey",
                "quantity": 3,
                "measure": "tablespoon",
                "food": "honey",
                "weight": 63,
                "foodCategory": "sugar syrups",
                "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
            },
            {
                "text": "1 1/4 cups (10 ounces) carbonated water (mineral water, club soda, etc.)",
                "quantity": 10,
                "measure": "ounce",
                "food": "carbonated water",
                "weight": 283.49523125,
                "foodCategory": "flavored water",
                "foodId": "food_aqqa7ffbnno3ccbtnhqx8bvaaetb",
                "image": "https://www.edamam.com/food-img/6fe/6feb3b289f54d4d2f9e10a04292acf9b.jpg"
            }
        ],
        "totalTime": 25,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "breakfast"
        ],
        "dishType": [
            "condiments and sauces"
        ]
    },
    {
        "label": "Pomegranate & vermouth mulled wine",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/dcc/dcc46eca58c7494235d0ca0182d35832.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=736d45a94ad09d18e926db02fc0417c0e4ab71a9f2fde242f4fa82c91df81a6a",
        "source": "BBC Good Food",
        "url": "https://www.bbcgoodfood.com/recipes/pomegranate-vermouth-mulled-wine",
        "shareAs": "http://www.edamam.com/recipe/pomegranate-vermouth-mulled-wine-a354f41fc78a499793d8dcc064e8ed53/drink",
        "yield": 6,
        "ingredientLines": [
            "500ml carton pomegranate juice (100% juice, not ‘juice drink’)",
            "100ml red vermouth",
            "200ml red wine",
            "2 oranges , sliced, plus extra to garnish",
            "2 tsp honey",
            "1 cinnamon stick",
            "4 cloves",
            "4 allspice berries"
        ],
        "ingredients": [
            {
                "text": "500ml carton pomegranate juice (100% juice, not ‘juice drink’)",
                "quantity": 500,
                "measure": "milliliter",
                "food": "pomegranate juice",
                "weight": 530.880156418935,
                "foodCategory": "sweetened beverages",
                "foodId": "food_bzk1qx5bikiddob3zb3yebw5k8ew",
                "image": "https://www.edamam.com/food-img/f9a/f9a50ef137a0b23f94dc0883a7cb5248.jpg"
            },
            {
                "text": "100ml red vermouth",
                "quantity": 100,
                "measure": "milliliter",
                "food": "vermouth",
                "weight": 99.75136697043683,
                "foodCategory": "wines",
                "foodId": "food_bw5p1agbubb4dubpm8r0yax8fjco",
                "image": "https://www.edamam.com/food-img/aeb/aebdd2e72bc13fa8ca762a408b6e58b6.jpg"
            },
            {
                "text": "200ml red wine",
                "quantity": 200,
                "measure": "milliliter",
                "food": "red wine",
                "weight": 198.82645348683684,
                "foodCategory": "wines",
                "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
                "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
            },
            {
                "text": "2 oranges , sliced, plus extra to garnish",
                "quantity": 2,
                "measure": "<unit>",
                "food": "oranges",
                "weight": 262,
                "foodCategory": "fruit",
                "foodId": "food_b0bnl8oayiqhs2at63ifxbm6i3o3",
                "image": "https://www.edamam.com/food-img/8ea/8ea264a802d6e643c1a340a77863c6ef.jpg"
            },
            {
                "text": "2 tsp honey",
                "quantity": 2,
                "measure": "teaspoon",
                "food": "honey",
                "weight": 14.125000000716435,
                "foodCategory": "sugar syrups",
                "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
            },
            {
                "text": "1 cinnamon stick",
                "quantity": 1,
                "measure": "<unit>",
                "food": "cinnamon stick",
                "weight": 2.6,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_atjxtznauw5zabaixm24xa787onz",
                "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
            },
            {
                "text": "4 cloves",
                "quantity": 4,
                "measure": "<unit>",
                "food": "cloves",
                "weight": 0.6,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_abb00nxbw761ggavcuto7b3mw1s0",
                "image": "https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg"
            },
            {
                "text": "4 allspice berries",
                "quantity": 4,
                "measure": "<unit>",
                "food": "berries",
                "weight": 5.44,
                "foodCategory": "fruit",
                "foodId": "food_bgkl0cuasoeomtbolalmcauhha54",
                "image": "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png"
            }
        ],
        "totalTime": 15,
        "cuisineType": [
            "world"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "alcohol cocktail"
        ]
    },
    {
        "label": "Raspberry Pops",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fce/fceda46bceef39f8a2abc9ed4165e9cb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123436Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2737ae332d67ec26869d35f930b830ad16db7010ddefb52f16c15bd856077d0f",
        "source": "Real Simple",
        "url": "https://www.realsimple.com/food-recipes/browse-all-recipes/raspberry-pops",
        "shareAs": "http://www.edamam.com/recipe/raspberry-pops-eb0ab59c4c6133301346c8216f0752b2/drink",
        "yield": 6,
        "ingredientLines": [
            "2 1/2 cups fresh raspberries",
            "1 cup raspberry juice drink, such as Welch's",
            "2 tablespoons light corn syrup or creme de cassis"
        ],
        "ingredients": [
            {
                "text": "2 1/2 cups fresh raspberries",
                "quantity": 2.5,
                "measure": "cup",
                "food": "raspberries",
                "weight": 307.5,
                "foodCategory": "fruit",
                "foodId": "food_al3e7s2a1lm4i6bga7o0abp399zg",
                "image": "https://www.edamam.com/food-img/a67/a671e604bed03c27259eab176c781e22.jpg"
            },
            {
                "text": "1 cup raspberry juice drink, such as Welch's",
                "quantity": 1,
                "measure": "cup",
                "food": "raspberry",
                "weight": 123,
                "foodCategory": "fruit",
                "foodId": "food_al3e7s2a1lm4i6bga7o0abp399zg",
                "image": "https://www.edamam.com/food-img/a67/a671e604bed03c27259eab176c781e22.jpg"
            },
            {
                "text": "2 tablespoons light corn syrup or creme de cassis",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "light corn syrup",
                "weight": 44,
                "foodCategory": "sugars",
                "foodId": "food_b8n4w6faic9hd1a7t9vx1bxq42wr",
                "image": "https://www.edamam.com/food-img/148/1488bb6a128ff5142e0a52d5eeb36d36.jpg"
            }
        ],
        "totalTime": 190,
        "cuisineType": [
            "mediterranean"
        ],
        "mealType": [
            "snack"
        ],
        "dishType": [
            "desserts"
        ]
    }
,
    {
        "label": "Spinach Side Dish",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/58a/58a831c492aaf53feca39e2a3bea8db4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f451b3e919882964038bff0a80ff7af25963f2da96459532d385d0ec6fb9b105",
        "source": "tastykitchen.com",
        "url": "https://tastykitchen.com/recipes/sidedishes/spinach-side-dish/",
        "shareAs": "http://www.edamam.com/recipe/spinach-side-dish-876e118e78db90883b695f9bd04f0caf/side+dish+recipes",
        "yield": 3,
        "ingredientLines": [
            "5 ounces, weight Baby Spinach",
            "1 Green Onion, Sliced",
            "1 clove Garlic, Minced",
            "1 teaspoon Soy Sauce",
            "1 teaspoon Toasted Sesame Oil",
            "½ teaspoons Toasted Sesame Seeds",
            "Salt To Taste"
        ],
        "ingredients": [
            {
                "text": "5 ounces, weight Baby Spinach",
                "quantity": 5,
                "measure": "ounce",
                "food": "Spinach",
                "weight": 141.747615625,
                "foodCategory": "vegetables",
                "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
                "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
            },
            {
                "text": "1 Green Onion, Sliced",
                "quantity": 1,
                "measure": "<unit>",
                "food": "Green Onion",
                "weight": 13.888888888888891,
                "foodCategory": "vegetables",
                "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
                "text": "1 clove Garlic, Minced",
                "quantity": 1,
                "measure": "clove",
                "food": "Garlic",
                "weight": 3,
                "foodCategory": "vegetables",
                "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
                "text": "1 teaspoon Soy Sauce",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "Soy Sauce",
                "weight": 5.3,
                "foodCategory": "plant-based protein",
                "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
            },
            {
                "text": "1 teaspoon Toasted Sesame Oil",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "Toasted Sesame Oil",
                "weight": 4.5,
                "foodCategory": "Oils",
                "foodId": "food_b2id9opa0l5afvbw2do5xa1fnz4q",
                "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
            },
            {
                "text": "½ teaspoons Toasted Sesame Seeds",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "Sesame Seeds",
                "weight": 1.5000000000760818,
                "foodCategory": "plant-based protein",
                "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
                "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
            },
            {
                "text": "Salt To Taste",
                "quantity": 0,
                "measure": null,
                "food": "Salt",
                "weight": 1.01961902708379,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
        ],
        "totalTime": 16,
        "cuisineType": [
            "middle eastern"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Tabbouleh (Side Dish)",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6a8/6a87cdcd941ec66ad2b4af3fd27ea15f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a649432d6f804fd02f4909c8c4e807b6a51172294324df0f700daff2b68d9b74",
        "source": "amenuforyou.com",
        "url": "https://www.amenuforyou.com/side-dishes/tabbouleh-side-dish-1434",
        "shareAs": "http://www.edamam.com/recipe/tabbouleh-side-dish-4097bb99d724a461d76ce5f12b687fbd/side+dish+recipes",
        "yield": 4,
        "ingredientLines": [
            "1 cup medium bulgar (you can usually find this on the same aisle as rice)",
            "2 tablespoons fresh lemon juice",
            "2 tablespoons olive oil",
            "½ cup Italian-leaf parsley, finely chopped"
        ],
        "ingredients": [
            {
                "text": "1 cup medium bulgar (you can usually find this on the same aisle as rice)",
                "quantity": 1,
                "measure": "cup",
                "food": "bulgar",
                "weight": 140,
                "foodCategory": "grains",
                "foodId": "food_bnvq3wpby97h34bvahz0hb1sggds",
                "image": "https://www.edamam.com/food-img/efd/efdae488ee5023e28e7f128e61b261f7.jpg"
            },
            {
                "text": "2 tablespoons fresh lemon juice",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "lemon juice",
                "weight": 30.4999999994844,
                "foodCategory": "100% juice",
                "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
            },
            {
                "text": "2 tablespoons olive oil",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "olive oil",
                "weight": 27,
                "foodCategory": "Oils",
                "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
                "text": "½ cup Italian-leaf parsley, finely chopped",
                "quantity": 0.5,
                "measure": "cup",
                "food": "parsley",
                "weight": 30,
                "foodCategory": "vegetables",
                "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "middle eastern"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "salad"
        ]
    },
    {
        "label": "Simple Side Dish",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/580/580256b75eb4dd2e8bed74190d8920f2.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2cff3db18f3019e7211579065077aa46992bef289c7c72e44ab9a2c42f7bcb29",
        "source": "ahungryspoon.blogspot.com",
        "url": "http://ahungryspoon.blogspot.com/2010/10/simple-side-dish.html",
        "shareAs": "http://www.edamam.com/recipe/simple-side-dish-fdf5663bd67fc83f24a3884d5a0f4eb9/side+dish+recipes",
        "yield": 2,
        "ingredientLines": [
            "3 cloves of garlic, minced",
            "a dash of olive oil",
            "2 TBSP water",
            "2 TBSP low-sodium soy sauce",
            "1/2 tsp. sugar",
            "1 - 1/4 cups chopped carrots",
            "1/2 cup chopped onion",
            "1/2 cup chopped celery",
            "1/4 cup chopped, toasted almonds"
        ],
        "ingredients": [
            {
                "text": "3 cloves of garlic, minced",
                "quantity": 3,
                "measure": "clove",
                "food": "garlic",
                "weight": 9,
                "foodCategory": "vegetables",
                "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
                "text": "a dash of olive oil",
                "quantity": 1,
                "measure": "dash",
                "food": "olive oil",
                "weight": 0.562499999800286,
                "foodCategory": "Oils",
                "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
                "text": "2 TBSP water",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "water",
                "weight": 29.573529562,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "2 TBSP low-sodium soy sauce",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "low-sodium soy sauce",
                "weight": 28.4,
                "foodCategory": "plant-based protein",
                "foodId": "food_af8xwhdbq4vg0tbqfqjysafu339b",
                "image": "https://www.edamam.com/food-img/4bc/4bccc4c294a8dddb62020c62935e6fd8.jpg"
            },
            {
                "text": "1/2 tsp. sugar",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "sugar",
                "weight": 2.1,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "1 - 1/4 cups chopped carrots",
                "quantity": 1.25,
                "measure": "cup",
                "food": "carrots",
                "weight": 160,
                "foodCategory": "vegetables",
                "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
                "text": "1/2 cup chopped onion",
                "quantity": 0.5,
                "measure": "cup",
                "food": "onion",
                "weight": 80,
                "foodCategory": "vegetables",
                "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
                "text": "1/2 cup chopped celery",
                "quantity": 0.5,
                "measure": "cup",
                "food": "celery",
                "weight": 50.5,
                "foodCategory": "vegetables",
                "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
                "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
                "text": "1/4 cup chopped, toasted almonds",
                "quantity": 0.25,
                "measure": "cup",
                "food": "toasted almonds",
                "weight": 34.5,
                "foodCategory": "plant-based protein",
                "foodId": "food_axxrxnhag092aoajgcbhvbd898mc",
                "image": "https://www.edamam.com/food-img/2b6/2b6b5e7ee42650558508ce321d60a9da.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Mexican Side Dish",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d1b/d1b278cb59ddb2e4a723244501b68946.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=55e70c5d25684c32514993bbcc1a652c2db4d129793e19b968e2279ba588ce51",
        "source": "food.com",
        "url": "http://www.food.com/recipe/mexican-side-dish-420388",
        "shareAs": "http://www.edamam.com/recipe/mexican-side-dish-6e40e316ae058328632f80294f486be6/side+dish+recipes",
        "yield": 5,
        "ingredientLines": [
            "4 cups tomatoes (i use 2 cans rotel)",
            "1 cup corn",
            "1 jalapeno, diced",
            "1 cup kidney bean, drained",
            "1 onion, diced",
            "1⁄4 teaspoon cumin",
            "1⁄4 teaspoon chili flakes",
            "1⁄2 teaspoon salt",
            "1⁄4 teaspoon pepper",
            "2 tablespoons oil"
        ],
        "ingredients": [
            {
                "text": "4 cups tomatoes (i use 2 cans rotel)",
                "quantity": 4,
                "measure": "cup",
                "food": "tomatoes",
                "weight": 596,
                "foodCategory": "vegetables",
                "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
            },
            {
                "text": "1 cup corn",
                "quantity": 1,
                "measure": "cup",
                "food": "corn",
                "weight": 145,
                "foodCategory": "vegetables",
                "foodId": "food_b4wvre6b14mmkpaa22d8ybup8q51",
                "image": "https://www.edamam.com/food-img/eb5/eb5e11afb9f697720b2de2e0e0e27d8d.jpg"
            },
            {
                "text": "1 jalapeno, diced",
                "quantity": 1,
                "measure": "<unit>",
                "food": "jalapeno",
                "weight": 14,
                "foodCategory": "vegetables",
                "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
                "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
            },
            {
                "text": "1 cup kidney bean, drained",
                "quantity": 1,
                "measure": "cup",
                "food": "kidney bean",
                "weight": 184,
                "foodCategory": "plant-based protein",
                "foodId": "food_bh0xrcsbwy52d9a4ugv9bam51wnv",
                "image": "https://www.edamam.com/food-img/b38/b38474ab11c81e155df0ef5b7120bc27.jpg"
            },
            {
                "text": "1 onion, diced",
                "quantity": 1,
                "measure": "<unit>",
                "food": "onion",
                "weight": 125,
                "foodCategory": "vegetables",
                "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
                "text": "1⁄4 teaspoon cumin",
                "quantity": 0.25,
                "measure": "teaspoon",
                "food": "cumin",
                "weight": 0.525,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
                "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
            },
            {
                "text": "1⁄4 teaspoon chili flakes",
                "quantity": 0.25,
                "measure": "teaspoon",
                "food": "chili",
                "weight": 0.7812500000396259,
                "foodCategory": "vegetables",
                "foodId": "food_a6g98mqatzj7vca6ms3bnbzqxf3s",
                "image": "https://www.edamam.com/food-img/469/469213672957a242638e20c27e3e8acd.jpeg"
            },
            {
                "text": "1⁄2 teaspoon salt",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "salt",
                "weight": 3,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "1⁄4 teaspoon pepper",
                "quantity": 0.25,
                "measure": "teaspoon",
                "food": "pepper",
                "weight": 0.725,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
                "text": "2 tablespoons oil",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "oil",
                "weight": 28,
                "foodCategory": "Oils",
                "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
            }
        ],
        "totalTime": 35,
        "cuisineType": [
            "mexican"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Unstuffing Side Dish",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d5e/d5e1a2f02d0015d43b8a29cc947f2960.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f96c75eb8ad424def0d69b47cc1dde6a61044105af028cefd29627c675dafb05",
        "source": "Allrecipes",
        "url": "http://allrecipes.com/Recipe/Unstuffing-Side-Dish/Detail.aspx",
        "shareAs": "http://www.edamam.com/recipe/unstuffing-side-dish-92944c4aaff898215c2f1b31f0ce4677/side+dish+recipes",
        "yield": 10,
        "ingredientLines": [
            "6 cups unseasoned stuffing croutons or dry bread cubes",
            "1/2 pound fresh mushrooms, sliced",
            "1/2 teaspoon salt",
            "1 medium onion, chopped",
            "1/4 teaspoon pepper",
            "2 1/2 cups chicken broth",
            "3/4 cup chopped celery",
            "1 teaspoon poultry seasoning",
            "1/4 cup butter or margarine",
            "1/2 pound bulk Italian sausage"
        ],
        "ingredients": [
            {
                "text": "6 cups unseasoned stuffing croutons or dry bread cubes",
                "quantity": 6,
                "measure": "cup",
                "food": "croutons",
                "weight": 180,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_avw9vq0bec9nnsbe32ezzamb4hv3",
                "image": "https://www.edamam.com/food-img/a92/a926476114784bca74068f950ba49fe2.jpg"
            },
            {
                "text": "1/2 pound fresh mushrooms, sliced",
                "quantity": 0.5,
                "measure": "pound",
                "food": "mushrooms",
                "weight": 226.796185,
                "foodCategory": "vegetables",
                "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
                "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
            },
            {
                "text": "1/2 teaspoon salt",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "salt",
                "weight": 3,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "1 medium onion, chopped",
                "quantity": 1,
                "measure": "<unit>",
                "food": "onion",
                "weight": 110,
                "foodCategory": "vegetables",
                "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
                "text": "1/4 teaspoon pepper",
                "quantity": 0.25,
                "measure": "teaspoon",
                "food": "pepper",
                "weight": 0.725,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
                "text": "2 1/2 cups chicken broth",
                "quantity": 2.5,
                "measure": "cup",
                "food": "chicken broth",
                "weight": 600,
                "foodCategory": "canned soup",
                "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
                "text": "3/4 cup chopped celery",
                "quantity": 0.75,
                "measure": "cup",
                "food": "celery",
                "weight": 75.75,
                "foodCategory": "vegetables",
                "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
                "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
                "text": "1 teaspoon poultry seasoning",
                "quantity": 1,
                "measure": "teaspoon",
                "food": "poultry seasoning",
                "weight": 1.5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
                "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
            },
            {
                "text": "1/4 cup butter or margarine",
                "quantity": 0.25,
                "measure": "cup",
                "food": "butter",
                "weight": 56.75,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "1/2 pound bulk Italian sausage",
                "quantity": 0.5,
                "measure": "pound",
                "food": "Italian sausage",
                "weight": 226.796185,
                "foodCategory": "Cured meats",
                "foodId": "food_a6z51qra5sgreaa8hpu5datt7c52",
                "image": "https://www.edamam.com/food-img/caf/cafaac36e1482d9bec67dd39393b5d12.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Cauliflower Side Dish",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4b8/4b86b40c0234ca80517fd92423d984eb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f605dbebb75d5441518aaabbb1ff78fd0b5fe311ab86c336a55b857cce645f37",
        "source": "weekendatthecottage.com",
        "url": "https://weekendatthecottage.com/cauliflower-saute/",
        "shareAs": "http://www.edamam.com/recipe/cauliflower-side-dish-b06bfe80a70a8470ee68e1a9473f336b/side+dish+recipes",
        "yield": 4,
        "ingredientLines": [
            "1 head of cauliflower, chopped",
            "2 tablespoons of coconut oil",
            "1 tablespoon of Chinese five-spice",
            "3 scallions, chopped",
            "1 cup of sliced almonds",
            "½ cup of chopped cilantro",
            "1 tablespoon of garlic chili sauce",
            "1 tablespoon of tamari sauce",
            "juice of 1 lime"
        ],
        "ingredients": [
            {
                "text": "1 head of cauliflower, chopped",
                "quantity": 1,
                "measure": "head",
                "food": "cauliflower",
                "weight": 537.7777777777777,
                "foodCategory": "vegetables",
                "foodId": "food_buqfaxubzh6hi5asev8a5aj9sr71",
                "image": "https://www.edamam.com/food-img/ca2/ca217d31067dffd35ce1215e7f336bd8.jpg"
            },
            {
                "text": "2 tablespoons of coconut oil",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "coconut oil",
                "weight": 27.2,
                "foodCategory": "Oils",
                "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
                "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
            },
            {
                "text": "1 tablespoon of Chinese five-spice",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "five-spice",
                "weight": 6,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bwlqp2wb01krjcbnzizdga6et64z",
                "image": "https://www.edamam.com/food-img/c3f/c3f96d47d334b92f0120ff0b3a512ec3.jpg"
            },
            {
                "text": "3 scallions, chopped",
                "quantity": 3,
                "measure": "<unit>",
                "food": "scallions",
                "weight": 41.66666666666667,
                "foodCategory": "vegetables",
                "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
                "text": "1 cup of sliced almonds",
                "quantity": 1,
                "measure": "cup",
                "food": "almonds",
                "weight": 92,
                "foodCategory": "plant-based protein",
                "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
            },
            {
                "text": "½ cup of chopped cilantro",
                "quantity": 0.5,
                "measure": "cup",
                "food": "cilantro",
                "weight": 8,
                "foodCategory": "vegetables",
                "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
            },
            {
                "text": "1 tablespoon of garlic chili sauce",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "chili sauce",
                "weight": 17.062499999711527,
                "foodCategory": "canned soup",
                "foodId": "food_bhbp119ac2wtf4bonhducaui3w1i",
                "image": "https://www.edamam.com/food-img/81d/81da946bd53702b0963552059d209c89.jpg"
            },
            {
                "text": "1 tablespoon of tamari sauce",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "tamari",
                "weight": 18,
                "foodCategory": "plant-based protein",
                "foodId": "food_al3j2qwa04zybuafc1twwap4umvy",
                "image": "https://www.edamam.com/food-img/f52/f5263a232df96ad21cf2120e05c941ae.jpg"
            },
            {
                "text": "juice of 1 lime",
                "quantity": 1,
                "measure": "<unit>",
                "food": "lime",
                "weight": 67,
                "foodCategory": "fruit",
                "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
                "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "caribbean"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Southwest Side Dish",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/77e/77e37a6ccead25e2f3b80ac2798e4f6f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9cc992f69549a59ede0c9604ce573fa7574e239e02b3660b3a4709302ab7c464",
        "source": "food.com",
        "url": "http://www.food.com/recipe/southwest-side-dish-360103",
        "shareAs": "http://www.edamam.com/recipe/southwest-side-dish-d637f73de73e9ccd6bb7066999e7bd1b/side+dish+recipes",
        "yield": 4,
        "ingredientLines": [
            "1⁄2 onion, chopped",
            "1⁄2 red bell pepper, chopped",
            "3⁄4 cup green beans, cut in 1-inch pieces",
            "1 medium zucchini, cut in 1/4-inch thick quarter-rounds",
            "3⁄4 cup frozen corn",
            "3⁄4 cup canned black beans (drained and rinsed)",
            "2 tablespoons olive oil",
            "1⁄2 teaspoon vinegar (your preference, we like rice or cider vinegar)",
            "1⁄4 teaspoon chili powder or 1⁄4 teaspoon red pepper flakes",
            "salt and pepper",
            "2 tablespoons chopped cilantro"
        ],
        "ingredients": [
            {
                "text": "1⁄2 onion, chopped",
                "quantity": 0.5,
                "measure": "<unit>",
                "food": "onion",
                "weight": 62.5,
                "foodCategory": "vegetables",
                "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
                "text": "1⁄2 red bell pepper, chopped",
                "quantity": 0.5,
                "measure": "<unit>",
                "food": "red bell pepper",
                "weight": 59.5,
                "foodCategory": "vegetables",
                "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
                "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
            },
            {
                "text": "3⁄4 cup green beans, cut in 1-inch pieces",
                "quantity": 0.75,
                "measure": "cup",
                "food": "green beans",
                "weight": 75,
                "foodCategory": "vegetables",
                "foodId": "food_aceucvpau4a8v6atkx5eabxyoqdn",
                "image": "https://www.edamam.com/food-img/891/89135f10639878a2360e6a33c9af3d91.jpg"
            },
            {
                "text": "1 medium zucchini, cut in 1/4-inch thick quarter-rounds",
                "quantity": 1,
                "measure": "<unit>",
                "food": "zucchini",
                "weight": 196,
                "foodCategory": "vegetables",
                "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
                "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
            },
            {
                "text": "3⁄4 cup frozen corn",
                "quantity": 0.75,
                "measure": "cup",
                "food": "frozen corn",
                "weight": 102,
                "foodCategory": "vegetables",
                "foodId": "food_batr9szb8bdeqqb03sa52a0llnri",
                "image": "https://www.edamam.com/food-img/277/2774d1aa2741b30e917eee5c4898a7d3.jpg"
            },
            {
                "text": "3⁄4 cup canned black beans (drained and rinsed)",
                "quantity": 0.75,
                "measure": "cup",
                "food": "canned black beans",
                "weight": 180,
                "foodCategory": "plant-based protein",
                "foodId": "food_bazzo85azdbkmsb56nu4ra5rphoe",
                "image": "https://www.edamam.com/food-img/850/8505bc3d47bbc820b69d532202f61ce1.jpg"
            },
            {
                "text": "2 tablespoons olive oil",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "olive oil",
                "weight": 27,
                "foodCategory": "Oils",
                "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
                "text": "1⁄2 teaspoon vinegar (your preference, we like rice or cider vinegar)",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "vinegar",
                "weight": 2.5,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_am3vwadag9arxtadrwyfcau2w3b2",
                "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
            },
            {
                "text": "1⁄4 teaspoon chili powder or 1⁄4 teaspoon red pepper flakes",
                "quantity": 0.25,
                "measure": "teaspoon",
                "food": "red pepper flakes",
                "weight": 0.19270833334310772,
                "foodCategory": "vegetables",
                "foodId": "food_bispmxiaijcuxcagex14mbhk2o48",
                "image": "https://www.edamam.com/food-img/6cb/6cb8e4510251a322178f6e191b3a7b1b.jpeg"
            },
            {
                "text": "salt and pepper",
                "quantity": 0,
                "measure": null,
                "food": "salt",
                "weight": 4.240156249999856,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "salt and pepper",
                "quantity": 0,
                "measure": null,
                "food": "pepper",
                "weight": 2.120078124999928,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
                "text": "2 tablespoons chopped cilantro",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "cilantro",
                "weight": 1.999999999966186,
                "foodCategory": "vegetables",
                "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
            }
        ],
        "totalTime": 25,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ]
    },
    {
        "label": "The Perfect Side Dish",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/2bd/2bd1cbc3ba33aad92a158639fef3066c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9f78f87997e2c57304d1b68ea2c495de85d4364da167857c3540b617be03ef45",
        "source": "thegratefulplate.org",
        "url": "http://thegratefulplate.org/the-perfect-side-dish/",
        "shareAs": "http://www.edamam.com/recipe/the-perfect-side-dish-46e46ce23258545d4df088f1623f4987/side+dish+recipes",
        "yield": 6,
        "ingredientLines": [
            "* 1 tablespoon coconut oil",
            "* 1.5 pound cabbage (a mix of red and green i ideal)",
            "* 1 large apple",
            "* 1 thinly sliced onion",
            "* 1 red chili, finely chopped",
            "* 1 tablespoon chopped thyme",
            "* 1 tablespoon apple cider vinegar",
            "* 2/3 cup chopped almond"
        ],
        "ingredients": [
            {
                "text": "* 1 tablespoon coconut oil",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "coconut oil",
                "weight": 13.6,
                "foodCategory": "Oils",
                "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
                "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
            },
            {
                "text": "* 1.5 pound cabbage (a mix of red and green i ideal)",
                "quantity": 1.5,
                "measure": "pound",
                "food": "cabbage",
                "weight": 680.388555,
                "foodCategory": "vegetables",
                "foodId": "food_afb4o8kb767k0iapchxupaifxk1z",
                "image": "https://www.edamam.com/food-img/cb1/cb1411c925c19de26620e63cb90d0e14.jpg"
            },
            {
                "text": "* 1 large apple",
                "quantity": 1,
                "measure": "<unit>",
                "food": "apple",
                "weight": 223,
                "foodCategory": "fruit",
                "foodId": "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                "image": "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg"
            },
            {
                "text": "* 1 thinly sliced onion",
                "quantity": 1,
                "measure": "<unit>",
                "food": "onion",
                "weight": 125,
                "foodCategory": "vegetables",
                "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
                "text": "* 1 red chili, finely chopped",
                "quantity": 1,
                "measure": "<unit>",
                "food": "red chili",
                "weight": 45,
                "foodCategory": "vegetables",
                "foodId": "food_a6g98mqatzj7vca6ms3bnbzqxf3s",
                "image": "https://www.edamam.com/food-img/469/469213672957a242638e20c27e3e8acd.jpeg"
            },
            {
                "text": "* 1 tablespoon chopped thyme",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "thyme",
                "weight": 2.3999999998376933,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
                "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
                "text": "* 1 tablespoon apple cider vinegar",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "apple cider vinegar",
                "weight": 14.9,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_ar8m7esapmfvf8bnhfzdlabndh6v",
                "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
            },
            {
                "text": "* 2/3 cup chopped almond",
                "quantity": 0.6666666666666666,
                "measure": "cup",
                "food": "almond",
                "weight": 95.33333333333333,
                "foodCategory": "plant-based protein",
                "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
                "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Smashed Cauliflower Side Dish",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/0ec/0ecd239c84a46ad386d2c50afacd53fd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b20af6cf0c0b2ec69087fe1a6b6db8ebfc5452df9db5c20977fb7ebaaa858993",
        "source": "Allrecipes",
        "url": "https://www.allrecipes.com/recipe/221028/smashed-cauliflower-side-dish/",
        "shareAs": "http://www.edamam.com/recipe/smashed-cauliflower-side-dish-494b4467c212816a27538059d7cef483/side+dish+recipes",
        "yield": 4,
        "ingredientLines": [
            "2 (16 ounce) packages frozen cauliflower",
            "1/4 cup butter",
            "1/4 teaspoon ground black pepper",
            "1/2 teaspoon salt",
            "1 clove garlic, minced (optional)"
        ],
        "ingredients": [
            {
                "text": "2 (16 ounce) packages frozen cauliflower",
                "quantity": 32,
                "measure": "ounce",
                "food": "frozen cauliflower",
                "weight": 907.18474,
                "foodCategory": "vegetables",
                "foodId": "food_aqej56mbnhd903amowl4xb4w67dm",
                "image": "https://www.edamam.com/food-img/639/639284ee89360fbfaa9fd1a284cd524a.jpg"
            },
            {
                "text": "1/4 cup butter",
                "quantity": 0.25,
                "measure": "cup",
                "food": "butter",
                "weight": 56.75,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "1/4 teaspoon ground black pepper",
                "quantity": 0.25,
                "measure": "teaspoon",
                "food": "black pepper",
                "weight": 0.575,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
                "text": "1/2 teaspoon salt",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "salt",
                "weight": 3,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "1 clove garlic, minced (optional)",
                "quantity": 1,
                "measure": "clove",
                "food": "garlic",
                "weight": 3,
                "foodCategory": "vegetables",
                "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            }
        ],
        "totalTime": 20,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    },
    {
        "label": "Baked Pineapple Side Dish",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/267/267cd4aa0ffd2c728b27d6153c4d7dc6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f838f35e2550976597f49dfe6e614d556f0b53169b678b3f1b418c76d467a996",
        "source": "Allrecipes",
        "url": "https://www.allrecipes.com/recipe/20904/baked-pineapple-side-dish/",
        "shareAs": "http://www.edamam.com/recipe/baked-pineapple-side-dish-f57083e088a31c6626afc4cc6efa96fb/side+dish+recipes",
        "yield": 6,
        "ingredientLines": [
            "1 cup white sugar",
            "1/4 pound butter, softened",
            "4 eggs, beaten",
            "1 (20 ounce) can pineapple",
            "5 slices bread, crusts removed and broken into crumbs"
        ],
        "ingredients": [
            {
                "text": "1 cup white sugar",
                "quantity": 1,
                "measure": "cup",
                "food": "white sugar",
                "weight": 200,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "1/4 pound butter, softened",
                "quantity": 0.25,
                "measure": "pound",
                "food": "butter",
                "weight": 113.3980925,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "4 eggs, beaten",
                "quantity": 4,
                "measure": "<unit>",
                "food": "eggs",
                "weight": 172,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "1 (20 ounce) can pineapple",
                "quantity": 20,
                "measure": "ounce",
                "food": "pineapple",
                "weight": 566.9904625,
                "foodCategory": "canned fruit",
                "foodId": "food_auq934abrnrrnramqxvg3b0r2m1i",
                "image": "https://www.edamam.com/food-img/b78/b7889d8b21051028e967e8fbc4cb9fe1.jpg"
            },
            {
                "text": "5 slices bread, crusts removed and broken into crumbs",
                "quantity": 5,
                "measure": "slice",
                "food": "bread",
                "weight": 145,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
                "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
            }
        ],
        "totalTime": 60,
        "cuisineType": [
            "caribbean"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "salad"
        ]
    }


,
    {
        "label": "Grilled Corn",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c15/c15fab1ab8ab64da54494519faef775a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=875b29690f97106842da08a697d08e8649933c9419cb69a9814c41ea342d8103",
        "source": "Epicurious",
        "url": "https://www.epicurious.com/recipes/food/views/grilled-corn-51238240",
        "shareAs": "http://www.edamam.com/recipe/grilled-corn-94c66143d2161856fe0d3491a77e96a1/grilling",
        "yield": 6,
        "ingredientLines": [
            "12 ears of corn",
            "Oil, for grilling"
        ],
        "ingredients": [
            {
                "text": "12 ears of corn",
                "quantity": 12,
                "measure": "<unit>",
                "food": "ears of corn",
                "weight": 1500,
                "foodCategory": "vegetables",
                "foodId": "food_aa49gmdair7ajnadhosexakllckj",
                "image": "https://www.edamam.com/food-img/89b/89b72c058fd6016ee3bd57e5729ce8e8.jpg"
            },
            {
                "text": "Oil, for grilling",
                "quantity": 0,
                "measure": null,
                "food": "Oil",
                "weight": 20.4,
                "foodCategory": "Oils",
                "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "south american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Grilled Green Onion Dip",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/afd/afd7f99e912ae59bcb7eb433b85a8e1c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a2305cda477c16ecb881ca9d84b3e365ee8124d6c3f39ce9534c330085921da1",
        "source": "Food52",
        "url": "https://food52.com/recipes/59020-grilled-green-onion-dip",
        "shareAs": "http://www.edamam.com/recipe/grilled-green-onion-dip-0afbc733ca510a9ac50b900f9d68093d/grilling",
        "yield": 4,
        "ingredientLines": [
            "3 to 4 green onions (more if you have doubts about your grilling abilities)",
            "3 garlic scapes",
            "1 1/2 cups sour cream",
            "1/2 teaspoon salt"
        ],
        "ingredients": [
            {
                "text": "3 to 4 green onions (more if you have doubts about your grilling abilities)",
                "quantity": 3.5,
                "measure": "<unit>",
                "food": "green onions",
                "weight": 48.61111111111112,
                "foodCategory": "vegetables",
                "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
                "text": "3 garlic scapes",
                "quantity": 3,
                "measure": "<unit>",
                "food": "garlic scapes",
                "weight": 72,
                "foodCategory": "vegetables",
                "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
                "text": "1 1/2 cups sour cream",
                "quantity": 1.5,
                "measure": "cup",
                "food": "sour cream",
                "weight": 345,
                "foodCategory": "Dairy",
                "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
                "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
            },
            {
                "text": "1/2 teaspoon salt",
                "quantity": 0.5,
                "measure": "teaspoon",
                "food": "salt",
                "weight": 3,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "condiments and sauces"
        ]
    },
    {
        "label": "Grilling: Naan Recipe",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/99f/99f54c58489eb11d68114f0ee57a75da.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fa0a7d4d3f897bcfe6ff6d691b6fc2839772f6d343426714cc687f26829a594d",
        "source": "Serious Eats",
        "url": "http://www.seriouseats.com/recipes/2008/09/grilling-naan-indian-bread.html",
        "shareAs": "http://www.edamam.com/recipe/grilling-naan-recipe-6e645c54f500e78f2a38def48fa88b9d/grilling",
        "yield": 10,
        "ingredientLines": [
            "1 (.25 ounce) package active dry yeast",
            "1 cup warm water",
            "1/4 cup white sugar",
            "3 tablespoons milk",
            "1 egg, beaten",
            "2 teaspoons salt",
            "4 1/2 cups bread flour",
            "1/4 cup butter, melted"
        ],
        "ingredients": [
            {
                "text": "1 (.25 ounce) package active dry yeast",
                "quantity": 0.25,
                "measure": "ounce",
                "food": "yeast",
                "weight": 7.08738078125,
                "foodCategory": "condiments and sauces",
                "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
                "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
            },
            {
                "text": "1 cup warm water",
                "quantity": 1,
                "measure": "cup",
                "food": "water",
                "weight": 236.5882365,
                "foodCategory": "water",
                "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
                "text": "1/4 cup white sugar",
                "quantity": 0.25,
                "measure": "cup",
                "food": "white sugar",
                "weight": 50,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "3 tablespoons milk",
                "quantity": 3,
                "measure": "tablespoon",
                "food": "milk",
                "weight": 45,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "1 egg, beaten",
                "quantity": 1,
                "measure": "<unit>",
                "food": "egg",
                "weight": 43,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
                "text": "2 teaspoons salt",
                "quantity": 2,
                "measure": "teaspoon",
                "food": "salt",
                "weight": 12,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "4 1/2 cups bread flour",
                "quantity": 4.5,
                "measure": "cup",
                "food": "bread flour",
                "weight": 616.5,
                "foodCategory": "grains",
                "foodId": "food_b5xk0gwa3clakbaap10sta82dgdk",
                "image": "https://www.edamam.com/food-img/132/1328fd505cdd3b75fbb8d7b58de5427c.jpg"
            },
            {
                "text": "1/4 cup butter, melted",
                "quantity": 0.25,
                "measure": "cup",
                "food": "butter",
                "weight": 56.75,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "indian"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Grilled Tomato and Corn Pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/570/570b9a543a88b944023e1f55523de06c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f2949a5ae5329bb90d457005880675dd770a12708e8dccf9b16c398bda6d10d5",
        "source": "Martha Stewart",
        "url": "http://www.marthastewart.com/1004441/grilled-tomato-and-corn-pasta",
        "shareAs": "http://www.edamam.com/recipe/grilled-tomato-and-corn-pasta-d6d7164040e74f6a726a382ad8afbf77/grilling",
        "yield": 6,
        "ingredientLines": [
            "Salt and pepper",
            "3/4 pound gemelli pasta",
            "1/4 cup olive oil, plus more for grilling",
            "1 1/2 pounds beefsteak tomatoes, halved",
            "3 ears corn",
            "1 cup ricotta",
            "1/2 cup torn fresh basil"
        ],
        "ingredients": [
            {
                "text": "Salt and pepper",
                "quantity": 0,
                "measure": null,
                "food": "Salt",
                "weight": 9.843496995,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "Salt and pepper",
                "quantity": 0,
                "measure": null,
                "food": "pepper",
                "weight": 4.9217484975,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
                "text": "3/4 pound gemelli pasta",
                "quantity": 0.75,
                "measure": "pound",
                "food": "pasta",
                "weight": 340.1942775,
                "foodCategory": "grains",
                "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
            },
            {
                "text": "1/4 cup olive oil, plus more for grilling",
                "quantity": 0.25,
                "measure": "cup",
                "food": "olive oil",
                "weight": 54,
                "foodCategory": "Oils",
                "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
                "text": "1 1/2 pounds beefsteak tomatoes, halved",
                "quantity": 1.5,
                "measure": "pound",
                "food": "beefsteak tomatoes",
                "weight": 680.388555,
                "foodCategory": "vegetables",
                "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
            },
            {
                "text": "3 ears corn",
                "quantity": 3,
                "measure": "ear",
                "food": "corn",
                "weight": 306,
                "foodCategory": "vegetables",
                "foodId": "food_b4wvre6b14mmkpaa22d8ybup8q51",
                "image": "https://www.edamam.com/food-img/eb5/eb5e11afb9f697720b2de2e0e0e27d8d.jpg"
            },
            {
                "text": "1 cup ricotta",
                "quantity": 1,
                "measure": "cup",
                "food": "ricotta",
                "weight": 248,
                "foodCategory": "Cheese",
                "foodId": "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
                "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
            },
            {
                "text": "1/2 cup torn fresh basil",
                "quantity": 0.5,
                "measure": "cup",
                "food": "fresh basil",
                "weight": 12,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
                "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
            }
        ],
        "totalTime": 30,
        "cuisineType": [
            "italian"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Grilled Pita Bread With Za'atar",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/775/7758c806476e74f59f96fc9253972966.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=80801d3be546f2833509b973b4c67b4983b4d5cae80745b6b4e8d033ea498f8f",
        "source": "Saveur",
        "url": "http://www.saveur.com/article/Recipes/Grilled-Pita-Bread-with-Zaatar",
        "shareAs": "http://www.edamam.com/recipe/grilled-pita-bread-with-za-atar-351b46a851d041f33ecb2a60e3c14e4b/grilling",
        "yield": 10,
        "ingredientLines": [
            "1 ¼-oz. package active dry yeast",
            "1 tbsp. sugar",
            "1 tbsp. kosher salt, plus more",
            "4 cups bread flour, plus more for kneading",
            "⅓ cup olive oil, plus more for greasing and grilling",
            "½ cup za'atar seasoning",
            "Juice and zest of 1 lemon"
        ],
        "ingredients": [
            {
                "text": "1 ¼-oz. package active dry yeast",
                "quantity": 1.25,
                "measure": "ounce",
                "food": "yeast",
                "weight": 35.43690390625,
                "foodCategory": "condiments and sauces",
                "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
                "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
            },
            {
                "text": "1 tbsp. sugar",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "sugar",
                "weight": 12.4999999997887,
                "foodCategory": "sugars",
                "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
                "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
            },
            {
                "text": "1 tbsp. kosher salt, plus more",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "kosher salt",
                "weight": 14.562499999753793,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "4 cups bread flour, plus more for kneading",
                "quantity": 4,
                "measure": "cup",
                "food": "bread flour",
                "weight": 548,
                "foodCategory": "grains",
                "foodId": "food_b5xk0gwa3clakbaap10sta82dgdk",
                "image": "https://www.edamam.com/food-img/132/1328fd505cdd3b75fbb8d7b58de5427c.jpg"
            },
            {
                "text": "⅓ cup olive oil, plus more for greasing and grilling",
                "quantity": 0.3333333333333333,
                "measure": "cup",
                "food": "olive oil",
                "weight": 72,
                "foodCategory": "Oils",
                "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
                "text": "½ cup za'atar seasoning",
                "quantity": 0.5,
                "measure": "cup",
                "food": "seasoning",
                "weight": 35.20000000059513,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
                "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
            },
            {
                "text": "Juice and zest of 1 lemon",
                "quantity": 1,
                "measure": "<unit>",
                "food": "lemon",
                "weight": 84,
                "foodCategory": "fruit",
                "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "mediterranean"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "bread"
        ]
    },
    {
        "label": "Pickles And Brie Grilled Cheese",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c2a/c2a3d50bd43c0d37811054465c0833a0.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=82dd03249f0e534713c4e2730c29c8aa310a956c453ecbb6d2fca38fe8bcd6a8",
        "source": "Joy the Baker",
        "url": "http://joythebaker.com/2013/01/pickles-and-brie-grilled-cheese/",
        "shareAs": "http://www.edamam.com/recipe/pickles-and-brie-grilled-cheese-761280aaee56d27ae9eb1d3f6ec9c674/grilling",
        "yield": 8,
        "ingredientLines": [
            "4 slices sourdough bread",
            "2 tablespoons whole grain mustard",
            "8 sliced bread and butter pickles",
            "1/3 cup pickled red onions",
            "4 ounces brie cheese",
            "butter for grilling"
        ],
        "ingredients": [
            {
                "text": "4 slices sourdough bread",
                "quantity": 4,
                "measure": "slice",
                "food": "sourdough bread",
                "weight": 556,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_ay7f6vxa98k5w2ahve8h1ardjn1w",
                "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
            },
            {
                "text": "2 tablespoons whole grain mustard",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "mustard",
                "weight": 31.1249999994738,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
                "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
            },
            {
                "text": "8 sliced bread and butter pickles",
                "quantity": 8,
                "measure": "<unit>",
                "food": "bread and butter pickles",
                "weight": 200,
                "foodCategory": "vegetables",
                "foodId": "food_bd06g1pbfdev9ja50blv6a5524ye",
                "image": "https://www.edamam.com/food-img/012/0121cf9d4ee772af299f450bf577a8d3.jpeg"
            },
            {
                "text": "1/3 cup pickled red onions",
                "quantity": 0.3333333333333333,
                "measure": "cup",
                "food": "red onions",
                "weight": 53.33333333333333,
                "foodCategory": "vegetables",
                "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
                "text": "4 ounces brie cheese",
                "quantity": 4,
                "measure": "ounce",
                "food": "brie cheese",
                "weight": 113.3980925,
                "foodCategory": "Cheese",
                "foodId": "food_a1s428jajky9n3a8klfq7bc6et3h",
                "image": "https://www.edamam.com/food-img/f53/f5340600239cf508f17b167265c6a1cf.jpg"
            },
            {
                "text": "butter for grilling",
                "quantity": 0,
                "measure": null,
                "food": "butter",
                "weight": 12.972447391326178,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "pancake"
        ]
    },
    {
        "label": "Cheesy French Toast With Ham & Grilled Vine Tomatoes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f80/f80c7981d5beeaeb4159c5b023743697.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d4bad0bd18234d18e9075a85848dedcb550712e739e01d4004b03baf889371c2",
        "source": "BBC Good Food",
        "url": "http://www.bbcgoodfood.com/recipes/73609/",
        "shareAs": "http://www.edamam.com/recipe/cheesy-french-toast-with-ham-grilled-vine-tomatoes-1eb404a712080640be5cb4ac312fec7b/grilling",
        "yield": 6,
        "ingredientLines": [
            "1.0 tbsp chopped chives",
            "watercress , to serve",
            "1 large baguette , thickly sliced",
            "4.0 tbsp milk",
            "140.0g Gruyère , grated",
            "250.0g cherry tomatoes on the vine",
            "250.0g sliced ham - about 25 slices (James used Serrano)",
            "knob of butter",
            "olive oil , for grilling",
            "5 eggs , beaten"
        ],
        "ingredients": [
            {
                "text": "1.0 tbsp chopped chives",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "chives",
                "weight": 3,
                "foodCategory": "vegetables",
                "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
                "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
            },
            {
                "text": "watercress , to serve",
                "quantity": 0,
                "measure": null,
                "food": "watercress",
                "weight": 0,
                "foodCategory": "vegetables",
                "foodId": "food_bqj8tvnav5gmivasnvvlea9fnhpv",
                "image": "https://www.edamam.com/food-img/5bd/5bde2c99df9b69be97523877ffd891b2.jpg"
            },
            {
                "text": "1 large baguette , thickly sliced",
                "quantity": 1,
                "measure": "<unit>",
                "food": "baguette",
                "weight": 375,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_bz1n7y8bupmgp0anvyqmda9dwufz",
                "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
            },
            {
                "text": "4.0 tbsp milk",
                "quantity": 4,
                "measure": "tablespoon",
                "food": "milk",
                "weight": 60,
                "foodCategory": "Milk",
                "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
            },
            {
                "text": "140.0g Gruyère , grated",
                "quantity": 140,
                "measure": "gram",
                "food": "Gruyère",
                "weight": 140,
                "foodCategory": "Cheese",
                "foodId": "food_al44s0sajaffq4afc73dlayimtt9",
                "image": "https://www.edamam.com/food-img/3d2/3d26895a8d68806fb21e441dae7e13d5.jpg"
            },
            {
                "text": "250.0g cherry tomatoes on the vine",
                "quantity": 250,
                "measure": "gram",
                "food": "cherry tomatoes",
                "weight": 250,
                "foodCategory": "vegetables",
                "foodId": "food_a30b0hpbvavginafe0tocbf6ymje",
                "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
            },
            {
                "text": "250.0g sliced ham - about 25 slices (James used Serrano)",
                "quantity": 250,
                "measure": "gram",
                "food": "Serrano",
                "weight": 250,
                "foodCategory": "vegetables",
                "foodId": "food_akybxs9atrgwona5nz3jgbo3vor5",
                "image": "https://www.edamam.com/food-img/e3d/e3d161d6cfe5ef287053aed5461738ba.jpg"
            },
            {
                "text": "knob of butter",
                "quantity": 1,
                "measure": "knob",
                "food": "butter",
                "weight": 28.4,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "olive oil , for grilling",
                "quantity": 0,
                "measure": null,
                "food": "olive oil",
                "weight": 17.97104,
                "foodCategory": "Oils",
                "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
                "text": "5 eggs , beaten",
                "quantity": 5,
                "measure": "<unit>",
                "food": "eggs",
                "weight": 215,
                "foodCategory": "Eggs",
                "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "french"
        ],
        "mealType": [
            "breakfast"
        ],
        "dishType": [
            "desserts"
        ]
    },
    {
        "label": "Grilled Sliced Brisket",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5c3/5c3c7c7d7311ffa51927ca8fc75347fb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=931c37badb163ecd036104bc4fe62260e25749589d718e899702f61228d6f4bf",
        "source": "Epicurious",
        "url": "https://www.epicurious.com/recipes/food/views/grilled-sliced-brisket-51239920",
        "shareAs": "http://www.edamam.com/recipe/grilled-sliced-brisket-8f397d6ecdcf6da6a0bb9ffb6c31646a/grilling",
        "yield": 4,
        "ingredientLines": [
            "1 1/2 pound brisket (from point or flat end)",
            "Vegetable oil (for grilling)"
        ],
        "ingredients": [
            {
                "text": "1 1/2 pound brisket (from point or flat end)",
                "quantity": 1.5,
                "measure": "pound",
                "food": "brisket",
                "weight": 680.388555,
                "foodCategory": "meats",
                "foodId": "food_akcl1lrbxwowcrai1l6xkbtvxhsn",
                "image": "https://www.edamam.com/food-img/e0d/e0dd59302a5bf4ff2d2e4797cdfe4160.jpg"
            },
            {
                "text": "Vegetable oil (for grilling)",
                "quantity": 0,
                "measure": null,
                "food": "Vegetable oil",
                "weight": 9.253284348,
                "foodCategory": "Oils",
                "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "south american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "main course"
        ]
    },
    {
        "label": "Ultimate Grilled Cheese Sandwich",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e8a/e8ad331492b0094d874350152626e495.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=22031e0457312651d8f44fdfcaecc45a65d6dbc373395322504fdb759fa56495",
        "source": "Pioneer Woman",
        "url": "http://thepioneerwoman.com/cooking/2014/01/ultimate-grilled-cheese-sandwich/",
        "shareAs": "http://www.edamam.com/recipe/ultimate-grilled-cheese-sandwich-3208da8aaccfadfeae52ece2cf7c1a07/grilling",
        "yield": 2,
        "ingredientLines": [
            "1 Tablespoon Butter",
            "1 whole Medium Onion, Halved And Sliced",
            "4 slices Bacon, Cut In Half",
            "2 Tablespoons Mayonnaise",
            "Several Dashes Hot Sauce (I Used Louisiana)",
            "2 slices Sandwich Bread",
            "3 whole Hard Boiled Eggs, Peeled And Sliced",
            "Salt And Pepper, to taste",
            "2 slices Cheese, Any Variety (I Used Swiss And Monterey Jack)",
            "More Butter, For Grilling"
        ],
        "ingredients": [
            {
                "text": "1 Tablespoon Butter",
                "quantity": 1,
                "measure": "tablespoon",
                "food": "Butter",
                "weight": 14.2,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
                "text": "1 whole Medium Onion, Halved And Sliced",
                "quantity": 1,
                "measure": "<unit>",
                "food": "Onion",
                "weight": 125,
                "foodCategory": "vegetables",
                "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
                "text": "4 slices Bacon, Cut In Half",
                "quantity": 4,
                "measure": "slice",
                "food": "Bacon",
                "weight": 116,
                "foodCategory": "cured meats",
                "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
                "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
            },
            {
                "text": "2 Tablespoons Mayonnaise",
                "quantity": 2,
                "measure": "tablespoon",
                "food": "Mayonnaise",
                "weight": 28.8749999995118,
                "foodCategory": "condiments and sauces",
                "foodId": "food_bu8t61zaplle7dbrzk81dbygq0qj",
                "image": "https://www.edamam.com/food-img/577/577308a0422357885c94cc9b5f1f1862.jpg"
            },
            {
                "text": "Several Dashes Hot Sauce (I Used Louisiana)",
                "quantity": 5,
                "measure": "dash",
                "food": "Hot Sauce",
                "weight": 2.9374999988080552,
                "foodCategory": "canned soup",
                "foodId": "food_a6201h1bu1m0tfbrvis6ma6nvhzv",
                "image": "https://www.edamam.com/food-img/946/946c38a4c278da4361d2615d653d685a.jpg"
            },
            {
                "text": "2 slices Sandwich Bread",
                "quantity": 2,
                "measure": "slice",
                "food": "Sandwich Bread",
                "weight": 58,
                "foodCategory": "bread, rolls and tortillas",
                "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
                "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
            },
            {
                "text": "3 whole Hard Boiled Eggs, Peeled And Sliced",
                "quantity": 3,
                "measure": "<unit>",
                "food": "Hard Boiled Eggs",
                "weight": 120,
                "foodCategory": "Eggs",
                "foodId": "food_a2y52zfbr22uq1ah5thnqac607ft",
                "image": "https://www.edamam.com/food-img/e54/e54c012fabed0f9cf211a817d1e23c5c.jpg"
            },
            {
                "text": "Salt And Pepper, to taste",
                "quantity": 0,
                "measure": null,
                "food": "Salt",
                "weight": 3.1260749999899184,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "Salt And Pepper, to taste",
                "quantity": 0,
                "measure": null,
                "food": "Pepper",
                "weight": 1.5630374999949592,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
                "text": "2 slices Cheese, Any Variety (I Used Swiss And Monterey Jack)",
                "quantity": 2,
                "measure": "slice",
                "food": "Monterey Jack",
                "weight": 56,
                "foodCategory": "Cheese",
                "foodId": "food_atp17pta7d5it2a80ct13ard6aj3",
                "image": "https://www.edamam.com/food-img/590/59062b9f8d57ebc7d831b7b7c231f726.jpg"
            },
            {
                "text": "More Butter, For Grilling",
                "quantity": 0,
                "measure": null,
                "food": "Butter",
                "weight": 7.085769999977148,
                "foodCategory": "Dairy",
                "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            }
        ],
        "totalTime": 0,
        "cuisineType": [
            "american"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "sandwiches"
        ]
    },
    {
        "label": "Jambon-Wrapped Grilled Endive",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/eff/eff2bcc41e1eeffc4e5c1ac268805f27.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLWVhc3QtMSJHMEUCIQDt8TOlYs1G%2FEtsob%2FxDrPThgmOd59cd19I8fnBtxdCzQIgZgcoQcWCgYNmnzB3uy6gqNhtiiqjTr5H3sCo%2FgKZaEcquQUIFRAAGgwxODcwMTcxNTA5ODYiDDhjYWRotzssjjxEPCqWBcfh4zq5sYSSLq8np8Y96WerAcdGs%2Fs4%2Fusfno9fqv%2Bphw2CmOPnb7VsI8sHSjYleEm%2BldJT1%2BJbvIuGDkE98jpkt7q2mSXw3k7%2F4kfPGmYYqLrIBMIBGICmj%2FXTcCnsr8Swy64K6nKCAdvucdvfKWx9CMH1Y66Mb5uDNyICh4XaZfHD%2BiPLRi9yIUsQftL67FacIYUZZrUV7ha9cvPrRZUJMasUs26JSMx%2FXEsRtCw7bC0Ealmi5FSNMrGGEYgM2j1ymhPJc1XjCaxVVyx1pV6KVMYwn0t4i4Z6B8YsRsR3z%2FFpoT%2FyGxSL6CLBKBxqeJemtwZLsJn6oFaXXMwxDVD2spI6ma0wSYkR9G8pXl5zbwRj80fxfjzvwDq0UE83FfsrKUcRItGE7klxFxEsZ5yhparPoDR%2Bt%2FbGarB8R%2FWaG2xZrMj7DvDsdOhuCmgZ9iGjJ7bePeBYkN3LWPs4%2BdCNuT3OacV1eXM0KQkwbZEuRqeGiGqJg0WIPd5wVhSYpdZgcu95j7XbEihtm%2Fs5H%2F%2FnwMd0D7ghHTJGj9FXtUFxFwR4zqPp%2BDWApSyyR7nut6%2F9SNg3ooBFUkXq8kfu5WW7TsUElaVWshLmLV%2F6AuoGz%2Bjg%2BBYcLvGA%2Bz5%2FGAdcXFKkopKZwXWyDdnwoBz0qm3XCvfcbej7TmJSnG018ouw%2BFyMkrrfgFHEFQDFz9ftLMt7tigKREmnxEe4%2Bnj%2Bs%2F6v6vPK0et67hkT6lFvHn3lWBXFnC7F8HBdqpo%2FBTBFhW%2FFFkOA1Tym95s6pAYNqxoZRmp2kV%2BmO0x3kFDNDq12Nu%2F11%2BgHx4n6bEJfzvpW8lQOdjmCYQhZ8yvoXVtTS2vBFiQltMV%2FULFAxJdI17UnrJXNKHrWMLa9zKcGOrEBzl9oeif2d3fIXHtYv5t7%2BXxDXPJo76xt3W9%2FgE0XF9YjKl0TD1Tt4jIe%2F%2BbuPQH2%2FnCRY86mkBf%2B%2FL8ePNRz%2FeqRPIIdcW96nMxWAD2NAFCfpQ8ECy30lTC88KqYvQXatKU6jmgfwEV4oFpLgf0%2BPlcV17EQ34Yc49XMoGiVBTr7x4M3nwyESyBbt97t9JP02k6T2XbVqdQuPWU%2Bwat4T8Y9cxVHrgoNgD2yHpBUE37t&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230902T123547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCYQLVSOC%2F20230902%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1c213fc04a7bcce4adda7a2bd9b2e5a8ca3d05d2e6b77fff3ef9a9d093f54bc2",
        "source": "French Revolution Food",
        "url": "http://www.frenchrevolutionfood.com/2010/07/french-in-a-flash-jambon-wrapped-grilled-endive/",
        "shareAs": "http://www.edamam.com/recipe/jambon-wrapped-grilled-endive-c65233205e724471971e2a5d006aca33/grilling",
        "yield": 3,
        "ingredientLines": [
            "3 belgian endive, halved longwise",
            "Salt and freshly cracked black pepper",
            "Extra virgin olive oil, for serving and grilling",
            "3 ounces (6 slices) jambon de bayonne or prosciutto",
            "Toasted walnut halves, for garnish",
            "Lemon wedges, for serving"
        ],
        "ingredients": [
            {
                "text": "3 belgian endive, halved longwise",
                "quantity": 3,
                "measure": "<unit>",
                "food": "belgian endive",
                "weight": 159,
                "foodCategory": "vegetables",
                "foodId": "food_a62ic8jbisg999a11qxfxaf5ibav",
                "image": "https://www.edamam.com/food-img/684/6842d6cae4c640e786fd5b5ec374c292.jpg"
            },
            {
                "text": "Salt and freshly cracked black pepper",
                "quantity": 0,
                "measure": null,
                "food": "Salt",
                "weight": 1.50629141625,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                "text": "Salt and freshly cracked black pepper",
                "quantity": 0,
                "measure": null,
                "food": "black pepper",
                "weight": 0.753145708125,
                "foodCategory": "Condiments and sauces",
                "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
                "text": "Extra virgin olive oil, for serving and grilling",
                "quantity": 0,
                "measure": null,
                "food": "Extra virgin olive oil",
                "weight": 3.4142605434999997,
                "foodCategory": "Oils",
                "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
                "text": "3 ounces (6 slices) jambon de bayonne or prosciutto",
                "quantity": 3,
                "measure": "ounce",
                "food": "prosciutto",
                "weight": 85.048569375,
                "foodCategory": "cured meats",
                "foodId": "food_au1dzjfa990c8yap79k4nawq65y9",
                "image": "https://www.edamam.com/food-img/802/8029e7b80cce92694182b85a1ebd1822.jpg"
            },
            {
                "text": "Toasted walnut halves, for garnish",
                "quantity": 0,
                "measure": null,
                "food": "walnut halves",
                "weight": 0,
                "foodCategory": "plant-based protein",
                "foodId": "food_acqkmojaw4fltga9jad8mb85u9z2",
                "image": "https://www.edamam.com/food-img/624/6243d320d94b15ebaece2634cc5b40c5.jpg"
            },
            {
                "text": "Lemon wedges, for serving",
                "quantity": 1,
                "measure": "wedge",
                "food": "Lemon",
                "weight": 7,
                "foodCategory": "fruit",
                "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
            }
        ],
        "totalTime": 41,
        "cuisineType": [
            "nordic"
        ],
        "mealType": [
            "lunch/dinner"
        ],
        "dishType": [
            "starter"
        ]
    }
]

module.exports = oneForAll