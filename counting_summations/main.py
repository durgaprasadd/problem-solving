def get_counting_summations(total_sum: int):
    counting_summations: list[int] = []
    for count in range(1, total_sum):
        if count == 1:
            counting_summations = [1] * (total_sum + 1)  # for 1p coin_sums
            continue
        for counting_summation in range(total_sum + 1):
            if counting_summation >= count:
                counting_summations[counting_summation] += counting_summations[counting_summation - count]
    return counting_summations


if __name__ == '__main__':
    counting_summations = get_counting_summations(100)
    print(counting_summations[-1])
