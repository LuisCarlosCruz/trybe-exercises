# Calcule a média aritmética dos valores contidos em uma lista.

def media_aritmetica(*elements):
    list = []

    for num in elements:
        list.append(num)

    length_lista = len(list)

    return sum(list) / length_lista


print(media_aritmetica(1, 2, 3, 4))
