num = ARGF.read.split("\n")
num = num[0].to_i
lines = Array.new(num, "")

for r in 1..num
    str = ""
    for c in 1..r
        str += c.to_s
    end
    str = str + str[0..-2].reverse 
    lines[r] = str
end

puts lines
for i in 2..num
    puts lines[-i]
end