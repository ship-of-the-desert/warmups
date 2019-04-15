
class Shop
  def initialize
    @all_items = []
    @balance = 0
  end

  def add_sticker(sticker)
    @all_items.push(sticker)
  end

  def order(name, amount)
    @all_items.each do |sticker|
      if sticker[:name] == name
        if sticker[:stock] <= amount
          total = sticker[:price] * amount
          p "The total amount is #{total}, would you like to confirm?"
          confirm = gets.chomp!
          if confirm == "okay"
            sticker[:stock] -= amount
            @balance += total
          elsif confirm == "cancel"
            p "Goodbye"
            break
          end
        else
          puts "sorry, we're out of stock"
          break
        end
      else
        puts "we don't carry this items"
        break
      end
    end
  end

  def balance
    p balance
  end

  def items
    p @all_items
  end
end

shop = Shop.new
shop.add_sticker({name: "WDI", price: 10, stock: 50})
shop.add_sticker({name: "Marvel", price: 15, stock: 100})

puts "Hi, welcome to my awesome shop"
puts "Which sticker would you like?"
name = gets.chomp!
puts "How many stickers would you like?"
amount = gets.chomp.to_i

shop.order(name, amount)
shop.items
# def calculate_tax(total)
#   rate = 0.05
#   total_price = (rate * total) + total
# end

# def calculate_price(amount)
#   if amount < 50
#     total = amount * 15
#   elsif amount >= 50 && amount < 100
#     total = amount * 10
#   else
#     total = amount * 5
#   end
#   calculate_tax(total)
# end

# puts "You ordered #{amount} stickers and the total is #{calculate_price(amount)}"
