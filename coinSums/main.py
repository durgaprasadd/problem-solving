from typing import List, Any

coins = [1, 2, 5, 10, 20, 50, 100, 200]  # in p


def get_possible_coin_sums(total_sum):
    """
    :type total_sum:int
    """
    coin_sums: List[int] = []
    for coin in coins:
        if coin == 1:
            coin_sums = [1] * (total_sum + 1)  # for 1p coin_sums
            continue
        for coin_sum in range(total_sum + 1):
            if coin_sum >= coin:
                coin_sums[coin_sum] += coin_sums[coin_sum - coin]
    return coin_sums


if __name__ == '__main__':
    coin_sums = get_possible_coin_sums(200)
    print(coin_sums[-1])
