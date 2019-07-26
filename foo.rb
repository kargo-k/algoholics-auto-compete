lines = ARGF.read.split("\n")
lines.each do |line|
    # puts line
end

def sum(lines)
    lines.map! do |l|
        l.to_i
    end
    lines.sum
    # puts lines.sum
end

puts sum(lines)