import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    ScrollView,
    Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Article= (props) => {

    const articleImage = () => (
        <View style={{position:'relative'}}>
            <Image
                resizeMode={"cover"}
                style={styles.articleImage}
                source={{uri:`https://loremflickr.com/400/400/dog`}}
            />
            <Text style={styles.priceTag}>
                $ {props.ArticleData.price}
            </Text>
        </View>
    )

    const articleText = () => (
        <View>
            <Text style={styles.articleTitle}>
                {props.ArticleData.title}
            </Text>
            <Text style={styles.articleDescription}>
                {props.ArticleData.description}
            </Text>
        </View>
    )

    const ownerNfo = () => (
        <View style={styles.ownerNfo}> 
            <Text>Contact the owner of this article to the following mail:</Text>
       
            <Icon.Button
                name="envelope-o"
                color="#00ADA9"
                backgroundColor="#ffffff"
                onPress={()=> openEmail()}
            >
                <Text
                    style={{fontSize:20}}
                >{props.ArticleData.email}</Text>
            </Icon.Button>
        </View>
    )

    const openEmail = () => {
        Linking.openURL(`mailto://${props.ArticleData.email}
        &subject=Regarding ${props.ArticleData.title}`)
    }

    return (
        <ScrollView style={styles.articleContainer}>
            {articleImage(props)}
            {articleText()}
            {ownerNfo()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    articleContainer: {
        padding:10
    },
    articleImage:{
        width:'100%',
        height: 250
    },
    priceTag:{
        position:'absolute',
        bottom:0,
        backgroundColor: '#FF6444',
        padding:10,
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'Roboto-Black',
    },
    articleTitle:{
        fontSize: 30,
        color: '#474143',
        fontFamily: 'Roboto-Black',
        marginTop: 20,
    },
    articleDescription:{
        marginTop: 20,
        fontSize: 18,
    },
    ownerNfo: {
        marginTop: 30,
        paddingTop: 10,
        borderTopWidth:1,
        borderTopColor:'lightgrey'
    }

 })

export default Article;