lines = ARGF.read.split("\n")
# lines.each do |line|
#     puts line
# end

h = {}

51.times do 
    h[lines.shift] = true
end

results = Array.new(lines.length, true)

lines.each_with_index do |word, idx|
    w = word.split("")
    for i in 0..w.length-2
        pair = w[i..i+1].join
        if !h.keys.include?(pair)
            results[idx] = false
        end
    end
end

puts results
