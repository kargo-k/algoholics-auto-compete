lines = ARGF.read.split("\n")
num = lines[0].to_i
factors = []

while num > 2 do 
    for i in 2..num
        if num % i == 0
            factors << i
            num = num / i
            break
        end
    end
end

puts factors.reverse.join("*")
