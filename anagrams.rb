require 'pry'
lines = ARGF.read.split("\n")
lines.each do |line|
    # puts line
end

word = lines.shift
word = word.split("")
h = {}
word.map do |l|
    h[l] = word.count(l)
end

def anagrams(words, h)
    results = []
    words.each do |word|
        newword = word.split("")
        w = {}
        newword.map do |l|
            w[l] = newword.count(l)
        end
        if w == h
            results << w
        end
    end
    
    results.length
end

anagrams(lines, h)