def roman_numbers
  {
    1000 => "M",
    900 => "CM",
    500 => "D",
    400 => "CD",
    100 => "C",
    90 => "XC",
    50 => "L",
    40 => "XL",
    10 => "X",
    9 => "IX",
    5 => "V",
    4 => "IV",
    1 => "I",
  }
end

# convert a given number to roman chars
# return it back
def convert_to_roman(number)
  roman = ""
  roman_numbers.each do |key, value|
    while number >= key
      roman += value
      number -= key
    end
  end
  roman
end

p convert_to_roman(1990)
