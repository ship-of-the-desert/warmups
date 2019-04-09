## Solution

$words = ["SCORPION", "FLOGGING", "CROPPERS", "MIGRAINE", "FOOTNOTE", "REFINERY", "VAULTING", "CONTINUE", "PROTECTS", "DESCENTS"]

def check_word(word)
  random = $word[Random.rand(0...$words.length)]
  win = false
  result = 0
  word.chars.length.times do |i|
    result += 1 if random.chars[i] == word.chars[i]
  end
  if word == random
    p "You Win"
    win = true
  else
    p "#{result}/#{word.length} correct"
  end
  return win
end

def check_win()
  puts $words
  tries = 4
  while (tries > 0)
    p "Guess (#{tries} left)? "
    word = gets.chomp!.upcase!
    break if check_word(word)
    tries -= 1
  end
  p "Access Denied" if tries == 0
end

check_win()

### Team One

words = ["SCORPION", "FLOGGING", "CROPPERS", "MIGRAINE", "FOOTNOTE", "REFINERY", "VAULTING", "CONTINUE", "PROTECTS",
         "DESCENTS"]

word = words.sample
# p word
attempts = 0 #track attempts
answers = false #track correct answer
p words

while attempts < 4 && answers == false
  p "Guess (#{4 - attempts} left)?"
  input = gets.chomp
  input.upcase!
  common = 0 #track common letters
  i = 0
  until i == word.length #compare two words
    if word[i] == input[i]
      common += 1
    end
    i += 1
  end
  p "correct letters #{common}/8"
  if common == word.length
    answers = true
    p "You won! the correct word is #{word}"
  end
  attempts += 1
end

if answers == false
  p "You lost, the correct word was #{word}"
end

## Team Two

reference_word = "CROPPERS"
array = ["SCORPION", "FLOGGING", "CROPPERS", "MIGRAINE", "FOOTNOTE", "REFINERY", "VAULTING", "CONTINUE", "PROTECTS", "DESCENTS"]

result = 0

def copure_word(reference_word, chosen_word)
  result = 0
  chosen_word = chosen_word.split("")
  reference_word = reference_word.split("")
  for i in (0..chosen_word.length - 1)
    if chosen_word[i] == reference_word[i]
      result = result + 1
    end
  end
  return result
end

for i in (0..3)
  p array
  chosen_word = gets.chomp
  result = copure_word(reference_word, chosen_word)
  if result == 8
    p "correct"
    break
  end
  p result
end
