# Calcule a média aritmética dos valores contidos em uma lista.

from cv2 import minEnclosingCircle


def media_aritmetica(*elements):
    list = []
    for num in elements:
        list.append(num)

    length_lista = len(list)
    return length_lista


print(media_aritmetica(1, 2, 3))
