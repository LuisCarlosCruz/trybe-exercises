from eletrodomestico.eletrodomestico import Eletrodomestico


class Geladeira(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)

    def comprar_geladeira(self, valor):
        if valor < self.preco:
            return "valor insuficiente para efetuar a compra"
        else:
            return "compra realizada com sucesso"


geladeira = Geladeira("Azul", 1000, 220, 84)

print(geladeira.comprar_geladeira(83))
