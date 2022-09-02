# Crie uma função que receba uma lista de nomes e retorne
# o nome com a maior quantidade de caracteres. Por exemplo,
# para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".

def maior_name(nomes):
    length = 0
    maior_name = ""

    for n in nomes:
        tam = len(n)
        if tam > length:
            length = tam
            maior_name = n

    return maior_name


print(maior_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
