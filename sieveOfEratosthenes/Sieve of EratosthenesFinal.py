#version 1.0 
#2016/06

not_prime_list = list()

print(2)
begin = 2
next_num = 3

for i in range (98):
        even_int = begin*2
        not_prime_list.append(even_int)
        begin = begin+1

for i in range(98):
    
    if next_num in not_prime_list:
        next_num = next_num + 1

    else:
        prime = next_num
        print(prime)
        next_num = next_num + 1
        begin = 2
        for i in range (98):
                new_int = begin*prime
                not_prime_list.append(new_int)
                begin = begin + 1