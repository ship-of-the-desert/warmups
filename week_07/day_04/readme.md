# Stickers Shop

![](https://ae01.alicdn.com/kf/HTB1lr7RXwZC2uNjSZFnq6yxZpXaD/40-Pieces-set-SQL-Programming-Geek-Hacker-Bitcoin-developer-Language-APP-Logo-Funny-Laptop-Phone-waterproof.jpg_640x640.jpg)

We want to build a STICKERS SHOP to sell our awesome stickers!

- Build a `Shop` class
- Create an `add_sticker` method that adds a new sticker object to the shop's array
    - Each sticker object should have a stock, name, price
- Create an `order` method that takes a name and an amount and subtracts the number of ordered stickers from that sticker's stock.
    - Let `order` print out the total price, including a 0.05 tax rate.
    - offer discounts for ordering a lot of stickers at once
        - if ordered amount is above 50 offer a 20% sale, if above 100 offer a 50% sale
    - If the user inputs "cancel", don't subtract the stickers from the stock.
    - If the user inputs "okay", subtract the amount of stickers from the stock, and add the amount of money into the `Shop`'s balance.
    - If the ordered amount is above the current stock, print "sorry out of stock"
- Create a `sale` method that takes a percentage as an argument and subtracts the right amount of money from all items in the shop

