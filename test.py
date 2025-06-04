def remove_duplicates(arr):
    if len(arr) <= 1:
        return arr

    n = len(arr)
    i = 0

    while i < n:
        j = i + 1
        while j < n:
            if arr[i] == arr[j]:
                # Удаляем повторяющийся элемент
                arr.pop(j)
                n -= 1
            else:
                j += 1
        i += 1

    return arr

numbers = [5, 2, 8, 2, 3, 1, 6, 5, 4, 7, 1]  # Заданный массив чисел
unique_numbers = remove_duplicates(numbers)  # Удаляем повторяющиеся элементы

print("Массив без повторяющихся элементов:", unique_numbers)
