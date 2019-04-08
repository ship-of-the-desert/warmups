words = "listen"
arr = ["enlists", "google", "inlets", "banana", "istlen"]

arr.each do |word|
  if word.split("").sort.join == words.split("").sort.join
    puts word
  end
end

# Another way

for word in arr
  if word.chars.sort.join == words.chars.sort.join
    puts word
  end
end

# Another way that gives the index

arr.length.times do |index|
  word = arr[index]
  if word.each_char.sort.join == words.each_char.sort.join
    puts word, index
  end
end
