# it will returns the floor value
def sqrt(x):
    i = 1
    while i * i <= x:
        i *= 2
    y = 0
    while i > 0:
        if (y + i) * (y + i) <= x:
            y += i
        i //= 2
    return y


# it will returns list of boolean whether their index is prime or not
def get_all_primality(n):
    result = [True] * (n + 1)
    result[0] = result[1] = False
    for i in range(sqrt(n) + 1):
        if result[i]:
            for j in range(i * i, len(result), i):
                result[j] = False
    return result


if __name__ == '__main__':
    limit = 100000000
    Total = 0
    primality_list = get_all_primality(limit + 1)


    def is_prime_generating(x):
        for d in range(2, sqrt(x) + 1):
            if x % d == 0 and not primality_list[d + x // d]:
                return False
        return True


    for num in range(limit + 1):
        if primality_list[num + 1] and is_prime_generating(num):
            Total += num
    print(Total)
