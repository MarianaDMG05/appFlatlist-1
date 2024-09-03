import { useState} from "react";
import { View } from "react-native";
import {Card, Text} from "react-native-paper";
import Produtos from "../data/Produtos";

const getProdutoPotId = (id) => { return Produtos.find(p=> p.id ==id)
}

export default ({route, navigation}) => {
    const[ produto, setProduto] = useState(getProdutoPotId(route.params.id))

    return(
        <View>
            <Card>
                <Card.Cover source={{uri : produto.urlImagem}}/>
                <Card.Title title={produto.titulo} />
                <Card.Content>
                    <Text variant="bodyMedium">{produto.descricao}</Text>
                </Card.Content>
            </Card>
        </View>
    )
}